#Backend\utils\graph_loader.py
import osmnx as ox
import networkx as nx

def load_graph(city_name: str, state: str = "jharkhand"):
    graph_path = f"data/graphs/{state.lower()}/{city_name.lower()}.graphml"
    return ox.load_graphml(graph_path)
