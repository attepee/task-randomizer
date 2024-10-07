import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

export const Styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: ((width < 768) ? "90%" : "30%"),
    alignItems: "center",
    justifyContent: "center"
  },
  linkButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 6,
    borderRadius: 4,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#2ba0db",
    fontSize: 14,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"
  },
  titleText: {
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#000"
  },
  gameButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  gameText : {
    textAlign: "center",
    margin: "auto",
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#000",
    userSelect: "none"
  },
  pairButtonContainer: {
    flexDirection: "row",
    width: "100%"
  },
  pairButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 6,
    borderRadius: 4,
    alignItems: "center",
    width: "50%",
    textAlign: "center"
  },
  languageButton: {
    backgroundColor: "#2bdbbe"
  },
  buttonLeft: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  buttonRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  saveButton: {
    backgroundColor: "#2bdbbe"
  },
  cancelButton: {
    backgroundColor: "#ef282c"
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#fff",
  },
  textInput: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#666",
    borderRadius: 4,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 6,
    fontSize: 16
  },
  list: {
    flexGrow: 0,
    height: 300,
    width: "100%",
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 3,
    borderRadius: 4,
    backgroundColor: "#ddd",
    flexDirection: "row",
    width: "100%"

  },
  itemTitle: {
    fontSize: 14,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#000",
    width: "90%"
  }
});