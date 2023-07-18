import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import "./DailyActivityChart.scss"



const DailyActivityChart = (props) => {
    const formatTick = (tick) => {
        return new Date(tick).getDate();
    };


    return (
        <div className="daily-activity-chart">
        <BarChart width={900} height={212} data={props.data} barGap={8} backgroundColor="#FBFBFB">
            <CartesianGrid strokeDasharray="1 3" />
            <XAxis dataKey={(data) => data.day} tickFormatter={formatTick} />
            <YAxis yAxisId="left" hide />
            <YAxis yAxisId="right" orientation="right" domain={[0, 80]} tickFormatter={(value) => value} axisLine={false}/>
            <Tooltip />
            <Bar yAxisId="left" dataKey="kilogram" fill="rgba(40, 45, 48, 1)" name="Kilogram" barSize={7} />
            <Bar yAxisId="right" dataKey="calories" fill="rgba(230, 0, 0, 1)" name="Calories" barSize={7} />
        </BarChart>
            <div className="title-legend-daily-activity-chart">
            <p className="title-daily-activity-chart">Activité quotidienne</p>
            <div className="legend-daily-activity-chart">
                <div className="circle-01"></div>
                <p className="poids">Poids (kg)</p>
                <div className="circle-02"></div>
                <p className="calorie-brulées">Calories brûlées (kCal)</p>
            </div>
            </div>
        </div>
    );
};

export default DailyActivityChart;