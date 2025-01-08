/* eslint-disable react/prop-types */
import "./Sie.css";
import { useState } from "react";

export default function Sie(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const fotos = props.foto;
  const length = fotos.length;
  const remain = length - 4;

  return (
    <div key={props.id} className="divisi">
      <div className="_divisi">
        {!props.isOddChild && <img className="foto-co" src={props.fotoCO} />}
        <div className={`info info-is-${props.isOddChild}`}>
          <div className="deskripsi-div">
            <p className="nama-divisi">{props.divisi}</p>
            <p className="deskripsi-divisi">{props.deskripsi}</p>
            {isOpen && <p className="deskripsi-divisi">CO: {props.namaCO}</p>}
          </div>
          <div className="pp-anggota">
            {!isOpen &&
              fotos
                .slice(0, 4)
                .map((foto, key) => (
                  <img
                    className="pp"
                    src={foto}
                    key={key}
                    alt={`Staff-${key}`}
                  />
                ))}

            {remain > 0 && (
              <div className="more-img">
                <div className={`remain-open-${isOpen}`} onClick={toggle}>
                  {!isOpen ? "+" + remain : <i className="bi bi-x"></i>}
                </div>
                {isOpen && <span>This is us!</span>}
              </div>
            )}
          </div>
        </div>
        {props.isOddChild && <img className="foto-co" src={props.fotoCO} />}
      </div>

      {isOpen && (
        <div className="all-staff">
          {fotos.map((foto, key) => (
            <img className="pp" src={foto} key={key} alt={`Staff-${key}`} />
          ))}
        </div>
      )}
    </div>
  );
}
