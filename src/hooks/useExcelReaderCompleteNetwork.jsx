import { useState } from 'react';
import ExcelJS from 'exceljs';

const useExcelReaderCompleteNetwork = () => {
    const [extractedData, setExtractedData] = useState([]);

    const readExcelCompleteNetwork = async (file) => {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(file);

        const extractedDataArray = [];

        const worksheet = workbook.getWorksheet('Cálculos RED');
        if (worksheet) {
            worksheet.eachRow((row, rowNumber) => {
                if (rowNumber > 8) { // Ignorar las primeras filas, son cabeceras
                    const anio = row.getCell(1).value || 0; // Primera columna
                    const cicloVidaAVEAcumulado = Math.round(row.getCell(9).value?.result) || 0; // Novena columna
                    const cicloVidaAereoAcumulado = Math.round(row.getCell(10).value?.result) || 0; // Decima columna
                    const demandaAVLDAcumulada = Math.round(row.getCell(30).value?.result) || 0;
                    const demandaAereaAcumulada = Math.round(row.getCell(31).value?.result) || 0;

                    // Filtrar por año (2004 a 2023)
                    if (anio >= 2004 && anio <= 2023) {
                        extractedDataArray.push({
                            anio,
                            cicloVidaAVEAcumulado,
                            cicloVidaAereoAcumulado,
                            demandaAVLDAcumulada,
                            demandaAereaAcumulada
                        });
                    }
                }
            });
        }

        setExtractedData(extractedDataArray);
    };

    return { extractedData, readExcelCompleteNetwork };
};

export default useExcelReaderCompleteNetwork;