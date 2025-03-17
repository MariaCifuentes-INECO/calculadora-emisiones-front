import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";
import "../styles/resultsCompleteNetworkStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import {Link} from "react-router-dom";


const ResultsCompleteNetwork = () => {

    const {completeNetwork} = useContext(CalculatorContext);

    const breadcrumbItems = [
        {label: "INICIO", link: "/", className: "home"},
        {label: "CASO REAL", link: "/realCase", className: "intermediate"},
        {label: "RED COMPLETA - CASO REAL", active: true, className: "current"},
    ];


    return (
        <div className="container completeNetworkWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container completeNetworkCont">
                <h1 className="title-completeNetwork">Red completa - caso real</h1>
                <section className="mt-5 mb-5 completeNetworkExplanation">
                    <p>
                        Los resultados que se presentan para la red completa recogen una estimación de las emisiones de
                        ciclo de vida de las infraestructuras aeroportuarias y de alta velocidad ferroviaria durante los
                        últimos 20 años.
                        <br/><br/>
                        Para el modo aéreo, se estiman las emisiones generadas tanto por la operación aérea en
                        relaciones peninsulares como por la construcción y ampliación de terminales aeroportuarias y
                        pistas en la red de aeropuertos peninsulares, y su mantenimiento.
                        <br/>
                        En el conjunto del periodo, se estima que esto ha supuesto la emisión de casi <strong>29 Mt CO2
                        eq</strong>.
                        <br/><br/>
                        Para el modo ferroviario, se estiman las emisiones generadas por la construcción de la red de
                        alta velocidad, y su mantenimiento, y se consideran emisiones nulas para la operación, dado que
                        ADIF tiene un contrato de garantía de energía verde.
                        <br/>
                        En este periodo, se estima que la alta velocidad ferroviaria ha generado la emisión de
                        casi <strong>32
                        Mt CO2 eq</strong>.
                    </p>
                </section>
                <section>
                    <GraficoAnalisisReal backendData={completeNetwork}/>
                </section>
                <section className="mt-5 mb-5 completeNetworkExplanation">
                    <p>
                        Por tanto, durante los últimos 20 años, las emisiones generadas por el modo aéreo peninsular han
                        sido un <strong>10% inferiores</strong> a las de la alta velocidad, habiendo transportado
                        prácticamente el mismo
                        número de viajeros en el conjunto del periodo <strong>(330 M viajeros)</strong>.
                    </p>
                    <p>
                        Sin embargo, la evolución de la demanda aérea peninsular es decreciente en los últimos años,
                        reflejando el trasvase que, de manera natural, se está produciendo para estas conexiones
                        hacia
                        la alta velocidad.
                    </p>
                    <p>
                        <Link to="/hypothesis" className="hypothesis-link">Ver hipótesis y fuentes</Link>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ResultsCompleteNetwork;