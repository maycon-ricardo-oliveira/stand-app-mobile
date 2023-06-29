import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: theme.colors.white000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: theme.colors.white200,
  }
});