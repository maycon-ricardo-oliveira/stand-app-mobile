import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.violet200,
    borderRadius: 16,
		padding: 16,
    color: theme.colors.white,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    borderColor: theme.colors.pink200,
    borderWidth: 1,
		marginTop: 24
  },

});