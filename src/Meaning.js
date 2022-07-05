import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition">
              {definition.definition}
              <div className="Example">
                <em>{definition.example}</em>
              </div>
            </div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}

      <p>{props.meaning.definitions[0].definition}</p>
      <em>
        {" "}
        <p>{props.meaning.definitions[0].example}</p>
      </em>
    </div>
  );
}
