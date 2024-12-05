// app-navigation/AppNavigator.tsx
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStackNavigator from './stack-navigation/MainStackNavigator';
import MainTabNavigator from './tab-navigation/MainTabNavigator';

const AppStack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="MainStack" component={MainStackNavigator} />
      {/* Other app-level stacks if needed */}
    </AppStack.Navigator>
  );
}
