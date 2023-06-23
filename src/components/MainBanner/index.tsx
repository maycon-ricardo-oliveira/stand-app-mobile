import { View,Text, ImageBackground } from 'react-native'
import React from 'react'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';


const BannerPng = require('../../assets/banner-edit.png') ;


export default function MainBanner() {
	const { white, linearBanner } = theme.colors;

	return (
		<View style={styles.container}>
			<ImageBackground style={styles.image} source={BannerPng}>
				<LinearGradient
					colors={linearBanner}
					locations={[ 0.63, 0.8, 0.9]}
					style={styles.background}
				/>
				<View style={styles.boxTitle}>
					{/* <Text style={styles.subtitle} >Upcoming event</Text>
					<Text style={styles.title} >4 Amigos</Text> */}
					<View style={styles.datesButton}>
					<Text style={styles.dates}>Dia 05, 06 e 07 de maio</Text>
					</View>
				</View>
     </ImageBackground>
		</View>
	)
}