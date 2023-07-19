import React, { useState } from "react";
import { Text, View } from "react-native";
import { Backgound } from "../../components/Background";
import Input from "../../components/Input";
import { ButtonHighlight } from "../../components/ButtonHighlight";
import { StackTypes } from "../../routes/stack";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { styles } from './styles';
import Title from "../../components/Title";
import { ListPictures } from "../../components/ListPictures";

export default function AlbumTabMenu(){
	const navigation = useNavigation<StackTypes>();
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	function handleForgotPassword() {
		navigation.navigate('Login')
		console.log('Forgot Password Send');
		setError(!error);
	}

	return (
		<View style={styles.background}>
			<Title title="Imagens do homorista"/>
			<View style={styles.container}>
				<ListPictures />
			</View>
		</View>
	)
}
