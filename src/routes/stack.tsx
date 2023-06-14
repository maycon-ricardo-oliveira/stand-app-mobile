import * as React from 'react';
import { View, Text , Button} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword';

type StackNavigation = {
	Home : undefined,
	Details: undefined,
  Login: undefined,
  ForgotPassword: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

function HomeScreen() {

	const navigation = useNavigation<StackTypes>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, color: '#000' }} >Home Screen</Text>
			<Button title='Fazer login' onPress={() => {
				console.log('home')
				navigation.navigate('Login')
			}}/>
    </View>
  );
}

function Details() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, color: '#000' }} >Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
     <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}} />

      </Stack.Navigator>
  );
};
export default StackNavigator;