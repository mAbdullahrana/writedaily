import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

import Button from "./Button.jsx";
import { Cross, X } from "lucide-react";
import { useDetectOutsideClickModal } from "../_hooks/useDetectOutsideClickModal.js";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowsName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowsName) });
}
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useDetectOutsideClickModal(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-[4px] z-[1000] transition-all duration-500">
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent rounded-sm shadow-lg py-[3.2rem] px-[4rem] transition-all duration-500"
        ref={ref}
      >
        <button  onClick={close} className="bg-transparent border-0 p-[0.4rem] rounded-[var(--border-radius-sm)] transform translate-x-[0.8rem] transition-all duration-200 absolute top-[1.2rem] right-[1.9rem] hover:bg-[var(--color-grey-100)]">
        <X />
        </button>
        <div>{cloneElement(children, { onClose: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
