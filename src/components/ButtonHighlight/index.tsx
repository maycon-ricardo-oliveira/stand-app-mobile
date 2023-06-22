import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = TouchableOpacityProps & {
  title: string;
  isBigTitle: boolean;
  type?: 'violet' | 'success' | 'error'
}

export function ButtonHighlight({ title, type, isBigTitle, ...rest }: Props) {
  const { violet, success200, error200 } = theme.colors;

  return (
    <TouchableOpacity style={[styles.container, 
  
      type == 'success' ? { backgroundColor: success200} :
      type == 'error' ? { backgroundColor: error200} :
      { backgroundColor: violet} 
    
    ]} {...rest}>
      <Text style={isBigTitle ? styles.bigTitle : styles.title}>
        {title}
      </Text>      
    </TouchableOpacity>
  )
}