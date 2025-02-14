import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const GraficoGEIvsViajeros = ({ data }) => {
    // Preparar los datos para la gráfica
    const chartData2 = {
        datasets: [
            {
                label: 'Acumulado ciclo de vida AVE',
                data: data.demandaTrenAcumulado.map((d, i) => ({
                    x: parseFloat(d), // Asegurarse de que x sea un valor numérico
                    y: parseFloat(data.cicloVidaAVEAcumulado[i + 5]), // Asegurarse de que y sea un valor numérico
                })),
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Para que el color de fondo sea visible si `fill` está activado
                showLine: true, // Mostrar la línea de la gráfica
            },
            {
                label: 'Acumulado ciclo de vida transporte aéreo',
                data: data.demandaAvionAcumulado.map((d, i) => ({
                    x: parseFloat(d), // Asegurarse de que x sea un valor numérico
                    y: parseFloat(data.cicloVidaAereoAcumulado[i + 5]), // Asegurarse de que y sea un valor numérico
                })),
                borderColor: 'rgb(153, 102, 255)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)', // Para que el color de fondo sea visible si `fill` está activado
                showLine: true, // Mostrar la línea de la gráfica
            },
        ],
    };

    // Opciones para la gráfica de Chart.js
    const options2 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Acumulado de emisiones por modo según número de viajeros (ciclo de vida completo)',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Millones de viajeros acumulados', // Título del eje X
                },
                type: 'linear', // Asegurarse de que el eje X sea lineal (si tus datos son continuos)
                position: 'bottom',
                grid: {
                    display: false, // Desactiva la grilla si no la necesitas
                },
                ticks: {
                    callback: function(value) {
                        // Redondear a millones solo en el eje X, sin modificar los datos reales
                        return Math.round(value / 1000000); // Dividir por 1 millón para mostrarlo en millones
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Millones de t CO₂ eq acumulados',
                },
                ticks: {
                    callback: function(value) {
                        // Redondear a millones solo en el eje Y, sin modificar los datos reales
                        return Math.round(value / 1000000); // Dividir por 1 millón para mostrarlo en millones
                    },
                },
            },
        },
    };

    return <Line data={chartData2} options={options2} />;
};

export default GraficoGEIvsViajeros;
