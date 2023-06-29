import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    width: '100%'
  },

  iconLeft: {
    position: 'absolute',
    top: 16,
    width: 24,
    height: 24
  },

  input: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text400,
    borderColor: theme.colors.pink200,
    borderWidth: 1,
    flex: 1,
    height: 56,
    backgroundColor: theme.colors.blueCamp,
    borderRadius: 16,
    fontSize: 16,
    paddingLeft: 44,
    paddingVertical: 16 
}
});