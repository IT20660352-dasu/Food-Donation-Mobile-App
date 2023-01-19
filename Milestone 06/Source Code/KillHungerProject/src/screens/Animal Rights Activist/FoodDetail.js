/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';

import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    dummyData,
    constants,
} from "KillHungerProject/constants";

import { FoodHeader } from "KillHungerProject/components";
import { IconButton, CartQuantityButton, IconLabel, TextButton, TextIconButton, LineDivider, StepperInput } from 'KillHungerProject/components';

const FoodDetail = ({ navigation }) => {

    const [foodItem, setFoodItem] = React.useState(dummyData.hamburger)
    const [ratings, setRatings] = React.useState("")
    const [qty, setQty] = React.useState(1)

    function renderHeader() {
        return (
            <FoodHeader
                title="DETAILS"
                containerStyle={{ 
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                 }}
                 leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{ 
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                         }}
                         iconStyle={{ 
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2,
                          }}
                          onPress={() => navigation.navigate("Home")}
                    />
                 }
                 rightComponent={
                     <CartQuantityButton
                        quantity={3}
                     />
                 }
               
            />
        )
    }

    function renderDetails() {
        return (
            <View
                style={{ 
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                 }}
            >

                 {/* Fod Card */}
                 <View
                    style={{ 
                        height: 190,
                        borderRadius: 15,
                        backgroundColor: COLORS.lightGray2,
                     }}
                 >

                     {/* Calories amd Fav*/}
                     <View
                        style={{ 
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.base,
                            paddingHorizontal: SIZES.radius,
                         }}
                     >

                         {/* Calories */}
                         <View
                            style={{ 
                                flexDirection: 'row',
                             }}
                         >
                            <Image
                                source={icons.calories}
                                style={{ 
                                    width: 30,
                                    height: 30,
                                 }}
                            />

                                 <Text
                                    style={{ 
                                        color: COLORS.darkGray2,
                                        ...FONTS.body4,
                                     }}
                                 >
                                78 Nutritions
                                 </Text>
                         </View>

                         {/* Fav */}
                        <Image
                            source={icons.love}
                            style={{ 
                                width: 20,
                                height: 20,
                                tintColor: foodItem?.isFavourite ? COLORS.gray : COLORS.primary,
                             }}
                        />

                     </View>
                     {/* Food Image */}
                     <Image
                        source={require('KillHungerProject/src/assets/dummyData/veg_biryani.png')}
                        resizeMode="contain"
                        style={{ 
                            height: 170,
                            width: "100%",
                         }}
                     />

                 </View>
                 {/* Food Info */}
                 <View
                    style={{ 
                        marginTop: SIZES.padding,
                     }}
                 >
                    <Text
                        style={{ 
                            ...FONTS.h1,
                            color: COLORS.black,
                         }}
                    >
                        Rice & Curry
                    </Text>

                    <Text
                        style={{ 
                           marginTop: SIZES.base,
                           color: COLORS.darkGray,
                           textAlign: 'justify', 
                           ...FONTS.body3,
                         }}
                    >

                        It contains meaty foods like eggs and is made with less oil. This is a bit too harsh and pay attention to that.

                    </Text>
                    
                    {/* Location & Contact */}
                    <View
                        style={{ 
                            flexDirection: 'row',
                            marginTop: SIZES.padding,
                         }}
                    >

                         {/* Location */}
                         <IconLabel
                            containerStyle={{ 
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0
                             }}
                            icon={icons.location}
                            iconStyle={{ 
                                tintColor: COLORS.primary,
                             }}
                             label="   Hilton Hotel, Colombo"
                         />

                         {/* Contact */}
                        <IconLabel
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 40,
                            }}
                            icon={icons.call}
                            iconStyle={{
                                tintColor: COLORS.primary,
                            }}
                            label="   071-5264449"
                        />

                    </View>

                 </View>
            </View>
        )
    }

    function renderRatings() {
        return (
            <><Text
                style={{
                    marginLeft: 27,
                    color: COLORS.black,
                    ...FONTS.h3,
                }}
            >
                Ratings

            </Text><View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                {constants.ratings.map((item, index) => {
                    return (
                        <TextIconButton
                            key={`Ratings-${index}`}
                            containerStyle={{ 
                                flex: 1,
                                height: 50,
                                margin: 5,
                                alignItems: 'center',
                                borderRadius: SIZES.base,
                                backgroundColor: item.id == ratings ? COLORS.primary : COLORS.lightGray2
                             }}
                             label={item.label}
                             labelStyle={{ 
                                color: item.id == ratings ? COLORS.white : COLORS.gray
                              }}
                            icon={icons.star}
                              iconStyle={{ 
                                tintColor: item.id == ratings ? COLORS.white : COLORS.gray
                               }}
                               onPress={() => setRatings(item.id)}
                              
                        />
                    )
                })}

                </View></>
        )
    }

    function renderFooter() {
        return (
           <View
            style={{ 
                flexDirection: 'row',
                height: 120,
                alignItems: 'center',
                paddingHorizontal: SIZES.padding,
                paddingBottom: SIZES.radius,
             }}
           >
           {/* StepperInput */}
           <StepperInput
                value={qty}
                onAdd={() => setQty(qty + 1)}
                onMinus={() => {
                    if (qty > 1) {
                        setQty(qty - 1)
                    }
                }}
           />

           {/* Text button */}
           <TextButton
               buttonContainerStyle={{ 
                    flex: 1,
                    flexDirection: 'row',
                    height: 60,
                    marginLeft: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                }} 
                label="Add to cart"
                onPress={() => navigation.navigate("MyCart")}
           />

           </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >

            {/* Header */}
            {renderHeader()}
            
            {/* Body */}
            <ScrollView>
                {/* Food Detail */}
                {renderDetails()}

                {/* Rating */}
                {renderRatings()}

            </ScrollView>

            {/* Footer */}
            <LineDivider/>
            {renderFooter()}

        </View>
    )
}

export default FoodDetail;