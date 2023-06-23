import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { styles } from './styles';
import MainBanner from '../../components/MainBanner';
import { AroundYou } from '../../components/AroundYou';
import SecondaryBanner from '../../components/SecondaryBanner';

export default class Home extends Component {

	render() {
		return (
				<View style={styles.container}>

					{/* <MainBanner /> */}

					<AroundYou/>

				
				<SecondaryBanner/>
				</View>
			)
	}
}

