import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Message Sent!</h4>
        <p>Thank you. I wll get back to you as soon as possible.</p>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => dispatch(closeModal())}
        >
          Close
        </button>
      </div>
    </aside>
  );
};

export default Modal;
