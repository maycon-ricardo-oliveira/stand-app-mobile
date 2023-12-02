import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    height: 56,
    width: 56,
    padding: 16,
    backgroundColor: theme.colors.blueCamp,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.30,
    shadowRadius: 35,
    elevation: 4,
    borderRadius: 16,
    flexDirection: 'row',
    fontFamily: theme.fonts.title700,
    borderWidth: 1,
    marginHorizontal: 12,
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 12,
  }
});