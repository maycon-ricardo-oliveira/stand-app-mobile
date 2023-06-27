import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({

  container: {
    width: 213,
    height: 232,
    marginLeft: 16,
    backgroundColor: theme.colors.blueCamp,
    borderRadius: 8,
    borderColor: theme.colors.grey200,
    borderWidth: 1,
  },
  content: {
    backgroundColor: theme.colors.blueCamp,
    position: 'absolute',
    bottom: 0,
    marginRight: 'auto',
    width: 213,
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%',
    height: 129,
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