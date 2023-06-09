import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: 52,
    padding: 16,
    backgroundColor: theme.colors.violet,
    borderRadius: 16,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: theme.fonts.title700,
  },
  title: {
    flex: 1,
    fontFamily: theme.fonts.text700,
    color: theme.colors.white200,
    fontSize: 16,
    textAlign: 'center'
  },
  bigTitle: {
    flex: 1,
    fontFamily: theme.fonts.text700,
    color: theme.colors.white200,
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center'
  }
});