import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image, FlatList
} from 'react-native';
import data from '../TestData/ChatDB.json'
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

const { width, height } = Dimensions.get('window');


function App() {
    const navigation = useNavigation();

    return (
        <View style={styles.body}>
            <View style={styles.viewBox}>
                <Text style={styles.text}>- Last Comments -</Text>
                <FlatList
                    data={Object.entries(data).slice(0,2)}
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
                                        <PostTime>{"4 min ago"}</PostTime>
                                    </UserInfoText>
                                    <MessageText>{item[1].msg_history[0].text}</MessageText>
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
