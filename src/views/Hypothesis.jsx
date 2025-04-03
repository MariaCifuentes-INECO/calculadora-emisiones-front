import Breadcrumb from "../components/Breadcrumb.jsx";
import "../styles/hypothesisStyle.css"


const Hypothesis = () => {

    const breadcrumbItems = [
        {label: "HOME", link: "/", className: "home"},
        {label: "HYPOTHESES AND SOURCES", active: true, className: "current"},
    ];


    return (
        <div className="container hypothesisWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container hypothesisNetworkCont">
                <h1 className="title-hypothesis">Hypotheses and sources</h1>
                <section className="mt-5 mb-2 hypothesisExplanation">
                    <p>
                        Considering GHG emissions over the entire lifecycle of transport infrastructure is necessary and
                        increasingly common, with calculations improving and becoming more precise with experience.
                    </p>
                    <p>
                        This exercise aims to provide a tool for reflection, CarbonTrack360, and has sought to maintain
                        clarity and consistency criteria to allow for comparison.
                    </p>
                    <p>
                        For the construction and maintenance phases of transport infrastructure, the &#34;Recommendations for the
                        estimation of GHG emissions in the environmental assessment of transport plans and projects&#34;,
                        from the General Directorate for Environmental Quality and Assessment and Natural Environment of
                        the Ministry for the Ecological Transition and the Demographic Challenge of Spain, have been used as a
                        common methodology.
                    </p>
                    <p>
                        In the case of airport infrastructure construction, two main emission ratios have been taken
                        from the <i>Recommendations</i>:
                    </p>
                    <ul>
                        <li><strong>1.125 kg CO<sub>2</sub>e/m<sup>2</sup> </strong> of terminal,</li>
                        <li><strong>160 kg CO<sub>2</sub>e/m<sup>2</sup> </strong> of runway.</li>
                    </ul>
                    <p>
                        For the construction of High-Speed Rail, this report refers to three emission ranges:
                    </p>
                    <ul>
                        <li><strong>4.000 t CO<sub>2</sub>e/km</strong> of line on flat terrain,</li>
                        <li><strong>8.000 t CO<sub>2</sub>e/km</strong> of line on medium terrain, and</li>
                        <li><strong>24.000 t CO<sub>2</sub>e/km</strong> of line on rough terrain.</li>
                    </ul>
                    <p>
                        To determine the degree of terrain roughness in real cases, a proportionality criterion with the
                        average construction costs of each section has been applied.
                    </p>
                    <p>
                        For emissions related to operation:
                    </p>
                    <ul>
                        <li>
                            In the air mode, the average emissions per passenger-km for peninsular flights have been
                            calculated using the <strong>ICAO Carbon Emissions Calculator
                            (ICEC)</strong>.
                        </li>
                        <li>
                            In high-speed rail, emissions up to 2019 have been taken from the Recommendations, and since
                            then, and for the simulator, they have been considered null due to ADIF's renewable energy
                            guarantee contract.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Hypothesis;