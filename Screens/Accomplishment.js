import { Image, StatusBar, StyleSheet, Text, View,ScrollView} from 'react-native';
import React from 'react';
import PicButton from "../Components/PicButton";

const dataUser={
    FullName:"Amit Cohen",
    Country:"Israel",
    MembershipPlan:"18 Days",
    picture:require("../Images/Amit.png"),
    Expression:2,
    Dilegence:4,
    understanding:5,
    courage:1,
    knowledge:5,
    score:4300,
}
const Page = ({navigation}) => {

    return (<View name={"body"} style={styles.body}>
            <View name={"details"} style={styles.AllDetails}>
                <PicButton imgSrc={require('../Images/left-arrow.png')} nav={navigation} dest={0} style={{
                    width: 25,
                    height: 25,
                    margin: 10
                }}/>
                <View style={styles.details}>
                    <Text style={styles.text}>{dataUser.FullName}</Text>
                    <Image source={dataUser.picture} style={styles.image2}/>
                    <Text style={styles.text}>Score: {dataUser.score}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.medalAndTitle}>
                <Text style={styles.text}>Expression</Text>
               <Image style={styles.image} source={dataUser.Expression === 1 ? require("../Images/number-one.png") :
                            dataUser.Expression === 2 ? require("../Images/number-2.png"):
                            dataUser.Expression === 3 ? require("../Images/number-3.png"):
                            dataUser.Expression === 4 ? require("../Images/number-four.png"):
                            require("../Images/number-5.png")
               } />
                </View>
                <View style={styles.medalAndTitle}>
                <Text style={styles.text}>Dilegence</Text>
                <Image style={styles.image} source={dataUser.Dilegence === 1 ? require("../Images/number-one.png") :
                    dataUser.Dilegence === 2 ? require("../Images/number-2.png"):
                        dataUser.Dilegence === 3 ? require("../Images/number-3.png"):
                            dataUser.Dilegence === 4 ? require("../Images/number-four.png"):
                                require("../Images/number-5.png")
                } />
                </View>
                <View style={styles.medalAndTitle}>
                <Text style={styles.text}>understanding</Text>
                <Image style={styles.image} source={dataUser.understanding === 1 ? require("../Images/number-one.png") :
                    dataUser.understanding === 2 ? require("../Images/number-2.png"):
                        dataUser.understanding === 3 ? require("../Images/number-3.png"):
                            dataUser.understanding === 4 ? require("../Images/number-four.png"):
                                require("../Images/number-5.png")
                } />
                </View>
                <View style={styles.medalAndTitle}>
                <Text style={styles.text}>courage</Text>
                <Image style={styles.image} source={dataUser.courage === 1 ? require("../Images/number-one.png") :
                    dataUser.courage === 2 ? require("../Images/number-2.png"):
                        dataUser.courage === 3 ? require("../Images/number-3.png"):
                            dataUser.courage === 4 ? require("../Images/number-four.png"):
                                require("../Images/number-5.png")
                } />
                </View>
                <View style={styles.medalAndTitle}>
                <Text style={styles.text}>knowledge</Text>
                <Image style={styles.image} source={dataUser.knowledge === 1 ? require("../Images/number-one.png") :
                    dataUser.knowledge === 2 ? require("../Images/number-2.png"):
                        dataUser.knowledge === 3 ? require("../Images/number-3.png"):
                            dataUser.knowledge === 4 ? require("../Images/number-four.png"):
                                require("../Images/number-5.png")
                } />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 20,
        borderStyle:'solid',
        borderColor: "black",
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
    },
    score:{
        textAlign: 'center',
        fontSize: 25,
        borderBottomWidth:4,
        borderStyle:'solid',
        borderColor: "black",
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        margin:10,
    },
    image:{
        width: 50,
        height: 50,
        margin:5,
    },
    image2:{
        width: 150,
        height: 150,
        borderRadius: 200,
        margin:10,
        alignItems: 'center',
    },
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: StatusBar.currentHeight || 0,
    },
    medalAndTitle:{
        display: "flex",
        flexDirection: "row",
        textAlign: 'center',
        paddingRight:"20%",
        paddingLeft:"20%",
        justifyContent:"space-between",
        alignItems: 'center',
    },
    details:{
        alignItems: 'center',
    },
    body:{
        backgroundColor:'rgba(142,201,250,0.53)',
        flex:1,
    }
});
export default Page;
