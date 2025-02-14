import { useLocation } from 'react-router-dom';
import '../styles/resultsGenericCaseStyle.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import GraficoGEISistema from "../components/GraficoGEISistema.jsx";
import GraficoGEIvsViajeros from "../components/GraficoGEIvsViajeros.jsx";

// Registrar los componentes de Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Componente principal
const ResultsGenericCase = () => {
    const location = useLocation();
    const { data } = location.state || {};

    // Validar que los datos estén presentes y tengan el formato correcto
    if (!data || !data.cicloVidaAVEAcumulado || !data.cicloVidaAereoAcumulado || !data.cicloVidaTodoAereoAcumulado || !data.sumaFerroviarioAereoAcumulado) {
        return <div>No hay datos válidos para mostrar.</div>;
    }

    return (
        <div className="globalContainer resultsGenericCase-container">
            <section>
                <h1>Resultados caso genérico</h1>
                <p className="mt-5 mb-5">
                    Aun por definir, pero la idea es que haya un texto que se complete con números de los resultados, y
                    que aparezcan varios gráficos de resultados.
                </p>
            </section>
            <section>
                <div className="chart-container">
                    <GraficoGEISistema data={data} />
                </div>
                <div className="chart-container">
                    <GraficoGEIvsViajeros data={data} />
                </div>
            </section>
        </div>
    );
};

export default ResultsGenericCase;