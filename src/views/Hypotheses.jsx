import { Trans, useTranslation } from "react-i18next"
import Breadcrumb from "../components/Breadcrumb.jsx"
import "../styles/hypothesisStyle.css"

const Hypotheses = () => {
    const { t } = useTranslation("hypotheses")

    const breadcrumbItems = [
        { label: t("breadcrumb.home"), link: "/", className: "home" },
        { label: t("breadcrumb.current"), active: true, className: "current" },
    ]

    return (
        <div className="container hypothesisWrapper">
            <Breadcrumb items={breadcrumbItems} />
            <div className="container hypothesisNetworkCont">
                <h1 className="title-hypothesis">{t("title")}</h1>
                <section className="mt-5 mb-2 hypothesisExplanation">
                    <p>{t("paragraphs.p1")}</p>
                    <p>{t("paragraphs.p2")}</p>
                    <p>{t("paragraphs.p3")}</p>

                    <p>
                        <Trans
                            i18nKey="hypotheses:paragraphs.p4"
                            components={{
                                italic: <i style={{ fontStyle: "italic" }} />,
                            }}
                        />
                    </p>

                    <ul>
                        {t("lists.airport", { returnObjects: true }).map((item, index) => (
                            <li key={`airport-${index}`} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>

                    <p>{t("paragraphs.p5")}</p>
                    <ul>
                        {t("lists.rail", { returnObjects: true }).map((item, index) => (
                            <li key={`rail-${index}`} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>

                    <p>{t("paragraphs.p6")}</p>
                    <p>{t("paragraphs.p7")}</p>
                    <ul>
                        {t("lists.operation", { returnObjects: true }).map((item, index) => (
                            <li key={`operation-${index}`} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Hypotheses
