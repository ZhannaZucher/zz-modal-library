import React from 'react'
import { PropsWithChildren } from "react"
import "./Modal.css"

type ModalProps = PropsWithChildren<{
  active: boolean
  setActive: (value: boolean) => void
  customClass?: string
}> 

const Modal = ({
  active, 
  setActive,
  customClass, 
  children,
}: ModalProps) => {
	return (
    <dialog
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={`modal__content ${customClass ? customClass : ""} ${
          active ? "active" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button id="modal__close" onClick={() => setActive(false)}>
          &#10008;
        </button>
        {children}
      </div>
    </dialog>
  )
};

export default Modal;