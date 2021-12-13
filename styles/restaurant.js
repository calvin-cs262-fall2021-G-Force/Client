import { StyleSheet } from "react-native";

import colors from "../assets/colors";

export const restaurantStyles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    justifyContent: "space-between",
    marginBottom: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.maroon,
    marginBottom: 10,
  },

  details: {
    fontSize: 14,
    marginTop: 5,
  },

  discount: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
  },
});
