import { Dimensions, StyleSheet } from "react-native";
export enum COLORS {
  TRANSPARENT = 'transparent',
  PURPLE = '#300E80',
  GREY = '#eee',
  WHITE = '#fff',
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    paddingTop: 100,
    fontFamily: 'Poppins_400Regular'
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
    color: COLORS.PURPLE,
    width: Dimensions.get('window').width,
    fontSize: 24,
    padding: 20,
    fontFamily: 'Poppins_700Bold'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  card: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
    fontFamily: "Roboto_500Medium",
    width: Dimensions.get('screen').width - 50,
    height: 50,
    marginTop: 10,
    padding: 10,
    backgroundColor: COLORS.WHITE,

  },
  cardText: {
    marginLeft: 20,
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
  }
});

