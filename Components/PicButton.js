import React from 'react';
import {View, StyleSheet, Pressable, Text, Image} from 'react-native';
import {useNavigation, CommonActions } from "@react-navigation/native";
const app = props => {

    const navigation = useNavigation();
    return (
        <View>
            <Pressable
                onPress={() => props.dest === 0 ? props.nav.goBack() : props.dest === 1 ? alert("Coming Soon!") : props.nav.navigate(props.dest)}>
                <Image source={props.imgSrc}
                       style={props.style}/>
            </Pressable>
        </View>
    );
};

export default app;
