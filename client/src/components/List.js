import React from "react";

const List = props => (
  <div className="column is-10 is-offset-2">
    <div className="img-container">
      <img alt={props.name} src={props.image} style={{width: 200, height: 200}} />
    </div>
    <div id="classicCard">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Summary:</strong> {props.summary}
        </li>
        <li>
          <strong>Further Reading:</strong><a href={props.furtherURL}> {props.furtherTitle}  </a>
        </li>
      </ul>
    </div>
    <hr></hr>

  </div>
);

export default List;
