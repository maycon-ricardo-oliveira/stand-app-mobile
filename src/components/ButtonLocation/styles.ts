import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 24,
    flexDirection: 'row',
  },
  textLocation: {
    textAlign: 'center',
		fontFamily: theme.fonts.title500,
    color: theme.colors.white,
    fontSize: 14,
		textDecorationLine: 'underline'
  },
  icon: {
    marginLeft: 4
  }
});