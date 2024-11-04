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
import {bookings} from '../constants/Bookings';

const BookingScreen = () => {
  const [allBookings, setAllBookings] = useState(bookings); // Store all bookings as a constant
  const [filteredBookings, setFilteredBookings] = useState(bookings); // Displayed list
  const [selectedStatus, setSelectedStatus] = useState();
  const status = ['Upcoming', 'Completed', 'Cancelled'];

  const handleRemoveBooking = (item: any) => {
    const updatedBookings = allBookings.map(element =>
      element.id === item.id ? {...element, status: 'Cancelled'} : element,
    );
    setAllBookings(updatedBookings);
    handleSortByStatus(selectedStatus); // Reapply filter after removing
  };

  const handleSortByStatus = (item: any) => {
    const sortedBookings = item
      ? allBookings.filter(booking => booking.status === item)
      : allBookings;
    setFilteredBookings(sortedBookings);
    setSelectedStatus(item);
  };

  useEffect(() => {
    setFilteredBookings(allBookings);
  }, [allBookings]);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-row gap-2 mb-3">
            {status.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  className={`flex-1 ${
                    selectedStatus == item ? 'bg-[#ff8c42]' : 'bg-white'
                  } !border-[#ff8c42] border-2 rounded-full p-2`}
                  onPress={() => handleSortByStatus(item)}>
                  <Text
                    className={`text-center text-lg font-medium ${
                      selectedStatus == item ? 'text-white' : ' text-[#ff8c42]'
                    } `}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View>
            {filteredBookings.length > 0 && (
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
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingScreen;
