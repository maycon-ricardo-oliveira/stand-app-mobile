import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { View } from 'react-native';
type Props = {
  gradient: boolean;
  children: ReactNode;
}

export function Backgound({gradient, children }: Props) {
  const {linear, violet, blueNight} = theme.colors;

  return (
    gradient ?
    <LinearGradient
      style={styles.container}
      colors={linear}
      locations={[0.02, 0.2, 0.5, 0.9]}
    >
      {children}
    </LinearGradient> :
        <View
        style={styles.containerSolid}
      >
        {children}
      </View> 
  )
}