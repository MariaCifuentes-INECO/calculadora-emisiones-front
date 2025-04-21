import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";
import "../styles/resultsCorridorMAD_BCNStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import GraficoEmisionAcumPax from "../components/GraficoEmisionAcumPax.jsx";
import {Link} from "react-router-dom";
import {Trans, useTranslation} from "react-i18next";


const ResultsCorridorMAD_BCN = () => {

    const {corridors} = useContext(CalculatorContext);
    const { t } = useTranslation('resultsCorridorMAD_BCN');

    const breadcrumbItems = [
        { label: t('breadcrumb.home'), link: "/", className: "home" },
        { label: t('breadcrumb.realCase'), link: "/realCase", className: "intermediate" },
        { label: t('breadcrumb.current'), active: true, className: "current" },
    ];


    return (
        <div className="container corridorMADBCNWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container corridorMADBCNCont">
                <h1 className="title-corridorMADBCN">{t('title')}</h1>
                <section className="mt-5 mb-5 corridorMADBCNExplanation">
                    <p>{t('paragraphs.p1')}</p>
                    <p>
                        <Trans
                            i18nKey="resultsCorridorMAD_BCN:paragraphs.p2"
                            components={{
                                strong: <strong/>,
                                sub: <sub/>
                            }}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="resultsCorridorMAD_BCN:paragraphs.p3"
                            components={{
                                strong: <strong/>,
                                sub: <sub/>
                            }}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="resultsCorridorMAD_BCN:paragraphs.p4"
                            components={{
                                strong: <strong/>,
                                sub: <sub/>
                            }}
                        />
                    </p>
                </section>
                <section>
                    <GraficoAnalisisReal backendData={corridors.filter(c => c.nombre === "Madrid-Barcelona")}/>
                </section>
                <section className="mt-5">
                    <GraficoEmisionAcumPax data={corridors.filter(c => c.nombre === "Madrid-Barcelona")}/>
                </section>
                <section className="corridorMADBCNExplanation mt-5">
                    <Link to="/hypotheses" className="presentation-custom-link">{t('links.hypotheses')}</Link>
                </section>
            </div>
        </div>
    );
};

export default ResultsCorridorMAD_BCN;