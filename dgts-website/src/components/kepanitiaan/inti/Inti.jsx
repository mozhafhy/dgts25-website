import "./Inti.css";
import dummy from "../../../assets/talkshow.jpg";
import dum from "../../../assets/roadshow.jpg";

export default function Inti() {
  return (
    <div className="panit-container">
      <h1 id="panit-title">Who&apos;s Behind DGTS 2025?</h1>
      <Panitia
        jabatan="ketua"
        foto={dummy}
        nama="Nama. Nama. N."
        posisi="Ketua Umum"
      />

      <div className="anggota-container">
        <Panitia
          jabatan="anggota"
          foto={dum}
          nama="Aqeela Mandaluna I."
          posisi="Sekretaris 1"
        />

        <Panitia
          jabatan="anggota"
          foto={dum}
          nama="Nama. Nama. N."
          posisi="Sekretaris 2"
        />

        <Panitia
          jabatan="anggota"
          foto={dum}
          nama="Nama. Nama. N."
          posisi="Bendahara 1"
        />

        <Panitia
          jabatan="anggota"
          foto={dum}
          nama="Nama. Nama. N."
          posisi="Bendahara 2"
        />
      </div>
    </div>
  );
}

function Panitia(props) {
  const jabatan = props.jabatan;
  return (
    <div id={jabatan}>
      <img className={`foto-${jabatan}`} src={props.foto} />
      <div className={`info-${jabatan}`}>
        <p className={`nama-${jabatan}`}>{props.nama}</p>
        <p className={`posisi-${jabatan}`}>{props.posisi}</p>
      </div>
    </div>
  );
}
