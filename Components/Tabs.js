import SignUp from '../Screens/SignUp';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomePage';
import {Image} from 'react-native';
import AllChats from "../Screens/AllChats";
import Accomplishment from "../Screens/Accomplishment";
import ConfirmCode from "../Screens/ConfirmCode";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: "8%",
                    backgroundColor: '#ffffff',
                }

            }}>
            <Tab.Screen
                name="Chats"
                component={AllChats}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={focused ?require('../Images/speech-bubble2.png'):require('../Images/speech-bubble.png')}
                            style={{width: 35, height: 35}}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Actions"
                component={ConfirmCode}
                options={{
                    tabBarIcon: ({focused}) => (

                        <Image
                            source={focused ?  require('../Images/call2.png'): require('../Images/call.png')}
                            style={{width: 35, height: 35}}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={focused?require('../Images/home2.png'):require('../Images/home1.png')}
                            style={{width: 35, height: 35}}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="International"
                component={SignUp}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={focused?require('../Images/number-182.png'):require('../Images/number-18.png')}
                            style={{width: 35, height: 35}}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Accomplishments"
                component={Accomplishment}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={focused?require('../Images/love2.png'):require('../Images/love.png')}
                            style={{width: 35, height: 35}}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default Tabs;
