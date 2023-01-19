/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SearchBar } from "react-native";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";
import { images, COLORS, SIZES, icons, dummyData } from "KillHungerProject/constants";


const DisplayStatus = (props) => {

    const onPressUpdate = () => {
        props.navigation.navigate('UpdateArticle');
    };

    const onPressDelete = () => {
        props.navigation.navigate('DeletesucessArticleAlert');
    };

    const onPressBack = () => {
        props.navigation.navigate('AddAtricle');
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}></Text>
                    <View style={styles.formInputmenu}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={onPressBack}>
                                <Image source={icons.back} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={styles.create}>   Artical List  </Text>
                            <Image source={dummyData?.myProfile?.
                                profile_image} style={{ width: 40, height: 40, marginRight: 30, borderRadius: SIZES.radius }} />
                        </View>
                    </View>
                    
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 95, marginLeft: 76 }} >
                        <Text style={styles.username}>Reading
                            makes
                            a full human..</Text>
                        <Image source={require('../../assets/images/articalimg1.png')} style={{ width: 150, height: 180, borderRadius: 10 }} />
                    </View>
                    <View style={styles.conBox}>
                        <View style={styles.container1}>
                            <View style={styles.con1left}>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Article ID :</Text>
                                    <Text style={styles.con1txt2}>A003</Text>
                                </View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Donation Category (Animal)  :</Text>
                                    <Text style={styles.con1txt2}>Animal lovers</Text>
                                </View>
                            </View>

                            <View style={styles.con1right}>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity onPress={onPressUpdate} style={styles.defaultButtonUp}>
                                <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFFFF' }}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressDelete} style={styles.defaultButtonDel}>
                                <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFFFF' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.conBox}>
                        <View style={styles.container1}>
                            <View style={styles.con1left}>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Article ID :</Text>
                                    <Text style={styles.con1txt2}>A098</Text>
                                </View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Donation Category (Children)   :</Text>
                                    <Text style={styles.con1txt2}>punchi hith</Text>
                                </View>
                            </View>

                            <View style={styles.con1right}>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity onPress={onPressUpdate} style={styles.defaultButtonUp}>
                                <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFFFF' }}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressDelete} style={styles.defaultButtonDel}>
                                <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFFFF' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        with: '100%',
        minHeight: 950,
        textAlign: 'center',
    },
    con1Box1: {
        height: 60,
        width: 340,
        backgroundColor: '#B0E4C6',
        borderRadius: 10,
        marginLeft: 18,
        marginTop: 28,
    },
    con1txt: {
        color: '#061356',
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
    },
    con1txt2: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000000'
    },
    con1star: {
        flexDirection: 'row',
        marginLeft: 18,
        marginTop: 30,
        height: 60,
        width: 210,
    },
    con1left: {
        // flexDirection: 'row',
        marginLeft: 1,
        // marginTop: 1,
    },
    formInput: {
        padding: 10,
        marginLeft: 12,
        // flexDirection: 'row',
    },
    constatus: {
        height: 40,
        width: 340,
        backgroundColor: '#2196F3',
        borderRadius: 10,
        marginLeft: 18,
        marginTop: 10,

    },
    constatus2: {
        height: 40,
        width: 340,
        backgroundColor: '#00C853',
        borderRadius: 10,
        marginLeft: 18,
        marginTop: 10,

    },
    conBox: {
        height: 270,
        width: 380,
        opacity: 0.9,
        //  flexDirection:'row',
        //   justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 17,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 25,
        borderEndColor: '#0FAA72',
        borderBottomColor: '#0FAA72',
        borderStyle: 'solid',
        borderEndWidth: 3,
        borderBottomWidth: 3,
    },
    conBox2: {
        height: 230,
        width: 380,
        opacity: 0.9,
        //  flexDirection:'row',
        //   justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 17,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 25,
        borderEndColor: '#0FAA72',
        borderBottomColor: '#0FAA72',
        borderStyle: 'solid',
        borderEndWidth: 3,
        borderBottomWidth: 3,
    },
    container1: {

        flexDirection: 'row',
        //   justifyContent: 'center',
        // alignItems: 'center',

    },
    defaultButtonUp: {
        padding: 2,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        marginLeft: 18,
        marginRight: 32,
        marginTop: 5,
        height: 40,
        width: 150,


    },
    defaultButtonDel: {
        padding: 2,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        marginLeft: 9,
        marginRight: 42,
        marginTop: 5,
        height: 40,
        width: 150,
    },
    formInputmenu: {
        padding: 10,
        marginLeft: 20,
        // flexDirection: 'row',
    },
    image2: {
        flex: 1,
        justifyContent: "center",
        //marginTop:50,
    },
    create: {
        color: '#061356',
        marginLeft: 65,
        marginRight: 65,
        fontSize: 24,
        fontWeight: 'bold',
    },
    username: {
        fontSize: 38,
        marginTop: 2,
        marginLeft: 25,
        marginRight: 5,
        // fontWeight:'bold',
        color: '#156F3A',
    },
    searchbox: {
        backgroundColor: '#D9D9D9',
        fontSize: 20,
        height: 42,
        width: 320,
        marginRight: 8,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        borderColor: '#CBC8C8',
    },
    txtInput: {
        fontSize: 20,
        height: 50,
        width: 320,
        marginTop: 1,
        // fontWeight: 'bold',
        marginRight: 32,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
    },
    txtInput1: {
        fontSize: 20,
        height: 120,
        width: 320,
        marginTop: 1,

        marginRight: 32,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
    },

    defaultButton3: {
        padding: 1,
        backgroundColor: '#0FAA72',
        borderRadius: 8,
        justifyContent: 'center',
        justifyContentAlign: 'center',
        alignItems: 'center',
        marginLeft: 90,
        marginTop: 30,
        marginRight: 130,
        height: 40,
        width: 180,
        // borderWidth: 2,
    },
    results1: {
        color: '#061356',
        fontSize: 18,
        marginRight: 150,

    },
    results2: {
        color: '#00C853',
        fontSize: 18,


    },

});

export default DisplayStatus;
