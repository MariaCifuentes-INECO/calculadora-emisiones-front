import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";
import "../styles/resultsCompleteNetworkStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import GraficoEmisionAcumPax from "../components/GraficoEmisionAcumPax.jsx";
import {Link} from "react-router-dom";
import {Trans, useTranslation} from "react-i18next";


const ResultsCompleteNetwork = () => {

    const {completeNetwork} = useContext(CalculatorContext);
    const { t } = useTranslation('resultsCompleteNetwork');

    const breadcrumbItems = [
        { label: t('breadcrumb.home'), link: "/", className: "home" },
        { label: t('breadcrumb.realCase'), link: "/realCase", className: "intermediate" },
        { label: t('breadcrumb.current'), active: true, className: "current" },
    ];

    return (
        <div className="container completeNetworkWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container completeNetworkCont">
                <h1 className="title-completeNetwork">{t('title')}</h1>
                <section className="mt-5 mb-5 completeNetworkExplanation">
                    <p>{t('paragraphs.p1')}</p>
                    <p>{t('paragraphs.p2')}</p>
                    <ul>
                        {t('lists.results', {returnObjects: true}).map((item, index) => (
                            <li key={`results-${index}`} dangerouslySetInnerHTML={{__html: item}}/>
                        ))}
                    </ul>
                </section>
                <section>
                    <GraficoAnalisisReal backendData={completeNetwork}/>
                </section>
                <section className="mt-5 mb-5 completeNetworkExplanation">
                    <p>
                        <Trans
                            i18nKey="resultsCompleteNetwork:paragraphs.p3"
                            components={{
                                strong: <strong/>,
                                sub: <sub/>
                            }}
                        />
                    </p>
                </section>
                <section className="mt-5">
                    <GraficoEmisionAcumPax data={completeNetwork}/>
                </section>
                <section className="mt-5 completeNetworkExplanation">
                    <p>
                        <Trans
                            i18nKey="resultsCompleteNetwork:paragraphs.p4"
                            components={{
                                strong: <strong/>,
                                sub: <sub/>
                            }}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="resultsCompleteNetwork:paragraphs.p5"
                            components={{
                                strong: <strong/>,
                                sub: <sub/>
                            }}
                        />
                    </p>
                </section>
                <section className="completeNetworkExplanation">
                    <Link to="/hypotheses" className="presentation-custom-link">{t('links.hypotheses')}</Link>
                </section>
            </div>
        </div>
    );
};

export default ResultsCompleteNetwork;