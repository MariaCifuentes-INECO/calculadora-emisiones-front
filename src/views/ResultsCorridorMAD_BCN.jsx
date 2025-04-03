import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";
import "../styles/resultsCorridorMAD_BCNStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import GraficoEmisionAcumPax from "../components/GraficoEmisionAcumPax.jsx";


const ResultsCorridorMAD_BCN = () => {

    const {corridors} = useContext(CalculatorContext);

    const breadcrumbItems = [
        {label: "HOME", link: "/", className: "home"},
        {label: "REAL CASE", link: "/realCase", className: "intermediate"},
        {
            label: "MADRID - BARCELONA CORRIDOR",
            active: true,
            className: "current"
        },
    ];


    return (
        <div className="container corridorMADBCNWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container corridorMADBCNCont">
                <h1 className="title-corridorMADBCN">Madrid – Barcelona Corridor</h1>
                <section className="mt-5 mb-5 corridorMADBCNExplanation">
                    <p>
                        In this corridor, the high-speed connection between Madrid and Zaragoza was opened in 2003,
                        and it was not until 2008 that it reached Barcelona.
                    </p>
                    <p>
                        The emissions from the construction of the high-speed line (estimated at around 8 million tons
                        of CO<sub>2</sub>e), combined with operational emissions (considering the period from 2003 to 2019)
                        and infrastructure maintenance, total <strong>8.7 million tons of CO<sub>2</sub>e</strong> over the period.
                    </p>
                    <p>
                        On the other hand, the air mode has emitted <strong>5 million tons of CO<sub>2</sub>e</strong>, 97% of which
                        occurred during the operational phase, in the period from 2003 to 2024.
                    </p>
                    <p>
                        In this case, the cumulative emissions per air passenger (<strong>80 kg CO<sub>2</sub>e/pax</strong>) remain
                        lower than those of rail passengers (<strong>88 kg CO<sub>2</sub>e/pax</strong>).
                    </p>
                </section>
                <section>
                    <GraficoAnalisisReal backendData={corridors.filter(c => c.nombre === "Madrid-Barcelona")}/>
                </section>
                <section className="mt-5">
                    <GraficoEmisionAcumPax data={corridors.filter(c => c.nombre === "Madrid-Barcelona")}/>
                </section>
            </div>
        </div>
    );
};

export default ResultsCorridorMAD_BCN;