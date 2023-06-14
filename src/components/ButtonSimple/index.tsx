import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RectButtonProps } from 'react-native-gesture-handler/lib/typescript/components/GestureButtons';

import { styles } from './styles';

type Props = TouchableOpacity & {
  title: string;
}

export function ButtonSimple({ title, ...rest }: Props) {
  return (
    <View  style={styles.container}>
      <TouchableOpacity {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
    </View>
   
  )
}