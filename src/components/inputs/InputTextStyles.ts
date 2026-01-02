import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 25, // espaçamento CORRETO entre inputs
  },

  input: {
    width: "100%",
    height: 52,
    paddingLeft: 44, // espaço real pro ícone
    paddingRight: 12,
    borderRadius: 10,
    backgroundColor: "#fff",

    // leve destaque
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  icon: {
    position: "absolute",
    left: 14,
    top: 0,
    bottom: 0,
    justifyContent: "center", // alinhamento correto
    zIndex: 1,
  },
});