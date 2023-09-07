import React, { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First note",
      date: "03/07/2023",
    },
    {
      id: nanoid(),
      text: "Second note",
      date: "04/08/2023",
    },
    {
      id: nanoid(),
      text: "Third note",
      date: "05/09/2023",
    },
    {
      id: nanoid(),
      text: "Fourth note",
      date: "06/010/2023",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="conainer">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeletenote={deleteNote}
      />
    </div>
  );
}
