import React from 'react'
import { useState } from 'react';


const AddNote = ({handleAddNote}) => {
    const charLimit = 200;
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) =>{
        if(charLimit - event.target.value.length >= 0 )
        setNoteText(event.target.value);
        
    }

   

    const handleSaveClick = ()=>{
       if(noteText.trim().length > 0){
        handleAddNote(noteText);
       }
        
       
    }

    return (
        <div className='note new'>
            <textarea 
            value={noteText}
            rows={8} 
            cols = {10}
            placeholder = 'Type in new note...'
            onChange={handleChange}
            ></textarea>


            <div className='note-footer'>
                <small >{charLimit - noteText.length} remaining</small>
                <button className='save-btn' onClick={handleSaveClick}>Save</button>

            </div>

        </div>
    )
}

export default AddNote