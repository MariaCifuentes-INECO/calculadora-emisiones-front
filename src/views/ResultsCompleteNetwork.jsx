import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.js";
import GraficoAnalisisReal from "../components/GraficoAnalisisReal.jsx";
import "../styles/resultsCompleteNetworkStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import GraficoEmisionAcumPax from "../components/GraficoEmisionAcumPax.jsx";


const ResultsCompleteNetwork = () => {

    const {completeNetwork} = useContext(CalculatorContext);

    const breadcrumbItems = [
        {label: "HOME", link: "/", className: "home"},
        {label: "REAL CASE", link: "/realCase", className: "intermediate"},
        {
            label: "TRANSPORT EMISSIONS IN SPAIN: MAINLAND DOMESTIC AIR VS. HIGH-SPEED RAIL",
            active: true,
            className: "current"
        },
    ];


    return (
        <div className="container completeNetworkWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container completeNetworkCont">
                <h1 className="title-completeNetwork">Transport Emissions in Spain: Mainland Domestic Air vs. High-Speed
                    Rail</h1>
                <section className="mt-5 mb-5 completeNetworkExplanation">
                    <p>
                        GHG emissions of Spanish transport infrastructure have been analysed over the last 30 years. The
                        exercise does not allow for detailed comparisons between modes or for evaluating the success or
                        failure of policies and decisions made, but it does provide context for the magnitude of
                        emissions between modes and challenges preconceived ideas.
                    </p>
                    <p>
                        Here are the results:
                    </p>
                    <ul>
                        <li>
                            <strong>Air Mode: </strong>
                            Operations of mainland domestic flights, along with the construction and expansion of
                            airports attributable to these, have generated <strong>45</strong> million tons of
                            CO<sub>2</sub>e
                        </li>
                        <li>
                            <strong>High-Speed Rail: </strong>
                            The high-speed rail network (4.000 km) has emitted nearly <strong>50</strong> million tons
                            of CO<sub>2</sub>e, including its construction and maintenance and, until 2019, also the
                            emissions from
                            the operation of long-distance high-speed services.
                        </li>
                    </ul>
                </section>
                <section>
                    <GraficoAnalisisReal backendData={completeNetwork}/>
                </section>
                <section className="mt-5 mb-5 completeNetworkExplanation">
                    <p>
                        In summary, <strong>the cumulative emissions from domestic air transport have been 10% lower
                        than those of high-speed rail</strong>, having transported 480 million passengers during the
                        period, compared to 360 million by high-speed rail. In recent years, the demand for mainland
                        domestic flights has decreased, while high-speed rail continues to gain popularity.
                    </p>
                </section>
                <section className="mt-5">
                    <GraficoEmisionAcumPax data={completeNetwork}/>
                </section>
                <section className="mt-5 mb-3 completeNetworkExplanation">
                    <p>
                        The air mode has already achieved significant reductions in its GHG emissions due to
                        improvements in aircraft and engines, resulting in emissions of <strong>94 kg CO<sub>2</sub>e</strong> per
                        cumulative passenger.
                    </p>
                    <p>
                        The construction of the High-Speed Rail network has required significant investment and
                        emissions. However, the success in demand means that the cumulative emissions per high-speed
                        rail passenger have drastically reduced in recent years, reaching <strong>139 kg CO<sub>2</sub>e</strong> per
                        passenger by 2024.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ResultsCompleteNetwork;