import React, { useState }from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
    const [keyword, setKeyword] = useState(" ");

    function handleResult(response) {
        console.log(response.data[0]);
    }
   
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}...`)
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResult);
    }

     function handleKeywordChange(event){
    
         setKeyword(event.target.value);
        
    }
    return (
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="Search" onChange={handleKeywordChange}/>
            </form>
        </div>
    )
}