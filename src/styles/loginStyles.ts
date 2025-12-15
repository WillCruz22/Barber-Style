import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#D4D9E2",
        justifyContent: "center"
    },

    logo: {
        width:300,
        height: 300,
    },

    textPrincipal:{
        fontFamily: "Poppins-Black",
        fontSize: 20,
        color: "#1a2b49",
        alignItems: "center",
        textAlign: "auto",
    },

    textSecundario:{
        fontSize: 14,
        marginTop: 15, 
        color: "#6B7280",
        alignItems: "center",
        textAlign: "auto",
        
    },

    labelText:{
        fontFamily: "Poppins-Black",
        fontSize: 14,
        color: "#1a2b49",
        alignItems: "center",
        textAlign: "auto",
        marginTop: 10,
    },

    components:{
        marginTop: 10,
    },

    textoErro:{
    color: '#E74C3C',
    fontSize: 14,
    marginTop: 4,
    marginLeft: 4,
}

    

    


})
