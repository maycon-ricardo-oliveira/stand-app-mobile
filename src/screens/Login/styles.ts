import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
		alignItems: 'center',
		padding: 40,
		width: '100%',
		marginTop: 40,
  },
	image: {
		alignItems: 'center',
    width: 240,
    height: 80,
		marginBottom: 28,
	},
	content: {
		flex: 1,
		width: '100%',
	},
	title: {
		fontFamily: theme.fonts.title600,
    color: theme.colors.white,
    fontSize: 24,
	},
	margin: {
		marginTop: 32
	},
	
	button: {
		backgroundColor: theme.colors.violet,
    borderRadius: 8,
	},
	buttonText: {
    color: theme.colors.white200,
    fontSize: 15,
		textAlign: 'center'
	},
	marginTop: {
		marginTop: 24
	},
	errorMsg: {
		fontFamily: theme.fonts.text400,
		fontSize: 14,
		lineHeight: 18,
		color: theme.colors.grey,
		marginTop: 8
	},
	buttonSimple: {
		marginBottom: 28,
		marginTop: 16
	},

	socialMediaSection: {
		width: '100%',
		justifyContent: 'center',
		flexDirection: 'row',
		marginTop: 24,
	},
	modal: {
		flex:1
	}

});
