import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');


export const styles = StyleSheet.create({
  events: {
		marginTop: 16,
		width: '100%',
		height: '100%'

	},
	imagesContainer: {
		flexWrap: 'wrap',
		alignItems: 'center',
		gap: 10,
	  flexDirection: 'row',
		justifyContent: 'space-between'
	},
	imageCard: {
		width: 114,
		height: 130,
		marginVertical: 2,
	},
	image:{
		width: '100%', 
		height: '100%', 
		resizeMode: 'cover',
		borderRadius: 8
	}
  
});