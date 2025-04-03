import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";
import "../styles/resultsCorridorMAD_SEVStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import GraficoEmisionAcumPax from "../components/GraficoEmisionAcumPax.jsx";


const ResultsCorridorMAD_SEV = () => {

    const {corridors} = useContext(CalculatorContext);

    const breadcrumbItems = [
        {label: "HOME", link: "/", className: "home"},
        {label: "REAL CASE", link: "/realCase", className: "intermediate"},
        {
            label: "MADRID - ANDALUSIA CORRIDOR",
            active: true,
            className: "current"
        },
    ];


    return (
        <div className="container corridorMADSEVWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container corridorMADSEVCont">
                <h1 className="title-corridorMADSEV">Madrid – Andalusia Corridor</h1>
                <section className="mt-5 mb-5 corridorMADSEVExplanation">
                    <p>
                        This corridor allows for a longer analysis period, as Madrid - Seville was the first
                        connection in Spanish HSR network, in 1992. The connection to Málaga was completed in 2007.
                    </p>
                    <p>
                        The construction of the high-speed infrastructure is estimated to have generated 5.2 million
                        tons of CO<sub>2</sub>e. In total, HSR has accumulated <strong>6.1 million tons of
                        CO<sub>2</sub>e</strong>, which includes 11% operational emissions (up to 2019).
                    </p>
                    <p>
                        The air mode accumulates <strong>3.4 million tons of CO<sub>2</sub>e</strong> over the
                        period.
                    </p>
                    <p>
                        The accumulated volume of railway demand, increased by the growth of recent years, makes the
                        accumulated <strong>emissions per railway passenger (48 kg CO<sub>2</sub>e)</strong> lower than those of each <strong>air passenger
                        (90 kg CO<sub>2</sub>e).</strong>
                    </p>
                </section>
                <section>
                    <GraficoAnalisisReal backendData={corridors.filter(c => c.nombre === "Madrid-Sevilla")}/>
                </section>

                <section className="mt-5">
                    <GraficoEmisionAcumPax data={corridors.filter(c => c.nombre === "Madrid-Sevilla")}/>
                </section>
            </div>
        </div>
    );
};

export default ResultsCorridorMAD_SEV;