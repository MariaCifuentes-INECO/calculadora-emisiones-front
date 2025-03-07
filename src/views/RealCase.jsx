import {Link} from 'react-router-dom';
import "../styles/realCaseStyle.css"


const RealCase = () => {
    return (
        <div className="globalContainer">
            <section className="text-justify mb-4">
                <h1 className="title-realCase">Selección ejemplo real</h1>
                <p className="mt-4">
                    Las infraestructuras de transporte en España han experimentado una transformación en las últimas
                    décadas, con el desarrollo de la red de carreteras de alta capacidad, la red ferroviaria de Alta
                    Velocidad, y la construcción y ampliación de terminales aeroportuarias.
                </p>
                <p>
                    Esto ha permitido una mejora sustancial en la accesibilidad y la movilidad, ofreciendo a los
                    ciudadanos alternativas de transporte para la elección del modo más adecuado a cada momento y
                    necesidad.
                    Ese esfuerzo inversor, no obstante, acarrea otro esfuerzo, el de las emisiones de gases de efecto
                    invernadero a la atmósfera, asociadas a la construcción de las infraestructuras.
                </p>
                <p>
                    Si bien hasta fechas recientes no se contemplaban estas emisiones de la fase de construcción en las
                    evaluaciones de impacto ambiental, esta herramienta recoge, de manera simplificada, el ciclo de vida
                    completo, incluyendo a las emisiones GEI de la operación, el efecto de la construcción de la red de
                    Alta Velocidad y las terminales aeroportuarias en las emisiones de GEI durante los últimos 20 años.
                </p>
                <p>
                    Se proponen dos opciones de análisis, en las que se compara el modo aéreo y la alta velocidad:
                </p>
                <ul>
                    <li>El análisis de la red completa, incluyendo las conexiones aéreas peninsulares y la red de alta
                        velocidad.
                    </li>
                    <li>El análisis específico de algunos de los principales corredores de transporte peninsulares. En
                        este caso, para hacer homogéneos ambos modos, se toman sólo las relaciones entre los extremos
                        del corredor, no incluyendo la demanda ferroviaria entre puntos intermedios.
                    </li>
                </ul>

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