import { View, Text, TextInputProps, TextInput } from 'react-native'
import React from 'react'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import EmailSvg from '../../assets/email.svg';


type Props = TextInputProps & {
  placeholder: string;
	type: 'email' | 'password' | 'search' | 'default'
}

export default function Input({placeholder, type, ...rest }: Props) {
	const {linearOne, linearTwo, linearThree, linearFour, white } = theme.colors;

	return (
		<TextInput
		style={styles.container}
		{...rest}
		placeholder={placeholder}
		placeholderTextColor={white}
	>
	</TextInput>
	)
}