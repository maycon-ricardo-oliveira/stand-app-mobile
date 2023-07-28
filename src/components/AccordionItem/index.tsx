import React, { PropsWithChildren, ReactNode, useState } from 'react';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { TouchableOpacity, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

type AccordionItemPros = PropsWithChildren<{
  title: string;
}>;

export function AccordionItem({ title, children }: AccordionItemPros) {
  const {white} = theme.colors;
  const [ expanded, setExpanded ] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = <View style={styles.accordBody}>{ children }</View>;

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={ toggleItem }>
        <Text style={styles.accordTitle}>{ title }</Text>
        <Icon name={ expanded ? 'chevron-up' : 'chevron-down' } size={20} color={white} />
      </TouchableOpacity>
      { expanded && body }
    </View>
  );
}