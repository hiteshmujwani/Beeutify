import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import messaging from '@react-native-firebase/messaging';
import displayNotification, { getFCMToken } from './src/services/NotificaionServices/Notificationservice';


const App = () => {
useEffect(() => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    console.log('Notification received in foreground:', remoteMessage);
   await displayNotification(remoteMessage);
  });
  return unsubscribe;
}, []);
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
