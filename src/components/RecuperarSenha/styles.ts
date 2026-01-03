import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        
        padding: 20
    },

    iconContainer: {
        alignItems: "center",
        marginBottom: 16,
    },

    title:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        color: "#1a2b49",
    },

    descricao:{
        fontSize: 14,
        textAlign: 'center',
        color: "#1a2b49",
        marginBottom: 24,
    },

    label:{
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
        color: "#1a2b49",
    },

    containerButton:{
        alignItems: "center"
    },

    linkContainer:{
        alignItems: "center",
        marginTop: 20
    },
    errorText: {
    color: "#DC2626",
    marginTop: 4,
    fontSize: 13,
},

    successText: {
        color: "#16A34A",
        marginTop: 8,
        fontSize: 13,
    },

    
})