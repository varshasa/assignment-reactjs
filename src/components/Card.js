import React from "react";
// import img from "../images/gown.jpg";

function Card(props) {
  return (
    <>
    <div className="container">
      <div className="card">
        <div className="image">
          <img src={props.img} alt="gown" />
        </div>
        <div className="product">
          <p>{props.caption}</p>
        </div>
      </div>
      <div className="price">
        <p>{props.price}</p>
      </div>
      </div>
    </>
  );
}

export default Card;
