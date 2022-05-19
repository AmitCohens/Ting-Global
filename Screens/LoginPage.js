import Header from '../Components/Header';
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TingSelect from '../Components/TingSelect';
import AppButton from '../Components/AppButton';
// eslint-disable-next-line no-unused-vars
import HomePage from '../Screens/HomePage';
const Page = ({navigation}) => {
  return (
    <View style={styles.view}>
      {/*  contentInsetAdjustmentBehavior="automatic"*/}
      {/*  // style={backgroundStyle}>*/}
      {/*>*/}
      <Header />
      <View style={styles.selectView}>
        <TingSelect />
        <View style={styles.buttonAndView}>
          <AppButton title={'Login'} nav={navigation} dest={'HomePage'} />
          <Text>
            {'\n\t\t'}Don't have an account yet?{'\n'}
          </Text>
          <AppButton title={'Sign up'} nav={navigation} dest={'SignUp'} />
        </View>
      </View>
      <View style={styles.viewAndImage}>
        <Image
          source={require('../Images/cropped-new-logo-with-300x122.5e3ee5e.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 80,
    resizeMode: 'contain',
  },
  view: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    paddingLeft: '10%',
    paddingTop: '10%',
    backgroundColor: 'white',
  },
  buttonAndView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '15%',
    paddingLeft: '15%',
  },
  selectView: {
    padding: '5%',
  },
  viewAndImage: {
    paddingLeft: '15%',
  },
});

export default Page;
