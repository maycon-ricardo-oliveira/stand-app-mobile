import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';
import { Backgound } from '../Background';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: Props) {
  return (

    <Modal
      transparent
      statusBarTranslucent
      animationType="slide"
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>

          <View style={styles.container}>
            <Backgound gradient={false}>
              <View style={styles.bar} />
              {children}
            </Backgound>
          </View>

        </View>
      </TouchableWithoutFeedback>

    </Modal>

  )
}