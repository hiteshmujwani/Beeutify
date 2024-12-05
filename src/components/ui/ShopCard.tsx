import {View, Text, Image, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {handleSaveShop} from '../../../store/slice/SavedShopSlice';
import RemoveSavedModal from './RemoveSaveModal';
import { useNavigation } from '@react-navigation/native';

type ShopItemProps = {
  item: {
    ShopProfileImage: any;
    name: string;
    location: string;
    distance: number;
    rating: number;
    id: string;
  };
};

const ShopCard = ({item}: any) => {
  const savedShops = useSelector((state: any) => state.saved);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [removeableShop, setRemoveableShop] = useState('');
  const navigate:any = useNavigation()
  const isSaved =
    savedShops.length > 0 &&
    savedShops.some((shop: any) => shop.name === item.name);
  return (
    <>
      <Pressable className="bg-white mb-6 p-4 rounded-2xl flex flex-row gap-3" onPress={()=>navigate.navigate('ShopDetail',{shop:item})}>
        <Image
          className="h-[80px] w-[80px] rounded-2xl"
          source={require('../../assets/images/ShopProfileImage/Parlour_1.png')}
        />
        <View className="flex-1 flex-row justify-between">
          <View className="flex gap-2">
            <Text className="text-lg font-extrabold">{item.name}</Text>
            <Text className="text-sm text-black/60 font-bold">
              {item.contactInfo.address}...
            </Text>
            <View className="flex flex-row gap-4">
              <View className="flex flex-row items-center gap-1">
                <Icon name="location-sharp" size={15} color={'#FF8C42'} />
                <Text className="text-sm font-bold">2 Km</Text>
              </View>
              <View className="flex flex-row items-center gap-1">
                <Icon name="star" size={15} color={'#FF8C42'} />
                <Text className="text-sm font-bold">{item.rating}</Text>
              </View>
            </View>
          </View>
          <Icon
            onPress={() =>
              isSaved
                ? (setShowModal(!showModal), setRemoveableShop(item))
                : dispatch(handleSaveShop(item))
            }
            name={isSaved ? 'bookmark' : 'bookmark-outline'}
            size={25}
            color={'#FF8C42'}
          />
        </View>
      </Pressable>
      <RemoveSavedModal
        showModal={showModal}
        setShowModal={setShowModal}
        removeableShop={removeableShop}
      />
    </>
  );
};

export default ShopCard;
