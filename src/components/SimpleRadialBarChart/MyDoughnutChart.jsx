import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import "./MyDoughnutChart.scss"

const MyDoughnutChart = ({ value }) => {
    const newValue = value ;
    const totalValue = 100;

    const chartData = [
        { name: 'Value', value: newValue },
        { name: 'Remaining', value: totalValue - newValue },
    ];

    const COLORS = ['#FF0000', '#FFFFFF'];

    const containerStyles = {
        backgroundColor: '#FBFBFB',
        width: '285px',
        height: '285px',
    };

    return (
        <div style={containerStyles} className="doughnut-chart">
            <PieChart width={285} height={285}>
                <Pie
                    data={chartData}
                    cx={142.5}
                    cy={142.5}
                    innerRadius={80}
                    outerRadius={90}
                    startAngle={90}
                    endAngle={480}
                    paddingAngle={0}
                    cornerRadius={10}
                    dataKey="value"
                >
                    <Cell fill={COLORS[0]} />
                    <Cell fill={COLORS[1]} />
                </Pie>

                <Pie
                    data={[{ name: 'Total', value: totalValue }]}
                    cx={142.5}
                    cy={142.5}
                    innerRadius={0}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={0}
                    dataKey="value"
                >
                    <Cell fill={COLORS[1]} />
                </Pie>

                <Tooltip enabled={false} />
            </PieChart>
            <p className="score-doughnut-chart">Score</p>
            <div className="text-center-doughnut-chart">
                <p className="value-doughnut-chart">{value}%</p>
                <p className="text-doughnut-chart">de votre objectif</p>
            </div>

        </div>
    );
};

export default MyDoughnutChart;