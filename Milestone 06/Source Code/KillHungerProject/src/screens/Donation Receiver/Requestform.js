import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SearchBar } from "react-native";


const Requestform = (props) => {
  
  const onPressback = () => {
    props.navigation.navigate('RequestDonations');
  };
  const onPressReqDon = () => {
    props.navigation.navigate('SuccessRequestAlert');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}></Text>
          <View style={styles.formInputmenu}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <TouchableOpacity onPress={onPressback}>
                <Image source={require('../../assets/images/donationreciver/backBtn1.png')} style={{ width: 40, height: 40 }} />
              </TouchableOpacity>
              <Text style={styles.create}>Requsest Form</Text>
              <Image source={require('../../assets/images/donationreciver/Killhungerlogo.png')} style={{ width: 40, height: 40, marginRight: 30,borderRadius:5  }} />
            </View>
          </View>
          <View style={styles.formInput}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <TouchableOpacity>
                <Image source={require('../../assets/images/donationreciver/menu.jpg')} style={{ width: 40, height: 40,marginRight:345 }} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.username}>Hi, Chandima👏</Text>
          

          <View style={styles.container1}>
          <View style={styles.formInput}>
          <Text style={{ fontSize:16, color:'#061356',marginLeft:1, fontWeight:'bold',marginTop:12}}>Name Of The Receiver</Text>     
            <TextInput
              style={styles.txtInput}
              placeholder="   Chandima sooriyaarachchi"
            />
          </View>
          <View style={styles.formInput}>
          <Text style={{ fontSize:16, color:'#061356',marginLeft:1, fontWeight:'bold',marginTop:1}}>Name Of The Food</Text>     

            <TextInput
              style={styles.txtInput}
              placeholder="   Rice and Curry"
            />
          </View>
          <View style={styles.formInput}>
          <Text style={{ fontSize:16, color:'#061356',marginLeft:1, fontWeight:'bold',marginTop:1}}>Item Description </Text>     

            <TextInput
              style={styles.txtInput1}
              numberOfLines={10}
              multiline={true} 
              placeholder="   I am a warden so I want rice and curry for 20 people. those are children also below 15 years "
            />
          </View>
          <View style={styles.formInput}>
          <Text style={{ fontSize:16, color:'#061356',marginLeft:1, fontWeight:'bold',marginTop:1}}>Pick-up Location</Text>     

            <TextInput
              style={styles.txtInput}
              placeholder="   A110,Malabe"
            />
          </View>
          <View style={styles.formInput}>
          <Text style={{ fontSize:16, color:'#061356',marginLeft:1, fontWeight:'bold',marginTop:1}}>Date Of Need</Text>     

            <TextInput
              style={styles.txtInput}
              placeholder="   2022 / 10 / 30"
            />
          </View>
          <TouchableOpacity onPress={onPressReqDon} style={styles.defaultButton3}>
                <Text style={{ color: '#FFFFFF', fontSize: 18, }}> Request Donation </Text>
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
    minHeight: 900,
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
    color: '#061356',
    marginLeft: 65,
    marginRight: 65,
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    marginTop:2,
    marginLeft:25,
    fontWeight:'bold',
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
    width:320,
    marginTop:1,
    
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
    width:320,
    marginTop:1,

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
     marginLeft:90,
    marginTop: 30,
    marginRight: 130,
    height: 40,
    width:180,
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

export default Requestform;
