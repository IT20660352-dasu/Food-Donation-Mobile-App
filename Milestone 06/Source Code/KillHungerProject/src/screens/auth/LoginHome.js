import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground,Image} from "react-native";

const Signin =  (props) => {

  const onPressanimalactivist = () => {
    props.navigation.navigate('Welcome');
  };
  const onPressanimaldonner = () => {
    props.navigation.navigate('Donor_Welcome');
  };
  const onpresssdonationreceiver = () => {
    props.navigation.navigate('ReceiverHome');
  };
  
  const onpresssArticleHome = () => {
    props.navigation.navigate('ArticleHome');
  };
  
  const onPressAddAtricle = () => {
    props.navigation.navigate('AddAtricle');
  };

  return (
    <ImageBackground source={require("../../assets/images/onboarding/getstarted2.png")} resizeMode="cover" style={styles.image2} >

    <SafeAreaView >
      <ScrollView>
          <Text style={styles.title}>
            kill-<Text style={styles.title1}>Hunger</Text>
          </Text>
          <Text style={styles.create}>Login As,</Text>
         
        
          <View style={styles.formInput}>
            <TouchableOpacity onPress={onPressanimaldonner} style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>Animal Donor's </Text>
            </TouchableOpacity>
          </View>
        
          <View style={styles.formInput}>
            <TouchableOpacity onPress={onPressanimalactivist} style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>Animal Right Activist </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>Food Donor </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity onPress={onpresssdonationreceiver} style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>Donation Receiver </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity onPress={onPressAddAtricle} style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>Artical Writer </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity onPress={onpresssArticleHome} style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>Article Viewer </Text>
            </TouchableOpacity>
          </View>

      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
    )
}


const styles = StyleSheet.create({

  title: {
    color: '#061356',
    textAlign: 'center',
    marginTop: 100,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 60,

  },
  image2: {
    flex: 1,
    justifyContent: "center",
    //marginTop:50,
  },
  title1: {
    color: '#0FAA72',
    fontWeight: 'bold',
  },
  create: {
    color: '#0FAA72',
    marginLeft: 43,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  formInput: {
    padding: 10,
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
    marginTop: 35,
  },
  
});


export default Signin;
