import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";


const Forgot =  (props) => {

  const onPress = () => {
    props.navigation.navigate('Signin');
  };

  // const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            kill-<Text style={styles.title1}>Hunger</Text>
          </Text>
          <Text style={styles.create}>Enter Your E-mail Address</Text>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="     Email"
            />
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity style={styles.defaultButton}>
              <Text style={{ textAlign: "center", fontSize: 20, color: '#FFFF' }}>Send Reset Link</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.other}>_ or Sign in with _ </Text>

          <View style={styles.formInput}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>
              <Text style={{ fontSize: 18 }}>Already Have An Acoount?</Text>
              <TouchableOpacity onPress={onPress}>
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
    marginTop: 45,
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


export default Forgot;
