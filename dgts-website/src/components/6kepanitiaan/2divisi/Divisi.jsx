/* eslint-disable react/prop-types */
import "./Divisi.css";
import dataDivisi from "./Divisi.json";

export default function Divisi() {
  return (
    <div className="divisi-container">
      {dataDivisi.map((divisi) => (
        <Sie
          key={divisi.key}
          id={divisi.key}
          isOddChild={divisi.isOddChild}
          divisi={divisi.divisi}
          fotoCO={divisi.fotoCO}
          deskripsi={divisi.deskripsi}
          foto={divisi.foto}
        />
      ))}
    </div>
  );
}

function Sie(props) {
  const fotos = props.foto;
  const length = fotos.length;
  const remain = length - 4;

  return props.isOddChild ? (
    <div key={props.id} id="divisi">
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
    <div key={props.id} id="divisi">
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
