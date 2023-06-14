import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
	},
  content: {
		flex: 1,
		paddingBottom: 32
  },
  item: {
    marginTop: 16,
  },
	errorMsg: {
		fontFamily: theme.fonts.text400,
		fontSize: 14,
		lineHeight: 18,
		color: theme.colors.grey,
		marginTop: 8
	},
	text: {
		color: theme.colors.white,
		fontSize: 16,
		lineHeight: 24,
		fontFamily: theme.fonts.text400,
		fontWeight: '500',
		marginBottom: 24,
		marginTop: 8,
		marginLeft: 8
	},
  footer: {
    alignSelf: 'flex-end',
    marginBottom: 32,
  },
  checkboxContainer: {

  },

  checked: {

  },
  check: {

  },
  label: {

  }

});