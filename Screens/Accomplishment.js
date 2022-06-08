import {Dimensions, Image, StatusBar, StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useContext} from 'react';
import {userContext} from "../provider/UserProvider";
import users from "../TestData/DB.json";

const { width, height } = Dimensions.get('window');

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

    function achieveView(s) {
        console.log(s)
        return (
            <View style={styles.medalAndTitle}>
                <Text style={styles.text}>{s}</Text>
                {medalView(userInfo[s])}
            </View>
        )
    }
    return (
        <ImageBackground
            source={require('../Images/intro-bg.jpg')}
            style={styles.background}>
            <View style={styles.body}>
                <View style={styles.details}>
                    <Text style={styles.title}>{userInfo.FullName}</Text>
                    <Image source={{uri: userInfo.picture}} style={styles.image2}/>
                    <Text style={styles.score}>Score: {userInfo["Score"]}</Text>
                </View>
                <View style={styles.container}>
                    {achieveView("Expression")}
                    {achieveView("Diligence")}
                    {achieveView("Understanding")}
                    {achieveView("Courage")}
                    {achieveView("Knowledge")}
                </View>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    background: {
        width: width,
        height: height,
        // flex:1
    },
    text:{
        textAlign: 'center',
        fontSize: 20,
        // borderStyle:'solid',
        // borderColor: "black",
        fontWeight: 'bold',
        // fontFamily: 'sans-serif-medium',
    },
    medals: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        fontSize: 32,
        // borderStyle:'solid',
        // borderColor: "black",
        fontWeight: 'bold',
        // fontFamily: 'sans-serif-medium',
    },
    score:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        // fontFamily: 'sans-serif-medium',
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
        maxHeight: '16%'
    },
    details: {
        alignItems: 'center',
    },
    body:{
        // display: 'flex',
        // justifyContent: 'space-between',
        // backgroundColor:'rgba(142,201,250,0.53)',
        flex:1,
        paddingTop: '10%'
    }
});
export default Page;
