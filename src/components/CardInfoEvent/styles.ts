import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({

  container: {

  },
  contentContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',

	},
	eventInfoContainer: {
		marginTop: 16,
	},

	eventItem: {
		backgroundColor: theme.colors.blueCamp,
		paddingVertical: 10,
		paddingHorizontal: 12,
		borderRadius: 16,
		flexDirection: 'row'

	},
	
	iconContainer: {
		backgroundColor: theme.colors.grey200,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		width: 50,
		height: 50,
		marginRight: 12,
	},
	contentInfoContainer: {
		paddingVertical: 4,

	},
	infoTitle: {
		color: theme.colors.white,
		fontSize: 12,
		fontWeight: '500',
		fontFamily: theme.fonts.title500,
		marginBottom: 4
	},
	infoDescription: {
		color: theme.colors.grey,
		fontSize: 10,
		fontWeight: '400',
		fontFamily: theme.fonts.text400
	},
  price: {
    color: theme.colors.success200,
		fontSize: 12,
		fontWeight: '600',
		fontFamily: theme.fonts.title600,

  }

});