import React, { useState } from 'react';
import { Text, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';
import { Checkbox } from '../Checkbox';

type Props = TouchableOpacityProps & {

}

export function ButtonTermsPrivacity( { ...rest }: Props) {
  const [terms, setTerms] = useState(false);
  const [ error, setError] = useState(false)

  
  function handleTerms() {
		setTerms(!terms)
	}

  return (
    <Checkbox 
      onPress={handleTerms}
      isChecked={terms}
      isError={error}
      style={styles.container}
      {...rest}
    >
      <Text style={styles.text}>Concordo com os termos de privacidade</Text>
    </Checkbox>
  )
}