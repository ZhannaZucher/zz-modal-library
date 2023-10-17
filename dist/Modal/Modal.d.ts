import React from 'react';
import { PropsWithChildren } from "react";
import "./Modal.css";
type ModalProps = PropsWithChildren<{
    active: boolean;
    setActive: (value: boolean) => void;
    customClass?: string;
}>;
declare const Modal: ({ active, setActive, customClass, children, }: ModalProps) => React.JSX.Element;
export default Modal;
