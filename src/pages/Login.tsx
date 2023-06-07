import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

import { theme } from '../global/styles/theme';
import { Backgound } from "../components/Background";
import Input from "../components/Input/Input";
import Logo from '../../assets/Logo-x1.png';
import EmailSvg from '../../assets/email.svg';
import { ButtonViolet } from "../components/ButtonViolet";
import { RectButton } from "react-native-gesture-handler";
export default function Login(){
	const { blueNight, success } = theme.colors;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleButton() {

	}
	return (
		<Backgound>
			<View style={styles.container}>
				<Image
					source={require('../assets/Logo-x4.png')}
					style={styles.image}
				/>

			<View style={styles.content}>

				<Text style={styles.title}>Login</Text>

				<Input
					placeholder="E-mail"
					type='email'
					onChangeText={setEmail}
				/>
				<Input
					placeholder="Senha"
					type='password'
					onChangeText={setPassword}
					
				/>

				<Text 
					style={styles.forgot}
				>Esqueci minha senha</Text>
				</View>

				<ButtonViolet
						title="Entrar"
						isBigTitle={false}
						onPress={handleButton}
					/>
			</View>

		</Backgound>

	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		alignItems: 'center',
		padding: 40,
		width: '100%',
		marginTop: 40,
  },
	image: {
		alignItems: 'center',
    width: 240,
    height: 80,
		marginBottom: 40,
	},
	content: {
		flex: 1,
		width: '100%',
	},
	title: {
		fontFamily: theme.fonts.title600,
    color: theme.colors.white,
    fontSize: 24,
	},
	input: {
		marginTop: 24,
		marginBottom: 20,
	},
	forgot: {
		fontFamily: theme.fonts.title600,
    color: theme.colors.white,
		alignSelf: "flex-end",
		padding: 8,
		fontSize: 16,

	},
	button: {
		backgroundColor: theme.colors.violet,
    borderRadius: 8,
	},
	buttonText: {
    color: theme.colors.white200,
    fontSize: 15,
		textAlign: 'center'
	}
});
