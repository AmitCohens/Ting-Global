import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';
import View_Slider from 'react-native-view-slider'
import News from '../TestData/NewsDB'

const { width } = Dimensions.get('window');

function getSlide(item) {
    return (
        <View style={styles.viewBox}>
            <Image source={item.image} style={styles.img}/>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    )
}

function App() {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>- Latest News -</Text>
            <View_Slider
                renderSlides = {
                    <>
                        {getSlide(News[0])}
                        {getSlide(News[1])}
                        {getSlide(News[2])}
                        {getSlide(News[3])}
                        {getSlide(News[4])}
                    </>
                }
                style={styles.slider}     //Main slider container style
                height = {280}    //Height of your slider
                slideCount = {News.length}    //How many views you are adding to slide
                dots = {true}     // Pagination dots visibility true for visible
                dotActiveColor = 'blue'     //Pagination dot active color
                dotInactiveColor = 'gray'    // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
                autoSlide = {false}    //The views will slide automatically
                slideInterval = {10000}    //In Milliseconds
            />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'center'
    },
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
    },
    img: {
        height: 200, width
    },
    text: {
        fontSize: 20
    },
    title: {
        fontSize: 25
    }
});

export default App;
