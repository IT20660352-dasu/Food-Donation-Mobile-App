import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, Button, ImageBackground, TouchableOpacity, Image } from "react-native";

const DisplayObtainedDonation = (props) => {
  const onPressReciverHome = () => {
    props.navigation.navigate('ReceiverHome');
  };
  const onPressaddNewReq = () => {
    props.navigation.navigate('Requestform');
  };
  const onPressdisplaystatus = () => {
    props.navigation.navigate('DisplayStatus');
  };
  return (
    <ImageBackground source={require("../../assets/images/donationreciver/bgrequestdnation.png")} resizeMode="cover" style={styles.image2}>

      <SafeAreaView >

        <ScrollView>
          <View style={styles.container}>
            <View style={styles.formInput1}>
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={onPressReciverHome}>
                  <Image source={require('../../assets/images/donationreciver/backBtn2.png')} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
                <Text style={styles.create}>Requsest Donations</Text>
                <Image source={require('../../assets/images/donationreciver/Killhungerlogo.png')} style={{ width: 40, height: 40,borderRadius:5  }} />
              </View>
            </View>
            <TouchableOpacity>
              <Image source={require('../../assets/images/donationreciver/menu.jpg')} style={{ width: 40, height: 40, marginLeft: 20 }} />
            </TouchableOpacity>
            <Text style={styles.username}>Hi, Chandima👏</Text>
           

            <View style={styles.container1}>
              <View style={styles.con1left}>
              <View style={styles.formInput}>
            <TouchableOpacity onPress={onPressaddNewReq} style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>Add New Request</Text>
            </TouchableOpacity>
          </View>
              </View>
              <View  style={styles.con1right}>
              <Image source={require('../../assets/images/donationreciver/addnewreq.png')} style={{ width: 215, height: 153, marginLeft:125,marginRight:10,borderRadius:8 }} />
              </View>
            </View>


            <View style={styles.container2}>
              <View style={styles.con1left}>
              <View style={styles.formInput}>
            <TouchableOpacity onPress={onPressdisplaystatus} style={styles.defaultButton1}>
              <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>Display Status</Text>
            </TouchableOpacity>
          </View>
              </View>
              <View style={styles.con1right}>
              <Image source={require('../../assets/images/donationreciver/displayStatus.png')} style={{ width: 215, height: 153, marginLeft:25,marginRight:10,borderRadius:8 }} />
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
    minHeight: 790,
    // textAlign: 'center',
  },
  container1: {
    height: 270,
    width: 380,
    opacity: 0.9,
     //flexDirection:'row',
    //   justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 17,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginTop: 25,
    borderEndColor:'#0FAA72',
    borderBottomColor:'#0FAA72',
    borderStyle: 'solid',
    borderEndWidth: 3,
    borderBottomWidth: 3,
  },
  container2: {
    height: 270,
    width: 380,
    opacity: 0.9,
     //flexDirection:'row',
    //   justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 17,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginTop: 25,
    // borderEndColor:'#0FAA72',
    borderBottomColor:'#0FAA72',
    borderStyle: 'solid',
    // borderEndWidth: 3,
    borderBottomWidth: 3,
    borderLeftColor:'#0FAA72',
    borderLeftWidth:3,
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
    fontWeight: 'bold',
    marginLeft: 50,
    marginRight: 55,

  },
  regas: {
    color: '#6F2B2B',
    marginLeft: 43,
  },
  formInput: {
    padding: 8,
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
    padding: 10,
    backgroundColor: '#0FAA72',
    borderRadius: 8,
    marginLeft: 15,
    marginRight: 32,
    height: 55,
    marginTop:15,
    width: 230,
  },
  defaultButton1: {
    padding: 10,
    backgroundColor: '#0FAA72',
    borderRadius: 8,
    marginLeft: 115,
    marginRight: 32,
    height: 55,
    marginTop:15,
    width: 230,
    marginBottom:5,
  },
  other: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  }
});

export default DisplayObtainedDonation;