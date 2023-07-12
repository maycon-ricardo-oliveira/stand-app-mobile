import * as React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import EventsTabMenu from '../screens/EventsTabMenu';
import AlbumTabMenu from '../screens/AlbumTabMenu';
import { Text, View } from 'react-native';

type TopTabNavigation = {
  TabMenuEvents: any | undefined;
  TabMenuAlbum: any | undefined;
  TabMenuContact: any | undefined;
}


const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Feed"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'powderblue' },
    }}>
      <Tab.Screen name="EventsTabMenu" component={EventsTabMenu} options={{ tabBarLabel: 'eventos' }}/>
      <Tab.Screen name="AlbumTabMenu" component={AlbumTabMenu} options={{ tabBarLabel: 'album' }}/>
    </Tab.Navigator>
  );
}


export type TopTabTypesTypes = MaterialTopTabNavigationProp<TopTabNavigation>;
export default TopTabNavigator;




function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Updates' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
