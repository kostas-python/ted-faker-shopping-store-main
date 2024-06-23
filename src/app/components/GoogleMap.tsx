// components/GoogleMap.tsx

'use client'

import { DirectionsRenderer, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useCallback, useRef, useState } from 'react';



const containerStyle = {
  width: '90%',
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
    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  

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
  


    const calculateDirections = useCallback(() => {
      if (mapRef.current) {
        const directionsService = new google.maps.DirectionsService();
        const origin = markers[0].position;
        const destination = markers[markers.length - 1].position;
        const waypoints = markers.slice(1, markers.length - 1).map(marker => ({
          location: marker.position,
          stopover: true
        }));
  
        directionsService.route(
          {
            origin: origin,
            destination: destination,
            waypoints: waypoints,
            travelMode: google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              setDirections(result);
            } else {
              console.error('Directions request failed due to ', status);
            }
          }
        );
      }
    }, [markers]);


  
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
              {directions && (
                <DirectionsRenderer
                  directions={directions}
                  options={{
                    suppressMarkers: true,
                    preserveViewport: true
                  }}
                />
              )}
              <button onClick={calculateDirections}>Show Directions</button>
            </GoogleMap>
          </LoadScript>
       
      );
    };


  
  export default React.memo(GoogleMapComponent);