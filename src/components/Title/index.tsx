import { View,Text,  TextInputProps, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { styles } from './styles';

import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

type Props = {
  title: string;
}

export default function Title({ title }: Props) {
  const { white } = theme.colors;

	return (
		<View style={styles.container}>
      <Text  style={styles.title}>{title}</Text>
		</View>
	)
}