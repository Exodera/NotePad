import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Note = ({id,text, date, handleDelNote}) => {

const handleDel =() =>{
  handleDelNote(id)
}

  return (
    <div className='note'>
        
        <span>{text}</span>

        <div className='note-footer'>

            <small>{date}</small>
            <MdDeleteForever className='del-icon' onClick={handleDel}/>

        </div>

    </div>
  )
}

export default Note