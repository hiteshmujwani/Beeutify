import { View, Text, ScrollView, Image, StatusBar, TouchableOpacity, FlatList, Pressable, SafeAreaView, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ShopSections, shopSpecialists } from '../constants/Shops'
import { CommonActions } from '../constants/Shops'
import AboutusSection from '../components/screen-components/AboutusSection'
import ServicesSection from '../components/screen-components/ServicesSection'
import PackageSection from '../components/screen-components/PackageSection'
import GallerySection from '../components/screen-components/GallerySection'
import ReviewSection from '../components/screen-components/ReviewSection'
import BackButton from '../assets/images/CustomIcons/BackButton.svg'

const ShopDetailsScreen = () => {
    const route:any = useRoute()
    const navigation:any = useNavigation()
    const [selectedSection,setSelectedSection]:any = useState(ShopSections[0])
    const [selectedServices, setSelectedServices] = useState<any[]>([]);
    const shop = route.params.shop

    const calculateTotalPrice = () =>{
      let Total = 0;
      selectedServices.map((item)=>(
        Total += item.price
      ))
      return Total;
    }

    const handleNavigation = () =>{
      if(selectedServices.length <= 0){
        Alert.alert('Please select at least one service')
      }else{
      navigation.navigate('Book-Appointment',{shop:shop,selectedServices:selectedServices})}
    }
  return (
    <SafeAreaView className='relative'>
    <ScrollView className='mb-24'>
        <StatusBar translucent backgroundColor={"transparent"}/>
      <View>
        {/* shop images  */}
        <View className='relative'>
            <Image source={require('../assets/images/ShopProfileImage/Parlour_1.png')} className=''/>
            <Pressable className='bg-white absolute p-2 top-8 left-5 rounded-lg' onPress={()=>navigation.goBack()}><BackButton/></Pressable>
        </View>
        {/* shop basic detail  */}
        <View className='flex p-3 gap-2'> 
            <View className='flex flex-row justify-between items-center'>
                <Text className='text-2xl font-extrabold'>{shop.name}</Text>
                <Pressable className='bg-[#FF8C42] px-6 py-3 rounded-full' onPress={()=>navigation.navigate("Book Appointment")}><Text className='text-white text-lg font-bold'>Open</Text></Pressable>
            </View>
            <View className='flex gap-1'>
            <View className='flex flex-row gap-1 items-center'>
                <View><Ionicons name='location-sharp' size={20} color={"#FF8C42"}/></View>
                <Text className='text-lg font-bold'>{shop.contactInfo.address}</Text>
            </View>
            <View className='flex flex-row gap-1 items-center'>
                <View><Ionicons name='star-half' size={20} color={"#FF8C42"}/></View>
                <Text className='text-lg font-bold'>{shop.rating}</Text>
            </View>
            </View>
        </View>
        {/* shop actions  */}
        <View className='flex flex-row justify-center p-3'>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={CommonActions} renderItem={({item})=>(
                <View className="flex items-center mr-5">
                <TouchableOpacity
                  className=" bg-[#FF8C42]/10 p-5 rounded-xl">
                  {item.icon && <item.icon />}
                </TouchableOpacity>
                <Text className="text-[14px] font-bold">
                  {item.ActionName}
                </Text>
              </View>
            )}/>
        
        </View>
        {/* shop specialists */}
        <View className='p-3 flex gap-3'>
            <View className='flex flex-row justify-between'>
                <Text className='text-2xl font-extrabold'>Our Specialists</Text>
                <Text className='text-[#FF8C42] font-bold'>See All</Text>
            </View>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={shopSpecialists} renderItem={({item})=>(
                <View className='flex justify-center items-center p-3 bg-white rounded-xl mr-2'>
                    <View>
                        <Image source={item.profile} className='h-[80px] w-[80px] rounded-xl'/>
                    </View>
                    <Text className='text-lg font-extrabold'>{item.name}</Text>
                    <Text className='text-sm font-semibold'>{item.designation}</Text>
                </View>
            )}/>
        </View>
        {/* sections  */}
        <View className='p-3'>
        <FlatList showsHorizontalScrollIndicator={false} horizontal data={ShopSections} renderItem={({item})=>(
            <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedSection(item)}
            className={`mr-2 px-6 py-3 rounded-full ${
              item.id == selectedSection.id ? 'bg-[#FF8C42]' : 'bg-white'
            }  border-2 border-[#FF8C42]`}>
            <View className="flex flex-row items-center gap-2">
              
              <Text
                className={`text-[#FF8C42] ${
                  item.id == selectedSection.id ? 'text-white' : 'text-[#FF8C42]'
                } font-bold`}>
                {item.section}
              </Text>
            </View>
          </TouchableOpacity>
  )}/>
        </View>
        {/* selected section component */}
        <View className='p-3'>
            {selectedSection.section == "About Us" && <AboutusSection/>}
            {selectedSection.section == "Services" && <ServicesSection shop={shop} selectedServices={selectedServices} setSelectedServices={setSelectedServices}/>}
            {selectedSection.section == "Package" && <PackageSection/>}
            {selectedSection.section == "Gallery" && <GallerySection/>}
            {selectedSection.section == "Reviews" && <ReviewSection/>}
        </View>

      </View>
    </ScrollView>
    <View className='absolute bottom-0 bg-white p-5 w-full'>
      <Pressable className='bg-[#FF8C42] p-3 rounded-full' onPress={handleNavigation}><Text className='text-xl text-white text-center font-extrabold'>Book Now {selectedServices.length > 0 && `- ₹ ${calculateTotalPrice()}`}</Text></Pressable>
    </View>
    </SafeAreaView>
  )
}

export default ShopDetailsScreen