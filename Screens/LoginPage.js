import Header from '../Components/Header';
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import TingSelect from '../Components/TingSelect';
import AppButton from '../Components/AppButton';
import LoginButton from '../Components/LoginButton'
import {singIn} from "../utils/Connect";
import {userContext} from '../provider/UserProvider'
import data from '../TestData/DB.json'

// const user = React.createContext(({phone: '+33', username: '', token: ''}))

const Page = ({navigation}) => {
    const {userDict, setUserDict} = useContext(userContext)

    return (
        <View style={styles.view}>
            <Header/>
            <View style={styles.selectView}>
                <TingSelect />
                <View style={styles.buttonAndView}>

                    <LoginButton title={'Login'} nav={navigation}  signInFunc={singInLogin} params={{
                        userDict,
                        setUserDict,
                        navigation,
                    }}/>
                    <Text>
                        {'\n\t\t'}Don't have an account yet?{'\n'}
                    </Text>
                    <AppButton title={'Sign up'} nav={navigation} url={"https://ting.global/join"}/>
                </View>
            </View>
            <View style={styles.viewAndImage}>
                <Image
                    source={require('../Images/cropped-new-logo-with-300x122.5e3ee5e.png')}
                    style={styles.image}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 80,
        resizeMode: 'contain',
    },
    view: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        paddingLeft: '10%',
        paddingTop: '10%',
        backgroundColor: 'white',
    },
    buttonAndView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '15%',
        paddingLeft: '15%',
    },
    selectView: {
        padding: '5%',
    },
    viewAndImage: {
        paddingLeft: '15%',
    },
});

const singInLogin = (props) => {
    // console.log('----- press')
    // console.log(props.userDict)
    console.log(props.userDict.phone);
    if(!data[props.userDict.phone]){
        alert("User not found!\nEnter valid phone number")
        return;
    }
    if(props.navigation) {
        singIn(props.userDict.phone, res => {
            props.navigation.navigate('ConfirmCode')
        }, err => {
            console.log('status' in JSON.parse(err))
        })
        props.navigation.navigate('ConfirmCode')
    }
}
export default Page;
