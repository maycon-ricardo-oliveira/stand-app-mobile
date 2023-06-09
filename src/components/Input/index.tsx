import { View, Text, TextInputProps, TextInput } from 'react-native'
import React from 'react'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import EmailSvg from '../../assets/email.svg';
import KeyholeSvg from '../../assets/keyhole.svg';

type Props = TextInputProps & {
	placeholder: string;
  type: 'email' | 'password' | 'search' | 'default'
}

export default function Input({placeholder, type, ...rest }: Props) {
	const { white } = theme.colors;

	return (
		<View style={styles.container}>

			<TextInput
			style={styles.input}
				{...rest}
				placeholder={placeholder}
				placeholderTextColor={white}
				{...rest}
			/>
				{
          type == 'email' ? <EmailSvg width={24} height={24} style={styles.icon} /> :
          type == 'password' ? <KeyholeSvg width={24} height={24} style={styles.icon} /> :
					null
        }

		</View>
	)
}