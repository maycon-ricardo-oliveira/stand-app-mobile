import { View,Text} from 'react-native';
import { styles } from './styles';
import React from 'react';

type Props = {
  text: string | null;
}

export function Divisor({ text = null}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.divisor} />
      {text ? 
        <Text style={styles.text}>
          {text}
        </Text>
      : ''}
    </View>
  )
}