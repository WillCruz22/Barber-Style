import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 16,
        marginTop: 16,
        width: "90%",
        
    },

    headerCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },

    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#0F172A",
    },

    list: {
        gap: 10,
    },

    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F8FAFC",
        borderRadius: 12,
        padding: 12,
    },

    left: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#0F172A",
        alignItems: "center",
        justifyContent: "center",
    },

    avatarText: {
        color: "#FFF",
        fontWeight: "600",
    },

    name: {
        fontSize: 14,
        fontWeight: "600",
        color: "#0F172A",
    },

    service: {
        fontSize: 12,
        color: "#64748B",
    },

    time: {
        fontSize: 14,
        fontWeight: "600",
        color: "#0F172A",
    },

    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
        gap: 4,
    },

    footerText: {
        fontSize: 14,
        color: "#2563EB",
        fontWeight: "500",
    },
});
