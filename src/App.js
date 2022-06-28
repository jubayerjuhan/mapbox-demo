import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./app.css";

const App = () => {
  // eslint-disable-next-line import/no-webpack-loader-syntax
  mapboxgl.workerClass =
    // eslint-disable-next-line import/no-webpack-loader-syntax
    require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

  //
  mapboxgl.accessToken =
    "pk.eyJ1IjoianViYXllcmp1aGFuIiwiYSI6ImNrdXI0cHFseTE4bWIyb3FybDdreWNpNDQifQ.ZlyPUhzJalEYFiinkw1ydg";

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/jubayerjuhan/cl4xsjx3w000h14uis0dyzjou",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default App;
