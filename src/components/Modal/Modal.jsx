import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h5 className="modal-title">Thank you, I wll get back to you as soon as possible</h5>
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
