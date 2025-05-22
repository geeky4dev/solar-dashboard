from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/api/solar", methods=["GET"])
def get_solar_data():
    lat = request.args.get("lat", default="52.52")
    lon = request.args.get("lon", default="13.41")
    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&daily=shortwave_radiation_sum&timezone=auto"
    response = requests.get(url)
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(port=5000)