import React from 'react'
import {BtnMyLocation, MapView, ReactLogo, SearchBar} from '../components';
import 'mapbox-gl/dist/mapbox-gl.css';

const HomeScreen = () => {

  return (
    <div>
      <MapView/>
      <BtnMyLocation/>
      <ReactLogo/>
      <SearchBar/>
    </div>
  )
}

export default HomeScreen
