import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, {useContext} from 'react';
import PicButton from "../Components/PicButton";
import {userContext} from "../provider/UserProvider";
import users from "../TestData/DB.json";

function medalView(num) {
    return (
    <View style={styles.medals}>
        {num > 0 && <Image style={styles.image} source={require('../Images/medal.png')}/>}
        {num > 1 && <Image style={styles.image} source={require('../Images/medal.png')}/>}
        {num > 2 && <Image style={styles.image} source={require('../Images/medal.png')}/>}
        {num > 3 && <Image style={styles.image} source={require('../Images/medal.png')}/>}
        {num > 4 && <Image style={styles.image} source={require('../Images/medal.png')}/>}
    </View>
    )
}

const Page = () => {
    const {userDict} = useContext(userContext);
    const userInfo = users[userDict.phone];

    return (<View name={"body"} style={styles.body}>
            <View name={"details"} style={styles.AllDetails}>
                <View style={styles.details}>
                    <Text style={styles.title}>{userInfo.FullName}</Text>
                    <Image source={{uri: userInfo.picture}} style={styles.image2}/>
                    <Text style={styles.score}>Score: {userInfo.score}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.medalAndTitle}>
                    <Text style={styles.text}>Expression</Text>
                    {medalView(userInfo.Expression)}
                </View>
                <View style={styles.medalAndTitle}>
                    <Text style={styles.text}>Dilegence</Text>
                    {medalView(userInfo.Dilegence)}
                </View>
                <View style={styles.medalAndTitle}>
                    <Text style={styles.text}>Understanding</Text>
                    {medalView(userInfo.understanding)}
                </View>
                <View style={styles.medalAndTitle}>
                    <Text style={styles.text}>Courage</Text>
                    {medalView(userInfo.courage)}
                </View>
                <View style={styles.medalAndTitle}>
                    <Text style={styles.text}>Knowledge</Text>
                    {medalView(userInfo.knowledge)}
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 20,
        borderStyle:'solid',
        borderColor: "black",
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
    },
    medals: {
        flexDirection: 'row',
        // display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        borderStyle:'solid',
        borderColor: "black",
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
    },
    score:{
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        margin:10,
    },
    image:{
        width: 35,
        height: 35,
        margin:5,
    },
    image2:{
        width: 150,
        height: 150,
        borderRadius: 200,
        margin:10,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3
    },
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        marginTop: StatusBar.currentHeight || 0,
    },
    medalAndTitle: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        textAlign: 'center',
        paddingRight:"2%",
        paddingLeft:"5%",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    details: {
        alignItems: 'center',
    },
    body:{
        justifyContent: 'center',
        backgroundColor:'rgba(142,201,250,0.53)',
        flex:1,
        paddingTop: '10%'
    }
});
export default Page;
