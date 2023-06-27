import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  status: 'done' | 'sold_off' | 'ending' | 'available'
}

export function EventStatus({ status, ...rest }: Props) {
  const { success900, success000, error, error000, alert, alert000 } = theme.colors;

  function render() {
    switch(status) {

      case "done": return (
        <View style={[styles.container, { backgroundColor: success000}]}>
          <Text style={[styles.text, { color: success900}]}>Disponível</Text>
        </View>
      );

      case "available": return (
        <View style={[styles.container, { backgroundColor: success000, width: 80 }]}>
          <Text style={[styles.text, { color: success900}]}>Show Disponível</Text>
        </View>
      );
      case "sold_off": return (
        <View style={[styles.container, { backgroundColor: error000}]}>
          <Text style={[styles.text, { color: error}]}>Esgotado</Text>
        </View>
      );
      case "ending": return (
        <View style={[styles.container, { backgroundColor: alert000}]}>
          <Text style={[styles.text, { color: alert}]}>Acabando</Text>
        </View>
      );
    }
  }

  return (
    <>{ render() }</>
  )

}