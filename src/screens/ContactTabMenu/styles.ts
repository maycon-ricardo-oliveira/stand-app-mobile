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

	},
  content: {
		flex: 1,
    justifyContent: 'space-between',
		paddingBottom: 32,
		
  },
	text: {
		color: theme.colors.violet,
		textDecorationLine: 'underline',
		fontSize: 16,
		lineHeight: 24,
		fontFamily: theme.fonts.text400,
		fontWeight: '500',
		marginTop: 8,
	},
	socialMediaContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},
	boxSocialMedia: {
		backgroundColor: theme.colors.blueCamp,
		padding: 8,
		borderRadius: 8,
		width: 48,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 16,
	}

});