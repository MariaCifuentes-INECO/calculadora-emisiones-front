import {useNavigate} from "react-router-dom";

const Presentation = () => {

    const navigate = useNavigate();

    const handleGenericCase = () => {
        navigate('/genericCase'); // Navega a la vista GenericCase
    };

    const handleRealExample = () => {
        navigate('/realCase'); // Navega a la vista RealCase
    };

    return (
        <div className="container globalContainer">
            <header className="text-center mb-5">
                <h1 className="display-4">Calculadora de emisiones en el ciclo de vida de la infraestrctura</h1>
            </header>

            <section className="mb-5">
                <p className="lead text-justify"> {/* "lead" hace que el texto sea más grande y con estilo de párrafo introductorio */}
                    El transporte aéreo tiene ante sí el reto de reducir sus emisiones de GEI, fuertemente ligadas a la
                    operación. Esto le hace sufrir un cierto estigma como modo con mayor impacto climático. Sin embargo,
                    para tener una visión más ajustada a la realidad, conviene tomar perspectiva, incluyendo en ese
                    análisis no sólo la operación, sino las emisiones generadas en todo el ciclo de vida.
                </p>
                <p className="lead text-justify">
                    Esta calculadora pretende ser una herramienta para la reflexión, que permita visualizar las
                    distintas etapas de la infraestructura. Se comparan los modos aéreo y ferroviario (Alta Velocidad),
                    que compiten en las relaciones peninsulares de larga distancia.
                </p>
                <p className="lead text-justify">
                    Se ha dejado fuera del análisis la carretera, cuya “operación” supone un alto porcentaje (xx %) de
                    las emisiones GEI en España, pero cuyas infraestructuras aportan otras utilidades que hacen
                    improcedente la comparación.
                </p>
            </section>

            <section className="text-center">
                <h2 className="mb-4">¿Desea analizar un caso genérico o un ejemplo real?</h2>

                <div className="d-flex gap-5 justify-content-center">
                    <button
                        onClick={handleGenericCase}
                        className="btn btn-primary btn-lg px-4">
                        Caso Genérico
                    </button>
                    <button
                        onClick={handleRealExample}
                        className="btn btn-primary btn-lg px-4">
                        Ejemplo Real
                    </button>
                </div>


            </section>
        </div>
    )
        ;
};

export default Presentation;
