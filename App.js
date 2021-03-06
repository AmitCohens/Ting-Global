import React, {useCallback, useEffect, useState} from 'react';
import LoginPage from './Screens/LoginPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SignUp from './Screens/SignUp';
import Tabs from './Components/Tabs';
import * as SplashScreen from 'expo-splash-screen';
import Profile from './Screens/Profile';
import Chat from './Screens/Chat';
import AllChats from "./Screens/AllChats";
import UserProvider from './provider/UserProvider';
import EditProfile from "./Screens/EditProfile";
import ConfirmCode from "./Screens/ConfirmCode";
import Actions from "./Screens/Actions";


const Stack = createStackNavigator();

const App = () => {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            await new Promise(resolve => setTimeout(resolve, 500));
            setAppIsReady(true);
        }

        prepare().then(r => {
        });
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="LoginPage"
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name="LoginPage" component={LoginPage}/>
                    <Stack.Screen name="HomePage" component={Tabs}/>
                    <Stack.Screen name="SignUp" component={SignUp}/>
                    <Stack.Screen name="Profile" component={Profile}/>
                    <Stack.Screen name="Chat" component={Chat}/>
                    <Stack.Screen name="AllChats" component={AllChats}/>
                    <Stack.Screen name="EditProfile" component={EditProfile}/>
                    <Stack.Screen name="ConfirmCode" component={ConfirmCode}/>
                    <Stack.Screen name="Actions" component={Actions}/>
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;
