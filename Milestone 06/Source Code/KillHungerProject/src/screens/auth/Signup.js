import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image } from "react-native";
import { firebase } from "../../../firebase";

const Signup = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const onPress1 = () => {
  //   props.navigation.navigate('Signin');
  // };
  const handlerSignup = () => {
    firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message))
  }
  const onPressSignin = () => {
    props.navigation.navigate('Signin');
  };


  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            kill-<Text style={styles.title1}>Hunger</Text>
          </Text>
          <Text style={styles.create}>Create your Account</Text>
          <Text style={styles.regas}>Register As</Text>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="     Email"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="     Password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="     Confirm Password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity onPress={onPressSignin} style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 25, color: '#FFFF' }}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.other}>_ or Sign up with _ </Text>
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
              <TouchableOpacity onPress={onPressSignin}>
                <Text style={{ color: '#0FAA72', fontSize: 18, }}>  Sign in</Text>
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
    marginTop: 10,
  },
  regas: {
    color: '#6F2B2B',
    marginLeft: 43,
  },
  formInput: {
    padding: 8,
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


export default Signup;
