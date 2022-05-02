import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TingInput = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        defaultCode="US"
        placeholder="Enter your phone number"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
});

export default TingInput;
