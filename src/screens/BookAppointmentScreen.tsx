import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import React, { useState } from 'react';
import {Calendar,LocaleConfig} from 'react-native-calendars';
import { shopHours, shopSpecialists } from '../constants/Shops';
import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { NEW_BOOKING } from '../constants/ApiUrls';
import { useSelector } from 'react-redux';

const BookAppointmentScreen = () => {
  const [selectedTime,setSelectedTime]:any = useState()
  const [selectedDate,setSelectedDate]:any = useState()
  const navigation :any= useNavigation()
  const userData = useSelector((state:any)=>state.user)
  const route :any= useRoute()
  const {shop,selectedServices} = route.params


  const handleSubmit = async() =>{
    if(!selectedDate && !selectedTime){
      Alert.alert("Please Select Valid Date & Time")
      return
    }
    let total = 0;
    selectedServices.map((item:any)=>{total+= item.price})
    const date = selectedDate.timestamp
    const data = {
      user:userData.user._id,
      shop:shop,
      services:selectedServices,
      specialists:shop,  //hardcoded this will come as user selection,
      date:date,
      time:selectedTime.time,
      status:"confirmed",
      totalAmount:total
    }

    navigation.navigate('Review Summary',{data})
    
    
    // const response = await axios.post(NEW_BOOKING,data)
    // if(response.status == 200){
    //   navigation.navigate("MainTabs")
    // }
  }
  return (
    <View className='flex-1'>
      <View className="p-3 flex gap-2 flex-1">
        <Text className="text-2xl font-extrabold">Select Date</Text>
        <View className="rounded-xl overflow-hidden">
          <Calendar
          
          markedDates={{
            [selectedDate ? selectedDate.dateString : new Date]: {selected: true, marked: true, selectedColor: 'blue'}
          }}
            onDayPress={(day: any) => {
              setSelectedDate(day);
            }}
          />
        </View>
        <View className="flex mt-2 gap-2">
          <View className="flex flex-row justify-between">
            <Text className="text-2xl font-extrabold">Select Hours</Text>
            <Text className="text-[#FF8C42] font-bold">See All</Text>
          </View>
          <View>
          <FlatList showsHorizontalScrollIndicator={false} horizontal data={shopHours} renderItem={({item})=>(
            <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedTime(item)}
            className={`mr-2 px-6 py-3 rounded-full ${
              item.id == selectedTime?.id ? 'bg-[#FF8C42]' : 'bg-white'
            }  border-2 border-[#FF8C42]`}>
            <View className="flex flex-row items-center gap-2">
              
              <Text
                className={`text-[#FF8C42] ${
                  item.id == selectedTime?.id ? 'text-white' : 'text-[#FF8C42]'
                } font-bold`}>
                {item.time + ":00"}
              </Text>
            </View>
          </TouchableOpacity>
  )}/>
          </View>
        </View>
        <View className='mt-2 flex gap-2'>
        <View className="flex flex-row justify-between">
            <Text className="text-2xl font-extrabold">Select Specialist</Text>
            <Text className="text-[#FF8C42] font-bold">See All</Text>
          </View>
          <View>
          <FlatList horizontal showsHorizontalScrollIndicator={false} data={shopSpecialists} renderItem={({item})=>(
                <View className='flex justify-center items-center p-3 bg-white rounded-xl mr-2'>
                    <View>
                        <Image source={item.profile} className='h-[80px] w-[80px] rounded-xl'/>
                    </View>
                    <Text className='text-lg font-extrabold'>{item.name}</Text>
                    <Text className='text-sm font-semibold'>{item.designation}</Text>
                </View>
            )}/>
          </View>
          </View>
      </View>
      <View className='fixed bottom-0 bg-white p-6'>
            <TouchableOpacity className='bg-[#FF8C42] p-3 rounded-full' onPress={handleSubmit}><Text className='text-white font-extrabold text-2xl text-center'>Continue</Text></TouchableOpacity>
          </View>
    </View>
  );
};

export default BookAppointmentScreen;
