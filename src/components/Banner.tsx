import { StyleSheet, Text, View,ImageBackground, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function Banner() {
	let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

	if (!fontsLoaded) {
    return <AppLoading />;
  }

	return (
    <View style={styles.container}>
			<ImageBackground style={styles.image} source={{uri : 'https://tribunadejundiai.com.br/wp-content/uploads/2022/09/Show-os-4-amigos.jpg'}}>
				<LinearGradient
					colors={['#000','transparent', 'red']}
					style={styles.background}
				/>
				<View style={styles.boxTitle}>
					<Text style={styles.subtitle} >Upcoming event</Text>
					<Text style={styles.title} >4 Amigos</Text>
				</View>
     </ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#212835',
    justifyContent: 'center',
    alignItems: 'center',
		overflow : "hidden",
		width: '100%',
		height: 328,
		marginBottom: 40,
  },
	image: {
		position: 'relative',
    justifyContent: 'center',
		alignItems: 'center',
		resizeMode: 'cover',
		height: 328,
		width: 428,
		flex: 1,
	},
	boxTitle: {
    justifyContent: 'flex-end',
		alignItems: 'center',
		textAlign: 'center',
		maxWidth: 235,
		flex: 1,
	},
	title: {
		fontFamily: 'Poppins_400Regular',
		fontWeight: '600',
    color: '#F9FAFC',
		lineHeight: 29,
		fontSize: 28,
	},
	subtitle: {
		fontFamily: 'Poppins_400Regular',
		fontWeight: '400',
		color:'#F9FAFC',
		lineHeight: 24,
		fontSize: 16,
	},
	background: {
		position: 'absolute',
		height: '100%',
		opacity: 0.5,
		left: 0,
		right: 0,
		top: 0,
	  },
})