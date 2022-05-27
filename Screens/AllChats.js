
// import {StyleSheet,Image, Text, View,FlatList} from 'react-native';
// import {TouchableOpacity} from "react-native-gesture-handler";
import data from '../TestData/ChatDB.json'
import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
} from '../styles/MessageStyles';

const MessagesScreen = ({navigation}) => {
    return (
        <Container style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Challenges</Text>
            </View>
            <FlatList
                data={Object.entries(data)}
                keyExtractor={item=>item[0]}
                renderItem={({item}) => (
                    <Card onPress={() => navigation.navigate('Chat', {db: item[1]})}>
                        <UserInfo>
                            <UserImgWrapper>
                                <UserImg source={require("../Images/Gad.png")}/>
                                {/*<UserImg source={require(item[1].picture)}/>*/}
                            </UserImgWrapper>
                            <TextSection>
                                <UserInfoText>
                                    <UserName>{item[1].name}</UserName>
                                    <PostTime>{"4 min ago"}</PostTime>
                                </UserInfoText>
                                <MessageText>{item[1].msg_history[0].text}</MessageText>
                            </TextSection>
                        </UserInfo>
                    </Card>
                )}
            />
        </Container>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0'
    },
    header: {
        flex: 1,
        paddingTop: '5%',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        // margin: 10,
        backgroundColor: 'white',
        maxHeight: '10%',
        width: '200%',
        // paddingLeft: 5,
        // paddingRight: 5
    },
    text: {
        fontSize: 20
    }
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
// });
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingLeft: 20,
//         paddingRight: 20,
//         alignItems: 'center',
//         backgroundColor: '#ffffff',
//     },
//     UserInfo:{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     UserImgWrapper:{
//         paddingTop: 15,
//         paddingBottom: 15,
//     },
//     UserImg:{
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//     },
//     TextSection:{
//         flexDirection: 'column',
//         justifyContent: 'center',
//         padding: 15,
//         paddingLeft: 0,
//         marginLeft: 10,
//         width: 300,
//         borderBottomWidth: 1,
//         borderBottomColor: '#cccccc',
//     },
//     UserInfoText:{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 5,
//     },
//     UserName:{
//         fontSize: 14,
//         fontWeight: 'bold',
//         fontFamily: 'sans-serif-medium',
//     },
//     PostTime:{
//         fontSize: 12,
//         color: '#666',
//         fontFamily: 'sans-serif-medium',
//     },
//     MessageText:{
//         fontSize: 14,
//         color: '#333333',
//     }
// });
