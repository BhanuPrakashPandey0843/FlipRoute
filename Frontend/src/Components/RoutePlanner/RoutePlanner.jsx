
import { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { FaPlus, FaTrash, FaRoute } from 'react-icons/fa';

export default function RoutePlanner() {
  const [start, setStart] = useState('');
  const [waypoints, setWaypoints] = useState(['']);
  const [end, setEnd] = useState('');
  const [optimize, setOptimize] = useState('time');
  const [route, setRoute] = useState([]);
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const addWaypoint = () => setWaypoints([...waypoints, '']);
  const removeWaypoint = (index) => setWaypoints(waypoints.filter((_, i) => i !== index));
  const updateWaypoint = (index, value) => {
    const newWps = [...waypoints];
    newWps[index] = value;
    setWaypoints(newWps);
  };

  const fetchRoute = async () => {
    setError('');
    setRoute([]);
    setDistance(null);
    setTime(null);
    setLoading(true);

    try {
      const res = await axios.post('http://127.0.0.1:8000/route', {
        start,
        waypoints,
        end,
        optimize,
      });

      if (res.data.error) {
        setError(res.data.error);
      } else {
        setRoute(res.data.route_coords);
        setDistance(res.data.distance_km);
        setTime(res.data.travel_time_min);
      }
    } catch (err) {
      setError('Failed to fetch route. Backend not responding.');
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
    
      <div className="w-full lg:w-1/3 bg-white p-6 shadow-xl overflow-auto h-full space-y-6">
        <h1 className="text-3xl font-extrabold text-[#4F46E5] flex items-center gap-2">
          <FaRoute /> India Route Planner
        </h1>

     
        <div className="space-y-1">
          <label className="font-semibold">Start Location</label>
          <input
            type="text"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            placeholder="e.g., Mumbai"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

       
        <div>
          <p className="font-semibold mb-2">Waypoints</p>
          <div className="space-y-2">
            {waypoints.map((wp, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={wp}
                  onChange={(e) => updateWaypoint(index, e.target.value)}
                  placeholder={`Waypoint ${index + 1}`}
                  className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <button
                  onClick={() => removeWaypoint(index)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addWaypoint}
            className="mt-2 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded"
          >
            <FaPlus /> Add Waypoint
          </button>
        </div>

      
        <div className="space-y-1">
          <label className="font-semibold">Destination</label>
          <input
            type="text"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            placeholder="e.g., Delhi"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

       
        <div className="space-y-1">
          <label className="font-semibold">Optimize For</label>
          <select
            value={optimize}
            onChange={(e) => setOptimize(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="time">Fastest Route (Time)</option>
            <option value="distance">Shortest Route (Distance)</option>
          </select>
        </div>

        
        <button
          onClick={fetchRoute}
          disabled={loading}
          className={`w-full py-2 text-white font-semibold rounded ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Calculating Route...' : 'Find Route'}
        </button>

       
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded font-semibold">{error}</div>
        )}

  
        {distance && time && (
          <div className="bg-gray-50 rounded p-4 shadow space-y-2">
            <p>
              <strong>Distance:</strong> {distance} km
            </p>
            <p>
              <strong>Estimated Time:</strong> {time} minutes
            </p>
          </div>
        )}
      </div>

     
      <div className="flex-1 h-full">
        <MapContainer
          center={[22.9734, 78.6569]}
          zoom={5}
          scrollWheelZoom={true}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {route.length > 0 && <Polyline positions={route} color="red" />}
        </MapContainer>
      </div>
    </div>
  );
}
