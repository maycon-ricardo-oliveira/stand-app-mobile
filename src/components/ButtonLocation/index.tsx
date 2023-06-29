import React, { useState } from 'react';
import { Text,TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';

import MapPointSvg from '../../assets/map-point.svg';

type Props = TouchableOpacityProps & {
  title: string;
}

export function ButtonLocation( { title, ...rest }: Props) {

  function handleOpenLocationScreen() {
	}

  return (

    <TouchableOpacity style={styles.container}
      {...rest}
    >
      <Text style={styles.textLocation}>{title}</Text>
      <MapPointSvg style={styles.icon} width={24} height={24} fill="#fff"/>
      
    </TouchableOpacity>

  )
}