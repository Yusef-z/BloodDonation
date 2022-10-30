import React from "react";
import { View, StyleSheet, TextInput } from "react-native";


export default TransparentInput = (props) => {
    const {placeholder} = props;
    return (
    <TextInput style={styles.inputContainer} placeholder={placeholder} placeholderTextColor="white" />
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
      },
    inputContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 50,
        display: "flex",
        paddingLeft: 20,
        paddingRight: 10,
        borderColor: "#fff",
        color: "white",
        borderWidth: 2,
        borderRadius: 10,        
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 34,
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 30,
        color: "#fff"
    }
  });
  
  