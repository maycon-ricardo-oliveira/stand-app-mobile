import React, { useCallback, useState } from "react";
import { Text, Image, View, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { styles } from './styles';
import Title from "../../components/Title";
import GetComedianByIdController from "../../domain/controllers/GetComedianByIdController";
import Comedian from "../../domain/entities/Comedian";
import ComedianMeta from "../../domain/entities/ComedianMeta";
import { Backgound } from "../../components/Background";
import { TopTabGroup } from "../../routes/toptabs";

export type ComedianDetailsProps = {
	id: string;
}

type Props = {
  data: ComedianDetailsProps;
}

export default function DetailsComedian({ route, navigation }: any) {

	const { comedian } = route.params;
  const [comedianData, setComedianData] = useState<Comedian>(comedian);
  const [tags, setTags] = useState<ComedianMeta[]>([]);
  const [loading, setLoading] = useState(true);

	async function loadComedian() {

    const controller = new GetComedianByIdController();
    const output = await controller.execute(comedian.id);

    let tagsData:ComedianMeta[] = [];

    comedianData.metas.map((meta) => {
      if (meta.name == 'tag') {
        tagsData.push(meta)
      }
    })

    setComedianData(output)
    setTags(tagsData)
    setLoading(false)
	}

  useFocusEffect(useCallback(() => {
    loadComedian();
  }, []));

	return (
    <>
      <View style={{height: 500}}>
        <Backgound gradient={false}>
          <View style={styles.container}>
          <Image
            style={styles.mainImage} 
            source={{uri: comedian.imageMain}} 
          />
            <View style={styles.content}>
              <Title title={comedian.name} />
              <Text style={styles.description}>{comedian.miniBio}</Text>

              <FlatList style={styles.tags}
                data={tags}
                keyExtractor={item => String(item.id)}
                contentContainerStyle={{ paddingBottom: 24 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) => {
                return (
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>{item.value}</Text>
                  </View>
                )
                }}
              />

            </View>
          </View>
        </Backgound>
      </View>

      <TopTabGroup comedianId={ comedian.id}/>
    </>
	)
}