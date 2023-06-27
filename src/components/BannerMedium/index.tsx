import { View,Text, ImageBackground,  TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../Title';

const BannerPng = require('../../assets/banner-secondary.png') ;

type Props  = TouchableOpacityProps & {
	source?: string;
}

export default function BannerMedium({ source , ...rest} : Props) {
	const { white, linearBanner } = theme.colors;

	function handleOpenSource(source?: string) {
		console.log('open banner link')
	}
	return (
		
			<View style={styles.container}>
				<View style={styles.content}>
					<Title title={'Destaque da vez'}/>
					<TouchableOpacity
					{...rest}
					onPress={() => handleOpenSource(source)}
					>
						<ImageBackground style={styles.image} source={BannerPng}>
						</ImageBackground>
					</TouchableOpacity>
				</View>
			</View>
		
	)
}