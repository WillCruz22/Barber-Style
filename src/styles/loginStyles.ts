import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D4D9E2",
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        width: 220,
        height: 220,
        resizeMode: "contain",
        marginBottom: 16,
    },

    textPrincipal: {
        fontFamily: "Poppins-Black",
        fontSize: 20,
        color: "#1a2b49",
        textAlign: "center",
    },

    textSecundario: {
        fontSize: 14,
        color: "#6B7280",
        marginTop: 8,
        marginBottom: 24,
        textAlign: "center",
    },

    /* 🔑 FORM */
    form: {
        width: "100%",
        paddingHorizontal: 16,
        
    },

    labelText: {
        fontFamily: "Poppins-Black",
        fontSize: 14,
        color: "#1a2b49",
        marginTop: 12,
    },

    textoErro: {
        color: "#E74C3C",
        fontSize: 13,
        marginTop: 4,
    },

    forgot: {
        alignItems: "flex-end",
        marginTop: 8,
    },

    loginButton: {
        width: "100%",
        height: 52,
        marginTop: 24,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    footer: {
        marginTop: 24,
    },
});
