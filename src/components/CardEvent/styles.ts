import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({

  container: {
    width: 311,
    height: 113,
    marginLeft: 16,
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 16,
    backgroundColor: theme.colors.blueCamp,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: theme.colors.grey200,
    borderWidth: 1,
    
  },
  content: {
    marginRight: 'auto',    
    width: 190
  },
  image: {
    borderRadius: 16,
  },
  date: {
    color: theme.colors.grey,
    fontSize: 10,
    fontFamily: theme.fonts.text400,
    lineHeight: 13,
    marginBottom: 8
  },
  location: {
    color: theme.colors.grey,
    fontSize: 10,
    fontFamily: theme.fonts.text500,
    lineHeight: 13,
  },
  comedianName: {
    fontFamily: theme.fonts.text700,
    lineHeight: 13,
    color: theme.colors.grey,
    fontWeight: '500',
    fontSize: 12,
    marginBottom: 4
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  status: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
  },
  title: {
    fontFamily: theme.fonts.title600,
    lineHeight: 20,
    color: theme.colors.white,
    fontSize: 18,
    marginBottom: 8,
  },
});