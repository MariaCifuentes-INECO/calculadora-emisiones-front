import {Line} from "react-chartjs-2";

const GraficoEmisionAcumPax = ({ data }) => {
    if (!data) {
        return <div>No hay datos válidos para mostrar.</div>;
    }

    const colors = {
        ave: '#CB1823',
        aereo: '#1A4488',
    };

    // Filtrar datos para eliminar los años donde ambos valores sean 0 o null
    const filteredData = data.filter(item =>
        (item.emisionesPaxAVE !== 0 && item.emisionesPaxAVE !== null) ||
        (item.emisionesPaxAereo !== 0 && item.emisionesPaxAereo !== null)
    );

    const labels = filteredData.map(item => item.anio.toString());

    const datasets = [
        {
            label: 'Aéreo peninsular',
            data: filteredData.map(item => item.emisionesPaxAereo === 0 ? null : item.emisionesPaxAereo),
            borderColor: colors.aereo,
            backgroundColor: colors.aereo,
            pointStyle: 'rect',
            pointRadius: 5,
        },
        {
            label: 'Red AV',
            data: filteredData.map(item => item.emisionesPaxAVE === 0 ? null : item.emisionesPaxAVE),
            borderColor: colors.ave,
            backgroundColor: colors.ave,
            pointStyle: 'circle',
            pointRadius: 4,
        },
    ];

    const chartData = { labels, datasets };

    const options1 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { usePointStyle: true, font: { family: 'Poppins' } },
            },
            title: {
                display: true,
                text: 'Emisiones acumuladas por pasajero o viajero acumulado',
                font: { family: 'Poppins' },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { font: { family: 'Poppins' } },
            },
            y: {
                title: {
                    display: true,
                    text: 'Kg CO\u2082 acumulados por pasajero o viajero acumulado',
                    font: { family: 'Poppins' },
                },
                ticks: {
                    callback: (value) => Math.round(value / 1000),
                    font: { family: 'Poppins' },
                },
            },
        },
    };

    return (
        <div className="grafico-container">
            <Line data={chartData} options={options1} />
        </div>
    );
};

export default GraficoEmisionAcumPax;
