import axios from "axios";


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        access_token: process.env.REACT_APP_MAPBOX_TOKEN,
        limit: 5,
        language: 'es'
    }
 
});


export default searchApi;