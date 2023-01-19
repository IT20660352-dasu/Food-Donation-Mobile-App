/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Animated,
} from 'react-native';
import { constants, images, FONTS, SIZES, COLORS, dummyData } from "KillHungerProject/constants";
import { TextButton } from "KillHungerProject/components";

const OnBoarding = ({navigation}) => {

    const scrollX = new Animated.Value(0)
    const flatListRef = React.useRef()

    const Dots = () => {

        const dotPosition = Animated.divide(scrollX, SIZES.width)

        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >

                {
                    constants.onboarding_screens.map((item, index) => {
                        
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.white, COLORS.primary, COLORS.white],
                            extrapolate: "clamp"
                        })

                        const dotWidth = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [10, 30, 10],
                            extrapolate: "clamp"
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                style={{
                                    borderRadius: 5,
                                    marginHorizontal: 6,
                                    width: dotWidth,
                                    height: 10,
                                    backgroundColor: dotColor,
                                }}
                            />
                        )
                    })
                }

            </View>
        )
    }

    function renderHeaderLogo() {
        return (
            <View
                style={{ 
                    position: 'absolute',
                    top: SIZES.height > 800 ? 50 : 25,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}
            >
                <Image
                    source={dummyData?.myProfile?.
                        profile_image}
                    resizeMode="contain"
                    style={{ 
                        width: SIZES.width * 0.5,
                        height: 100,
                     }}
                />

                <Text style={{ color: COLORS.primary, ...FONTS.h2, marginTop:10 }}>Kill Hunger</Text>

            </View>
        )
    }

    function renderFooter() {
        return (
           <View
            style={{
                height: 140,
            }}
           >
                {/* Dots */ }
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Dots/>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: SIZES.padding,
                        marginVertical: SIZES.padding,
                    }}
                >
                    <TextButton
                        label="Skip"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.darkGray2,
                        }}
                        onPress={() => navigation.navigate("Signin")}

                    />

                    <TextButton
                        label="Next"
                        buttonContainerStyle={{
                            height: 60,
                            width: 200,
                            borderRadius: SIZES.radius
                        }}
                        onPress={() => {
                            let index = Math.ceil(Number(scrollX.value
                            / SIZES.width))

                            if (index < constants.onboarding_screens.
                            length - 1) {
                                flatListRef?.current?.scrollToIndex({
                                    index: index + 1,
                                    animated: true
                                })
                            } else {
                                navigation.navigate("Signin")
                            }
                          
                        }}
                    />

                </View>

           </View> 
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.lightGreen,
            }}
        >

        {renderHeaderLogo()}

        <Animated.FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            data={constants.onboarding_screens}
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
                [
                    { nativeEvent: { contentOffset: { x: scrollX }}}
                ],
                { useNativeDriver: false }
            )}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item, index }) => {
                return (
                    <View
                        style={{
                            width: SIZES.width,
                        }}
                    >

                        {/* Header */ }
                        <View
                           style={{
                                flex: 3,
                           }} 
                        >
                            <ImageBackground
                                source={item.backgroundImage}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    height: index == 1 ? "92%" : "100%",
                                    width: "100%",
                                }}
                            >
                                <Image
                                    source={item.bannerImage}
                                    resizeMode="contain"
                                    style={{
                                        width: SIZES.width * 0.8,
                                        height: SIZES.width * 0.8,
                                        marginBottom: -SIZES.padding
                                    }}
                                />

                            </ImageBackground>
                        </View>

                        {/* Detail */ }
                        <View
                            style={{
                                flex: 1,
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: SIZES.radius,
                            }}
                        >
                            <Text style={{ color: COLORS.black, ...FONTS.h1, fontSize: 25}}>
                                {item.title}
                            </Text>
                            <Text
                                style={{
                                    marginTop: SIZES.radius,
                                    textAlign: 'center',
                                    color: COLORS.darkGray,
                                    paddingHorizontal: SIZES.padding,
                                    ...FONTS.body3,
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>
                    </View>
                )
            }}
        />

          {renderFooter()} 

        </View>
    )
}

export default OnBoarding;