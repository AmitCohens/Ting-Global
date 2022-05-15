
import {StyleSheet,Image, Text, View,FlatList} from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";
import Data from '../TestData/Users.json'
const Messages = ({navigation}) => {
        return (
            <View style={styles.container}>
                <FlatList
                    data={Data.Users}

                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity style={{width: '100%', margin: 10}}
                            onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
                            <View style={styles.UserInfo}>
                                <View style={styles.UserImgWrapper}>
                                    <Image style={styles.UserImg} source={require('../Images/pro.png')}/>
                                </View>
                                <View style={styles.TextSection}>
                                    <View style={styles.UserInfoText}>
                                        <Text style={styles.UserName}>{item.userName}</Text>
                                        <Text style={styles.PostTime}>{item.messageTime}</Text>
                                    </View>
                                    <Text>{item.messageText}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
};
export default Messages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    UserInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    UserImgWrapper:{
        paddingTop: 15,
        paddingBottom: 15,
    },
    UserImg:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    TextSection:{
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    UserInfoText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    UserName:{
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
    },
    PostTime:{
        fontSize: 12,
        color: '#666',
        fontFamily: 'sans-serif-medium',
    },
    MessageText:{
        fontSize: 14,
        color: '#333333',
    }
});
