import React, { Component, useCallback, useState } from 'react'
import { Image, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackTypes } from "../../routes/stack";
import { styles } from './styles';
import MainBanner from '../../components/MainBanner';
import { AroundYou } from '../../components/AroundYou';
import BannerMedium from '../../components/BannerMedium';
import { CardEvent } from '../../components/CardEvent';
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

export default function Home () {

	const navigation = useNavigation<StackTypes>();
	const [comedians, setComedians] = useState<ComedianProps[]>([]);
	
	function handleShowAllComedians() {
		navigation.navigate('AllComedians')
	}

	function handleShowLocations() {
		navigation.navigate('Locations')
	}

	async function loadComedians() {
    const  comediansData = await [
      {
        id: '1',
        comedianName: 'Renato Albani',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fafonso-padilha.png?alt=media&token=83ee597e-e43d-4586-922c-248b4274f5aa',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },
      {
        id: '2',
        comedianName: 'Rodrigo Marques',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fafonso-padilha.png?alt=media&token=83ee597e-e43d-4586-922c-248b4274f5aa',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },
      {
        id: '3',
        comedianName: 'Bruna Louise',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fbruna-louise.png?alt=media&token=47fbc753-5c41-4a8f-a66a-0e51c14cb790',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },
      {
        id: '4',
        comedianName: 'Renato Albani',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fafonso-padilha.png?alt=media&token=83ee597e-e43d-4586-922c-248b4274f5aa',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },
      {
        id: '5',
        comedianName: 'Renato Albani',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fafonso-padilha.png?alt=media&token=83ee597e-e43d-4586-922c-248b4274f5aa',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },
      {
        id: '6',
        comedianName: 'Renato Albani',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fafonso-padilha.png?alt=media&token=83ee597e-e43d-4586-922c-248b4274f5aa',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      },

    ]
		
    setComedians(comediansData)
	}

	function handleComedianDetails(comedian: ComedianProps) {
		navigation.navigate('DetailsComedian', {
			id: comedian.id	
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

				<ScrollView
					horizontal
					style={styles.events}
					showsHorizontalScrollIndicator={false}
				>
				<CardEvent
					title={'Assim caminha a humanidade'}
					comedianName={'Renato Albani'}
					classification={'L'}
					date={'16 Mai 2023 - 6:15pm'}
					location={' Santos, SP'}
					image={RenatoAlbani}
				/>
				<CardEvent
					title={'O inimigo do nível'}
					comedianName={'Rodrigo Marques'}
					classification={'L'}
					date={'16 Mai 2023 - 6:15pm'}
					location={' Santos, SP'}
					image={RodrigoMarques}
				/>
				</ScrollView>

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

