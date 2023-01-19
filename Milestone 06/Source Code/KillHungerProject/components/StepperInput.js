/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { IconButton } from "KillHungerProject/components";
import { FONTS, COLORS, icons, SIZES } from "KillHungerProject/constants";

const StepperInput = ({
    containerStyle,
    value = 1,
    onAdd,
    onMinus,
}) => {
    return (
        <View
            style={{ 
                flexDirection: 'row',
                height: 60,
                width: 130,
                backgroundColor: COLORS.lightGreen,
                borderRadius: SIZES.radius,
                ...containerStyle,
             }}
        >

             <IconButton
                containerStyle={{ 
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}
                 icon={icons.minus}
                 iconStyle={{ 
                    height: 25,
                    width: 25,
                    tintColor: value > 1 ? COLORS.primary : COLORS.gray,
                  }}
                  onPress={onMinus}
             />

             <View
                style={{ 
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}
             >

                 <Text style={{ ...FONTS.h2 }}>
                    {value}
                 </Text>

             </View>

            <IconButton
                containerStyle={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                icon={icons.plus}
                iconStyle={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.primary,
                }}
                onPress={onAdd}
            />

        </View>
    )
}

export default StepperInput;