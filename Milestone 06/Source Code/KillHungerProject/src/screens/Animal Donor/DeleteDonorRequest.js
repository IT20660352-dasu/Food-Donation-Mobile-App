/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, Button, ImageBackground, TouchableOpacity, Image } from "react-native";

const DeleteDonorRequest = (props) => {
    const onPressDeletedon = () => {
        props.navigation.navigate('ItemView');
    };
    const onPressDeleteyes = () => {
        props.navigation.navigate('DeleteSucessDonorAlert');
    };
    return (
        <ImageBackground source={require("../../assets/images/delete_blur.jpg")} resizeMode="cover" style={styles.image2}>

            <SafeAreaView >

                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.container1}>
                            <Text style={{ color: '#FF0000', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Are You Sure ?</Text>
                            <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 15, marginLeft: 65, marginRight: 65 }}>Once deleted you will no be able
                                to recover this request</Text>

                            <View style={styles.formInput}>
                                <TouchableOpacity onPress={onPressDeletedon} style={styles.defaultButton}>
                                    <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>No</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={onPressDeleteyes} style={styles.defaultButton}>
                                    <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>Yes</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>


    )
}


const styles = StyleSheet.create({
    container: {
        //  backgroundColor: 'white',
        // with: '100%',
        minHeight: 750,
        // textAlign: 'center',
    },
    container1: {
        height: 170,
        width: 380,
        // opacity: 0.9,
        //  flexDirection:'row',
        //   justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 17,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 275,
        // borderEndColor:'#FF0000',
        // borderBottomColor:'#FF0000',
        borderColor: '#FF0000',
        borderStyle: 'solid',
        // borderEndWidth: 3,
        // borderBottomWidth: 3,
        borderWidth: 2,
    },
    con1Box1: {
        height: 60,
        width: 210,
        backgroundColor: '#B0E4C6',
        borderRadius: 10,
        marginLeft: 18,
        marginTop: 30,
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
    },
    con1star: {
        flexDirection: 'row',
        marginLeft: 18,
        marginTop: 30,
        height: 60,
        width: 210,
    },
    image2: {
        flex: 1,
        justifyContent: "center",
        //marginTop:50,
    },
    username: {
        fontSize: 18,
        marginTop: 5,
        marginLeft: 30,
        fontWeight: 'bold',
    },
    title: {
        color: '#061356',
        textAlign: 'center',
        marginTop: 100,
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 60,

    },
    title1: {
        color: '#0FAA72',
        fontWeight: 'bold',
    },
    create: {
        color: '#061356',
        fontSize: 20,
        marginLeft: 25,
        marginRight: 25,

    },
    regas: {
        color: '#6F2B2B',
        marginLeft: 43,
    },
    formInput: {
        padding: 8,
        flexDirection: 'row',
    },
    formInput1: {
        padding: 20,
    },
    txtInput: {
        fontSize: 20,
        height: 55,
        marginLeft: 32,
        marginRight: 32,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        borderColor: '#CBC8C8',
    },
    defaultButton: {
        padding: 2,
        backgroundColor: '#0FAA72',
        borderRadius: 8,
        marginLeft: 44,
        marginRight: 32,
        marginTop: 5,
        height: 40,
        borderColor: '#6F2B2B',
        borderWidth: 2,

        width: 100,//  flexDirection: 'row',
    },
    other: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    }
});

export default DeleteDonorRequest;