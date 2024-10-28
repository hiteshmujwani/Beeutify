import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Button,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import shops from '../constants/Shops';
import ShopCard from '../components/ui/ShopCard';
import {Divider, Searchbar} from 'react-native-paper';
import FilterIcon from '../assets/images/CustomIcons/filter-icon.svg';
import services from '../constants/Services';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Distance, Ratings} from '../constants/OtherData';

const CategoryScreen = ({navigation, route}: any) => {
  const {categoryName} = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-row items-center gap-2">
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
              <TouchableOpacity
                className="bg-white rounded-xl "
                onPress={() => setShowModal(!showModal)}>
                <FilterIcon />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-4">
            <FlatList
              scrollEnabled={false}
              data={shops}
              renderItem={({item}) => <ShopCard item={item} />}
            />
          </View>

          <Modal visible={showModal} animationType="slide" transparent>
            <View className="!h-[400px] flex-1 justify-end bg-black/50">
              <View className="bg-white rounded-t-3xl ">
                <View className="flex">
                  <Text
                    className="text-2xl font-bold text-center p-3"
                    onPress={() => {
                      setShowModal(!showModal);
                    }}>
                    Filter
                  </Text>
                  <Divider className="mx-5 my-3" />
                  <View className="flex gap-6 my-4">
                    <View className="px-5 flex gap-4">
                      <Text className="text-2xl font-medium">Category</Text>
                      <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={services}
                        renderItem={({item, index}) => (
                          <View
                            key={index}
                            className={`mr-2 px-6 py-3 rounded-full ${
                              item.id == 0 ? 'bg-[#FF8C42]' : 'bg-white'
                            }  border-2 border-[#FF8C42]`}>
                            <TouchableOpacity className="flex flex-row items-center gap-2 justify-center">
                              <Text
                                className={`text-[#FF8C42] ${
                                  item.id == 0 ? 'text-white' : 'text-[#FF8C42]'
                                } font-bold`}>
                                {item.label}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </View>
                    <View className="px-5 flex gap-4">
                      <Text className="text-2xl font-medium">Rating</Text>
                      <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Ratings}
                        renderItem={({item, index}) => (
                          <View
                            key={index}
                            className={`mr-2 px-6 py-3 rounded-full ${
                              item.id == 0 ? 'bg-[#FF8C42]' : 'bg-white'
                            }  border-2 border-[#FF8C42]`}>
                            <TouchableOpacity className="flex flex-row items-center gap-2 justify-center">
                              <Icon
                                name="star"
                                color={item.id == 0 ? '#ffffff' : '#FF8C42'}
                              />
                              <Text
                                className={`text-[#FF8C42] ${
                                  item.id == 0 ? 'text-white' : 'text-[#FF8C42]'
                                } font-bold`}>
                                {item.label}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </View>
                    <View className="px-5 flex gap-4">
                      <Text className="text-2xl font-medium">Distance</Text>
                      <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Distance}
                        renderItem={({item, index}) => (
                          <View
                            key={index}
                            className={`mr-2 px-6 py-3 rounded-full ${
                              item.id == 0 ? 'bg-[#FF8C42]' : 'bg-white'
                            }  border-2 border-[#FF8C42]`}>
                            <TouchableOpacity className="flex flex-row items-center gap-2 justify-center">
                              <Text
                                className={`text-[#FF8C42] ${
                                  item.id == 0 ? 'text-white' : 'text-[#FF8C42]'
                                } font-bold`}>
                                {item.label}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      />
                    </View>
                  </View>
                  <Divider className="mx-5 my-3" />
                  <View className="flex flex-row my-4 px-8 py-3  gap-5">
                    <TouchableOpacity className="flex-1 items-center justify-center p-5 rounded-full bg-[#FF8C42]/20 ]">
                      <Text className="text-xl font-medium text-[#FF8C42]">
                        Reset
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 items-center justify-center bg-[#ff8c42] rounded-full p-5">
                      <Text className="text-xl font-medium text-white">
                        Apply Filter
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;
