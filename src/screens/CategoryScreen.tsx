import {View, FlatList, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import shops from '../constants/Shops';
import ShopCard from '../components/ui/ShopCard';
import SearchBar from '../components/ui/SearchBar';
import { useSelector } from 'react-redux';

const CategoryScreen = ({navigation, route}: any) => {
  const {categoryName} = route.params;
  const allShops = useSelector((state:any)=>state.shops)
  const CategoryShops = allShops.filter(
    (shop:any) =>
      shop.name.toLowerCase().includes(categoryName.toLowerCase()) ||
      shop.services.some((s:any) => s.name.toLowerCase().includes(categoryName.toLowerCase())),
  );
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-row items-center gap-2">
            <SearchBar navigation={navigation} />
          </View>

          <View className="mt-4">
            <FlatList
              scrollEnabled={false}
              data={CategoryShops}
              renderItem={({item}) => <ShopCard item={item} />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;
