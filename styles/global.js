import { StyleSheet } from "react-native";
import colors from "../assets/colors";
export const globalStyles = StyleSheet.create({
  /*Per Calvin University Brand Identity Standards 
      Maroon: #8C2131
      Gold:   #F3CD00 
      Can be found at https://calvin.edu/dotAsset/f784aa74-291f-45b1-b45c-d6455663bcb4
    */

  screen: {
    flex: 1,
    // padding: 10,
    height: "100%",
    alignItems: "center",
    marginBottom: 60,
    marginTop: -5,
  },

  header: {
    fontSize: 35,
    fontWeight: "bold",
    alignItems: "center",
  },

  button: {
    width: 250,
    height: 60,
    backgroundColor: colors.maroon,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
  },

  addPost: {
    width: 70,
    height: 70,
    backgroundColor: colors.maroon,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    right: 20,
    position: "absolute",
    bottom: 20,
  },

  buttonText: {
    fontSize: 24,
    color: colors.gold,
  },

  signUpText: {
    fontSize: 22,
    color: colors.maroon,
    padding: 20,
  },

  postsWrapper: {
    width: "100%",
  },

  sectionTitle: {
    fontSize: 24,
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "center",
  },

  items: {
    margin: 15,
    alignContent: "center",
    marginTop: 5,
  },

  paragraphs: {
    fontSize: 18,
    padding: 20,
  },

  loginLogo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },

  loginTextBox: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  loginInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 19,
    borderColor: "black",
    borderWidth: 1,
    width: 250,
    marginBottom: 10,
  },

  profileIcon: {
    alignItems: "center",
    backgroundColor: colors.gold,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
  },
  addPost: {
    width: 70,
    height: 70,
    backgroundColor: colors.maroon,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    right: 20,
    position: "absolute",
    bottom: 20,
  },
});
