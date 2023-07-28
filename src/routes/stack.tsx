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
import DetailsEvent from '../screens/DetailsEvent';

const RenatoAlbani = require('../assets/eventImage.png');
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
  DetailsEvent: any | undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="AllComedians" component={AllComedians} />
      <Stack.Screen name="Locations" component={Locations} />
      <Stack.Screen name="DetailsComedian" component={DetailsComedian} initialParams={{ id: '1234' }} />
      <Stack.Screen name="DetailsEvent" component={DetailsEvent} initialParams={{ id: '1234' }} />

    </Stack.Navigator>
  );
};
export default StackNavigator;