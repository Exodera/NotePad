import {nanoid} from 'nanoid';
import SearchBar from './components/SearchBar';
import { useState} from 'react'
import Header from './components/Header';
import NotesList from './components/NotesList'



function App() {
  
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hello this is the first note!",
      date: "10/04/21"
    },
    {
      id: nanoid(),
      text: "Hello this is the second note!",
      date: "10/04/21"
    }
  ]
  );

    const [darkMode, setDarkMode] = useState(false)
    const [searchText, setSearchText] = useState('')

  
    const addNote = (text)=>{ 
    const date = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const delNote =(id)=>{
  setNotes(notes.filter((note)=>(
    note.id !== id
  )))
  }

  return (
    <div className={`${darkMode  && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode = {setDarkMode} previousDarkMode = {darkMode}/>
      <SearchBar notes = {notes} filterNoteText ={setSearchText} />
      <NotesList notes = {notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote = {addNote} handleDelNote =  {delNote}/>
    </div>
    </div>
    

    
  );
}

export default App;
