import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContext } from './context';
import { MainNavigator } from './navigator';
import { defaultReports } from './types';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const [reports, setReports] = useState(defaultReports)

  const appValues = {
    reportsContext: {reports, setReports}
  }
  if (!fontsLoaded) {
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
