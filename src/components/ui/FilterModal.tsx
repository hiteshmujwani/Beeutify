import { View, Text, Modal, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper';
import FilterItem from './FilterItem';
import services from '../../constants/Services';
import { Distance, Ratings } from '../../constants/OtherData';

const FilterModal = ({showModal,setShowModal,selected,setSelected}:any) => {
  return (
    <View>
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
                    <FilterItem data={services} selected={selected.service} setSelected={(service:any)=>setSelected((prev:any)=>({...prev,service:service}))}/>
                    <FilterItem data={Ratings} icon={true} selected={selected.rating} setSelected={(rating:any)=>setSelected((prev:any)=>({...prev,rating:rating}))}/>
                    <FilterItem data={Distance}  selected={selected.distance} setSelected={(distance:any)=>setSelected((prev:any)=>({...prev,distance:distance}))}/>
                  </View>
                  <Divider className="mx-5 my-3" />
                  <View className="flex flex-row my-4 px-8 py-3  gap-5">
                    <TouchableOpacity className="flex-1 items-center justify-center p-5 rounded-full bg-[#FF8C42]/20 ]">
                      <Text className="text-xl font-medium text-[#FF8C42]">
                        Reset
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 items-center justify-center bg-[#ff8c42] rounded-full p-5">
                      <Text className="text-xl font-medium text-white" >
                        Apply Filter
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
    </View>
  )
}

export default FilterModal