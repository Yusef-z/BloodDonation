import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { transparentBgColor } from '../constants'

const DonationRequestCard = () => {
    return (
        <View style={[styles.card, styles.requestCard]}>
            <View style={styles.row}>
                <View style={styles.donationContainer}>
                    <Text style={styles.bloodType}>O-</Text>
                    <TouchableOpacity style={styles.donateButton}>
                        <Text style={styles.donationText}>Donate</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.requestInfoContainer}>
                    <Text style={[styles.requestInfoText, {fontSize: 20}]}>Ahmad</Text>
                    <Text style={styles.requestInfoText}>City: Riyadh</Text>
                    <Text style={styles.requestInfoText}>Needs: O-</Text>
                    <Text style={styles.requestInfoText}>Reason: Surgery</Text>
                </View>
            </View>
        </View>
    )
}

export default DonationRequestCard

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: transparentBgColor,
        borderRadius: 10
    },
    requestCard: {
        width: 298,
        height: 100,
        marginTop: 8,
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    donateButton: {
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        borderWidth: 1,
        borderColor: "white",
        marginHorizontal: 12,
        paddingHorizontal: 5
    },
    donationText: {
        color: "white",
        fontSize: 20
    },
    bloodType: {
        color: "white",
        fontSize: 32,
        marginTop: 12,
        marginBottom: 2
    },
    donationContainer: {
        display: 'flex',
        alignItems: "center"
    },
    requestInfoContainer: {

    },
    requestInfoText: {
        fontSize: 16,
        color: "white",
        marginBottom: 0
    },


})
