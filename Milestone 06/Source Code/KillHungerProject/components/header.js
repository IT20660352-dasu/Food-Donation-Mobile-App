/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from   'react';
import {
    View,
    Text
} from 'react-native';
import { COLORS, FONTS } from "../constants";

const Header = ({ containerStyle, leftComponent, rightComponent }) => {
    return (
        <View
            style={{ 
                flexDirection: 'row',
                ...containerStyle
             }}
        >  
            { /* Left*/} 
            {leftComponent}

            { /* Title */}
             <View
                style={{ 
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                 }}
             >
                <Text style={{ ...FONTS.h3, color: COLORS.black }}>
                    HOME
                </Text>
             </View>

            { /* Right */ }
            {rightComponent}

        </View>
    )
}

export default  Header;