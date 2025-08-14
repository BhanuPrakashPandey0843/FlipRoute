#C:\Users\JASIKA\Documents\Data Analysis\Projects\last_mile_route_optimizer\Backend\config\settings.py
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

GRAPH_DIR = os.path.join(BASE_DIR, "data", "graphs", "jharkhand")  

DEFAULT_CITY = "ranchi"
DEFAULT_GRAPH = os.path.join(GRAPH_DIR, f"{DEFAULT_CITY}.graphml")

SPEED_KMPH = 40
