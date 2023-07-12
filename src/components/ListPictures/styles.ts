import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');


export const styles = StyleSheet.create({
  events: {
		backgroundColor: theme.colors.alert,
		marginTop: 16,
		marginBottom: 20,
		flex: 1,
	},
	image: {
		width: 90,
    height: 90,
	}
  
});