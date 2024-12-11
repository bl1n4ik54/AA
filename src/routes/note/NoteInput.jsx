function NoteInput({ currentNote, onNoteChange, onAddOrUpdateNote }) {
  return (
    <div className='contentTextrea'>
      <textarea
        className='textarea'
        value={currentNote}
        onChange={onNoteChange}
        placeholder="Впишите текст"
      />
      <button onClick={onAddOrUpdateNote} className='addButton'>
        {currentNote ? 'Update Note' : 'Add Note'}
      </button>
    </div>
  );
}

export default NoteInput;