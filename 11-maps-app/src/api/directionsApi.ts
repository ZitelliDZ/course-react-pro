import axios from "axios";
import { Language } from "../interfaces/places";


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        access_token: process.env.REACT_APP_MAPBOX_TOKEN,
        alternatives: false,
        geometries: 'geojson',
        language: 'es',
        overview: 'simplified',
        steps: false
    }
 
});


export default directionsApi;