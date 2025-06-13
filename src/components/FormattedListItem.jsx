import React from "react"
import DOMPurify from "dompurify"

const FormattedListItem = ({ content }) => {
    // Primero sanitizamos el HTML con DOMPurify
    const sanitizedHtml = DOMPurify.sanitize(content, {
        ALLOWED_TAGS: ["strong", "i", "sub", "sup"],
        ALLOWED_ATTR: [], // No permitimos atributos
    })

    // Función para convertir el HTML sanitizado en componentes React
    const createMarkup = (htmlString) => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(htmlString, "text/html")
        const body = doc.body

        // Función recursiva para convertir nodos DOM a elementos React
        const convertNodeToReact = (node, index) => {
            if (node.nodeType === Node.TEXT_NODE) {
                return node.textContent
            }

            if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node
                const tagName = element.tagName.toLowerCase()
                const children = []

                // Convertir hijos recursivamente
                element.childNodes.forEach((child, childIndex) => {
                    const reactChild = convertNodeToReact(child, childIndex)
                    if (reactChild !== null) {
                        children.push(reactChild)
                    }
                })

                // Crear el elemento React correspondiente con keys estables
                switch (tagName) {
                    case "strong":
                        return <strong key={`strong-${index}`}>{children}</strong>
                    case "i":
                        return <i key={`i-${index}`}>{children}</i>
                    case "sub":
                        return <sub key={`sub-${index}`}>{children}</sub>
                    case "sup":
                        return <sup key={`sup-${index}`}>{children}</sup>
                    default:
                        return <React.Fragment key={`frag-${index}`}>{children}</React.Fragment>
                }
            }

            return null
        }

        // Convertir todos los nodos hijos del body
        const reactElements = []
        body.childNodes.forEach((child, index) => {
            const reactChild = convertNodeToReact(child, index)
            if (reactChild !== null) {
                reactElements.push(reactChild)
            }
        })

        return <>{reactElements}</>
    }

    return <li>{createMarkup(sanitizedHtml)}</li>
}

export default FormattedListItem