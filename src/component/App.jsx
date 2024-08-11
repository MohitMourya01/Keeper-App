import React,{useState,useEffect} from "react";
import Header from "./Header1";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreatArea";

function App(){
    // const [notes,setNotes] = useState( [] )

     const [newNote, setNewNote] = useState(() => {
      const savedNotes = localStorage.getItem('newNote');
      return savedNotes ? JSON.parse(savedNotes) : [];
    });
  
    //const [newNote, setNewNote] = useState('');
  
    // Update local storage whenever notes change
    useEffect(() => {
      localStorage.setItem('newNote', JSON.stringify(newNote));
    }, [newNote]);

    function addNote(note){
      if(note.title === "" || note.content === ""){
         alert("Give a Title or Note Content to Your Note")
      }
      else{
       setNewNote(prevNotes => {
        return ([...prevNotes,note])
       })
      }
    }
   
   

  
    function deleteNote(id){
       setNewNote(prevNotes => {
         return prevNotes.filter((noteItem,index) =>{
             return index !==id;
          })
       })
    }
    return (<div>
        
        <Header />
        <CreateArea onAdd={addNote} />
        
        {newNote.map((noteItem,index) =>  <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete = {deleteNote} />)}
        <Footer />
    </div>);
}
export default App;