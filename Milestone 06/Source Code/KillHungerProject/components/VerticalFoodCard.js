/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
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

const VerticalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                width: 200,
                padding: SIZES.radius,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
        >
            {/* Calories and Favourite */}
            <View style={{ flexDirection: 'row'}}>
                {/* Calories */}
                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <Image
                        source={icons.calories}
                        style={{ 
                            width: 30,
                            height: 30,
                         }}
                    />
                    <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
                        {item.calories} Nutritions
                    </Text>
                </View>
                {/* Favourite */}
                <Image
                    source={icons.love}
                    style={{ 
                        width: 20,
                        height: 20,
                        tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
                     }}
                />
            </View>
            {/* Image */}
            <View
                style={{ 
                    height: 150,
                    width: 150,
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}
            >

                 <Image
                    source={item.image}
                    style={{ 
                        height: "100%",
                        width: "100%",
                     }}
                 />
            </View>

            {/* Info */}
            <View
                style={{ 
                    alignItems: 'center',
                    marginTop: -20,
                 }}
            >
                <Text style={{ ...FONTS.h3, color: COLORS.black }}>
                    {item.name}
                </Text>
                <Text style={{ ...FONTS.body5, color: COLORS.darkGray2, textAlign: 'center' }}>
                    {item.description}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export default VerticalFoodCard;
