
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { COLORS } from '../styles';
import ContactScreen from '../screens/ContactScreen';


const Tab = createBottomTabNavigator();

export function MainNavigator() {
    return(
    <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' screenOptions={{
          unmountOnBlur: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: COLORS.TRANSPARENT,
            position: "absolute",
            borderRadius: 50,
            marginBottom: 10,
            marginTop: 5,
            paddingHorizontal: 12,
            paddingTop: 12,
            height: 80,
            marginHorizontal: 5,
            borderTopWidth: 0
          },
          tabBarIconStyle: {
            backgroundColor: COLORS.WHITE,
            width: 50,
            borderRadius: 50,
            color: COLORS.PURPLE,

          }
        }}>
          <Tab.Screen name="Contact" component={ContactScreen} options={{
            title: 'Useful Contacts',
            headerShown: false,
            tabBarIcon: () => <Ionicons name="call" size={24} color={COLORS.PURPLE} />,
          }} />
          
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon: () => <Ionicons name="map" size={24} color={COLORS.PURPLE} />,
            }}
          />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: () => <Ionicons name="cog" size={24} color={COLORS.PURPLE} />,
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
    )
}





