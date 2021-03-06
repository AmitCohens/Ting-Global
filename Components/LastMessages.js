import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';
import Chats from '../TestData/ChatDB.json'
import {
    Card, MessageText,
    PostTime,
    TextSection,
    UserImg,
    UserImgWrapper,
    UserInfo,
    UserInfoText,
    UserName
} from "../styles/MessageStyles";
import {useNavigation} from "@react-navigation/native";

function App() {
    const navigation = useNavigation();

    const limitText = (text) => {
        const LIMIT = 50
        return (text.length > LIMIT) ? text.slice(0,LIMIT) + "..." : text
    }

    return (
        <View style={styles.body}>
            <View style={styles.viewBox}>
                <Text style={styles.text}>- Last Comments -</Text>
                <FlatList
                    data={Object.entries(Chats).slice(0,2)}
                    keyExtractor={item=>item[0]}
                    renderItem={({item}) => (
                        <Card onPress={() => navigation.navigate('Chat', {db: item[1]})}>
                            <UserInfo>
                                <UserImgWrapper>
                                    <UserImg source={{uri: item[1].picture}}/>
                                </UserImgWrapper>
                                <TextSection>
                                    <UserInfoText>
                                        <UserName>{item[1].name}</UserName>
                                        <PostTime>{"Challenge Day " + item[1].day}</PostTime>
                                    </UserInfoText>
                                    <MessageText>{limitText(item[1].msg_history[0].text)}</MessageText>
                                </TextSection>
                            </UserInfo>
                        </Card>
                    )}
                />
            </View>
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
        width: '95%',
        paddingTop: 10,
        alignItems: 'center',
        height: 210,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10
    },
    text: {
        fontSize: 25
    }
});

export default App;
