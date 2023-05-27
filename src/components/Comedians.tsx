import { StyleSheet, Text, View, FlatList } from 'react-native'
import React  , { useState } from 'react'
import Comedian from './Comedian'
import GetComedianById from '../domain/useCases/GetComedianById';
import GetComedianByIdController from '../domain/controllers/GetComedianByIdController';

interface Comedian {
	id: number;
	name: string;
	thumb: string;
}

const comedians: Comedian[] = [{
	id: new Date().getTime(),
	name: 'Bruna Louise',
	thumb: 'https://odia.ig.com.br/_midias/jpg/2022/06/23/385x420/1_image00004-25588268.jpeg',
}, {
	id: new Date().getTime(),
	name: 'Thiago Ventura',
	thumb: 'https://ingresso.net.br/wp-content/uploads/2023/08/ingressos-thiago-ventura-valor-datas.jpg',
}, {
	id: new Date().getTime(),
	name: 'Igor Guimarães',
	thumb: 'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2023/01/14084158/WhatsApp-Image-2023-01-13-at-15.51.04.jpeg',
}, {
	id: new Date().getTime(),
	name: 'Afonso Padilha',
	thumb: 'https://i.pinimg.com/originals/b2/55/53/b255539de9b7d019b12ffbbdd470d67e.jpg',
},
]

const Comedians = () => {

	async function getComedianById(){

		const controller = new GetComedianByIdController();
		return controller.execute('64546ba245402');
	}

	return (
		<View style={styles.container}>
			<View style={styles.line}>
				<Text style={styles.title}>Events in your city</Text>
				<Text style={styles.seeAllButton}>See all</Text>
			</View>

			<FlatList style={styles.flatList}
				data={comedians}
				keyExtractor={item => String(item.id)}
				contentContainerStyle={{ paddingBottom: 24 }}
				showsVerticalScrollIndicator={false}
				horizontal={true}
				renderItem={({ item, index }) => {
				return (
					<Comedian comedian={item} />
				)
				}}
			/>
		</View>
	)
}

export default Comedians

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