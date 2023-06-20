import React, { useState } from "react";
import { Text, View } from "react-native";
import { Backgound } from "../../components/Background";
import Input from "../../components/Input";
import { ButtonHighlight } from "../../components/ButtonHighlight";
import { StackTypes } from "../../routes/stack";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";

import { styles } from './styles';
import PassworInput from "../../components/PassworInput";
import { Spacing } from "../../components/Spacing";
import { ButtonTermsPrivacity } from "../../components/ButtonTermsPrivacity";

export default function Register() {

	const navigation = useNavigation<StackTypes>();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [terms, setTerms] = useState(false);

	const [error, setError] = useState<Array<string>>([
		'user',
		'email',
		'phone',
		'password',
		'terms'
	]);

	function handleRegister() {

		if (email == '') {
			setErrorInput('email')
		}

		if (name == '') {
			setErrorInput('user')
		}

		navigation.navigate('Login')
		console.log('Forgot Password Send');
		
	}

	function setErrorInput(input: string) {
	}

	function checkError(input: string): boolean {
		return error.includes(input)
	}

	function handleTerms() {
		setTerms(!terms)
	}

	return (
		<Backgound gradient={false}>
			<Header
				title="Criar Conta"
			/>
			<View style={styles.container}>
				<View style={styles.content}>
					<Input
						isError={checkError('user')}
						placeholder="Nome"
						type="user"
						onChangeText={setName}
						autoCorrect={false}
						value={name}
					/>
					{
						checkError('user') &&
						<Text style={styles.errorMsg}>• Nome muito pequeno</Text>
					}

					<Spacing size={16}/>

					<Input
						isError={checkError('email')}
						placeholder="E-mail"
						type="email"
						autoCapitalize="none"
						onChangeText={setEmail}
						autoCorrect={false}
						keyboardType="email-address"
						value={email}
					/>
					{
						checkError('email') &&
						<Text style={styles.errorMsg}>• Email inválido</Text>
					}
					<Spacing size={16}/>

					<Input
						isError={checkError('phone')}
						placeholder="Telefone"
						type="phone"
						onChangeText={setPhone}
						autoCorrect={false}
						keyboardType="phone-pad"
						value={phone}
					/>
					{
						checkError('phone') &&
						<Text style={styles.errorMsg}>• Número de telefone inválido</Text>
					}
					<Spacing size={16}/>

					<PassworInput
						isError={checkError('password')}
						placeholder="Criar Senha"
						autoCorrect={false}
						value={password}
						onChangeText={setPassword}
					/>
					{
						checkError('password') &&
						<Text style={styles.errorMsg}>• A senha deve conter 8 carcteres</Text>
					}
					<Spacing size={16}/>
					
					<PassworInput
						isError={checkError('password')}
						placeholder="Repetir Senha"
						autoCorrect={false}
						value={password}
						onChangeText={setPassword}
						/* TODO: change to repeat password */
					/>
					{
						checkError('password') &&
						<Text style={styles.errorMsg}>• As senhas não estão iguais</Text>
					}

					<View style={styles.checkboxContainer}>
						<ButtonTermsPrivacity
						  themeText={'white'}
						/>
					</View>

				</View>

				<View style={styles.footer}>
					<ButtonHighlight
						isBigTitle
						title="Enviar"
						onPress={handleRegister}
					/>
				</View>
			</View>
		</Backgound>
	)
}
