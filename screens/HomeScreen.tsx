import React, { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import Map from '../components/Map/Map'
import { useGetLocation } from '../hooks/useGetLocation'
import { Position } from '../types'


const HomeScreen = () => {
  const [position, setPosition] = useState<Position | null>(null)

  useEffect(() => {
    useGetLocation().then(res => {
      if (res) {
        let currPosition = {
          latitude: res.coords.latitude,
          longitude: res.coords.longitude
        }
        setPosition(currPosition)
      }
    })
  }, [])

  return (
    <>
      {position ?
        <Map
          latitude={position.latitude}
          longitude={position.longitude}
        />
        :
        <Text>You need to grant location access to use the app</Text>
      }
    </>
  )
}

export default HomeScreen