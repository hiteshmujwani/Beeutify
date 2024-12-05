import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Divider} from 'react-native-paper';
import {handleSaveShop} from '../../../store/slice/SavedShopSlice';
import {useDispatch} from 'react-redux';

const RemoveSavedModal = ({showModal, setShowModal, removeableShop}: any) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Modal visible={showModal} animationType="slide" transparent>
        <View className="!h-[400px] flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-3xl ">
            <View className="p-5 flex">
              <Text
                className="text-2xl font-bold text-center"
                onPress={() => setShowModal(!showModal)}>
                Remove From Bookmark?
              </Text>
              <Divider className="my-4" />
              <View className="bg-white  p-4 rounded-2xl flex flex-row gap-3 ">
                <Image
                  className="h-[80px] w-[80px] rounded-2xl"
                  source={require('../../assets/images/ShopProfileImage/Parlour_1.png')}
                />
                <View className="flex-1 flex-row justify-between">
                  <View className="flex gap-2">
                    <Text className="text-lg font-extrabold">
                      {removeableShop.name}
                    </Text>
                    <Text className="text-sm text-black/60 font-bold">
                      {removeableShop &&
                        removeableShop.contactInfo.address.substring(0, 20)}
                    </Text>
                    <View className="flex flex-row gap-4">
                      <View className="flex flex-row items-center gap-1">
                        <Icon
                          name="location-sharp"
                          size={15}
                          color={'#FF8C42'}
                        />
                        <Text className="text-sm font-bold">
                          2 Km
                        </Text>
                      </View>
                      <View className="flex flex-row items-center gap-1">
                        <Icon name="star" size={15} color={'#FF8C42'} />
                        <Text className="text-sm font-bold">
                          {removeableShop.rating}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Icon name={'bookmark'} size={25} color={'#FF8C42'} />
                </View>
              </View>
              <View className="flex flex-row my-4  py-3  gap-5">
                <TouchableOpacity
                  className="flex-1 items-center justify-center p-5 rounded-full bg-[#FF8C42]/20 ]"
                  onPress={() => setShowModal(!showModal)}>
                  <Text className="text-xl font-medium text-[#FF8C42]">
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-1 items-center justify-center bg-[#ff8c42] rounded-full p-5"
                  onPress={() => {
                    setShowModal(!showModal),
                      dispatch(handleSaveShop(removeableShop));
                  }}>
                  <Text className="text-xl font-medium text-white">
                    Yes, Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RemoveSavedModal;
