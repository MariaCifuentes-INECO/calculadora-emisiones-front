import { Chart } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import PropTypes from "prop-types"

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend)

const GraficoAnalisisReal = ({ backendData }) => {
    // Validar que backendData esté definido y no esté vacío
    if (!backendData || backendData.length === 0) {
        return <div>No hay datos disponibles para mostrar el gráfico.</div>
    }

    // Preparar los datos para el gráfico
    const labels = backendData.map((item) => item.anio.toString()) // Eje X: años

    // CAMBIO CLAVE: Separar los datasets en barras y líneas
    const barDatasets = [
        // Grupo 1 de barras apiladas: Emisiones Aéreo
        {
            type: "bar",
            label: "Emisiones Construcción Aéreo",
            data: backendData.map((item) => item.emisionesConstruccionAereo),
            backgroundColor: "rgb(112,48,160)", // Color para Construcción Aéreo
            yAxisID: "y1", // Asignar al primer eje Y
            stack: "stack2", // Apilar en otro grupo
            order: 2, // Orden de renderizado (mayor número = más atrás)
        },
        {
            type: "bar",
            label: "Emisiones Operación Aéreo",
            data: backendData.map((item) => item.emisionesOperacionAereo),
            backgroundColor: "rgb(140, 93, 179)", // Color para Operación Aéreo
            yAxisID: "y1", // Asignar al primer eje Y
            stack: "stack2", // Apilar en otro grupo
            order: 2, // Orden de renderizado (mayor número = más atrás)
        },
        {
            type: "bar",
            label: "Emisiones Mantenimiento Aéreo",
            data: backendData.map((item) => item.emisionesMantenimientoAereo),
            backgroundColor: "rgb(199, 136,224)", // Color para Mantenimiento Aéreo
            yAxisID: "y1", // Asignar al primer eje Y
            stack: "stack2", // Apilar en otro grupo
            order: 2, // Orden de renderizado (mayor número = más atrás)
        },
        // Grupo 2 de barras apiladas: Emisiones AVE
        {
            type: "bar",
            label: "Emisiones Construcción AVE",
            data: backendData.map((item) => item.emisionesConstruccionAVE),
            backgroundColor: "rgb(87,137,122)", // Color para Construcción AVE
            yAxisID: "y1", // Asignar al primer eje Y
            stack: "stack1", // Apilar en el mismo grupo
            order: 2, // Orden de renderizado (mayor número = más atrás)
        },
        {
            type: "bar",
            label: "Emisiones Mantenimiento AVE",
            data: backendData.map((item) => item.emisionesMantenimientoAVE),
            backgroundColor: "rgb(128, 174, 156)", // Color para Mantenimiento AVE
            yAxisID: "y1", // Asignar al primer eje Y
            stack: "stack1", // Apilar en el mismo grupo
            order: 2, // Orden de renderizado (mayor número = más atrás)
        },
    ]

    const lineDatasets = [
        // Líneas: Demanda
        {
            type: "line",
            label: "Demanda AV LD",
            data: backendData.map((item) => item.demandaAVLD),
            borderColor: "rgba(255, 99, 132, 1)", // Color para Demanda AVLD
            backgroundColor: "rgba(255, 99, 132)",
            yAxisID: "y2", // Asignar al segundo eje Y
            order: 1, // Orden de renderizado (menor número = más adelante)
            pointRadius: 0, // Quitar los puntos
        },
        {
            type: "line",
            label: "Demanda Aérea Acumulada",
            data: backendData.map((item) => item.demandaAerea),
            borderColor: "rgba(54, 162, 235, 1)", // Color para Demanda Aérea
            backgroundColor: "rgba(54, 162, 235)",
            yAxisID: "y2", // Asignar al segundo eje Y
            order: 1, // Orden de renderizado (menor número = más adelante)
            pointRadius: 0, // Quitar los puntos
        },
    ]

    // Combinar todos los datasets, poniendo las líneas al final
    const data = {
        labels,
        datasets: [...barDatasets, ...lineDatasets],
    }

    const options = {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Emisiones acumuladas en el periodo (construcción + mantenimiento + operación) y viajes anuales en cada modo",
            },
        },
        scales: {
            y1: {
                type: "linear",
                display: true,
                position: "left", // Eje Y izquierdo para las barras
                title: {
                    display: true,
                    text: "Millones de t CO\u2082 eq acumulados", // Título del primer eje Y
                },
                ticks: {
                    callback: (value) => {
                        // Redondear a millones solo en el eje Y, sin modificar los datos reales
                        return Math.round(value / 1000000) // Dividir por 1 millón para mostrarlo en millones
                    },
                },
                stacked: true, // Apilar las barras en el eje Y
            },
            y2: {
                type: "linear",
                display: true,
                position: "right", // Eje Y derecho para las líneas
                title: {
                    display: true,
                    text: "Miles de viajes acumulados", // Título del segundo eje Y
                },
                ticks: {
                    callback: (value) => {
                        // Redondear a miles solo en el eje Y, sin modificar los datos reales
                        return Math.round(value / 1000) //
                    },
                },
                grid: {
                    drawOnChartArea: false, // Evitar que la cuadrícula del segundo eje Y se superponga con el primero
                },
            },
            x: {
                stacked: true, // Apilar las barras en el eje X
            },
        },
    }

    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <Chart type="bar" data={data} options={options} />
        </div>
    )
}

// Definir PropTypes para validar los props
GraficoAnalisisReal.propTypes = {
    backendData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            anio: PropTypes.number.isRequired,
            emisionesConstruccionAVE: PropTypes.number.isRequired,
            emisionesMantenimientoAVE: PropTypes.number.isRequired,
            emisionesConstruccionAereo: PropTypes.number.isRequired,
            emisionesOperacionAereo: PropTypes.number.isRequired,
            emisionesMantenimientoAereo: PropTypes.number.isRequired,
            demandaAVLD: PropTypes.number.isRequired,
            demandaAerea: PropTypes.number.isRequired,
        }),
    ).isRequired,
}

export default GraficoAnalisisReal

