import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { Backgound } from "../../components/Background";
import Input from "../../components/Input";
import { ButtonHighlight } from "../../components/ButtonHighlight";
import { StackTypes } from "../../routes/stack";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";

import { styles } from './styles';
import PassworInput from "../../components/PassworInput";
import { Spacing } from "../../components/Spacing";
import { ButtonTermsPrivacity } from "../../components/ButtonTermsPrivacity";
import RegisterUserController from "../../domain/controllers/RegisterUserController";
import { RegisterProps } from "../../domain/useCases/RegisterUser";

export default function Register() {

	const defaultValues: RegisterProps = {
		name: '',
		email: '',
		phone: '',
		password: '',
		checkPassword: '',
		terms: false
	}
	const navigation = useNavigation<StackTypes>();

	const { control, handleSubmit, setValue, formState: { errors } } = useForm({defaultValues: defaultValues});

	const onSubmit = handleSubmit(data => handleRegister(data));

	const [terms, setTerms] = useState(false);

	function handleRegister(data: RegisterProps) {

		console.log(data)
		// navigation.navigate('Login')

		const controller = new RegisterUserController();
		
		const response = controller.execute(data);
		
		console.log("response");
		console.log(response);

	}
	
	function handleTerms() {
		setTerms(!terms)
		setValue("terms", !terms)
		return !terms;
	}

	return (
		<Backgound gradient={false}>
			<Header
				title="Criar Conta"
			/>
			<View style={styles.container}>
				<View style={styles.content}>

					<Controller
        		control={control}
        		rules={{
         			required: true,
        		}}
        		render={({ field: { onChange, onBlur, value } }) => (
							<Input
								isError={errors.name ? true : false}
								placeholder="Nome"
								type="user"
								onBlur={onBlur}
								onChangeText={onChange}
								autoCorrect={false}
								value={value}
							/>
        		)}
        		name="name"
      		/>
					{errors.name && <Text style={styles.errorMsg}>• Nome muito pequeno</Text>}

					<Spacing size={16}/>

					<Controller
        		control={control}
        		rules={{
         			required: true,
        		}}
        		render={({ field: { onChange, onBlur, value } }) => (
							<Input
								isError={errors.email ? true : false}
								placeholder="E-mail"
								type="email"
								autoCapitalize="none"
								autoCorrect={false}
								keyboardType="email-address"
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
        		)}
        		name="email"
      		/>
					{errors.email && <Text style={styles.errorMsg}>• Email inválido</Text>}

					<Spacing size={16}/>

					<Controller
        		control={control}
        		rules={{
         			required: true,
        		}}
        		render={({ field: { onChange, onBlur, value } }) => (
							<Input
								isError={errors.phone ? true : false}
								placeholder="Telefone"
								type="phone"
								autoCapitalize="none"
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								autoCorrect={false}
								keyboardType="phone-pad"
							/>
        		)}
        		name="phone"
      		/>
					{errors.email && <Text style={styles.errorMsg}>• Número de telefone inválido</Text>}

					<Spacing size={16}/>

					<Controller
        		control={control}
        		rules={{
         			required: true,
        		}}
        		render={({ field: { onChange, onBlur, value } }) => (
							<PassworInput
								isError={errors.password ? true : false}
								placeholder="Criar Senha"
								autoCorrect={false}
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
							/>
        		)}
        		name="password"
      		/>
					{errors.password && <Text style={styles.errorMsg}>• A senha deve conter 8 carcteres</Text>}
					
					<Spacing size={16}/>
					
					<Controller
        		control={control}
        		rules={{
         			required: true,
        		}}
        		render={({ field: { onChange, onBlur, value } }) => (
							<PassworInput
								isError={errors.checkPassword ? true : false}
								placeholder="Repetir Senha"
								autoCorrect={false}
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
							/>
        		)}
        		name="checkPassword"
      		/>
					{errors.checkPassword && <Text style={styles.errorMsg}>• As senhas não estão iguais</Text>}

				</View>

				  <ButtonTermsPrivacity
						themeText={'white'}
						isError={terms}
						isChecked={terms}
						onPress={handleTerms}
						handleCheck={handleTerms}
						
					/>
					{errors.terms && <Text style={styles.errorMsg}>• Concorde com os termos</Text>}

				<View style={styles.footer}>
					<ButtonHighlight
						isBigTitle
						title="Enviar"
						onPress={onSubmit}
					/>
				</View>
			</View>
		</Backgound>
	)
}
