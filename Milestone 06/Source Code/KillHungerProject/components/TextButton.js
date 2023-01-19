/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from  'react';
import {
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';

import { FONTS, COLORS } from "KillHungerProject/constants";

const TextButton = ({
    buttonContainerStyle,
    label,
    labelStyle,
    onPress,
    icon, 
    label2 = "",
    label2Style,
    iconStyle,
}) => {
    return (
        <TouchableOpacity
            style={{ 
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                ...buttonContainerStyle,
             }}
             onPress={onPress}   
        >

             <Text
                style={{ 
                    color: COLORS.white,
                    ...FONTS.h3,
                    ...labelStyle,
                 }}
             >
                {label} 
             </Text>

             {label2 != "" && 
                 <Text
                    style={{ 
                        flex: 1,
                        textAlign: 'right',
                        color: COLORS.white,
                        ...FONTS.h3,
                        ...label2Style,
                     }}
                 >
                    {label2}
                 </Text>
             } 
            
        </TouchableOpacity>
    )
}

export default TextButton;