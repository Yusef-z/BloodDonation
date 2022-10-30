import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const BackButton = (props) => {
  const backTxt = "< Back";
  const {navigation} = props;
    return (
      <TouchableOpacity onPress={() => {
        navigation.goBack()
      }}>
        <Text style={styles.languageText}>{backTxt}</Text>
      </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
  languageText: {
    fontSize: 20,
    color: "white",
    position: "absolute",
    top: 33,
    left: 39
  },
})
