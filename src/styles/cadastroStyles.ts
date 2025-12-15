import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#D4D9E2", 
    },

    scrollContanier: {
      flexGrow: 1,
      padding:20,
      paddingVertical: 30,
      
    },

    inputs:{
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20, 
    marginTop: 10,
    height: 50
    },

    label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 20,
    marginTop: 10,
},

iconLeft: {
    marginRight: 10,
    opacity: 0.7,
},

buttonContainer:{
  alignItems: "center",    
  marginLeft: -80
},

title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  }
    
  
})