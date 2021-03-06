import {Image, StatusBar, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import PicButton from "../Components/PicButton";
import {userContext} from "../provider/UserProvider";
import users from '../TestData/DB.js'

const Page = ({navigation}) => {
    const {userDict} = useContext(userContext)
    const userInfo = users[userDict.phone];
    return (
        <View name={"body"} style={styleProfilePage.body}>
            <View name={"details"} style={styleProfilePage.AllDetails}>
                <View name={"all icons"} style={styleProfilePage.icons}>
                    <PicButton imgSrc={require('../Images/left-arrow.png')} nav={navigation} dest={0} styling={{
                        width: 25,
                        height: 25,
                        margin: 10
                    }}/><Text style={styleProfilePage.text}>{userInfo.FullName}</Text>
                    <PicButton imgSrc={require('../Images/edit.png')} nav={navigation} dest={"EditProfile"} styling={{
                        width: 25,
                        height: 25,
                        margin: 10
                    }}/>
                </View>
                <View style={styleProfilePage.details}>
                    <Image source={userInfo.Image} style={styleProfilePage.image}/>
                </View>
            </View>
            <ScrollView style={styleProfilePage.container}>
                <Text style={styleProfilePage.item}>
                    <Text style={{fontWeight: 'bold'}}>Username: </Text>
                    {userInfo["Username"]}</Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{fontWeight: 'bold'}}>Phone number: </Text>
                    {userInfo["PhoneNumber"]}</Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{fontWeight: 'bold'}}>Full name: </Text>
                    {userInfo["FullName"]}</Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{fontWeight: 'bold'}}>Country: </Text>
                    {userInfo["Country"]}</Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{fontWeight: 'bold'}}>Email address: </Text>
                    {userInfo["EmailAddress"]}</Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{fontWeight: 'bold'}}>Language: </Text>
                    {userInfo["ChallengeLanguage"]}</Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{fontWeight: 'bold'}}>Membership plan: </Text>
                    {userInfo["MembershipPlan"]}</Text>
            </ScrollView>
        </View>
    );
};
const styleProfilePage = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 25,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderStyle: 'solid',
        borderColor: "black",
        fontWeight: 'bold',
        margin: 10,
    },
    body: {
        backgroundColor: 'rgb(255,255,255)',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 200,
        margin: 10,
    },
    AllDetails: {
        justifyContent: 'space-between',
        paddingTop: '8%',
        backgroundColor: 'rgba(28,139,203,0.53)',
        maxHeight: "35%",
    },
    details: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 10,
        margin: 1,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
    }

});

export default Page;

