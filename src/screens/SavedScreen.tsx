import {View, Text} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import ShopCard from '../components/ui/ShopCard';
import { handleSaveShop } from '../../store/slice/SavedShopSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import HorizontolList from '../components/ui/HorizontolList';
import services from '../constants/Services';

const SavedScreen = ({navigation}:any) => {
  const savedShops = useSelector((state:any)=>state.saved)
  const dispatch = useDispatch()
  const [selectedService,setSelectedService] = useState("All")
  const [savedShopsByservice,setSavedShopsByservice] = useState('')
  const filterByService = (serviceName:any) =>{
    const filteredArray = savedShops.filter((shop:any)=> shop.services.includes(serviceName))
    setSelectedService(serviceName)
    setSavedShopsByservice(filteredArray)
  }
  
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView >
    <View className='m-3'>
      <View className='my-4'>
        <FlatList horizontal data={services} renderItem={({item})=>(<HorizontolList item={item} selected={selectedService} setSelected={filterByService}/>)}/>
      </View>
      <FlatList scrollEnabled={false} data={savedShopsByservice.length > 0 ? savedShopsByservice : savedShops} renderItem={({item})=>(
        <ShopCard item={item} savedShops={savedShops} toggleSaveShop={(item:any)=>dispatch(handleSaveShop(item))}/>
      )}/>
    </View>
    </ScrollView>
    </SafeAreaView>
    
  );
};

export default SavedScreen;
