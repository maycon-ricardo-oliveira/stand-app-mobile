import React, { useState } from "react";
import { Text, View } from "react-native";
import { Backgound } from "../../components/Background";
import Input from "../../components/Input";
import { ButtonViolet } from "../../components/ButtonViolet";
import { StackTypes } from "../../routes/stack";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { styles } from './styles';

export default function ForgotPassword(){
	const navigation = useNavigation<StackTypes>();
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	function handleForgotPassword() {
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
							onPress={handleForgotPassword}
						>
						</ButtonViolet>
					</View>
				</View>
			</View>
		</Backgound>
	)
}
