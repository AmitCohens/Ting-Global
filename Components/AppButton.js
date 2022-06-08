import React from 'react';
import {View, StyleSheet, Pressable, Text, Linking} from 'react-native';

const OpenWEB = (url) => {
  Linking.openURL(url).catch(err => {
    console.error("Failed opening page because: ", err)
    alert('Failed to open page')
  })
};

const app = props => {
  return (
    <View>
      <Pressable
        style={styleB.button}
        onPress={() => !props.dest ? OpenWEB(props.url) : props.dest === 0 ? props.nav.goBack()
                : props.dest === 1 ? alert("Coming Soon!")
                : props.nav.navigate(props.dest)}>
        <Text style={styleB.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styleB = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'black',
    maxWidth: 200,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
export default app;
