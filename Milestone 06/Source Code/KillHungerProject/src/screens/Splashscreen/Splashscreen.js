import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image,  } from "react-native";


const Feedbackfordonnaers = (props) => {
  const onPressDisplayHome = () => {
    props.navigation.navigate('DisplayObtainedDonation');
  };
  return (
    
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
        <Image source={require('../../assets/images/donationreciver/Killhungerlogonew.png')} style={{ width: 250, height: 350,marginLeft:70,marginTop:145 }} />
        <Text style={styles.title}>
            kill-<Text style={styles.title1}>Hunger</Text>
          </Text>
         
         
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
width: '100%',
    minHeight: 798,
    textAlign: 'center',
    // justifyContent: 'center',
    // justifyContentAlign: 'center',
    // marginTop:35,
  },
  textAreaContainer: {
    // borderColor: COLORS.grey20,
    borderWidth: 1,
    padding: 5
  },
  title: {
    color: '#061356',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'center',

  },
  title1: {
    color: '#0FAA72',
    fontWeight: 'bold',
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
  textinputstart:{
    // color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft:20,
    marginRight:20, 
    marginTop:10,
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

  textsrea: {
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    height: 150,
    width: 350,
   alignContent: 'center',
   justifyContent: 'center',
    alignItems: 'center',
   margin:15,
    borderWidth: 1,
    borderRadius: 8,
   
    padding: 10,
    borderColor: '#CBC8C8',
  },
  defaultButton: {
    padding: 10,
    backgroundColor: '#0FAA72',
    borderRadius: 8,
    marginLeft: 7,
    marginRight: 24,
    height: 65,
    width:350,
    marginTop:180,
    alignContent: 'center',
    justifyContent: 'center',
     alignItems: 'center',

  },
  defaultButton1: {
    padding: 10,
    //backgroundColor: '#0FAA72',
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 24,
    height: 45,
    borderWidth: 2,
    borderColor: '#0FAA72',
  },
  defaultButton3: {
    padding: 1,
    backgroundColor: '#0FAA72',
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
    height: 370,
    width: 380,
 
    //  flexDirection:'row',
       justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 17,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    // marginTop: 10,
    borderEndColor: '#0FAA72',
    borderBottomColor: '#0FAA72',
    borderStyle: 'solid',
    borderEndWidth: 3,
    borderBottomWidth: 3,
  },
  con1star: {
    flexDirection: 'row',
    marginLeft: 86,
    marginTop: 20,
    height: 60,
    width: 210,
  
  },
});

export default Feedbackfordonnaers;
