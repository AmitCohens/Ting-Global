import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const Page = () => {
    return (
        <View name={"body"} style={styleProfilePage.body}>
            <View name={"details"} style={styleProfilePage.details}>
                <Image source={require('../Images/Sharon2.png')} style={styleProfilePage.image}/>
            </View>
            <Text style={styleProfilePage.text}>{"This is the Profile page"}</Text>
        </View>
    );
};
const styleProfilePage = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 30,
        justifyContent:'space-around',
    },
    body:{
        backgroundColor:'rgb(255,255,255)',
        height:'100%',
        width:'100%',
    },
    image:{
        width: 200,
        height: 200,
        borderRadius: 200,
        borderStyle:'solid',
        borderWidth: 3,
        borderColor: "black",
    },
    details:{
        justifyContent:'center',
        paddingTop:30,
        paddingLeft:'26%',
        backgroundColor:'rgba(13,195,227,0.53)',
    },
});
export default Page;
