import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_LOGIN } from '../../constants/ApiUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserData } from '../../../store/slice/userSlice';

const LoginScreen = () => {
  const navigation:any = useNavigation();
  const deviceToken = useSelector((state:any)=>state.user.deviceToken)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleInputChange = (field:any, value:any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = async() => {
    const { email, password } = formData;
    

    if ( !email || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    const response = await axios.post(USER_LOGIN,{email,password,deviceToken})
   
    AsyncStorage.setItem("beeutify_token",response.data.token)
    dispatch(setUserData({token:response.data.token,user:response.data.user}))
    Alert.alert('Success', 'Registered successfully!');
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold text-[#FF8C42] mb-6">Login</Text>

    
      <TextInput
        placeholder="Email"
        placeholderTextColor="#FF8C42"
        keyboardType="email-address"
        className="w-full border border-[#FF8C42] rounded-lg px-4 font-bold text-xl py-3 mb-4 text-[#FF8C42]"
        onChangeText={(value) => handleInputChange('email', value)}
        value={formData.email}
      />

    
      <TextInput
        placeholder="Password"
        placeholderTextColor="#FF8C42"
        secureTextEntry
        className="w-full border border-[#FF8C42] rounded-lg px-4 font-bold text-xl py-3 mb-4 text-[#FF8C42]"
        onChangeText={(value) => handleInputChange('password', value)}
        value={formData.password}
      />

    
      <TouchableOpacity
        onPress={handleLogin}
        className="w-full bg-[#FF8C42] rounded-lg py-3"
      >
        <Text className="text-center text-white medium text-xl font-bold">Login</Text>
      </TouchableOpacity>

 
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        className="mt-4"
      >
        <Text className="text-[#FF8C42] text-base">
          Don't have an account? <Text className="underline">Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
