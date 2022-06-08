import {Image, StyleSheet, Text,ImageBackground, View,Pressable} from 'react-native';
import React, {useContext} from 'react';
import PicButton from "../Components/PicButton";
import userData from "../TestData/DB.json"
import {userContext} from "../provider/UserProvider";
import LoginPage from "./LoginPage";
import AppButton from "../Components/AppButton";



const Actions = ({navigation}) => {

    const {userDict} = useContext(userContext);
    const picture = userData[userDict.phone].picture;
    const admin = userData[userDict.phone].isAdmin;
    return (
        <View>
            <ImageBackground source={require("../Images/logoutPage.jpg")} style={styles.background}>
                <View style={styles.body}>
                    <View>
                        <Image source={{uri: picture}} style={styles.image}/>
                    </View>
                    <View style={styles.allButtons}>
                        {admin && <AppButton title={'Create a Challenge'} nav={navigation} dest={1}/>}
                        <AppButton title={'Available Challenges'} nav={navigation} dest={1}/>
                    </View>
                    <Pressable style={styles.logout} onPress={() =>navigation.navigate("LoginPage")}>
                        <Text style={styles.text}>Logout</Text>
                        <PicButton imgSrc={require('../Images/log-out.png')} nav={navigation} dest={"LoginPage"}
                                   styling={{width: 60, height: 60}}/>
                    </Pressable>
                </View>

            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
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
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems:"center",
        paddingTop:"10%",
        paddingBottom: '5%',
        margin:5,
    },
    allButtons:{
        // margin:20,
        // padding:10,
        display: "flex",
        justifyContent:"space-between",
        height:"30%",
        // maxHeight: '40%'
    },
    allPage:{
        display: "flex",
        justifyContent:"flex-end",
        margin:2,
    },
   logout:{
       display: "flex",
       flexDirection: "row",
       alignItems:"center",
       backgroundColor:"rgb(253,90,84)",
       borderRadius:10,
       paddingLeft:"5%",

   },
    text: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color:"white",
    },
});
export default Actions;

