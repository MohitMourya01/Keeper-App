import React from "react";

function Note(props){
    function handleClick(){
        props.onDelete(props.id);
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="delete" onClick={handleClick}><img width="35" height="35" src="https://img.icons8.com/carbon-copy/100/filled-trash.png" alt="filled-trash"/>
    </button>
        </div>
    )
}

export default Note;