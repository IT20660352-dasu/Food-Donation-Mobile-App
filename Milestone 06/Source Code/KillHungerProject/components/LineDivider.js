/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from  'react';
import {
    View
} from 'react-native';

import { COLORS } from "KillHungerProject/constants";

const LineDivider = ({ lineStyle }) => {
    return (
        <View
            style={{ 
                height: 2,
                width: "100%",
                backgroundColor: COLORS.lightGray2,
                ...lineStyle,
             }}
        />

    )
}

export default LineDivider;