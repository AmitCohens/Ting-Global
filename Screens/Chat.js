import React, {useState, useEffect, useCallback, useContext} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PicButton from "../Components/PicButton";
import { useNavigation } from '@react-navigation/native';


// const dataPath = '../TestData/ChatDB.json'
import data_file from '../TestData/ChatDB.json'
import {userContext} from "../provider/UserProvider";
import users from "../TestData/DB.json";

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

        route.params.db.msg_history.unshift(messages[0])

        data_file[route.params.db._id] = route.params.db

        let temp = {
            _id: route.params.db._id,
            picture: route.params.db.picture,
            name: route.params.db.name,
            msg_history: route.params.db.msg_history
        }



        console.log(temp)
        console.log(route.params.db)

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
        <View style={styles.body}>
            <View style={styles.header}>
                <PicButton imgSrc={require('../Images/left-arrow.png')} nav={navigation} dest={0} style={styles.pic} />
                <Pressable
                    onPress={() => alert("Challenge Details\nComing Soon!")}>
                    <Text style={styles.text}>{route.params.db.name}</Text>
                </Pressable>
                <Pressable
                    onPress={() => alert("Coming Soon!")}>
                    <Image source={require('../Images/search_icon.png')}
                           style={styles.pic}/>
                </Pressable>
            </View>
            <View style={{flex: 1}}>
                <GiftedChat
                    messages={messages}
                    showUserAvatar={true}
                    showAvatarForEveryMessage={true}
                    onSend={messages => onSend(messages)}
                    user={{_id: userDict.phone,
                            name: userInfo.FullName,
                            avatar: userInfo.picture}} //DB - Get signed in user's details
                    renderBubble={renderBubble}
                    renderUsernameOnMessage={true}
                    alwaysShowSend
                    renderSend={renderSend}
                    scrollToBottom
                    scrollToBottomComponent={scrollToBottomComponent}
                />
            </View>
        </View>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    chat: {
        flex: 1,
    },
    header: {
        flex: 1,
        paddingTop: '5%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        // margin: 10,
        backgroundColor: 'white',
        maxHeight: '10%',
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5
    },
    text: {
        fontSize: 20
    },
    body: {
        flex: 1,
        justifyContent: 'space-between'
    },
    pic: {
        width: 25,
        height: 25,
    }
});
