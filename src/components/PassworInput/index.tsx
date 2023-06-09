import { View, Text, TextInputProps, TextInput } from 'react-native'
import React, { useState } from 'react'


import { styles } from './styles';
import { theme } from '../../global/styles/theme';


import EyesHideSvg from '../../assets/eyes-hide.svg';
import EyesShowSvg from '../../assets/eyes-show.svg';
import Input from '../Input';
import { RectButton } from 'react-native-gesture-handler';

type Props = TextInputProps & {
  isError: boolean;
}

export default function PassworInput({isError, ...rest }: Props) {

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    console.log('password status: ', showPassword)
    setShowPassword(!showPassword) 
  }

	return (
		<View style={styles.container}>

      <Input
        placeholder="Senha"
        type='password'
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        isError={isError}
        {...rest }
      />

      <RectButton onPress={handleShowPassword} style={[styles.iconLeft, isError ? { right: 48 } : { right: 16 } ]}>
          {
            !showPassword ? 
              <EyesShowSvg 
                width={24} height={24}
              />
            :
              <EyesHideSvg 
                width={24} height={24}
              />
          }
      </RectButton>
    

		</View>
	)
}