import {
  Image,
  StyleSheet,
  Text,
  View,
    ScrollView,
} from 'react-native';
import React, {useContext} from 'react';
import Profile from './Profile';
import PicButton from '../Components/PicButton';
import SlidingWindow from "../Components/SlidingWindow";
import LastMessages from "../Components/LastMessages";
import {userContext} from "../provider/UserProvider";
import users from "../TestData/DB.json"

const Page = ({navigation}) => {
    const {userDict} = useContext(userContext)
    return (
        <View style={styleHomePage.body}>
            <View style={styleHomePage.top}>
                <PicButton imgSrc={require('../Images/user1.png')} nav={navigation} dest={'Profile'}
                           styling={{width: 50, height: 50}}/>
                <Image
                    source={require('../Images/logo18.png')}
                    style={styleHomePage.image}
                />
                <PicButton imgSrc={require('../Images/world1.png')} nav={navigation} dest={1}
                           styling={{width: 50, height: 50}}/>
            </View>
            <Text style={styleHomePage.text}>Welcome, {users[userDict.phone].FullName}</Text>
            <ScrollView style={styleHomePage.content}>
                <SlidingWindow/>
                <LastMessages style={{margin: 10,paddingBottom:10}}/>
            </ScrollView>
        </View>
    );
};

const styleHomePage = StyleSheet.create({
    body: {
        paddingTop:'8%',
        backgroundColor:"rgb(227,234,250)",
        flex:1,
    },
    image: {
        justifyContent: 'flex-start',
        width: 100,
        height: 60,
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: '8%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '5%',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        height: '85%',
        // justifyContent: 'space-between',
        paddingBottom:"10%",
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: '5%'
    },
});
export default Page;
