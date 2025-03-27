import "../styles/realCaseStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import OptionsRealCase from "../components/OptionsRealCase.jsx";


const RealCase = () => {

    const breadcrumbItems = [
        {label: "INICIO", link: "/", className: "home"},
        {label: "CASO REAL", active: true, className: "current"},
    ];

    return (
        <div className="container realCaseWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container realCaseCont">
                <h1 className="title-realCase">Casos reales</h1>
                <section className="mt-5 mb-5 realCaseExplanation">
                    <p>
                        <strong>Transformación del Transporte en España: Impacto y Emisiones</strong> <br/>
                        En las últimas décadas, España ha revolucionado sus infraestructuras de transporte con modernas
                        autopistas, trenes de alta velocidad y aeropuertos ampliados. Esto ha mejorado la movilidad y
                        accesibilidad, ofreciendo múltiples opciones de transporte.
                    </p>
                    <p>
                        Pero, ¿sabías que este desarrollo también ha aumentado las emisiones de gases de efecto
                        invernadero (GEI)? CarbonTrack360 te permite analizar estas emisiones, considerando todo el
                        ciclo de vida de las infraestructuras, desde su construcción hasta su operación.
                    </p>
                    <p>
                        Te ofrecemos dos opciones de análisis:
                    </p>
                    <p>
                        <strong>Red Completa:</strong> Compara las emisiones de las conexiones aéreas peninsulares y la red de alta velocidad.
                    </p>
                    <p>
                        <strong>Corredores Específicos:</strong> Analiza las emisiones en los principales corredores de transporte, incluyendo las principales relaciones de cada uno.

                    </p>
                </section>

                <h2 className="mb-4 subtitleRealCase">¿Qué caso real quiere analizar?</h2>
                <section className="container">
                    <div className="row g-3"> {/* g-4 añade espacio entre las columnas */}
                        {/* Primera fila: 4 elementos */}
                        <div
                            className="col-md-3 mb-3"> {/* col-md-3: 4 columnas por fila en pantallas medianas y grandes */}
                            <OptionsRealCase title="Red completa" linkTo="/completeNetwork"/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <OptionsRealCase title="Corredor Madrid - Barcelona" linkTo="/corridorMADBCN"/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <OptionsRealCase title="Corredor Madrid - Andalucía" linkTo="/completeNetwork"/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <OptionsRealCase title="Corredor Madrid - Levante" linkTo="/completeNetwork"/>
                        </div>

                        {/*/!* Segunda fila: 2 elementos *!/*/}
                        {/*<div*/}
                        {/*    className="col-md-3 mb-3"> /!* col-md-6: 2 columnas por fila en pantallas medianas y grandes *!/*/}
                        {/*    <OptionsRealCase title="Corredor Madrid - Galicia" linkTo="/completeNetwork"/>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-3 mb-3">*/}
                        {/*    <OptionsRealCase title="Corredor Madrid - Lisboa" linkTo="/completeNetwork"/>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RealCase;