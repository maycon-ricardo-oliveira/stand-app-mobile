import React, { useCallback, useState } from "react";
import { Text, View, FlatList, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Backgound } from "../../components/Background";
import { StackTypes } from "../../routes/stack";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 'react-native-google-places-autocomplete';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import Input from "../../components/Input";
import { Checkbox } from "../../components/Checkbox";

import TargetSvg from "../../assets/target.svg";
import MapPointSvg from '../../assets/map-point.svg'
import { Divisor } from "../../components/Divisor";
import { ModalAlertLocation } from "../../components/ModalAlertLocation";
import SearchLocations from "../../components/SearchLocations";
import StorageAdapter from "../../domain/adapters/StorageAdapter";
import Location from "../../domain/entities/Location";
import Address from "../../domain/entities/Address";

type ItemProps = {
	title: string;
	text: string;
}

type Props = TouchableOpacityProps & {
  data: ItemProps;
}
export default function Locations() {

	const navigation = useNavigation<StackTypes>();
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal ] = useState(false);
  const [seachFocus, setSeachFocus] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(' Rua Sargento Antonio Monsenhor Tabosa, 809 - Jardim Americano - Fortaleza ')

  function handleOpenModal() {
    setOpenModal(!openModal)
  }

  function handleComedianDetails(item: ItemProps) {
    console.log('navigate to comedian details:  ' + item.title)
  }

  function handleSetCurrentLocation(location: any) {

    console.log("current location", location)
    const adapter = new StorageAdapter();

    adapter.store('current-location', location);

  }

  useFocusEffect(useCallback(() => {
    console.log('Teste')
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

            <View style={styles.locationContainer} >
              <TargetSvg  style={styles.targetIcon} width={32} height={32}/>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Usar minha localização atual</Text>
                <Text style={styles.text}>{currentLocation}</Text>
              </View>
              <View style={styles.checkbox}>
                <Checkbox isChecked={true} isError={false} checkBoxColor={"white"}/>
              </View>
            </View>

          </View>

        </View>

      </View>

      <GooglePlacesAutocomplete
        placeholder='Pesquisar'
      onPress={(data, details = null) => {
        if (details != null) {
          const currentLocation = new Location(
            data.description,
            details?.geometry.location.lat.toString(),
            details?.geometry.location.lng.toString(),
            new Address(
              details.address_components[0].short_name,
              details.address_components[1].short_name,
              details.address_components[2].short_name,
              details.address_components[3].short_name,
              details.address_components[4].short_name,
              details.address_components[5].short_name,
              details.formatted_address
            )
          );

          handleSetCurrentLocation(currentLocation);
        }

        setCurrentLocation(data.description)

      }}
      fetchDetails={true}
      currentLocation={true}
      query={{
        key: 'AIzaSyA7GkFRNZV9wSIM3WVyBi0O_e2woROkAuo',
        language: 'pt-BR',
        components: 'country:br',
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
    }}
      enablePoweredByContainer={false}
      textInputProps={{
        onFocus: () => {setSeachFocus(true)},
        onBlur: () => {setSeachFocus(false)},
        placeholderTextColor: theme.colors.white,
        autoCapitalize: "none",
        autoCorrect: false
      }}
      listViewDisplayed={seachFocus}
      styles={{

        textInputContainer: {
          paddingHorizontal: 20
        },
        textInput: {
          color: theme.colors.white,
          fontFamily: theme.fonts.text400,
          borderColor: theme.colors.pink200,
          borderWidth: 1,
          flex: 1,
          height: 56,
          backgroundColor: theme.colors.blueCamp,
          borderRadius: 16,
          fontSize: 16,
          paddingLeft: 44,
        },

        listView: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backgroundColor: theme.colors.blueNight200,
          width: '100%',
          paddingHorizontal: 20,
        },
        row: {
          alignItems: 'center',
          flexDirection: 'row',
          paddingTop: 16,
          backgroundColor: theme.colors.blueNight200,
        },
        separator: {
          borderColor: theme.colors.blueNight,
          width: '100%',
          height: 0.2,
        },
        description: {
          fontSize: 12,
          fontFamily: theme.fonts.title500,
          lineHeight: 24,
          color: theme.colors.white,
          backgroundColor: theme.colors.blueNight200,
        },
      }}
    />

      {  openModal && <ModalAlertLocation closeModal={handleOpenModal} /> }
      
		</Backgound>
	)
}
