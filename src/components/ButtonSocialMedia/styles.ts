import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    height: 56,
    width: 56,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: theme.colors.blueCamp,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 35,
    elevation: 3,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: theme.fonts.title700,
    borderColor: theme.colors.violet,
    borderWidth: 1,
    marginHorizontal: 12,
},
  icon: {
    flex: 1,
    fontFamily: theme.fonts.title700,
    color: theme.colors.white200,
    fontSize: 16,
    textAlign: 'center'
  }
});