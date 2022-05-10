import React from 'react';
import {View, StyleSheet, Pressable, Text, Image} from 'react-native';
const app = props => {

    return (
        <View>
            <Pressable
                onPress={() => props.nav.navigate(props.dest)}>
                {/*navigation.navigate('the page')*/}
                <Image source={props.imgSrc}
                       style={{width: 50, height: 50}}/>
            </Pressable>
        </View>
    );
};

export default app;
