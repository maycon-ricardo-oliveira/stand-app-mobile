import { View, TextInputProps, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 'react-native-google-places-autocomplete';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';


type Props = TextInputProps & {
  onPressFunction: () => void;
}

export default function SearchLocations({onPressFunction}: Props) {
  const [seachFocus, setSeachFocus] = useState(false);

	return (
    <GooglePlacesAutocomplete
      placeholder='Pesquisar'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
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
	)
}