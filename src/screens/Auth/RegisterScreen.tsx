import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { REGISTER_USER } from '../../constants/ApiUrls';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../../store/slice/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
  const navigation:any = useNavigation();
  const userData = useSelector((state:any)=>state.user)
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

  const handleRegister = async() => {
    const { name, email, phone, password } = formData;

    if (!name || !email || !phone || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    const Response = await axios.post(REGISTER_USER,{...formData,deviceToken:userData.deviceToken})
    dispatch(setUserData({token:Response.data.token,user:Response.data.user}))
    AsyncStorage.setItem("beeutify_token",Response.data.token)
    Alert.alert('Success', 'Registered successfully!');
  };



  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold text-[#FF8C42] mb-6">Register</Text>

  
      <TextInput
        placeholder="Name"
        placeholderTextColor="#FF8C42"
        className="w-full border border-[#FF8C42] rounded-lg px-4 font-bold text-xl py-3 mb-4 text-[#FF8C42]"
        onChangeText={(value) => handleInputChange('name', value)}
        value={formData.name}
      />

  
      <TextInput
        placeholder="Email"
        placeholderTextColor="#FF8C42"
        keyboardType="email-address"
        className="w-full border border-[#FF8C42] rounded-lg px-4 font-bold text-xl py-3 mb-4 text-[#FF8C42]"
        onChangeText={(value) => handleInputChange('email', value)}
        value={formData.email}
      />


      <TextInput
        placeholder="Phone"
        placeholderTextColor="#FF8C42"
        keyboardType="phone-pad"
        className="w-full border border-[#FF8C42] rounded-lg px-4 font-bold text-xl py-3 mb-4 text-[#FF8C42]"
        onChangeText={(value) => handleInputChange('phone', value)}
        value={formData.phone}
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
        onPress={handleRegister}
        className="w-full bg-[#FF8C42] rounded-lg py-3"
      >
        <Text className="text-center text-white medium text-xl font-bold">Register</Text>
      </TouchableOpacity>

  
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        className="mt-4"
      >
        <Text className="text-[#FF8C42] text-base">
          Already have an account? <Text className="underline">Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
