import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  wrapContainer: {
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 0,
    backgroundColor: theme.colors.blueCamp,
    paddingVertical: 16,
    borderTopRightRadius: 16,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    height: 84,
    paddingHorizontal: 32,
    width: '100%'
  },
  container: {
    width: '100%',
    height: 54,
    padding: 16,
    backgroundColor: theme.colors.violet,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: theme.fonts.title700,
  },
  title: {
    flex: 1,
    fontFamily: theme.fonts.text700,
    color: theme.colors.white200,
    fontSize: 16,
    textAlign: 'center'
  },
  bigTitle: {
    flex: 1,
    fontFamily: theme.fonts.text700,
    color: theme.colors.white200,
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center'
  }
});