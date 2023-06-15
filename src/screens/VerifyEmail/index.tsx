import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Backgound } from "../../components/Background";
import Input from "../../components/Input";
import { ButtonViolet } from "../../components/ButtonViolet";
import { StackTypes } from "../../routes/stack";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { ButtonSimple } from "../../components/ButtonSimple";

export default function VerifyEmail(){
  const { white } = theme.colors;
	const navigation = useNavigation<StackTypes>();
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	function handlVerifyEmail() {
		navigation.navigate('Login')
		console.log('Verify Email Send');
		setError(!error);
	}

	return (
		<Backgound gradient={false}>
			<Header
				title="Verificar e-mail"
			/>
			<View style={styles.container}>
				<View style={styles.content}>
					<Text style={styles.text}>Enviamos um código de verificação para seu email!</Text>
					
          <View style={styles.lineCode}>
            <TextInput
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
            />

            <TextInput
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
            />

            <TextInput
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
            />

            <TextInput
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
            />

            <TextInput
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
            />

            <TextInput
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
            />

          </View>

          <Text style={styles.sendCodeText}>Reenviar código em: <Text  style={styles.timer}> 0:23</Text></Text>
          
          {
            error ?
            <ButtonViolet
              isBigTitle
              title="Enviar"
              onPress={handlVerifyEmail}
            >
            </ButtonViolet>
            :
            <ButtonSimple title={"Reenviar Código"} isViolet={true} />
          }

        </View>
      </View>
		</Backgound>
	)
}