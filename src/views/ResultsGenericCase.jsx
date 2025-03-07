import {useLocation} from 'react-router-dom';
import '../styles/resultsGenericCaseStyle.css';
import GraficoGEISistema from "../components/GraficoGEISistema.jsx";
import GraficoGEIvsViajeros from "../components/GraficoGEIvsViajeros.jsx";


// Componente principal
const ResultsGenericCase = () => {
    const location = useLocation();
    const {data} = location.state || {};

    // Validar que los datos estén presentes y tengan el formato correcto
    if (!data || !data.cicloVidaAVEAcumulado || !data.cicloVidaAereoAcumulado || !data.cicloVidaTodoAereoAcumulado || !data.sumaFerroviarioAereoAcumulado) {
        return <div>No hay datos válidos para mostrar.</div>;
    }

    return (
        <div className="globalContainer resultsGenericCase-container">
            <section className="mb-4 text-justify">
                <h1>Resultados caso genérico</h1>
                <p className="mt-4">
                    Se presenta a continuación el resultado del análisis realizado para este caso genérico, en el que se
                    conectan dos puntos situados a <strong>{data.distancia} km</strong> de distancia.
                </p>
                <p>
                    Las hipótesis que se han tomado son:
                </p>
                <ul>
                    <li>
                        <strong>{data.demandaInicial}</strong> viajeros anuales en el año de inicio, con un crecimiento
                        del <strong>{data.crecimientoAnual} %</strong>.
                    </li>
                    <li>
                        <strong>{data.modoAereo} %</strong> de la demanda emplearía el modo aéreo.
                    </li>
                    <li>
                        Un aeropuerto <strong>{data.aeropuertoA}</strong> y otro
                        aeropuerto <strong>{data.aeropuertoB}</strong>.
                    </li>
                    <li>
                        Un terreno <strong>{data.tipoTerreno}</strong> entre ambos puntos.
                    </li>
                </ul>
            </section>
            <section>
                <p className="mb-4 text-justify">
                    En el siguiente gráfico se puede apreciar las emisiones acumuladas por el sistema en el escenario
                    planteado (naranja), las emisiones de cada modo en ese escenario (morado para el aéreo y verde para
                    la alta velocidad) y para una situación hipotética en que sólo se utilizara el transporte aéreo
                    (gris)
                </p>
                <div className="chart-container">
                    <GraficoGEISistema data={data}/>
                </div>
            </section>
            <section>
                <div className="chart-container">
                    <GraficoGEIvsViajeros data={data}/>
                </div>
            </section>
        </div>
    );
};

export default ResultsGenericCase;