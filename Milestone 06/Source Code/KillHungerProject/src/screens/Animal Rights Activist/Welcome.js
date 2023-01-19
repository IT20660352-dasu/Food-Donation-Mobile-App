/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import { Text, ImageBackground, StyleSheet } from "react-native";
import { images, COLORS, SIZES } from "KillHungerProject/constants";
import { TextButton } from "KillHungerProject/components";


const Welcome = ({ navigation }) => {
    return (
        <ImageBackground
           source={images.animal}
           style={{ 
            ...styles.container,
            }}
        >
            <Text style={{ 
                color: COLORS.white,
                fontSize: 40,
                fontWeight: '800',
                marginTop: 400,

             }}>Welcome Animal Lovers</Text>
             <Text
                style={{ 
                    color: COLORS.white,
                    fontSize: 15,
                    marginTop: 20,
                    marginRight: 24,
                 }}
             >Discover good food items and order easily!</Text>

            <TextButton
                label="GET STARTED >"
                buttonContainerStyle={{
                    height: 45,
                    width: 300,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                    marginTop: 80,
                    
                }}
                onPress={() => navigation.navigate("Home")}
            />
            
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: null,
        width: null,
    }
})

export default Welcome;