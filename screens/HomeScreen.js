import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import DonationRequestCard from '../components/DonationRequestCard';
import TransparentButton from '../components/TransparentButton';
import UserIcon from '../components/UserIcon';
import { transparentBgColor } from '../constants';

const HomeScreen = ({navigation}) => {
    
    return (
        <ImageBackground source={require("../assets/bloodDonationBg.png")} resizeMode="cover" style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("GeneralInformation");
            }}>
                <Image source={require("../assets/GeneralInformationIconButton.png")} style={styles.generalInfoButton}></Image>
            </TouchableOpacity>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("EditProfile");
                }}>
                <UserIcon/>
                </TouchableOpacity>

                <Text style={styles.welcomingMessage}>Welcome User</Text>
                <View style={[styles.row, {marginBottom: 20}]}>
                    <View style={[styles.homeUpperCard, {marginRight: 23}]}>
                        <Text style={styles.bloodType}>O-</Text>
                        <Text style={styles.homeUpperCardText}>Can donate to</Text>
                        <Text style={styles.homeUpperCardText}>all blood types</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("DonationsHistory");
                    }}>

                    <View style={styles.homeUpperCard}>
                        <Text style={[styles.homeUpperCardText, {marginTop: 25}]}>Last donation</Text>
                        <Text style={[styles.homeUpperCardText, {marginBottom: 35}]}>20/10/2022</Text>
                        <Text style={styles.homeUpperCardText}>Donations: 1</Text>
                    </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.buttonsContainer}>
                    <TransparentButton buttonText="New Donation" width={307}/>
                    <TransparentButton buttonText="Need a Donor" width={307}/>
                </View>
                <View style={styles.donationRequestsContainer}>
                <DonationRequestCard/>
                <DonationRequestCard/>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Requests"); 
                }}>
                <Text style={styles.moreButtonText}>{"More >"}</Text>

                </TouchableOpacity>

                </View>

            </View>
        </ImageBackground>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
      },
    generalInfoButton: {
        position: "absolute",
        top: 33,
        left: 39,
        zIndex: 6,
    },
    donationRequestsContainer: {
        backgroundColor: transparentBgColor,
        width: 307,
        height: 250,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
        paddingHorizontal: 3
    },
    mainContainer: {
        flex: 1,
        display: "flex",
        alignItems: "center"
    },

    welcomingMessage: {
        fontSize: 24,
        color: "white",
        marginBottom: 15
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    homeUpperCard: {
        backgroundColor: transparentBgColor,
        borderWidth: 1,
        borderColor: "white",
        width: 140,
        height: 150,
        borderRadius: 10,
        display: "flex",
        alignItems: "center"
    },
    bloodType: {
        color: "white",
        fontSize: 32,
        marginTop: 25,
        marginBottom: 16
    },
    homeUpperCardText: {
        color: "white",
        fontSize: 16
    },
    moreButtonText: {
        color: "white",
        fontSize: 20
    }
})
