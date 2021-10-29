import React, { useContext } from 'react'
import { View } from 'react-native';
import MapView, { MapEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { AppContext } from '../../context';
import { DELTA, MAPTYPE } from '../../enum';
import { Position, Report } from '../../types';
import { customMapStyles, globalMapStyles } from './MapStyles'

const Map = (position: Position) => {
  const { reportsContext } = React.useContext(AppContext)
  
  const onMapPress = (e: MapEvent) => {
    let newReport: Report = {
      position: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      },
      reportedAt: new Date()
    }

    reportsContext.setReports([...reportsContext.reports, newReport])
  }

  const initialRegion = {
    latitude: position.latitude,
    longitude: position.longitude,
    latitudeDelta: DELTA.MAX,
    longitudeDelta: DELTA.MAX,
  }
  return (
    <View>
    <MapView
        provider={PROVIDER_GOOGLE}
        mapType={MAPTYPE.STANDARD}
        style={globalMapStyles}
        customMapStyle={customMapStyles}
        region={initialRegion}
        showsCompass
        showsMyLocationButton
        showsUserLocation
        onPress={onMapPress}
    >
        {reportsContext.reports.map((r, idx) => {
          { console.log(r) }
          return (
        <Marker
           key={idx}
           coordinate={{
             latitude: r.position.latitude,
             longitude: r.position.longitude
           }}
           title={"Mgger Report"}
           description={r.reportedAt.toTimeString()}
            />
          )
      })}
    </MapView>
    </View>
  )
}

export default Map