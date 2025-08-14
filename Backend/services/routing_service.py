# services/routing_service.py
import osmnx as ox
import networkx as nx
from itertools import permutations

def get_optimized_route(start, end, waypoints, strategy="greedy", graph=None):
    if graph is None:
        raise ValueError("Graph object must be provided.")

    # All points: start + waypoints + end
    all_points = [start] + waypoints + [end]

    # Snap lat/lng to nearest graph nodes
    nodes = [ox.distance.nearest_nodes(graph, p[1], p[0]) for p in all_points]  # (lng, lat)
    start_node, end_node = nodes[0], nodes[-1]
    waypoint_nodes = nodes[1:-1]

    # Reorder waypoints using the selected strategy
    if strategy == "brute":
        best_path_nodes = solve_tsp_exact(graph, start_node, waypoint_nodes, end_node)
    else:
        best_path_nodes = solve_tsp_greedy(graph, start_node, waypoint_nodes, end_node)

    # Build final route
    full_route = []
    total_distance = 0

    for i in range(len(best_path_nodes) - 1):
        path = nx.shortest_path(graph, best_path_nodes[i], best_path_nodes[i+1], weight="length")
        total_distance += nx.path_weight(graph, path, weight="length")
        full_route += path if i == 0 else path[1:]

    # Convert node path to coordinates for frontend
    route_coords = [(graph.nodes[n]['y'], graph.nodes[n]['x']) for n in full_route]
    eta_min = total_distance / (35 * 1000 / 60)  # Assuming 35 km/h average speed

    return {
        "route": route_coords,
        "distance_m": int(total_distance),
        "eta_min": round(eta_min, 2),
        "status": "success"
    }

def solve_tsp_greedy(graph, start, waypoints, end):
    ordered = [start]
    current = start
    to_visit = waypoints.copy()

    while to_visit:
        next_node = min(
            to_visit, key=lambda x: nx.shortest_path_length(graph, current, x, weight="length")
        )
        ordered.append(next_node)
        to_visit.remove(next_node)
        current = next_node

    ordered.append(end)
    return ordered

def solve_tsp_exact(graph, start, waypoints, end):
    best_path = None
    best_distance = float("inf")

    for perm in permutations(waypoints):
        full_route = [start] + list(perm) + [end]
        total_distance = 0

        for i in range(len(full_route) - 1):
            total_distance += nx.shortest_path_length(graph, full_route[i], full_route[i+1], weight="length")

        if total_distance < best_distance:
            best_distance = total_distance
            best_path = full_route

    return best_path


