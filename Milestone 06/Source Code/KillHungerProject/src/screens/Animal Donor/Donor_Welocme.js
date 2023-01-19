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


const Donor_Welcome = ({ navigation }) => {
    return (
        <ImageBackground
            source={images.donor_back}
            style={{
                ...styles.container,
            }}
        >
            <Text style={{
                color: COLORS.white,
                fontSize: 40,
                fontWeight: '800',
                marginTop: 400,
                marginRight: 26,

            }}>Welcome Excess Food Donors</Text>
            <Text
                style={{
                    color: COLORS.white,
                    fontSize: 15,
                    marginTop: 20,
                    marginLeft: 18,
                    alignItems: 'center',
                }}
            >Donate excess food that you or your organization throws away and quench
                the hungr of helples animals!</Text>

            <TextButton
                label="GET STARTED >"
                buttonContainerStyle={{
                    height: 45,
                    width: 300,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                    marginTop: 80,

                }}
                onPress={() => navigation.navigate("Donor_Home")}
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

export default Donor_Welcome;