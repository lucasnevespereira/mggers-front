import React, { useContext } from 'react'
import { Alert, View } from 'react-native';
import MapView, { LatLng, MapEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { AppContext } from '../../context';
import { DELTA, MAPTYPE } from '../../enum';
import { Position, Report } from '../../types';
import { AraraTheme, customMapStyles, globalMapStyles } from './MapStyles'

const Map = (position: Position) => {
  const { reportsContext } = React.useContext(AppContext)
  
  const addReport = (coords: LatLng) => {    
    let newReport: Report = {
      position: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
      reportedAt: new Date()
    }

    reportsContext.setReports([...reportsContext.reports, newReport])
  }
  const onMapLongPress = (e: MapEvent) => {
    const {latitude, longitude} = e.nativeEvent.coordinate
    return Alert.alert(
      "Mgger Report",
      "Do you want to report a new mugger here ?",
      [
        {
          text: "Yes",
          onPress: () => addReport({latitude, longitude}),
        },
        {
          text: "Cancel",
        },
      ]
    );
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
        customMapStyle={AraraTheme}
        region={initialRegion}
        zoomControlEnabled
        showsUserLocation
        onLongPress={onMapLongPress}
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