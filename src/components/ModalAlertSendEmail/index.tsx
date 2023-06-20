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
const ModalSendEmailPng = require('../../assets/modal-send-email.png') ;

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalAlertSendEmail({ children, closeModal, ...rest }: Props) {

  const [modalVisible, setModalVisible] = useState(false);
  
  return (

    <Modal
      transparent
      statusBarTranslucent
      animationType="slide"
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={styles.image} 
              source={ModalSendEmailPng}
            />
            <Text style={styles.modalTitle}>Email enviado</Text>
      
            <Text style={styles.modalText}>Enviamos um link para o seu e-mail, clique nele e siga as instruções para redefinir sua senha de acesso.</Text>

            <View style={styles.footer}>
              <ButtonHighlight title={'Reenviar Código'} isBigTitle={false}/>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>

    </Modal>

  )
}