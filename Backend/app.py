from flask import Flask, request, jsonify
from flask_cors import CORS
from geopy.geocoders import Nominatim
from geopy.distance import geodesic

app = Flask(__name__)
CORS(app)

geolocator = Nominatim(user_agent="route-planner")

# Helper: Convert address to (lat, lon)
def geocode_address(address):
    location = geolocator.geocode(address)
    if location:
        return (location.latitude, location.longitude)
    else:
        return None

# Helper: Calculate straight-line distance
def haversine_distance(coord1, coord2):
    return geodesic(coord1, coord2).km

@app.route('/route', methods=['POST'])
def route():
    try:
        data = request.get_json(force=True)
    except Exception as e:
        print(f"Error parsing JSON: {e}")
        return jsonify({"error": "Invalid JSON"}), 400

    print("Received JSON:", data)

    start = data.get("start", "").strip()
    waypoints = data.get("waypoints", [])
    end = data.get("end", "").strip()
    optimize = data.get("optimize", "distance")

    if not start or not end:
        return jsonify({"error": "Start and end are required."}), 400

    # Geocode all addresses
    all_addresses = [start] + waypoints + [end]
    coords = []
    for address in all_addresses:
        coord = geocode_address(address)
        if not coord:
            return jsonify({"error": f"Could not geocode address: {address}"}), 400
        coords.append(coord)

    # If optimize = distance, use naive nearest-neighbor (for now)
    ordered_coords = [coords[0]]
    remaining = coords[1:-1]
    current = coords[0]

    while remaining:
        next_point = min(remaining, key=lambda x: haversine_distance(current, x))
        ordered_coords.append(next_point)
        remaining.remove(next_point)
        current = next_point

    ordered_coords.append(coords[-1])  # Append destination

    # Build response
    total_distance = 0.0
    for i in range(len(ordered_coords) - 1):
        total_distance += haversine_distance(ordered_coords[i], ordered_coords[i+1])

    return jsonify({
        "route_coords": ordered_coords,
        "distance_km": round(total_distance, 2),
        "status": "success"
    })

if __name__ == '__main__':
    app.run(debug=True, port=8000)
