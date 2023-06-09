import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

import { theme } from '../global/styles/theme';
import { Backgound } from "../components/Background";
import Input from "../components/Input";
import { ButtonViolet } from "../components/ButtonViolet";
import { ButtonSimple } from "../components/ButtonSimple";
import { Divisor } from "../components/Divisor";
import { ButtonSocialMedia } from "../components/ButtonSocialMedia";
import PassworInput from "../components/PassworInput";


export default function Login(){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleButton() {

	}

	return (
		<Backgound gradient={false}>
			<View style={styles.container}>
				<Image
					source={require('../assets/Logo-x4.png')}
					style={styles.image}
				/>

        <View style={styles.content}>

          <Text style={styles.title}>Login</Text>

						<View style={styles.marginTop}>
							<Input
								placeholder="E-mail"
								type='email'
								onChangeText={setEmail}
							/>
						</View>
						<View style={styles.marginTop}>


							<PassworInput 
							/>
						</View>
          
          <Text 
            style={styles.forgot}
          >Esqueci minha senha</Text>

					<ButtonViolet
            title="Entrar"
            isBigTitle={false}
            onPress={handleButton}
          />
					<View style={styles.buttonSimple}>
						<ButtonSimple
							title={"Criar conta"}	
						/>
					</View>

					<Divisor 
						text={'ou entre com'}
					/>

					<View style={styles.socialMediaSection}>
						<ButtonSocialMedia 
							media={'google'}
						/>
						<ButtonSocialMedia 
							media={'apple'}
						/>
						<ButtonSocialMedia 
							media={'facebook'}
						/>
					</View>
				</View>
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
	forgot: {
		fontFamily: theme.fonts.title600,
    color: theme.colors.white,
		alignSelf: "flex-end",
		padding: 8,
		fontSize: 16,
		marginBottom: 32
	},
	button: {
		backgroundColor: theme.colors.violet,
    borderRadius: 8,
	},
	buttonText: {
    color: theme.colors.white200,
    fontSize: 15,
		textAlign: 'center'
	},
	marginTop: {
		marginTop: 24
	},

	buttonSimple: {
		marginBottom: 28,
		marginTop: 16
	},

	socialMediaSection: {
		width: '100%',
		justifyContent: 'center',
		flexDirection: 'row',
		marginTop: 24,
	}

});
