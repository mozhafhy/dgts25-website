import "./contact.css";
import telephone from "../../assets/telephone.svg";

export default function ContactButton() {
  return (
    <a
      href="https://wa.me/6282247433645"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="kontak-container">
        <div className="float-button">
          <img src={telephone} />
        </div>
      </div>
    </a>
  );
}
