import React from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { EventStatus, EventStatusProps } from '../EventStatus';
import { Classification, ClassificationProps } from '../Classfication';
import { NavigationContainer, useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackTypes } from '../../routes/stack';

import ClockSvg from '../../assets/clock.svg';
import TicketSvg from '../../assets/ticket.svg';
import MapPointSvg from '../../assets/map-point-wave.svg';


export type EventInfoProps = {
  type: 'location' | 'schedule' | 'ticket'
  title: string;
  description: string;
  price?: string;
}

type Props = TouchableOpacityProps & {
  data: EventInfoProps
}

export function CardInfoEvent({ data, ...rest }: Props) {

  const navigation = useNavigation<StackTypes>();

  return (
    <TouchableOpacity style={[styles.container,
    ]} {...rest}>
      <View style={styles.eventInfoContainer}>
        <View style={styles.eventItem}>
          <View style={styles.iconContainer}> 
          {
            data.type == 'location' ? <MapPointSvg  width={32} height={32} fill={'#FFF'}/> :
            data.type == 'schedule' ?  <ClockSvg  width={32} height={32}  fill={'#FFF'}/> :
            data.type == 'ticket' ? <TicketSvg  width={32} height={32}  fill={'#FFF'}/> : null
          }
         
          </View>
          <View style={styles.contentInfoContainer}>
            <Text style={styles.infoTitle}>{data.title} {data.price && 
              <Text style={styles.price}>{data.price}</Text>
            }</Text>
            
            <Text style={styles.infoDescription}>{data.description}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}