import React from "react";
import "./MemberCard.css";

const MemberCard = props => (
    <img className="card"
    id={props.id}
    clicks={props.clicks}
    name={props.name}
    src={props.image}
    alt={props.name}
    selected={props.selected}
    onClick={props.handleClick} 
    /> 
)

export default MemberCard;

