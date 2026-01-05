import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height: height * 0.9,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },

  close: {
    fontSize: 14,
    color: "#2563EB",
    fontWeight: "500",
  },

  listContent: {
    paddingTop: 20,
    paddingBottom: 32,
    alignItems: "center", // 👈 centraliza os cards
    gap: 12,              // 👈 espaçamento ENTRE os cards
  },
});
