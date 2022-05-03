import Header from '../Components/Header';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TingSelect from '../Components/TingSelect';
import AppButton from '../Components/AppButton';

const page = () => {
  return (
    <View style={styles.view}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={backgroundStyle}>
      >
        <Header />
        <View style={styles.selectView}>
          <TingSelect />
          <View style={styles.buttonAndView}>
            <AppButton title={'Login'} />
            <Text>
              {'\n\t\t'}Don't have an account yet?{'\n'}
            </Text>
            <AppButton title={'Sign up'} />
          </View>
        </View>
        <View>
          <Image
            source={require('../Images/cropped-new-logo-with-300x122.5e3ee5e.png')}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
  view: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10%',
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
});

export default page;
