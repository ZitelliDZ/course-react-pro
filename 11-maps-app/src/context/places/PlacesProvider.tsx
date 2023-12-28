import React, { useEffect } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers/getUserLocation";
import { searchApi } from "../../api";
import { Feature, PlacesResponse } from "../../interfaces/places";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

export interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
  
  const [state, dispatch] = React.useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    console.log("PlacesProvider useEffect");

    getUserLocation()
      .then((userLocation) => {
        dispatch({
          type: "setUserLocation",
          payload: userLocation,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const searchPlacesByTerm = async (query: string):Promise<Feature[]> => {
    if (query.length === 0) {
      dispatch({ type: "setPlaces", payload: [] });
      return [];
    };
    if (!state.userLocation) throw new Error("User location is not defined");

    dispatch({ type: "setLoadingPlaces" });

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: `${state.userLocation[0]},${state.userLocation[1]}`,
      },
    
    });


    
    dispatch({ type: "setPlaces", payload: resp.data.features });

    return resp.data.features
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm,

      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export default PlacesProvider;
