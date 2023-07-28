import React from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { EventStatus, EventStatusProps } from '../EventStatus';
import { Classification, ClassificationProps } from '../Classfication';
import { NavigationContainer, useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackTypes } from '../../routes/stack';

export type EventProps = {
  id: string;
  title: string;
  comedianName: string;
  classification: ClassificationProps;
  date: string;
  location: string;
  image: any;
  status: EventStatusProps;
}

type Props = TouchableOpacityProps & {
  width: number;
  data: EventProps
}

export function CardEvent({ data, width, ...rest }: Props) {

  const navigation = useNavigation<StackTypes>();


  const { violet, success200, error200 } = theme.colors;

  function serializeTitle(){
    if (data.title.length > 18) {
      return data.title.slice(0, 15) + '...';
    }
    return data.title
  }

  return (
    <TouchableOpacity style={[styles.container, {width: width}
    ]} {...rest}>
      <View style={styles.content}>
        <Text style={styles.date}>{data.date}</Text>  
        <Text style={styles.title}>{serializeTitle()}</Text>
        <Text style={styles.comedianName}>{data.comedianName}</Text>

        <View style={styles.info}>
          <Text style={styles.location}>{data.location}</Text>
          <View style={styles.status}>
            <Classification title={data.classification.title}/>
            <View style={{marginLeft: 8}}>
              <EventStatus status={data.status.status} />
            </View>
          </View>
          
        </View>
      </View>
      
      <Image 
				source={data.image} 
				style={styles.image}
				/>
    </TouchableOpacity>
  )
}