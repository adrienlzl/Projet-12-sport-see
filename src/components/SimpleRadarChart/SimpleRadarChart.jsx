import React from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import "./SimpleRadarChart.scss"

function SimpleRadarChart(props) {
    const { data } = props;
    const axisStyle = {
        axisLine: { stroke: 'rgba(255, 255, 255, 1)' },
        tick: { fill: 'rgba(255, 255, 255, 1)' },
    };

    return (
        <div className="radar-chart-contenaire">
        <RadarChart
            cx={135}
            cy={150}
            outerRadius={70}
            width={285}
            height={285}
            data={data}
            style={{ background: '#282D30' }}


        >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" axisLine={axisStyle.axisLine} tick={axisStyle.tick} />
            <PolarRadiusAxis tickFormatter={() => ''} axisLine={axisStyle.axisLine} tick={axisStyle.tick} />
            <Radar name="Data" dataKey="value" stroke="rgba(255, 1, 1, 0.7)" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
        </RadarChart>
        </div>
    );
}

export default SimpleRadarChart;