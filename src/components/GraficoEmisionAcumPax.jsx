import {Line} from "react-chartjs-2";
import {useTranslation} from "react-i18next";

const GraficoEmisionAcumPax = ({ data }) => {

    const { t } = useTranslation('graficoEmisionAcumPax');

    if (!data) {
        return <div>{t('noData')}</div>;
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
            label: t('datasets.airTransport'),
            data: filteredData.map(item => item.emisionesPaxAereo === 0 ? null : item.emisionesPaxAereo),
            borderColor: colors.aereo,
            backgroundColor: colors.aereo,
            pointStyle: 'rect',
            pointRadius: 5,
        },
        {
            label: t('datasets.railTransport'),
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
                text: t('title'),
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
                    text: t('axes.passengers'),
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
