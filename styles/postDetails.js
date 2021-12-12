import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import colors from "../assets/colors";
import { StyleSheet } from "react-native";

export const postDetailsStyles = StyleSheet.create({
  screen: {
    alignItems: "flex-start",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },

  //the box for the whole post detail
  allWrapper: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    width: "100%",
  },

  detailsWrapper: {
    marginTop: 15,
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
  },

  poster: {
    fontSize: 17,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  body: {
    fontSize: 17,
  },

  dateText: {
    fontSize: 14,
    paddingBottom: 10,
    marginTop: 5,
    // paddingLeft:50,
  },

  signupButton: {
    alignSelf: "center",
    backgroundColor: colors.gold,
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  signupButtonText: {
    fontSize: 20,
    alignSelf: "center",
    color: "black",
    // justifyContent:'center',
    fontWeight: "bold",
  },
});
