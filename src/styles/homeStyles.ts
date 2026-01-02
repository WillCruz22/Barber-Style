import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    scrollContainer: {
        flex: 1,
        backgroundColor: "#D4D9E2",
    },

    container: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        gap: 18,
        paddingTop: 50,

    },

    buttonHome: {
        width: "47%",
        height: 100,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    cardsContainer: {

        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingTop: 16,
        gap: 16,
    },

});