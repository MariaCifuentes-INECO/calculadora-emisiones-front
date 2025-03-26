import Breadcrumb from "../components/Breadcrumb.jsx";
import "../styles/hypothesisStyle.css"


const Hypothesis = () => {

    const breadcrumbItems = [
        {label: "INICIO", link: "/", className: "home"},
        {label: "HIPÓTESIS Y FUENTES", active: true, className: "current"},
    ];


    return (
        <div className="container hypothesisWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container hypothesisNetworkCont">
                <h1 className="title-hypothesis">Hipótesis y fuentes</h1>
                <section className="mt-5 mb-2 hypothesisExplanation">
                    <p>
                        La consideración de las emisiones de GEI en el ciclo de vida completo de las infraestructuras de
                        transporte es algo necesario y cada vez más habitual, cuyo cálculo va mejorando y precisándose
                        con la experiencia.
                    </p>
                    <p>
                        En este ejercicio se pretende aportar una herramienta para la reflexión, CarbonTrack360, y se ha
                        procurado mantener criterios de claridad y homogeneidad que permitieran la comparación.
                    </p>
                    <p>
                        Para las fases de construcción y mantenimiento de las infraestructuras, se ha partido de las
                        <i>Recomendaciones para la estimación de las emisiones de GEI en la evaluación ambiental de
                            planes
                            y proyectos de transporte</i>, de la Dirección General de Calidad y Evaluación Ambiental y
                        Medio
                        Natural del Ministerio para la Transición Ecológica y el Reto Demográfico, como metodología
                        común.
                    </p>
                    <p>
                        En el caso de la construcción de infraestructura aeroportuaria, se han tomado de las
                        Recomendaciones dos ratios principales de emisiones:
                    </p>
                    <ul>
                        <li><strong>1.125 kg CO<sub>2</sub>e/m<sup>2</sup> </strong> de terminal,</li>
                        <li><strong>160 kg CO<sub>2</sub>e/m<sup>2</sup> </strong> de pista.</li>
                    </ul>
                    <p>
                        En el caso de la construcción de la Alta Velocidad, este informe refiere a tres rangos de
                        emisiones:
                    </p>
                    <ul>
                        <li><strong>4.000 t CO<sub>2</sub>e/km</strong> de línea en terreno llano,</li>
                        <li><strong>8.000 t CO<sub>2</sub>e/km</strong> de línea en terreno medio, y</li>
                        <li><strong>24.000 t CO<sub>2</sub>e/km</strong> de línea en terreno accidentado.</li>
                    </ul>
                    <p>
                        Para determinar el grado de accidentalidad del terreno en los casos reales, se ha aplicado un
                        criterio de proporcionalidad con los costes de construcción medios de cada tramo.
                    </p>
                    <p>
                        Para las emisiones relacionadas con la operación:
                    </p>
                    <ul>
                        <li>en el modo aéreo, se ha calculado la media de emisiones por pasajero-km para vuelos
                            peninsulares, a partir de la herramienta <strong>ICAO Carbon Emissions Calculator
                                (ICEC)</strong>.
                        </li>
                        <li>en la alta velocidad ferroviaria, hasta 2019 se han tomado de las Recomendaciones, y
                            desde entonces, y para el simulador, se han considerado nulas debido al contrato de
                            energía con garantía de origen renovable de ADIF.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Hypothesis;