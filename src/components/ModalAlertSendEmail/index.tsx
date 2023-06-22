import React, { ReactNode, useState } from 'react';
import {
  ModalProps,
  Text,
} from 'react-native';

import { styles } from './styles';
import { ModalAlert } from '../ModalAlert';
const ModalSendEmailPng = require('../../assets/modal-send-email.png') ;

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalAlertSendEmail({ children, closeModal, ...rest }: Props) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ModalAlert
      type='success'
      title={'Email enviado'} image={ModalSendEmailPng} closeModal={() => closeModal}>
      <Text style={styles.modalText}>Enviamos um link para o seu e-mail, clique nele e siga as instruções para redefinir sua senha de acesso.</Text>
    </ModalAlert>
  )
}