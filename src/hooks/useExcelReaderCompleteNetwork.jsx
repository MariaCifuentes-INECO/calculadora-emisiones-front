import { useState } from 'react';
import ExcelJS from 'exceljs';

const useExcelReaderCompleteNetwork = () => {
    const [extractedData, setExtractedData] = useState([]);

    // Función auxiliar para extraer y redondear valores de las celdas
    const getRoundedCellValue = (row, cellIndex, defaultValue = 0) => {
        const cellValue = row.getCell(cellIndex).value?.result || row.getCell(cellIndex).value;
        return Math.round(parseFloat(cellValue)) || defaultValue;
    };

    const readExcelCompleteNetwork = async (file) => {
        try {
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(file);

            const extractedDataArray = [];

            const worksheet = workbook.getWorksheet('Cálculos RED');
            if (!worksheet) {
                throw new Error('La hoja "Cálculos RED" no existe en el archivo.');
            }

            worksheet.eachRow((row, rowNumber) => {
                // Limitar la lectura entre las filas 9 y 28
                if (rowNumber >= 9 && rowNumber <= 29) {
                    const anio = parseInt(row.getCell(1).value) || 0; // Primera columna

                    // Extraer y redondear valores de las celdas
                    const emisionesConstruccionAVE = getRoundedCellValue(row, 45);
                    const emisionesOperacionAVE = getRoundedCellValue(row, 46);
                    const emisionesMantenimientoAVE = getRoundedCellValue(row, 47); // Novena columna
                    const cicloVidaAVEAcumulado = getRoundedCellValue(row, 9); // Novena columna
                    const emisionesConstruccionAereo = getRoundedCellValue(row, 49);
                    const emisionesOperacionAereo = getRoundedCellValue(row, 50);
                    const emisionesMantenimientoAereo = getRoundedCellValue(row, 51);
                    const cicloVidaAereoAcumulado = getRoundedCellValue(row, 10); // Décima columna
                    const demandaAVLD = getRoundedCellValue(row, 26);
                    const demandaAerea = getRoundedCellValue(row, 27);

                    // Filtrar por año (2004 a 2023)
                    if (anio >= 2004 && anio <= 2024) {
                        extractedDataArray.push({
                            anio,
                            emisionesConstruccionAVE,
                            emisionesOperacionAVE,
                            emisionesMantenimientoAVE,
                            cicloVidaAVEAcumulado,
                            emisionesConstruccionAereo,
                            emisionesOperacionAereo,
                            emisionesMantenimientoAereo,
                            cicloVidaAereoAcumulado,
                            demandaAVLD,
                            demandaAerea
                        });
                    }
                }
            });

            setExtractedData(extractedDataArray);
        } catch (error) {
            console.error('Error al leer el archivo Excel:', error);
            setExtractedData([]); // Limpiar los datos en caso de error
        }
    };

    return { extractedData, readExcelCompleteNetwork };
};

export default useExcelReaderCompleteNetwork;