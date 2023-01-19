import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
// import {auth} from '../../../firebase'

const Signin =  (props) => {

  const onPressForgot = () => {
    props.navigation.navigate('Forgot');
  };
  const onPressSignup = () => {
    props.navigation.navigate('Signup');
  };
   const onPressSignin = () => {
    props.navigation.navigate('LoginHome');
  };
  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            kill-<Text style={styles.title1}>Hunger</Text>
          </Text>
          <Text style={styles.create}>Login </Text>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="     Email"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="     Password"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity onPress={onPressForgot}>
            <Text style={{ color: '#FE6B5B', textAlign: 'right', fontWeight: 'bold', marginRight: 42, marginBottom: 8 }}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.formInput}>
            <TouchableOpacity onPress={onPressSignin} style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.other}>_ or Sign in with _ </Text>
          <View style={styles.formInput}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>
              <TouchableOpacity style={{ marginRight: 22, marginLeft: 32 }}>
                <Image source={require('../../assets/images/auth/fb2.png')} style={{ width: 40, height: 40, borderRadius: 1000 }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../assets/images/auth/google.png')} style={{ width: 40, height: 40, borderRadius: 1000 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10, marginRight: 19 }}>
                <Image source={require('../../assets/images/auth/twiter.png')} style={{ width: 68, height: 40, borderRadius: 1000 }} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formInput}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>
              <Text style={{ fontSize: 18 }}>Don't have an acoount?</Text>
              <TouchableOpacity onPress={onPressSignup}>
                <Text style={{ color: '#0FAA72', fontSize: 18, }}>  Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>)
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    with: '100%',
    minHeight: 800,
    textAlign: 'center',
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
    color: '#0FAA72',
    marginLeft: 43,
    fontSize: 18,
    marginTop: 20,
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
  }
});


export default Signin;
