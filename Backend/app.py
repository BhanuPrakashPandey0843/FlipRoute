from flask import Flask, request, jsonify
from flask_cors import CORS
from geopy.geocoders import Nominatim
from geopy.distance import geodesic
import networkx as nx
from utils.graph_loader import load_graph
from services.routing_service import get_optimized_route

app = Flask(__name__)
CORS(app)

# Geocoder
geolocator = Nominatim(user_agent="route-planner")

# Load graph once on startup
print("📦 Loading Ranchi GraphML...")
G = load_graph("ranchi")
print("✅ Graph loaded.")

# Geocode address to (lat, lon)
def geocode_address(address):
    try:
        location = geolocator.geocode(address)
        return (location.latitude, location.longitude) if location else None
    except:
        return None

@app.route("/")
def home():
    return "✅ Last-Mile Route Optimizer Backend Running"

@app.route("/route", methods=["POST"])
def route():
    try:
        data = request.get_json(force=True)
        print("📩 Received:", data)

        start_addr = data.get("start", "").strip()
        end_addr = data.get("end", "").strip()
        waypoint_addrs = data.get("waypoints", [])
        # strategy param optional (for future use)
        strategy = data.get("strategy", "greedy")  

        if not start_addr or not end_addr:
            return jsonify({"error": "Start and end are required"}), 400

        all_addresses = [start_addr] + waypoint_addrs + [end_addr]
        coords = []

        # Geocode all addresses
        for address in all_addresses:
            coord = geocode_address(address)
            if not coord:
                return jsonify({"error": f"Could not geocode address: {address}"}), 400
            coords.append(coord)

        start = coords[0]
        end = coords[-1]
        waypoints = coords[1:-1]

        # 🔄 Compute optimized real-road route
        result = get_optimized_route(start, end, waypoints, strategy=strategy, graph=G)
        return jsonify(result)

    except Exception as e:
        print("❌ Error:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8000)
