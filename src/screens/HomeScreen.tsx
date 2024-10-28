import {useState} from 'react';
import {
  Dimensions,
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
import ShopCard from '../components/ui/ShopCard';
export default function HomeScreen({navigation}: any) {
  const [searchQuery, setSearchQuery] = useState('');
  const images = [offer_1, offer_2, offer_3];

  const {width: viewPortWidth} = Dimensions.get('window');
  console.log(viewPortWidth * 0.95);

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
              width={viewPortWidth}
              height={200}
              autoplayTimeout={3}
              autoplay
              pagingEnabled={true}
              snapToAlignment="center"
              paginationStyle={{display: 'none'}}>
              {images.map((item, index) => (
                <View
                  key={index}
                  className="justify-center h-[200px] mx-4 items-center rounded-xl overflow-hidden">
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
                    <View className="flex items-center mr-5">
                      <TouchableOpacity
                        className=" bg-[#FF8C42]/10 p-5 rounded-xl"
                        onPress={() =>
                          navigation.navigate('Category', {
                            categoryName: item.label,
                          })
                        }>
                        {item.icon && <item.icon />}
                      </TouchableOpacity>
                      <Text className="text-[14px] font-bold">
                        {item.label}
                      </Text>
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
                        {item.label}
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
                renderItem={({item}) => <ShopCard item={item} />}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
