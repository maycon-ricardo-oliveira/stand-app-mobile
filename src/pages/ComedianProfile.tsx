import { StyleSheet, Text, View, FlatList } from 'react-native'
import React  , { useEffect, useState } from 'react'
import GetComedianByIdController from "../domain/controllers/GetComedianByIdController";
import Comedian from '../domain/entities/Comedian';


const ComedianProfile = () => {

	const [comedian, setComedian] = useState<Comedian>();



	useEffect(() => {

		async function getComedian (comedianId: string) {
			const controller = new GetComedianByIdController();			
			const data = await controller.execute(comedianId);
			setComedian(data);
		}

		const comedianData = getComedian('64546ba245402'); 

	}, [comedian]);

	return (
		<View style={styles.container}>
			<View style={styles.line}>
				<Text style={styles.title}>{comedian?.name}</Text>
				<Text style={styles.seeAllButton}>See all</Text>
			</View>
		</View>
	)
}

export default ComedianProfile

const styles = StyleSheet.create({
	container: {
		paddingLeft: 33,
		paddingRight: 33,
		backgroundColor: '#212835',
		width: '100%',
		height: 257,
	},
	line: {
		justifyContent: 'space-between',
		alignItems: 'flex-start',
    flexDirection: 'row',
	},
	title: {
    color: '#F9FAFC',
		fontFamily: 'Poppins_400Regular',
		fontWeight: '500',
		fontSize: 16,
		lineHeight: 24
	},
	seeAllButton: {
    color: '#A995CE',
		fontFamily: 'Poppins_400Regular',
		fontWeight: '400',
		fontSize: 12,
		lineHeight: 18
	},
	flatList: {
		marginTop: 18
	},

})