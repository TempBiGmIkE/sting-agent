import React from 'react';
import {
  IntakeFormFrame,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from './styles';

const WorkWithUsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ModalContent
        role="dialog"
        aria-modal="true"
        aria-label="Client intake form"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ModalCloseButton
          onClick={onClose}
          aria-label="Close client intake form"
        >
          ×
        </ModalCloseButton>
        <IntakeFormFrame
          title="Client intake form"
          src="https://3ujgntpkga.zite.so/"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default WorkWithUsModal;
