import React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import styles from './styles';

export default function App() {  
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}
