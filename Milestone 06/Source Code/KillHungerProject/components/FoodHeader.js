/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { FONTS, COLORS } from "KillHungerProject/constants";

const FoodHeader = ({
    containerStyle,
    title,
    titleStyle,
    leftComponent,
    rightComponent,
}) => {
    return (
        <View
            style={{ 
                height: 60,
                flexDirection: 'row',
                ...containerStyle,
             }}
        >
            {
                leftComponent 
            }

            <View
                style={{ 
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}
            >
                <Text style={{ ...FONTS.h3, color: COLORS.black, ...titleStyle }}>{title}</Text>
            </View>

            {
                rightComponent
            }

        </View>
    )
}

export default FoodHeader;