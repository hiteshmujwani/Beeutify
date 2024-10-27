// app-navigation/tab-navigation/MainTabNavigator.tsx
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screens/HomeScreen';
import HomeFilled from '../../../assets/images/CustomIcons/HomeFilled.svg';
import HomeOutline from '../../../assets/images/CustomIcons/Home.svg';
import BookingFilled from '../../../assets/images/CustomIcons/BookingFilled.svg';
import BookingOutline from '../../../assets/images/CustomIcons/Booking.svg';
import SavedFilled from '../../../assets/images/CustomIcons/SavedFilled.svg';
import SavedOutline from '../../../assets/images/CustomIcons/Saved.svg';
import ProfileFilled from '../../../assets/images/CustomIcons/ProfileFilled.svg';
import ProfileOutline from '../../../assets/images/CustomIcons/Profile.svg';
import ProfileScreen from '../../../screens/ProfileScreen';
import SavedScreen from '../../../screens/SavedScreen';
import BookingScreen from '../../../screens/BookingScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 70},
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 600,
          color: '#FF8C42',
          marginBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? <HomeFilled /> : <HomeOutline />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="booking"
        options={{
          title: 'Booking',
          tabBarIcon: ({focused}) =>
            focused ? <BookingFilled /> : <BookingOutline />,
        }}
        component={BookingScreen}
      />
      <Tab.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({focused}) =>
            focused ? <SavedFilled /> : <SavedOutline />,
        }}
        component={SavedScreen}
      />
      <Tab.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) =>
            focused ? <ProfileFilled /> : <ProfileOutline />,
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
