import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EventsTabMenu from '../screens/EventsTabMenu';
import AlbumTabMenu from '../screens/AlbumTabMenu';

import Ionic from 'react-native-vector-icons/Ionicons';


import AlbumSvg from '../assets/album.svg';
import { theme } from '../global/styles/theme';
import ContactTabMenu from '../screens/ContactTabMenu';

type TopTabNavigation = {
  TabMenuEvents: any | undefined;
  TabMenuAlbum: any | undefined;
  TabMenuContact: any | undefined;
}

const {violet, purple, black, blueNight} = theme.colors;


const TopTab = createMaterialTopTabNavigator();

export const TopTabGroup = () => {
  return (

    <TopTab.Navigator 
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName = '';

          if (route.name === 'Album') {
            iconName = focused ? "albums" : "albums-outline"
          }else if (route.name === 'Events') {
            iconName = focused ? "mic" : "mic-outline"
          }else if (route.name === 'Contact') {
            iconName = focused ? "paper-plane" : "paper-plane-outline"
          }else if (route.name === 'Avaliation') {
            //return <AlbumSvg />
            iconName = focused ? "star" : "star-outline"
          }
          
          return <Ionic color={color} name={iconName} size={24}/>

        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: violet,
        tabBarStyle: { backgroundColor: blueNight },
        tabBarIndicatorStyle: { backgroundColor: purple },
        tabBarContentContainerStyle: { backgroundColor: blueNight },
        tabBarShowIcon: true,

      })}
    >
      <TopTab.Screen name="Events" component={EventsTabMenu} />
      <TopTab.Screen name="Album" component={AlbumTabMenu}  />
      <TopTab.Screen name="Contact" component={ContactTabMenu} />
      {/* <TopTab.Screen name="Avaliation" component={ContactTabMenu} /> */}

    </TopTab.Navigator>
    
  );
}