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
const ModalLocationPng = require('../../assets/modal-location.png') ;

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalAlertLocation({ children, closeModal, ...rest }: Props) {

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
              source={ModalLocationPng}
            />
            <Text style={styles.modalTitle}>Permitir localização</Text>
      
            <Text style={styles.modalText}>Você aceita em permitir que o app rastrei sua localização em tempo real?</Text>

            <View style={styles.footer}>
              <ButtonHighlight type={'error'} title={'Continuar'} isBigTitle={false}/>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>

    </Modal>

  )
}