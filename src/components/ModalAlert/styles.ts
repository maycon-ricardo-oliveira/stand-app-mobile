import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black
  },
  image: {
    resizeMode: 'cover'
  },
  modalView: {
    margin: 20,
    width: 358,
    height: 506,
    backgroundColor:  theme.colors.white,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingTop: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  modalTitle: {
    color: theme.colors.success,
    textAlign: 'center',
    fontSize: 32,
    fontFamily: theme.fonts.title600,
    fontWeight: '600',
    lineHeight: 36,
  },
  modalContent: {

  },
  footer: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    marginTop: 32,
    paddingHorizontal: 8,
    justifyContent: 'flex-end'
  }
});