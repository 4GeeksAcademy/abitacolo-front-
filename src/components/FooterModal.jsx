import React from "react";
import FooterBody from "./FooterBody";

const FooterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="flex items-center justify-center p-2">
        <div className="bg-white dark:bg-abitacoloDarkGrayShadow w-full max-w-2xl rounded-lg relative grid">
          <button
            onClick={onClose}
            className="top-2 dark:text-white right-2 text-2xl font-bold place-self-end p-2"
          >
            Cerrar
          </button>
          <FooterBody isModal={true} />
        </div>
      </div>
    </div>
  );
};

export default FooterModal;
