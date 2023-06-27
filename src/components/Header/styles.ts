import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    paddingTop: getStatusBarHeight(),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 104,
    paddingHorizontal: 24,
  },

  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.white,
    fontSize: 24,
    marginLeft: 8,
    flex: 1,
  },

});
