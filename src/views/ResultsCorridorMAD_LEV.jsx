import { useContext } from "react";
import { useTranslation, Trans } from "react-i18next";
import { CalculatorContext } from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";
import "../styles/resultsCorridorMAD_LEVStyle.css";
import Breadcrumb from "../components/Breadcrumb.jsx";
import GraficoEmisionAcumPax from "../components/GraficoEmisionAcumPax.jsx";
import { Link } from "react-router-dom";

const ResultsCorridorMAD_LEV = () => {
    const { corridors } = useContext(CalculatorContext);
    const { t } = useTranslation('resultsCorridorMAD_LEV');

    const breadcrumbItems = [
        { label: t('breadcrumb.home'), link: "/", className: "home" },
        { label: t('breadcrumb.realCase'), link: "/realCase", className: "intermediate" },
        { label: t('breadcrumb.current'), active: true, className: "current" },
    ];

    return (
        <div className="container corridorMADLEVWrapper">
            <Breadcrumb items={breadcrumbItems} />
            <div className="container corridorMADLEVCont">
                <h1 className="title-corridorMADLEV">{t('title')}</h1>

                <section className="mt-5 mb-5 corridorMADLEVExplanation">
                    <p>{t('paragraphs.p1')}</p>
                    <p>
                        <Trans
                            i18nKey="resultsCorridorMAD_LEV:paragraphs.p2"
                            components={{
                                strong: <strong />,
                                sub: <sub />
                            }}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="resultsCorridorMAD_LEV:paragraphs.p3"
                            components={{
                                strong: <strong />,
                                sub: <sub />
                            }}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="resultsCorridorMAD_LEV:paragraphs.p4"
                            components={{
                                strong: <strong />,
                                sub: <sub />
                            }}
                        />
                    </p>
                </section>

                <section>
                    <GraficoAnalisisReal backendData={corridors.filter(c => c.nombre === "Madrid-Levante")} />
                </section>

                <section className="mt-5">
                    <GraficoEmisionAcumPax data={corridors.filter(c => c.nombre === "Madrid-Levante")} />
                </section>

                <section className="corridorMADLEVExplanation mt-5">
                    <Link to="/hypotheses" className="presentation-custom-link">
                        {t('links.hypotheses')}
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default ResultsCorridorMAD_LEV;