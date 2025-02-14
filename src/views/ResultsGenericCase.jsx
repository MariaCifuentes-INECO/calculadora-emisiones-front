import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import * as d3 from 'd3';
import '../styles/resultsGenericCaseStyle.css';
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
import GraficoGEISistema from "../components/GraficoGEISistema.jsx";

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

// Componente para la gráfica con D3.js
const LineChartD3 = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!data || !data.demandaTrenAcumulado || !data.demandaAvionAcumulado) return;

        // Limpia el contenedor antes de dibujar
        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove();

        // Configuración del SVG
        const width = 800;
        const height = 400;
        const margin = { top: 20, right: 30, bottom: 60, left: 50 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        // Crear el elemento SVG
        const chart = svg
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Ajustar los datos para empezar desde el quinto valor
        const cicloVidaAVEAcumuladoAjustado = data.cicloVidaAVEAcumulado.slice(4);
        const demandaTrenAcumuladoAjustado = data.demandaTrenAcumulado.slice(4);

        // Escalas para el eje X de cada dataset
        const xScaleTren = d3
            .scaleLinear()
            .domain([0, d3.max(demandaTrenAcumuladoAjustado)])
            .range([0, innerWidth]);

        const xScaleAvion = d3
            .scaleLinear()
            .domain([0, d3.max(data.demandaAvionAcumulado)])
            .range([0, innerWidth]);

        // Escala para el eje Y (compartido)
        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max([...cicloVidaAVEAcumuladoAjustado, ...data.cicloVidaAereoAcumulado])])
            .range([innerHeight, 0]);

        // Líneas generadoras
        const lineTren = d3
            .line()
            .x((d, i) => xScaleTren(demandaTrenAcumuladoAjustado[i]))
            .y((d, i) => yScale(cicloVidaAVEAcumuladoAjustado[i]));

        const lineAvion = d3
            .line()
            .x((d, i) => xScaleAvion(data.demandaAvionAcumulado[i]))
            .y((d, i) => yScale(data.cicloVidaAereoAcumulado[i]));

        // Dibujar las líneas
        chart
            .append("path")
            .datum(cicloVidaAVEAcumuladoAjustado)
            .attr("fill", "none")
            .attr("stroke", "rgba(75, 192, 192, 1)")
            .attr("stroke-width", 2)
            .attr("d", lineTren);

        chart
            .append("path")
            .datum(data.cicloVidaAereoAcumulado)
            .attr("fill", "none")
            .attr("stroke", "rgba(153, 102, 255, 1)")
            .attr("stroke-width", 2)
            .attr("d", lineAvion);

        // Tooltip
        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("background", "#fff")
            .style("padding", "5px")
            .style("border", "1px solid #ccc")
            .style("border-radius", "5px")
            .style("opacity", 0);

        // Puntos interactivos
        const dotsTren = chart
            .selectAll(".dot-tren")
            .data(cicloVidaAVEAcumuladoAjustado)
            .enter()
            .append("circle")
            .attr("class", "dot-tren")
            .attr("cx", (d, i) => xScaleTren(demandaTrenAcumuladoAjustado[i]))
            .attr("cy", (d, i) => yScale(cicloVidaAVEAcumuladoAjustado[i]))
            .attr("r", 5)
            .attr("fill", "rgba(75, 192, 192, 1)")
            .on("mouseover", (event, d) => {
                tooltip.transition().duration(200).style("opacity", 0.9);
                tooltip.html(`Ciclo de vida AVE: ${d}`)
                    .style("left", `${event.pageX + 5}px`)
                    .style("top", `${event.pageY - 20}px`);
            })
            .on("mouseout", () => {
                tooltip.transition().duration(500).style("opacity", 0);
            });

        const dotsAvion = chart
            .selectAll(".dot-avion")
            .data(data.cicloVidaAereoAcumulado)
            .enter()
            .append("circle")
            .attr("class", "dot-avion")
            .attr("cx", (d, i) => xScaleAvion(data.demandaAvionAcumulado[i]))
            .attr("cy", (d, i) => yScale(data.cicloVidaAereoAcumulado[i]))
            .attr("r", 5)
            .attr("fill", "rgba(153, 102, 255, 1)")
            .on("mouseover", (event, d) => {
                tooltip.transition().duration(200).style("opacity", 0.9);
                tooltip.html(`Ciclo de vida Aéreo: ${d}`)
                    .style("left", `${event.pageX + 5}px`)
                    .style("top", `${event.pageY - 20}px`);
            })
            .on("mouseout", () => {
                tooltip.transition().duration(500).style("opacity", 0);
            });

        // Ejes
        const xAxisTren = d3.axisBottom(xScaleTren);
        const xAxisAvion = d3.axisBottom(xScaleAvion);
        const yAxis = d3.axisLeft(yScale);

        chart
            .append("g")
            .attr("transform", `translate(0, ${innerHeight})`)
            .call(xAxisTren)
            .append("text")
            .attr("x", innerWidth)
            .attr("y", -6)
            .attr("fill", "#000")
            .attr("text-anchor", "end")
            .text("Demanda Tren");

        chart
            .append("g")
            .attr("transform", `translate(0, ${innerHeight + 20})`)
            .call(xAxisAvion)
            .append("text")
            .attr("x", innerWidth)
            .attr("y", -6)
            .attr("fill", "#000")
            .attr("text-anchor", "end")
            .text("Demanda Avión");

        chart.append("g").call(yAxis);
    }, [data]);

    return <svg ref={chartRef} className="chart-container"></svg>;
};

// Componente principal
const ResultsGenericCase = () => {
    const location = useLocation();
    const { data } = location.state || {};

    // Validar que los datos estén presentes y tengan el formato correcto
    if (!data || !data.cicloVidaAVEAcumulado || !data.cicloVidaAereoAcumulado || !data.cicloVidaTodoAereoAcumulado || !data.sumaFerroviarioAereoAcumulado) {
        return <div>No hay datos válidos para mostrar.</div>;
    }

    return (
        <div className="globalContainer resultsGenericCase-container">
            <section>
                <h1>Resultados caso genérico</h1>
                <p className="mt-5 mb-5">
                    Aun por definir, pero la idea es que haya un texto que se complete con números de los resultados, y
                    que aparezcan varios gráficos de resultados.
                </p>
            </section>
            <section>
            <div className="chart-container">
                    <GraficoGEISistema data={data} />
                </div>
                <div className="chart-container">
                    <LineChartD3 data={data} />
                </div>
            </section>
        </div>
    );
};

export default ResultsGenericCase;