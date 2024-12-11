function NoteList({ notes, onEdit, onDelete }) {
  return (
    <ul className='notes'>
      {notes.map((note, index) => (
        <li key={index} className='liNotes'>
          <span onClick={() => onEdit(note, index)} className='spanText'>
            {note}
          </span>
          <button onClick={() => onDelete(index)} className='delete'>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;