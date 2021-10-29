import React, { useContext } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { DELTA, MAPTYPE } from '../../enum';
import { Position } from '../../types';
import { customMapStyles, globalMapStyles } from './MapStyles'

const Map = (position: Position) => {
  

  const initialRegion = {
    latitude: position.latitude,
    longitude: position.longitude,
    latitudeDelta: DELTA.MAX,
    longitudeDelta: DELTA.MAX,
  }

  return (
          <MapView
            provider={PROVIDER_GOOGLE}
            mapType={MAPTYPE.STANDARD}
            style={globalMapStyles}
            customMapStyle={customMapStyles}
            region={initialRegion}
            showsScale
            showsCompass
            showsPointsOfInterest
            showsBuildings
            showsMyLocationButton
            showsUserLocation
            loadingEnabled
            zoomEnabled
            zoomControlEnabled
            showsTraffic={false}
          >
        </MapView>
  )
}

export default Map