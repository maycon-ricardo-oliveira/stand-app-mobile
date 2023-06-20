import React, { useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Backgound } from "../../components/Background";
import Input from "../../components/Input";
import { ButtonHighlight } from "../../components/ButtonHighlight";
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

  const item2 = useRef();
  const item3 = useRef();
  const item4 = useRef();
  const item5 = useRef();
  const item6 = useRef();

	function handlVerifyEmail() {
		navigation.navigate('Login')
		console.log('Verify Email Send');
		setError(!error);
	}

  function handleSubmitCode() {
    console.log('Submit code');
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
              maxLength={1}
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
              onChangeText={() => {
                item2.current.focus();
              }}
              blurOnSubmit={false}
            />

            <TextInput
              maxLength={1}
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
              ref={item2}
              onChangeText={() => {
                item3.current.focus();
              }}
              blurOnSubmit={false}
            />

            <TextInput
              maxLength={1}
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
              ref={item3}
              onChangeText={() => {
                item4.current.focus();
              }}
              blurOnSubmit={false}
            />

            <TextInput
              maxLength={1}
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
              ref={item4}
              onChangeText={() => {
                item5.current.focus();
              }}
              blurOnSubmit={false}
            />

            <TextInput
              maxLength={1}
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
              ref={item5}
              onChangeText={() => {
                item6.current.focus();
              }}
              blurOnSubmit={false}
            />

            <TextInput
              maxLength={1}
              placeholder="*"
              style={styles.smallInput}
              placeholderTextColor={white}
              ref={item6}
              onChangeText={
                handleSubmitCode
              }
              blurOnSubmit={false}
            />

          </View>

          <Text style={styles.sendCodeText}>Reenviar código em: <Text  style={styles.timer}> 0:23</Text></Text>
          
          {
            error ?
            <ButtonHighlight
              isBigTitle
              title="Enviar"
              onPress={handlVerifyEmail}
            >
            </ButtonHighlight>
            :
            <ButtonSimple title={"Reenviar Código"} isViolet={true} />
          }

        </View>
      </View>
		</Backgound>
	)
}
