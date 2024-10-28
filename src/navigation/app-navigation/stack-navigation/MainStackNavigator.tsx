// app-navigation/stack-navigation/MainStackNavigator.tsx
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigator from '../tab-navigation/MainTabNavigator';
import CategoryScreen from '../../../screens/CategoryScreen';
import React from 'react';

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
      {/* Other stack screens */}
    </MainStack.Navigator>
  );
}
