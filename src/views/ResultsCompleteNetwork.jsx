import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";
import "../styles/resultsCompleteNetworkStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import GraficoEmisionAcumPax from "../components/GraficoEmisionAcumPax.jsx";


const ResultsCompleteNetwork = () => {

    const {completeNetwork} = useContext(CalculatorContext);

    const breadcrumbItems = [
        {label: "INICIO", link: "/", className: "home"},
        {label: "CASO REAL", link: "/realCase", className: "intermediate"},
        {
            label: "EMISIONES DE TRANSPORTE EN ESPAÑA: AÉREO PENINSULAR VS. ALTA VELOCIDAD",
            active: true,
            className: "current"
        },
    ];


    return (
        <div className="container completeNetworkWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container completeNetworkCont">
                <h1 className="title-completeNetwork">Emisiones de Transporte en España: Aéreo peninsular vs. Alta
                    Velocidad</h1>
                <section className="mt-5 mb-5 completeNetworkExplanation">
                    <p>
                        Hemos analizado las emisiones de GEI de nuestras infraestructuras de transporte en los últimos
                        30 años. El ejercicio no permite sacar conclusiones a nivel de comparación detallada entre
                        modos, o a nivel del acierto o desacierto de las políticas y de las decisiones tomadas, pero sí
                        poner en contexto órdenes de magnitud entre modos, y romper ideas preconcebidas.

                    </p>
                    <p>
                        Aquí te presentamos los resultados:
                    </p>
                    <ul>
                        <li>
                            <strong>Modo Aéreo:</strong> Las operaciones de vuelos peninsulares, junto con la
                            construcción y ampliación de aeropuertos imputable a estos, han
                            generado <strong>45</strong> millones de t de CO<sub>2</sub>e
                        </li>
                        <li>
                            <strong>Alta Velocidad:</strong> La red de alta velocidad ferroviaria (4.000 km) ha emitido
                            casi <strong>50</strong> millones de t de CO<sub>2</sub>e, incluyendo su construcción y
                            mantenimiento y, hasta 2019,
                            también las emisiones por operación de servicios AV Larga Distancia.
                        </li>
                    </ul>
                </section>
                <section>
                    <GraficoAnalisisReal backendData={completeNetwork}/>
                </section>
                <section className="mt-5 mb-5 completeNetworkExplanation">
                    <p>
                        En resumen, las emisiones acumuladas del <strong>transporte aéreo peninsular han sido un 10%
                        menores que las de la alta velocidad</strong>, habiendo transportado 480 millones de pasajeros
                        en el periodo, frente
                        a 360 millones de la alta velocidad. En los últimos años, la demanda de vuelos peninsulares ha
                        disminuido, mientras que la alta velocidad sigue ganando popularidad.
                    </p>
                </section>
                <section className="mt-5">
                    <GraficoEmisionAcumPax data={completeNetwork}/>
                </section>
                <section className="mt-5 mb-3 completeNetworkExplanation">
                    <p>
                        La construcción de la red de Alta Velocidad ha supuesto un importante esfuerzo en inversiones y
                        en emisiones. Sin embargo, el éxito en demanda supone que las emisiones acumuladas por cada
                        viajero de alta velocidad se hayan reducido drásticamente en los últimos años, hasta llegar en <strong>2024</strong>, a <strong>139 kg CO<sub>2</sub>e</strong> por viajero acumulado.
                    </p>
                    <p>
                        El modo aéreo, ya ha conseguido importantes reducciones en sus emisiones de GEI derivadas de las
                        mejoras de aeronaves y motores, lo que supone alcanzar unas emisiones de 94 kg CO<sub>2</sub>e por pasajero
                        acumulado.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ResultsCompleteNetwork;