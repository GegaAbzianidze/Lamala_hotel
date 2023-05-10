import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { Icon } from "@iconify/react";
import googleMaps from "../assets/Google_maps.png";

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
    <div className="md:flex justify-between md:px-32 md:py-12">
      <div className="md:w-[800px] w-full h-[450px] rounded-lg" ref={mapContainer} />
      <div className="md:w-[450px] w-full h-[450px] overflow-y-auto SCRL">
        <button
          onClick={() => handleButtonClick([41.725462, 44.770298])}
          className="flex items-center justify-beetween text-white w-full px-4 py-6 mb-2 hover:bg-DarkGreen focus:bg-DarkGreen bg-transparent"
        >
          <div className="flex items-center gap-2">
            <Icon icon="ion:navigate-circle" className="text-2xl" />
            <div className="flex-grow flex flex-col text-left ">
              <span className="text-sm font-bold">
                Museum of History and Ethnography
              </span>
              <span className="text-sm text-DarkyGray">10 KM</span>
            </div>
          </div>
          <a
            href="https://maps.google.com/maps?q=41.725462,44.770298"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center ml-auto text-MainGreen hover:text-white"
          >
            <img src={googleMaps} alt="Google Maps" className="h-9" />
          </a>
        </button>
        <button
          onClick={() => handleButtonClick([41.823251, 44.791628])}
          className="flex items-center justify-beetween text-white w-full px-4 py-6 mb-2 hover:bg-DarkGreen focus:bg-DarkGreen bg-transparent"
        >
          <div className="flex items-center gap-2">
            <Icon icon="ion:navigate-circle" className="text-2xl" />
            <div className="flex-grow flex flex-col text-left ">
              <span className="text-sm font-bold">
              Mikhail Khergiani House Museum
              </span>
              <span className="text-sm text-DarkyGray">11 KM</span>
            </div>
          </div>
          <a
            href="https://maps.google.com/maps?q=41.725462,44.770298"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center ml-auto text-MainGreen hover:text-white"
          >
            <img src={googleMaps} alt="Google Maps" className="h-9" />
          </a>
        </button>
        <button
          onClick={() => handleButtonClick([41.803239, 44.798283])}
          className="flex items-center justify-beetween text-white w-full px-4 py-6 mb-2 hover:bg-DarkGreen focus:bg-DarkGreen bg-transparent"
        >
          <div className="flex items-center gap-2">
            <Icon icon="ion:navigate-circle" className="text-2xl" />
            <div className="flex-grow flex flex-col text-left ">
              <span className="text-sm font-bold">
              Эльбрус
              </span>
              <span className="text-sm text-DarkyGray">18 KM</span>
            </div>
          </div>
          <a
            href="https://maps.google.com/maps?q=41.725462,44.770298"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center ml-auto text-MainGreen hover:text-white"
          >
            <img src={googleMaps} alt="Google Maps" className="h-9" />
          </a>
        </button>
        <button
          className="block w-full px-4 py-6 mb-2 hover:bg-MainGreen focus:bg-MainGreen bg-transparent}"
          onClick={() => handleButtonClick([41.819299, 44.78158])}
        >
          Button 4
        </button>
        <button
          className="block w-full px-4 py-6 mb-2 hover:bg-MainGreen focus:bg-MainGreen bg-transparent}"
          onClick={() => handleButtonClick([41.8412, 44.778124])}
        >
          Button 5
        </button>
        <button
          className="block w-full px-4 py-6 mb-2 hover:bg-MainGreen focus:bg-MainGreen bg-transparent}"
          onClick={() => handleButtonClick([41.800143, 44.771467])}
        >
          Button 6
        </button>
        <button
          className="block w-full px-4 py-6 mb-2 hover:bg-MainGreen focus:bg-MainGreen bg-transparent}"
          onClick={() => handleButtonClick([41.809848, 44.754757])}
        >
          Button 7
        </button>
      </div>
    </div>
  );
}

export default Destinations;
