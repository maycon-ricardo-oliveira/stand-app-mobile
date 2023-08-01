import React from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { EventStatus } from '../EventStatus';

import PalletSvg from '../../assets/palette.svg';
import OnFireSvg from '../../assets/on-fire.svg';
import Comedian from '../../domain/entities/Comedian';

export type ComedianProps = {
  id: string;
  comedianName: string;
  image: any;
  type: string;
  onFire: boolean;
  fullWidth?: boolean;
}

type Props = TouchableOpacityProps & {
  data: Comedian;
}

export function CardComedian({ data, ...rest }: Props) {
  const { violet, success200, error200 } = theme.colors;

  function serializeComedianName(){
    if (data.name.length > 18) {
      return data.name.slice(0, 15) + '...';
    }
    return data.name
  }
  return (
    <TouchableOpacity style={[styles.container,
    ]} {...rest}>
      <Image 
				source={{uri: data.thumbnail}} 
				style={styles.image}
      />

      <View style={styles.content}>
        <EventStatus status='available' />

        <Text style={styles.comedianName}>{serializeComedianName()}</Text>

        <View style={styles.info}>
          <View style={styles.type}>
            <PalletSvg width={16} height={16}/>
            <Text style={[styles.typeText, {marginLeft: 4}]}>Show Solo</Text>
          </View>
        </View>
        { data.onFire  && 
          <View style={styles.type}>
            <Text style={[styles.typeText, {marginRight: 4}]}>Em alta</Text>
            <OnFireSvg width={16} height={16}/> 
          </View>
        }
      </View>
      
    </TouchableOpacity>
  )
}