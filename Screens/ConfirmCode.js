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
            <View>
            </View>
            <View style={styles.main}>
                <Text style={styles.text}>Enter the code you received</Text>
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
                                {symbol || (isFocused ? <Cursor/> : null)}
                            </Text>
                        </View>
                    )}
                />
                <View style={styles.button}>
                    <AppButton title="Submit" type="submit" style={styles.button} nav={navigation} dest={'HomePage'}/>
                </View>
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

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingBottom: '10%',
        paddingTop: '10%',
        // padding: 30,
        justifyContent: 'space-between'
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    main: {
        padding: 50,
        margin: 10,
        // alignItems: 'center',

    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFieldRoot: {
        marginTop: 20
    },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
        borderRadius: 10
    },
    focusCell: {
        borderColor: '#000',
        borderRadius: 10
    },
    all: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
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

export default App;
