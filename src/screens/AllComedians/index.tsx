import React, { useCallback, useState } from "react";
import {  View, FlatList } from "react-native";
import { Backgound } from "../../components/Background";
import { StackTypes } from "../../routes/stack";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";

import { styles } from './styles';
import { CardComedian, ComedianProps } from "../../components/CardComedian";

export default function AllComedians() {

	const navigation = useNavigation<StackTypes>();
  const [comedians, setComedians] = useState<ComedianProps[]>([]);
  const [loading, setLoading] = useState(true);


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
    setLoading(false)
	}

  function handleComedianDetails(comedian: ComedianProps) {
    console.log('navigate to comedian details:  ' + comedian.comedianName)
  }

  useFocusEffect(useCallback(() => {
    console.log('Teste')
    loadComedians();
  }, []));

	return (
		<Backgound gradient={false}>
			<Header
				title="Todos humoristas"
			/>
			<View style={styles.container}>
      { !loading && 
        <FlatList
          data={comedians}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardComedian
              data={item}
              style={styles.cardComedian}
              onPress={() => handleComedianDetails(item)}
            />
          )}
          // ItemSeparatorComponent={() => <ListDivider />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 130 }}
          style={styles.content}
        />
      }
			</View>
		</Backgound>
	)
}
