import React from 'react';
import {userContext} from "../provider/UserProvider";
import {useContext} from "react";
import {View, StyleSheet, Pressable, Text} from 'react-native';
import {singIn} from '../utils/Connect'

const app = props => {
    const {userDict, setUserDict} = useContext(userContext)

    return (
        <View>
            <Pressable
                style={styleB.button}
                onPress={() => {
                    // console.log(userDict.phone)
                    console.log('----- press')

                    ///////////////Bypass
                    if(userDict.phone === "")
                        props.nav.navigate('HomePage')

                    singIn(userDict.phone, res => {
                        props.nav.navigate('HomePage')
                        // if(res.)

                    }, err => {
                        // console.log(Object.entries(err))
                        console.log('status' in JSON.parse(err))

                    })

                }}>
                {/*navigation.navigate('the page')*/}
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
