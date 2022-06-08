import {Image, StatusBar, StyleSheet, Text,ImageBackground, View} from 'react-native';
import React, {useContext} from 'react';
import PicButton from "../Components/PicButton";
import userData from "../TestData/DB.json"
import {userContext} from "../provider/UserProvider";
import LoginPage from "./LoginPage";
import AppButton from "../Components/AppButton";



const Actions = ({navigation}) => {

    const {userDict} = useContext(userContext);
    const name=userData[userDict.phone].FullName;
    const picture=userData[userDict.phone].picture;
    return (
        <View>
            <ImageBackground source={require("../Images/logoutPage.jpg")} style={styleActionsPage.background}>
                <View style={styleActionsPage.allPage}>
                <View style={styleActionsPage.body}>
                    <Image source={{uri: picture}} style={styleActionsPage.image}/>
                    <View style={styleActionsPage.allButtons}>
                    <AppButton title={'Create a Challenge'} nav={navigation} dest={1}/>
                    <AppButton title={'Available Challenges'} nav={navigation} dest={1}/>
                    </View>
                    <PicButton imgSrc={require('../Images/log-out.png')} nav={navigation} dest={"LoginPage"}
                               styling={{width: 50, height: 50}}/>
                </View>
                <View style={styleActionsPage.tt}>
                    <Text style={styleActionsPage.text}>©Ting-Global, App by Amit Cohen, Idan Mashriki, Bezalel Cohen, Miriam Sirota, Gad Shrim</Text>
                </View>
                </View>
            </ImageBackground>
        </View>
    );
};
const styleActionsPage = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 200,
        margin: 10,
        alignItems:"center",
        borderWidth:10 ,
        borderColor: 'rgba(0,0,0,0.2)',
    },
    background: {
        width: "100%",
        height: "100%",
        backgroundColor:"white",
    },
    body:{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems:"center",
        paddingTop:"10%",
        margin:5,
    },
    allButtons:{
        margin:5,
        padding:10,
        display: "flex",
        justifyContent:"space-between",
        height:"40%",
    },
    text:{
        backgroundColor:"rgba(0,0,0,0.53)",
        color:"white",
        fontSize:17,
        textAlign:"center",
        borderRadius:10,
    },
    allPage:{
        display: "flex",
        justifyContent:"flex-end",
        margin:2,
    },
    tt:{
        paddingTop:"16%",
    }
});
export default Actions;

