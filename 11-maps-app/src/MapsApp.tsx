import React from "react";
import { MapProvider, PlacesProvider } from "./context";
import HomeScreen from "./screens/HomeScreen";
import "./styles.css";

const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <h1>asdss</h1>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};

export default MapsApp;
