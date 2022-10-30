import React from 'react'
import { StyleSheet, Text, View, ImageBackground, FlatList, ScrollView } from 'react-native'
import BackButton from '../components/BackButton'
import DonationRequestCard from '../components/DonationRequestCard'
import { transparentBgColor } from '../constants'

const DonationsHistoryScreen = ({navigation}) => {
    
    return (
        <ImageBackground source={require("../assets/bloodDonationBg.png")} resizeMode="cover" style={styles.container}>
            <BackButton navigation={navigation}/>
            <View style={styles.mainContainer}>
                <Text style={styles.pageHeaderText}>History</Text>
                <View style={styles.contentContainer}>
                    <ScrollView style={styles.scrollView}>
                    <DonationRequestCard/>
                    <DonationRequestCard/>
                    <DonationRequestCard/>
                    <DonationRequestCard/>
                    <DonationRequestCard/>
                    <DonationRequestCard/>
                    <DonationRequestCard/>
                    <DonationRequestCard/>
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    )
}

export default DonationsHistoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
      },
      mainContainer: {
        flex: 1,
        display: "flex",
        alignItems: "center"
      },
      pageHeaderText: {
        marginTop: 150,
        marginBottom: 17,
        fontSize: 24,
        color: "white"
      },
      contentContainer: {
        width: 307,
        height: 530,
        backgroundColor: transparentBgColor,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        display: 'flex',
        alignItems: "center",
        paddingBottom: 10
      },
      scrollView: {
        height: 400,
      }
})
