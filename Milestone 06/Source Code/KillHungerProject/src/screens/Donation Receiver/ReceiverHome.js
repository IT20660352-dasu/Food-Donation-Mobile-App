import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, Button, ImageBackground, TouchableOpacity,Image } from "react-native";





const ReceiverHome = (props) => {
  const onPressDisplayDon = () => {
    props.navigation.navigate('DisplayDonation');
  };
  const onPressDisplayObDon = () => {
    props.navigation.navigate('DisplayObtainedDonation');
  };
  const onPressReqDon = () => {
    props.navigation.navigate('RequestDonations');
  };
    return (
        
         <ImageBackground source={require("../../assets/images/donationreciver/bg1.png")}  resizeMode="cover" style={styles.image2}>
    
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.formInput1}>
            <View style={{  flexDirection: 'row' }}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/donationreciver/menu.jpg')} style={{ width: 40, height: 40 }} />   
            </TouchableOpacity>
            <Image source={require('../../assets/images/donationreciver/Killhungerlogo.png')} style={{ width: 40, height: 40,marginLeft:270,borderRadius:5  }} />
            </View>
          </View>
            <Text style={styles.username}>Hi, Chandima👏</Text>
                <Text style={styles.welcome}>
                    Welcome to Kill-Hunger!
                </Text>
                <Text style={styles.instructions}>Take Donations Easily... </Text>
                <View style={styles.formInput2}>
            <TouchableOpacity onPress={onPressDisplayDon} style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 20, color: '#FFFF' }}>Display Donations</Text>
            </TouchableOpacity>
            </View>  
            <View style={styles.formInput}> 
            <TouchableOpacity onPress={onPressDisplayObDon} style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 20, color: '#FFFF', marginTop:5 }}>Display Obtained Donations</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.formInput}> 
            <TouchableOpacity onPress={onPressReqDon} style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 20, color: '#FFFF', marginTop:5 }}>Requsest Donations</Text>
            </TouchableOpacity>
            </View>
            <View style={{  marginBottom:1000 }}></View>
            </ScrollView>
        </SafeAreaView>

 </ImageBackground>
    );
}
const styles = StyleSheet.create({

    container: {  
       height:'100%',
        width: '100%',
        textAlign: 'center',
    },
    image1: {
        flex: 1,
        justifyContent: "center",
        // margin
      
      },
      image2: {
        flex: 1,
        justifyContent: "center",
        
      },
    welcome: {
        fontSize: 24,
        marginLeft: 43,
        color: '#0FAA72',
        fontWeight: 'bold',
        marginBottom:30,
    },
    instructions: {
        color: '#6F2B2B',
        marginLeft: 43,
        fontSize: 18,
        marginTop:40,
    },
    username: {
        fontSize: 18,
        marginTop:25,
        marginLeft:43,
        fontWeight:'bold',
    }, 
    formInput: {
        padding: 10,
       marginLeft:10,
       marginTop:10
     },
     formInput2: {
        padding: 10,
       marginLeft:10,
     },  
      formInput1: {
        padding: 10,
       marginLeft:10,
       marginTop:30
     },
    defaultButton: {
        padding: 12,
        backgroundColor: '#0FAA72',
        borderRadius: 8,
        marginLeft: 25,
        marginRight: 32,
        height: 55,
        marginTop:35,
       
      },
});
export default ReceiverHome;