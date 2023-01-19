/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SearchBar } from "react-native";
import { isConfigured } from "react-native-reanimated/lib/reanimated2/core";
import { images, COLORS, SIZES, icons, dummyData } from "KillHungerProject/constants";
import { LineDivider } from "KillHungerProject/components";



const DisplayStatus = (props) => {

    const onPressUpdate = () => {
        props.navigation.navigate('UpdateItem');
    };

    const onPressDelete = () => {
        props.navigation.navigate('DeleteDonorRequest');
    };

    const onPressBack = () => {
        props.navigation.navigate('ThankYouScreen');
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}></Text>
                    <View style={styles.formInputmenu}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={onPressBack}>
                                <Image source={icons.back} style={{ width: 20, height: 20, marginRight:280 }} />
                            </TouchableOpacity>

                            <Image source={dummyData?.myProfile?.
                                profile_image} style={{ width: 40, height: 40, marginRight: 30, borderRadius: SIZES.radius }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 60}}>
                        <Text style={styles.username}>View Items</Text>
                        <Image source={require('../../assets/images/list.png')} style={{ width: 180, height: 120, marginLeft :50 }} />
                    </View>
                    <View>
                        <View style={styles.container1}>
                            <View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Hamburger</Text>
                                </View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Hilton Hotel, Colombo</Text>
                                </View>
                            </View>

                            <View style={styles.con1right}>
                                <Image source={require("KillHungerProject/src/assets/dummyData/hamburger.png")} style={{ width: 110, height: 120, marginLeft: 22, marginRight: 20, marginTop: 28, borderRadius: 8 }} />
                            </View>
                        </View>
                        
                        <View style={{ flexDirection: 'row', marginTop: 4 }}>
                            <TouchableOpacity onPress={onPressUpdate} style={styles.defaultButtonUp}>
                                <Text style={{ textAlign: "center", fontSize: 18, color: '#FFFFFF' }}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressDelete} style={styles.defaultButtonDel}>
                                <Text style={{ textAlign: "center", fontSize: 18, color: '#FFFFFF' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                   
                    <LineDivider/>
                    <View>
                        <View style={styles.container1}>
                            <View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Hot Tacos</Text>
                                </View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Grand Peacock Hotel, Rathnapura</Text>
                                </View>
                            </View>

                            <View style={styles.con1right}>
                                <Image source={require("KillHungerProject/src/assets/dummyData/hot_tacos.png")} style={{ width: 110, height: 120, marginLeft: 22, marginRight: 20, marginTop: 28, borderRadius: 8 }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 4 }}>
                            <TouchableOpacity onPress={onPressUpdate} style={styles.defaultButtonUp}>
                                <Text style={{ textAlign: "center", fontSize: 18, color: '#FFFFFF' }}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressDelete} style={styles.defaultButtonDel}>
                                <Text style={{ textAlign: "center", fontSize: 18, color: '#FFFFFF' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <LineDivider />
                    <View>
                        <View style={styles.container1}>
                            <View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Veg Biryani</Text>
                                </View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Taj Hotel, Colombo</Text>
                                </View>
                            </View>

                            <View style={styles.con1right}>
                                <Image source={require("KillHungerProject/src/assets/dummyData/veg_biryani.png")} style={{ width: 110, height: 120, marginLeft: 22, marginRight: 20, marginTop: 28, borderRadius: 8 }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 4 }}>
                            <TouchableOpacity onPress={onPressUpdate} style={styles.defaultButtonUp}>
                                <Text style={{ textAlign: "center", fontSize: 18, color: '#FFFFFF' }}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressDelete} style={styles.defaultButtonDel}>
                                <Text style={{ textAlign: "center", fontSize: 18, color: '#FFFFFF' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <LineDivider />
                    <View>
                        <View style={styles.container1}>
                            <View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Wrap Sandwich</Text>
                                </View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Nimal Hot Pack, Kegalle</Text>
                                </View>
                            </View>

                            <View style={styles.con1right}>
                                <Image source={require("KillHungerProject/src/assets/dummyData/wrap_sandwich.png")} style={{ width: 110, height: 120, marginLeft: 22, marginRight: 20, marginTop: 28, borderRadius: 8 }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 4 }}>
                            <TouchableOpacity onPress={onPressUpdate} style={styles.defaultButtonUp}>
                                <Text style={{ textAlign: "center", fontSize: 18, color: '#FFFFFF' }}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressDelete} style={styles.defaultButtonDel}>
                                <Text style={{ textAlign: "center", fontSize: 18, color: '#FFFFFF' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <LineDivider />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        with: '100%',
        minHeight: 1000,
        textAlign: 'center',
    },
    con1Box1: {
        height: 60,
        width: 210,
        backgroundColor: '#B0E4C6',
        borderRadius: 10,
        marginLeft: 18,
        marginTop: 20,
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
       
        marginLeft: 1,
    },
    formInput: {
        padding: 10,
        marginLeft: 12,
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
        marginLeft: 17,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 25,
        borderEndColor: '#00C853',
        borderBottomColor: '#00C853',
        borderStyle: 'solid',
        borderEndWidth: 3,
        borderBottomWidth: 3,
    },
    conBox2: {
        height: 230,
        width: 380,
        opacity: 0.9,
        marginLeft: 17,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 25,
        borderEndColor: '#00C853',
        borderBottomColor: '#00C853',
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
        backgroundColor: '#00C853',
        borderRadius: 8,
        marginLeft: 18,
        marginRight: 32,
        marginTop: 5,
        height: 30,
        width: 120,


    },
    defaultButtonDel: {
        padding: 2,
        backgroundColor: '#00C853',
        borderRadius: 8,
        marginLeft: 9,
        marginRight: 42,
        marginTop: 5,
        height: 30,
        width: 120,
    },
    formInputmenu: {
        padding: 10,
        marginLeft: 20,
    },
    image2: {
        flex: 1,
        justifyContent: "center",
    },
    username: {
        fontSize: 26,
        marginLeft: 70,
        color: COLORS.black,
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
        backgroundColor: '#00C853',
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
    results2: {
        color: '#00C853',
        fontSize: 18,


    },

});

export default DisplayStatus;
