import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import * as React from "react";
import AppButton from '../Components/AppButton';
import LoginButton from '../Components/LoginButton';
import CountryPicker from 'react-native-country-picker-modal'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {useContext, useState} from "react";
import {register, singIn} from '../utils/Connect'
import {userContext} from '../provider/UserProvider'

const Signup = ({navigation}) => {
    const {userDict, setUserDict} = useContext(userContext)
    const [registerData,setRegister]=useState({ register: {
            username: "",
            phone: "",
            fullName: "",
            organization: "",
            country: "",
            memberName: "",
            memberRole: "",
            email: "",
            language: "English",
            accountType: "organization"
        }})

  return (
    <View style={styles.view}>
        <Text style={styles.text}>Sign up</Text>
        <TextInput label="Username" style={styles.input} />
        <TextInput label="Phone number" keyboardType="phone-pad" style={styles.input}/>
        <TextInput label="Full name" style={styles.input}/>
        <TextInput label="Country" style={styles.input}/>
        <TextInput label="Email address" keyboardType="email-address" style={styles.input}/>
        <TextInput label="Challenge language" style={styles.input}/>
        <View style={styles.button}>
            <LoginButton title="Submit" type="submit" style={styles.button} nav={navigation} signInFunc={register_} params={{
                registerData,
                setRegister,
                userDict,
                setUserDict,
                navigation,
            }}/>
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

function register_(props) {
    //
    console.log('----- press')
    // console.log(props)
    //
    // ///////////////Bypass
    // if(props.userDict.phone === "")
    //     props.navigation.navigate('HomePage')
    //
    // register(props.registerData, res => {
    //     // props.navigation.navigate('ConfirmCode')
    //     // if(res.)
    //
    // }, err => {
    //     // console.log(Object.entries(err))
    //     // console.log('status' in JSON.parse(err))

    // })
    props.navigation.navigate('ConfirmCode')
}
