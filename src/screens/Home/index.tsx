import React, { Component, useCallback, useState } from 'react'
import { Image, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackTypes } from "../../routes/stack";
import { styles } from './styles';
import MainBanner from '../../components/MainBanner';
import { AroundYou } from '../../components/AroundYou';
import BannerMedium from '../../components/BannerMedium';
import { CardEvent, EventProps } from '../../components/CardEvent';
import SeeAll from '../../components/SeeAll';
import { CardComedian, ComedianProps } from '../../components/CardComedian';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const RenatoAlbani = require('../../assets/eventImage.png');
const RodrigoMarques = require('../../assets/RodrigoMarques.png');
import OnFireSvg from '../../assets/on-fire.svg';
import Title from '../../components/Title';
import { CardEventHighlight } from '../../components/CardEventHighlight';
import BannerSmall from '../../components/BannerSmall';
import { ButtonLike } from '../../components/ButtonLike';
import { ButtonLocation } from '../../components/ButtonLocation';
import { ListEvents } from '../../components/ListEvents';
import GetAllComediansController from '../../domain/controllers/GetAllComediansController';
import AxiosAdapter from '../../domain/adapters/AxiosAdapter';
import StandAppGatewayHttp from '../../domain/gateways/StandAppGatewayHttp';
import GetAllComedians from '../../domain/useCases/GetAllComedians';
import GetComedianById from '../../domain/useCases/GetComedianById';
import Comedian from '../../domain/entities/Comedian';

export default function Home () {

	const navigation = useNavigation<StackTypes>();
	const [comedians, setComedians] = useState<Comedian[]>([]);
	
	function handleShowAllComedians() {
		navigation.navigate('AllComedians')
	}

	function handleShowLocations() {
		navigation.navigate('Locations')
	}

	async function loadComedians() {
		const useCase = new GetAllComediansController();
  	const ouput = await useCase.execute();
    setComedians(ouput)
	}

	function handleComedianDetails(comedian: Comedian) {
		navigation.navigate('DetailsComedian', {
			comedian
		})
	}

	useFocusEffect(useCallback(() => {
    console.log('Teste')
    loadComedians();
  }, []));

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={{marginBottom: 20}}>
				<View style={styles.lineHeader}>

					<Image
						source={require('../../assets/avatar.png')}
						style={styles.avatar}
					/>

					<ButtonLocation title={'Poços de Caldas'} onPress={handleShowLocations}/>
					<ButtonLike isLiked={true} />
				</View>
				<MainBanner />

				<AroundYou/>

				<ListEvents horizontal />

				<BannerMedium/>

				<View style={{marginTop: 20}}>
					<SeeAll
						title='Todos Humoristas'
						handleShowAll={handleShowAllComedians}
					/>
				</View>

				<FlatList
					data={comedians}
					keyExtractor={item => item.id}
					horizontal
					style={styles.events}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardComedian
							data={item}
							onPress={() => handleComedianDetails(item)}
						/>
					)}
				/>

				<View style={styles.comedianTitle}>
					<Title
						title='Humoristas mais acessados'
					/>
					<OnFireSvg  style={{marginLeft: 8}} width={24} height={24}/> 
				</View>
				
				<FlatList
					data={comedians}
					keyExtractor={item => item.id}
					horizontal
					style={styles.events}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardComedian
							data={item}
							onPress={() => handleComedianDetails(item)}
						/>
					)}
				/>

				<View style={{marginTop: 20}}>
					<SeeAll
						title='Shows em todo BR'
						handleShowAll={handleShowAllComedians}
					/>
				</View>
				<ScrollView
					horizontal
					style={styles.events}
					showsHorizontalScrollIndicator={false}
				>
					<CardEventHighlight
						title={'O inimigo do nível'}
						comedianName={'Rodrigo Marques'}
						classification={'L'}
						date={'16 Mai 2023 - 6:15pm'}
						location={' Santos, SP'}
						image={RodrigoMarques}
					/>
					<CardEventHighlight
						title={'Os 4 amigos Show'}
						comedianName={'4 amigos'}
						classification={'L'}
						date={'16 Mai 2023 - 6:15pm'}
						location={' Santos, SP'}
						image={RodrigoMarques}
					/>
				</ScrollView>

				<View style={{marginTop: 20}}>
					<BannerSmall/>
				</View>

			</ScrollView>

		</SafeAreaView>
			
	)
}

