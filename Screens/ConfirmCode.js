import React, {useContext, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Image} from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AppButton from "../Components/AppButton";
import {userContext} from "../provider/UserProvider";


const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',

    },
    focusCell: {
        borderColor: '#000',
    },
    all:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        paddingRight: "10%",
        paddingLeft: "10%",
        paddingTop: "10%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewAndImage: {
        paddingLeft: '15%',

    },
});

const CELL_COUNT = 6;

const App = ({navigation}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const {userDict, setUserDict} = useContext(userContext);

    return (
        <SafeAreaView style={styles.root}>
            <Text style={styles.title}>Verification</Text>
            <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <View style={styles.all}>
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                    </View>
                )}
            />
            <View style={styles.button}>
                <AppButton title="Submit" type="submit" style={styles.button}  nav={navigation} dest={'HomePage'}/>
            </View>
            <View style={styles.viewAndImage}>
                <Image
                    source={require('../Images/cropped-new-logo-with-300x122.5e3ee5e.png')}
                    style={styles.image}
                />
            </View>
        </SafeAreaView>
    );
};

export default App;
