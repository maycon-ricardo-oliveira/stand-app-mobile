import React , {ReactNode, useState } from "react";
import { Text, TouchableOpacity, View, ViewProps } from "react-native";
import { StackTypes } from "../../routes/stack";
import { Link, useNavigation } from "@react-navigation/native";
import { styles } from './styles';
import Title from "../../components/Title";
import { theme } from '../../global/styles/theme';
import { FaTiktok , FaFacebook, FaYoutube} from "react-icons/fa";
import { AiFillInstagram} from "react-icons/ai";
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { Divisor } from "../../components/Divisor";


export default function ContactTabMenu(){
	const navigation = useNavigation<StackTypes>();
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	function handleForgotPassword() {
		navigation.navigate('Login')
		console.log('Forgot Password Send');
		setError(!error);
	}

	const { white } = theme.colors;

	return (
		<View style={styles.background}>
			<Title title="Contato da acessoria"/>
			<Text>
			(85) 90000 - 0000 / WhatasApp
			</Text>
			<Title title="Email"/>

			<TouchableOpacity >
				<Text style={styles.text}>
					(85) 90000 - 0000 / WhatasApp
				</Text>
			</TouchableOpacity>
			<Separator/>
			<Title title="Redes sociais"/>
			<View style={styles.socialMediaContainer}>
				<BoxSocialMedia>
					<ADIcon
						name={'youtube'}
						size={24}
						color={white}
					/>
				</BoxSocialMedia>

				<BoxSocialMedia>
					<FAIcon
						name={'facebook'}
						size={24}
						color={white}
					/>
				</BoxSocialMedia>

				<BoxSocialMedia>
					<ADIcon
						name={'instagram'}
						size={24}
						color={white}
					/>
				</BoxSocialMedia>

				<BoxSocialMedia>
					<FAIcon
						name={'tiktok'}
						size={24}
						color={white}
					/>
				</BoxSocialMedia>
			</View>

		</View>
	)
}

type Props = {
  children: ReactNode;
}

function BoxSocialMedia({children}: Props) {
	return (
		<View style={styles.boxSocialMedia}>
			{children}
		</View>
	)
}

function Separator() {
	return (
		<View style={styles.separator}>
		</View>
	)
}