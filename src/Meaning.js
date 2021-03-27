import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
    return (<div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
            <p>{definition.definition}</p>
        <p><em>Example: {props.meaning.definitions[0].example}</em></p>
       </div> 
);

        })}
        

    </div>);
}