import AsyncStorage from "@react-native-async-storage/async-storage";

export const getJwtToken = async () => {
    try {
      const token = await AsyncStorage.getItem('beeutify_token');
      if (token !== null) {
        console.log('Retrieved token:', token);
        return token;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  };
  