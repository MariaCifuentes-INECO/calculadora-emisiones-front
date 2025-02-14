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
    Legend
);

const GraficoGEISistema = ({ data }) => {
    // Preparar los datos para la primera gráfica (Chart.js)
    const chartData1 = {
        labels: Array.from({ length: 55 }, (_, i) => i + 1), // Eje X del 1 al 55
        datasets: [
            {
                label: 'Acumulado ciclo de vida AVE',
                data: data.cicloVidaAVEAcumulado,
                borderColor: 'rgb(209, 117, 14)',
                backgroundColor: 'rgb(209, 117, 14)',
                fill: true,
            },
            {
                label: 'Acumulado ciclo de vida transporte aéreo',
                data: data.cicloVidaAereoAcumulado,
                borderColor: 'rgb(32, 112, 216)',
                backgroundColor: 'rgb(32, 112, 216)',
                fill: true,
            },
            {
                label: 'Suma ferroviario + aéreo',
                data: data.sumaFerroviarioAereoAcumulado,
                borderColor: 'rgb(255, 87, 51)',
                backgroundColor: 'rgb(255, 87, 51)',
                fill: true,
            },
            {
                label: 'Solo avión',
                data: data.cicloVidaTodoAereoAcumulado,
                borderColor: 'rgb(196, 191, 188)',
                backgroundColor: 'rgb(196, 191, 188)',
                fill: true,
            },
        ],
    };

    const options1 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Acumulado de emisiones por modo y acumulado de emisiones por modo y viajero (ciclo de vida completo)',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,  // Desactiva el grid en el eje X
                },
            },
            y: {
                title: {
                    display: true,  // Muestra el título del eje Y
                    text: 't CO\u2082 eq acumulados',  // Título del eje Y
                },
            },
        },
    };

    return <Line data={chartData1} options={options1} />;
};

export default GraficoGEISistema;