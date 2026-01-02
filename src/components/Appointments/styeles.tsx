import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window"); 

export const styles = StyleSheet.create({
  item: {
     width: width * 0.75,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 14,
    marginRight: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#1E293B",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  avatarText: {
    color: "#FFF",
    fontWeight: "600",
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },

  service: {
    fontSize: 12,
    color: "#6B7280",
  },

  time: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2563EB",
  },
});
