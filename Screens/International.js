import {StyleSheet, View, Image, Text, ImageBackground, Dimensions,ScrollView} from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const Page = () => {

    return (
        <View>
            <ImageBackground
                source={require("../Images/videos2.jpg")}
                style={styles.background}>
                <View style={styles.body}>
                    <Image
                        source={require('../Images/logo18.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>
                        Challenge Yourself to the Top
                    </Text>
                    <Text style={styles.subtitle}>
                        Easily build, run, and change the world with any challenge on one platform.
                    </Text>
                    <Image source={require('../Images/challenge-intro.e70cc48.gif')}
                           style={styles.image}/>
                    <ScrollView>
                        <Text style={styles.text}>
                            <Text style={{fontWeight: 'bold'}}>Challenge 18</Text> is the most important sustainability
                            and
                            leadership games tournament in the world, in which clubs from all over
                            the world collaborate in achieving the SDG’s. At the end of the
                            tournament a trophy is awarded to the winning clubs.
                        </Text>
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 200,
        margin:10,
    },
    logo: {
        justifyContent: 'flex-start',
        width: 100,
        height: 60,
    },
    body:{
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        paddingBottom: '6%',
        paddingTop: '10%',
    },
    background: {
        width: width,
        height: height
    },
    text: {
        color: 'white',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '3%',
        paddingBottom: '3%',
        fontSize: 18,
        backgroundColor:"rgba(0,0,0,0.3)",
        borderRadius:20,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        paddingRight: '8%',
        paddingLeft: '8%',
        paddingTop: '3%',
        paddingBottom: '3%',
        fontSize: 28,
        fontWeight: 'bold',
        backgroundColor:"rgba(0,0,0,0.3)",
        borderRadius:20,
    },
    subtitle: {
        color: 'white',
        textAlign: 'center',
        paddingRight: '8%',
        paddingLeft: '8%',
        paddingTop: '3%',
        paddingBottom: '3%',
        fontSize: 25,
        backgroundColor:"rgba(0,0,0,0.3)",
        borderRadius:20,
    }
});
export default Page;
