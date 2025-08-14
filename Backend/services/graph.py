# Backend/utils/graph.py
import os
import osmnx as ox

GRAPH_DIR = os.path.join("data", "graphs")
os.makedirs(GRAPH_DIR, exist_ok=True)

def download_graph(place_name, filename=None):
    if not filename:
        filename = place_name.lower().replace(" ", "_") + ".graphml"
    filepath = os.path.join(GRAPH_DIR, filename)
    if os.path.exists(filepath):
        print(f"[INFO] Graph for '{place_name}' already exists at {filepath}.")
        return filepath

    print(f"[INFO] Downloading graph for: {place_name}")
    graph = ox.graph_from_place(place_name, network_type="drive")
    ox.save_graphml(graph, filepath)
    print(f"[INFO] Graph saved to: {filepath}")
    return filepath


def load_graph(filepath):
    return ox.load_graphml(filepath)



