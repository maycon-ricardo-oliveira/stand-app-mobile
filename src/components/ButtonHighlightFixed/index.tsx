import React from 'react';
import { View, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import { ButtonHighlight } from '../ButtonHighlight';

type Props = TouchableOpacityProps & {
  title: string;
  isBigTitle: boolean;
  type?: 'violet' | 'success' | 'error'
}

export function ButtonHighlightFixed({ title, type, isBigTitle }: Props) {

  return (
    <View style={styles.wrapContainer}>
      <ButtonHighlight title={title} isBigTitle={isBigTitle} type={type}/>
    </View>
    
  )
}