//Creates the cards with props to be used in the main app
import React from "react";
import "./CardPropStyling.css";

export default function CatCard(props) {
  //Stores the count in React state
  const [count, setCount] = React.useState(0);

  //Gives function to the upvote button
  function upvote() {
    setCount((prevCount) => prevCount + 1);
  }
  //Gives function to the downvote button
  function downvote() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div className="contact--card">
      <img
        className="Profile--Img"
        src={props.img}
        alt="Profile image for a cat"
      />

      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <div className="contact--voting">
        <button className="Upvote" onClick={upvote}>
          👍
        </button>
        <h2>{count}</h2>
        <button className="Downvote" onClick={downvote}>
          👎
        </button>
      </div>
    </div>
  );
}
