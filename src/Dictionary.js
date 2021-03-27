import React, { useState }from "react";
import "./Dictionary.css";

export default function Dictionary(){
    const [keyword, setKeyword] = useState(" ");
   
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}...`)
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