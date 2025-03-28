import {Link, useNavigate} from "react-router-dom"
import logo from "../assets/logo_presentacion.svg"
import "../styles/presentationStyle.css"

const Presentation = () => {
    const navigate = useNavigate()

    const handleGenericCase = () => {
        navigate("/genericCase") // Navega a la vista GenericCase
    }

    const handleRealExample = () => {
        navigate("/realCase") // Navega a la vista RealCase
    }

    return (
        <div className="flex-container presentationCont">

            {/* Sección superior con logo y fondo azul */}
            <div className="container presentation-header mt-5">
                <img src={logo} alt="CarbonTrack360 Logo" className="logo-img mt-4"/>
                <h1 className="presentation-title mt-5 mb-4">
                    CALCULADORA DE EMISIONES EN EL CICLO DE VIDA DE LA INFRAESTRUCTURA
                </h1>
            </div>
            <div className="container presentation-exp">
                <section>
                    <p>
                        <strong>¿Cuál es el verdadero impacto ambiental del transporte?</strong><br/>
                        El transporte aéreo enfrenta el reto de reducir sus emisiones de GEI, pero ¿es realmente el
                        mayor responsable? Para verlo con perspectiva, esta calculadora analiza todo el ciclo de vida de
                        las infraestructuras, comparando las emisiones del avión y la Alta Velocidad en rutas de larga
                        distancia.

                    </p>
                    <p>
                        <strong>Explora, compara y saca tus propias conclusiones.</strong>
                    </p>
                    <p>
                        (<strong>Nota:</strong> El análisis excluye la carretera, pese a que su operación supone un alto
                        porcentaje (30,1 %) de las emisiones en España, ya que su infraestructura tiene otros usos).
                    </p>
                    <p>
                        Consulta <Link to="/hypothesis" className="presentation-custom-link">aquí</Link> la <strong>metodología
                        y
                        fuentes</strong> utilizadas.
                    </p>
                </section>
                <section className="text-center mt-5">
                    <h2 className="presentation-subtitle mb-4">¿Desea analizar una simulación o un ejemplo real?</h2>

                    <div className="d-flex gap-5 justify-content-center">
                        <button onClick={handleGenericCase} className="btn btn-presentation">
                            SIMULACIÓN
                        </button>
                        <button onClick={handleRealExample} className="btn btn-presentation">
                            CASO REAL
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Presentation

