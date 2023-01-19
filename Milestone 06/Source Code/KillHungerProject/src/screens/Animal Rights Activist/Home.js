/* eslint-disable no-spaced-func */
/* eslint-disable react-hooks/rules-of-hooks */
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
    Image,
    FlatList,
    TextInput,
} from 'react-native';

import {
    HorizontalFoodCard,
    VerticalFoodCard,
} from "KillHungerProject/components";


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

const Section = ({title, onPress, children}) => {
    return (
        <View>
            {/* Header */}
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    marginTop: 30,
                    marginBottom: 20,
                }}
            >
                <Text style={{ flex: 1, ...FONTS.h3 }}>
                    {title}
                </Text>

                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
                        Show All
                    </Text>

                </TouchableOpacity>

            </View>

                { /* Content */ }
                {children}
        </View>
    )
}

const AnimalHome = ({ navigation }) => {

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)
    const [selectedMenuType, setSelectedMenuType] = React.useState(1)
    const [popular, setPopular] = React.useState([])
    const [recommends, setRecommends] = React.useState([])
    const [menuList, setMenuList] = React.useState([])

    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])

    //Handler
    function handleChangeCategory(categoryId, menuTypeId) {
        let selectedPopular = dummyData.menu.find(a => a.name == "Popular");
        let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended")
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)
        setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))
        setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))
        setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
    }
    

    function renderSearch() {
        return (
            <View
                style={{ 
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2,
                 }}
            >
                {/* Icon */}
                <Image
                    source={icons.search}
                    style={{ 
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black,
                     }}
                />

                {/* TextInput */}
                <TextInput
                    style={{ 
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body3,
                     }}
                     placeholder="search food..."
                />

                {/* Filter Button */}
                <TouchableOpacity
                     //onPress
                >
                    <Image
                        source={icons.filter}
                        style={{ 
                            height: 20,
                            width: 20,
                            tintColor: COLORS.black,
                         }}
                    />
                   
                </TouchableOpacity>

            </View>
        )
    }

    function renderMenuTypes() {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom: 20
                }}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0
                        }}
                        onPress={() => {
                            setSelectedMenuType(item.id)
                            handleChangeCategory
                            (selectedCategoryId, item.id)
                        }}
                    >

                        <Text
                            style={{
                                color: selectedMenuType == item.id ? COLORS.primary : COLORS.black, ...FONTS.h3
                            }}
                        >
                            {item.name}
                        </Text>

                    </TouchableOpacity>
                )}
            />
        )
    }

    function renderRecommendedSection() {
        return (
            <Section
                title="Recommended"
                onPress={() => navigation.navigate("FoodDetail")}
            >

                <FlatList
                    data={recommends}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 180,
                                width: SIZES.width * 0.85,
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                                paddingRight: SIZES.radius,
                                alignItems: 'center'
                            }}
                            imageStyle={{
                                marginTop: 35,
                                height: 150,
                                width: 150
                            }}
                            item={item}
                            onPress={() => navigation.navigate("FoodDetail")}
                        />
                    )}
                />

            </Section>
        )
    }

    function renderPopularSection() {
        return (
           <Section
                title="Today Special"
                onPress={() => navigation.navigate("FoodDetail")}
           >
                <FlatList
                    data={popular}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <VerticalFoodCard
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                                paddingRight: SIZES.radius,
                            }}
                            
                            item={item}
                            onPress={() => navigation.navigate("FoodDetail")}
                        />
                    )}
                />

           </Section> 
        )
    }

    function renderFoodCategories() {
        return (
            <FlatList
                    data={dummyData.categories}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <TouchableOpacity
                            style={{
                              flexDirection: 'row',
                              height: 55,
                              marginTop: SIZES.padding,
                              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                              marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0,  
                              paddingHorizontal: 8,
                              borderRadius: SIZES.radius,
                              backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2,
                            }}
                            onPress={() => {
                                setSelectedCategoryId(item.id)
                                handleChangeCategory(item.id,
                                selectedMenuType)
                            }}
                        >

                        <Image
                            source={item.icon}
                            style={{
                                marginTop: 5,
                                height: 50,
                                width: 50,
                            }}
                        />

                        <Text
                            style={{
                                alignSelf: 'center',
                                marginRight: SIZES.base,
                                color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
                                ...FONTS.h3,
                            }}
                        >
                            {item.name}

                        </Text>

                        </TouchableOpacity>
                    )}
                />
        )
    }

    function renderDeliveryTo() {
        return (
           <View
            style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding
            }}
           >

                <Text
                    style={{
                        color: COLORS.primary,
                        ...FONTS.body3
                    }}
                >
                    DELIVERY TO
                </Text>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                        alignItems: 'center'
                    }}
                >

                    <Text style={{ ...FONTS.h3 }}>
                        {dummyData?.myProfile?.address}
                    </Text>
                    <Image
                        source={icons.down_arrow}
                        style={{
                            marginLeft: SIZES.base,
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                        }}
                    />
                </TouchableOpacity>

           </View> 
        )
    }

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
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: COLORS.gray2,
                            borderRadius: SIZES.radius
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

            <View
                style={{ 
                    flex: 1
                 }}
            >
                {/* Search */}
                {renderSearch()}

                {/* List */}
                <FlatList
                    data={menuList}
                    keyExtractor={(item) => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View>
                            {/* Delivery To */}
                            {renderDeliveryTo()}

                            {/* Food Categories */}
                            {renderFoodCategories()}

                            {/* Today Special */}
                            {renderPopularSection()}

                            {/* Recommended */ }
                            {renderRecommendedSection()}

                            {/* Menu Type */}
                            {renderMenuTypes()}
                        </View>
                    }
                    renderItem={({item, index}) => {
                        return (
                            <HorizontalFoodCard
                                containerStyle={{ 
                                    height: 130,
                                    alignItems: 'center',
                                    marginHorizontal: SIZES.padding,
                                    marginBottom: SIZES.radius,
                                 }}
                                 imageStyle={{ 
                                    marginTop: 20,
                                    height: 110,
                                    width: 110,
                                  }}
                                  item={item}
                                  onPress={() => navigation.navigate("FoodDetail")}
                            />
                        )
                    }}
                    ListFooterComponent={
                        <View style={{ height: 200 }} />
                    }
                 />
            </View>  
            
            { /* footer */ }
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
                        top: -20,
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
                        backgroundColor: COLORS.primary,
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
                                    tintColor: COLORS.white,
                                    marginRight: 60,
                                    
                                 }}
                             />
                            <Text
                                style={{
                                    position: 'absolute',
                                    paddingRight: 200,
                                    fontSize: 20,
                                    color: COLORS.white,
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

export default AnimalHome;