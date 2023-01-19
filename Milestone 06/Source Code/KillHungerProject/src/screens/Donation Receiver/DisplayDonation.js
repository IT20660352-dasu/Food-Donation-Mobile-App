import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SearchBar } from "react-native";


const DisplayDonation = (props) => {
  const onPressDisplaySeleted = () => {
    props.navigation.navigate('Displayselecteditem');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}></Text>
          <View style={styles.formInput}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <TouchableOpacity>
                <Image source={require('../../assets/images/donationreciver/menu.jpg')} style={{ width: 40, height: 40 }} />
              </TouchableOpacity>
              <Text style={styles.create}>Receiver Home</Text>
              <Image source={require('../../assets/images/donationreciver/Killhungerlogo.png')} style={{ width: 40, height: 40, marginRight: 30,borderRadius:5  }} />
            </View>
          </View>

          <View style={styles.formInput}>
            <TextInput
              style={styles.searchbox}
              placeholder="    Search Category" />
            <TouchableOpacity>
              <Image source={require('../../assets/images/donationreciver/EOS_FILTER_LIST_FILLED.png')} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity style={styles.defaultButton}>
              <Text style={{ color: '#FFFFFF', fontSize: 18, }}> All </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.defaultButton1}>
              <Text style={{ color: '#0FAA72', fontSize: 18, }}> Canned fruit </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.defaultButton1}>
              <Text style={{ color: '#0FAA72', fontSize: 18, }}> Canned fish </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <Text style={styles.results1}>Search Results</Text>
            <Text style={styles.results2}>210 Founds</Text>
          </View>
          <View style={styles.container1}>
            <Image source={require('../../assets/images/donationreciver/pasta.png')} style={{ width: 358, height: 130, marginLeft: 10, marginRight: 10, marginTop: 10, borderRadius: 8 }} />
            <Text style={{ marginTop: 3, fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>Catogary : Pasta  </Text>
            <Text style={{ fontWeight: 'bold', marginTop: 8, fontSize: 16, marginLeft: 10 }}>Item Name :  Pasta-Spaghetti </Text>
            <Text style={{ fontWeight: 'bold', marginTop: 1, fontSize: 16, marginLeft: 10 }}>Location : Malabe</Text>
            <TouchableOpacity onPress={onPressDisplaySeleted} style={styles.defaultButton3}>
              <Text style={{ color: '#FFFFFF', fontSize: 18, }}> Display </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container1}>
            <Image source={require('../../assets/images/donationreciver/fish.png')} style={{ width: 358, height: 130, marginLeft: 10, marginRight: 10, marginTop: 10, borderRadius: 8 }} />
            <Text style={{ marginTop: 3, fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>Catogary : Canned fish   </Text>
            <Text style={{ fontWeight: 'bold', marginTop: 8, fontSize: 16, marginLeft: 10 }}>Item Name : jack mackerel </Text>
            <Text style={{ fontWeight: 'bold', marginTop: 1, fontSize: 16, marginLeft: 10 }}>Location : Kegalle</Text>
            <TouchableOpacity style={styles.defaultButton3}>
              <Text style={{ color: '#FFFFFF', fontSize: 18, }}> Display </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container1}>
            <Image source={require('../../assets/images/donationreciver/tin.png')} style={{ width: 358, height: 130, marginLeft: 10, marginRight: 10, marginTop: 10, borderRadius: 8 }} />
            <Text style={{ marginTop: 3, fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>Catogary : Soup  </Text>
            <Text style={{ fontWeight: 'bold', marginTop: 8, fontSize: 16, marginLeft: 10 }}>Item Name :  Vegitable-Soup </Text>
            <Text style={{ fontWeight: 'bold', marginTop: 1, fontSize: 16, marginLeft: 10 }}>Location : Kaduwela</Text>
            <TouchableOpacity style={styles.defaultButton3}>
              <Text style={{ color: '#FFFFFF', fontSize: 18, }}> Display </Text>
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
    minHeight: 1100,
    textAlign: 'center',
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
    height: 270,
    width: 380,
    opacity: 0.9,
    //  flexDirection:'row',
    //   justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 17,
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

export default DisplayDonation;
