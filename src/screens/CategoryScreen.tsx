import { View, Text, FlatList, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import shops from '../constants/Shops'
import ShopCard from '../components/ui/ShopCard'
import {  Searchbar } from 'react-native-paper'
import FilterIcon from '../assets/images/CustomIcons/filter-icon.svg'


const CategoryScreen = ({navigation,route}:any) => {
    const {categoryName} = route.params
    const [searchQuery,setSearchQuery] = useState('')
    const [showModal,setShowModal] = useState(false)
  return (
    <SafeAreaView className='flex-1'>
        <ScrollView>
    <View className='m-3'>
            <View className='flex flex-row items-center gap-2'>
            <View className="flex-1 !bg-white rounded-xl overflow-hidden">
              <Searchbar
                className="!bg-white"
                placeholder="Search..."
                placeholderTextColor={'#000000'}
                iconColor="#000000"
                onChangeText={e => setSearchQuery(e)}
                value={searchQuery}
                theme={{colors: {elevation: ''}}}
              />
            </View>
            <View className="bg-white h-full flex flex-row rounded-xl px-5 justify-center items-center">
              <TouchableOpacity className="bg-white rounded-xl " onPress={()=>setShowModal(!showModal)}>
                <FilterIcon />
              </TouchableOpacity>
            </View>
            </View>

            <View className='mt-4'>
            <FlatList scrollEnabled={false} data={shops} renderItem={({item})=>(<ShopCard item={item}/>)}/>
            </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default CategoryScreen