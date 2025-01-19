import React, { useEffect, useState } from 'react';
import { AppNavigator } from './app-navigation/AppNavigator';
import { AuthNavigator } from './auth-navigation/AuthNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../store/slice/userSlice';
import { Text, View } from 'react-native';
import { getJwtToken } from '../lib/Token';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import { USER_INFO } from '../constants/ApiUrls';

export function Navigation() {
  const [loading, setLoading] = useState(true); 
  const user = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkTokenAndFetchUser = async () => {
      try {
     
        const token = await getJwtToken();

        if (token) {
          
          const userInfo = await axios.get(USER_INFO, {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (userInfo) {
            
            dispatch(
              setUserData({
                token,
                user: userInfo.data.user,
              })
            );
          }
        }

      
        const deviceToken = await messaging().getToken();
        if (deviceToken) {
          dispatch(
            setUserData({
              deviceToken,
            })
          );
        }
      } catch (error:any) {
        console.error('Error initializing app:', error.message);
      } finally {
        setLoading(false); 
      }
    };

    checkTokenAndFetchUser();
  }, [dispatch]);

  if (loading) {
    return <LoadingScreen />;
  }

  return user ? <AppNavigator /> : <AuthNavigator />
}


const LoadingScreen = () => (
  <View className="flex justify-center items-center h-full">
    <Text>Loading...</Text>
  </View>
);
