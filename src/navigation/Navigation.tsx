// navigation/Navigation.tsx (Root Navigator)
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppNavigator} from './app-navigation/AppNavigator';
import {AuthNavigator} from './auth-navigation/AuthNavigator';

export function Navigation() {
  const isAuthenticated = true;

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}
