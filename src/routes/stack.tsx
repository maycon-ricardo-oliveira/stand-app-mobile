import * as React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword';
import Register from '../pages/Register';
import VerifyEmail from '../pages/VerifyEmail';

type StackNavigation = {
	Home: undefined,
	Details: undefined,
  Login: undefined,
  ForgotPassword: undefined;
  Register: undefined;
  VerifyEmail: undefined;

}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} options={{headerShown: false}} />

    </Stack.Navigator>
  );
};
export default StackNavigator;