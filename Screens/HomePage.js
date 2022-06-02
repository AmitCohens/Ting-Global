import {
  Image,
  StyleSheet,
  Text,
  View
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
        <View name={'body'}>
            <View name={'TopOfPage'} style={styleHomePage.top}>
                <PicButton imgSrc={require('../Images/user1.png')} nav={navigation} dest={'Profile'}
                           style={{width: 50, height: 50}}/>
                <Image
                    source={require('../Images/logo18.png')}
                    style={styleHomePage.image}
                />
                <PicButton imgSrc={require('../Images/world1.png')} nav={navigation} dest={1}
                           style={{width: 50, height: 50}}/>
            </View>
            <View name={'content'} style={styleHomePage.content}>
                <View name={'welcome'}>
                    <Text style={styleHomePage.text}>Welcome, {users[userDict.phone].FullName}</Text>
                </View>
                <View name={'FirstTable'}>
                    <SlidingWindow/>
                </View>
                <View name={'Comments'} style={{margin: 10}}>
                    <LastMessages/>
                </View>
            </View>
        </View>
    );
};

const styleHomePage = StyleSheet.create({
    image: {
        justifyContent: 'flex-start',
        width: 100,
        height: 60,
    },
    top: {
        // backgroundColor: 'rgba(255,255,255,0.97)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        height: '85%',
        justifyContent: 'space-between',
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
});
export default Page;
