/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Header from './Components/Header';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LoginPage from './Screens/LoginPage';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <LoginPage />
    </SafeAreaView>
  );
};

export default App;
