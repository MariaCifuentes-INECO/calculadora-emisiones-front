import "../styles/realCaseStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import OptionsRealCase from "../components/OptionsRealCase.jsx";


const RealCase = () => {

    const breadcrumbItems = [
        {label: "HOME", link: "/", className: "home"},
        {label: "REAL CASE", active: true, className: "current"},
    ];

    return (
        <div className="container realCaseWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container realCaseCont">
                <h1 className="title-realCase">Real Cases</h1>
                <section className="mt-5 mb-5 realCaseExplanation">
                    <p>
                        <strong>Transformation of Transportation in Spain: Impact and Emissions</strong> <br/>
                        In recent decades, Spain has revolutionized its transportation infrastructure with modern highways, high-speed trains, and expanded airports. This has improved mobility and accessibility, offering multiple options.
                    </p>
                    <p>
                        But did you know that this development has also increased greenhouse gas (GHG) emissions?
                        CarbonTrack360 allows you to analyse these emissions, considering the entire life cycle of the infrastructures, from construction to operation.
                    </p>
                    <p>
                        Two analysis options are offered:
                    </p>
                    <p>
                        <strong>Complete Spanish Network:</strong> Compare the emissions of peninsular air connections and the high-speed rail network.
                    </p>
                    <p>
                        <strong>Specific Corridors:</strong> Analyze emissions in the main transportation corridors, including the key connections of each.
                    </p>
                </section>

                <h2 className="mb-4 subtitleRealCase">Which real case would you like to analyse?</h2>
                <section className="container">
                    <div className="row g-3 row-eq-height"> {/* g-4 añade espacio entre las columnas */}
                        {/* Primera fila: 4 elementos */}
                        <div
                            className="col-md-3 mb-3 d-flex"> {/* col-md-3: 4 columnas por fila en pantallas medianas y grandes */}
                            <OptionsRealCase title="Complete Spanish Network" linkTo="/completeNetwork"/>
                        </div>
                        <div className="col-md-3 mb-3 d-flex">
                            <OptionsRealCase title="Madrid – Andalusia Corridor" linkTo="/corridorMADSEV" className="small-text"/>
                        </div>
                        <div className="col-md-3 mb-3 d-flex">
                            <OptionsRealCase title="Madrid – Barcelona Corridor" linkTo="/corridorMADBCN" className="small-text"/>
                        </div>
                        <div className="col-md-3 mb-3 d-flex">
                            <OptionsRealCase title="Madrid – Levante Corridor" linkTo="/corridorMADLEV"/>
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