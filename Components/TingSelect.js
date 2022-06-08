import {View, Text, Alert, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
import React from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {useRef, useState, useContext} from 'react';
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import {userContext} from '../provider/UserProvider'

const Select = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const phoneInput = useRef(null);

    const getPhoneNumber = () => {
        Alert.alert(phoneNumber);
    };

    const {userDict, setUserDict} = useContext(userContext)

    return (

        <View style={styleSheet.MainContainer}>
            <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                layout="first"
                withShadow
                autoFocus
                showSoftInputOnFocus={false}
                keyboardType="numeric"
                containerStyle={styleSheet.phoneNumberView}
                textContainerStyle={{paddingVertical: 0}}
                onChangeFormattedText={phone => {
                    // setPhoneNumber(phone);
                    if (phone.substring(0,5) === '+9720') {
                        phone = phone.replace('+9720', '+972')
                    }
                        setUserDict(prev => ({
                            ...prev, phone
                        }))
                        console.log(userDict)
                }}
            />

        </View>
    );
};

const styleSheet = StyleSheet.create({
    MainContainer: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },

    heading: {
        fontSize: 24,
        textAlign: 'center',
        // paddingBottom: 20,
        color: 'black',
    },

    phoneNumberView: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        width: '80%',
        // padding: 8,
        backgroundColor: '#00B8D4',
    },

    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
});

export default Select;

// import React, {useState, useRef} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   Text,
// } from 'react-native';
// import PhoneInput from 'react-native-phone-number-input';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
//
// const App = () => {
//   const [value, setValue] = useState('');
//   const [countryCode, setCountryCode] = useState('');
//   const [formattedValue, setFormattedValue] = useState('');
//   const [valid, setValid] = useState(false);
//   const [disabled, setDisabled] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);
//   const phoneInput = useRef < PhoneInput > null;
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <View style={styles.container}>
//         <SafeAreaView style={styles.wrapper}>
//           {showMessage && (
//             <View style={styles.message}>
//               <Text>Country Code : {countryCode}</Text>
//               <Text>Value : {value}</Text>
//               <Text>Formatted Value : {formattedValue}</Text>
//               <Text>Valid : {valid ? 'true' : 'false'}</Text>
//             </View>
//           )}
//           <PhoneInput
//             ref={phoneInput}
//             defaultValue={value}
//             defaultCode="IN"
//             layout="first"
//             onChangeText={text => {
//               setValue(text);
//             }}
//             onChangeFormattedText={text => {
//               setFormattedValue(text);
//               setCountryCode(phoneInput.current?.getCountryCode() || '');
//             }}
//             countryPickerProps={{withAlphaFilter: true}}
//             disabled={disabled}
//             withDarkTheme
//             withShadow
//             autoFocus
//           />
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               const checkValid = phoneInput.current?.isValidNumber(value);
//               setShowMessage(true);
//               setValid(checkValid ? checkValid : false);
//               setCountryCode(phoneInput.current?.getCountryCode() || '');
//               let getNumberAfterPossiblyEliminatingZero =
//                 phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
//               console.log(getNumberAfterPossiblyEliminatingZero);
//             }}>
//             <Text style={styles.buttonText}>Check</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.button, disabled ? {} : styles.redColor]}
//             onPress={() => {
//               setDisabled(!disabled);
//             }}>
//             <Text style={styles.buttonText}>
//               {disabled ? 'Activate' : 'Disable'}
//             </Text>
//           </TouchableOpacity>
//         </SafeAreaView>
//       </View>
//     </>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.lighter,
//   },
//   wrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     marginTop: 20,
//     height: 50,
//     width: 300,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#7CDB8A',
//     shadowColor: 'rgba(0,0,0,0.4)',
//     shadowOffset: {
//       width: 1,
//       height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,
//     elevation: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 14,
//   },
//   redColor: {
//     backgroundColor: '#F57777',
//   },
//   message: {
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 20,
//     marginBottom: 20,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
// });
//
// export default App;
