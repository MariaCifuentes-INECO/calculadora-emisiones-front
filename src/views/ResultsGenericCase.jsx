import {useLocation} from 'react-router-dom';
import '../styles/resultsGenericCaseStyle.css';
import GraficoGEISistema from "../components/GraficoGEISistema.jsx";
import GraficoGEIvsViajeros from "../components/GraficoGEIvsViajeros.jsx";
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

    const breadcrumbItems = [
        {label: "INICIO", link: "/", className: "home"},
        {label: "SIMULADOR", link: "/genericCase", className: "intermediate"},
        {label: "SIMULACIÓN", active: true, className: "current"},
    ];

    return (
        <div className="container resultsenericCaseWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container resultsGenericCaseCont">
                <h1 className="title-resultsGenericCase">Resultado simulación</h1>
                <section className="mt-5 mb-5 resultsGenericCaseExplanation">
                    <p>
                        Se presenta a continuación el resultado del análisis realizado para este caso genérico, en el
                        que se conectan dos puntos situados a <strong>{data.distancia} km</strong> de distancia.
                    </p>
                </section>
                <div className="hypothesisSummary mb-3">
                    <h2 className="hypothesisTitle">Las hipótesis que se han tomado son:</h2>
                    <div className="hypothesisGrid">
                        <div className="hypothesisItem">
                            <img src={viajeros} alt="Viajeros" className="hypothesisIcon"
                                 style={{height: "50px", width: "50px"}}/>
                            <p>
                                <span className="texto-destacado bloque">
                                    {data.demandaInicial.toLocaleString("es-ES")}
                                </span>
                                <span className="bloque">
                                     de viajeros anuales con un crecimiento del
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
                                    de la demanda emplearía el modo aéreo
                                </span>
                            </p>
                        </div>
                        <div className="hypothesisItem">
                            <img src={torre} alt="Aeropuerto" className="hypothesisIcon"
                                 style={{height: "50px", width: "30px"}}/>
                            <p>
                                <span className="bloque">
                                    Un aeropuerto
                                </span>
                                <span className="texto-destacado bloque">
                                     {data.aeropuertoA.toLowerCase()}
                                </span>
                                <span className="bloque">
                                    y otro
                                </span>
                                <span className="texto-destacado bloque">
                                     {data.aeropuertoB.toLowerCase()}
                                </span>
                            </p>
                        </div>
                        <div className="hypothesisItem">
                            <img src={mapa} alt="Mapa" className="hypothesisIcon"
                                 style={{height: "50px", width: "53px"}}/>
                            <p>
                                <span className="bloque">
                                    Un terreno
                                </span>
                                <span className="texto-destacado bloque">
                                     {data.tipoTerreno.toLowerCase()}
                                </span>
                                <span className="bloque">
                                    entre ambos puntos
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
                                La construcción de las infraestructuras generaría unas emisiones de:
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
                                            CO<sub>2</sub> eq para el
                                        </span>
                                        <span className="bloque">
                                            modo aéreo
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
                                            CO<sub>2</sub> eq para la
                                        </span>
                                        <span className="bloque">
                                            alta velocidad
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Segunda sección */}
                        <div className="bloque-emisiones">
                            <h2 className="titulo-emisiones">
                                Las emisiones totales en el período de análisis (50 años de explotación) serían:
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
                                            CO<sub>2</sub> eq para el
                                        </span>
                                        <span className="bloque">
                                            modo aéreo
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
                                            CO<sub>2</sub> eq para la
                                        </span>
                                        <span className="bloque">
                                            alta velocidad
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bloque-demanda mb-3">
                    <h2 className="titulo-demanda">
                        Y cada modo habría transportado:
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
                                    viajeros el modo aéreo
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
                                    viajeros la alta velocidad
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <section className="resultsGenericCaseExplanation mb-3">
                    <p className="mb-4 text-justify">
                        En el siguiente gráfico se puede apreciar las emisiones acumuladas por el sistema en el
                        escenario
                        planteado (naranja), las emisiones de cada modo en ese escenario (morado para el aéreo y verde
                        para
                        la alta velocidad) y para una situación hipotética en que sólo se utilizara el transporte aéreo
                        (gris).
                    </p>
                    <div>
                        <GraficoGEISistema data={data}/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ResultsGenericCase;