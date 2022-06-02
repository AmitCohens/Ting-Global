import { Image, StatusBar, StyleSheet, Text, View,ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';
import PicButton from "../Components/PicButton";
import userData from "../TestData/DB.json"
import {userContext} from "../provider/UserProvider";


const Actions = ({navigation}) => {
    const {userDict, setUserDict} = useContext(userContext);
    const name=userData[userDict.phone].FullName;
    return (
        <View name={"all icons"} style={styleProfilePage.icons}>
            <PicButton imgSrc={userData[userDict.phone].picture} nav={navigation} dest={0} style={{
                        width: 25,
                        height: 25,
                        margin: 10
            }} /><Text style={styleProfilePage.text}>{userData[userDict.phone].FullName}</Text>
        </View>
    );
};
const styleProfilePage = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 25,
        borderTopWidth:3,
        borderBottomWidth:3,
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
        width: 150,
        height: 150,
        borderRadius: 200,
        margin:10,
    },
    AllDetails:{
        justifyContent:'space-between',
        paddingTop:'5%',
        backgroundColor:'rgba(28,139,203,0.53)',
        maxHeight:"35%",
    },
    details:{
        alignItems: 'center',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 10,
        margin:1,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 15,
        borderRadius:25,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
    },
    icons:{
        display: "flex",
        flexDirection: "row",
        justifyContent:'space-between',
    }

});
export default Actions;

