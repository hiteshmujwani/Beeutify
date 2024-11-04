import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import ShopCard from '../components/ui/ShopCard';
import {handleSaveShop} from '../../store/slice/SavedShopSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import HorizontolList from '../components/ui/HorizontolList';
import services from '../constants/Services';

const SavedScreen = ({navigation}: any) => {
  const savedShops = useSelector((state: any) => state.saved);
  const [selectedService, setSelectedService] = useState('All');
  const [savedShopsByservice, setSavedShopsByservice] = useState('');
  const filterByService = (serviceName: any) => {
    const filteredArray = savedShops.filter((shop: any) =>
      shop.services.includes(serviceName.label),
    );
    setSelectedService(serviceName);
    setSavedShopsByservice(filteredArray);
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        {savedShops.length > 0 && (
          <View className="m-3">
            <View className="my-4">
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={services}
                renderItem={({item}) => (
                  <HorizontolList
                    item={item}
                    selected={selectedService}
                    setSelected={filterByService}
                  />
                )}
              />
            </View>
            <FlatList
              scrollEnabled={false}
              data={
                savedShopsByservice.length > 0
                  ? savedShopsByservice
                  : savedShops
              }
              renderItem={({item}) => <ShopCard item={item} />}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavedScreen;
