import React from "react";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {

    
  const { map, isMapReady } = React.useContext(MapContext);
  const { userLocation } = React.useContext(PlacesContext);

  const onClick = () => {
    console.log("onClick");

    if (!isMapReady) throw new Error("Map is not ready");
    if (!map) throw new Error("Map is not defined");
    if (!userLocation) throw new Error("User location is not defined");

    map.flyTo({
      center: userLocation,
      zoom: 15,
      essential: true,
    });
  };


  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 999,
      }}
    >
      Mi Ubicación
    </button>
  );
};

export default BtnMyLocation;
