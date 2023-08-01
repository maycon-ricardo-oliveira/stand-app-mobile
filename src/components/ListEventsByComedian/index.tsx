import React, { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { CardEvent, EventProps } from '../CardEvent';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/stack';
import GetAttractionsByComedianController from '../../domain/controllers/GetAttractionsByComedianController';

type Props = {
  events?: Array<EventProps>;
  comedianId: string;
  horizontal: boolean;
}
const RenatoAlbani = require('../../assets/eventImage.png');
const RodrigoMarques = require('../../assets/RodrigoMarques.png');

export function ListEventsByComedian({ events, horizontal, comedianId, ...rest }: Props) {
  const navigation = useNavigation<StackTypes>();

  const [eventsData, setEvents] = useState<Array<EventProps>>([]);

  function handleEventDetails(event: EventProps) {
    console.log('open event');
		navigation.navigate('DetailsEvent', {
			id: event.id
		})
	}

  async function loadEvents() {

    const controller = new GetAttractionsByComedianController();
    const output = await controller.execute(comedianId);

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
            status: 'finish'
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
            onPress={() => handleEventDetails(item)}
          />
        </View>
      )}
    />
  )
}