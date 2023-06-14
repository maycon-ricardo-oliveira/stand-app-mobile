import { View } from 'react-native';
import { styles } from './styles';
import React from 'react';

type Props = {
  size: number;
}

export function Spacing({ size }: Props) {
  return (
    <View 
      style={[ styles.container, { marginTop: size } ] }
     />
  )
}