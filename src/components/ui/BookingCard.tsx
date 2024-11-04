import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Button, Divider, Switch } from 'react-native-paper'
import { Colors } from '../../constants/Colors'
import { Link } from '@react-navigation/native'
import CancelBookingModal from './CancelBookingModal'

const BookingCard = ({booking,handleRemoveBooking}:any) => {
    const [reminder,setReminder] = useState(false)
    const [showModal,setShowModal] = useState(false)
  return (
    <View className='mb-4 bg-white p-3 rounded-xl'>
    <View className='flex flex-row justify-between items-center'>
      <Text className='font-bold'>{new Date(booking.date).toDateString()}</Text>
      {booking?.status == "Upcoming" ? <View className='flex flex-row gap-1 items-center'>
        <Text className=' font-bold'>Remind Me</Text>
        <Switch value={reminder} onValueChange={(e)=>setReminder(!reminder)} trackColor={{true:Colors.light.primary}} thumbColor={reminder ? Colors.light.primary : "#ffffff"}/>
      </View> : <View className={' px-2 py-1 !rounded-lg '} style={{backgroundColor:booking?.status == "Completed" ? "#22c55e" : "#ef4444"}}><Text className='text-white font-bold text-sm'>{booking?.status}</Text></View>}
    </View>
    <Divider className='my-4'/>
    <View className='flex-row flex gap-2'>
      <View>
        <Image className='h-[120px] w-[120px] rounded-3xl' source={require('../../assets/images/ShopProfileImage/Salon_1.png')}/>
      </View>
      <View className='flex-1 justify-between p-1 gap-1'>
        <Text className='text-xl font-extrabold'>{booking?.shopName}</Text>
        <Text className='text-base text-black/50 font-bold'>{booking?.shopAddress}</Text>
        <Text className='font-bold '>Services:</Text>
        <Text className='font-lighter text-[#FF8C42]'>{booking?.services?.join(",")}</Text>
      </View>
    </View>
    {booking?.status != "Cancelled" && <Divider className='my-4'/>}
    {booking?.status == "Completed" && <Button textColor='#FF8C42' className='!border-2 !border-[#FF8C42]' onPress={()=>{console.log(booking.id)}}>View E-Reciept</Button> } 
    {booking?.status == "Upcoming" && <View className='flex flex-row px-3 gap-4'>
        <Button textColor='#FF8C42' className='!border-2 !border-[#FF8C42] !flex-1' onPress={()=>setShowModal(!showModal)}>Cancel Booking</Button>
        <Button textColor='#ffffff' className='!border-2 !bg-[#ff8c42] !flex-1'>View E-Reciept</Button>
    </View>
    }
    <CancelBookingModal showModal={showModal} setShowModal={setShowModal} handleRemoveBooking={()=>handleRemoveBooking(booking)}/>
  </View>
  )
}

export default BookingCard