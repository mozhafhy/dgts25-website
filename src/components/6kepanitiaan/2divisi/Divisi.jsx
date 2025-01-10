import "./Divisi.css"
import dataDivisi from "./Divisi.json";
import Sie from "./sie/Sie.jsx"

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
          namaCO={divisi.namaCO}
          deskripsi={divisi.deskripsi}
          foto={divisi.foto}
        />
      ))}
    </div>
  );
}