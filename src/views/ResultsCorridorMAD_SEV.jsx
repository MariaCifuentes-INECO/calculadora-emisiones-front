import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";
import "../styles/resultsCorridorMAD_SEVStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import GraficoEmisionAcumPax from "../components/GraficoEmisionAcumPax.jsx";
import {Link} from "react-router-dom";
import {Trans, useTranslation} from "react-i18next";


const ResultsCorridorMAD_SEV = () => {

    const {corridors} = useContext(CalculatorContext);
    const { t } = useTranslation('resultsCorridorMAD_SEV');

    const breadcrumbItems = [
        { label: t('breadcrumb.home'), link: "/", className: "home" },
        { label: t('breadcrumb.realCase'), link: "/realCase", className: "intermediate" },
        { label: t('breadcrumb.current'), active: true, className: "current" },
    ];


    return (
        <div className="container corridorMADSEVWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container corridorMADSEVCont">
                <h1 className="title-corridorMADSEV">{t('title')}</h1>
                <section className="mt-5 mb-5 corridorMADSEVExplanation">
                    <p>{t('paragraphs.p1')}</p>
                    <p>
                        <Trans
                            i18nKey="resultsCorridorMAD_SEV:paragraphs.p2"
                            components={{
                                strong: <strong/>,
                                sub: <sub/>
                            }}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="resultsCorridorMAD_SEV:paragraphs.p3"
                            components={{
                                strong: <strong/>,
                                sub: <sub/>
                            }}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="resultsCorridorMAD_SEV:paragraphs.p4"
                            components={{
                                strong: <strong/>,
                                sub: <sub/>
                            }}
                        />
                    </p>
                </section>
                <section>
                    <GraficoAnalisisReal backendData={corridors.filter(c => c.nombre === "Madrid-Sevilla")}/>
                </section>

                <section className="mt-5">
                    <GraficoEmisionAcumPax data={corridors.filter(c => c.nombre === "Madrid-Sevilla")}/>
                </section>

                <section className="corridorMADSEVExplanation mt-5">
                    <Link to="/hypotheses" className="presentation-custom-link">{t('links.hypotheses')}</Link>
                </section>
            </div>
        </div>
    );
};

export default ResultsCorridorMAD_SEV;