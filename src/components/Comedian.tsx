import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import {
  useFonts,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

interface Comedian {
	id: number;
	name: string;
	thumb: string;
}

interface ComedianProps {
	comedian: Comedian
}

export default function Comedian({ comedian }: ComedianProps) {

	let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

	if (!fontsLoaded) {
    return <AppLoading />;
  }
	
	return (
		<View style={styles.card}>
		<ImageBackground style={styles.cardImage} source={{uri : comedian.thumb}}>

			<LinearGradient
				colors={['transparent','transparent','transparent','#010101']}
				style={styles.background}
			/>
			<View style={styles.textContent}>
				<Text style={styles.cardTitle} >{comedian.name}</Text>
			</View>
		</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#865CD0',
		overflow : "hidden",
		borderRadius: 18,
		marginRight: 12,
		height: 215,
		width: 161,
		flex: 1,
	},
	cardImage: {
		resizeMode: 'cover',
		height: '100%',
		width: '100%',
		borderRadius: 18,
	},
	background: {
		position: 'absolute',
		height: '100%',
		opacity: 0.5,
		right: 0,
		left: 0,
		top: 0,
	},
	textContent: {
		justifyContent: 'flex-end',
		marginBottom: 8,
		marginLeft: 8,
		height: 30,
		flex: 1,
	},
	cardTitle: {
		fontFamily: 'Poppins_400Regular',
		fontWeight: '600',
		color: '#FEFDFF',
		lineHeight: 27,
		fontSize: 18,
	},
})