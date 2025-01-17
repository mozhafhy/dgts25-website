/* eslint-disable react/prop-types */
import "./Events.css";
import events from "./EventsData.json";

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
export default function Events({ id }) {
  return (
    <div key={id} id={id} className="events-container">
      <h1 className="text-center">Events and Date</h1>

      <div className="cards-carousel">
        {events.map((acara) => (
          <Card
            key={acara.idx}
            id={acara.idx}
            event={acara.event}
            motto={acara.motto}
            foto={acara.foto}
            color={acara.color}
            desc={acara.desc}
            date={acara.date}
            place={acara.place}
          />
        ))}
      </div>
    </div>
  );
}

// ! Card container
function Card(props) {
  return (
    <label className="card-container" key={props.id}>
      <Front type="dummy" event="dummy" />
      <input type="checkbox" />
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

  const [date, hour] = props.date;

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
              {date}
              <br />
              {hour}
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
