import React from 'react'

const Header = ({handleToggleDarkMode, previousDarkMode}) => {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button  onClick = {()=>handleToggleDarkMode((previousDarkMode)=> !previousDarkMode )} className='save-btn'>Toggle mode</button>

    </div>
  )
}

export default Header