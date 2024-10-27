// app-navigation/stack-navigation/MainStackNavigator.tsx
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigator from '../tab-navigation/MainTabNavigator';
import SearchScreen from '../../../screens/SearchScreen';

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{headerShown: false}}
      />
      <MainStack.Screen name="Search" component={SearchScreen} />
      {/* Other stack screens */}
    </MainStack.Navigator>
  );
}
