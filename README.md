# ☀️ Solar Dashboard with Real-Time Data

This is a full-stack web application that visualizes **solar radiation data** based on user-selected cities. It allows users to view charts and key metrics for solar potential using real API data.

## 🧰 Tech Stack

**Frontend:**
- React + Vite
- Recharts (for data visualization)
- CSS / Bootstrap

**Backend:**
- Flask (Python)
- FastAPI-compatible structure (if extended)
- Solar radiation data fetched from Open Meteo API

---

## 📸 Features

- 🔎 Search cities (Berlin, Munich, Madrid, Paris, Tokyo, etc.)
- 📊 Chart of hourly solar radiation (W/m²)
- 🧾 Summary cards with daily averages
- 📦 Modular, clean project structure
- 🌐 Real API consumption with custom endpoint

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-username/solar-dashboard.git
cd solar-dashboard
2. Start the backend (Flask)
bash
Copy
Edit
cd backend
python3 -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
Flask will run on http://localhost:5001

3. Start the frontend (Vite + React)
bash
Copy
Edit
cd frontend
npm install
npm run dev
Frontend will run on http://localhost:5173

🌇 Supported Cities
Berlin

Munich

Madrid

Paris

Tokyo

New York

Sydney

Cape Town

Rio de Janeiro

You can add more cities in LocationForm.jsx.

📁 Project Structure (Simplified)
css
Copy
Edit
solar-dashboard/
├── backend/
│   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── components/
│       │   ├── Dashboard.jsx
│       │   ├── LocationForm.jsx
│       │   ├── SummaryCards.jsx
│       │   └── SolarChart.jsx
│       └── services/
│           └── solarAPI.js
🧠 What You'll Learn
How to build full-stack apps (React + Flask)

API integration and data handling

Charting with Recharts

Component-based UI design

Modular file structure for scaling

📌 TODO / Ideas
Add dropdown for cities instead of text input

Let users select custom coordinates with a map (Leaflet.js)

Store user searches or history

Deploy to Vercel + Render / Railway
