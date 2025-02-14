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
    // Desestructuración de data
    const {
        cicloVidaAVEAcumulado,
        cicloVidaAereoAcumulado,
        sumaFerroviarioAereoAcumulado,
        cicloVidaTodoAereoAcumulado,
    } = data || {};

    // Validación de datos
    if (!data || !cicloVidaAVEAcumulado || !cicloVidaAereoAcumulado || !sumaFerroviarioAereoAcumulado || !cicloVidaTodoAereoAcumulado) {
        return <div>No hay datos válidos para mostrar.</div>;
    }

    // Colores
    const colors = {
        ave: 'rgb(209, 117, 14)',
        aereo: 'rgb(32, 112, 216)',
        suma: 'rgb(255, 87, 51)',
        soloAvion: 'rgb(196, 191, 188)',
    };

    // Datasets
    const datasets = [
        {
            label: 'Acumulado ciclo de vida AVE',
            data: cicloVidaAVEAcumulado,
            borderColor: colors.ave,
            backgroundColor: colors.ave,
            fill: true,
        },
        {
            label: 'Acumulado ciclo de vida transporte aéreo',
            data: cicloVidaAereoAcumulado,
            borderColor: colors.aereo,
            backgroundColor: colors.aereo,
            fill: true,
        },
        {
            label: 'Suma ferroviario + aéreo',
            data: sumaFerroviarioAereoAcumulado,
            borderColor: colors.suma,
            backgroundColor: colors.suma,
            fill: true,
        },
        {
            label: 'Solo avión',
            data: cicloVidaTodoAereoAcumulado,
            borderColor: colors.soloAvion,
            backgroundColor: colors.soloAvion,
            fill: true,
        },
    ];

    // Configuración de la gráfica
    const chartData1 = {
        labels: Array.from({ length: 55 }, (_, i) => i + 1), // Eje X del 1 al 55
        datasets,
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
                    display: false, // Desactiva el grid en el eje X
                },
            },
            y: {
                title: {
                    display: true, // Muestra el título del eje Y
                    text: 't CO\u2082 eq acumulados', // Título del eje Y
                },
            },
        },
    };

    return <Line data={chartData1} options={options1} />;
};

export default GraficoGEISistema;