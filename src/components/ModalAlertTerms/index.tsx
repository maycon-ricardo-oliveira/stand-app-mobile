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
const ModalCheckPng = require('../../assets/modal-check.png') ;

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalAlertTerms({ children, closeModal, ...rest }: Props) {

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
              source={ModalCheckPng}
            />
            <Text style={styles.modalText}>Antes de Logar</Text>
						<ButtonTermsPrivacity
              themeText={'dark'}
						/>

            <View style={styles.footer}>
              <ButtonHighlight title={'Continuar'} isBigTitle={false}/>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>

    </Modal>

  )
}