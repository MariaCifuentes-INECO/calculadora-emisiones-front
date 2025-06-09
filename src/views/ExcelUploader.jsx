import {useContext, useEffect, useState} from "react";
import useExcelReaderCompleteNetwork from "../hooks/useExcelReaderCompleteNetwork.jsx";
import {CalculatorContext} from "../context/CalculatorContext.js";
import useExcelReaderCorridors from "../hooks/useExcelReaderCorridors.jsx";

export const ExcelUploader = () => {
    const { setCompleteNetwork, setCorridors} = useContext(CalculatorContext);
    const { extractedData, readExcelCompleteNetwork } = useExcelReaderCompleteNetwork();
    const { extractedCorridorData, readExcelCorridors } = useExcelReaderCorridors();
    const [fileName, setFileName] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validar que el archivo sea un Excel
            if (!file.name.endsWith(".xlsx")) {
                alert("Por favor, sube un archivo Excel válido (.xlsx).");
                return;
            }

            setIsLoading(true); // Activar estado de carga
            try {
                await readExcelCompleteNetwork(file);
                setFileName(file.name);
            } catch (error) {
                console.error("Error al leer el archivo:", error);
                alert("Error al procesar el archivo. Por favor, verifica el formato e intenta nuevamente.");
            } finally {
                setIsLoading(false); // Desactivar estado de carga
                event.target.value = null; // Restablecer el valor del input
            }
        }
    };

    useEffect(() => {
        if (extractedData && extractedData.length > 0) {
            setIsLoading(true); // Activar estado de carga
            //fetch('http://localhost:8088/redCompleta', {
            fetch(`/api/redCompleta`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(extractedData),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error al cargar los datos.");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data); // Respuesta de la API después del POST
                    setCompleteNetwork(data);
                    alert("Datos añadidos correctamente");
                })
                .catch((error) => {
                    console.error('Error posting data:', error);
                    alert(error.message || "Error al enviar los datos al servidor.");
                })
                .finally(() => {
                    setIsLoading(false); // Desactivar estado de carga
                });
        }
    }, [extractedData]);

    const handleFileUploadCorridor = async (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validar que el archivo sea un Excel
            if (!file.name.endsWith(".xlsx")) {
                alert("Por favor, sube un archivo Excel válido (.xlsx).");
                return;
            }

            setIsLoading(true); // Activar estado de carga
            try {
                await readExcelCorridors(file);
                setFileName(file.name);
            } catch (error) {
                console.error("Error al leer el archivo:", error);
                alert("Error al procesar el archivo. Por favor, verifica el formato e intenta nuevamente.");
            } finally {
                setIsLoading(false); // Desactivar estado de carga
                event.target.value = null; // Restablecer el valor del input
            }
        }
    };

    useEffect(() => {
        if (extractedCorridorData && extractedCorridorData.length > 0) {
            setIsLoading(true); // Activar estado de carga
            //fetch('http://localhost:8088/corredor', {
            fetch(`/api/corredor`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(extractedCorridorData),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error al cargar los datos.");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data); // Respuesta de la API después del POST
                    setCorridors(data);
                    alert("Datos añadidos correctamente");
                })
                .catch((error) => {
                    console.error('Error posting data:', error);
                    alert(error.message || "Error al enviar los datos al servidor.");
                })
                .finally(() => {
                    setIsLoading(false); // Desactivar estado de carga
                });
        }
    }, [extractedCorridorData]);

    return (
        <div>
            <h1>Administrador de datos</h1>
            <div>
                <h2>Red completa</h2>
                <input
                    type="file"
                    onChange={handleFileUpload}
                    disabled={isLoading} // Deshabilitar input durante la carga
                    accept=".xlsx" // Aceptar solo archivos .xlsx
                />
                {fileName && <p>Archivo seleccionado: {fileName}</p>}
                {isLoading && <p>Cargando...</p>} {/* Mostrar mensaje de carga */}
            </div>
            <div>
                <h2>Corredores</h2>
                <input
                    type="file"
                    onChange={handleFileUploadCorridor}
                    disabled={isLoading} // Deshabilitar input durante la carga
                    accept=".xlsx" // Aceptar solo archivos .xlsx
                />
                {fileName && <p>Archivo seleccionado: {fileName}</p>}
                {isLoading && <p>Cargando...</p>} {/* Mostrar mensaje de carga */}
            </div>
        </div>
    );
};