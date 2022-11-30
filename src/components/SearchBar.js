import React from 'react'
import {MdSearch} from 'react-icons/md'

const SearchBar = ({filterNoteText}) => {

  return (
    <div className='search-bar'>
        <MdSearch size='1.3rem'/>
        <textarea className='search-text'
        
        placeholder='Search...'
        onChange = {(event)=>{ filterNoteText(event.target.value)}}
        >
        </textarea>


    </div>
  )
}

export default SearchBar