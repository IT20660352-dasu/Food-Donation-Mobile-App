import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SearchBar } from "react-native";


const Feedbackfordonnaers = (props) => {
  const onPressDisplayHome = () => {
    props.navigation.navigate('DisplayObtainedDonation');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
         
        <View style={styles.container1}>
        <Text style={{ color:'#061356' ,marginTop:6,fontSize:20, textAlign:'center', fontWeight:'bold'}}>Give Feedback</Text> 
        <View style={styles.con1star}>
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34 }} />
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/stargood.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                  <Image source={require('../../assets/images/donationreciver/starbad.png')} style={{ width: 34, height: 34, marginLeft: 9 }} />
                </View>
              <TextInput
                style={styles.textsrea}
                placeholder="    Type your Feedback Here..." 
                numberOfLines={10}
                multiline={true} />
              <TouchableOpacity onPress={onPressDisplayHome} style={styles.defaultButton3}>
                <Text style={{ color: '#FFFFFF', fontSize: 18, }}> Done </Text>
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
    minHeight: 700,
    textAlign: 'center',
    justifyContent: 'center',
    justifyContentAlign: 'center',
    marginTop:35,
  },
  textAreaContainer: {
    // borderColor: COLORS.grey20,
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
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
    marginLeft: 3,
    marginRight: 24,
    height: 45,

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
