import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    alignSelf: "flex-end",
    flexDirection: 'row',
    fontFamily: theme.fonts.title700,
  },
	button: {
		
	},
  text: {
    fontFamily: theme.fonts.title600,
    color: theme.colors.white,
    alignSelf: "flex-end",
    padding: 8,
    fontSize: 16,
  },
});