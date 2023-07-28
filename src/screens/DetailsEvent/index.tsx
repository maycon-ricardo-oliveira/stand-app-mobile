import React, { useCallback, useState } from "react";
import { Text, Image, View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Backgound } from "../../components/Background";
import { StackTypes } from "../../routes/stack";
import { TopTabGroup } from "../../routes/toptabs";

import { NavigationContainer, useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { Tab, Text as Rtext, TabView } from '@rneui/themed';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';
import { CardComedian, ComedianProps } from "../../components/CardComedian";
import Title from "../../components/Title";

import MicSvg from '../../assets/microphone.svg';
import AlbumSvg from '../../assets/album.svg';
import PlainSvg from '../../assets/plain.svg';
import StarCircleSvg from '../../assets/star-circle.svg';
import { TabMenu } from "../../components/TabMenu";
import { Classification } from "../../components/Classfication";
import { EventStatus } from "../../components/EventStatus";
import { CardInfoEvent, EventInfoProps } from "../../components/CardInfoEvent";
import { Accordion } from "../../components/Accordion";
import { AccordionItem } from "../../components/AccordionItem";
import { Separator } from "../../components/Separator";
import { ButtonHighlightFixed } from "../../components/ButtonHighlightFixed";

const RenatoAlbaniPng = require('../../assets/RenatoAlbani.png') ;
const RenatoAlbani = require('../../assets/eventImage.png');

export type EventDetailsProps = {
	id: string;
}

type Props = {
  data: EventDetailsProps;
}

type EventProps = {
  id: string;
  title: string;
  description: string;
}

export default function DetailsEvent({ route }: any) {
	const navigation = useNavigation<StackTypes>();
  
	const { id } = route.params;
  const [index, setIndex] = useState(0);
  const [eventInfos, setEventInfos] = useState<EventInfoProps[]>([]);
  const [event, setEvent] = useState<EventProps>({
    id: '123',
    title: 'Assim caminha a humanidade',
    description: 'Talentoso humorista e palestrante que deixou a carreira de engenharia para dedicar-se à comédia.',
  })

  const [loading, setLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  function serializeTitle(){
    if (event.title.length > 22) {
      return event.title.slice(0, 20) + '...';
    }
    return event.title
  }

	async function loadEvent() {
      setEventInfos([{
        title: 'Av. da Sagrada Conceição, 689',
        description: 'Bairro Jardins • Santos, São Paulo (Brasil)',
        type: 'ticket',
      },{
        title: 'Feriado de carnaval • Dia 18, 19 e 20',
        description: 'Das 19:00 pm às 22:00 pm ',
        type: 'schedule',
      },{
        title: 'Ingressos a partir de ',
        description: 'Meia entrada, inteira e clube de vantagens',
        type: 'ticket',
        price: 'R$29,90'
      }
    ])

    setEvent({
      id: '123',
      title: 'Assim caminha a humanidade',
      description: 'Talentoso humorista e palestrante que deixou a carreira de engenharia para dedicar-se à comédia.',
    })
    setLoading(false)
	}

  let squares = [];
  let numberOfSquares = eventInfos.length;

  for (let index = 0; index < numberOfSquares; index++) {

    squares.push(
      <View key={index}>
        <CardInfoEvent data={eventInfos[index]}/>
      </View>
    )
  }


  useFocusEffect(useCallback(() => {
    console.log( `route params Id: ${id}`)
    loadEvent();
  }, []));

	return (
    <Backgound gradient={false}>
      <View style={styles.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
        >
          <Image
            style={styles.mainImage} 
            source={RenatoAlbani}
          />
          <View style={styles.content}>
            <Title title={serializeTitle()} />
            <View style={styles.contentContainer}> 
              <Text style={styles.description}>Renato Albani * Show de Standup</Text>
              <View style={{flexDirection: 'row', alignItems: 'center' }}>
                <Classification title="L"/>
                <EventStatus status={'done'} />
              </View>
            </View>

            { squares }

            <View style={{marginTop: 16}}>
              <AccordionItem title="Descrição do evento">
                <Text style={styles.descriptionText}>{event.description}</Text>
              </AccordionItem>
            </View>

            <Separator/>
            <Title title="Contato da acessoria"/>
            <TouchableOpacity >
              <Text style={styles.text}>
                (85) 90000 - 0000 / WhatasApp
              </Text>
            </TouchableOpacity>
            
          </View>
        </ScrollView>
      </View>

      <ButtonHighlightFixed title={"Comprar ingresso"} isBigTitle={false} type="success"/>

    </Backgound>
	)
}
