import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { data } from '../../utils/chart-data';

const SimpleLineChart = () => {
    return (
        <ResponsiveContainer>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 40,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default SimpleLineChart;