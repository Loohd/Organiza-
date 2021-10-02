import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    bodyList: {
        margin: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 15,
      },

    titleDescription:{
        fontSize: 12,
        marginLeft: 15,
        color: '#000',
    },

    checkboxContainer: {
        flexDirection: "row",
      },

      checkbox: {
        alignSelf: "center",
      },

    textDescription: {
        marginTop: 2,
        fontSize: 15,
        marginLeft: 5,
        alignSelf: 'center',
        color: 'black'
    },

    content: {
        marginLeft: 15,
        marginBottom: 2,
        marginTop: 2,
        color: '#000',
        fontSize: 15,
    }
    
   
})