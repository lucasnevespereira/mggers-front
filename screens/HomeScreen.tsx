import React from 'react'
import {  ActivityIndicator, Text, View } from 'react-native'
import Map from '../components/Map/Map'
import { AppContext } from '../context'
import { styles } from '../styles'


const HomeScreen = () => {
  const { userContext } = React.useContext(AppContext)

  return (
    <>
      {userContext.position.latitude != 0 ?
        <Map
          latitude={userContext.position.latitude}
          longitude={userContext.position.longitude}
        />
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