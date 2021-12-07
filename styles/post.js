import { StyleSheet } from "react-native";

export const postStyles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 24,
    marginTop: 20,
    justifyContent: "space-between",
    // borderColor: "gold",
    // borderWidth: 1,
  },

  //profile icon
  left: {
    justifyContent: "flex-start",
  },

  //the post informations
  content: {
    paddingTop: 10,
  },

  contentTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
  },

  contentDetailsText: {
    fontSize: 15,
    fontStyle: "italic",
    marginLeft: -15,
  },

  date: {
    alignItems: "flex-end",
    paddingRight: 10,
  },

  itemText: {
    fontSize: 18,
    paddingLeft: 20,
    maxWidth: "80%",
  },

  poster: {
    padding: 20,
    flexDirection: "row",
  },
});
