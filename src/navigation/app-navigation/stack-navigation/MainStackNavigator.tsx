// app-navigation/stack-navigation/MainStackNavigator.tsx
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigator from '../tab-navigation/MainTabNavigator';
import CategoryScreen from '../../../screens/CategoryScreen';
import React from 'react';
import SearchScreen from '../../../screens/SearchScreen';
import ShopDetailsScreen from '../../../screens/ShopDetailsScreen';
import BookAppointmentScreen from '../../../screens/BookAppointmentScreen';
import ReviewSummary from '../../../screens/ReviewSummary';

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator () {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{headerShown: false}}
      />
      <MainStack.Screen name="Category" component={CategoryScreen} options={({route}:any)=>({title:route.params.categoryName,headerTitleStyle:{fontWeight:"600",fontSize:22,}})} />
      <MainStack.Screen name="Search" component={SearchScreen} options={{headerTitleStyle:{fontWeight:"600",fontSize:22,}}} />
      <MainStack.Screen name="ShopDetail" component={ShopDetailsScreen} options={{headerShown:false}} />
      <MainStack.Screen name="Book-Appointment" component={BookAppointmentScreen} />
      <MainStack.Screen name="Review Summary" component={ReviewSummary} />
      {/* Other stack screens */}
    </MainStack.Navigator>
  );
}
