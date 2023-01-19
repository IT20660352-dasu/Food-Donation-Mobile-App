/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    Text,
    Image,
    BackHandler,
} from 'react-native';

import { TextButton } from "KillHungerProject/components";
import { FONTS, COLORS, SIZES, images } from "KillHungerProject/constants";

const Success = ({ navigation }) => {

    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress', () => { return true }
        )
        return () => backHandler.remove();
    }, [])

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.lightGreen,
                
            }}
        >
            <View
                style={{ 
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}
            >

                 <Image
                    source={images.success}
                    resizeMode="contain"
                    style={{ 
                        width: 150,
                        height: 150,
                     }}
                 />

                 <Text style={{ marginTop: SIZES.padding, ...FONTS.h1, color: COLORS.black  }}>Congratulations !</Text>
                 <Text style={{ textAlign: 'center', marginTop: SIZES.base, color: COLORS.darkGray, ...FONTS.body3 }}>Order was successfully made!</Text>

            </View>

            <TextButton
                label="Done"
                buttonContainerStyle={{ 
                    height: 55,
                    marginBottom: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                 }}
                 onPress={() => navigation.navigate("DeliveryStatus")}
            />
            
        </View>
    )
}

export default Success;