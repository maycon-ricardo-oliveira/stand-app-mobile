import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Banner from '../components/Banner';
import Comedians from '../components/Comedians';
import Attractions from '../components/Attractions';

export default class Home extends Component {
	render() {
		return (
				<View style={styles.container}>
					<Banner />

					<View  style={styles.content}>
						<Button />
						<Comedians />
						<Attractions />
					</View>

				</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#212835',
		borderRadius: 50,
		width: '100%'
  },
	content: {
	}
});
