import React, { useCallback, useState } from "react";
import { Text, Image, View, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { styles } from './styles';
import Title from "../../components/Title";
import GetComedianByIdController from "../../domain/controllers/GetComedianByIdController";
import { Backgound } from "../../components/Background";
import { TopTabGroup } from "../../routes/toptabs";

export type ComedianDetailsProps = {
	id: string;
}

type Props = {
  data: ComedianDetailsProps;
}

export default function Profile({ route, navigation }: any) {

	const { comedian } = route.params;
  const [profileData, setProfileData] = useState<any>();
  const [loading, setLoading] = useState(true);

	async function loadComedian() {

    const controller = new GetComedianByIdController();
    const output = await controller.execute(comedian.id);

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
            </View>
          </View>

        </Backgound>
      </View>

      <TopTabGroup comedianId={ comedian.id}/>
    </>
	)
}