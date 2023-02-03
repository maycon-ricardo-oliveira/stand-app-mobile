import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
  useFonts,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function Button() {

  function handleAddNewTask () {

  }

  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

	if (!fontsLoaded) {
    return <AppLoading />;
  }

	return (
		
		<View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.primaryButton}
        onPress={handleAddNewTask}
      >
        <Text style={styles.text}>See dates</Text>
      </TouchableOpacity>
			
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.secondaryButton}
        onPress={handleAddNewTask}
      >
        <Text style={styles.text}>Tickets</Text>
      </TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 37,
    paddingLeft: 37,
    flexDirection: 'row',
    marginBottom: 26,
    justifyContent: 'space-around',
    width: '100%'
  },
	primaryButton: {
		backgroundColor: '#865CD0',
		width: 170,
		height: 43,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 14,
    marginRight: 14,
	},
  secondaryButton: {
		backgroundColor: '#2F3A4B',
		width: 170,
		height: 43,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 14
	},
	text: {
		color:'#F9FAFC',
		fontFamily: 'Poppins_400Regular',
		fontWeight: '400',
		fontSize: 16,
		lineHeight: 24
	}
})