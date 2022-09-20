import React from "react"
import Note from "./Note"
import AddNote from "./AddNote"


const NotesList = ({notes, handleAddNote, handleDelNote}) =>{
    return (
        <div className="notes-list">
          {
          notes.map((note)=>(
             <Note 
             key={note.id}
             id={note.id}
             text=  {note.text}
             date= {note.date}
             handleDelNote ={handleDelNote}
             />
          ))
          }
          <AddNote handleAddNote = {handleAddNote}/>

        </div>
    )
}
export default NotesList