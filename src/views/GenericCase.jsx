import {useState} from "react";
import "../styles/genericCaseStyle.css";
import {useNavigate} from "react-router-dom";

const GenericCase = () => {
    const navigate = useNavigate();

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
        setLongitudTrayectoFerroviario(nuevaDistancia * 1.3);
        setDistanciaTrayectoAereo(nuevaDistancia * 1.2)
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
            const response = await fetch('http://localhost:8088/graficoGEISistema', {
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

            // Navegar a la página de resultados y pasar los datos
            navigate("/resultsGenericCase", {state: {data: result}});
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="globalContainer">
            <section>
                <h1 className="title-genericCase">Caso genérico</h1>
                <p className="mt-5 mb-5">
                    Aquí se explica lo que se va a hacer y las limitaciones que tiene el ejercicio.
                </p>
            </section>
            <section>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h4 className="subtitle-genericCase">Planteamiento del caso</h4>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="dato1">Distancia entre origen y destino (D):</label>
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="dato1"
                                        value={distancia}
                                        onChange={handleDistanciaChange} // Actualiza la distancia y la longitud ferroviaria
                                        required
                                    />
                                    <span className="input-group-text">km</span>
                                </div>
                            </div>
                            <div className="col-2">
                                <label htmlFor="dato2">Demanda año inicio:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="dato2"
                                    value={demandaInicial}
                                    onChange={(e) => setDemandaInicial(parseFloat(e.target.value))}
                                    required
                                />
                            </div>
                            <div className="col-2">
                                <label htmlFor="dato3">Crecimiento anual esperado:</label>
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="dato3"
                                        value={crecimientoAnual}
                                        onChange={(e) => handlePercentageChange(parseFloat(e.target.value), setCrecimientoAnual)}
                                        min="0"
                                        max="100"
                                        step="1"
                                        required
                                    />
                                    <span className="input-group-text">%</span>
                                </div>
                            </div>
                            <div className="col-2">
                                <label htmlFor="dato4">% modo aéreo:</label>
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
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <h4 className="subtitle-genericCase">Infraestructura aeropuertos</h4>
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="aero1">Distancia trayecto aéreo:</label>
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="aero1"
                                        value={distanciaTrayectoAereo}
                                        onChange={(e) => setDistanciaTrayectoAereo(parseFloat(e.target.value))}
                                        required
                                    />
                                    <span className="input-group-text">km</span>
                                </div>
                            </div>
                            <div className="col-2">
                                <label htmlFor="aero2">Aeropuerto A:</label>
                                <select
                                    className="form-control"
                                    id="aero2"
                                    value={aeropuertoA}
                                    onChange={(e) => handleAeropuertoChange(e.target.value, setAeropuertoA, setImputacionAeropuertoA)}
                                >
                                    <option value="Pequeño">Pequeño</option>
                                    <option value="Mediano">Mediano</option>
                                    <option value="Grande">Grande</option>
                                </select>
                            </div>
                            <div className="col-2">
                                <label htmlFor="aero3">% imputación aeropuerto A:</label>
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
                            </div>
                            <div className="col-2">
                                <label htmlFor="aero4">Aeropuerto B:</label>
                                <select
                                    className="form-control"
                                    id="aero4"
                                    value={aeropuertoB}
                                    onChange={(e) => handleAeropuertoChange(e.target.value, setAeropuertoB, setImputacionAeropuertoB)}
                                >
                                    <option value="Pequeño">Pequeño</option>
                                    <option value="Mediano">Mediano</option>
                                    <option value="Grande">Grande</option>
                                </select>
                            </div>
                            <div className="col-2">
                                <label htmlFor="aero5">% imputación aeropuerto B:</label>
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
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <h4 className="subtitle-genericCase">Infraestructura ferroviaria</h4>
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="ferro1">Longitud del trayecto:</label>
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
                            </div>
                            <div className="col-2">
                                <label htmlFor="ferro2">Tipo de terreno:</label>
                                <select
                                    className="form-control"
                                    id="ferro2"
                                    value={tipoTerreno}
                                    onChange={(e) => setTipoTerreno(e.target.value)}
                                >
                                    <option value="Llano">Llano</option>
                                    <option value="Medio">Medio</option>
                                    <option value="Accidentado">Accidentado</option>
                                </select>
                            </div>
                            <div className="col-2">
                                <label htmlFor="ferro3">% imputación:</label>
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
                            </div>
                        </div>
                    </div>
                    <div className="btn-right">
                        <button type="submit" className="btn btn-primary">Calcular</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default GenericCase;