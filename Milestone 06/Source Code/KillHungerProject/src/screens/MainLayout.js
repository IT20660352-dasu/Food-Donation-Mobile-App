/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList,
} from 'react-native';


import {
    Home,
    Search,
    CartTab,
    Favourite,
    Notification
} from "KillHungerProject/src/screens";
import LinearGradient from "react-native-linear-gradient";

import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData
} from "KillHungerProject/constants";
import { Header } from "KillHungerProject/components";



const MainLayout = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >   
            {/* Header */}
            <Header
                containerStyle={{
                    height: 50,
                    paddingHorizontal: 40,
                    marginTop: 40,
                    alignItems: 'center'
                }}  
                leftComponent={
                    <TouchableOpacity
                        style={{ 
                            width:40,
                            height:40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth:1,
                            borderColor: COLORS.gray2,
                            borderRadius:SIZES.radius
                         }} 
                    >
                        <Image
                            source={icons.menu}
                        />
                    </TouchableOpacity>
                } 
                rightComponent={
                    <TouchableOpacity
                        style={{ 
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center'
                         }}
                    >
                        <Image
                            source={dummyData?.myProfile?.
                                profile_image}
                            style={{ 
                                width: 40,
                                height: 40,
                                borderRadius: SIZES.radius
                             }}
                        />
                    </TouchableOpacity>
                }   
            />

            {/* Content */}
            <View
                style={{ 
                    flex: 1,
                 }}
            >
            </View>
            {/* Footer */}
            <View
                style={{ 
                    height: 100,
                    justifyContent: 'flex-end',
                 }}
            >
                {/* Shadow */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 4 }}
                    colors={[
                        COLORS.transparent,
                        COLORS.lightGray1
                    ]}
                    style={{ 
                        position: 'absolute',
                        top: -40,
                        left: 0,
                        right: 0,
                        height: 100,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15
                     }}
                />
                {/* Tabs */}
                <View
                    style={{ 
                        flex: 1,
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.radius,
                        paddingBottom: 10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: COLORS.white,
                     }}
                >   

                    <View
                        style={{ 
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                         }}
                    >

                        <View
                            style={{ 
                                flexDirection: 'row',
                                width: '80%',
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 25,
                               
                             }}
                    
                        >

                             <Image
                                source={icons.home}
                                style={{ 
                                    width: 30,
                                    height: 30,
                                    tintColor: COLORS.primary,
                                    marginRight: 60,
                                    
                                 }}
                             />
                            <Text
                                style={{
                                    position: 'absolute',
                                    paddingRight: 200,
                                    fontSize: 20,
                                    color: COLORS.primary,
                                }}
                            >Home</Text>
                            <Image
                                source={icons.search}
                                
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.black,
                                    marginLeft: 45,
                                }}
                            />
                            
                            <Image
                                source={icons.cart}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.black,
                                    marginLeft: 45,
                                }}
                            />
                            <Image
                                source={icons.favourite}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.red,
                                    marginLeft: 45,
                                }}
                            />
                            <Image
                                source={icons.notification}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.black,
                                    marginLeft: 45,
                                }}
                            />

                        </View>

                    </View>
            
                </View>
            </View>
            
        </View>
    )
}

export default MainLayout;

