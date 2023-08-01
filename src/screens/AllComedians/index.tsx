import React, { useCallback, useState } from "react";
import {  View, FlatList } from "react-native";
import { Backgound } from "../../components/Background";
import { StackTypes } from "../../routes/stack";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";

import { styles } from './styles';
import { CardComedian, ComedianProps } from "../../components/CardComedian";
import Comedian from "../../domain/entities/Comedian";
import GetAllComediansController from "../../domain/controllers/GetAllComediansController";

export default function AllComedians() {

	const navigation = useNavigation<StackTypes>();
  const [comedians, setComedians] = useState<Array<Comedian>>([]);
  const [loading, setLoading] = useState(true);


	async function loadComedians() {
    const controller = new GetAllComediansController();

    const output = await controller.execute();
		
    setComedians(output)
    setLoading(false)
	}

  function handleComedianDetails(comedian: Comedian) {
    console.log('navigate to comedian details:  ' + comedian.name)
    navigation.navigate('DetailsComedian', {
			comedian
		})
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
