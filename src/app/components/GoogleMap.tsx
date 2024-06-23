// components/GoogleMap.tsx

'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useCallback, useRef } from 'react';



const containerStyle = {
  width: '100%',
  height: '800px'
};


const options ={
    mapId: "54df624bfa40a99f"
}






const markers = [
    { id: 1, position: { lat: 52.8515590542808, lng: -1.7238317067508355 } },
    { id: 2, position: { lat: 53.46684696081598, lng: -2.2338592630456753 } },
    { id: 3, position: { lat: 50.82254806163665, lng: -0.137721753740817 } }
  ];
  


  const GoogleMapComponent = () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const mapRef = useRef<google.maps.Map | null>(null);
  
    if (!apiKey) {
      console.error("Google Maps API key is missing");
      return <div>Error: Google Maps API key is missing</div>;
    }
  
    const onMapLoad = useCallback((map: google.maps.Map) => {
      mapRef.current = map;
  
      // Calculate the bounding box that encompasses all the markers
      const bounds = new google.maps.LatLngBounds();
      markers.forEach(marker => {
        bounds.extend(marker.position);
      });
  
      map.fitBounds(bounds);
    }, []);
  
    return (
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          options={options}
          onLoad={onMapLoad}
        >
          {markers.map(marker => (
            <Marker key={marker.id} position={marker.position} />
          ))}
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default React.memo(GoogleMapComponent);