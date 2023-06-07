import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
type Props = {
  children: ReactNode;
}

export function Backgound({ children }: Props) {
  const {linearOne, linearTwo, linearThree, linearFour } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[linearOne, linearTwo, linearThree, linearFour]}
      locations={[0.02, 0.2, 0.5, 0.9]}
    >
      {children}
    </LinearGradient>
  )
}