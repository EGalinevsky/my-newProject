import React from 'react'
import Autocomplete from '../../components/Map/Autocomplete/Autocomplete';
// import { Autocomplete } from '../../components/Map/Autocomplete';
import Map from '../../components/Map/Map';
import { useJsApiLoader } from '@react-google-maps/api';


const API_KEY = process.env.REACT_APP_API_MAPS_GOOGLE

export const MapPage = () => {
  const center = { lat: 9.761927, lng: 79.95244 }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY as string
  })

  return (
    <div>
      <div>
        <Autocomplete isLoaded={isLoaded} />
      </div>
      <Map center={center} isLoaded={isLoaded} />
    </div>
  )
}
