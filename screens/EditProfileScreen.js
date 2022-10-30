import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import BackButton from '../components/BackButton';
import UserIcon from '../components/UserIcon';
import {TextInput} from 'react-native-paper';
import {transparentBgColor} from '../constants';
import s from '../styles/globalStyles';
const EditProfileScreen = ({navigation}) => {
  const [text, setText] = React.useState('');

  return (
    <ImageBackground
      source={require('../assets/bloodDonationBg.png')}
      resizeMode="cover"
      style={s.container}>
      <BackButton navigation={navigation} />
      <View style={s.mainContainer}>
        <UserIcon />
        <View style={s.row}>
          <TextInput
            placeholder="First Name"
            placeholderTextColor={'white'}
            value={text}
            onChangeText={text => setText(text)}
            style={[s.inputField, {marginRight: 7, width: 150, height: 56}]}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={'white'}
            value={text}
            onChangeText={text => setText(text)}
            style={[s.inputField, {width: 150, height: 56}]}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({

});
