import React from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { EventStatus } from '../EventStatus';
import { Classification } from '../Classfication';

type Props = TouchableOpacityProps & {
  title: string;
  comedianName: string;
  classification: string;
  date: string;
  location: string;
  image: any;
}

export function CardEventHighlight({ title, comedianName, classification, date, location, image, ...rest }: Props) {
  const { violet, success200, error200 } = theme.colors;

  function serializeTitle(){
    if (title.length > 18) {
      return title.slice(0, 15) + '...';
    }
    return title
  }
  return (
    <TouchableOpacity style={[styles.container, 
    ]} {...rest}>
      <Image 
       source={image} 
       style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.date}>16 Mai 2023 - 6:15pm </Text>  
        <Text style={styles.title}>{serializeTitle()}</Text>
        <Text style={styles.comedianName}>{comedianName}</Text>

        <View style={styles.info}>
          <Text style={styles.location}>Santos, SP</Text>
          <View style={styles.status}>
            <Classification title='L'/>
            <View style={{marginLeft: 8}}>
              <EventStatus status='done' />
            </View>
          </View>
          
        </View>
      </View>
    </TouchableOpacity>
  )
}