import { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import SearchBar from './SearchBar';
import './Notes.css';

function Notes() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [currentNote, setCurrentNote] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleNoteChange = (event) => {
    setCurrentNote(event.target.value);
  };

  const handleAddOrUpdateNote = () => {
    if (editingIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = currentNote;
      setNotes(updatedNotes);
      setEditingIndex(null);
    } else {
      setNotes([...notes, currentNote]);
    }
    setCurrentNote('');
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((note, i) => i !== index));
    if (editingIndex === index) {
      setCurrentNote('');
      setEditingIndex(null);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='conteiner'>
      <h1 className='h1'>Notepad</h1>
      <div className='content'>
        <NoteList notes={filteredNotes} onEdit={(note, index) => {
          setCurrentNote(note);
          setEditingIndex(index);
        }} onDelete={handleDeleteNote} />
        <NoteInput currentNote={currentNote} onNoteChange={handleNoteChange} onAddOrUpdateNote={handleAddOrUpdateNote} />
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch } />
      </div>
    </div>
  );
}

export default Notes;