

import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
 import { Signin, Signup, Forgot, LoginHome } from './src/screens/auth';
import { ReceiverHome, DisplayDonation,Displayselecteditem,DisplayMap,Feedbackfordonnaers,DisplayObtainedDonation,RequestDonations,Requestform,DisplayStatus,DeleteRequest,Updateform,SuccessRequestAlert,SuccessUpdateReqAlert,DisplayDeleteStatus} from './src/screens/Donation Receiver';

import {
    Donor_Welocme,
    Donor_Home,
    ThankYouScreen,
    ItemView,
    UpdateItem,
    UpdateSucessDonorAlert,
    DeleteDonorRequest,
    DeleteSucessDonorAlert,
} from './src/screens/Animal Donor';

import {
    Welcome,
    FoodDetail,
    MyCart,
    Success,
    DeliveryStatus,
    Map,
    Home
} from './src/screens/Animal Rights Activist';


import {
    ArticleHome,
    ArticlePage,
    ArticleDetails,
    Category,
    AddAtricle,
    AddsuccessArticleAlert,
    ArticleList,
    UpdateArticle,
    UpdateSucessArticleAlert,
    DeletesucessArticleAlert,
} from './src/screens/Article';


 import OnBoarding from './src/screens/onBoarding/OnBoarding';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'OnBoarding'}
            >

{/* onbording */}
                <Stack.Screen name="OnBoarding" component={OnBoarding} />


{/* auth */}
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="LoginHome" component={LoginHome} />

{/* donationreciver */}
                <Stack.Screen name="ReceiverHome" component={ReceiverHome} />
                <Stack.Screen name="DisplayDonation" component={DisplayDonation} />
                <Stack.Screen name="Displayselecteditem" component={Displayselecteditem} />
                <Stack.Screen name="DisplayMap" component={DisplayMap} />
                <Stack.Screen name="SuccessUpdateReqAlert" component={SuccessUpdateReqAlert} />
                <Stack.Screen name="SuccessRequestAlert" component={SuccessRequestAlert} />
                <Stack.Screen name="Feedbackfordonnaers" component={Feedbackfordonnaers} />
                <Stack.Screen name="DisplayObtainedDonation" component={DisplayObtainedDonation} />
                <Stack.Screen name="RequestDonations" component={RequestDonations} />
                <Stack.Screen name="Requestform" component={Requestform} />
                <Stack.Screen name="DisplayDeleteStatus" component={DisplayDeleteStatus} />
                <Stack.Screen name="DisplayStatus" component={DisplayStatus} />
                <Stack.Screen name="DeleteRequest" component={DeleteRequest} />
                <Stack.Screen name="Updateform" component={Updateform} />


{/* chanaka- donner */}
                <Stack.Screen name="Donor_Welcome" component={Donor_Welocme} />
                <Stack.Screen name="Donor_Home" component={Donor_Home} />
                <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} />
                <Stack.Screen name="ItemView" component={ItemView} />
                <Stack.Screen name="UpdateItem" component={UpdateItem} />
                <Stack.Screen name="UpdateSucessDonorAlert" component={UpdateSucessDonorAlert} />
                <Stack.Screen name="DeleteDonorRequest" component={DeleteDonorRequest} />
                <Stack.Screen name="DeleteSucessDonorAlert" component={DeleteSucessDonorAlert} /> 

{/* chanaka-animal right */}
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="FoodDetail" component={FoodDetail} />
                <Stack.Screen name="MyCart" component={MyCart} />
                <Stack.Screen name="Success" component={Success} />
                <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />
                <Stack.Screen name="Map" component={Map} />


  {/* waruni- user articale               */}
                <Stack.Screen name="ArticleHome" component={ArticleHome} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="ArticlePage" component={ArticlePage} />
                <Stack.Screen name="ArticleDetails" component={ArticleDetails} /> 


 {/* waruni- admin articale   */}
                <Stack.Screen name="AddAtricle" component={AddAtricle}/>
                <Stack.Screen name="AddsuccessArticleAlert" component={AddsuccessArticleAlert} />
                <Stack.Screen name="ArticleList" component={ArticleList} />
                <Stack.Screen name="UpdateArticle" component={UpdateArticle} />
                <Stack.Screen name="UpdateSucessArticleAlert" component={UpdateSucessArticleAlert} />
                <Stack.Screen name="DeletesucessArticleAlert" component={DeletesucessArticleAlert} /> 



            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

