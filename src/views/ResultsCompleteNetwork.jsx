import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";


const ResultsCompleteNetwork = () => {

    const {completeNetwork} = useContext(CalculatorContext);

    return (
        <div className="globalContainer resultsCompleteNetwork-container">
            <section>
                <h1>Resultados red completa</h1>
                <p className="mt-5 mb-5">
                    Aún por definir, pero la idea es que haya un texto que explique lo que se ha tenido en cuenta.
                </p>
            </section>
            <section>
                <GraficoAnalisisReal backendData={completeNetwork}/>
            </section>
        </div>
    );
};

export default ResultsCompleteNetwork;