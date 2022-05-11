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

const Page = ({navigation}) => {
  return (
    <View name={'body'} style={styleHomePage.body}>
      <View name={'TopOfPage'} style={styleHomePage.top}>

          <PicButton imgSrc={require('../Images/user1.png')} nav={navigation} dest={'Profile'} style={{width : 50,height:50}} ></PicButton>
          <Image
            source={require('../Images/logo18.png')}
            style={styleHomePage.image}
          />
          <PicButton imgSrc={require('../Images/world1.png')} nav={navigation} dest={'SignUp'} style={{width : 50,height:50}}></PicButton>

      </View>
      <View name={'FirstTable'}>
        <Text style={styleHomePage.text}>
          {'\n\t\t'}Table{'\n'}
        </Text>
      </View>
      <View name={'Comments'}>
        <Text style={styleHomePage.text}>
          {'\n\t\t'}Comments{'\n'}
        </Text>
      </View>
      <View name={'Achievements'}>
        <Text style={styleHomePage.text}>
          {'\n\t\t'}Achievements{'\n'}
        </Text>
      </View>
      {/*<View name={'NavBar'} style={{height: 50}}>*/}

      {/*</View>*/}
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
  body: {
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
