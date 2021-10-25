import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useGetLocation } from './hooks/useGetLocation';
import styles from './styles';
import { defaultPosition } from './types';


export default function App() {

  const [position, setPosition] = useState(defaultPosition)

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
    <View style={styles.container}>
      <Text>Welcome to Mggers</Text>
      {position && console.log(position)}
    </View>
  );
}
