import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logoutUser } from '../../store/slice/userSlice'; 
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation:any = useNavigation();
  const user = useSelector((state: any) => state.user.user); 

  const handleLogout = async () => {
    try {
      
      await AsyncStorage.removeItem('jwtToken');
      
      dispatch(logoutUser());
     
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View className="flex-1 bg-white p-4">
    
      <View className="flex items-center mt-8">
        <Image
          source={
            require('../assets/images/avtar.png')
          }
          className="w-24 h-24 rounded-full border-2 border-black"
        />
        <Text className="mt-4 text-xl font-semibold text-black">{user?.name || 'User Name'}</Text>
      </View>

 
      <View className="mt-6 px-4">
        <View className="mb-4">
          <Text className="text-sm text-gray-500">Email</Text>
          <Text className="text-lg text-black">{user?.email || 'example@example.com'}</Text>
        </View>
        <View className="mb-4">
          <Text className="text-sm text-gray-500">Phone</Text>
          <Text className="text-lg text-black">{user?.phone || '+91 1234567890'}</Text>
        </View>
      </View>

 
      <View className="flex-1 justify-end mb-6">
        <TouchableOpacity
          className="bg-[#FF8C42] py-3 mx-4 rounded-md"
          onPress={handleLogout}
        >
          <Text className="text-center text-white font-bold">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
