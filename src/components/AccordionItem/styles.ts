import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    accordContainer: {
      paddingBottom: 4
    },
    accordHeader: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    accordTitle: {
      color: theme.colors.white,
      fontFamily: theme.fonts.title500,
      lineHeight: 24,
      fontSize: 20,
    },
    accordBody: {
      paddingVertical: 8
    },
    textSmall: {
      fontSize: 16
    },
    seperator: {
      height: 12
    }
});