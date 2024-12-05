import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Divider, Modal } from 'react-native-paper'
import axios from 'axios'
import { NEW_BOOKING } from '../constants/ApiUrls'
import displayNotification from '../services/NotificaionServices/Notificationservice'

const ReviewSummary = () => {
    const route = useRoute()
    const {data} :any= route.params
    const [visible,setVisible] = useState(false)
    const navigation :any= useNavigation()

    const handleBooking = async() =>{
        try {
            const bodyData = {
                user:data.user,
                shop:data.shop._id,
                services:data.services.map((item:any)=>item._id),
                date:new Date(data.date),
                time:data.time,
                totalAmount:data.totalAmount,
                status:'confirmed',
                specialists:data.shop.specialists[0]._id,
            }
            const response = await axios.post(NEW_BOOKING,bodyData)
            if(response.status == 200){
                setVisible(true)
            }
        } catch (error) {
            console.log("error while booking",error)
        }
    }
  return (
    <View className='relative flex-1'>
      <View className='flex gap-5 p-3'>
            <View className='p-5 bg-white rounded-xl flex gap-4'>
                <View className='flex justify-between flex-row'>
                    <Text className='font-bold text-xl text-black/60'>Shop</Text>
                    <Text className='font-bold text-xl'>{data?.shop?.name}</Text>
                </View>
                <View className='flex justify-between flex-row'>
                <Text className='font-bold text-xl text-black/60'>Address</Text>
                <Text className='font-bold text-xl'>{data?.shop?.contactInfo.address}</Text>
                </View>
                <View className='flex justify-between flex-row'>
                <Text className='font-bold text-xl text-black/60'>Name</Text>
                <Text className='font-bold text-xl'>Hitesh Mujwani</Text>
                </View>
                <View className='flex justify-between flex-row'>
                <Text className='font-bold text-xl text-black/60'>Phone</Text>
                <Text className='font-bold text-xl'>+91 9602681408</Text>
                </View>
                <View className='flex justify-between flex-row'>
                <Text className='font-bold text-xl text-black/60'>Booking Date</Text>
                <Text className='font-bold text-xl'>{`${new Date(data.date).toLocaleDateString()}`}</Text>
                </View>
                <View className='flex justify-between flex-row'>
                <Text className='font-bold text-xl text-black/60'>Booking Hours</Text>
                <Text className='font-bold text-xl'>{data?.time}:00 AM</Text>
                </View>
                <View className='flex justify-between flex-row'>
                <Text className='font-bold text-xl text-black/60'>Specialist</Text>
                <Text className='font-bold text-xl'>{data?.shop?.specialists[0].name}</Text>
                </View>
            </View>

            <View className='p-5 bg-white rounded-xl flex gap-4'>
                {data?.services.map((item:any)=>(
                    <View key={item._id} className='flex justify-between flex-row'>
                    <Text className='font-bold text-xl text-black/60'>{item.name}</Text>
                    <Text className='font-bold text-xl'>{item.price} ₹</Text>
                </View>
                ))}
                
                <Divider bold/>
                <View className='flex justify-between flex-row'>
                <Text className='font-bold text-xl text-black/60'>Total</Text>
                <Text className='font-bold text-xl'>{data.totalAmount} ₹</Text>
                </View>
            </View>
      </View>
      <View className='bg-white absolute bottom-0 p-5 w-full'>
        <Pressable className='bg-[#FF8C42] p-3 rounded-full' onPress={handleBooking}>
        <Text className='text-white font-extrabold text-2xl text-center'>Confirm Booking</Text>
        </Pressable>
      </View>

      {/* success full booking modal  */}
      <Modal visible={visible}   contentContainerStyle={{backgroundColor:"white",margin:25,borderRadius:10}}>
          <View className='flex p-3'>
            <View className='flex items-center'>
                <Image source={require('../assets/images/Frame15.png')} className='h-[350px] w-[350px]'/>
            </View>
            <View className='flex gap-2'>
            <Text className='text-center text-3xl font-extrabold text-[#FF8C42]'>Booking Successfull !</Text>
                <Text className='text-center text-2xl font-medium'>Your Booking Has Been Successfully Done</Text>
            </View>
            <View className='flex items-center mt-3'>
                <Pressable className='w-[50%] border-2 rounded-lg border-[#FF8C42] p-2' onPress={()=>{setVisible(false),navigation.navigate("MainTabs")}}><Text className='text-center text-xl text-[#FF8C42] font-bold'>Home</Text></Pressable>
            </View>
          </View>
        </Modal>
    </View>
  )
}

export default ReviewSummary