import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
const app = props => {
  return (
    <View>
      <Pressable style={styleB.button}>
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
