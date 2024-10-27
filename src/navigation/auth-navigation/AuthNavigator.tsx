// navigation/auth-navigation/AuthNavigator.tsx
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen';

const AuthStack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      {/* <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
    </AuthStack.Navigator>
  );
}
