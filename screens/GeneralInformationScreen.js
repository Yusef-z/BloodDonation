import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import BackButton from '../components/BackButton'
import { transparentBgColor } from '../constants'

const GeneralInformationScreen = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/bloodDonationBg.png")} resizeMode="cover" style={styles.container}>
            <BackButton navigation={navigation}/>
            <View style={styles.mainContainer}>
                <View style={styles.infoHeaderContainer}>
                    <Text style={styles.infoHeaderText}>
                    Blood donation benefits
                    </Text>
                </View>
                <View style={styles.infoContentContainer}>
                    <Text style={styles.infoContentText}>
                    • Increases the stem cell activit to produce new cell.
                    </Text>
                    <Text style={styles.infoContentText}>
                    • Increased blood circulation.
                    </Text>
                    <Text style={styles.infoContentText}>
                    • Blood donation reduces iron in the blood(which is considered one of the main causes or cardiac diseases).
                    </Text>
                    <Text style={styles.infoContentText}>
                    • Studies have proven that those who donate blood at least once a year are less prone to circulatory diseases and blood cancers.
                    </Text>
                </View>
                <View style={styles.infoContentContainer}>
                    <Text style={styles.infoHeaderText}>
                    Blood donation conditions
                    </Text>
                </View>
                <View style={styles.infoContentContainer}>
                    <Text style={styles.infoContentText}>
                    • People less than 18 years.                    </Text>
                    <Text style={styles.infoContentText}>
                    • People with communicable diseases such as AIDS, Hepatitis B and C, Syphilis, malaria.                    </Text>
                    <Text style={styles.infoContentText}>
                    • People with genetic blood diseases.                    </Text>
                    <Text style={styles.infoContentText}>
                    • People who suffer acute anemia.
                    </Text>
                    <Text style={styles.infoContentText}>
                    • People suffering from chronic diseases such as diabetes, hypertension and cancer.
                    </Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default GeneralInformationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
      },
      mainContainer: {
        flex: 1,
      },
      infoHeaderContainer: {
        marginHorizontal: 34,
        backgroundColor: transparentBgColor,
        borderColor: "white",
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        marginTop: 138
      },
      infoContentContainer: {
        marginHorizontal: 34,
        backgroundColor: transparentBgColor,
        borderColor: "white",
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        marginBottom: 7
      },
      infoHeaderText: {
        fontSize: 20,
        color: "white"
      },
      infoContentText: {
        fontSize: 18,
        color: "white"
      }
      
})
