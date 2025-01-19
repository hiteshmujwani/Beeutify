import { View, Text, Pressable, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Divider, Modal } from 'react-native-paper'
import axios from 'axios'
import { NEW_BOOKING } from '../constants/ApiUrls'
import RazorpayCheckout from 'react-native-razorpay';

const ReviewSummary = () => {
    const route = useRoute()
    const {data} :any= route.params
    const [visible,setVisible] = useState(false)
    const navigation :any= useNavigation()

    const handleBooking = async() =>{
        try {
          console.log(data)
            const bodyData = {
                user:data.user,
                shop:data.shop._id,
                services:data.services.map((item:any)=>item._id),
                date:new Date(data.date),
                time:data.time,
                totalAmount:data.totalAmount,
                status:'confirmed',
            }

            var options :any= {
                description: 'Booking',
                image: 'https://i.imgur.com/3g7nmJC.jpg',
                currency: 'INR',
                key: 'rzp_test_PGYjW94UUcCgL1',
                amount: data.totalAmount * 100,
                name: 'Beeutify',
                order_id: '',//Replace this with an order_id created using Orders API.
                prefill: {
                  email: 'hiteshmujwani@gmail.com',
                  contact: '9602681408',
                  name: 'hitesh mujwani'
                },
                theme: {color: '#53a20e'}
              }
              RazorpayCheckout.open(options).then((data) => {
                
                setVisible(true)
              }).catch((error) => {
                // handle failure
                Alert.alert(`Error: ${error.code} | ${error.description}`);
              });
              const response = await axios.post(NEW_BOOKING,bodyData)
           
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
                <Text className='font-bold text-xl'>{data?.shop?.contactInfo.address.substring(21)}</Text>
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