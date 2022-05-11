import { Image, StatusBar, StyleSheet, Text, View,ScrollView} from 'react-native';
import React from 'react';
import PicButton from "../Components/PicButton";


const Page = ({navigation}) => {

    return (
        <View name={"body"} style={styleProfilePage.body}>
            <View name={"details"} style={styleProfilePage.AllDetails}>
                <PicButton imgSrc={require('../Images/left-arrow.png')} nav={navigation} dest={'HomePage'} style={{width : 25,height:25,margin:10}} ></PicButton>
                <View style={styleProfilePage.details}>
                <Text style={styleProfilePage.text}>{"Sharon Gal-Or"}</Text>
                <Image source={require('../Images/Sharon4.png')} style={styleProfilePage.image}/>
                <Text style={styleProfilePage.score}>{"SCORE: 4300"}</Text>
                </View>
            </View>
            <ScrollView style={styleProfilePage.container}>
                <Text style={styleProfilePage.item}>{"EXPRESSION"}</Text>
                <Text style={styleProfilePage.item}>{"DILIGENCE"}</Text>
                <Text style={styleProfilePage.item}>{"UNDERSTANDING"}</Text>
                <Text style={styleProfilePage.item}>{"COURAGE"}</Text>
                <Text style={styleProfilePage.item}>{"KNOWLEDGE"}</Text>
            </ScrollView>
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
        paddingTop:10,
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
        margin:1,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 16,
        borderRadius:25,
    },

});
export default Page;

