import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

type ShopItemProps = {
    item: {
      ShopProfileImage: any; // Adjust type according to your image source
      name: string;
      location: string;
      distance: number;
      rating: number;
      id: string;
    };
  };

const ShopCard = ({item}:ShopItemProps) => {
  return (
    <View className="bg-white mb-6 p-4 rounded-2xl flex flex-row gap-3">
                    <Image
                      className="h-[80px] w-[80px] rounded-2xl"
                      source={item.ShopProfileImage}
                    />
                    <View className="flex-1 flex-row justify-between">
                      <View className="flex gap-2">
                        <Text className="text-lg font-extrabold">
                          {item.name}
                        </Text>
                        <Text className="text-sm text-black/60 font-bold">
                          {item.location.substring(0, 20)}...
                        </Text>
                        <View className="flex flex-row gap-4">
                          <View className="flex flex-row items-center gap-1">
                            <Icon
                              name="location-sharp"
                              size={15}
                              color={'#FF8C42'}
                            />
                            <Text className="text-sm font-bold">
                              {item.distance} Km
                            </Text>
                          </View>
                          <View className="flex flex-row items-center gap-1">
                            <Icon name="star" size={15} color={'#FF8C42'} />
                            <Text className="text-sm font-bold">
                              {item.rating}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <Icon
                        name={item.id == '1' ? 'bookmark' : 'bookmark-outline'}
                        size={25}
                        color={'#FF8C42'}
                      />
                    </View>
                  </View>
  )
}

export default ShopCard