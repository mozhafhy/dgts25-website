/* eslint-disable react/prop-types */
import "./Inti.css";
import dataPanit from "./Foto.json";
import AOS from "../../anim/AOS.jsx";

export default function Inti({ id }) {
  return (
    <div key={id} id={id} className="panit-container">
      <AOS>
        <h1 id="panit-title">Who&apos;s Behind DGTS 2025?</h1>
      </AOS>
      <AOS>
        <Panitia
          jabatan="ketua"
          foto="img-inti/Rifqi Fauza_Ketua DGTS.jpg"
          nama="Rifqi Fauza Dani"
          posisi="Ketua Umum"
        />
      </AOS>

      <AOS>
        <div className="anggota-container">
          {dataPanit.map((panit) => (
            <Panitia
              key={panit.key}
              id={panit.key}
              jabatan={panit.jabatan}
              foto={panit.foto}
              nama={panit.nama}
              posisi={panit.posisi}
            />
          ))}
        </div>
      </AOS>
    </div>
  );
}

function Panitia(props) {
  const jabatan = props.jabatan;
  return (
    <div id={jabatan} key={props.id}>
      <img className={`foto-${jabatan}`} src={props.foto} />
      <div className={`info-${jabatan}`}>
        <p id={`nama-${jabatan}`}>{props.nama}</p>
        <p className={`posisi-${jabatan}`}>{props.posisi}</p>
      </div>
    </div>
  );
}
