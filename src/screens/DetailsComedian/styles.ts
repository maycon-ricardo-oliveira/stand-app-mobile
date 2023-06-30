import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
		
  },

	mainImage: {
		height: 350,
		width: '100%',
		borderBottomLeftRadius: 16,
		borderBottomRightRadius: 16,
	},

	content: {
		paddingLeft: 20,
		marginTop: 24,

	},

	description: {
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
	}
	

});
