import React, { useState } from 'react';
import { Text, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';
import { Checkbox } from '../Checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = TouchableOpacityProps & {
  themeText: 'dark' | 'white';
}

export function ButtonTermsPrivacity( {themeText, ...rest }: Props) {

  const [terms, setTerms] = useState(false);
  const [ error, setError] = useState(false)

  function handleTerms() {
		setTerms(terms)
	}

  function handleShowTerms() {
    console.log("Show terms are not implemented")
  }

  return (
    <View style={styles.container}>
      <Checkbox 
        onPress={handleTerms}
        isChecked={terms}
        isError={error}
        checkBoxColor={themeText}
        {...rest}
      />
      <Text style={themeText == 'white' ? styles.textWhite : styles.texBlack}>Concordo com os 
        <Text style={themeText == 'white' ? styles.textBoldWhite : styles.textBoldBlack} onPress={handleShowTerms} > termos de privacidade</Text> 
      </Text>
    </View>
  )
}