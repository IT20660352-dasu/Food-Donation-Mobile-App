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


const ThankYouScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={images.thank_you}
            style={{
                ...styles.container,
            }}
        >
            <Text style={{
                color: COLORS.white,
                fontSize: 40,
                fontWeight: '900',
                marginTop: 450,
                marginRight: 26,

            }}>THANK YOU
            DONATE YOUR
            EXCESS FOOD ITEMS!</Text>
            
            <TextButton
                label="View Items >>"
                buttonContainerStyle={{
                    height: 45,
                    width: 300,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                    marginTop: 80,

                }}
                onPress={() => navigation.navigate("ItemView")}
            />

        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: null,
        width: null,
    }
})

export default ThankYouScreen;