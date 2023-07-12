import React, { ReactNode, useCallback, useState } from 'react';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';

import MicSvg from '../../assets/microphone.svg';
import AlbumSvg from '../../assets/album.svg';
import PlainSvg from '../../assets/plain.svg';
import StarCircleSvg from '../../assets/star-circle.svg';
import Title from '../Title';
import { CardEvent } from '../CardEvent';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { ComedianProps } from '../CardComedian';

const RenatoAlbaniPng = require('../../assets/RenatoAlbani.png') ;
const RenatoAlbani = require('../../assets/eventImage.png');
const RodrigoMarques = require('../../assets/RodrigoMarques.png');
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import EventsTabMenu from '../../screens/EventsTabMenu';
import AlbumTabMenu from '../../screens/AlbumTabMenu';
import { SceneMap, TabView } from 'react-native-tab-view';

const Tab = createMaterialTopTabNavigator();
export function TabMenu() {
  const { violet, grey } = theme.colors;
  const [index, setIndex] = useState(0);
  const [events, setEvents] = useState<ComedianProps[]>([]);

	async function loadEvents() {
    const  eventData = await [
      {
        id: '1',
        comedianName: 'Renato Albani',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fafonso-padilha.png?alt=media&token=83ee597e-e43d-4586-922c-248b4274f5aa',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },
      {
        id: '2',
        comedianName: 'Rodrigo Marques',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fafonso-padilha.png?alt=media&token=83ee597e-e43d-4586-922c-248b4274f5aa',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },
      {
        id: '3',
        comedianName: 'Bruna Louise',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fbruna-louise.png?alt=media&token=47fbc753-5c41-4a8f-a66a-0e51c14cb790',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },
      {
        id: '4',
        comedianName: 'Renato Albani',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fafonso-padilha.png?alt=media&token=83ee597e-e43d-4586-922c-248b4274f5aa',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },
      {
        id: '5',
        comedianName: 'Renato Albani',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fafonso-padilha.png?alt=media&token=83ee597e-e43d-4586-922c-248b4274f5aa',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },
      {
        id: '6',
        comedianName: 'Renato Albani',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fafonso-padilha.png?alt=media&token=83ee597e-e43d-4586-922c-248b4274f5aa',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },

    ]
		
    setEvents(eventData)
	}	
  
  useFocusEffect(useCallback(() => {
    console.log('loadEvents')
    loadEvents();
  }, []));
  const layout = useWindowDimensions();
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  
  return (
<TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />


    
      /* <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: violet,
          height: 3,
          marginHorizontal: 10
        }}
        style={{paddingHorizontal: 10}}
        buttonStyle={{padding: 16}}
        variant="default"
      >
        <Tab.Item
          titleStyle={{ fontSize: 12 }}
          icon={<MicSvg width={24} height={24} fill={index == 0 ? violet : grey} />}
        />
        <Tab.Item 
          titleStyle={{ fontSize: 12 }}
          icon={<AlbumSvg width={24} height={24}  fill={index == 1 ? violet : grey} />}
        />
        <Tab.Item
          titleStyle={{ fontSize: 12 }}
          icon={<PlainSvg width={24} height={24} fill={index == 2 ? violet : grey} />}      
        />
        <Tab.Item
          titleStyle={{ fontSize: 12 }}
          icon={<StarCircleSvg width={24} height={24} fill={index == 3 ? violet : grey} />}   
        />
      </Tab>

      <TabView 
      tabItemContainerStyle={{paddingHorizontal: 10,height: 600, width: '100%'}}
      value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: '#000',width: '100%' }} >
          <View style={{marginTop: 24}}>
            <Title title={'Próximos shows'} />

            <FlatList
              data={events}
              keyExtractor={item => item.id}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CardEvent
                  title={item.comedianName}
                  comedianName={item.comedianName}
                  classification={'L'}
                  date={'16 Mai 2023 - 6:15pm'}
                  location={' Santos, SP'}
                  image={RenatoAlbani}
                />
              )}
            />
          </View>
          
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text style={styles.tabtitle}>Favorite</Text>
        </TabView.Item>

        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
          <Text style={styles.tabtitle} >Cart</Text>
        </TabView.Item>
      </TabView> */

  )
}

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
function AlbumScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
