/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SearchBar } from "react-native";

import { images, COLORS, SIZES, icons, dummyData } from "KillHungerProject/constants";
import { TextButton } from "KillHungerProject/components";


const Donor_Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}></Text>
                    <View style={styles.formInputmenu}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image source={icons.menu} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={styles.create}>  DONOR HOME </Text>
                            <Image source={dummyData?.myProfile?.
                                profile_image} style={{ width: 40, height: 40, marginRight: 30, borderRadius: SIZES.radius }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 95, marginLeft: 76 }} >
                        <Text style={styles.username}>Add
                            new
                            excess item</Text>
                        <Image source={require('../../assets/images/excess.png')} style={{ width: 120, height: 120, borderRadius: 10 }} />
                    </View>

                        <View style={styles.formInput}>
                    
                            <TextInput
                                style={styles.txtInput}
                                placeholder="   Name"
                            />
                        </View>
                        <View style={styles.formInput}>

                            <TextInput
                                style={styles.txtInput}
                                placeholder="   Address"
                            />
                        </View>
                        <View style={styles.formInput}>
                            <TextInput
                                style={styles.txtInput}

                                placeholder="   District"
                            />
                        </View>
                        <View style={styles.formInput}>
                            <TextInput
                                style={styles.txtInput}
                                placeholder="   Email"
                            />
                        </View>
                        <View style={styles.formInput}>

                            <TextInput
                                style={styles.txtInput}
                                placeholder="   Phone"
                            />
                        </View>
                        <View style={styles.formInput}>

                            <TextInput
                                style={styles.txtInput}
                                placeholder="   Item Name"
                            />
                        </View>
                        <View style={styles.formInput}>

                            <TextInput
                                style={styles.txtInput}
                                placeholder="   Description"
                            />
                        </View>
                        <View style={styles.formInput}>

                            <TextInput
                                style={styles.txtInput}
                                placeholder="   No of Nutritions"
                            />
                        </View>

                        <TextButton
                        label="Add Item"
                        buttonContainerStyle={{
                            height: 45,
                            width: 320,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary,
                            marginTop: 20,
                            marginLeft: 42,


                        }}
                        onPress={() => navigation.navigate("ThankYouScreen")}
                    />
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
        // flexDirection: 'row',
    },
    formInputmenu: {
        padding: 10,
        marginLeft: 25,
        // flexDirection: 'row',
    },

    create: {
        color: COLORS.black,
        marginLeft: 65,
        marginRight: 65,
        fontSize: 18,
        fontWeight: 'bold',
    },
    username: {
        fontSize: 26,
        marginRight: 20,
        color: '#000',
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
        width: 330,
        marginTop: 1,
        borderWidth: 1,
        marginLeft: 16,
        borderRadius: 8,
        padding: 10,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.lightGray2,
    },
    defaultButton3: {
        padding: 1,
        backgroundColor: '#00C853',
        borderRadius: 8,
        justifyContent: 'center',
        justifyContentAlign: 'center',
        alignItems: 'center',
        marginLeft: 42,
        marginTop: 45,
        marginRight: 35,
        height: 40,
        width: 140,
        // borderWidth: 2,
    },
    results2: {
        color: '#00C853',
        fontSize: 18,
    },
});

export default Donor_Home;
