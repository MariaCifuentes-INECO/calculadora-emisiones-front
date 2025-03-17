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
                        con la experiencia.<br/>

                        Dentro de este ciclo de vida completo se pueden distinguir varias “capas”:
                        <ul>
                            <li><strong>A1, A2 y A3,</strong> que hacen referencia a los materiales</li>
                            <li><strong>A4,</strong> en relación con el transporte de estos,</li>
                            <li><strong>A5,</strong> que se refiere a la propia construcción de la infraestructura.</li>
                        </ul>
                    </p>
                    <p>
                        En este ejercicio simplificado, en el que se pretende aportar una herramienta para la reflexión,
                        se ha procurado mantener criterios de claridad y homogeneidad que permitieran la comparación.
                    </p>
                    <p>
                        Por ello, para las fases de construcción, se ha partido del “Informe CEDEX”, como metodología
                        común a los dos modos comparados.
                    </p>
                    <p>
                        En el caso de la construcción de la Alta Velocidad, este informe refiere a tres rangos de
                        emisiones:
                        <ul>
                            <li><strong>4.000 t CO2 eq/km</strong> de línea en terreno llano,</li>
                            <li><strong>8.000 t CO2 eq/km</strong> de línea en terreno medio, y</li>
                            <li><strong>24.000 t CO2 eq/km</strong> de línea en terreno accidentado.</li>
                        </ul>

                        Para determinar el grado de accidentalidad del terreno en cada caso, se ha aplicado un criterio
                        de proporcionalidad con los costes de construcción medios de cada tramo, a partir de fuentes
                        públicas disponibles.
                    </p>
                    <p>
                        Para las emisiones relacionadas con el mantenimiento, se ha partido igualmente de datos del
                        “Informe CEDEX”.
                    </p>
                    <p>
                        Para las emisiones relacionadas con la operación:
                        <ul>
                            <li>en la alta velocidad ferroviaria, se han considerado nulas debido al contrato de
                                garantía de
                                energía verde de ADIF.
                            </li>
                            <li>en el modo aéreo, se ha calculado la media de emisiones por viajero-km para vuelos
                                peninsulares,
                                a partir de datos reales de Eurocontrol.
                            </li>
                        </ul>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Hypothesis;