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
    BarController, // Asegúrate de importar el controlador de barras
    LineController, // Asegúrate de importar el controlador de líneas
} from "chart.js"
import PropTypes from "prop-types"
import "../styles/graficoAnalisisRealStyle.css"
import {useTranslation} from "react-i18next";

// Registra los controladores
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    BarController, // Registra el controlador de barras
    LineController // Registra el controlador de líneas
);

const GraficoAnalisisReal = ({ backendData }) => {

    const { t } = useTranslation('graficoAnalisisReal');

    if (!backendData || backendData.length === 0) {
        return <div>{t('noData')}</div>
    }

    const labels = backendData.map((item) => item.anio.toString())

    const barDatasets = [
        {
            type: "bar",
            label: t('datasets.airConstruction'),
            data: backendData.map((item) => item.emisionesConstruccionAereo),
            backgroundColor: "#184487",
            borderColor: "#FFFFFF",
            borderWidth: { top: 0.5 },
            borderSkipped: false,
            yAxisID: "y1",
            stack: "stack2",
            order: 2,
        },
        {
            type: "bar",
            label: t('datasets.airOperation'),
            data: backendData.map((item) => item.emisionesOperacionAereo),
            backgroundColor: "#3463AC",
            yAxisID: "y1",
            stack: "stack2",
            order: 2,
            borderColor: "#FFFFFF",
            borderWidth: { top: 0.5 },
            borderSkipped: false,
        },
        {
            type: "bar",
            label: t('datasets.airMaintenance'),
            data: backendData.map((item) => item.emisionesMantenimientoAereo),
            backgroundColor: "#2F92D0",
            yAxisID: "y1",
            stack: "stack2",
            order: 2,
        },
        {
            type: "bar",
            label: t('datasets.railConstruction'),
            data: backendData.map((item) => item.emisionesConstruccionAVE),
            backgroundColor: "#720515",
            yAxisID: "y1",
            stack: "stack1",
            order: 2,
            borderColor: "#FFFFFF",
            borderWidth: { top: 0.5 },
            borderSkipped: false,
        },
        {
            type: "bar",
            label: t('datasets.railOperation'),
            data: backendData.map((item) => item.emisionesOperacionAVE),
            backgroundColor: "#CB1823",
            yAxisID: "y1",
            stack: "stack1",
            order: 2,
            borderColor: "#FFFFFF",
            borderWidth: { top: 0.5 },
            borderSkipped: false,
        },
        {
            type: "bar",
            label: t('datasets.railMaintenance'),
            data: backendData.map((item) => item.emisionesMantenimientoAVE),
            backgroundColor: "#E9465C",
            yAxisID: "y1",
            stack: "stack1",
            order: 2,
        },
    ]

    const lineDatasets = [
        {
            type: "line",
            label: t('datasets.railDemand'),
            data: backendData.map((item) =>
                item.demandaAVLD === 0 && item.demandaAerea === 0 ? NaN : item.demandaAVLD
            ),
            borderColor: "#717070",
            backgroundColor: "#717070",
            yAxisID: "y2",
            order: 1,
            pointRadius: 5,
            pointBackgroundColor: "#717070",
            pointBorderColor: "#FFFFFF",
            pointBorderWidth: 2,
            pointStyle: "circle",
        },
        {
            type: "line",
            label: t('datasets.airDemand'),
            data: backendData.map((item) =>
                item.demandaAVLD === 0 && item.demandaAerea === 0 ? NaN : item.demandaAerea
            ),
            borderColor: "#673A8E",
            backgroundColor: "#673A8E",
            yAxisID: "y2",
            order: 1,
            pointStyle: "rect",
            pointRadius: 5,
            pointBorderColor: "#FFFFFF",
            pointBorderWidth: 2,
        },
    ]

    const data = {
        labels,
        datasets: [...barDatasets, ...lineDatasets],
    }

    const renderLegend = () => (
        <div className="legend-container">
            {lineDatasets.map((dataset, index) => (
                <div key={`line-${index}`} className="legend-item">
                    <div
                        className={`legend-line ${dataset.pointStyle === "circle" ? "circle" : ""}`}
                        style={{ backgroundColor: dataset.backgroundColor, borderColor: dataset.pointBorderColor }}
                    ></div>
                    <span>{dataset.label}</span>
                </div>
            ))}
            {barDatasets.map((dataset, index) => (
                <div key={`bar-${index}`} className="legend-item">
                    <div className="legend-bar" style={{ backgroundColor: dataset.backgroundColor }}></div>
                    <span>{dataset.label}</span>
                </div>
            ))}
        </div>
    )

    const options = {
        responsive: true,
        interaction: { mode: "index", intersect: false },
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: t('title'),
                font: { // Aquí es donde debe ir la fuente
                    family: 'Poppins', // Fuente para el título
                },
            },
        },
        scales: {
            y1: {
                type: "linear",
                display: true,
                position: "left",
                title: {
                    display: true,
                    text: t('axes.emissions'),
                    font: {
                        family: 'Poppins',
                    },
                },
                ticks: {
                    callback: (value) => Math.round(value / 1000000),
                    font: {
                        family: 'Poppins',
                    },
                },
                stacked: true,
            },
            y2: {
                type: "linear",
                display: true,
                position: "right",
                title: {
                    display: true,
                    text: t('axes.passengers'),
                    font: {
                        family: 'Poppins',
                    },
                },
                ticks: {
                    callback: (value) => Math.round(value / 1000),
                    font: {
                        family: 'Poppins',
                    },
                },
                grid: { drawOnChartArea: false },
            },
            x: { stacked: true },
        },
    }

    return (
        <div className="grafico-container">
            <Chart type="bar" data={data} options={options} />
            {renderLegend()}
        </div>
    )
}

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
