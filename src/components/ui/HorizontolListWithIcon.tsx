import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HorizontolListWithIcon = ({item}: any) => {
  return (
    <View
      key={item.id}
      className={`mr-2 px-6 py-3 rounded-full ${
        item.id == 0 ? 'bg-[#FF8C42]' : 'bg-white'
      }  border-2 border-[#FF8C42]`}>
      <TouchableOpacity className="flex flex-row items-center gap-2 justify-center">
        {item.icon && (
          <Icon name="star" color={item.id == 0 ? '#ffffff' : '#FF8C42'} />
        )}
        <Text
          className={`text-[#FF8C42] ${
            item.id == 0 ? 'text-white' : 'text-[#FF8C42]'
          } font-bold`}>
          {item.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HorizontolListWithIcon;
