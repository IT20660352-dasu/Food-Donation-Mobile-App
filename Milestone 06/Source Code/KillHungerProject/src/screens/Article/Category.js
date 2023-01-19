/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SearchBar } from "react-native";
import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    dummyData,
    constants,
} from "KillHungerProject/constants";

import LinearGradient from "react-native-linear-gradient";


const DisplayDonation = (props) => {
    const onPressDisplaySeleted = () => {
        props.navigation.navigate('ArticlePage');
    };
    const onPressBack = () => {
        props.navigation.navigate('ArticleHome');
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}></Text>
                    <View style={styles.formInput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={onPressBack}>
                                <Image source={icons.back} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={styles.create}>Browse Category</Text>
                        </View>
                    </View>

                    <View style={styles.formInput}>
                        <Text style={{ color: COLORS.black, ...FONTS.h3 }}>Which topic are you interested the most?</Text>
                    </View>
                    <View style={styles.container1}>
                        <Image source={require('../../assets/images/animal_hunger.jpg')} style={{ width: 358, height: 200, marginLeft: 10, marginRight: 10, marginTop: 10, borderRadius: 8 }} />
                        <Text style={{ fontWeight: 'bold', marginTop: 8, fontSize: 16, marginLeft: 10, color: COLORS.black }}>Animal's Hunger Relief </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 1, fontSize: 16, marginLeft: 10, color: COLORS.red }}>12 articles</Text>
                        <TouchableOpacity onPress={onPressDisplaySeleted} style={styles.defaultButton3}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, }}> View > </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container1}>
                        <Image source={require('../../assets/images/children_hunger.jpg')} style={{ width: 358, height: 200, marginLeft: 10, marginRight: 10, marginTop: 10, borderRadius: 8 }} />
                        <Text style={{ fontWeight: 'bold', marginTop: 8, fontSize: 16, marginLeft: 10, color: COLORS.black }}>Childern's Hunger Relief </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 1, fontSize: 16, marginLeft: 10, color: COLORS.red }}>14 articles</Text>
                        <TouchableOpacity onPress={onPressDisplaySeleted} style={styles.defaultButton3}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, }}> View > </Text>
                        </TouchableOpacity>
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
        minHeight: 1100,
        textAlign: 'center',
    },
    formInput: {
        padding: 10,
        marginLeft: 12,
        flexDirection: 'row',
    },
    create: {
        color: '#061356',
        marginLeft: 65,
        marginRight: 65,
        fontSize: 24,
        fontWeight: 'bold',
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
    defaultButton: {
        padding: 10,
        backgroundColor: '#00C853',
        borderRadius: 8,
        marginLeft: 3,
        marginRight: 24,
        height: 45,

    },
    defaultButton1: {
        padding: 10,
        //backgroundColor: '#00C853',
        borderRadius: 8,
        marginLeft: 3,
        marginRight: 24,
        height: 45,
        borderWidth: 2,
        borderColor: '#00C853',
    },
    defaultButton3: {
        padding: 1,
        backgroundColor: '#00C853',
        borderRadius: 8,
        justifyContent: 'center',
        justifyContentAlign: 'center',
        alignItems: 'center',
        marginLeft: 130,
        marginTop: 2,
        marginRight: 130,
        height: 35,
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
    container1: {
        height: 320,
        width: 380,
        opacity: 0.9,
        //  flexDirection:'row',
        //   justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 17,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 10,
        borderEndColor: '#00C853',
        borderBottomColor: '#00C853',
        borderStyle: 'solid',
        borderEndWidth: 3,
        borderBottomWidth: 3,
    },
});

export default DisplayDonation;
