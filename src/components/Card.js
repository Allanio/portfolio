import React from "react";
import CardInfo from "./CardInfo"

function Card(props) {
  return (
   <div className="d-inline-block hero-card" onMouseOver={(event) => props.hover(props.item)}>
       <img className="hero-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
       {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} />}
   </div>
  );
}

export default Card;
