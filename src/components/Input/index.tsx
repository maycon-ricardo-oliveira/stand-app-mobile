import { View, Text, TextInputProps, TextInput } from 'react-native'
import React, { LegacyRef, forwardRef, useImperativeHandle } from 'react'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import EmailSvg from '../../assets/email.svg';
import ErrorSvg from '../../assets/error.svg';
import KeyholeSvg from '../../assets/keyhole.svg';

type Props = TextInputProps & {
	placeholder: string;
	isError: boolean;
  type: 'email' | 'password' | 'search' | 'default'
}

export default function Input ({placeholder, type, isError, ...rest }: Props) {
	const { white } = theme.colors;

	return (
		<View style={styles.container}>

			<TextInput
			  style={!isError ? styles.input : styles.inputError}
				{...rest}
				placeholder={placeholder}
				placeholderTextColor={white}
			/>
				{
          type == 'email' ? <EmailSvg width={24} height={24} style={styles.icon} /> :
          type == 'password' ? <KeyholeSvg width={24} height={24} style={styles.icon} /> :
					null
        }

			{isError &&
				<ErrorSvg width={24} height={24} style={styles.iconError}/> 	
			}
		</View>
	)
}

