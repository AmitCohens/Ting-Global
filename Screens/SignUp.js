import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import AppButton from '../Components/AppButton';

export const Signup = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/*{/<Appbar>/}*/}
        {/*/!*    <Appbar.BackAction/>*!/*/}
        {/*/!*    <Appbar.Content title="Signup"/>*!/*/}
        {/*{/<Appbar>/}*/}
        <TextInput label="Name" />
        <TextInput label="Email" keyboardType="email-address" />
        <TextInput
          label="Password"
          secureTextEntry={true}
          right={<TextInput.Icon name="eye-off-outline" />}
        />
        <TextInput
          label="Confirm Password"
          secureTextEntry={true}
          right={<TextInput.Icon name="eye-off-outline" />}
        />
        <TextInput label="Phone number" keyboardType="phone-pad" />
        <AppButton title="submit" />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Signup;
