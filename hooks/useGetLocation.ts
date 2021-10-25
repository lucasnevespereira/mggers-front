import * as Location from 'expo-location'

const useGetLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.warn('Permission to access location was denied');
    return;
  }
  return await Location.getCurrentPositionAsync()
}

export {
  useGetLocation
};