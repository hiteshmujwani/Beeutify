
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../../screens/Auth/RegisterScreen';
import LoginScreen from '../../screens/Auth/LoginScreen';

const AuthStack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} /> 
    </AuthStack.Navigator>
  );
}
