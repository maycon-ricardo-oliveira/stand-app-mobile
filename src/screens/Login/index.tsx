import React, { useEffect, useState } from "react";
import { Text, View, Image, Button } from 'react-native';

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
import { ModalAlertSendEmail } from "../../components/ModalAlertSendEmail";
import { ModalAlertInvalidCode } from "../../components/ModalAlertInvalidCode";
import SocialMediaAuthController from "../../domain/controllers/Auth/SocialMediaAuthController";

type AuthResponse = {
	params: {
		access_token: string;
	},
	type: string;
}

import * as WebBrowser from 'expo-web-browser';


import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { makeRedirectUri } from "expo-auth-session";
import { err } from "react-native-svg/lib/typescript/xml";


WebBrowser.maybeCompleteAuthSession();

export default function Login(){
	const WEB_CLIENT_ID = "44536136481-vmflhhnl4f117ho16m9d0u75t9imuoc0.apps.googleusercontent.com";
	const AND_CLIENT_ID = "44536136481-pa62d2ebbmlk8ckes70uvmv98qnekdre.apps.googleusercontent.com";
	const IOS_CLIENT_ID = "44536136481-3gfdcju5eioqnvepget9mhricjj4itri.apps.googleusercontent.com";

	const navigation = useNavigation<StackTypes>();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const [openTermsModal, setOpenTermsModal] = useState(false);
	const [openLocationModal, setOpenLocationModal] = useState(false);

	const [userInfo, setUserInfo] = useState<any>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
		androidClientId: AND_CLIENT_ID,
		iosClientId: IOS_CLIENT_ID,
		webClientId: WEB_CLIENT_ID,
		expoClientId: WEB_CLIENT_ID,
		redirectUri: "https://auth.expo.io/@maycon-oliveira/stand-app-mobile"
	})

	useEffect(() => {
		googleSignIn()
	}, [response])

	function handleCloseTermsModal() {
    setOpenTermsModal(!openTermsModal);
  }

	function handleCloseLocation() {
    setOpenLocationModal(false);
  }

	const getUserInfo = async (token: string) => {
		if (!token) return;
				
		try {

			const response = await fetch(`https://googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`)

			const user = await response.json();
			await AsyncStorage.setItem("@user", JSON.stringify(user));
			setUserInfo(user);

			console.log(user);

		} catch(error) {

			console.log("Error: " + error)
		}
	}

	async function googleSignIn() {
		console.log(userInfo);

    try {

			const user = await AsyncStorage.getItem('@user');

			if (!user) {
				if (response?.type == "success" && response.authentication?.accessToken) {
					await getUserInfo(response.authentication.accessToken)
				}
			} else {
				setUserInfo(JSON.parse(user));
			}

			// const CLIENT_ID = WEB_CLIENT_ID;

			// const REDIRECT_URI = "https://auth.expo.io/@maycon-oliveira/stand-app-mobile";
			// const SCOPE = encodeURI("profile email");
			// const RESPONSE_TYPE = "token";

			// const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=${SCOPE}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}`;

			// const { type, params } = await AuthSession.startAsync({
				
			// 	clientId: CLIENT_ID,
			// 	scopes: ['profile', 'email'],
			// 	redirectUri: makeRedirectUri({ useProxy: true })
			// }) as AuthResponse;

			// console.log(params, type);

      // if (type === 'success') {

			// 	const response = await fetch(`https://googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)

			// 	const user = await response.json();
			// 	console.log(user);
			// 	setUserInfo(user);
			// 	setSignedIn(true);
			
      //   navigation.navigate("Home");
      // }
    } catch (error) {
      console.error("error with login", error);
    }

  };

	async function handleSocialMediaLogin(socialMedia: string) {

		const controller = new SocialMediaAuthController();
		const response = controller.redirect(socialMedia)

		console.log("Login media")
		console.log(response);

	}

	function handleLogin() {
		if (email === '' || password === '') {
			setError(!error);
			return;
		}

		navigation.navigate('Home')
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
							onPress={() => promptAsync()}
						/>
						{/* <ButtonSocialMedia 
							media={'apple'}
							onPress={() => handleCloseLocation()}
						/> */}
						<ButtonSocialMedia 
							media={'facebook'}
							onPress={() => handleSocialMediaLogin('facebook')}
						/>
					</View>
				</View>
			</View>

			{/* <ModalAlertTerms 
				visible={openTermsModal} closeModal={handleCloseTermsModal}>
			</ModalAlertTerms> */}
		
			{/* <ModalAlertLocation visible={openLocationModal} closeModal={handleCloseLocation } >
			</ModalAlertLocation> */}
		
		{/* <ModalAlertSendEmail>

		</ModalAlertSendEmail> */}
		
		{/* <ModalAlertInvalidCode closeModal={() => handleCloseLocation}>
			
		</ModalAlertInvalidCode> */}
		</Backgound>
	)
}

