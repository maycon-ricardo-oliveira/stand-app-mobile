import { StyleSheet , StatusBar} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: theme.colors.blueNight,
		paddingTop: StatusBar.currentHeight,
  },
	content: {
	},
	events: {
		marginTop: 16,
		marginBottom: 20,
	},
	comedianTitle: {
		paddingLeft: 20, 
		flexDirection: 'row',
	}
});
