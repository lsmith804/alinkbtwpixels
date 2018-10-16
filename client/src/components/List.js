import React from "react";

const List = props => (
  <div>
    <div className="img-container">
      <img alt={props.name} src={props.image} style={{width: 200, height: 200}} />
    </div>
    <div id="classicCard">
      <ul>
        <li>
          <strong  className="has-text-success">Name:</strong> {props.name}
        </li>
        <li>
          <strong  className="has-text-success">Summary:</strong> {props.summary}
        </li>
        <li>
          <strong  className="has-text-success">Further Reading:</strong><a href={props.furtherURL}>  <u>{props.furtherTitle}</u>  <i class="fas fa-external-link-alt"></i>   </a>
        </li>
      </ul>
    </div>
    <hr></hr>

  </div>
);

export default List;
