import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    paddingVertical: 2,
    width: 53,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  text: {
    color: theme.colors.success,
    fontSize: 8,
    fontFamily: theme.fonts.text500,
    lineHeight: 13,
  },
});