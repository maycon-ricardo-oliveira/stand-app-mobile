import React, { ReactNode, useState } from 'react';
import {
  ModalProps,
  Text,
} from 'react-native';

import { styles } from './styles';
import { ModalAlert } from '../ModalAlert';
const ModalSorryPng = require('../../assets/modal-sorry.png') ;

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalAlertInvalidCode({ children, closeModal, ...rest }: Props) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ModalAlert
      type='error'
      buttonText='Reenviar Código'
      title={'Código Inválido'} image={ModalSorryPng} closeModal={() => closeModal}>
      <Text style={styles.modalText}>O código preenchido não corresponde ao código enviado para o seu e-mail. Por favor, envie o código correto.</Text>
    </ModalAlert>
  )
}