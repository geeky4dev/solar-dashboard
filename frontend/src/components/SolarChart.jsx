import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

function SolarChart({ data }) {
  const chartData = data.daily.time.map((date, i) => ({
    date,
    radiation: data.daily.shortwave_radiation_sum[i]
  }));

  return (
    <LineChart width={600} height={300} data={chartData}>
      <XAxis dataKey="date" />
      <YAxis unit=" kWh/m²" />
      <Tooltip />
      <Line type="monotone" dataKey="radiation" stroke="#ffa500" />
    </LineChart>
  );
}

export default SolarChart;
