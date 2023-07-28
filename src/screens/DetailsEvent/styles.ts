import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
		paddingBottom: 96
  },
	mainImage: {
		height: 350,
		width: '100%',
		borderBottomLeftRadius: 16,
		borderBottomRightRadius: 16,
	},
	content: {
		paddingHorizontal: 20,
		marginTop: 24,
	},
	description: {
		marginTop: 4,
		fontSize: 14,
		fontFamily: theme.fonts.text400,
		color: theme.colors.white
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
	descriptionText: {
		marginTop: 4,
		fontSize: 14,
		fontFamily: theme.fonts.text400,
		color: theme.colors.black700
	},
	tags: {
		marginTop: 16,
		flexDirection: 'row',
		marginBottom: 16,
	},
	tag: {
		backgroundColor: theme.colors.grey200,
		marginRight: 8,
		borderRadius: 16,
		padding: 8,
		alignItems: 'center',
		elevation: 4,
		shadowColor: 'rgba(111, 126, 201, 0.25)'
	},
	tagText: {
		fontFamily: theme.fonts.text700,
		lineHeight: 18,
		fontSize: 14,
		textAlign: 'center',
		color: theme.colors.white,
	},
	iconSelected: {
		color: theme.colors.error
	},
	contentContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	scroll: {
		width: '100%',
		height: '100%',
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
	}

});
