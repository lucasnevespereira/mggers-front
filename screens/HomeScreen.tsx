import React from 'react'
import {  ActivityIndicator, Alert, Text, View } from 'react-native'
import { LatLng } from 'react-native-maps'
import { MggerBtn } from '../components/Buttons/MggerBtn'
import Map from '../components/Map/Map'
import { AppContext } from '../context'
import { COLORS, styles } from '../styles'
import { Report } from '../types'


const HomeScreen = () => {
  const { userContext, reportsContext } = React.useContext(AppContext)
  const addReport = (coords: LatLng) => {    
    let newReport: Report = {
      id: 0,
      description: "",
      position: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
      reportedAt: new Date()
    }

    reportsContext.setReports([...reportsContext.reports, newReport])
  }
  const onReportPress = () => {
    const {latitude, longitude} = userContext.position
    return Alert.alert(
      "Mgger Report",
      "Report mugger at your current position ?",
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


  return (
    <>
      {userContext.position.latitude != 0 ?
        <>
          <Map
            latitude={userContext.position.latitude}
            longitude={userContext.position.longitude}
          />
          <MggerBtn title={'Report'} bgColor={COLORS.CYAN} onPress={onReportPress}/>
          </>
        :
        <View style={styles.container}>
          <Text style={styles.titleCenter}>Loading...</Text>
          <ActivityIndicator size="large" />
        </View>
      }
    </>
  )
}

export default HomeScreen