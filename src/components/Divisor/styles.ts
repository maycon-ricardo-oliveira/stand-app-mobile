import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    width: '100%',
    alignItems: 'center',
    padding: 8,
    height: 20,
  },
  divisor: {
    borderColor: theme.colors.grey200,
    width: '100%',
    borderWidth: 1,
    position: 'absolute',
    top: 16,
    alignSelf: 'center'
  },
  text: {
    backgroundColor: theme.colors.blueNight,
    paddingHorizontal: 8,
    height: 18,
    fontFamily: theme.fonts.text400,
    color: theme.colors.white,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center'
  },
});