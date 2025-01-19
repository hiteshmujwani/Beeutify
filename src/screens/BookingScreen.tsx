import {
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BookingCard from '../components/ui/BookingCard';
import axios from 'axios';
import {CANCEL_BOOKING, GET_MY_BOOKINGS} from '../constants/ApiUrls';
import { useSelector } from 'react-redux';

const BookingScreen = () => {
  const [allBookings, setAllBookings] = useState([]);
  const userData = useSelector((state:any)=>state.user)
  const [filteredBookings, setFilteredBookings] = useState([]); 
  const [selectedStatus, setSelectedStatus] = useState("confirmed"); 
  const status = ['confirmed', 'completed', 'cancelled']; 

  const handleRemoveBooking = async(item:any) => {
    // const updatedBookings :any= allBookings.map((element:any) =>
    //   element.id === item.id ? {...element, status: 'Cancelled'} : element
    // );
    // setAllBookings(updatedBookings);
    // handleSortByStatus(selectedStatus);
    const response = await axios.post(CANCEL_BOOKING,{bookingId:item._id})
    fetchAllBookings()
  };

  const handleSortByStatus = (item:any) => {
    const sortedBookings = item
      ? allBookings.filter((booking:any) => booking.status === item)
      : allBookings;
    setFilteredBookings(sortedBookings);
    setSelectedStatus(item);
  };

  const fetchAllBookings = async () => {
    try {
      const response = await axios.post(GET_MY_BOOKINGS,{userId:userData.user._id});
      setAllBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    fetchAllBookings();
  },[]); 

  useEffect(() => {
    handleSortByStatus(selectedStatus);
  }, [allBookings]); 

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-row gap-2 mb-3 overflow-x-scroll">
            {status.map((item, index) => (
              <TouchableOpacity
                key={index}
                className={`flex-1 ${
                  selectedStatus === item ? 'bg-[#ff8c42]' : 'bg-white'
                } !border-[#ff8c42] border-2 rounded-full p-2`}
                onPress={() => handleSortByStatus(item)}>
                <Text
                  className={`text-center text-lg font-medium ${
                    selectedStatus === item ? 'text-white' : 'text-[#ff8c42]'
                  }`}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            {filteredBookings.length > 0 ? (
              <FlatList
                data={filteredBookings}
                scrollEnabled={false}
                renderItem={({item}) => (
                  <BookingCard
                    handleRemoveBooking={handleRemoveBooking}
                    booking={item}
                  />
                )}
              />
            ) : (
              <Text className="text-center text-gray-500 mt-5">
                No bookings available.
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingScreen;
