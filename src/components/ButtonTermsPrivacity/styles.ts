import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    width: '100%',
    height: 24,
  },
  textWhite: {
    marginLeft: 32,
    fontFamily: theme.fonts.text500,
    color: theme.colors.white,
    fontSize: 14,
    lineHeight: 24,
    justifyContent: 'center',
  },
  textBoldWhite: {
    fontFamily: theme.fonts.text700,
    textDecorationLine: 'underline',
    color: theme.colors.white,
    fontSize: 14,
    lineHeight: 20,
    justifyContent: 'center',
  },
  texBlack: {
    marginLeft: 32,
    fontFamily: theme.fonts.text500,
    color: theme.colors.black,
    fontSize: 14,
    lineHeight: 24,
    justifyContent: 'center',
  },
  textBoldBlack: {
    fontFamily: theme.fonts.text700,
    textDecorationLine: 'underline',
    color: theme.colors.black,
    fontSize: 14,
    lineHeight: 20,
    justifyContent: 'center',
  }
});