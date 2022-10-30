import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import TransparentButton from "../components/TransparentButton";

export default LandingScreen = ({navigation}) => {
  
    return (
      <ImageBackground source={require("../assets/bloodDonationBg.png")} resizeMode="cover" style={styles.container}>
      <Text style={styles.languageText}>Arabic</Text>
      <View style={styles.mainContainer}>
        <TransparentButton buttonText={"Sign In"} nextScreen={"SignIn"} navigation={navigation}/>
        <TransparentButton buttonText={"Create Account"} nextScreen={"CreateAccount"} navigation={navigation}/>
      </View>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
      },
      mainContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "center"
      },
      languageText: {
        fontSize: 20,
        color: "white",
        position: "absolute",
        top: 33,
        left: 39
      }
  });
  
  