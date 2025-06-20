import {useState} from "react";
import "../styles/genericCaseStyle.css";
import {useNavigate} from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb.jsx";
import {Trans, useTranslation} from "react-i18next";

const GenericCase = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('genericCase');

    // Estado para el tipo de aeropuerto A y B
    const [aeropuertoA, setAeropuertoA] = useState("Mediano");
    const [aeropuertoB, setAeropuertoB] = useState("Mediano");

    // Estado para el porcentaje de imputación del aeropuerto A y B
    const [imputacionAeropuertoA, setImputacionAeropuertoA] = useState(10); // Valor inicial para "Mediano"
    const [imputacionAeropuertoB, setImputacionAeropuertoB] = useState(10); // Valor inicial para "Mediano"

    // Estado para el resto de porcentajes
    const [crecimientoAnual, setCrecimientoAnual] = useState(2);
    const [modoAereo, setModoAereo] = useState(30);
    const [imputacionFerroviaria, setImputacionFerroviaria] = useState(100);

    // Estado para los campos adicionales
    const [distancia, setDistancia] = useState();
    const [demandaInicial, setDemandaInicial] = useState();
    const [longitudTrayectoFerroviario, setLongitudTrayectoFerroviario] = useState();
    const [tipoTerreno, setTipoTerreno] = useState("Llano");
    const [distanciaTrayectoAereo, setDistanciaTrayectoAereo] = useState();

    // Función genérica para manejar el cambio en la selección del aeropuerto
    const handleAeropuertoChange = (selectedAeropuerto, setAeropuerto, setImputacion) => {
        setAeropuerto(selectedAeropuerto);

        // Actualizar el porcentaje de imputación según el tipo de aeropuerto seleccionado
        switch (selectedAeropuerto) {
            case "Pequeño":
                setImputacion(50); // Porcentaje para aeropuerto pequeño
                break;
            case "Mediano":
                setImputacion(10); // Porcentaje para aeropuerto mediano
                break;
            case "Grande":
                setImputacion(4); // Porcentaje para aeropuerto grande
                break;
            default:
                setImputacion(0);
        }
    };

    // Función genérica para manejar el cambio manual en el porcentaje
    const handlePercentageChange = (newValue, setPercentage) => {
        if (!isNaN(newValue)) { // Asegurarse de que sea un número válido
            // Validar que el valor esté entre 0 y 100
            if (newValue < 0) {
                newValue = 0;
            } else if (newValue > 100) {
                newValue = 100;
            }
            setPercentage(newValue);
        }
    };

    // Función para manejar el cambio de distancia
    const handleDistanciaChange = (e) => {
        const nuevaDistancia = parseFloat(e.target.value);
        setDistancia(nuevaDistancia);

        // Establecer el valor del trayecto ferroviario y aereo automáticamente
        setLongitudTrayectoFerroviario(Math.round(nuevaDistancia * 1.3));
        setDistanciaTrayectoAereo(Math.round(nuevaDistancia * 1.2));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear el objeto con los datos del formulario
        const requestData = {
            distanciaOD: distancia,
            demandaInicial: demandaInicial,
            crecimiento: crecimientoAnual,
            porcentajeAereo: modoAereo,
            distanciaFerroviaria: longitudTrayectoFerroviario,
            tipoTerreno: tipoTerreno,
            porcentajeFerroviario: imputacionFerroviaria,
            distanciaAerea: distanciaTrayectoAereo,
            tipoAeropuertoA: aeropuertoA,
            porcentajeAeropuertoA: imputacionAeropuertoA,
            tipoAeropuertoB: aeropuertoB,
            porcentajeAeropuertoB: imputacionAeropuertoB
        };

        try {
            // Enviar los datos al endpoint
            const response = await
                //fetch('http://localhost:8088/graficoGEISistema', {
                fetch(`/api/graficoGEISistema`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error("Error al enviar los datos");
            }

            // Obtener los datos de la respuesta
            const result = await response.json();

            // Crear un objeto con todos los datos que deseas pasar a la página de resultados
            const dataToPass = {
                ...result, // Datos de la respuesta del servidor
                aeropuertoA, // Estado de aeropuertoA
                aeropuertoB, // Estado de aeropuertoB
                imputacionAeropuertoA, // Estado de imputacionAeropuertoA
                imputacionAeropuertoB, // Estado de imputacionAeropuertoB
                crecimientoAnual, // Estado de crecimientoAnual
                modoAereo, // Estado de modoAereo
                imputacionFerroviaria, // Estado de imputacionFerroviaria
                distancia, // Estado de distancia
                demandaInicial, // Estado de demandaInicial
                longitudTrayectoFerroviario, // Estado de longitudTrayectoFerroviario
                tipoTerreno, // Estado de tipoTerreno
                distanciaTrayectoAereo // Estado de distanciaTrayectoAereo
            };

            // Navegar a la página de resultados y pasar los datos
            navigate("/resultsGenericCase", {state: {data: dataToPass}});
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const breadcrumbItems = [
        { label: t('breadcrumb.home'), link: "/", className: "home" },
        { label: t('breadcrumb.simulator'), active: true, className: "current" },
    ];

    const [showFullText, setShowFullText] = useState(true);

    const toggleText = () => {
        setShowFullText((prev) => !prev);
    };

    return (
        <div className="container genericCaseWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container genericCaseCont">
                <h1 className="title-genericCase">{t('title')}</h1>
                <section className="mt-5 mb-5 genericCaseExplanation">
                    <div>
                        {!showFullText ? (
                            <>
                                <p>
                                    <Trans
                                        i18nKey="genericCase:paragraphs.p1"
                                        components={{
                                            strong: <strong/>,
                                        }}
                                    />
                                    <button className="btn btn-link p-0 ms-2 toggle-btn" onClick={toggleText}>
                                        {t('buttons.b1')}
                                    </button>
                                </p>
                            </>
                        ) : (
                            <>
                                <p>
                                    <Trans
                                        i18nKey="genericCase:paragraphs.p2"
                                        components={{
                                            strong: <strong/>,
                                        }}
                                    />
                                </p>
                                <p>
                                    <Trans
                                        i18nKey="genericCase:paragraphs.p3"
                                        components={{
                                            strong: <strong/>,
                                        }}
                                    />
                                </p>
                                <p>
                                    <Trans
                                        i18nKey="genericCase:paragraphs.p4"
                                        components={{
                                            strong: <strong/>,
                                        }}
                                    />
                                </p>
                                <p>
                                    <Trans
                                        i18nKey="genericCase:paragraphs.p5"
                                        components={{
                                            strong: <strong/>,
                                        }}
                                    />
                                    <button className="btn btn-link p-0 ms-2 toggle-btn" onClick={toggleText}>
                                        {t('buttons.b2')}
                                    </button>
                                </p>
                            </>
                        )}
                    </div>
                </section>
                <section>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <h4 className="subtitle-genericCase">{t('caseSetup.title')}</h4>
                            <div className="row gx-3"> {/* gx-3 agrega espacio horizontal entre columnas */}
                                <div className="col-lg-3 col-md-6">
                                    <label htmlFor="dato1">{t('caseSetup.o1')}</label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="dato1"
                                            value={distancia}
                                            onChange={handleDistanciaChange}
                                            min="0"
                                            required
                                        />
                                        <span className="input-group-text">km</span>
                                    </div>
                                    <small className="form-text input-explanation">
                                        {t('optionsTexts.number')}
                                    </small>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <label htmlFor="dato2">{t('caseSetup.o2')}</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="dato2"
                                        value={demandaInicial}
                                        onChange={(e) => setDemandaInicial(parseFloat(e.target.value))}
                                        min="0"
                                        required
                                    />
                                    <small className="form-text input-explanation">
                                        {t('optionsTexts.number')}
                                    </small>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <label htmlFor="dato3">{t('caseSetup.o3')}</label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="dato3"
                                            value={crecimientoAnual}
                                            onChange={(e) => handlePercentageChange(parseFloat(e.target.value), setCrecimientoAnual)}
                                            min="0"
                                            max="100"
                                            step="any"
                                            required
                                        />
                                        <span className="input-group-text">%</span>
                                    </div>
                                    <small className="form-text input-explanation">
                                        {t('optionsTexts.percentage')}
                                    </small>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <label htmlFor="dato4">{t('caseSetup.o4')}</label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="dato4"
                                            value={modoAereo}
                                            onChange={(e) => handlePercentageChange(parseFloat(e.target.value), setModoAereo)}
                                            min="0"
                                            max="100"
                                            step="1"
                                            required
                                        />
                                        <span className="input-group-text">%</span>
                                    </div>
                                    <small className="form-text input-explanation">
                                        {t('optionsTexts.percentage')}
                                    </small>
                                </div>
                            </div>

                        </div>
                        <div className="form-group">
                            <h4 className="subtitle-genericCase">{t('airport.title')}</h4>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="aero1">{t('airport.o1')}</label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="aero1"
                                            value={distanciaTrayectoAereo}
                                            onChange={(e) => setDistanciaTrayectoAereo(parseFloat(e.target.value))}
                                            min="0"
                                            required
                                        />
                                        <span className="input-group-text">km</span>
                                    </div>
                                    <small className="form-text input-explanation">
                                        {t('optionsTexts.number')}
                                    </small>
                                </div>
                                <div className="col">
                                    <label htmlFor="aero2">{t('airport.o2')}</label>
                                    <select
                                        className="form-select"
                                        id="aero2"
                                        value={aeropuertoA}
                                        onChange={(e) => handleAeropuertoChange(e.target.value, setAeropuertoA, setImputacionAeropuertoA)}
                                    >
                                        <option value="Pequeño">{t('sizes.small')}</option>
                                        <option value="Mediano">{t('sizes.medium')}</option>
                                        <option value="Grande">{t('sizes.large')}</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="aero3">{t('airport.o3')}</label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="aero3"
                                            value={imputacionAeropuertoA}
                                            onChange={(e) => handlePercentageChange(parseFloat(e.target.value), setImputacionAeropuertoA)}
                                            min="0"
                                            max="100"
                                            step="1"
                                            required
                                        />
                                        <span className="input-group-text">%</span>
                                    </div>
                                    <small className="form-text input-explanation">
                                        {t('optionsTexts.percentage')}
                                    </small>
                                </div>
                                <div className="col">
                                    <label htmlFor="aero4">{t('airport.o4')}</label>
                                    <select
                                        className="form-select"
                                        id="aero4"
                                        value={aeropuertoB}
                                        onChange={(e) => handleAeropuertoChange(e.target.value, setAeropuertoB, setImputacionAeropuertoB)}
                                    >
                                        <option value="Pequeño">{t('sizes.small')}</option>
                                        <option value="Mediano">{t('sizes.medium')}</option>
                                        <option value="Grande">{t('sizes.large')}</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="aero5">{t('airport.o5')}</label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="aero5"
                                            value={imputacionAeropuertoB}
                                            onChange={(e) => handlePercentageChange(parseFloat(e.target.value), setImputacionAeropuertoB)}
                                            min="0"
                                            max="100"
                                            step="1"
                                            required
                                        />
                                        <span className="input-group-text">%</span>
                                    </div>
                                    <small className="form-text input-explanation">
                                        {t('optionsTexts.percentage')}
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <h4 className="subtitle-genericCase">{t('railway.title')}</h4>
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="ferro1">{t('railway.o1')}</label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="ferro1"
                                            value={longitudTrayectoFerroviario}
                                            onChange={(e) => setLongitudTrayectoFerroviario(parseFloat(e.target.value))}
                                            required
                                        />
                                        <span className="input-group-text">km</span>
                                    </div>
                                    <small className="form-text input-explanation">
                                        {t('optionsTexts.number')}
                                    </small>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="ferro2">{t('railway.o2')}</label>
                                    <select
                                        className="form-select"
                                        id="ferro2"
                                        value={tipoTerreno}
                                        onChange={(e) => setTipoTerreno(e.target.value)}
                                    >
                                        <option value="Llano">{t('terrains.flat')}</option>
                                        <option value="Medio">{t('terrains.medium')}</option>
                                        <option value="Accidentado">{t('terrains.rough')}</option>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="ferro3">{t('railway.o3')}</label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="ferro3"
                                            value={imputacionFerroviaria}
                                            onChange={(e) => handlePercentageChange(parseFloat(e.target.value), setImputacionFerroviaria)}
                                            min="0"
                                            max="100"
                                            step="1"
                                            required
                                        />
                                        <span className="input-group-text">%</span>
                                    </div>
                                    <small className="form-text input-explanation">
                                        {t('optionsTexts.percentage')}
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 btn-center">
                            <button type="submit" className="btn btn-genericCase">{t('buttons.b3')}</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default GenericCase;