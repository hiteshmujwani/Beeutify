import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import HorizontolList from './HorizontolList'

const FilterItem = ({data,icon,selected,setSelected,title}:any) => {
  return (
                    <View className="px-5 flex gap-4">
                      <Text className="text-2xl font-medium">{title}</Text>
                      <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={({item}) => (
                          <HorizontolList item={item} icon={icon} selected={selected} setSelected={setSelected}/>
                        )}
                      />
                    </View>
  )
}

export default FilterItem