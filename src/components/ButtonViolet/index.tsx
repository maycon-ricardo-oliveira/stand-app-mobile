import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RectButtonProps } from 'react-native-gesture-handler/lib/typescript/components/GestureButtons';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  isBigTitle: boolean;
}

export function ButtonViolet({ title, isBigTitle, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={isBigTitle ? styles.bigTitle : styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}