import { StyleSheet } from 'react-native';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: theme.colors.blueNight,
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	container: {
		flex: 1,
	},
  content: {
		flex: 1,
    justifyContent: 'space-between',
		paddingBottom: 32
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