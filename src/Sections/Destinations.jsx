import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

function Destinations() {
  mapboxgl.accessToken = "pk.eyJ1IjoiZ2VnYTE4MjIiLCJhIjoiY2xoZHdkbTFpMHFscjNnbnZiYTZjbzA2eiJ9.ilONB2OxcDRZXPutJfuNNw";

  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = -70.9;
  const lat = 42.35;
  const zoom = 9;

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return <div>
    <div ref={mapContainer} className="h-[400px]" />
  </div>;
}

export default Destinations;
