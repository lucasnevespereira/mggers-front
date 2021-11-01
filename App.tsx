import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContext } from './context';
import { MainNavigator } from './navigator';
import { defaultPosition, defaultReports, Position } from './types';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins';
import { useGetLocation } from './hooks/useGetLocation';
import { Asset, useAssets } from 'expo-asset';

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

  const [reports, setReports] = useState(defaultReports)

  const [position, setPosition] = useState<Position>(defaultPosition)
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

  const appValues = {
    reportsContext: { reports, setReports },
    userContext: {position, setPosition}
  }

  if (!fontsLoaded || position.latitude === 0 || !assets) {
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
