import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Banner from '../../components/Banner';
import Comedians from '../../components/Comedians';
import Attractions from '../../components/Attractions';
import ComedianProfile from '../ComedianProfile';
import LocationTest from '../../components/LocationTest';
import Login from '../Login';
import ForgotPassword from '../ForgotPassword';

import { styles } from './styles';

export default class Home extends Component {

	render() {
		return (
				<View style={styles.container}>

					{/* <Login /> */}

					{/* <ForgotPassword/> */}

					{/* <LocationTest /> */}
					<Banner />
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
