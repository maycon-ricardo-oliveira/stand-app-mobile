import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
		paddingHorizontal: 20,
		marginBottom: 24,
  },
	headerContainer: {
		paddingLeft: 20
	},
	internalContainer: {
		flexDirection: 'column',
		marginTop: 24,
	},
	locationContainer: {
		marginTop: 24,
		alignItems: 'center',
		flexDirection: 'row',
	},
	textContainer: {
		maxWidth: 256,
	},
	targetIcon: {
		marginLeft: 8,
		marginRight: 8,
		with: 32,
		height: 32
	},
	title: {
		fontSize: 16,
		fontFamily: theme.fonts.title500,
		lineHeight: 24,
		color: theme.colors.white
	},
	checkbox: {
		with: 50,
		height: 32,
		marginLeft: 12,
	},
	text: {
		fontSize: 12,
		fontFamily: theme.fonts.text400,
		lineHeight: 20,
		color: theme.colors.grey
	},

	content: {
	},

	list: {
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		backgroundColor: theme.colors.blueNight200,
		width: '100%',
		paddingHorizontal: 20,
		
	},
	listItem: {
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 24
	}
	
});
