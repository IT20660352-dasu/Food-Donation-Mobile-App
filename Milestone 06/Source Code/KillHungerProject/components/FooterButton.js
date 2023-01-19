/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { TextButton, LineDivider } from "KillHungerProject/components";
import { FONTS, SIZES, COLORS } from "KillHungerProject/constants";

const FooterButton = ({ onPress }) => {
   return (
        <View
            style={{
                padding: SIZES.padding,
                borderTopLeftRadius: 20,
                borderToprightRadius: 20,
                backgroundColor: COLORS.white,
            }}
        >
            <LineDivider/>

            {/* footer */}
            <TextButton
                buttonContainerStyle={{
                    height: 60,
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                }}
                label="Place your Order"
                onPress={onPress}
            />
            
        </View>
   )
}

export default FooterButton;