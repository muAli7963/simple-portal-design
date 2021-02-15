import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  padding: "50%",
  backgroundColor: "#fff",
  zIndex: 1000
};
const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  background: "rgba(0,0,0, 0.8)"
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLE}></div>
      <div style={MODAL_STYLE}>
        <button onClick={onClose}>close modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
