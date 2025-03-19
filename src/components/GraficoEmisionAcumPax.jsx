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

const GraficoEmisionAcumPax = ({ data }) => {

    // Validación de datos
    if (!data) {
        return <div>No hay datos válidos para mostrar.</div>;
    }

    // Colores
    const colors = {
        ave: '#CB1823',
        aereo: '#673A8E',
    };

    const labels = data.map(item => item.anio.toString());

    const datasets = [
        {
            label: 'Ferroviario',
            data: data.map(item => item.emisionesPaxAVE === 0 ? null : item.emisionesPaxAVE),
            borderColor: colors.ave,
            backgroundColor: colors.ave,
            pointStyle: 'circle',
            pointRadius: 4,
        },
        {
            label: 'Aéreo',
            data: data.map(item => item.emisionesPaxAereo === 0 ? null : item.emisionesPaxAereo),
            borderColor: colors.aereo,
            backgroundColor: colors.aereo,
            pointStyle: 'rect',
            pointRadius: 5,
        },
    ];


    // Configuración de la gráfica
    const chartData = {
        labels,
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
                text: 'Emisiones acumuladas por pasajero',
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
                    },
                },
            },
            y: {
                title: {
                    font: {
                        family: 'Poppins',
                    },
                    display: true, // Muestra el título del eje Y
                    text: 'Kg CO\u2082 acumulados por viajero', // Título del eje Y
                },
                ticks: {
                    callback: (value) => Math.round(value / 1000),
                    font: {
                        family: 'Poppins',
                    },
                },
            },
        },
    };

    return (
        <div className="grafico-container">
            <Line data={chartData} options={options1} />
        </div>
    )
};

export default GraficoEmisionAcumPax;