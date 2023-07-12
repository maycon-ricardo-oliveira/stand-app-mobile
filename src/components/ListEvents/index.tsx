import React, { useCallback, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { CardEvent, EventProps } from '../CardEvent';
import { useFocusEffect } from '@react-navigation/native';


type Props = {
  events?: Array<EventProps>;
  horizontal: boolean;
}
const RenatoAlbani = require('../../assets/eventImage.png');
const RodrigoMarques = require('../../assets/RodrigoMarques.png');

export function ListEvents({ events, horizontal, ...rest }: Props) {
  const { violet, success200, error200 } = theme.colors;

  const [eventsData, setEvents] = useState<Array<EventProps>>([]);

  function loadEvents() {

    setEvents(
      [
        {
          id: '1',
          title:'Assim caminha a humanidade',
          comedianName:'Renato Albani',
          classification: {
            title: 'L'
          },
          date:'16 Mai 2023 - 6:15pm',
          location:'Santos, SP',
          image: RenatoAlbani,
          status: {
            status: 'done'
          }
        },
        {
          id: '2',
          title: 'O inimigo do nível',
          comedianName: 'Rodrigo Marques',
          classification: {
            title: 'L',
          },
          date: '16 Mai 2023 - 6:15pm',
          location: ' Santos, SP',
          image: RodrigoMarques,
          status: {
            status: 'available'
          }
        }
  
      ]
    )
  }

  useFocusEffect(useCallback(() => {
    console.log('load events')
    loadEvents();
  }, []));

  return (
    <FlatList
      horizontal={horizontal}
      style={styles.events}
      data={eventsData}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={ horizontal ? { marginLeft: 16} : {marginBottom: 16}}>
          <CardEvent
            width={horizontal ? 311 : 340}
            data={item}
          />
        </View>
      )}
    />
  )
}