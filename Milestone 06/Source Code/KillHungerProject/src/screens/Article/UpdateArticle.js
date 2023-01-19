/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SearchBar } from "react-native";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";
import { images, COLORS, SIZES, icons, dummyData } from "KillHungerProject/constants";


const UpdateArticle = (props) => {

    const onPressback = () => {
        props.navigation.navigate('ArticleList');
    };
    const onPressReqDon = () => {
        props.navigation.navigate('UpdateSucessArticleAlert');
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}></Text>
                    <View style={styles.formInputmenu}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={onPressback}>
                                <Image source={icons.back} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={styles.create}>Update Articles</Text>
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


                    <View style={styles.container1}>
                        <View style={styles.formInput}>
                            <Text style={{ fontSize: 16, color: '#0A5F2D', marginLeft: 1, fontWeight: 'bold', marginTop: 12 }}>WRITER’S NAME :</Text>
                            <TextInput
                                style={styles.txtInput}
                                value="   Animal lovers"
                            />
                        </View>
                        <View style={styles.formInput}>
                            <Text style={{ fontSize: 16, color: '#0A5F2D', marginLeft: 1, fontWeight: 'bold', marginTop: 1 }}>DONETION DATE :</Text>

                            <TextInput
                                style={styles.txtInput}
                                value="   10/7/2021"
                            />
                        </View>
                        <View style={styles.formInput}>
                            <Text style={{ fontSize: 16, color: '#0A5F2D', marginLeft: 1, fontWeight: 'bold', marginTop: 1 }}>DONATION CATEGARY: </Text>

                            <TextInput
                                style={styles.txtInput}

                                value="   Mr.Perera"
                            />
                        </View>
                        <View style={styles.formInput}>
                            <Text style={{ fontSize: 16, color: '#0A5F2D', marginLeft: 1, fontWeight: 'bold', marginTop: 1 }}>DONOR’S NAME:</Text>

                            <TextInput
                                style={styles.txtInput}
                                value="   Nugegoda Junction"
                            />
                        </View>
                        <View style={styles.formInput}>
                            <Text style={{ fontSize: 16, color: '#0A5F2D', marginLeft: 1, fontWeight: 'bold', marginTop: 1 }}>LOCATION:</Text>

                            <TextInput
                                style={styles.txtInput}
                                value="   Around 100 stray animals"
                            />
                        </View>
                        <View style={styles.formInput}>
                            <Text style={{ fontSize: 16, color: '#0A5F2D', marginLeft: 1, fontWeight: 'bold', marginTop: 1 }}>DONATION  DESCRIPTION: </Text>

                            <TextInput
                                style={styles.txtInput1}
                                numberOfLines={10}
                                multiline={true}
                                value="   Type Donation Description here..."
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={onPressReqDon} style={styles.defaultButton3}>
                                <Text style={{ color: '#FFFFFF', fontSize: 18, }}> SAVE </Text>
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
        marginLeft: 55,
        marginRight: 30,
        // flexDirection: 'row',
    },

    create: {
        color: '#0A5F2D',
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
        marginLeft: 42,
        marginTop: 45,
        marginRight: 35,
        height: 40,
        width: 140,
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
        height: 670,
        width: 360,
        opacity: 0.9,
        //  flexDirection:'row',
        //   justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 30,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 10,
        borderEndColor: '#0FAA72',
        borderBottomColor: '#0FAA72',
        borderStyle: 'solid',
        borderEndWidth: 3,
        borderBottomWidth: 3,
    },
});

export default UpdateArticle;
