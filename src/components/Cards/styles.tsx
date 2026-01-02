import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        width: "46%",
        marginBottom: 16,
    },

    top: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 12,
    },

    icon: {
        width: 28,
        height: 28,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 13,
        color: "#6B7280",
    },

    value: {
        fontSize: 20,
        fontWeight: "700",
        color: "#111827",
    },
});