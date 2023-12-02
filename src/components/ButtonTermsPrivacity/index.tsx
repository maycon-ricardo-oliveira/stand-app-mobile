import React, { useState } from 'react';
import { Text, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';
import { Checkbox } from '../Checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';                       

type Props = TouchableOpacityProps & {
  themeText: 'dark' | 'white';
  isError: boolean;
  isChecked: boolean;
	handleCheck(): boolean;
}

export function ButtonTermsPrivacity( {themeText, isError, isChecked, handleCheck, ...rest }: Props) {

  function handleShowTerms() {
    console.log("Show terms are not implemented")
  }

  return (
    <View style={styles.container}>
      <Checkbox 
        onPress={handleCheck}
        handleCheck={handleCheck}
        isChecked={isChecked}
        isError={isError}
        checkBoxColor={themeText}
        {...rest}
      />
      <Text style={themeText == 'white' ? styles.textWhite : styles.texBlack}>Concordo com os 
        <Text style={themeText == 'white' ? styles.textBoldWhite : styles.textBoldBlack} onPress={handleShowTerms} > termos de privacidade</Text> 
      </Text>
    </View>
  )
}