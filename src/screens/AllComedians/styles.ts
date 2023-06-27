import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
		paddingHorizontal: 20,
  },

	content: {
	},
	cardComedian: {
    height: 130,
    marginHorizontal: 2,
		marginBottom: 24,
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 16,
    backgroundColor: theme.colors.blueCamp,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: theme.colors.grey200,
    borderWidth: 1,
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
