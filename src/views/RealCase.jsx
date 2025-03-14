import {Link} from 'react-router-dom';
import "../styles/realCaseStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import {useState} from "react";
import ComponenteRealCase from "../components/OptionsRealCase.jsx";
import OptionsRealCase from "../components/OptionsRealCase.jsx";




const RealCase = () => {

    const breadcrumbItems = [
        { label: "INICIO", link: "/", className: "home" },
        { label: "CASO REAL", active: true, className: "current" },
    ];

    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText((prev) => !prev);
    };

    return (
        <div className="container realCaseWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container realCaseCont">
                <h1 className="title-realCase">Casos reales</h1>
                <section className="mt-5 mb-5 realCaseExplanation">
                    <div>
                        {!showFullText ? (
                            <>
                                <p>
                                    Las infraestructuras de transporte en España han experimentado una transformación en
                                    las últimas décadas, con el desarrollo de la red de carreteras de alta capacidad, la
                                    red
                                    ferroviaria de Alta Velocidad, y la construcción y ampliación de terminales
                                    aeropor...
                                    <button className="btn btn-link p-0 ms-2 toggle-btn" onClick={toggleText}>
                                        (ver más)
                                    </button>
                                </p>
                            </>
                        ) : (
                            <>
                                <p>
                                    Las infraestructuras de transporte en España han experimentado una transformación en
                                    las últimas décadas, con el desarrollo de la red de carreteras de alta capacidad, la
                                    red
                                    ferroviaria de Alta Velocidad, y la construcción y ampliación de terminales
                                    aeroportuarias.
                                </p>
                                <p>
                                    Esto ha permitido una mejora sustancial en la accesibilidad y la movilidad,
                                    ofreciendo a los ciudadanos alternativas de transporte para la elección del modo más
                                    adecuado a cada
                                    momento y necesidad.
                                    Ese esfuerzo inversor, no obstante, acarrea otro esfuerzo, el de las emisiones de
                                    gases de efecto invernadero a la atmósfera, asociadas a la construcción de las
                                    infraestructuras.
                                </p>
                                <p>
                                    Si bien hasta fechas recientes no se contemplaban estas emisiones de la fase de
                                    construcción en las
                                    evaluaciones de impacto ambiental, esta herramienta recoge, de manera simplificada,
                                    el ciclo de vida completo, incluyendo a las emisiones GEI de la operación, el efecto
                                    de la
                                    construcción de la red de Alta Velocidad y las terminales aeroportuarias en las
                                    emisiones de GEI durante los
                                    últimos 20 años.
                                </p>
                                <p>
                                    Se proponen dos opciones de análisis, en las que se compara el modo aéreo y la alta
                                    velocidad:
                                </p>
                                <ul>
                                    <li>El análisis de la red completa, incluyendo las conexiones aéreas peninsulares y
                                        la red de
                                        alta
                                        velocidad.
                                    </li>
                                    <li>El análisis específico de algunos de los principales corredores de transporte
                                        peninsulares.
                                        En
                                        este caso, para hacer homogéneos ambos modos, se toman sólo las relaciones entre
                                        los
                                        extremos
                                        del corredor, no incluyendo la demanda ferroviaria entre puntos intermedios.
                                    </li>
                                </ul>
                                <button className="btn btn-link p-0 toggle-btn" onClick={toggleText}>
                                    (ver menos)
                                </button>
                            </>
                        )}
                    </div>
                </section>

                <h2 className="mb-4 subtitleRealCase">¿Qué caso real quiere analizar?</h2>
                <section className="container">
                    <div className="row g-4"> {/* g-4 añade espacio entre las columnas */}
                        {/* Primera fila: 4 elementos */}
                        <div
                            className="col-md-3 mb-3"> {/* col-md-3: 4 columnas por fila en pantallas medianas y grandes */}
                            <OptionsRealCase title="Red completa" linkTo="/completeNetwork"/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <OptionsRealCase title="Corredor Madrid - Barcelona" linkTo="/completeNetwork"/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <OptionsRealCase title="Corredor Madrid - Andalucía" linkTo="/completeNetwork"/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <OptionsRealCase title="Corredor Madrid - Levante" linkTo="/completeNetwork"/>
                        </div>

                        {/* Segunda fila: 2 elementos */}
                        <div
                            className="col-md-3 mb-3"> {/* col-md-6: 2 columnas por fila en pantallas medianas y grandes */}
                            <OptionsRealCase title="Corredor Madrid - Galicia" linkTo="/completeNetwork"/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <OptionsRealCase title="Corredor Madrid - Lisboa" linkTo="/completeNetwork"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RealCase;