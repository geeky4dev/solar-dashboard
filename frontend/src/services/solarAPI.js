export async function fetchSolarData(lat, lon) {
  const res = await fetch(`http://localhost:5000/api/solar?lat=${lat}&lon=${lon}`);
  return await res.json();
}