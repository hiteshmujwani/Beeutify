/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './global.css';
import messaging from '@react-native-firebase/messaging'
import displayNotification from './src/services/NotificaionServices/Notificationservice';

messaging().setBackgroundMessageHandler(async remoteMessage=>{
    console.log("background Message Handler",remoteMessage)
    await displayNotification(remoteMessage)
})

AppRegistry.registerComponent(appName, () => App);
