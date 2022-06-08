import Chats from '../TestData/ChatDB.json'
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
                data={Object.entries(Chats)}
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
                                <MessageText>{item[1].msg_history[0].user.name} Sent a message</MessageText>
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
        backgroundColor: '#ffffff'
    },
    header: {
        flex: 1,
        paddingTop: '5%',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:"rgb(227,234,250)",
        maxHeight: '10%',
        height: '10%',
        width: '200%',
    },
    text: {
        fontSize: 20
    }
});
