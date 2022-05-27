import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import AppButton from '../Components/AppButton';

const Signup = ({navigation}) => {
  return (
    <View style={styles.view}>
        <Text style={styles.text}>Sign up</Text>
        <TextInput label="Name" style={styles.input}/>
        <TextInput label="Email" keyboardType="email-address" style={styles.input}/>
        <TextInput label="Phone number" keyboardType="phone-pad" style={styles.input}/>
        <AppButton title="Submit" />
    </View>
  );
};
export default Signup;

const styles = StyleSheet.create({
    view: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        // justifyContent: "space-between",
        // alignItems: "center",
        // margin: 5,
        paddingRight: "10%",
        paddingLeft: "10%",
        paddingTop: "10%",
    },
    input: {
        // marginBottom: 10
        margin: 10,

    },
    text: {
        textAlign: 'center',
        fontSize: 25
    }
});
