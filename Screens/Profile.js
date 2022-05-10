import { Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Page = () => {

    return (
        <View name={"body"} style={styleProfilePage.body}>
            <View name={"details"} style={styleProfilePage.AllDetails}>
                <Image source={require('../Images/left-arrow.png')} style={styleProfilePage.arrow} />
                <View style={styleProfilePage.details}>
                <Text style={styleProfilePage.text}>{"Sharon Gal-Or"}</Text>
                <Image source={require('../Images/Sharon4.png')} style={styleProfilePage.image}/>
                <Text style={styleProfilePage.score}>{"SCORE: 4300"}</Text>
                </View>
            </View>
            <View style={styleProfilePage.container}>
                <Text style={styleProfilePage.item}>{"EXPRESSION"}</Text>
                <Text style={styleProfilePage.item}>{"DILIGENCE"}</Text>
                <Text style={styleProfilePage.item}>{"UNDERSTANDING"}</Text>
                <Text style={styleProfilePage.item}>{"COURAGE"}</Text>
                <Text style={styleProfilePage.item}>{"KNOWLEDGE"}</Text>
            </View>
        </View>
    );
};
const styleProfilePage = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 30,
        borderTopWidth:4,
        borderBottomWidth:4,
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
    arrow:{
        width: 30,
        height: 30,
    },
    body:{
        backgroundColor:'rgb(255,255,255)',
        height:'100%',
        width:'100%',
        justifyContent:'space-between',
    },
    image:{
        width: 180,
        height: 180,
        borderRadius: 200,
        borderWidth: 5,
        borderColor: "blue",
        margin:10,
    },
    AllDetails:{
        justifyContent:'space-between',
        paddingTop:23,
        backgroundColor:'rgba(1,162,255,0.53)',
    },
    details:{
        alignItems: 'center',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#324bb2',
        padding: 10,
        margin:2,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 16,
        borderRadius:25,
    },

});
export default Page;

