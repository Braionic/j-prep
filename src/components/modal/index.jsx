import React, { useRef, useState } from "react";
import "../modal/style.css";
import ModalComponent from "./ModalComponent";
import useOutsideClick from "./useOutsideClick";
export default function Modal() {
  const ref = useRef();
  const [show, setShow] = useState(false);
  useOutsideClick(ref, () => setShow(false));
  const handleClose = () => {
    setShow(false);
  };
  const handleClick = () => {
    setShow((oldval) => !oldval);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <p>Modal</p>
      {!show && <button onClick={handleClick} style={{color: "black"}}>Login</button>}
      {show && (
        <div ref={ref}>
          <ModalComponent
            onClick={handleClose}
            header="Header"
            footer="This is the footer"
          />
        </div>
      )}
    </div>
  );
}
