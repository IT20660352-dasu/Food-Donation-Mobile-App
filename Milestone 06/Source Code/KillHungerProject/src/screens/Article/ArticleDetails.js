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

const ArticleDetails = ({ navigation }) => {

    const [foodItem, setFoodItem] = React.useState(dummyData.hamburger)
    const [ratings, setRatings] = React.useState("")
    const [qty, setQty] = React.useState(1)

    function renderHeader() {
        return (
            <FoodHeader
                title="Food Donations for animals by Nilaro Hotel"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
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
                        onPress={() => navigation.navigate("ArticlePage")}
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
                <View
                    style={{ 
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20,
                     }}
                >
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>Strays deserve our kindness</Text>
                </View>

                {/* Fod Card */}
                <View
                    style={{
                        height: 200,
                        borderRadius: 15,
                        backgroundColor: COLORS.lightGray2,
                    }}
                >

                   {/* Food Image */}
                    <Image
                        source={require('../../assets/images/article_animal1.png')}
                        resizeMode="contain"
                        style={{
                            marginTop: 8,
                            height: 180,
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
                            marginTop: SIZES.base,
                            color: COLORS.darkGray,
                            textAlign: 'justify',
                            ...FONTS.body3,
                        }}
                    >

                        Hunger is the leading cause of death in the world. Our planet has provided us with tremendous resources, but unequal access and inefficient handling leaves millions of people malnourished. If we promote sustainable agriculture with modern technologies and fair distribution systems, we can sustain the whole world’s population and make sure that nobody will ever suffer from hunger again.

                    </Text>

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

        </View>
    )
}

export default ArticleDetails;