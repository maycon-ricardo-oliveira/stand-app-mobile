import { StyleSheet } from 'react-native';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
	},
  content: {
		flex: 1,
		paddingBottom: 32
  },
  lineCode: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  smallInput: {
    padding: 16,
    width: 45,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blueCamp,
    borderRadius: 16,
    borderColor: theme.colors.grey200,
    borderWidth: 1,
    color: theme.colors.white,
    fontFamily: theme.fonts.title600,
    fontSize: 24,
    lineHeight: 36,

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
		marginLeft: 8,
	}

});