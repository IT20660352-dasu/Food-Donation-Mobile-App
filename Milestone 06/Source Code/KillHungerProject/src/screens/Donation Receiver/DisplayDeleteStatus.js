import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SearchBar } from "react-native";


const DisplayDeleteStatus = (props) => {
    
  const onPressUpdate = () => {
    props.navigation.navigate('Updateform');
  };
  
  const onPressDelete = () => {
    props.navigation.navigate('DeleteRequest');
  };

  const onPressBack = () => {
    props.navigation.navigate('RequestDonations');
  };
  
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}></Text>
                    <View style={styles.formInputmenu}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={onPressBack}>
                                <Image source={require('../../assets/images/donationreciver/backBtn1.png')} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                            <Text style={styles.create}>Display Status </Text>
                            <Image source={require('../../assets/images/donationreciver/Killhungerlogo.png')} style={{ width: 40, height: 40, marginRight: 30,borderRadius:5 }} />
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/donationreciver/menu.jpg')} style={{ width: 40, height: 40, marginRight: 335 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.username}>Hi, Chandima👏</Text>
                    {/* <View style={styles.conBox}>
                        <View style={styles.container1}>
                            <View style={styles.con1left}>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Name Of The Food :</Text>
                                    <Text style={styles.con1txt2}>Rice and Curry</Text>
                                </View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Pick-up Location    :</Text>
                                    <Text style={styles.con1txt2}>A110,Malabe</Text>
                                </View>
                            </View>

                            <View style={styles.con1right}>
                                <Image source={require('../../assets/images/donationreciver/Status.png')} style={{ width: 110, height: 120, marginLeft: 22, marginRight: 20, marginTop: 28, borderRadius: 8 }} />
                            </View>
                        </View>
                        <View style={styles.constatus}>
                            <Text style={{ color:'#FFFFFF', textAlign:'center', marginTop:5,fontSize:18, }}>Current Status  :<Text style={{ color:'#000000' }}>  Pending</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop:4 }}>
            <TouchableOpacity onPress={onPressUpdate} style={styles.defaultButtonUp}>
              <Text style={{ textAlign: "center", fontSize: 25,color:'#FFFFFF' }}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressDelete} style={styles.defaultButtonDel}>
              <Text style={{ textAlign: "center", fontSize: 25,color:'#FFFFFF' }}>Delete</Text>
            </TouchableOpacity>
          </View>
                    </View> */}
                    <View style={styles.conBox2}>
                        <View style={styles.container1}>
                            <View style={styles.con1left}>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Name Of The Food :</Text>
                                    <Text style={styles.con1txt2}>Rice and Curry</Text>
                                </View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Pick-up Location    :</Text>
                                    <Text style={styles.con1txt2}>A110,Malabe</Text>
                                </View>
                            </View>

                            <View style={styles.con1right}>
                                <Image source={require('../../assets/images/donationreciver/Status.png')} style={{ width: 110, height: 120, marginLeft: 22, marginRight: 20, marginTop: 28, borderRadius: 8 }} />
                            </View>
                        </View>
                        <View style={styles.constatus2}>
                            <Text style={{ color:'#FFFFFF', textAlign:'center', marginTop:5,fontSize:18, }}>Current Status  :<Text style={{ color:'#000000' }}>  Approved</Text></Text>
                        </View>
                    </View>
                    <View style={styles.conBox2}>
                        <View style={styles.container1}>
                            <View style={styles.con1left}>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Name Of The Food :</Text>
                                    <Text style={styles.con1txt2}>Vegetable</Text>
                                </View>
                                <View style={styles.con1Box1}>
                                    <Text style={styles.con1txt}>Pick-up Location    :</Text>
                                    <Text style={styles.con1txt2}>A110,Malabe</Text>
                                </View>
                            </View>

                            <View style={styles.con1right}>
                                <Image source={require('../../assets/images/donationreciver/Status.png')} style={{ width: 110, height: 120, marginLeft: 22, marginRight: 20, marginTop: 28, borderRadius: 8 }} />
                            </View>
                        </View>
                        <View style={styles.constatus2}>
                            <Text style={{ color:'#FFFFFF', textAlign:'center', marginTop:5,fontSize:18, }}>Current Status  :<Text style={{ color:'#000000' }}>  Approved</Text></Text>
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
        minHeight: 650,
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
        color:'#000000'
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
        backgroundColor: '#FFC700',
        borderRadius: 8,
        marginLeft: 18,
        marginRight: 32,
        marginTop:5,
        height: 40,
        width: 150,
     
    
      },
      defaultButtonDel: {
        padding: 2,
        backgroundColor: '#F40D0D',
        borderRadius: 8,
        marginLeft: 9,
        marginRight: 42,
        marginTop:5,
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
        fontSize: 18,
        marginTop: 2,
        marginLeft: 30,
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

export default DisplayDeleteStatus;
