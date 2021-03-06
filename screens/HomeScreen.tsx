import axios from 'axios'
import I18n from 'i18n-js'
import React from 'react'
import {  ActivityIndicator, Alert, Text, View } from 'react-native'
import { LatLng } from 'react-native-maps'
import { MggerBtn } from '../components/Buttons/MggerBtn'
import Map from '../components/Map/Map'
import config from '../config'
import { AppContext } from '../context'
import { COLORS, styles } from '../styles'
import { Report } from '../types'


const HomeScreen = () => {
  const { userContext, reportsContext } = React.useContext(AppContext)
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
          <MggerBtn title={I18n.t('report')} bgColor={COLORS.CYAN} onPress={onReportPress}/>
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