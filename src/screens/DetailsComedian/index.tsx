import React, { useCallback, useState } from "react";
import { Text, Image, View, FlatList } from "react-native";
import { Backgound } from "../../components/Background";
import { StackTypes } from "../../routes/stack";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
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

const RenatoAlbaniPng = require('../../assets/RenatoAlbani.png') ;


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
		<Backgound gradient={false}>
			<View style={styles.container}>
      <Image
        style={styles.mainImage} 
        source={RenatoAlbaniPng}
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
          <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
              backgroundColor: violet,
              height: 3,
            }}
            variant="default"
          >
            <Tab.Item
              titleStyle={{ fontSize: 12 }}
              icon={<MicSvg width={24} height={24} fill={index == 0 ? violet : grey} />}
            />
            <Tab.Item 
              titleStyle={{ fontSize: 12 }}
              icon={<AlbumSvg width={24} height={24}  fill={index == 1 ? violet : grey} />}
            />
            <Tab.Item
              titleStyle={{ fontSize: 12 }}
              icon={<PlainSvg width={24} height={24} fill={index == 2 ? violet : grey} />}      
            />
            <Tab.Item
              titleStyle={{ fontSize: 12 }}
              icon={<StarCircleSvg width={24} height={24} fill={index == 3 ? violet : grey} />}   
            />
          </Tab>

          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
              <Rtext h1>Recent</Rtext>
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
              <Rtext h1>Favorite</Rtext>
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
              <Rtext h1>Cart</Rtext>
            </TabView.Item>
          </TabView>
        </View>
			</View>
		</Backgound>
	)
}
