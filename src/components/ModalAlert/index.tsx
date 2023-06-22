import React, { ReactNode, useState } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  Pressable,
  Text,
  Image,
  ImageSourcePropType
} from 'react-native';
import { ButtonTermsPrivacity } from '../ButtonTermsPrivacity';
import { ButtonHighlight } from '../ButtonHighlight';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = ModalProps & {
  children: ReactNode;
  type?: 'violet' | 'success' | 'error'
  title: string;
  image: ImageSourcePropType;
  buttonText?: string;
  closeModal: () => void;
}

export function ModalAlert({ children, image, buttonText, type, title, closeModal, ...rest }: Props) {

  const { violet, success200, error200 } = theme.colors;
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
              source={image}
            />
            <Text
              style={[styles.modalTitle, 
  
                type == 'success' ? { color: success200} :
                type == 'error' ? { color: error200} :
                { color: violet} 
              ]}
            >{title}</Text>
            
            <View style={styles.modalContent}>
              {children}
            </View>

            <View style={styles.footer}>
              <ButtonHighlight type={type} title={buttonText ?? 'Continuar'} isBigTitle={false}/>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>

    </Modal>

  )
}