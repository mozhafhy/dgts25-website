import "./Inti.css";
import dataPanit from "./Foto.json";

export default function Inti() {
  return (
    <div className="panit-container">
      <h1 id="panit-title">Who&apos;s Behind DGTS 2025?</h1>
      <Panitia
        jabatan="ketua"
        foto="src\components\kepanitiaan\inti\img\Rifqi Fauza_Ketua DGTS.jpg"
        nama="Rifqi Fauza Dani"
        posisi="Ketua Umum"
      />

      <div className="anggota-container">
        {dataPanit.map((panit) => (
          <Panitia
            key={panit.key}
            jabatan={panit.jabatan}
            foto={panit.foto}
            nama={panit.nama}
            posisi={panit.posisi}
          />
        ))}
      </div>
    </div>
  );
}

function Panitia(props) {
  const jabatan = props.jabatan;
  return (
    <div id={jabatan} key={props.key}>
      <img className={`foto-${jabatan}`} src={props.foto} />
      <div className={`info-${jabatan}`}>
        <p id={`nama-${jabatan}`}>{props.nama}</p>
        <p className={`posisi-${jabatan}`}>{props.posisi}</p>
      </div>
    </div>
  );
}
