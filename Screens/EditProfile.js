import { Image, StatusBar, StyleSheet, Text, View,ScrollView} from 'react-native';
import React, {useContext} from 'react';
import PicButton from "../Components/PicButton";
import {TextInput} from "react-native-paper";
import AppButton from "../Components/AppButton";
import {userContext} from "../provider/UserProvider";


const Page = ({navigation}) => {
    const {userDict, setUserDict} = useContext(userContext)

    return (
        <View name={"body"} style={styleProfilePage.body}>
            <View name={"details"} style={styleProfilePage.AllDetails}>
                <View name={"all icons"} style={styleProfilePage.icons}>
                    <PicButton imgSrc={require('../Images/left-arrow.png')} nav={navigation} dest={0} style={{
                        width: 25,
                        height: 25,
                        margin: 10
                    }} />
                </View>
                <View style={styleProfilePage.details}>
                    <Text style={styleProfilePage.text}>{"Amit Cohen"}</Text>
                    <Image source={require('../Images/Amit.png')} style={styleProfilePage.image}/>
                    <Text style={styleProfilePage.score}>{"SCORE: 5002"}</Text>
                </View>
            </View>
            <ScrollView style={styleProfilePage.container}>
            <TextInput label="Username" style={styleProfilePage.input}/>
            <TextInput label="Phone number" keyboardType="phone-pad" style={styleProfilePage.input}/>
            <TextInput label="Full name" style={styleProfilePage.input}/>
            <TextInput label="Country" style={styleProfilePage.input}/>
            <TextInput label="Email address" keyboardType="email-address" style={styleProfilePage.input}/>
            <TextInput label="Challenge language" style={styleProfilePage.input}/>
            <View style={styleProfilePage.button}>
                <AppButton title="Submit" type="submit" style={styleProfilePage.button} nav={navigation} dest={'Profile'}/>
            </View>
            </ScrollView>
        </View>
    );
};
const styleProfilePage = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 30,
        borderTopWidth:4,
        borderBottomWidth:4,
        borderStyle:'solid',
        borderColor: "black",
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        margin:10,
    },
    score:{
        textAlign: 'center',
        fontSize: 25,
        borderBottomWidth:4,
        borderStyle:'solid',
        borderColor: "black",
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        margin:10,
    },
    body:{
        backgroundColor:'rgb(255,255,255)',
        height:'100%',
        width:'100%',
        justifyContent:'space-between',
    },
    image:{
        width: 180,
        height: 180,
        borderRadius: 200,
        borderWidth: 5,
        borderColor: "blue",
        margin:10,
    },
    AllDetails:{
        justifyContent:'space-between',
        paddingTop:'5%',
        backgroundColor:'rgba(28,139,203,0.53)',
    },
    details:{
        alignItems: 'center',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },

    icons:{
        display: "flex",
        flexDirection: "row",
        justifyContent:'space-between',
    },
    input: {
        // marginBottom: 10
        margin: 5,

    },
    button:{
        paddingRight: "10%",
        paddingLeft: "10%",
        paddingTop: "10%",
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default Page;

