import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: 52,
    padding:16,
    backgroundColor: theme.colors.blueNight,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: theme.fonts.title700,
    borderColor: theme.colors.violet,
    borderWidth: 2,
    justifyContent: 'center',

  },
  title: {
    flex: 1,
    fontFamily: theme.fonts.title700,
    color: theme.colors.white200,
    fontSize: 16,
    textAlign: 'center'
  }
});