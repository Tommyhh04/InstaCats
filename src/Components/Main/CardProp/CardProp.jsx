//Creates the cards with props to be used in the main app
import "./CardPropStyling.css";

export default function CatCard(props) {
  return (
    <div className="contact--card">
      <img />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <div className="contact--voting">
        <button>👍</button>
        <h2>0</h2>
        <button>👎</button>
      </div>
    </div>
  );
}
