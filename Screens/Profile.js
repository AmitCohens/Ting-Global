import { Image, StatusBar, StyleSheet, Text, View,ScrollView} from 'react-native';
import React from 'react';
import PicButton from "../Components/PicButton";


const Page = ({navigation}) => {

    return (
        <View name={"body"} style={styleProfilePage.body}>
            <View name={"details"} style={styleProfilePage.AllDetails}>
                <View name={"all icons"} style={styleProfilePage.icons}>
                <PicButton imgSrc={require('../Images/left-arrow.png')} nav={navigation} dest={0} style={{
                        width: 25,
                        height: 25,
                        margin: 10
                    }} />
                <PicButton imgSrc={require('../Images/edit.png')} nav={navigation} dest={0} style={{
                        width: 25,
                        height: 25,
                        margin: 10
                    }} />
                </View>
                <View style={styleProfilePage.details}>
                <Text style={styleProfilePage.text}>{"Amit Cohen"}</Text>
                <Image source={require('../Images/Amit.png')} style={styleProfilePage.image}/>
                <Text style={styleProfilePage.score}>{"SCORE: 5002"}</Text>
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
        paddingTop:'5%',
        backgroundColor:'rgba(28,139,203,0.53)',
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
        fontSize: 12,
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

