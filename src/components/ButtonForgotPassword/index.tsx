import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
}

export function ButtonForgotPassword({ ...rest }: Props) {

  return (
    <TouchableOpacity style={styles.container}
      {...rest}
    >
      <Text style={styles.text}>Esqueci minha senha</Text>
    </TouchableOpacity>
  )
}