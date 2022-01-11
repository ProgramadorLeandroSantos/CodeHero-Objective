/* eslint-disable react-native/no-inline-styles */
import React, {Dispatch, SetStateAction} from 'react';
import {KeyboardAvoidingView} from 'react-native';

import Modal from 'react-native-modal';

import {Container} from './styles';

interface ModalComponentProps {
  isVisible: boolean;
  closeModal: Dispatch<SetStateAction<boolean>>;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isVisible,
  closeModal,
  children,
}) => {
  return (
    <Modal
      backdropOpacity={0.6}
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="fadeOut"
      onBackdropPress={() => closeModal(false)}
      onBackButtonPress={() => closeModal(false)}
      statusBarTranslucent
      useNativeDriver
      hideModalContentWhileAnimating
      propagateSwipe>
      <KeyboardAvoidingView
        style={{paddingBottom: 25}}
        behavior="position"
        enabled>
        <Container>{children}</Container>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalComponent;
