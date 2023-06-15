import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    width: '100%',
    height: 24,
  },
  text: {
    marginLeft: 32,
    fontFamily: theme.fonts.text500,
    color: theme.colors.white,
    fontSize: 14,
    lineHeight: 24,
    justifyContent: 'center',
  },
  textBold: {
    fontFamily: theme.fonts.text700,
    textDecorationLine: 'underline',
    color: theme.colors.white,
    fontSize: 14,
    lineHeight: 20,
    justifyContent: 'center',
  }
});