import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './LoginPage';
import { page } from "yarn/lib/cli";
//import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Page = () => {
  return (
    <View name={'body'} style={styleHomePage.body}>
      <View name={'TopOfPage'} style={styleHomePage.top}>
        <Image
          source={require('../Images/User.png')}
          style={styleHomePage.image}
        />
        <Image
          source={require('../Images/newGlobus.png')}
          style={styleHomePage.image}
        />
      </View>
      <View name={'FirstTable'} />
      <View name={'Comments'} />
      <View name={'Achievements'} />
      <View name={'NavBar'}>
        <Tab.Navigator
          initialRouteName="LoginPage"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }}>
          <Tab.Screen
            name="Login"
            component={LoginPage}
            // options={{
            //   tabBarLabel: 'Home',
            //   tabBarIcon: ({color, size}) => (
            //     <MaterialCommunityIcons name="home" color={color} size={size} />
            //   ),
            // }}
          />
          <Tab.Screen
            name="Page"
            component={Page}
            // options={{
            //   tabBarLabel: 'Updates',
            //   tabBarIcon: ({color, size}) => (
            //     <MaterialCommunityIcons name="bell" color={color} size={size} />
            //   ),
            //   tabBarBadge: 3,
            // }}
          />
          <Tab.Screen
            name="Loginge"
            component={LoginPage}
            // options={{
            //   tabBarLabel: 'Profile',
            //   tabBarIcon: ({color, size}) => (
            //     <MaterialCommunityIcons
            //       name="account"
            //       color={color}
            //       size={size}
            //     />
            //   ),
            // }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};
const styleHomePage = StyleSheet.create({
  image: {
    justifyContent: 'flex-start',
    width: 70,
    height: 70,
  },
  top: {
    backgroundColor: 'rgba(158,171,206,0.97)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
export default Page;
