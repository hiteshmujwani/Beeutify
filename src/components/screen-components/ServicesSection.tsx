import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Divider } from 'react-native-paper';

const ServicesSection = ({ shop,selectedServices,setSelectedServices}: any) => {
  

  const toggleServiceSelection = (service: any) => {
    setSelectedServices((prev:any) => {
      if (prev.some((item:any) => item._id === service._id)) {
        
        return prev.filter((item:any) => item._id !== service._id);
      } else {
        
        return [...prev, service];
      }
    });
  };

  return (
    <View className="flex relative">
      <View className="flex flex-row justify-between">
        <Text className="text-2xl font-extrabold">Our Services</Text>
        <Text className="text-[#FF8C42] font-bold">See All</Text>
      </View>
      <Divider className="my-4" />
      <View>
        {shop.services.map((item: any) => {
          
          const isSelected = selectedServices.some((service:any) => service._id === item._id);

          return (
            <TouchableOpacity
              key={item._id}
              onPress={() => toggleServiceSelection(item)}
              className={`flex bg-white my-2 p-5 rounded-xl ${isSelected ? 'border-2' : ''}`}
              style={{ borderColor: isSelected ? '#FF8C42' : 'transparent' }}
            >
              <View className="flex flex-row justify-between items-start">
                <Text className="text-2xl font-extrabold">{item.name}</Text>
              </View>
              <View>
                <Text className="text-xl font-medium">{item.description}</Text>
              </View>
              <View>
                <Text className="text font-medium">
                  {item.duration} Min | {item.category}
                </Text>
              </View>
              <Text className="text-xl text-[#FF8C42] font-extrabold">₹ {item.price}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      
    </View>
  );
};

export default ServicesSection;
