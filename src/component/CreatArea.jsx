import React, { useState } from "react";

function CreateArea(props){

    const [note,setNote] = useState(
       {
        title:"",
        content:""
       }
    );
    function handleChange(event){
       console.log(event)
        const {name,value} = event.target;
        // destructure the event
        setNote(preNote =>{
            return {
             ...preNote,   
             [name]:value
            };
        })
    }
    function submitNote(event){
        props.onAdd(note);
         // to clear after adding 
         setNote({
            title:"",
            content:""
         })

        // prevent default loading off flashing screen
        event.preventDefault();

    }
    
    return (
        <div>
            <form >
                <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
                <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." cols="30" rows="3"></textarea>
                <button onClick={submitNote} ><img width="24" height="24" src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-Add-notes-those-icons-lineal-those-icons.png" alt="external-Add-notes-those-icons-lineal-those-icons"/></button>
            </form>
        </div>
    )
}
export default CreateArea;