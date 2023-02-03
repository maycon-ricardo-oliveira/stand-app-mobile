import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Profile = () => {
	return (
		<View style={styles.container}
		>
			<Text>Profile</Text>
			<Image 
				source={{uri: 'https://randomuser.me/api/portraits/men/34.jpg'}} 
				style={styles.image}
				/>
		</View>
	)
}

export default Profile

const styles = StyleSheet.create({
	container: {
    flex: 1,
		backgroundColor: '#212835',
    alignItems: 'flex-start',
    justifyContent: 'center',
		width: 40,
		height: 40,
	},
	image: {

	
	},

})