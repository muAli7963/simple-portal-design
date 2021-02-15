import { useState } from "react";
import Modal from "./modal.js";

import "./styles.css";

const BUTTON_STYLE_WRAPPER = {
  position: "relative",
  zIndex: 1
};

const OTHER_STYLES = {
  postion: "relative",
  padding: "10px",
  background: "red"
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={BUTTON_STYLE_WRAPPER}>
        <button onClick={() => setIsOpen(true)}>open modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          beautiful modal
        </Modal>
        <div style={OTHER_STYLES}>other content goes here</div>
      </div>
    </>
  );
}
