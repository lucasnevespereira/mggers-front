import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { AppContext } from './context';
import HomeScreen from './screens/HomeScreen';
import styles from './styles';
import { defaultReports } from './types';

export default function App() {

  const [reports, setReports] = useState(defaultReports)

  const appValues = {
    reportsContext: {reports, setReports}
  }

  return ( 
    <View style={styles.container}>
      <AppContext.Provider value={appValues}>
        <HomeScreen />
      </AppContext.Provider>
      <StatusBar animated />
    </View>
  );
}
