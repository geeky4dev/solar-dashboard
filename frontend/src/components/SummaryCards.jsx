import React from 'react';

function SummaryCards({ data }) {
  const values = data.daily.shortwave_radiation_sum;
  const max = Math.max(...values);
  const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);

  return (
    <div>
      <p><strong>Max Radiation:</strong> {max} kWh/m²</p>
      <p><strong>Average Radiation:</strong> {avg} kWh/m²</p>
    </div>
  );
}

export default SummaryCards;
