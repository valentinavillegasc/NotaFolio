import React, { useState } from "react";

export default function AddNote() {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  /* const handleSaveClick=()=>{} */
  return (
    <div className="note new">
      <textarea
        placeholder="Type to add a note..."
        id=""
        cols="10"
        rows="8"
        value={noteText}
        onChange={handleChange}></textarea>
      <div className="note-footer">
        <small>200 Remainig</small>
        <button className="save" /* onClick={handleSaveClick} */>Save</button>
      </div>
    </div>
  );
}
