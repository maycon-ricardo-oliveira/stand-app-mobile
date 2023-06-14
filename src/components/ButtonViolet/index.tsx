import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RectButtonProps } from 'react-native-gesture-handler/lib/typescript/components/GestureButtons';

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