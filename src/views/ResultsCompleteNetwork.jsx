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
import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";


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

    const { completeNetwork} = useContext(CalculatorContext);

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