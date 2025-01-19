import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from '../components/ui/SearchBar';
import FilterModal from '../components/ui/FilterModal';
// import shops from '../constants/Shops';
import ShopCard from '../components/ui/ShopCard';
import {Distance, Ratings} from '../constants/OtherData';
import services from '../constants/Services';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { SEARCH_SHOPS } from '../constants/ApiUrls';

const SearchScreen = ({navigation}: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const token = useSelector((state:any)=> state.user.token)
  const [searchResult, setSearchResult]: any = useState([]);
  // const [filterQuery, setFilterQuery] = useState({
  //   service: services[0],
  //   rating: Ratings[0],
  //   distance: Distance[0],
  // });

  const SearchByQuery = async() => {

    const response = await axios.get(`${SEARCH_SHOPS}?query=${searchQuery}`,{
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data)
        setSearchResult(response.data.shops);
    // const FilteredArray: any = shops.filter((shop:any) =>
    //   console.log(shop)
    //   // shop.name.toLowerCase().includes(searchQuery.toLowerCase()),
    
    // );
  };

  // const handleFilter = (filter: boolean) => {
  //   if (filter) {
  //     let filteredArray = [];
  //     if (searchResult.length > 0) {
  //       filteredArray = searchResult.filter(
  //         (
  //           shop: any, //only service based filter is working will add more in future
  //         ) => shop.services.includes(filterQuery.service.label),
  //       );
  //     } else {
  //       filteredArray = shops.filter((shop: any) =>
  //         shop.services.includes(filterQuery.service.label),
  //       );
  //     }
  //     setSearchResult(filteredArray);
  //     setShowModal(!showModal);
  //   } else {
  //     SearchByQuery();
  //     setShowModal(!showModal);
  //   }
  // };

  useEffect(() => {
      SearchByQuery();
  }, [searchQuery]);

  return (
    <SafeAreaView className="flex-1">
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
            {searchResult.length > 0 ? (
              <FlatList
                scrollEnabled={false}
                data={searchResult}
                renderItem={({item}) => <ShopCard item={item} />}
              />
            ) : (
              <View className="flex-1 justify-center items-center">
                <Text>No Shop</Text>
              </View>
            )}
          </View>
          {/* <FilterModal
            setShowModal={setShowModal}
            showModal={showModal}
            selected={filterQuery}
            setSelected={setFilterQuery}
            handleFilter={handleFilter}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
