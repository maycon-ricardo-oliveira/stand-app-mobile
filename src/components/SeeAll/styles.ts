import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    width: '100%',
    lineHeight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',    
    height: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.white,
    fontSize: 20,
  },

  seeAllButton: {
    width: 100,
    height: 24,
    justifyContent: 'center',
  },

  seeAllIcon: {
    position: 'absolute',
    color: theme.colors.grey,
    top: 0,
    right: 0,
    width: 24,
    height: 24
  },

  seeAllText: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.grey,
    lineHeight: 18,
    fontSize: 14,
    marginRight: 32,
  },

});