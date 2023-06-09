import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Banner from '../components/Banner';
import Comedians from '../components/Comedians';
import Attractions from '../components/Attractions';
import ComedianProfile from './ComedianProfile';
import LocationTest from '../components/LocationTest';
import Login from './Login';

export default class Home extends Component {


	render() {
		return (
				<View style={styles.container}>

					<Login />


					{/* <LocationTest /> */}
					{/* <Banner /> */}
					{/* <ComedianProfile /> */}

					{/* <View  style={styles.content}> */}
						{/* <Button /> */}
						{/* <Comedians /> */}
						{/* <Comedians /> */}

						{/* <Attractions /> */}
					{/* </View> */}

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
