import { Link } from 'react-router-dom';
import "../styles/realCaseStyle.css"


const RealCase = () => {
    return (
        <div className="globalContainer">
            <section>
                <h1 className="title-realCase">Selección ejemplo real</h1>
                <p className="mt-5 mb-5">
                    Texto hablando del desarrollo de las infraestructuras del transporte en la Península Ibérica en los
                    últimos años.
                </p>
                <p className="mt-5 mb-5">
                    Mencionar limitaciones de la herramienta.
                </p>
            </section>
            <section>
                <h2 className="mb-4">¿Qué caso real quiere analizar?</h2>

                <ul className="options-list">
                    <li>
                        <Link to="/completeNetwork" className="custom-link">Red completa</Link>
                    </li>
                    <li>
                        <Link className="custom-link">Corredor Madrid - Barcelona</Link>
                    </li>
                    <li>
                        <Link className="custom-link">Corredor Madrid - Andalucía</Link>
                    </li>
                    <li>
                        <Link className="custom-link">Corredor Madrid - Levante</Link>
                    </li>
                    <li>
                        <Link className="custom-link">Corredor Madrid - Galicia</Link>
                    </li>
                    <li>
                        <Link className="custom-link">Corredor Madrid - Lisboa</Link>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default RealCase;