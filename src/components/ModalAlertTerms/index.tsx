import React, { ReactNode, useState } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  Pressable,
  Text,
  Image
} from 'react-native';
import { ButtonTermsPrivacity } from '../ButtonTermsPrivacity';
import { ButtonHighlight } from '../ButtonHighlight';

import { styles } from './styles';
import { ModalAlert } from '../ModalAlert';
const ModalCheckPng = require('../../assets/modal-check.png') ;

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalAlertTerms({ children, closeModal, ...rest }: Props) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ModalAlert 
      image={ModalCheckPng}  
      title={'Antes de Logar'} 
      closeModal={() => closeModal}
    >
      <ButtonTermsPrivacity
        themeText={'dark'}
      />
    </ModalAlert>
  )
}