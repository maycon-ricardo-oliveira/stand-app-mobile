import { View,Image, Text, ImageBackground,  TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../Title';

const BannerPng = require('../../assets/BannerSmall.png') ;

type Props  = TouchableOpacityProps & {
	source?: string;
}

export default function BannerSmall({ source , ...rest} : Props) {
	const { white, linearBanner } = theme.colors;

	function handleOpenSource(source?: string) {
		console.log('open banner link')
	}
	return (
		
		<View style={styles.container}>
			<View style={styles.content}>
				<Title title={'Veja também'}/>
				<TouchableOpacity
				style={styles.banner}
				{...rest}
				onPress={() => handleOpenSource(source)}
				>
					<Image style={styles.image} source={BannerPng}/>
				</TouchableOpacity>
			</View>
		</View>
		
	)
}