import { View, FlatList, SafeAreaView, ScrollView, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import BookingCard from '../components/ui/BookingCard';
import { bookings } from '../constants/Bookings';



const BookingScreen = () => {
  const [allBookings, setAllBookings]: any = useState([])
  const [selectedSatus,setSelectedStatus]:any = useState()
  const status = ["Upcoming","Completed","Cancelled"]

  const handleRemoveBooking = (item: any) => {
    const updatedBookings = allBookings.map((element: any) =>
      element.id === item.id ? { ...element, status: "Cancelled" } : element
    );
    setAllBookings(updatedBookings);
  }

  const handleSortByStatus = (item:any) =>{
    setSelectedStatus(item)
    setAllBookings((prev:any)=> prev.filter((booking:any) => booking.status == item))
  }

  useEffect(() => {
    if (allBookings.length > 0) { return } else { setAllBookings(bookings) }
  })
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className='m-3'>
          <View className='flex flex-row gap-2 my-3'>
            {status.map((item)=>{
              return <TouchableOpacity className={`flex-1 !border-[#ff8c42] border-2 rounded-full p-3`} onPress={()=>handleSortByStatus(item)}><Text className={`text-center text-lg font-medium text-[#ff8c42]`}>{item}</Text></TouchableOpacity>
            })}
          </View>
          <View>
          {allBookings.length > 0 && <FlatList data={allBookings} scrollEnabled={false} renderItem={({ item }) => <BookingCard handleRemoveBooking={handleRemoveBooking} booking={item} />} />}
          </View>  
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingScreen;
