import "./Divisi.css";
import dummy from "../../../assets/talkshow.jpg";

export default function Divisi() {
  return (
    <div className="divisi-container">
      <Sie
        isOddChild={false}
        fotoCO={dummy}
        divisi="Divisi 1"
        deskripsi="Some descriptions here"
        // TODO: foto anggota
      />

      <Sie
        isOddChild={true}
        fotoCO={dummy}
        divisi="Divisi 2"
        deskripsi="Some descriptions here"
        // TODO: foto anggota
      />

      <Sie
        isOddChild={false}
        fotoCO={dummy}
        divisi="Divisi 3"
        deskripsi="Some descriptions here"
        // TODO: foto anggota
      />

      <Sie
        isOddChild={true}
        fotoCO={dummy}
        divisi="Divisi 4"
        deskripsi="Some descriptions here"
        // TODO: foto anggota
      />
    </div>
  );
}

function Sie(props) {
  return props.isOddChild ? (
    <div id="divisi">
      <div id="info">
        <div>
          <p className="nama-divisi">{props.divisi}</p>
          <p className="deskripsi-divisi">{props.deskripsi}</p>
        </div>
        <div className="pp-anggota">Images{/*TODO: add images*/}Here</div>
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
        <div className="pp-anggota">Images{/*TODO: add images*/}Here</div>
      </div>
    </div>
  );
}
