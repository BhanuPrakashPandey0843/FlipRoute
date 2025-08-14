#Backend\utils\geocode.py
from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="last-mile-app")

def geocode_address(address):
    try:
        # Add city & state context
        if "Jharkhand" not in address:
            address = f"{address}, Ranchi, Jharkhand, India"
        print(f"🔍 Trying to geocode: {address}")

        # Correct viewbox format: tuple of ((south_lat, west_lon), (north_lat, east_lon))
        location = geolocator.geocode(
            address,
            exactly_one=True,
            country_codes="in",
            bounded=True,
            viewbox=((22.0, 83.0), (25.5, 87.5))  # (SW_lat, SW_lon), (NE_lat, NE_lon)
        )

        # Fallback without bounding box
        if not location:
            print(f"⚠️ Fallback: Retrying without bounding box for '{address}'")
            location = geolocator.geocode(address, exactly_one=True, country_codes="in")

        if location:
            print(f"📍 Geocoded '{address}' to: ({location.latitude}, {location.longitude})")
            return (location.latitude, location.longitude)
        else:
            print(f" Failed to geocode: {address}")
            return None

    except Exception as e:
        print(f" Geocoding error for '{address}': {e}")
        return None
