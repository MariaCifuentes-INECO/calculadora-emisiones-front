import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";
import "../styles/resultsCorridorMAD_LEVStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import GraficoEmisionAcumPax from "../components/GraficoEmisionAcumPax.jsx";


const ResultsCorridorMAD_LEV = () => {

    const {corridors} = useContext(CalculatorContext);

    const breadcrumbItems = [
        {label: "INICIO", link: "/", className: "home"},
        {label: "CASO REAL", link: "/realCase", className: "intermediate"},
        {
            label: "Resultados Madrid-Levante",
            active: true,
            className: "current"
        },
    ];


    return (
        <div className="container corridorMADLEVWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container corridorMADLEVCont">
                <h1 className="title-corridorMADLEV">Resultados Madrid-Levante</h1>
                <section className="mt-5 mb-5 corridorMADLEVExplanation">
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
                            construcción y ampliación de aeropuertos imputable a estos, han generado
                            casi <strong>37</strong> millones de t de CO<sub>2</sub>e
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
                    <GraficoAnalisisReal backendData={corridors.filter(c => c.nombre === "Madrid-Levante")}/>
                </section>
                <section className="mt-5 mb-5 corridorMADLEVExplanation">
                    <p>
                        En resumen, las emisiones acumuladas del transporte aéreo peninsular han sido un <strong>26%
                        menores que las de la alta velocidad</strong>, habiendo transportado 500 millones de pasajeros
                        en el periodo, frente
                        a 360 millones de la alta velocidad. En los últimos años, la demanda de vuelos peninsulares ha
                        disminuido, mientras que la alta velocidad sigue ganando popularidad.
                    </p>
                </section>
                <section className="mt-5">
                    <GraficoEmisionAcumPax data={corridors.filter(c => c.nombre === "Madrid-Levante")}/>
                </section>
                <section className="mt-5 mb-3 corridorMADLEVExplanation">
                    <p>
                        La construcción de la red de Alta Velocidad ha requerido grandes inversiones y ha generado
                        emisiones significativas. Sin embargo, gracias al aumento de la demanda, las emisiones por
                        viajero han disminuido notablemente. En <strong>2024</strong>, se estima que cada viajero de
                        alta velocidad
                        genera <strong>139 kg de CO<sub>2</sub>e</strong>, mientras que el modo aéreo se mantiene
                        en <strong>73 kg de CO<sub>2</sub>e</strong> por viajero.
                    </p>
                    <p>
                        Este cálculo sencillo asigna al modo aéreo las mismas emisiones operativas durante el periodo,
                        basadas en la calculadora <strong>OACI 2024</strong>, aunque estas emisiones han mejorado con el tiempo.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ResultsCorridorMAD_LEV;