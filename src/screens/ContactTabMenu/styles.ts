import { StyleSheet } from 'react-native';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: theme.colors.blueNight,
		paddingHorizontal: 20,
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
		marginBottom: 24,
		marginTop: 8,
		marginLeft: 8
	},
	separator: {
		marginTop: 12,
		backgroundColor: theme.colors.grey200,
		borderRadius: 4,
		width: '100%',
		height: 1,
		opacity: 0.5
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