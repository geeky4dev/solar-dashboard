import React, { useState } from 'react';

const cities = {
  berlin: { lat: 52.52, lon: 13.41 },
  madrid: { lat: 40.42, lon: -3.70 },
  munich: { lat: 48.14, lon: 11.58 },
  paris: { lat: 48.85, lon: 2.35 },
  tokyo: { lat: 35.68, lon: 139.69 },
  santiago: { lat: -33.45, lon: -70.66 },
  buenosaires: { lat: -34.61, lon: -58.38 },
  caracas: { lat: 10.48, lon: -66.88 },
  new_york: { lat: 40.71, lon: -74.01 },
  sydney: { lat: -33.87, lon: 151.21 },
  cape_town: { lat: -33.93, lon: 18.42 },
  rio_de_janeiro: { lat: -22.90, lon: -43.21 },
  stockholm: { lat: 59.33, lon: 18.06 },
};

function LocationForm({ onSubmit }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const key = city.toLowerCase().trim().replace(/\s+/g, '_');

    if (cities[key]) {
      onSubmit(cities[key], key);
      setCity('');
    } else {
      alert(
        'City not recognized. Try one of: Berlin, Munich, Madrid, Paris, Tokyo, Santiago, Buenos Aires, Caracas, New York, Sydney, Cape Town, Rio de Janeiro, Stockholm'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={city}
        placeholder="Enter city (e.g., Berlin, Madrid, Paris)"
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '0.5rem', width: '250px', marginRight: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>
        Load Data
      </button>
      <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#555' }}>
        Try cities: Berlin, Munich, Madrid, Paris, Tokyo, Santiago, Buenos Aires, Caracas, New York, Sydney, Cape Town, Rio de Janeiro, Stockholm
      </p>
    </form>
  );
}

export default LocationForm;

