import React, { useState } from 'react';
import { Text, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';
import { Checkbox } from '../Checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = TouchableOpacityProps & {

}

export function ButtonTermsPrivacity( { ...rest }: Props) {
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
        {...rest}
      />
      <Text style={styles.text}>Concordo com os 
        <Text style={styles.textBold} onPress={handleShowTerms} > termos de privacidade</Text> 
      </Text>
    </View>
  )
}