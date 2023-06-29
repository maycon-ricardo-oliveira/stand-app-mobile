import { StyleSheet , StatusBar} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: theme.colors.blueNight,
		paddingTop: StatusBar.currentHeight,
  },
	lineHeader: {
		position: 'absolute',
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 24,
		zIndex: 10,
		backgroundColor: theme.colors.alert
	},
	avatar: {
		width: 30,
		height: 30,
	},
	textLocation: {
		textAlign: 'center',
		fontFamily: theme.fonts.title500,
    color: theme.colors.white,
    fontSize: 14,
		textDecorationLine: 'underline'
	},
	content: {
	},
	events: {
		marginTop: 16,
		marginBottom: 20,
	},
	comedianTitle: {
		paddingLeft: 20, 
		flexDirection: 'row',
	}
});
