import "./Events.css";

// ! Decoration element -> line
const decor = (
  <svg
    width="367"
    height="24"
    viewBox="0 0 367 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.952994 12L12.5 23.547L24.047 12L12.5 0.452994L0.952994 12ZM366.047 12L354.5 0.452994L342.953 12L354.5 23.547L366.047 12ZM12.5 14H354.5V10H12.5V14Z"
      fill="#9C1527"
    />
  </svg>
);

// ! Main function
export default function Events() {
  return (
    <div className="events-container">
      <h1 className="text-center">Events and Date</h1>

      <div className="cards-carousel">
        <Card
          event="Roadshow"
          motto="Explore Your Path, Ignite Your Future"
          foto="src\assets\roadshow.JPG"
          color="red-ligth"
          desc="Roadshow to Duacare Goes To School 2025 merupakan permulaan dari serangkaian kegiatan Duacare Goes To School 2025 yang bertujuan untuk memberikan pengenalan serta pemahaman mengenai Duacare dan DGTS itu sendiri."
          date="17 Januari 2025 (09.30 - 14.15 WIB)"
          place="Ruang kelas SMA Negeri 2 Lumajang"
        />

        <Card
          event="Bedah Jurusan"
          motto="Know Your dreams, Shape Your Mission, and Decide Your Major"
          foto="src\assets\bedah_jurusan.JPG"
          color="red-dark"
          desc="Bedah Jurusan merupakan rangkaian acara Duacare Goes To School 2025 yang bertujuan untuk membantu siswa-siswi kelas XII SMA Negeri 2 Lumajang memahami berbagai jurusan di perguruan tinggi."
          date="25 Januari 2025 (06.45 - 12.00 WIB)"
          place="Ruang kelas SMA Negeri 2 Lumajang"
        />

        <Card
          event="Talkshow"
          motto="Dare to Dream, Dare to Achieve"
          foto="src\assets\talkshow.JPG"
          color="blue-ligth"
          desc="Talkshow merupakan kegiatan yang diadakan dalam rangkaian kegiatan DGTS 2025 berupa perbincangan atau diskusi bersama pemateri (alumni SMADA) yang diundang mengenai topik tertentu."
          date="24 Januari 2025 (12.45 - 16.15 WIB)"
          place="Pinandhita Hall SMA Negeri 2 Lumajang"
        />

        <Card
          event="Campus Expo"
          motto="Explore Possibilities, Embrace Opportunities"
          foto="src\assets\campex.JPG"
          color="blue-dark"
          desc="Campus Expo merupakan rangkaian acara Duacare Goes To School 2025 yang bertujuan untuk memberikan informasi mengenai berbagai perguruan tinggi yang ada di Indonesia kepada siswa-siswi SMA Negeri 2 Lumajang."
          date="25 - 26 Januari 2025 (12.00 - 21.00 WIB)"
          place="Ruang kelas SMA Negeri 2 Lumajang"
        />
      </div>
    </div>
  );
}

// ! Card container
function Card(props) {
  return (
    <label className="card-container">
      <Front type="dummy" event="dummy" />
      <input type="checkbox"/>
      <div className="cards-item">
        <Front
          event={props.event}
          motto={props.motto}
          foto={props.foto}
          color={props.color}
        />
        <Back
          event={props.event}
          desc={props.desc}
          color={props.color}
          date={props.date}
          place={props.place}
        />
      </div>
    </label>
  );
}

// ! Front part
function Front(props) {
  return (
    <div className={`front-part ${props.type}`}>
      <div className="item-container">
        <div className="card-title">
          <h6 className="event front">{props.event}</h6>

          <div className={`${props.color}-decor front-card`}>{decor}</div>

          <div id="motto">{`"${props.motto}"`}</div>
        </div>
        <img className="foto" src={props.foto} />
        <p id="info">(Click to Show More Info)</p>
      </div>
    </div>
  );
}

// ! Back part
function Back(props) {
  const dateIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      width="24px"
      viewBox="0 -960 960 960"
      fill="var(--def-black)"
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
    </svg>
  );
  const placeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      width="24px"
      viewBox="0 -960 960 960"
      fill="var(--def-black)"
    >
      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
    </svg>
  );

  return (
    <div className={`back-part ${props.type}`}>
      <div id="border-box">
        <div className={`${props.color}-head back`}>{props.event}</div>

        <div className="event info-container">
          <div className={`${props.color} even-desc`}>{props.desc}</div>

          <div className={`${props.color}-decor decor`}>{decor}</div>

          <div id="date-place">
            <div className="date">
              {dateIcon}
              {props.date}
            </div>
            <div className="place">
              {placeIcon}
              {props.place}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
