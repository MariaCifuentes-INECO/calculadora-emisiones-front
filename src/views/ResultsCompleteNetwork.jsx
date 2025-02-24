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
const ResultsCompleteNetwork = () => {

    return (
        <div className="globalContainer resultsCompleteNetwork-container">
            <section>
                <h1>Resultados red completa</h1>
                <p className="mt-5 mb-5">
                    Aún por definir, pero la idea es que haya un texto que explique lo que se ha tenido en cuenta.
                </p>
            </section>
        </div>
    );
};

export default ResultsCompleteNetwork;