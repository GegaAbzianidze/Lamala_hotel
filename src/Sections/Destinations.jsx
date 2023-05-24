import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Button from "../assets/Button";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2VnYTE4MjIiLCJhIjoiY2xoZHdkbTFpMHFscjNnbnZiYTZjbzA2eiJ9.ilONB2OxcDRZXPutJfuNNw";

function Destinations() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const startCoords = [44.829737, 41.792774];
  const [endCoords, setEndCoords] = useState([41.810259, 44.813526]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: startCoords,
      zoom: 14,
    });
    map.current.on("load", () => {
      map.current.addControl(new mapboxgl.NavigationControl());

      // Add starting point to the map
      map.current.addLayer({
        id: "point",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: startCoords,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 7,
          "circle-color": "#256B43",
        },
      });
    });
  }, [startCoords]);

  const handleButtonClick = (newCoords) => {
    const [lat, lng] = newCoords; // Destructure the newCoords array
    setEndCoords([lng, lat]); // Pass the coordinates in the correct order
    getRoute([lng, lat]); // Pass the coordinates in the correct order
    console.log(endCoords);
  };

  const getRoute = async (endCoords) => {
    if (!endCoords) return;

    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${startCoords[0]},${startCoords[1]};${endCoords[0]},${endCoords[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
      { method: "GET" }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };

    // if the route already exists on the map, we'll reset it using setData
    if (map.current.getSource("route")) {
      map.current.getSource("route").setData(geojson);
    }
    // otherwise, we'll make a new request
    else {
      map.current.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#256B43",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between lg:px-32 md:py-12">
      <div
        className="md:w-[800px] w-full md:max-w-[800px] 2xl:w-[1200px] h-[450px] rounded-lg overflow-hidden"
        ref={mapContainer}
      />
      <div className="md:w-[450px] w-full md:max-w-[450px] h-[450px] overflow-y-auto SCRL">
        <Button
          handleClick={handleButtonClick}
          coordinates={[41.725462, 44.770298]}
          title="Museum of History and Ethnography"
          distance="10"
        />
        <Button
          handleClick={handleButtonClick}
          coordinates={[41.823251, 44.791628]}
          title="Mikhail Khergiani House Museum"
          distance="10"
        />
        <Button
          handleClick={handleButtonClick}
          coordinates={[41.803239, 44.798283]}
          title="Эльбрус"
          distance="18"
        />
        {/* Rest of the buttons */}
        <Button
          handleClick={handleButtonClick}
          coordinates={[41.803239, 44.798283]}
          title="Эльбрус N1"
          distance="18"
        />
        <Button
          handleClick={handleButtonClick}
          coordinates={[41.803239, 44.798283]}
          title="Эльбрус N2"
          distance="18"
        />
      </div>
    </div>
  );
}

export default Destinations;
