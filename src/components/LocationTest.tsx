import React, { useState } from "react";
import { StyleSheet, Text, View, PermissionsAndroid, Button, Platform } from "react-native";
import * as Location from 'expo-location';
import GetAttractionsByLocationController from "../domain/controllers/GetAttractionsByLocationController";
import Attraction from "../domain/entities/Attraction";


export default function LocationTest() {
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');

  const [attractions, setAttractions] = useState<Attraction[]>([]);

  const callLocation = () => {
    if(Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permissão de Acesso à Localização",
            message: "Este aplicativo precisa acessar sua localização.",
            buttonNeutral: "Pergunte-me depois",
            buttonNegative: "Cancelar",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          alert('Permissão de Localização negada');
        }
      };
      requestLocationPermission();
    }
  }
  
  const getAttractionsByLocation = () => {
    console.log("getAttractionsByLocation")

    const lat = currentLatitude.toString(); 
    const lng = currentLongitude.toString(); 
    const distance = '100';
    const controller = new GetAttractionsByLocationController();
    const response = controller.execute(lat, lng, distance)

    console.log(response);

  }

	const getLocation = () => {
		Location.installWebGeolocationPolyfill()
      navigator.geolocation.getCurrentPosition(success);
	}

	function success(pos: any) {
		const crd = pos.coords;
		const currentLatitude = crd.latitude;
		const currentLongitude = crd.longitude;

		console.log("Your current position is:");
		console.log(`Latitude : ${crd.latitude}`);
		console.log(`Longitude: ${crd.longitude}`);
		console.log(`More or less ${crd.accuracy} meters.`);
		setCurrentLatitude(currentLatitude);
		setCurrentLongitude(currentLongitude);

    getAttractionsByLocation();
	}

  const clearLocation = () => {
		setCurrentLatitude('');
		setCurrentLongitude('');
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.boldText}>
        Você está Aqui
      </Text>
      <Text style={styles.text}>
        Latitude: {currentLatitude}
      </Text>
      <Text style={styles.text}>
        Longitude: {currentLongitude}
      </Text>
      <View style={styles.button}>
        <Button title="Obter Localização" onPress={callLocation}/>
      </View>
      <View style={styles.button}>
        <Button title="Cancelar Monitoração" onPress={clearLocation}/>
      </View>
			<View style={styles.button}>
        <Button title=" Monitoração" onPress={getLocation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white',
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  },
  text: {    
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 15,
  }
});