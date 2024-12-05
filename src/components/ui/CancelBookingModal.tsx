import { View, Text,Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Divider } from 'react-native-paper'

const CancelBookingModal = ({showModal,setShowModal,handleRemoveBooking}:any) => {
  return (
    <Modal visible={showModal} onDismiss={()=>setShowModal(!showModal)} animationType='slide' transparent>
        <View className='flex-1 bg-black/50 justify-end'>
        <View className='bg-white p-5 rounded-t-3xl'>
            <View className='flex gap-4 px-10'>
                <Text className='text-3xl font-bold text-center text-red-500 '>Cancel Booking ?</Text>
                <Divider className='my-2 '/>
                <Text className='text-xl font-bold text-center'>Are you sure want to cancel your booking ?</Text>
                <Text className='text-base text-black/50 text-center'>Only 80% of the money you can refund from your payment according to our policy</Text>
            </View>
            <View className='flex flex-row gap-5 my-4'>
            <TouchableOpacity className='flex-1 !bg-[#FF8C42]/20 p-5 justify-center items-center rounded-full' onPress={()=>setShowModal(!showModal)}><Text className='!text-xl font-medium text-[#ff8c42] text-center'>Cancel</Text></TouchableOpacity>
            <TouchableOpacity className='flex-1 !bg-[#FF8C42] p-5 justify-center items-center rounded-full' onPress={()=>setShowModal(!showModal)}><Text className='!text-xl font-medium text-white text-center' onPress={()=>{handleRemoveBooking(),setShowModal(!showModal)}}>Yes, Cancel</Text></TouchableOpacity>
            </View>
            </View></View>
    </Modal>
  )
}

export default CancelBookingModal