import { useState } from 'react';
import ExcelJS from 'exceljs';

const useExcelReaderCorridors = () => {
    const [extractedCorridorData, setExtractedCorridorData] = useState([]);

    // Función auxiliar para extraer y redondear valores de las celdas
    const getRoundedCellValue = (row, cellIndex, defaultValue = 0) => {
        const cellValue = row.getCell(cellIndex).value?.result || row.getCell(cellIndex).value;
        return Math.round(parseFloat(cellValue)) || defaultValue;
    };

    const readExcelCorridors = async (file) => {
        try {
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(file);

            const originalFileName = file.name; // Guardamos el nombre original del archivo

            // Lógica para asignar un nombre personalizado basado en el nombre del archivo
            let nombre = '';
            if (originalFileName.includes('MAD_BCN')) {
                nombre = 'Madrid-Barcelona';
            } else if (originalFileName.includes('MAD_SEV')) {
                nombre = 'Madrid-Sevilla';
            } else if (originalFileName.includes('MAD_LEVANTE')) {
                nombre = 'Madrid-Levante';
            } else {
                nombre = 'Archivo Desconocido'; // Nombre por defecto si no hay coincidencias
            }

            const extractedDataArray = [];

            const worksheet = workbook.getWorksheet('Cálculos RED');
            if (!worksheet) {
                throw new Error('La hoja "Cálculos RED" no existe en el archivo.');
            }

            worksheet.eachRow((row, rowNumber) => {
                if (rowNumber >= 9 && rowNumber <= 44) {
                    const anio = parseInt(row.getCell(1).value) || 0;

                    const emisionesConstruccionAVE = getRoundedCellValue(row, 45);
                    const emisionesOperacionAVE = getRoundedCellValue(row, 46);
                    const emisionesMantenimientoAVE = getRoundedCellValue(row, 47);
                    const emisionesConstruccionAereo = getRoundedCellValue(row, 53);
                    const emisionesOperacionAereo = getRoundedCellValue(row, 54);
                    const emisionesMantenimientoAereo = getRoundedCellValue(row, 55);
                    const demandaAVLD = getRoundedCellValue(row, 26);
                    const demandaAerea = getRoundedCellValue(row, 27);
                    const emisionesPaxAVE = getRoundedCellValue(row, 16);
                    const emisionesPaxAereo = getRoundedCellValue(row, 18);

                    if (anio >= 1989 && anio <= 2024) {
                        extractedDataArray.push({
                            nombre, // Asignamos el nombre basado en el archivo
                            anio,
                            emisionesConstruccionAVE,
                            emisionesOperacionAVE,
                            emisionesMantenimientoAVE,
                            emisionesConstruccionAereo,
                            emisionesOperacionAereo,
                            emisionesMantenimientoAereo,
                            demandaAVLD,
                            demandaAerea,
                            emisionesPaxAVE,
                            emisionesPaxAereo
                        });
                    }
                }
            });

            setExtractedCorridorData(extractedDataArray);
        } catch (error) {
            console.error('Error al leer el archivo Excel:', error);
            setExtractedCorridorData([]);
        }
    };

    return { extractedCorridorData, readExcelCorridors };
};

export default useExcelReaderCorridors;
