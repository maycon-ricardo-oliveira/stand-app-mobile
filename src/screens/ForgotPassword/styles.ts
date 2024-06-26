import { StyleSheet } from 'react-native';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
	},
  content: {
		flex: 1,
    justifyContent: 'space-between',
		paddingBottom: 32
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
	}

});