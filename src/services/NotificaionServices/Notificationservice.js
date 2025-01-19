import notifee,{AndroidImportance} from '@notifee/react-native'
import messaging from '@react-native-firebase/messaging'


export default async function displayNotification(remoteMessage) {
  await notifee.requestPermission()


    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      vibration:true,
    });

    await notifee.displayNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      android: {
        channelId,
      },
    });
  }


   export const getFCMToken = async()=>{
      const token = await messaging().getToken();
      return token;
    }