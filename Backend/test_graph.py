import os
import osmnx as ox

# Settings for reliability
ox.settings.overpass_settings = '[out:json][timeout:180]'
ox.settings.timeout = 180
ox.settings.use_cache = True
ox.settings.log_console = True

# Create output directory
output_dir = os.path.join("data", "graphs", "jharkhand")
os.makedirs(output_dir, exist_ok=True)

# Major cities in Jharkhand
cities = ["Mango, Jharkhand, India"
    
]

# Download and save .graphml files
for city in cities:
    try:
        G = ox.graph_from_place(city, network_type="drive")
        filename = city.split(",")[0].strip().lower().replace(" ", "_") + ".graphml"
        path = os.path.join(output_dir, filename)
        ox.save_graphml(G, path)
        print(f"[✓] Saved: {path}")
    except Exception as e:
        print(f"[×] Failed for {city}: {e}")
