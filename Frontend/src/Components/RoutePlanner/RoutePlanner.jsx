import { useState } from 'react';
import axios from 'axios';
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  useMap,
  Popup,
} from 'react-leaflet';
import L from 'leaflet';
import {
  FaMapMarkerAlt,
  FaMapPin,
  FaLocationArrow,
  FaPlus,
  FaTrash,
  FaRoute,
} from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';

// Custom DivIcons using React Icons
const createDivIcon = (icon, color, label = '') =>
  L.divIcon({
    html: renderToStaticMarkup(
      <div style={{ textAlign: 'center' }}>
        <div style={{ color, fontSize: '1.5rem' }}>{icon}</div>
        {label && <div style={{ color: 'black', fontSize: '0.8rem' }}>{label}</div>}
      </div>
    ),
    className: 'custom-div-icon',
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -40],
  });

const startIcon = createDivIcon(<FaMapMarkerAlt />, 'red', 'Start');
const endIcon = createDivIcon(<FaLocationArrow />, 'blue', 'End');

function FitBounds({ coords }) {
  const map = useMap();
  if (coords.length > 0) {
    const bounds = L.latLngBounds(coords);
    map.fitBounds(bounds, { padding: [50, 50] });
  }
  return null;
}

export default function RoutePlanner() {
  const [start, setStart] = useState('');
  const [waypoints, setWaypoints] = useState(['']);
  const [end, setEnd] = useState('');
  const [optimize, setOptimize] = useState('time');
  const [route, setRoute] = useState([]);
  const [stops, setStops] = useState([]);
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const addWaypoint = () => setWaypoints([...waypoints, '']);
  const removeWaypoint = (index) =>
    setWaypoints(waypoints.filter((_, i) => i !== index));
  const updateWaypoint = (index, value) => {
    const newWps = [...waypoints];
    newWps[index] = value;
    setWaypoints(newWps);
  };

  const fetchRoute = async () => {
    setError('');
    setRoute([]);
    setStops([]);
    setDistance(null);
    setTime(null);
    setLoading(true);

    try {
      const res = await axios.post('http://127.0.0.1:8000/route', {
        start,
        waypoints: waypoints.filter((w) => w.trim() !== ''),
        end,
        optimize,
      });

      if (res.data.error) {
        setError(res.data.error);
      } else {
        setRoute(res.data.route || []);
        setStops(res.data.stops || []);
        setDistance(res.data.distance_km);
        setTime(res.data.travel_time_min);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch route. Backend may be offline.');
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-full lg:w-1/3 bg-white p-6 shadow-xl overflow-auto h-full space-y-6">
        <h1 className="text-3xl font-extrabold text-indigo-700 flex items-center gap-2">
          <FaRoute /> India Route Planner
        </h1>

        <div>
          <label className="font-semibold">Start</label>
          <input
            value={start}
            onChange={(e) => setStart(e.target.value)}
            placeholder="e.g. Ranchi Station"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Waypoints</label>
          <div className="space-y-2">
            {waypoints.map((wp, index) => (
              <div key={index} className="flex gap-2">
                <input
                  value={wp}
                  onChange={(e) => updateWaypoint(index, e.target.value)}
                  placeholder={`Waypoint ${index + 1}`}
                  className="p-2 border rounded w-full"
                />
                <button
                  onClick={() => removeWaypoint(index)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addWaypoint}
            className="mt-2 bg-green-600 text-white px-3 py-2 rounded flex items-center gap-1"
          >
            <FaPlus /> Add Waypoint
          </button>
        </div>

        <div>
          <label className="font-semibold">End</label>
          <input
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            placeholder="e.g. Airport"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Optimize For</label>
          <select
            value={optimize}
            onChange={(e) => setOptimize(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="time">Time</option>
            <option value="distance">Distance</option>
          </select>
        </div>

        <button
          onClick={fetchRoute}
          disabled={loading}
          className={`w-full py-2 mt-4 text-white font-bold rounded ${
            loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Loading...' : 'Get Route'}
        </button>

        {error && <p className="text-red-600 mt-2">{error}</p>}

        {distance && time && (
          <div className="bg-gray-100 rounded p-4 mt-4">
            <p>
              <strong>Distance:</strong> {distance.toFixed(2)} km
            </p>
            <p>
              <strong>ETA:</strong> {time.toFixed(1)} minutes
            </p>
          </div>
        )}
      </div>

      {/* Map Section */}
      <div className="flex-1 h-full">
        <MapContainer
          center={[23.3441, 85.3096]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {route.length > 0 && (
            <>
              <FitBounds coords={route} />
              <Polyline positions={route} color="blue" />

              {stops.map((pos, idx) => {
                if (idx === 0)
                  return (
                    <Marker key={idx} position={pos} icon={startIcon}>
                      <Popup>Start</Popup>
                    </Marker>
                  );
                if (idx === stops.length - 1)
                  return (
                    <Marker key={idx} position={pos} icon={endIcon}>
                      <Popup>End</Popup>
                    </Marker>
                  );

                const waypointNumber = idx;
                const icon = createDivIcon(<FaMapPin />, 'green', `${waypointNumber}`);
                return (
                  <Marker key={idx} position={pos} icon={icon}>
                    <Popup>Waypoint {waypointNumber}</Popup>
                  </Marker>
                );
              })}
            </>
          )}
        </MapContainer>
      </div>
    </div>
  );
}
