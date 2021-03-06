import { StyleSheet } from "react-native";

import colors from "../assets/colors";

export const userStyles = StyleSheet.create({
  user: {
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
  },

  upper: {
    flexDirection: "row",
  },
  lower: {
    flexDirection: "row",
    marginTop: 20,
  },

  details: {
    paddingLeft: 15,
    marginTop: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  collegeyear: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },

  bioheading: {
    fontSize: 16,
    fontWeight: "bold",
  },

  biodetails: {
    fontSize: 16,
  },

  editProfile: {
    backgroundColor: colors.maroon,
    borderColor: colors.gold,
    justifyContent: "center",
    borderRadius: 10,
    height: 27,
    width: 180,
  },
  editProfileText: {
    fontSize: 14,
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
});
