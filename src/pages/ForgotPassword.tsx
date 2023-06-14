import React, { useState } from "react";
import { Text , StyleSheet, View } from "react-native";
import { Backgound } from "../components/Background";
import Input from "../components/Input";
import { Container } from "../components/Container";
import { ButtonViolet } from "../components/ButtonViolet";
import { theme } from "../global/styles/theme";
import { StackTypes } from "../routes/stack";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components/Header";

export default function ForgotPassword(){
	const navigation = useNavigation<StackTypes>();
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	function handleForgtPassword() {
		navigation.navigate('Login')
		console.log('Forgot Password Send');
		setError(!error);
	}

	return (
		<Backgound gradient={false}>
			<Header
				title="Esqueci a senha"
			/>
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
		paddingHorizontal: 24,
	},
  content: {
		flex: 1,
    justifyContent: 'space-between',
		paddingBottom: 32
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
		marginBottom: 24,
		marginTop: 8,
		marginLeft: 8
	}

});