import React from 'react';
import ReactDOM from 'react-dom/client';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

 
mapboxgl.accessToken = 'pk.eyJ1Ijoieml0ZWRpZWdvIiwiYSI6ImNscW1xZmhnNzMzcmEyaW9ramJvbGJ1d28ifQ.L2wX-oxYQSVde1o8mKPyUg';


if (!navigator.geolocation) {
  alert('Geolocation is not supported by your browser');  
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
