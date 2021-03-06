import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    console.log(props.meaning);
    return (<div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
            <p>
                <strong>Definition: </strong>{definition.definition}
                <br /> 
                <strong>Example: </strong> <em>{props.meaning.definitions[0].example}</em>
                <br />
                <Synonyms synonyms= {definition.synonyms} />
                </p>
       </div> 
);

        })}
        

    </div>);
}