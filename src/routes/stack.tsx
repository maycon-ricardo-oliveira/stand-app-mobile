import * as React from 'react';
import { View, Text , Button} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';

type StackNavigation = {
	Home : undefined,
	Details: undefined,
  Login: undefined
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
  );
};
export default StackNavigator;