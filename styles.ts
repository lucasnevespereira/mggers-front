import { Dimensions, StyleSheet } from "react-native";
export enum COLORS {
  TRANSPARENT = 'transparent',
  PURPLE = '#300E80',
  GREY = '#eee',
  WHITE = '#fff',
  CYAN = '#00E8BC'
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
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    fontFamily: "Poppins_500Medium",
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
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  callout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 10,
    width: 200,
    height: 80,
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderWidth: 3,
    borderColor: COLORS.CYAN,
  },
  calloutTitle: {
    fontSize: 17,
    fontWeight: "700",
    fontFamily: 'Poppins_700Bold'
  },
  mggerBtn: {
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: "50%",
    position: "absolute",
    bottom: 100,
    alignSelf: 'center',
    marginHorizontal: 50
  },
  mggerBtnText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    flexWrap: 'wrap'
  }
});

