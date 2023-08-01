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
import { ListEvents } from "../../components/ListEvents";
import { ListEventsByComedian } from "../../components/ListEventsByComedian";

export default function EventsTabMenu({ route, navigation }: any){
	const { comedianId } = route.params;
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	function handleForgotPassword() {
		navigation.navigate('Login')
		console.log('Forgot Password Send');
		setError(!error);
	}

	console.log('teste route params', comedianId)

	return (
		<View style={styles.background}>
			<Title title="Próximos shows"/>
			<View style={styles.container}>
				<ListEventsByComedian horizontal={false} comedianId={comedianId}/>
			</View>
		</View>
	)
}
