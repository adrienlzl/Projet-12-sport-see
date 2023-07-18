import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import "./SimpleLineChart.scss"


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label-tooltip">{`${payload[0].value} min`}</p>
            </div>
        );
    }

    return null;
};

const SimpleLineChart = ({ data, xDataKey, lines }) => {
    const formatXAxisTick = (value) => {
        const daysOfWeek = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
        return daysOfWeek[value - 1].charAt(0).toUpperCase();
    };
    const generateChartStyles = (backgroundColor) => ({
        chartContainer: {
            background: backgroundColor,
        },
        cartesianGrid: {
            stroke: backgroundColor,
        },
        xAxisLabel: {
            fill: backgroundColor,
        },
    });

    const chartStyles = generateChartStyles('rgba(255, 0, 0, 1)');

    return (
        <div className="chart-container" style={chartStyles.chartContainer}>
            <LineChart width={285} height={285} data={data} margin={{ top: 100, right: 40, left: 30 }}>
                <XAxis dataKey={xDataKey} tickFormatter={formatXAxisTick} axisLine={false} tick={{ fill: 'rgba(255, 255, 255, 1)' }} />
                <YAxis hide />
                <CartesianGrid strokeDasharray="0 3" horizontal={false} stroke={chartStyles.cartesianGrid} />
                <Tooltip content={<CustomTooltip />} labelFormatter={() => ""} />
                {lines.map((line, index) => (
                    <Line
                        key={index}
                        type="monotone"
                        dataKey={line.dataKey}
                        stroke="rgba(255, 255, 255, 1)"
                        dot={false}
                    />
                ))}
            </LineChart>
            <div className="title-simple-line-chart">
                <p className="text-title-simple-line-chart">Durée moyenne des sessions</p>
            </div>
        </div>
    );
};

export default SimpleLineChart;
