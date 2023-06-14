import React, { useState } from "react";
import { Text , StyleSheet, View } from "react-native";
import { Backgound } from "../components/Background";
import Input from "../components/Input";
import { Container } from "../components/Container";
import { ButtonViolet } from "../components/ButtonViolet";
import { theme } from "../global/styles/theme";


export default function ForgotPassword(){

	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	function handleForgtPassword() {

			console.log('Email inválido');
			setError(!error);
	

	}

	return (
		<Backgound gradient={false}>
			<View style={styles.container}>
				<View style={styles.content}>
					<View >
					<Text style={styles.text}>Informe seu e-mail cadastrado, para enviarmos um o link para criar uma nova senha.</Text>
					<Input
						isError={error}
						placeholder="E-mail"
						type="email"
					/>
					{
								error &&
								<Text style={styles.errorMsg}>• E-mail ou senha estão incorretos</Text>
							}
					</View>
					<View>
						<ButtonViolet
							isBigTitle
							title="Enviar"
							onPress={handleForgtPassword}
						>
						</ButtonViolet>
					</View>
				</View>
			</View>
		</Backgound>
	)
}
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 40,
		paddingHorizontal: 16
	},
  content: {
		flex: 1,
		padding: 16,
    justifyContent: 'space-between',
  },
	title: {
		color: theme.colors.white,
		fontFamily: theme.fonts.title600,
		fontSize: 24,
		lineHeight: 36,
		paddingHorizontal: 8,
		marginLeft: 24
	},
	errorMsg: {
		fontFamily: theme.fonts.text400,
		fontSize: 14,
		lineHeight: 18,
		color: theme.colors.grey,
		marginTop: 8
	},
	text: {
		color: theme.colors.white,
		fontSize: 16,
		lineHeight: 24,
		fontFamily: theme.fonts.text400,
		fontWeight: '500',
		paddingHorizontal: 8,
		marginBottom: 24,
		marginTop: 8,
		marginLeft: 24
	}

});