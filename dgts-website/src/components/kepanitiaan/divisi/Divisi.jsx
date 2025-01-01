import "./Divisi.css";
import dummy from "../../../assets/talkshow.jpg";

const images = [ // ! Ini gambar tes
  "src/assets/bedah_jurusan.JPG",
  "src/assets/campex.JPG",
  "src/assets/roadshow.JPG",
  "src/assets/roadshow.JPG",
  "src/assets/roadshow.JPG",
  "src/assets/talkshow.JPG",
];

export default function Divisi() {
  return (
    <div className="divisi-container">
      <Sie
        isOddChild={false}
        fotoCO={dummy}
        divisi="Divisi 1"
        deskripsi="Some descriptions here"
        foto={images}
      />
      <Sie
        isOddChild={true}
        fotoCO={dummy}
        divisi="Divisi 1"
        deskripsi="Some descriptions here"
        foto={images}
      />
      <Sie
        isOddChild={false}
        fotoCO={dummy}
        divisi="Divisi 1"
        deskripsi="Some descriptions here"
        foto={images}
      />
      <Sie
        isOddChild={true}
        fotoCO={dummy}
        divisi="Divisi 1"
        deskripsi="Some descriptions here"
        foto={images}
      />
      <Sie
        isOddChild={false}
        fotoCO={dummy}
        divisi="Divisi 1"
        deskripsi="Some descriptions here"
        foto={images}
      />
      <Sie
        isOddChild={true}
        fotoCO={dummy}
        divisi="Divisi 1"
        deskripsi="Some descriptions here"
        foto={images}
      />
    </div>
  );
}

function Sie(props) {
  const fotos = props.foto;
  const length = fotos.length;
  const remain = length - 4;

  return props.isOddChild ? (
    <div id="divisi">
      <div id="info">
        <div>
          <p className="nama-divisi">{props.divisi}</p>
          <p className="deskripsi-divisi">{props.deskripsi}</p>
        </div>
        <div className="pp-anggota">
          {fotos.slice(0, 4).map((foto, key) => (
            <img id="pp" src={foto} key={key} alt={`Staff-${key}`} />
          ))}

          {remain > 0 ? <div id="remain">+{remain}</div> : ""}
        </div>
      </div>
      <img id="foto-co" src={props.fotoCO} />
    </div>
  ) : (
    <div id="divisi">
      <img id="foto-co" src={props.fotoCO} />
      <div id="info">
        <div>
          <p className="nama-divisi">{props.divisi}</p>
          <p className="deskripsi-divisi">{props.deskripsi}</p>
        </div>
        <div className="pp-anggota">
          {fotos.slice(0, 4).map((foto, key) => (
            <img id="pp" src={foto} key={key} alt={`Staff-${key}`} />
          ))}

          {remain > 0 ? <div id="remain">+{remain}</div> : ""}
        </div>
      </div>
    </div>
  );
}
