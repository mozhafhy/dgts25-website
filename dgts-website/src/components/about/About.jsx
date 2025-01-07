import "./About.css";

const path = "src/assets/about-images/";
const images = [
  `${path}01.png`,
  `${path}02.png`,
  `${path}03.png`,
  `${path}04.png`,
  `${path}05.png`,
  `${path}06.png`,
  `${path}07.png`,
  `${path}08.png`,
  `${path}09.png`,
  `${path}10.png`,
  `${path}11.png`,
  `${path}12.png`,
];

export default function About() {
  return (
    <div className="profile-container shadow-lg">
      <div className="about-container">
        <div className="about">
          <h1 id="title" className="abt">
            About DGTS 2025
          </h1>
          <p id="desc">
            Duacare Goes To School 2025 mengusung tema “Explore Your Path,
            Ignite Your Future”, yang menggambarkan perjalanan penemuan jati
            diri dan ambisi. Tema ini bertujuan untuk mendorong setiap individu
            meraih peluang, membangun masa depan yang cerah, dan menginspirasi
            tindakan serta tekad dalam mencapai tujuan dengan mengoptimalkan
            potensi diri.
          </p>
        </div>

        <div className="why">
          <h6 id="title" className="why">
            Why DGTS 2025?
          </h6>
          <p id="desc">
            Kegiatan ini ditujukan kepada seluruh siswa SMA Negeri 2 Lumajang
            dengan kolaborasi bersama pihak manajemen sekolah dan dirancang
            untuk memberikan wawasan serta motivasi kepada generasi muda agar
            terus belajar, berkembang, dan mengambil langkah nyata dalam
            membangun masa depan.
          </p>
        </div>
      </div>
      <div className="img-carousel">
        {images.map((img, key) => (
          <img key={key} id="foto" src={img} />
        ))}
      </div>
    </div>
  );
}
