import React from 'react';
import {View, Image} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 200,
        paddingTop: 20,
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../Images/new-logo.09e68c7.png')}
        style={{width: 300, height: 150, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Header;
