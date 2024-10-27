import {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Badge, Searchbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import services from '../constants/Services';
import FilterIcon from '../assets/images/CustomIcons/filter-icon.svg';
import shops from '../constants/Shops';
import Swiper from 'react-native-swiper';
import offer_1 from '../assets/images/offer_1.png';
import offer_2 from '../assets/images/offer_2.png';
import offer_3 from '../assets/images/offer_3.png';
export default function HomeScreen({navigation}: any) {
  const [searchQuery, setSearchQuery] = useState('');
  const images = [offer_1, offer_2, offer_3];

  return (
    <SafeAreaView className=" flex-1">
      <ScrollView>
        <View className="m-3">
          {/* Header  */}
          <View className="flex flex-row gap-2 justify-between items-center">
            <View className="flex flex-row gap-3">
              <TouchableOpacity className="h-[50px] w-[50px] rounded-2xl overflow-hidden bg-red-400 ">
                <Image
                  className="h-full w-full"
                  source={require('../assets/images/avtar.png')}
                />
              </TouchableOpacity>
              <View className="flex">
                <Text className="text-lg font-medium text-black/50">
                  Hello,
                </Text>
                <Text className="text-xl font-bold text-black">
                  Hitesh Mujwani
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity className="relative">
                <Icon
                  name="notifications-outline"
                  className=""
                  size={30}
                  color={'#000000'}
                />
                <Badge className="!bg-orange-500 font-bold absolute top-[-5px] right-[-5px]">
                  5
                </Badge>
              </TouchableOpacity>
            </View>
          </View>
          {/* Search And Filter Section */}
          <View className="flex flex-row items-center gap-2 mt-4">
            <View className="flex-1 !bg-white rounded-xl overflow-hidden">
              <Searchbar
                className="!bg-white"
                placeholder="Search Salon, Parlour & Spas..."
                placeholderTextColor={'#000000'}
                iconColor="#000000"
                onChangeText={e => setSearchQuery(e)}
                value={searchQuery}
                theme={{colors: {elevation: ''}}}
              />
            </View>
            <View className="bg-white h-full flex flex-row rounded-xl px-5 justify-center items-center">
              <TouchableOpacity className="bg-white rounded-xl ">
                <FilterIcon />
              </TouchableOpacity>
            </View>
          </View>

          {/* Special Offer Section  */}
          <View className="flex-1 rounded-xl overflow-hidden justify-center items-center mt-4">
            <Swiper
              loop
              width={360}
              height={200}
              autoplayTimeout={3}
              autoplay
              pagingEnabled={false}
              paginationStyle={{display: 'none'}}>
              {images.map((item, index) => (
                <View
                  key={index}
                  className="justify-center h-[200px] w-[360px] items-center rounded-xl overflow-hidden">
                  <Image
                    source={item}
                    className="w-full h-full object-contain"
                  />
                </View>
              ))}
            </Swiper>
          </View>

          {/* Services List  */}
          <View className="mt-6">
            <FlatList
              data={services}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                if (item.id != 0) {
                  return (
                    <View className="flex items-center  mr-5 gap-2">
                      <TouchableOpacity className=" bg-[#FF8C42]/10 p-5 rounded-xl">
                        {item.icon && <item.icon />}
                      </TouchableOpacity>
                      <Text className="text-[14px] font-bold">{item.name}</Text>
                    </View>
                  );
                } else {
                  return null;
                }
              }}></FlatList>
          </View>
          {/* <Divider className="mt-6" bold /> */}
          {/* nearby slide */}
          <View className="my-6 flex gap-3">
            <View className="flex flex-row my-2 justify-between">
              <Text className="text-[1.3rem] font-extrabold ">
                Nearby Your Location
              </Text>
              <Text className="text-[#FF8C42] font-bold">See All</Text>
            </View>
            <View className="flex flex-row">
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
                    <TouchableOpacity className="flex flex-row items-center ">
                      <Text
                        className={`text-[#FF8C42] ${
                          item.id == 0 ? 'text-white' : 'text-[#FF8C42]'
                        } font-bold`}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
            <View className="mt-4 flex gap-2">
              <FlatList
                data={shops}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View className="bg-white mb-6 p-4 rounded-2xl flex flex-row gap-3">
                    <Image
                      className="h-[80px] w-[80px] rounded-2xl"
                      source={item.ShopProfileImage}
                    />
                    <View className="flex-1 flex-row justify-between">
                      <View className="flex gap-2">
                        <Text className="text-lg font-extrabold">
                          {item.name}
                        </Text>
                        <Text className="text-sm text-black/60 font-bold">
                          {item.location.substring(0, 20)}
                        </Text>
                        <View className="flex flex-row gap-4">
                          <View className="flex flex-row items-center gap-1">
                            <Icon
                              name="location-sharp"
                              size={15}
                              color={'#FF8C42'}
                            />
                            <Text className="text-sm font-bold">
                              {item.distance} Km
                            </Text>
                          </View>
                          <View className="flex flex-row items-center gap-1">
                            <Icon name="star" size={15} color={'#FF8C42'} />
                            <Text className="text-sm font-bold">
                              {item.rating}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <Icon
                        name={item.id == '1' ? 'bookmark' : 'bookmark-outline'}
                        size={25}
                        color={'#FF8C42'}
                      />
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
