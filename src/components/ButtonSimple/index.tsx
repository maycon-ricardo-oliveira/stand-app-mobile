import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RectButtonProps } from 'react-native-gesture-handler/lib/typescript/components/GestureButtons';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function ButtonSimple({ title, ...rest }: Props) {
  return (
    <RectButton style={styles.container}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}