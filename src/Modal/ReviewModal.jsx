// notes this is just a demo file if anyone have any confusion about the modal please see the template

import React, { useEffect, useRef } from "react";

const ReviwModal = ({ isOpen, setIsOpen, onClose }) => {
  // using ref to detect outside click
  const modalRef = useRef(null);

  // this function gonna call the parent handleClose and it will closes the modal
  const closeModal = () => {
    setIsOpen(false);
    if (onClose) {
      onClose(); // Notify parent that modal is closed
    }
  };

  // Close modal on outside click

  // don't worry about that if you don't understand this just replace modalRef with your defined ref like we are using modalRef you can useDemoRef
  useEffect(() => {
    const handleOutsideClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex justify-end items-start z-50">
          <div
            // ensure the reference here
            ref={modalRef}
            className="bg-white w-[307px] rounded-[22px] h-[307px] shadow-customeShadow p-[15px] mt-[80px]  mr-[20px] flex flex-col gap-y-5 "
          ></div>
        </div>
      )}
    </div>
  );
};

export default ReviwModal;

