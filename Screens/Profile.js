import { Image, StatusBar, StyleSheet, Text, View,ScrollView} from 'react-native';
import React, {useContext} from 'react';
import PicButton from "../Components/PicButton";
import {userContext} from "../provider/UserProvider";

const dataUser={
    Username:"AmitCohen123",
    PhoneNumber:"+972527503742",
    FullName:"Amit Cohen",
    Country:"Israel",
    EmailAddress:"cohen.amit.official@gmail.com",
    ChallengeLanguage:"English",
    MembershipPlan:"18 Days",
    picture:require("../Images/Amit.png"),
}




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
                    }} /><Text style={styleProfilePage.text}>{"Amit Cohen"}</Text>
                <PicButton imgSrc={require('../Images/edit.png')} nav={navigation} dest={"EditProfile"} props={dataUser} style={{
                        width: 25,
                        height: 25,
                        margin: 10
                    }} />

                </View>
                <View style={styleProfilePage.details}>
                <Image source={dataUser.picture} style={styleProfilePage.image}/>
                </View>
            </View>
            <ScrollView style={styleProfilePage.container}>
                <Text style={styleProfilePage.item}>
                    <Text style={{ fontWeight: 'bold'}}>Username: </Text>
                    {dataUser.Username}
                </Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{ fontWeight: 'bold'}}>Phone number: </Text>
                    {dataUser.PhoneNumber}</Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{ fontWeight: 'bold'}}>Full name: </Text>
                    {dataUser.FullName}</Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{ fontWeight: 'bold'}}>Country: </Text>
                    {dataUser.Country}</Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{ fontWeight: 'bold'}}>Email address: </Text>
                    {dataUser.EmailAddress}</Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{ fontWeight: 'bold'}}>Language: </Text>
                    {dataUser.ChallengeLanguage}</Text>
                <Text style={styleProfilePage.item}>
                    <Text style={{ fontWeight: 'bold'}}>Membership plan: </Text>
                    {dataUser.MembershipPlan}</Text>
            </ScrollView>
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
export default Page;

