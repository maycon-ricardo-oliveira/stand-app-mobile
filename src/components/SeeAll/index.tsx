import { View,Text,  TextInputProps, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { styles } from './styles';

import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

type Props = {
  title: string;
  handleShowAll: () => any;
}

export default function SeeAll({ title, handleShowAll }: Props) {
  const { white } = theme.colors;

	return (
		<View style={styles.container}>

      <Text  style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={handleShowAll} style={styles.seeAllButton}>
         <Text  style={styles.seeAllText}>Ver todos</Text>
         <Feather style={styles.seeAllIcon}
          name='chevron-right'
          size={24}
          color={white}
        />
      </TouchableOpacity>
		</View>
	)
}