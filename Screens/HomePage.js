import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import SignUp from './SignUp';
import Profile from './Profile';
import PicButton from '../Components/PicButton';
import SlidingWindow from "../Components/SlidingWindow";

const Page = ({navigation}) => {
  return (
    <View name={'body'}>
        <View name={'TopOfPage'} style={styleHomePage.top}>
            <PicButton imgSrc={require('../Images/user1.png')} nav={navigation} dest={'Profile'} style={{width: 50, height: 50}} />
            <Image
                source={require('../Images/logo18.png')}
                style={styleHomePage.image}
            />
            <PicButton imgSrc={require('../Images/world1.png')} nav={navigation} dest={'SignUp'} style={{width: 50, height: 50}}/>
        </View>
        <View name={'content'} style={styleHomePage.content}>
            <View name={'FirstTable'}>
                <SlidingWindow/>
            </View>
            <View name={'Comments'}>
                <Text style={styleHomePage.text}>
              Comments
            </Text>
            </View>
            <View name={'Achievements'}>
                <Text style={styleHomePage.text}>
              Achievements
            </Text>
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
    backgroundColor: 'rgba(255,255,255,0.97)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:30,
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:10,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});
export default Page;
