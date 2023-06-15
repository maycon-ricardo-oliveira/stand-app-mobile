import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isViolet: boolean;
}

export function ButtonSimple({ title, isViolet = false, ...rest }: Props) {
  const { violet, white } = theme.colors;

  return (
    <TouchableOpacity  style={styles.container} {...rest}>
      <Text style={[styles.title, isViolet ? { color: violet } : {color: white }]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}