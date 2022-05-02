import React from 'react';
import {View, Text, Image} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 200,
        paddingTop: 20,
        backgroundColor: 'white',
      }}>
      {/*<Text*/}
      {/*  // eslint-disable-next-line react-native/no-inline-styles*/}
      {/*  style={{*/}
      {/*    fontSize: 30,*/}
      {/*    fontFamily: 'Arial',*/}
      {/*    color: 'blue',*/}
      {/*    textAlign: 'center',*/}
      {/*  }}>*/}
      {/*  Welcome to Ting Global!*/}
      {/*</Text>*/}
      <Image
        source={{uri: 'https://ting.global/_nuxt/img/new-logo.09e68c7.png'}}
        style={{width: 300, height: 150, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Header;
