import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image,SearchBar,ImageBackground  } from "react-native";

const Displayselecteditem = (props) =>{
  const onPressNavigate = () => {
    props.navigation.navigate('DisplayMap');
  };
    return (
        <ImageBackground source={require("../../assets/images/donationreciver/CapturedisplaydonationBlur.png")}  resizeMode="cover" style={styles.image2}>

    <SafeAreaView>
      <ScrollView>
         
          
          <View style={styles.container1}>
          <Text style={{ color:'#061356' ,marginTop:3,fontSize:20, textAlign:'center', fontWeight:'bold'}}>Catogary : Pasta  </Text> 

          <Image source={require('../../assets/images/donationreciver/pasta.png')}  style={{ width: 358, height: 130, marginLeft:10,marginRight:10, marginTop:10,borderRadius:8 }}  />
               <Text style={{  fontWeight:'bold',marginTop:8,fontSize:16,marginLeft:10 }}>Item Name :  Pasta-Spaghetti </Text>
               <Text style={{  fontWeight:'bold',marginTop:1,fontSize:16,marginLeft:10 }}>Location : Malabe</Text>
               <Text style={{  fontWeight:'bold',marginTop:1,fontSize:16,marginLeft:10 }}>Public Date : 2022 / 10 /10</Text>
               <Text style={{  fontWeight:'bold',marginTop:1,fontSize:16,marginLeft:10 }}>Description : </Text>
               <Text style={{  fontWeight:'bold',marginTop:1,fontSize:16,marginLeft:35 }}>* New Condition </Text>
               <Text style={{  fontWeight:'bold',marginTop:1,fontSize:16,marginLeft:35 }}>* There are 5 items available.</Text>
               <Text style={{  fontWeight:'bold',marginTop:1,fontSize:16,marginLeft:35 }}>* One packet is 400g. </Text>
               <Text style={{  fontWeight:'bold',marginTop:1,fontSize:16,marginLeft:35 }}>* Expire Date (2023 / 04 /10)   </Text>
               
              <View style={styles.formInput}>
              <TouchableOpacity  style={styles.defaultButton3}>
                 <Text style={{ color:'#FFFFFF', fontSize: 18, }}>      Call      </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressNavigate} style={styles.defaultButton3}>
                 <Text style={{ color:'#FFFFFF', fontSize: 18, }}>  Navigate  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.defaultButton3}>
                 <Text style={{ color:'#FFFFFF', fontSize: 18, }}>    E-mail    </Text>
              </TouchableOpacity>
            </View>
            </View>
            
   
      </ScrollView>
      </SafeAreaView>
      </ImageBackground>
 
   )    
}


const styles = StyleSheet.create({
 
    container1: {
        height: 470,
        width: 380,
       
        //  flexDirection:'row',
          justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 17,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
   
        marginTop: 10,
        borderEndColor:'#0FAA72',
        borderBottomColor:'#0FAA72',
        borderStyle: 'solid',
        borderEndWidth: 3,
        borderBottomWidth: 3,
      },
    image2: {
        flex: 1,
        justifyContent: "center",
        //marginTop:50,
      },
    formInput: {
         padding: 10,
   
        flexDirection:'row',
      },
      create: {
        color:'#061356',
        marginLeft: 65,
        marginRight: 65,
        fontSize: 24,
        fontWeight:'bold',
      },
      


  defaultButton3: {
    padding: 1,
    backgroundColor: '#0FAA72',
    borderRadius: 8,
   justifyContent: 'center',
   justifyContentAlign:'center',
   alignItems: 'center',
   marginLeft:13,
   marginTop:15,
   marginRight:20,
   height: 35,
  // borderWidth: 2,
  },

});

export default Displayselecteditem;
