import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';
import View_Slider from 'react-native-view-slider'

const { width, height } = Dimensions.get('window');

function App() {
    return (
        <>
            <View_Slider
                renderSlides = {
                    <>
                        <View style={styles.viewBox}>
                            <Image source={{uri: 'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg'}}
                                   style={{height: 200, width}}/>
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={{uri: 'https://image.shutterstock.com/z/stock-photo-closeup-black-coffee-cup-top-view-set-1937506825.jpg'}}
                                   style={{height: 200, width}}/>
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={{uri: 'https://image.shutterstock.com/image-photo/beach-waves-top-view-turquoise-600w-1239753184.jpg'}}
                                   style={{height: 200, width}}/>
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={{uri: 'https://image.shutterstock.com/image-photo/scenic-beauty-landscape-scene-view-600w-2051112362.jpg'}}
                                   style={{height: 200, width}}/>
                        </View>
                    </>
                }

                style={styles.slider}     //Main slider container style
                height = {200}    //Height of your slider
                slideCount = {4}    //How many views you are adding to slide
                dots = {false}     // Pagination dots visibility true for visibile
                dotActiveColor = 'red'     //Pagination dot active color
                dotInactiveColor = 'gray'    // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
                autoSlide = {false}    //The views will slide automatically
                slideInterval = {4000}    //In Miliseconds
            />
        </>
    );
}

const styles = StyleSheet.create({
    viewBox: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: width,
        padding: 10,
        alignItems: 'center',
        height: 200
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    dotContainer: {
        backgroundColor: 'transparent',
    }
});

export default App;
