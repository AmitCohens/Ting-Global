
// import {StyleSheet,Image, Text, View,FlatList} from 'react-native';
// import {TouchableOpacity} from "react-native-gesture-handler";
import data from '../TestData/ChatDB.json'
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
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

// const Messages = ({navigation}) => {
//         return (
//             <View style={styles.container}>
//                 <FlatList
//                     data={Data.Users}
//                     keyExtractor={item => item.id}
//                     renderItem={({item}) => (
//                         <TouchableOpacity style={{width: '100%', margin: 10}}
//                             onPress={() => navigation.navigate('Chat', {user: item.userName, history: item.messages})}>
//                             <View style={styles.UserInfo}>
//                                 <View style={styles.UserImgWrapper}>
//                                     <Image style={styles.UserImg} src={item.userImg}/>
//                                 </View>
//                                 <View style={styles.TextSection}>
//                                     <View style={styles.UserInfoText}>
//                                         <Text style={styles.UserName}>{item.userName}</Text>
//                                         <Text style={styles.PostTime}>{item.messageTime}</Text>
//                                     </View>
//                                     <Text>{item.messageText}</Text>
//                                 </View>
//                             </View>
//                         </TouchableOpacity>
//                     )}
//                 />
//             </View>
//         );
// };
// export default Messages;
const Chats = [
    {
        id: '1',
        userName: 'Gad Shrim',
        userImg: require('../Images/Gad.png'),
        messageTime: '4 mins ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '2',
        userName: 'Idan Mashriki',
        userImg: require('../Images/Idan.png'),
        messageTime: '2 hours ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '3',
        userName: 'Amit Cohen',
        userImg: require('../Images/Amit.png'),
        messageTime: '1 hours ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
];
export let MessageHistory = {
    '1': [
        {
            "_id": 1,
            "createdAt": new Date(),
            "text": "Hi, my name is Gad and this is my group",
            "user": {
                "_id": 1,
                "name": "Gad",
                "avatar": "require('../Images/Gad.png')"
            }
        },
        {
            "_id": 2,
            "createdAt": new Date(),
            "text": "Hi, my name is Idan and this is Gad's group",
            "user": {
                "_id": 2,
                "name": "Idan",
                "avatar": "require('../Images/Gad.png')"
            }
        },
        {
            "_id": 3,
            "createdAt": new Date(),
            "text": "Hi, my name is Amit and this is Gad's group",
            "user": {
                "_id": 3,
                "name": "Amit",
                "avatar": "require('../Images/Gad.png')"
            }
        }
    ],
    '2': [
        {
            "_id": 1,
            "createdAt": new Date(1992, 8, 23),
            "text": "Hi, my name is Gad and this is Idan's group",
            "user": {
                "_id": 1,
                "name": "Gad",
                "avatar": "require('../Images/Gad.png')"
            }
        },
        {
            "_id": 2,
            "createdAt": new Date(1996, 9, 30),
            "text": "Hi, my name is Idan and this is my group",
            "user": {
                "_id": 2,
                "name": "Idan",
                "avatar": "require('../Images/Gad.png')"
            }
        },
        {
            "_id": 3,
            "createdAt": new Date(1996, 3, 18),
            "text": "Hi, my name is Amit and this is Idan's group",
            "user": {
                "_id": 3,
                "name": "Amit",
                "avatar": "require('../Images/Gad.png')"
            }
        }
    ]
}

console.log(Object.entries(data)[0][1].picture);



const MessagesScreen = ({navigation}) => {
    return (
        <Container>
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
        justifyContent: 'center'
    },
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
