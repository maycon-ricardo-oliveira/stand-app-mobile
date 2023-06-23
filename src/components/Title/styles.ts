import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    width: '100%',
    lineHeight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 24,
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.white,
    fontSize: 20,
  }
});