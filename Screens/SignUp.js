import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import AppButton from '../Components/AppButton';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput label="Name" />
        <TextInput label="Email" keyboardType="email-address" />
        <TextInput label="Phone number" keyboardType="phone-pad" />
        <AppButton title="submit" />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Signup;
