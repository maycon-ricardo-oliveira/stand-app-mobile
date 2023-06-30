import * as React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import ForgotPassword from '../screens/ForgotPassword';
import Register from '../screens/Register';
import VerifyEmail from '../screens/VerifyEmail';
import AllComedians from '../screens/AllComedians';
import Locations from '../screens/Locations';
import DetailsComedian from '../screens/DetailsComedian';

type StackNavigation = {
	Home: undefined,
	Details: undefined,
  Login: undefined,
  ForgotPassword: undefined;
  Register: undefined;
  VerifyEmail: undefined;
  AllComedians: undefined;
  Locations: undefined;
  DetailsComedian: any | undefined;

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
      <Stack.Screen name="AllComedians" component={AllComedians} options={{headerShown: false}} />
      <Stack.Screen name="Locations" component={Locations} options={{headerShown: false}} />
      <Stack.Screen name="DetailsComedian" component={DetailsComedian} options={{headerShown: false}} initialParams={{ id: '1234' }} />


    </Stack.Navigator>
  );
};
export default StackNavigator;