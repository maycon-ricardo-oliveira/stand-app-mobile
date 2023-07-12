import React, { useCallback, useState } from "react";
import { Text, Image, View, FlatList } from "react-native";
import { Backgound } from "../../components/Background";
import { StackTypes, TopTabGroup } from "../../routes/stack";
import { NavigationContainer, useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { Tab, Text as Rtext, TabView } from '@rneui/themed';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';
import { CardComedian, ComedianProps } from "../../components/CardComedian";
import Title from "../../components/Title";

import MicSvg from '../../assets/microphone.svg';
import AlbumSvg from '../../assets/album.svg';
import PlainSvg from '../../assets/plain.svg';
import StarCircleSvg from '../../assets/star-circle.svg';
import { TabMenu } from "../../components/TabMenu";
import TopTabNavigator, { MyTabs } from "../../routes/toptabs";

const RenatoAlbaniPng = require('../../assets/RenatoAlbani.png') ;
const RenatoAlbani = require('../../assets/eventImage.png');

export type ComedianDetailsProps = {
	id: string;
}

type Props = {
  data: ComedianDetailsProps;
}

export default function DetailsComedian({ route, navigation }: any) {

	const { id } = route.params;
  const [index, setIndex] = useState(0);
  const [comedian, setComedian] = useState<ComedianProps>();
  const [loading, setLoading] = useState(true);

  const { violet, grey } = theme.colors;
	async function loadComedian() {
    const comedianData = await
      {
        id: '1',
        comedianName: 'Renato Albani',
        image: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Fafonso-padilha.png?alt=media&token=83ee597e-e43d-4586-922c-248b4274f5aa',
        type: 'solo',
        onFire: true,
        fullWidth: false,
      }
		
    setComedian(comedianData)
    setLoading(false)
	}

  useFocusEffect(useCallback(() => {
    console.log( `route params Id: ${id}`)
    loadComedian();
  }, []));

	return (
<>
    <View style={{height: 500}}>
    <Backgound gradient={false}>
			<View style={styles.container}>
       <Image
        style={styles.mainImage} 
        source={RenatoAlbani}
      />
        <View style={styles.content}>
          <Title title={"Renato Albani"} />
          <Text style={styles.description}>Descrição</Text>

          <View style={styles.tags}>

            <View style={styles.tag}>
              <Text style={styles.tagText}>Para toda familha</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Show solo</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Piadas leves</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Comedy Club</Text>
            </View>
            
          </View>
        </View>
			</View>
		</Backgound>
    </View>

    <TopTabGroup/>
    </>
	)
}
