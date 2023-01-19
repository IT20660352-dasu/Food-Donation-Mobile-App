import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, Button, ImageBackground, TouchableOpacity, Image } from "react-native";

const DisplayObtainedDonation = (props) => {
  
  const onPressReciverHome = () => {
    props.navigation.navigate('ReceiverHome');
  };
  return (
    <ImageBackground source={require("../../assets/images/donationreciver/bgobtain.png")} resizeMode="cover" style={styles.image2}>

      <SafeAreaView >

        <ScrollView>
          <View style={styles.container}>
            <View style={styles.formInput1}>
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={onPressReciverHome}>
                  <Image source={require('../../assets/images/donationreciver/backBtn2.png')} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
                <Text style={styles.create}>Display Obtained Donations</Text>
                <Image source={require('../../assets/images/donationreciver/Killhungerlogo.png')} style={{ width: 40, height: 40,borderRadius:5  }} />
              </View>
            </View>
            <TouchableOpacity>
              <Image source={require('../../assets/images/donationreciver/menu.jpg')} style={{ width: 40, height: 40, marginLeft: 20 }} />
            </TouchableOpacity>
            <Text style={styles.username}>Hi, Chandima👏</Text>
            <View style={styles.container1}>
              <View style={styles.con1left}>
                <View style={styles.con1Box1}>
                  <Text style={styles.con1txt}>Name Of The Food :</Text>
                  <Text style={styles.con1txt2}>Canned vegetables</Text>
                </View>
                <View style={styles.con1Box1}>
                  <Text style={styles.con1txt}>Collected Date  :</Text>
                  <Text style={styles.con1txt2}>2022/11/13</Text>
                </View>
                <View style={styles.con1star}>
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34 }} />
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/starbad.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                </View>
              </View>
              <View style={styles.con1right}>
              <Image source={require('../../assets/images/donationreciver/cannedvegi.png')} style={{ width: 135, height: 250, marginLeft:8,marginRight:10, marginTop:10,borderRadius:8 }} />
              </View>
            </View>


            <View style={styles.container1}>
              <View style={styles.con1left}>
                <View style={styles.con1Box1}>
                  <Text style={styles.con1txt}>Name Of The Food :</Text>
                  <Text style={styles.con1txt2}>Canned fruit</Text>
                </View>
                <View style={styles.con1Box1}>
                  <Text style={styles.con1txt}>Collected Date  :</Text>
                  <Text style={styles.con1txt2}>2022/09/15</Text>
                </View>
                <View style={styles.con1star}>
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34 }} />
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/starbad.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/starbad.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                </View>
              </View>
              <View style={styles.con1right}>
              <Image source={require('../../assets/images/donationreciver/fruitcanned.jpg')} style={{ width: 135, height: 250, marginLeft:8,marginRight:10, marginTop:10,borderRadius:8 }} />
              </View>
            </View>


            <View style={styles.container1}>
              <View style={styles.con1left}>
                <View style={styles.con1Box1}>
                  <Text style={styles.con1txt}>Name Of The Food :</Text>
                  <Text style={styles.con1txt2}>Canned vegetables</Text>
                </View>
                <View style={styles.con1Box1}>
                  <Text style={styles.con1txt}>Collected Date  :</Text>
                  <Text style={styles.con1txt2}>2022/09/10</Text>
                </View>
                <View style={styles.con1star}>
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34 }} />
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/starbad.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                </View>
              </View>
              <View style={styles.con1right}>
              <Image source={require('../../assets/images/donationreciver/cannedfruit.png')} style={{ width: 135, height: 250, marginLeft:8,marginRight:10, marginTop:10,borderRadius:8 }} />
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
    minHeight: 1050,
    // textAlign: 'center',
  },
  container1: {
    height: 270,
    width: 380,
    opacity: 0.9,
     flexDirection:'row',
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
    padding: 12,
    backgroundColor: '#0FAA72',
    borderRadius: 8,
    marginLeft: 32,
    marginRight: 32,
    height: 55,

  },
  other: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  }
});

export default DisplayObtainedDonation;