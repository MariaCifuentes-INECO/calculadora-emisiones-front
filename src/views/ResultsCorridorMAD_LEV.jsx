import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";
import "../styles/resultsCorridorMAD_LEVStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import GraficoEmisionAcumPax from "../components/GraficoEmisionAcumPax.jsx";


const ResultsCorridorMAD_LEV = () => {

    const {corridors} = useContext(CalculatorContext);

    const breadcrumbItems = [
        {label: "HOME", link: "/", className: "home"},
        {label: "REAL CASE", link: "/realCase", className: "intermediate"},
        {
            label: "MADRID - LEVANTE CORRIDOR",
            active: true,
            className: "current"
        },
    ];


    return (
        <div className="container corridorMADLEVWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container corridorMADLEVCont">
                <h1 className="title-corridorMADLEV">Madrid – Levante Corridor</h1>
                <section className="mt-5 mb-5 corridorMADLEVExplanation">
                    <p>
                        This corridor is the most recent of the three analysed, as the high-speed connection between
                        Madrid and Valencia was put into service in 2010, Madrid and Alicante in 2013, and Madrid and
                        Murcia in 2022.
                    </p>
                    <p>
                        With estimated construction emissions of 6.9 million tons of CO2e, the total emissions for the
                        rail mode amount to <strong>7.1 million tons of CO<sub>2</sub>e</strong> over the analyzed period.
                    </p>
                    <p>
                        Air demand has drastically reduced since the high-speed connection was put into service, accumulating only <strong>0.8 million tons of CO<sub>2</sub>e</strong> over the period.
                    </p>
                    <p>
                        Currently, the cumulative emissions per air passenger (<strong>85 kg CO<sub>2</sub>e/pax</strong>) remain lower than those of rail passengers (<strong>112 kg CO<sub>2</sub>e/pax</strong>).
                    </p>
                </section>
                <section>
                    <GraficoAnalisisReal backendData={corridors.filter(c => c.nombre === "Madrid-Levante")}/>
                </section>
                <section className="mt-5">
                    <GraficoEmisionAcumPax data={corridors.filter(c => c.nombre === "Madrid-Levante")}/>
                </section>
            </div>
        </div>
    );
};

export default ResultsCorridorMAD_LEV;