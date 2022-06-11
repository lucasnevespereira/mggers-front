import React from 'react'
import { Alert, View, ImageBackground, Text } from 'react-native';
import MapView, { Callout, LatLng, MapEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { AppContext } from '../../context';
import { DELTA, MAPTYPE } from '../../enum';
import { styles } from '../../styles';
import { Position, Report } from '../../types';
import { AraraTheme, globalMapStyles } from './MapStyles'
import moment from 'moment';
import axios from 'axios';
import config from '../../config';

const Map = (position: Position) => {
  const { reportsContext } = React.useContext(AppContext)

  const addReport = (coords: LatLng) => { 
    let newRequest = {
      description: "",
      position: {
        latitude: coords.latitude,
        longitude: coords.longitude
      },
      reportedAt: new Date().toISOString()
    }

    axios.post(`${config.API_URL}/reports/create`, newRequest)
      .then(res => {
        let newReport: Report = {
          id: res.data._id,
          description: res.data.description,
          position: res.data.position,
          reportedAt: res.data.reportedAt
        }
        reportsContext.setReports([...reportsContext.reports, newReport])
      })
      .catch(e => {
        console.error(e)
        alert(e)
      })
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
      {reportsContext.reports.map((r, index) => {
        const time = moment(r.reportedAt).fromNow()
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: r.position.latitude,
              longitude: r.position.longitude
            }}
            title={"Mgger Report"}
            description={time}
            >
            <Callout tooltip >
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{"Mgger Report"}</Text>
                <Text>{time}</Text>
              </View>
            </Callout>
              <View>
              <ImageBackground style={styles.marker} source={require('../../assets/icons/burglar-64.png')} />
              </View>
          </Marker>
          )
      })}
    </MapView>
  )
}

export default Map