import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContext } from './context';
import { MainNavigator } from './navigator';
import { defaultPosition, defaultReports, Position, Report } from './types';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins';
import { useAssets } from 'expo-asset';
import axios from 'axios';
import config from './config';
import * as Location from 'expo-location'

export default function App() {

  const [assets] = useAssets([
    require('./assets/icons/mgger.png'),
    require('./assets/icons/burglar-32.png'),
    require('./assets/icons/burglar-64.png'),
    require('./assets/icons/burglar-64-yellow.png')

  ]);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const [reports, setReports] = useState<Report[]>(defaultReports)
  const [position, setPosition] = useState<Position>(defaultPosition)
  const fetchReports = async () => {
    axios.get(`${config.API_URL}/api/reports`)
      .then(res => {
        setReports(res.data.results)
      })
      .catch(e => {
        console.error(e)
      })
  }
  const fetchLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.warn('Permission to access location was denied');
      return;
    }
    return await Location.getCurrentPositionAsync()
  }

  useEffect(() => {
    fetchLocation().then(location => {
      if (location) {
        setPosition({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        })
      }
    })
    fetchReports()
  }, [])

  const appValues = {
    reportsContext: { reports, setReports },
    userContext: {position, setPosition}
  }

  if (!fontsLoaded || !position || !assets) {
    return <AppLoading />;
  } else {
    return (
      <AppContext.Provider value={appValues}>
        <SafeAreaProvider>
          <MainNavigator />
          <StatusBar />
        </SafeAreaProvider>
      </AppContext.Provider>
    );
  }
}
