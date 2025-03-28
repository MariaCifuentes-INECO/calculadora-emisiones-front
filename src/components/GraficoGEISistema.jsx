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
        ave: '#CB1823',
        aereo: '#673A8E',
        suma: '#184487',
        soloAvion: '#717070',
    };

    // Datasets
    const datasets = [
        {
            label: 'Acumulado ciclo de vida AVE',
            data: cicloVidaAVEAcumulado,
            borderColor: colors.ave,
            backgroundColor: colors.ave,
            pointStyle: 'circle', // Círculo para AVE
            pointRadius: 4,
        },
        {
            label: 'Acumulado ciclo de vida aéreo',
            data: cicloVidaAereoAcumulado,
            borderColor: colors.aereo,
            backgroundColor: colors.aereo,
            pointStyle: 'rect', // Cuadrado para Aéreo
            pointRadius: 5,
        },
        {
            label: 'Suma ferroviario + aéreo',
            data: sumaFerroviarioAereoAcumulado,
            borderColor: colors.suma,
            backgroundColor: colors.suma,
            pointStyle: 'circle', // Circulo para la suma
            pointRadius: 4,
        },
        {
            label: 'Solo aéreo',
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
                text: 'Emisiones acumuladas por modo de transporte (ciclo de vida completo)',
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
                    text: 'Millones de t CO\u2082 eq acumulados', // Título del eje Y
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