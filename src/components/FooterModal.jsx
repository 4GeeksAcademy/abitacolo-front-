import React from 'react';
import FooterBody from './FooterBody';

const FooterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white dark:bg-abitacoloDarkGrayShadow w-full max-w-2xl rounded-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-2xl font-bold"
          >
            
            &times;
          </button>
          <FooterBody isModal={true} />
        </div>
      </div>
    </div>
  );
};

export default FooterModal;