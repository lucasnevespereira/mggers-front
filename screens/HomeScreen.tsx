import React from 'react'
import {  ActivityIndicator, Text, View } from 'react-native'
import { MggerBtn } from '../components/Button/Button'
import Map from '../components/Map/Map'
import { AppContext } from '../context'
import { COLORS, styles } from '../styles'


const HomeScreen = () => {
  const { userContext } = React.useContext(AppContext)

  return (
    <>
      {userContext.position.latitude != 0 ?
        <>
          <Map
            latitude={userContext.position.latitude}
            longitude={userContext.position.longitude}
          />
            <MggerBtn title={'Report'} bgColor={COLORS.CYAN} onPress={function (): void {
            throw new Error('Function not implemented.');
          } } />
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