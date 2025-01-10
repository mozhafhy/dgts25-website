import "./contact.css";
import { useState } from "react";
import telephone from "../../assets/telephone.svg";

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  setTimeout(() => {
    setIsOpen(false);
  }, 5000);

  return (
    <div className="main-container">
      <div className={`popover ${isOpen ? "opened" : "closed"}`} onTransitionEnd={() => handleClose}>
        <span onClick={handleClose} className="close">
          <p className="x">&times;</p>
        </span>
        <p className="CTA">Hubungi kami di sini!</p>
      </div>
      <a href="https://wa.me/6282247433645" target="_blank" rel="noopener noreferrer">
        <div className="kontak-container">
          <div className="float-button">
            <img src={telephone} />
          </div>
        </div>
      </a>
    </div>
  );
}
