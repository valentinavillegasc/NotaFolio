import React from "react";
import Note from "./Note";

export default function NotesList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
}
