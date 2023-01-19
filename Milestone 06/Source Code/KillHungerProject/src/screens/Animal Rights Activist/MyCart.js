/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

import {
    FoodHeader,
    IconButton,
    CartQuantityButton,
    StepperInput,
} from "KillHungerProject/components";
import { FONTS, COLORS, SIZES, icons, dummyData } from "KillHungerProject/constants";
import { SwipeListView } from 'react-native-swipe-list-view';
import { FooterButton } from "KillHungerProject/components";

const MyCart = ({ navigation }) => {

    const [myCartList, setMyCartList] = React.useState(dummyData.myCart)

    //Handler

    function updateQuantityHandler(newQty, id) {
        const newMyCartList = myCartList.map(cl => (
            cl.id === id ? {...cl, qty: newQty} : cl
        ))

        setMyCartList(newMyCartList)
    }

    function removeMyCartHandler(id) {
        let newMyCartList = [...myCartList]
        const index = newMyCartList.findIndex(cart => cart.id === id)
        newMyCartList.splice(index, 1)
        setMyCartList(newMyCartList)
    }

    function renderHeader() {
        return (
            <FoodHeader
                title="MY CART"
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
                        onPress={() => navigation.goBack()}
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

    function renderCartList() {
        return (
            <SwipeListView
                data={myCartList}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{ 
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2,
                 }}
                 disableRightSwipe={true}
                 rightOpenValue={-75}
                 renderItem={(data, rowMap) => (
                    <View
                        style={{ 
                            height: 100,
                            backgroundColor: COLORS.lightGray2,
                            ...styles.cartItemContainer,
                         }}
                    >

                    {/* Food Image */}
                    <View
                        style={{ 
                            width: 90,
                            height: 100,
                            marginLeft: -10,
                         }}
                    >
                        <Image
                            source={data.item.image}
                            resizeMode="contain"
                            style={{ 
                                width: "100%",
                                height: "100%",
                                position: 'absolute',
                                top: 10,
                             }}
                        />

                    </View>
                        {/* Food Info */}
                        <View
                            style={{ 
                                flex: 1,
                             }}
                        >
                            <Text style={{ ...FONTS.body3, color: COLORS.black }}>{data.item.name}</Text>
                        </View>
                        {/* quantity Info */}
                        <StepperInput
                            containerStyle={{ 
                                height: 50,
                                width: 125,
                                backgroundColor: COLORS.lightGreen,
                             }}
                             value={data.item.qty}
                             onAdd={() => updateQuantityHandler(data.item.qty + 1, data.item.id)}
                             onMinus={() => {
                                if (data.item.qty > 1) {
                                    updateQuantityHandler(data.item.qty - 1, data.item.id)
                                }
                             }}
                        />
                    </View>
                 )}
                 renderHiddenItem={(data, rowMap) => (
                    <IconButton
                        containerStyle={{ 
                            flex: 1,
                            justifyContent: 'flex-end',
                            backgroundColor: COLORS.primary,
                            ...styles.cartItemContainer,
                         }}
                         icon={icons.delete_icon}
                         iconStyle={{ 
                            marginRight: 10,
                          }}
                          onPress={() => removeMyCartHandler(data.item.id)}
                    />
                 )}
            />
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

            {/* Cart List */}
            {renderCartList()}

            {/* Footer */}
            <FooterButton
                onPress={() => navigation.replace("Success")}
            />
    
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
    }
})

export default MyCart;