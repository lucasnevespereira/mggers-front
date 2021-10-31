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
  titleCenter: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
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
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 20,
    fontFamily: "Roboto_500Medium",
    width: Dimensions.get('screen').width - 30,
    height: 50,
    marginTop: 10,
    padding: 10,
    backgroundColor: COLORS.WHITE,

  },
  cardTextNumber: {
    marginLeft: 5,
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
  },
  cardTextDesc: {
    // marginLeft: 20,
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    textAlign: "right",
  },
  cardIcon: {
    width: 64,
    height: 64,
  }
});

