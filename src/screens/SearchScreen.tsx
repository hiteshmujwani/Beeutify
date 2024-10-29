import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from '../components/ui/SearchBar';
import FilterModal from '../components/ui/FilterModal';
import shops from '../constants/Shops';
import ShopCard from '../components/ui/ShopCard';

const SearchScreen = ({navigation}: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [searchResult, setSearchResult] = useState('');

  const SearchByQuery = () => {
    const FilteredArray: any = shops.filter(shop =>
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setSearchResult(FilteredArray);
  };

  useEffect(() => {
    if (searchQuery.length >= 1) {
      SearchByQuery();
    }
  }, [searchQuery]);

  return (
    <SafeAreaView className=" flex-1">
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-row gap-2">
            <SearchBar
              navigation={navigation}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          </View>
          {searchQuery.length > 0 && (
            <View className="flex flex-row justify-between items-center mt-4">
              <Text className="text-xl font-extrabold">
                Results "
                <Text className="text-xl font-extrabold text-[#FF8C42]">
                  {searchQuery}
                </Text>
                "
              </Text>
              <Text className="text-xl font-extrabold text-[#FF8C42]">
                {searchResult.length} founds
              </Text>
            </View>
          )}
          <View className="mt-4">
            <FlatList
              scrollEnabled={false}
              data={searchResult}
              renderItem={({item}) => <ShopCard item={item} />}
            />
          </View>
          <FilterModal setShowModal={setShowModal} showModal={showModal} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
