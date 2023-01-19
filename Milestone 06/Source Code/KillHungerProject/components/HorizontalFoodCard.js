/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';

import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData
} from "KillHungerProject/constants";

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ 
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
             }}
        >

             {/* Image */}
             <Image
                source={item.image}
                style={imageStyle}
             />

             {/* Info */}
             <View
                style={{ 
                    flex: 1,
                 }}
             >

                 {/* Name */}
                 <Text style={{ ...FONTS.h3, fontSize: 18, color: COLORS.black }}>
                    {item.name}
                 </Text>

                 {/* Description */}
                <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>
                    {item.description}
                </Text>
             </View>

             {/* Calories */}
             <View
                style={{ 
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 5,
                    right: SIZES.radius
                 }}
             >

                 <Image
                    source={icons.calories}
                    style={{ 
                        width: 30,
                        height: 30
                     }}
                 />

                 <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
                    {item.calories} Nutritions
                 </Text>

             </View>

        </TouchableOpacity>
    )
}

export default HorizontalFoodCard;
