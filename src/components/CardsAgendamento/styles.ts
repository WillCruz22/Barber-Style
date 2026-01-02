import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingVertical: 16,
    marginHorizontal: 16,
    overflow: "hidden",
  },

  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  list: {
    paddingLeft: 0,
    paddingRight: 16,
  },

  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  footerText: {
    color: "#2563EB",
    fontWeight: "600",
    marginRight: 4,
  },
});