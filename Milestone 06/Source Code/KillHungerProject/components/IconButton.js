/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    TouchableOpacity,
    Image,
} from 'react-native';

import { COLORS } from "KillHungerProject/constants";

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{ 
                ...containerStyle,
             }}
             onPress={onPress}
        >

             <Image
                source={icon}
                style={{ 
                    width: 30,
                    height: 30,
                    tintColor: COLORS.white,
                    ...iconStyle
                 }}
             />

        </TouchableOpacity>
    )
}

export default IconButton;