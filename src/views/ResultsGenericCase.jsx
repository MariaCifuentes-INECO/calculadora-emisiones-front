import {Link, useLocation} from 'react-router-dom';
import '../styles/resultsGenericCaseStyle.css';
import GraficoGEISistema from "../components/GraficoGEISistema.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import viajeros from "../assets/viajeros.svg"
import avion from "../assets/avion.svg"
import torre from "../assets/torre.svg"
import mapa from "../assets/mapa.svg"
import vias from "../assets/vias.svg"


// Componente principal
const ResultsGenericCase = () => {
    const location = useLocation();
    const {data} = location.state || {};

    // Validar que los datos estén presentes y tengan el formato correcto
    if (!data || !data.cicloVidaAVEAcumulado || !data.cicloVidaAereoAcumulado || !data.cicloVidaTodoAereoAcumulado || !data.sumaFerroviarioAereoAcumulado) {
        return <div>No hay datos válidos para mostrar.</div>;
    }

    const traducirTerreno = (terreno) => {
        const traducciones = {
            "Llano": "Flat",
            "Accidentado": "Rough",
            "Medio": "Medium",
        };

        return traducciones[terreno] || terreno;
    };

    const traducirTamano = (tamano) => {
        const traducciones = {
            "Grande": "Large",
            "Pequeño": "Small",
            "Mediano": "Medium",
        };

        return traducciones[tamano] || tamano;
    };

    const breadcrumbItems = [
        {label: "HOME", link: "/", className: "home"},
        {label: "SIMULATOR", link: "/genericCase", className: "intermediate"},
        {label: "SIMULATION", active: true, className: "current"},
    ];

    return (
        <div className="container resultsenericCaseWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container resultsGenericCaseCont">
                <h1 className="title-resultsGenericCase">Simulation results</h1>
                <section className="mt-5 mb-5 resultsGenericCaseExplanation">
                    <p>
                        The result of the analysis for this generic case, which connects two points
                        located <strong>{data.distancia} km</strong> apart, is presented below.
                    </p>
                </section>
                <div className="hypothesisSummary mb-3">
                    <h2 className="hypothesisTitle">The <span className="res-tex-dest">assumptions</span> made
                        are</h2>
                    <div className="hypothesisGrid">
                    <div className="hypothesisItem">
                            <img src={viajeros} alt="Viajeros" className="hypothesisIcon"
                                 style={{height: "50px", width: "50px"}}/>
                            <p>
                                <span className="texto-destacado bloque">
                                    {data.demandaInicial.toLocaleString("es-ES")}
                                </span>
                                <span className="bloque">
                                     annual travelers in the initial year, with a growth of
                                </span>
                                <span className="texto-destacado bloque">
                                    {data.crecimientoAnual} %
                                </span>
                            </p>
                        </div>
                        <div className="hypothesisItem">
                            <img src={avion} alt="Aéreo" className="hypothesisIcon"
                                 style={{height: "50px", width: "50px"}}/>
                            <p>
                                <span className="texto-destacado bloque">
                                    {data.modoAereo} %
                                </span>
                                <span className="bloque">
                                    of the demand would use air transport
                                </span>
                            </p>
                        </div>
                        <div className="hypothesisItem">
                            <img src={torre} alt="Aeropuerto" className="hypothesisIcon"
                                 style={{height: "50px", width: "30px"}}/>
                            <p>
                                <span className="bloque">
                                    One
                                </span>
                                <span className="texto-destacado bloque">
                                     {traducirTamano(data.aeropuertoA).toLowerCase()}
                                </span>
                                <span className="bloque">
                                   airport and another
                                </span>
                                <span className="texto-destacado bloque">
                                    {traducirTamano(data.aeropuertoB).toLowerCase()}
                                </span>
                                <span className="bloque">
                                   airport
                                </span>
                            </p>
                        </div>
                        <div className="hypothesisItem">
                            <img src={mapa} alt="Mapa" className="hypothesisIcon"
                                 style={{height: "50px", width: "53px"}}/>
                            <p>
                                <span className="bloque">
                                    A
                                </span>
                                <span className="texto-destacado bloque">
                                     {traducirTerreno(data.tipoTerreno).toLowerCase()}
                                </span>
                                <span className="bloque">
                                    terrain between both points.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="emisiones-container mb-3">
                    <div className="seccion-emisiones">
                        {/* Primera sección */}
                        <div className="bloque-emisiones">
                            <h2 className="titulo-emisiones">
                                The <span className="res-tex-dest">construction</span> of the infrastructures would generate emissions of:
                            </h2>
                            <div className="fila-emisiones">
                                <div className="emision-item">
                                    <img src={avion} alt="Aéreo" className="icono-emision"
                                         style={{height: "50px", width: "50px"}}/>
                                    <p>
                                        <span className="texto-destacado bloque">
                                            {data.emisionesConstAereo.toLocaleString("es-ES")} t
                                        </span>
                                        <span className="bloque">
                                            CO<sub>2</sub>e for
                                        </span>
                                        <span className="bloque">
                                            air transport.
                                        </span>
                                    </p>
                                </div>
                                <div className="emision-item">
                                    <img src={vias} alt="vias" className="icono-emision"
                                         style={{height: "50px", width: "49px"}}/>
                                    <p>
                                        <span className="texto-destacado bloque">
                                            {data.emisionesConstAve.toLocaleString("es-ES")} t
                                        </span>
                                        <span className="bloque">
                                            CO<sub>2</sub>e for
                                        </span>
                                        <span className="bloque">
                                            high-speed rail
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Segunda sección */}
                        <div className="bloque-emisiones">
                            <h2 className="titulo-emisiones">
                                The <span className="res-tex-dest">total emissions</span> over the analysis period (50 years of operation) would be:
                            </h2>
                            <div className="fila-emisiones">
                                <div className="emision-item">
                                    <img src={avion} alt="Aéreo" className="icono-emision"
                                         style={{height: "50px", width: "50px"}}/>
                                    <p>
                                        <span className="texto-destacado bloque">
                                            {data.cicloVidaAereoAcumulado.at(-1).toLocaleString("es-ES")} t
                                        </span>
                                        <span className="bloque">
                                            CO<sub>2</sub>e for
                                        </span>
                                        <span className="bloque">
                                            air transport
                                        </span>
                                    </p>
                                </div>
                                <div className="emision-item">
                                    <img src={vias} alt="vias" className="icono-emision"
                                         style={{height: "50px", width: "49px"}}/>
                                    <p>
                                        <span className="texto-destacado bloque">
                                            {data.cicloVidaAVEAcumulado.at(-1).toLocaleString("es-ES")} t
                                        </span>
                                        <span className="bloque">
                                            CO<sub>2</sub>e for
                                        </span>
                                        <span className="bloque">
                                            high-speed rail
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bloque-demanda mb-3">
                    <h2 className="titulo-demanda">
                        And each mode would have <span className="res-tex-dest">transported</span>:
                    </h2>
                    <div className="fila-emisiones">
                        <div className="demanda-item">
                            <img src={avion} alt="Aéreo" className="icono-demanda"
                                 style={{height: "50px", width: "50px"}}/>
                            <p>
                                <span className="texto-destacado bloque">
                                    {data.demandaAvionAcumulado.at(-1).toLocaleString("es-ES")}
                                </span>
                                <span className="bloque">
                                    passengers by air transport
                                </span>
                            </p>
                        </div>
                        <div className="demanda-item">
                            <img src={vias} alt="vias" className="icono-demanda"
                                 style={{height: "50px", width: "49px"}}/>
                            <p>
                                <span className="texto-destacado bloque">
                                    {data.demandaTrenAcumulado.at(-1).toLocaleString("es-ES")}
                                </span>
                                <span className="bloque">
                                    passengers by high-speed rail
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <section className="resultsGenericCaseExplanation mb-3">
                    <p>
                        There is an efficiency threshold that determines the number of accumulated trips beyond which the GHG emissions from air transport, primarily derived from operation, would exceed those from rail transport, which mostly come from infrastructure construction. Until this threshold is reached, the accumulated emissions from air transport would be lower.
                    </p>
                    <p>
                        <strong>In this case, the efficiency threshold is set at {data.umbralEficiencia.toLocaleString("es-ES")} trips.</strong>
                    </p>
                    <p className="mb-4 text-justify">
                        In the following graph, you can see the accumulated emissions by the system in the proposed scenario, the emissions of each mode in that scenario, and for a hypothetical situation where only air transport is used.
                    </p>
                    <div>
                        <GraficoGEISistema data={data}/>
                    </div>
                </section>
                <div  className="resultsGenericCaseExplanation mt-5">
                    <Link to="/hypothesis" className="presentation-custom-link">Hypotheses and sources</Link>
                </div>
            </div>
        </div>
    );
};

export default ResultsGenericCase;