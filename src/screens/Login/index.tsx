import React, { useState } from "react";
import { Text, View, Image } from 'react-native';

import { Backgound } from "../../components/Background";
import Input from "../../components/Input";
import { ButtonHighlight } from "../../components/ButtonHighlight";
import { ButtonSimple } from "../../components/ButtonSimple";
import { Divisor } from "../../components/Divisor";
import { ButtonSocialMedia } from "../../components/ButtonSocialMedia";
import PassworInput from "../../components/PassworInput";
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from "../../routes/stack";
import { ButtonForgotPassword } from "../../components/ButtonForgotPassword";

import { styles } from './styles';
import { ModalView } from "../../components/ModalView";
import { ModalAlert } from "../../components/ModalAlert";
import { ModalAlertTerms } from "../../components/ModalAlertTerms";
import { ModalAlertLocation } from "../../components/ModalAlertLocation";

export default function Login(){
	const navigation = useNavigation<StackTypes>();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);


	const [openTermsModal, setOpenTermsModal] = useState(false);
	const [openLocationModal, setOpenLocationModal] = useState(false);

	function handleCloseTermsModal() {
    setOpenTermsModal(!openTermsModal);
  }

	function handleCloseLocation() {
    setOpenLocationModal(!openLocationModal);
  }

	function handleLogin(socialMedia?: string) {
		navigation.navigate('VerifyEmail')
		if (email === '') {
			console.log('Email inválido');
			setError(!error);
		}

	}

	function handleRegister(){
		navigation.navigate('Register')
	}

	function handleForgotPassword() {
		navigation.navigate('ForgotPassword')
	}

	return (
		<Backgound gradient={false}>
			<View style={styles.container}>
				<Image
					source={require('../../assets/Logo-x4.png')}
					style={styles.image}
				/>
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
					<View style={styles.marginTop}>
						<Input
							isError={error}
							placeholder="E-mail"
							type='email'
							autoCapitalize="none"
							onChangeText={setEmail}
							autoCorrect={false}
							keyboardType="email-address"
							value={email}
						/>
						{
							error &&
							<Text style={styles.errorMsg}>• E-mail ou senha estão incorretos</Text>
						}
					</View>

					<View style={styles.marginTop}>
						<PassworInput
							isError={error}
							autoCorrect={false}
							value={password}
							onChangeText={setPassword}
						/>
					</View>

					<ButtonForgotPassword 
						onPress={handleForgotPassword}
					/>
					<View style={styles.margin} >
						<ButtonHighlight
							title="Entrar"
							isBigTitle={false}
							onPress={() => handleLogin()}
						/>
						<View style={styles.buttonSimple}>
							<ButtonSimple
								title={"Criar conta"}	
								isViolet={false}
								onPress={handleRegister}
							/>
						</View>
					</View>

					<Divisor 
						text={'ou entre com'}
					/>

					<View style={styles.socialMediaSection}>
						<ButtonSocialMedia 
							media={'google'}
							onPress={() => handleLogin('google')}
						/>
						<ButtonSocialMedia 
							media={'apple'}
							onPress={() => handleCloseLocation()}
						/>
						<ButtonSocialMedia 
							media={'facebook'}
							onPress={() => handleCloseTermsModal()}
						/>
					</View>
				</View>
			</View>

			<ModalAlertTerms 
				visible={openTermsModal} closeModal={handleCloseTermsModal}>
			</ModalAlertTerms>
		
			<ModalAlertLocation  visible={openLocationModal} closeModal={handleCloseLocation } >
			</ModalAlertLocation>
		
		
		</Backgound>
	)
}

