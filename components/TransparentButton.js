import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { transparentBgColor } from "../constants";


export default TransparentButton = (props) => {
    const {buttonText} = props;
    const {navigation} = props;
    var {width} = props;
    width = width == undefined? null: width;
    return (
    <TouchableOpacity onPress={() => {
        navigation.navigate("SignIn");
    }}>
      <View style={[styles.buttonContainer, {width: width}]}> 
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
      
    </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
      },
    buttonContainer: {
        backgroundColor: transparentBgColor,
        height: 50,
        display: "flex",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 10,        
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 63,
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 30,
        color: "#fff"
    }
  });
  
  