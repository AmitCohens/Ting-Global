import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import * as React from "react";
import AppButton from '../Components/AppButton';
import CountryPicker from 'react-native-country-picker-modal'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const Signup = ({navigation}) => {
  return (
    <View style={styles.view}>
        <Text style={styles.text}>Sign up</Text>
        <TextInput label="Username" style={styles.input}/>
        <TextInput label="Phone number" keyboardType="phone-pad" style={styles.input}/>
        <TextInput label="Full name" style={styles.input}/>
        <TextInput label="Country" style={styles.input}/>
        <TextInput label="Email address" keyboardType="email-address" style={styles.input}/>
        <TextInput label="Challenge language" style={styles.input}/>
        <View style={styles.button}>
            <AppButton title="Submit" type="submit" style={styles.button}/>
        </View>
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
        margin: 5,

    },
    text: {
        textAlign: 'center',
        fontSize: 25
    },
    button:{
        paddingRight: "10%",
        paddingLeft: "10%",
        paddingTop: "10%",
        justifyContent: 'center',
        alignItems: 'center'
    }
});
