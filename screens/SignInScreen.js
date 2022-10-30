import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import BackButton from "../components/BackButton";
import TransparentButton from "../components/TransparentButton";
import TransparentInputField from "../components/TransparentInputField";

export default SignInScreen = ({navigation}) => {
  
  return (
      <ImageBackground source={require("../assets/bloodDonationBg.png")} resizeMode="cover" style={styles.container}>
      <BackButton navigation={navigation}/>
      <View style={styles.mainContainer}>
        <Text style={styles.headerText}>Sign In</Text>
        <TransparentInputField placeholder={"Email"}/>
        <TransparentInputField placeholder={"Password"}/>
        <TransparentButton buttonText="Sign In"/>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Blood Donations</Text>
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
      headerText: {
        marginTop: 150,
        marginBottom: 103,
        fontSize: 32,
        textAlign: "center",
        color: "white"
      },
      mainContainer: {
        flex: 1,
        display: "flex",
        alignContent: "center",
        
      },
      languageText: {
        fontSize: 20,
        color: "white",
        position: "absolute",
        top: 33,
        left: 39
      },
      footerText: {
        fontSize: 20,
        color: "white"
      },
      footerContainer: {
        display: "flex",
        alignItems: "center",
        marginBottom: 28
      }
  });
  
  