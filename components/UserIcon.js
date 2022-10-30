import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const UserIcon = () => {
    return (
        <Image source={require("../assets/user-icon.png")} style={styles.userIcon}></Image>
    )
}

export default UserIcon

const styles = StyleSheet.create({
    userIcon: {
        marginTop: 70,
        marginBottom: 7
    },
})
