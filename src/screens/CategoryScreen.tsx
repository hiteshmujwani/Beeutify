import {
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import shops from '../constants/Shops';
import ShopCard from '../components/ui/ShopCard';
import SearchBar from '../components/ui/SearchBar';

const CategoryScreen = ({navigation, route}: any) => {
  const {categoryName} = route.params;
  const CategoryShops = shops.filter(shop => shop.name.toLowerCase().includes(categoryName.toLowerCase()) || shop.services.includes(categoryName))
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-row items-center gap-2">
            <SearchBar navigation={navigation}/>
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
