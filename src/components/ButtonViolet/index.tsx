import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isBigTitle: boolean;
}

export function ButtonViolet({ title, isBigTitle, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={isBigTitle ? styles.bigTitle : styles.title}>
        {title}
      </Text>      
    </TouchableOpacity>
  )
}