import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
export default function NotesList({ notes, handleAddNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}
