import { Image, StyleSheet, Text, View,ScrollView} from 'react-native';
import React, {useContext} from 'react';
import PicButton from "../Components/PicButton";
import {TextInput} from "react-native-paper";
import AppButton from "../Components/AppButton";
import {userContext} from "../provider/UserProvider";
import users from "../TestData/DB.json";


const Page = ({navigation}) => {
    const {userDict} = useContext(userContext)
    const userInfo = users[userDict.phone];

    return (
        <View name={"body"} style={styles.body}>
            <View name={"details"} style={styles.AllDetails}>
                <View name={"all icons"} style={styles.icons}>
                    <PicButton imgSrc={require('../Images/left-arrow.png')} nav={navigation} dest={0} styling={{
                        width: 25,
                        height: 25,
                        margin: 10
                    }}/>
                    <Text style={styles.text}>{userInfo.FullName}</Text>
                    <PicButton imgSrc={require('../Images/edit_photo.png')} nav={navigation} dest={"EditProfile"} styling={{
                        width: 35,
                        height: 35,
                        margin: 10
                    }}/>
                </View>
                <View style={styles.details}>
                    <Image source={{uri: userInfo.picture}} style={styles.image}/>
                </View>
            </View>
            <ScrollView style={styles.container}>
                <TextInput label="Username" style={styles.input}/>
                <TextInput label="Phone number" keyboardType="phone-pad" style={styles.input}/>
                <TextInput label="Full name" style={styles.input}/>
                <TextInput label="Country" style={styles.input}/>
                <TextInput label="Email address" keyboardType="email-address" style={styles.input}/>
                <TextInput label="Challenge language" style={styles.input}/>
                <View style={styles.button}>
                    <AppButton title="Submit" type="submit" style={styles.button} nav={navigation}
                               dest={'Profile'}/>
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 25,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderStyle:'solid',
        borderColor: "black",
        fontWeight: 'bold',
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
        justifyContent: 'space-between',
        paddingTop: '8%',
        backgroundColor: 'rgba(28,139,203,0.53)',
        maxHeight: "35%",
    },
    details:{
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingTop: "3%",
        // marginTop: StatusBar.currentHeight || 0,
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    icons:{
        display: "flex",
        flexDirection: "row",
        justifyContent:'space-between',
    },
    input: {
        margin: 8,
    },
    button:{
        paddingTop: "5%",
        paddingBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default Page;

