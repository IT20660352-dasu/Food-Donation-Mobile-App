/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
    View,
    Image,
    Text,
} from 'react-native';

import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    dummyData
} from "KillHungerProject/constants";

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
    return (
        <View
            style={{ 
                flexDirection: 'row',
                paddingVertical: SIZES.base,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                ...containerStyle,
             }}
        >
            <Image
                source={icon}
                style={{ 
                    width: 20,
                    height: 20,
                    ...iconStyle,
                 }}
            />

            <Text
                styles={{ 
                    marginLeft: SIZES.base,
                    ...FONTS.body3,
                    ...labelStyle,
                 }}
            >

                 {label}

            </Text>

        </View>
    )
}

export default IconLabel;