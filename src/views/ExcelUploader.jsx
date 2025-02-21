import {useEffect, useState} from "react";
import useExcelReaderCompleteNetwork from "../hooks/useExcelReaderCompleteNetwork.jsx";


export const ExcelUploader = () => {
    const {extractedData, readExcelCompleteNetwork} = useExcelReaderCompleteNetwork();
    const [fileNameGenerales, setFileNameGenerales] = useState("");


    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            readExcelCompleteNetwork(file);
            setFileNameGenerales(file.name);
            event.target.value = null; // Restablece el valor del input
        }
    };

    useEffect(() => {
        if (extractedData && extractedData.length > 0) {
            console.log(extractedData);
        }
    }, [extractedData]);

    return (
        <div>
            <h1>Administrador de datos</h1>
            <div>
                <h2>Datos generales</h2>
                <input type="file" onChange={handleFileUpload}/>
                {fileNameGenerales && <p>Archivo seleccionado: {fileNameGenerales}</p>}
            </div>
        </div>
    );
};