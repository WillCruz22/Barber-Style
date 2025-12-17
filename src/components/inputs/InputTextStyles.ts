import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    width: "100%",        
    marginTop: 10,
    position: "relative",
    },

    input: {
        width: "100%",
        height: 50,
        paddingLeft: 40, // espaço para o ícone
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: "#ffffff",
    },

    icon: {
        position: "absolute",
        left: 12,
        top: "50%",
        transform: [{ translateY: -12 }],
        zIndex: 10,
    },
});
