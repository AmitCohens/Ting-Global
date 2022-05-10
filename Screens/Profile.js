import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const Page = () => {
    return (
        <View name={"body"} style={styleProfilePage.body}>
            <View name={"details"} style={styleProfilePage.details}>
                <Image source={require('../Images/Sharon4.png')} style={styleProfilePage.image}/>
                <Text style={styleProfilePage.text}>{"Sharon Gal-Or"}</Text>
            </View>
        </View>
    );
};
const styleProfilePage = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 30,
        justifyContent:'space-around',
        borderTopWidth:4,
        borderBottomWidth:4,
        borderStyle:'solid',
        borderColor: "black",
    },
    body:{
        backgroundColor:'rgb(255,255,255)',
        height:'100%',
        width:'100%',
    },
    image:{
        width: 180,
        height: 180,
        borderRadius: 200,
        borderStyle:'solid',
        borderWidth: 5,
        borderColor: "blue",
        margin:10,
    },
    details:{
        justifyContent:'space-between',
        alignItems: 'center',
        paddingTop:30,
        backgroundColor:'rgba(1,162,255,0.53)',
    },
});
export default Page;
