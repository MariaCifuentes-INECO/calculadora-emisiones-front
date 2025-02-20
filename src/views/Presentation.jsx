import { useNavigate } from "react-router-dom";

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
                <h1 className="display-4">Nombre y Logo de la Calculadora</h1>
            </header>

            <section className="mb-5">
                <p className="lead text-justify"> {/* "lead" hace que el texto sea más grande y con estilo de párrafo introductorio */}
                    Texto explicando la motivación de la herramienta, permitir comparar el modo aéreo con la Alta
                    Velocidad incluyendo todo el ciclo de vida de la infraestructura, para una toma de decisiones
                    consciente de las implicaciones para el cambio climático, etc. Etc.
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
