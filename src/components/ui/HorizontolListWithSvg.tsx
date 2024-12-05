import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HorizontolListWithSvg = ({item}:any) => {
  const navigation:any = useNavigation()
  return (
    <View className="flex items-center mr-5">
                      <TouchableOpacity
                        className=" bg-[#FF8C42]/10 p-5 rounded-xl"
                        onPress={() =>
                          navigation.navigate("Category", {
                            categoryName: item.label,
                          })
                        }>
                        {item.icon && <item.icon />}
                      </TouchableOpacity>
                      <Text className="text-[14px] font-bold">
                        {item.label}
                      </Text>
                    </View>
  )
}

export default HorizontolListWithSvg