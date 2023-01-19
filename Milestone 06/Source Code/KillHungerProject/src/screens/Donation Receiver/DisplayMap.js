/* eslint-disable no-shadow */
/* eslint-disable no-spaced-func */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import LinearGradient from "react-native-linear-gradient";

import MapViewDirections from "react-native-maps-directions";
import { IconButton } from "KillHungerProject/components";
import {
    COLORS,
    SIZES,
    FONTS,
    icons,
    images,
    dummyData,
    constants,
} from "KillHungerProject/constants";

import { utils } from "KillHungerProject/utils";

const Map =  (props) => {
  const onPressFeedback = () => {
    props.navigation.navigate('Feedbackfordonnaers');
  };

    const mapView = React.useRef()
    const [region, setRegion] = React.useState(null)
    const [toLoc, setToLoc] = React.useState(null)
    const [fromLoc, setFromLoc] = React.useState(null)
    const [angle, setAngle] = React.useState(0)

    const [isReady, setIsReady] = React.useState(false)
    const [duration, setDuration] = React.useState("")

    React.useEffect(() => {
        let initialRegion = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
        }

        let destination = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
        }

        setToLoc(destination)
        setFromLoc(dummyData.fromLocs[1])

        setRegion(initialRegion)

    }, [])

    function renderMap() {
        return (
            <MapView
                ref={mapView}
                style={{ 
                    flex: 1,
                 }}
                 provider={PROVIDER_GOOGLE}
                 initialRegion={region}
            >

              {
                fromLoc &&
                <Marker
                    key={'FromLoc'}
                    coordinate={fromLoc}
                    tracksViewChanges={false}
                    icon={icons.navigator1}
                    rotation={angle}
                    anchor={{ x: 0.5, y: 0.5 }}
                />
              }

              {
                toLoc &&
                <Marker
                    key={'ToLoc'}
                    coordinate={toLoc}
                    tracksViewChanges={false}
                    icon={icons.location_pin}
                    anchor={{ x: 0.5, y: 0.5 }} 
                />   
              }

            </MapView>
        )
    }

    function renderHeaderButtons() {
        return (
            <>
                <IconButton
                    icon={icons.back}
                    containerStyle={{ 
                        position: 'absolute',
                        top: SIZES.padding * 2,
                        left: SIZES.padding,
                        ...styles.buttonStyle,
                     }}
                     iconStyle={{ 
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray2,
                      }}
                      onPress={() => navigation.goBack()}
                />

                <View
                    style={{ 
                        position: 'absolute',
                        top: SIZES.padding * 2,
                        right: SIZES.padding,
                     }}
                >

                     <IconButton
                        icon={icons.globe}
                        containerStyle={{ 
                            ...styles.buttonStyle,
                         }}
                         iconStyle={{ 
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray,
                          }}
                     />

                     <IconButton
                        icon={icons.focus}
                        containerStyle={{ 
                            marginTop: SIZES.radius,
                            ...styles.buttonStyle
                         }}
                         iconStyle={{ 
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray,
                          }}
                     />

                </View>
            </>
        )
    }

    function renderInfo() {
        return (
            <View
                style={{ 
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                 }}
            >

                 {/* Linear Gradient */}
                 <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={[
                        COLORS.transparent,
                        COLORS.lightGray2,
                     ]}
                
                 style={{ 
                    position: 'absolute',
                    top: -20,
                    left: 0,
                    right: 0,
                    height: Platform.OS === 'Android' ? 200 : 50,
                  }}

                />

                 {/* Info Container */}
                 <View
                    style={{ 
                        padding: SIZES.padding,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: COLORS.white
                     }}
                 >

                     {/* Delivery Time */}
                     <View
                        style={{ 
                            flexDirection: 'row',
                            alignItems: 'center',
                         }}
                     >

                         <Image
                            source={icons.clock}
                            style={{ 
                                width: 40,
                                height: 40,
                                tintColor: COLORS.black,
                             }}
                         />

                         <View
                            style={{
                                marginLeft: SIZES.padding,
                            }}
                         >

                            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}> Time Duration </Text>
                            <Text style={{ ...FONTS.h3, color: COLORS.black }}>50 minutes</Text>

                         </View>

                     </View>

                     {/* Delivery Man Details */}
                     <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            height: 70,
                            marginTop: SIZES.padding,
                            borderRadius: SIZES.radius,
                            paddingHorizontal: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.primary,
                        }}
                     >
                     
                        <Image
                           
                            style={{ 
                                width: 50,
                                height: 50,
                                borderRadius: 5,
                             }}
                        />

                        <View
                            style={{ 
                                flex: 1,
                                marginLeft: SIZES.radius,
                             }}
                        >
                             
                    <Text style={{ marginLeft:25,marginTop:20 }}>Distance :   5 km </Text>
                    <TouchableOpacity onPress={onPressFeedback} style={styles.defaultButton}>
                     {/* <Text style={{ color: '#FFFFFF', fontSize: 18, marginLeft:25}}> All </Text> */}
                     <Image source={require('../../assets/images/donationreciver/navnevi.png')} style={{ width: 18, height: 25, marginLeft:35}} />
                     
                </TouchableOpacity>
             
                        </View>

                        <View
                            style={{ 
                                height: 40,
                                width: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: COLORS.white,
                                backgroundColor: COLORS.transparentWhite1,
                             }}
                        >
                            <Image
                               
                                style={{ 
                                    width: 30,
                                    height: 30,
                                 }}
                            />

                        </View>

                     </TouchableOpacity>

                 </View>

            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
           {/* Map */}
           {renderMap()}

           {/* Header */}
           {renderHeaderButtons()}

           {/* Footer */}
           {renderInfo()}
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray2,
        backgroundColor: COLORS.white,
    }
})

export default Map;