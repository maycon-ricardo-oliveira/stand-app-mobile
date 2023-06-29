import React, { useCallback, useState } from "react";
import { Text, View, FlatList, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Backgound } from "../../components/Background";
import { StackTypes } from "../../routes/stack";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";

import { styles } from './styles';
import Input from "../../components/Input";
import { Checkbox } from "../../components/Checkbox";

import TargetSvg from "../../assets/target.svg";
import MapPointSvg from '../../assets/map-point.svg'
import { Divisor } from "../../components/Divisor";

type ItemProps = {
	title: string;
	text: string;
}

type Props = TouchableOpacityProps & {
  data: ItemProps;
}

function LocationItemList({ data }: Props) {
  return(
    <TouchableOpacity style={styles.listItem}>
      <MapPointSvg style={styles.targetIcon} width={32} height={32}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default function Locations() {

	const navigation = useNavigation<StackTypes>();
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState<ItemProps[]>([]);

	async function loadLocations() {
    const  locationsData = await [
      {
        title: 'Renato Albani',
        text: 'Rua Monsenhor Thiago, 1024 - Jumpaíga - Rondônia '
      },
      {
        title: 'Rodrigo Marques',
        text: 'Rua Monsenhor Thiago, 1024 - Jumpaíga - Rondônia '
      },
      {
        title: 'Rodrigo Marques',
        text: 'Rua Monsenhor Thiago, 1024 - Jumpaíga - Rondônia '
      },
      {
        title: 'Rodrigo Marques',
        text: 'Rua Monsenhor Thiago, 820 - São Francisco - Limoeiro do Norte'
      },
      {
        title: 'Rodrigo Marques',
        text: 'Rua Monsenhor Thiago, 820 - São Francisco - Limoeiro do Norte'
      },
      {
        title: 'Rodrigo Marques',
        text: 'Rua Monsenhor Thiago, 820 - São Francisco - Limoeiro do Norte'
      },
      {
        title: 'Rodrigo Marques',
        text: 'Rua Monsenhor Thiago, 820 - São Francisco - Limoeiro do Norte'
      },
      {
        title: 'Rodrigo Marques',
        text: 'Rua Monsenhor Thiago, 820 - São Francisco - Limoeiro do Norte'
      },
      {
        title: 'Rodrigo Marques',
        text: 'Rua Monsenhor Thiago, 820 - São Francisco - Limoeiro do Norte'
      },
      

    ]
		setLocations(locationsData)
    setLoading(false)
	}

  function handleComedianDetails(item: ItemProps) {
    console.log('navigate to comedian details:  ' + item.title)
  }

  useFocusEffect(useCallback(() => {
    console.log('Teste')
    loadLocations();
  }, []));

	return (
		<Backgound gradient={false}>
			<Header
				title="Localização"
			/>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Preencha seu endereço para encontrar os shows mais próximos de você</Text>
      </View>

			<View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.internalContainer}>
            <Input placeholder={"Pesquisar"} isError={false} type={"search"}/>

            <View style={styles.locationContainer} >
              <TargetSvg  style={styles.targetIcon} width={32} height={32}/>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Usar minha localização atual</Text>
                <Text style={styles.text}>Rua Sargento Antonio Monsenhor Tabosa, 809 - Jardim Americano - Fortaleza </Text>
              </View>
              <View style={styles.checkbox}>
                <Checkbox isChecked={true} isError={false} checkBoxColor={"white"}/>
              </View>
            </View>

          </View>

        </View>

      </View>

      <FlatList
        data={locations}
        style={styles.list}
        keyExtractor={(item, index) => 'key'+index}
        ItemSeparatorComponent={Divisor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 130 }}
        renderItem={({ item }) => (
          <LocationItemList data={item} />
        )}
      />
		</Backgound>
	)
}
