import React from 'react';
import {View, Pressable, Image} from 'react-native';

const app = props => {

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
