export async function fetchSolarData(lat, lon) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const res = await fetch(`${backendUrl}/api/solar?lat=${lat}&lon=${lon}`);
  return await res.json();
}