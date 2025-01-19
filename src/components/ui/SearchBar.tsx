import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import FilterIcon from '../../assets/images/CustomIcons/filter-icon.svg';

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  navigation,
  showModal,
  setShowModal,
}: any) => {
  return (
    <>
      <View className="flex-1 !bg-white rounded-xl overflow-hidden ">
        <Searchbar
          className="!bg-white"
          placeholder="Search Salon, Parlour & Spas..."
          placeholderTextColor={'#000000'}
          iconColor="#000000"
          onChangeText={e => setSearchQuery(e.trimStart())}
          onPress={() => navigation.navigate('Search')}
          autoFocus={setShowModal ? true : false}
          value={searchQuery}
          theme={{colors: {elevation: ''}}}
        />
      </View>
      {/* <View className="bg-white  h-full flex flex-row rounded-xl px-5 justify-center items-center">
        <TouchableOpacity
          className="bg-white rounded-xl"
          onPress={() => {
            navigation.navigate('Search'),
              setShowModal && setShowModal(!showModal);
          }}>
          <FilterIcon />
        </TouchableOpacity>
      </View> */}
    </>
  );
};

export default SearchBar;
