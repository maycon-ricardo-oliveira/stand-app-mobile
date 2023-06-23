import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
		overflow : "hidden",
		width: '100%',
		height: 592,
		marginBottom: 40,
  },
	image: {
		position: 'relative',
    justifyContent: 'center',
		alignItems: 'center',
		resizeMode: 'cover',
		height: 592,
		width: 428,
		flex: 1,
	},
	boxTitle: {
    justifyContent: 'flex-end',
		alignItems: 'center',
		textAlign: 'center',
		maxWidth: 235,
		flex: 1,
	},
	title: {
		fontFamily: theme.fonts.text500,
    color: '#F9FAFC',
		lineHeight: 29,
		fontSize: 28,
	},
	subtitle: {
		fontFamily: theme.fonts.title500,
		color:'#F9FAFC',
		lineHeight: 24,
		fontSize: 16,
	},
	background: {
		position: 'absolute',
		height: '100%',
		opacity: 0.5,
		left: 0,
		right: 0,
		top: 0,
	  },

		datesButton: {
			backgroundColor: theme.colors.transparent200,
			paddingHorizontal: 8,
			paddingVertical: 4,
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 8,
			marginBottom: 20
		},
		dates: {
			color: theme.colors.white,
			fontSize: 12,
			fontFamily: theme.fonts.text400,
		}

});