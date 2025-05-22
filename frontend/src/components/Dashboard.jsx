import React, { useState, useEffect } from 'react';
import LocationForm from './LocationForm';
import SummaryCards from './SummaryCards';
import SolarChart from './SolarChart';
import { fetchSolarData } from '../services/solarAPI';
{/* OPCIÓN 1 con CSS: import './Dashboard.css';*/}
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const [location, setLocation] = useState({ lat: 52.52, lon: 13.41 }); // Default Berlin
  const [cityName, setCityName] = useState('Berlin');
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSolarData(location.lat, location.lon).then(setData);
  }, [location]);

  // Handler to receive both location and city name from LocationForm
  const handleLocationSubmit = ({ lat, lon }, name) => {
    setLocation({ lat, lon });
    setCityName(name);
  };

  return (
    <div>
      {/* Pass the handler that expects both params */}
      <LocationForm onSubmit={handleLocationSubmit} />

      {/* Show city name here */}
      <h2 className="text-center text-primary fw-bold my-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
        Solar data for {cityName.toUpperCase()}
      </h2>

      {/* OPCIÓN 1 usando CSS puro <h2 className="solar-title">Solar data for {cityName.toUpperCase()}</h2>*/}

      {data && (
        <>
          <SummaryCards data={data} />
          <SolarChart data={data} />
        </>
      )}
    </div>
  );
}

export default Dashboard;