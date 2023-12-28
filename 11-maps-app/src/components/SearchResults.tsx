import React, { useContext, useState } from 'react'
import { MapContext, PlacesContext } from '../context'
import LoadingPlaces from './LoadingPlaces'
import { Feature } from '../interfaces/places'

export const SearchResults = () => {

    
    const {places, isLoadingPlaces, userLocation} = useContext(PlacesContext)
    const { map, getRouteBetweenPoints } = useContext(MapContext)

    const [activePlaceId, setActivePlaceId ] = useState('')

    if (isLoadingPlaces) {
        return (
            <LoadingPlaces/>
        )
    }
    if (places.length === 0) {
        return (
            <></>
        )        
    }

    const getRoute = async (place: Feature) => {
        if (!userLocation) return;
        const [lng, lat] = place.center;
        await getRouteBetweenPoints(userLocation, [lng, lat])
    }

    const onClick = (place: Feature) => {
        onPlaceClicked(place)
    }

    const onPlaceClicked = (place: Feature) => {
        setActivePlaceId(place.id)
        const [lng, lat] = place.center;
        map?.flyTo({
            center: [lng, lat],
            zoom: 15
        })
    }
  return (
    <ul className='list-group mt-3'>
        {
            places.map(place => (
                <li className={`${ activePlaceId === place.id ? 'active':'' } list-group-item list-group-item-action pointer`} key={place.id}
                onClick={() => onClick(place)}
                >
                    <h6>{place.text_es}</h6>
                    <p style={{fontSize:'12px'}}>
                        {place.place_name}
                    </p>
                    <button className={`btn ${ activePlaceId === place.id ? ' btn-outline-light  ':' btn-outline-primary ' }btn-sm `} onClick={()=>getRoute(place)}>Direcciones</button>
                </li>
            ))
        }
      
    </ul>
  )
}

export default SearchResults
