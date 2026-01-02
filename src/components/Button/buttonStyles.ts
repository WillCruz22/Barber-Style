import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",        // ocupa a largura do formulário
    height: 52,           // altura padrão de botão
    backgroundColor: "#1a2b49",
    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 16,         // melhor legibilidade
    fontFamily: "Poppins-Black",
    textAlign: "center",
  },
});
