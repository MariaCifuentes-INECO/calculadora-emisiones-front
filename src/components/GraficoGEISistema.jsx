import {Line} from 'react-chartjs-2';
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
import {useTranslation} from "react-i18next";

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

const GraficoGEISistema = ({ data }) => {

    const { t } = useTranslation('graficoGEISistema');
    // Desestructuración de data
    const {
        cicloVidaAVEAcumulado,
        cicloVidaAereoAcumulado,
        sumaFerroviarioAereoAcumulado,
        cicloVidaTodoAereoAcumulado,
    } = data || {};

    // Validación de datos
    if (!data || !cicloVidaAVEAcumulado || !cicloVidaAereoAcumulado || !sumaFerroviarioAereoAcumulado || !cicloVidaTodoAereoAcumulado) {
        return <div>{t('noData')}</div>;
    }

    // Colores
    const colors = {
        ave: '#CB1823',
        aereo: '#673A8E',
        suma: '#184487',
        soloAvion: '#717070',
    };

    // Datasets
    const datasets = [
        {
            label: t('datasets.cicloVidaAVEAcumulado'),
            data: cicloVidaAVEAcumulado,
            borderColor: colors.ave,
            backgroundColor: colors.ave,
            pointStyle: 'circle', // Círculo para AVE
            pointRadius: 4,
        },
        {
            label: t('datasets.cicloVidaAereoAcumulado'),
            data: cicloVidaAereoAcumulado,
            borderColor: colors.aereo,
            backgroundColor: colors.aereo,
            pointStyle: 'rect', // Cuadrado para Aéreo
            pointRadius: 5,
        },
        {
            label: t('datasets.sumaFerroviarioAereoAcumulado'),
            data: sumaFerroviarioAereoAcumulado,
            borderColor: colors.suma,
            backgroundColor: colors.suma,
            pointStyle: 'circle', // Circulo para la suma
            pointRadius: 4,
        },
        {
            label: t('datasets.cicloVidaTodoAereoAcumulado'),
            data: cicloVidaTodoAereoAcumulado,
            borderColor: colors.soloAvion,
            backgroundColor: colors.soloAvion,
            pointStyle: 'triangle', // Triángulo para solo avión
            pointRadius: 5,
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
                labels: {
                    usePointStyle: true, // Hace que la leyenda use los mismos estilos de los puntos
                    font: {
                        family: 'Poppins', // Fuente para la leyenda
                    },
                },
            },
            title: {
                display: true, // Primero se activa el título
                text: t('title'),
                font: { // Aquí es donde debe ir la fuente
                    family: 'Poppins', // Fuente para el título
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Desactiva el grid en el eje X
                },
                ticks: {
                    font: {
                        family: 'Poppins',
                        size: 10,
                    },
                },
            },
            y: {
                title: {
                    font: {
                        family: 'Poppins',
                    },
                    display: true, // Muestra el título del eje Y
                    text: t('axes.emissions'),
                },
                ticks: {
                    callback: function(value) {
                        // Redondear a millones solo en el eje Y, sin modificar los datos reales
                        return Math.round(value / 1000000); // Dividir por 1 millón para mostrarlo en millones
                    },
                    font: {
                        family: 'Poppins',
                    },
                },
            },
        },
    };

    return (
        <div className="grafico-container">
            <Line data={chartData1} options={options1} />
        </div>
    )
};

export default GraficoGEISistema;