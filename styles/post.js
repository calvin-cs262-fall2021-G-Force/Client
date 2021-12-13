import { StyleSheet } from "react-native";

export const postStyles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 24,
    marginBottom: 20,
    justifyContent: "space-between",
    borderWidth: 2,
  },

  posterName: {
    fontSize: 15,
    paddingTop: 5,
    paddingLeft: 5,
  },

  //profile icon
  left: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  content: {
    paddingTop: 10,
  },

  contentTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 10,
  },

  contentDetailsText: {
    fontSize: 16,
    paddingLeft: 10,
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
