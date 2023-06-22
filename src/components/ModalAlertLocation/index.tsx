import React, { ReactNode } from 'react';
import {
  ModalProps,
  Text,
} from 'react-native';

import { styles } from './styles';
import { ModalAlert } from '../ModalAlert';
const ModalLocationPng = require('../../assets/modal-location.png') ;

type Props = ModalProps & {
  closeModal: () => void;
}

export function ModalAlertLocation({ closeModal, ...rest }: Props) {
  
  return (
    <ModalAlert 
      image={ModalLocationPng}  
      title={'Permitir localização'} 
      closeModal={() => closeModal}
    >
      <Text style={styles.modalText}>Você aceita em permitir que o app rastrei sua localização em tempo real?</Text>
    </ModalAlert>
  )
}