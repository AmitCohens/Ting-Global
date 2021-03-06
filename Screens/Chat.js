import React, {useState, useEffect, useCallback, useContext} from 'react';
import {View, Text, StyleSheet, Image, Pressable,ImageBackground,LogBox} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PicButton from "../Components/PicButton";
import { useNavigation } from '@react-navigation/native';

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
// const dataPath = '../TestData/ChatDB.json'
import Chats from '../TestData/ChatDB.json'
import {userContext} from "../provider/UserProvider";
import users from "../TestData/DB.js";

const ChatScreen = ({route}) => {
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();
    const {userDict} = useContext(userContext);
    // console.log(userDict.phone)
    const userInfo = users[userDict.phone];

    useEffect(() => {
        setMessages(route.params.db.msg_history)
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))

        // const { _id, createdAt, text, user,} = messages[0]
        // addMessage(route.params.db._id, messages[0])
        route.params.db.msg_history.unshift(messages[0])

        Chats[route.params.db._id] = route.params.db

        // let temp = {
        //     _id: route.params.db._id,
        //     picture: route.params.db.picture,
        //     name: route.params.db.name,
        //     msg_history: route.params.db.msg_history
        // }



        // console.log(temp)
        // console.log(route.params.db)

        // addDoc(collection(db, 'chats'), { _id, createdAt,  text, user });
    }, []);

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons
                        name="send-circle"
                        style={{marginBottom: 5, marginRight: 5}}
                        size={32}
                        color="#2e64e5"
                    />
                </View>
            </Send>
        );
    };

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#0082ff',
                    },
                }}
                textStyle={{
                    right: {
                        color: '#ffffff',
                    },
                }}
            />
        );
    };

    const scrollToBottomComponent = () => {
        return(
            <FontAwesome name='angle-double-down' size={22} color='#333' />
        );
    }

    return (
        <ImageBackground source={require("../Images/deltabackground.jpg")} style={styles.background}>
        <View style={styles.body}>
            <View style={styles.header}>
                <PicButton imgSrc={require('../Images/left-arrow.png')} nav={navigation} dest={0} styling={styles.pic} />
                <Pressable
                    onPress={() => alert("Challenge Details\nComing Soon!")}>
                    <Text style={styles.text}>{route.params.db.name}</Text>
                </Pressable>
                <View style={styles.chatPic}>
                    <Image source={{uri: route.params.db.picture}} style={styles.chatPic}/>
                </View>
            </View>
            <View style={{flex: 1}}>
                <GiftedChat
                    messages={messages}
                    showUserAvatar={true}
                    showAvatarForEveryMessage={true}
                    onSend={messages => onSend(messages)}
                    user={{_id: userDict.phone,
                            name: userInfo.FullName,
                            avatar: userInfo.Image}} //DB - Get signed in user's details
                    renderBubble={renderBubble}
                    renderUsernameOnMessage={true}
                    alwaysShowSend
                    renderSend={renderSend}
                    scrollToBottom
                    scrollToBottomComponent={scrollToBottomComponent}
                />
            </View>
        </View>
        </ImageBackground>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    chat: {
        flex: 1,
    },
    chatPic: {
        width: 35,
        height: 35,
        borderRadius: 20
    },
    header: {
        flex: 1,
        paddingTop: '5%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        // margin: 10,
        backgroundColor:"rgb(227,234,250)",
        maxHeight: '10%',
        width: '100%',
        paddingLeft: 5,
        paddingRight: 10
    },
    text: {
        fontSize: 20
    },
    body: {
        flex: 1,
        justifyContent: 'space-between',
    },
    pic: {
        width: 25,
        height: 25,
    },
    background: {
        width: "100%",
        height: "100%",
        backgroundColor:"white",
    },
});
