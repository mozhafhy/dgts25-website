/* eslint-disable react/prop-types */
import "./Divisi.css";
import dataDivisi from "./Divisi.json";
import Sie from "./sie/Sie.jsx";
import AOS from "../../anim/AOS.jsx";

export default function Divisi({ id }) {
  return (
    <div key={id} id={id} className="divisi-container">
      {dataDivisi.map((divisi) => (
        <AOS key={divisi.key}>
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
        </AOS>
      ))}
    </div>
  );
}
