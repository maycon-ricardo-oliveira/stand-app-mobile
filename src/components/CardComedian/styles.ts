import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    width: 257,
    height: 130,
    marginLeft: 16,
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 16,
    backgroundColor: theme.colors.blueCamp,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: theme.colors.grey200,
    borderWidth: 1,
  },
  content: {
    justifyContent: 'space-between',
    marginLeft: 8,
  },
  image: {
    borderRadius: 50,
    width: 90,
    height: 90,
    marginRight: 8 
  },
  comedianName: {
    fontFamily: theme.fonts.title700,
    lineHeight: 24,
    color: theme.colors.white,
    fontSize: 16,
    marginBottom: 4
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  type: {
    flexDirection: 'row'
  },
  typeText: {
    
    color: theme.colors.grey,
    fontFamily: theme.fonts.text500,
    fontSize: 12
  },

});