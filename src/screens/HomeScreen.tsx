import {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Badge, Searchbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import services from '../constants/Services';
import FilterIcon from '../assets/images/CustomIcons/filter-icon.svg'
import shops from '../constants/Shops';
import Swiper from 'react-native-swiper';
import offer_1 from '../assets/images/offer_1.png';
import offer_2 from '../assets/images/offer_2.png';
import offer_3 from '../assets/images/offer_3.png';
import ShopCard from '../components/ui/ShopCard';
import HorizontolList from '../components/ui/HorizontolList';
import SearchBar from '../components/ui/SearchBar';
import HorizontolListWithSvg from '../components/ui/HorizontolListWithSvg';
import { useSelector , useDispatch} from 'react-redux';
import { handleSaveShop } from '../../store/slice/SavedShopSlice';
export default function HomeScreen({navigation}: any) {
  const [nearbyShops,setNearbyShops]:any = useState([])
  const savedShops = useSelector((state:any)=> state.saved)
  const dispatch = useDispatch()
  const [selectedService,setSelectedService]:any= useState()
  const filterByService = (serviceName:any) =>{
    const filteredArray = shops.filter(shop=> shop.services.includes(serviceName))
    setNearbyShops(filteredArray)
  }
  const images = [offer_1, offer_2, offer_3];
  const {width: viewPortWidth} = Dimensions.get('window');

  return (
    <SafeAreaView className=" flex-1">
      <ScrollView>
        <StatusBar  showHideTransition={"slide"}/>
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
          <Pressable className="flex flex-row items-center gap-2 mt-4" onPress={()=>{navigation.navigate("Search")}}>
            <SearchBar  navigation={navigation}/>
          </Pressable>

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
                    <HorizontolListWithSvg navigation={navigation} item={item} route={"Category"}/>
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
                renderItem={({item}) => (
                  <HorizontolList item={item} selected={selectedService} setSelected={filterByService}/>
                )}
              />
            </View>
            <View className="mt-4 flex gap-2">
              <FlatList
                data={nearbyShops.length > 0 ? nearbyShops : shops}
                scrollEnabled={false}
                
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <ShopCard item={item} savedShops={savedShops} toggleSaveShop={(item:any)=>dispatch(handleSaveShop(item))}/>}
              />
            </View>
          </View> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
