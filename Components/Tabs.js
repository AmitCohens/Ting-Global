import SignUp from '../Screens/SignUp';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomePage';
import {Image} from 'react-native';
import AllChats from "../Screens/AllChats";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
        height: 60,
        backgroundColor: '#ffffff',
    }}}>
      <Tab.Screen
        name="Chats"
        component={AllChats}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../Images/speech-bubble.png')}
              style={{width: 35, height: 35}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Actions"
        component={SignUp}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../Images/call.png')}
              style={{width: 35, height: 35}}
            />
          ),
        }}
      />
        <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
                tabBarIcon: () => (
                    <Image
                        source={require('../Images/home1.png')}
                        style={{width: 35, height: 35}}
                    />
                ),
            }}
        />
      <Tab.Screen
        name="International"
        component={SignUp}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../Images/number-18.png')}
              style={{width: 35, height: 35}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="accomplishments"
        component={SignUp}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../Images/love.png')}
              style={{width: 35, height: 35}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
