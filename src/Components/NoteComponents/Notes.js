import { React, useState, useEffect } from "react";
import "../css/Note.css";
import Note from "./Note"
import CreateNote from "./CreateNote"
import { v4 as uuid } from "uuid";
function Notes() {
const [notes, setNotes] = useState([]);
const [inputText, setInputText] = useState("");
const textHandler = (e) => {
  setInputText(e.target.value);
};
const saveHandler = () => {
  setNotes((prevState) => [
    ...prevState,
    {
      id: uuid(),
      text: inputText,
    },
  ]);
  //clear the textarea
  setInputText("");
};
const deleteNote = (id) => {
  const filteredNotes = notes.filter((note) => note.id !== id);
  setNotes(filteredNotes);
};
useEffect(() => {
  localStorage.setItem("Notes", JSON.stringify(notes));
}, [notes]);
  return (
  <div className="notes">
    {notes.map((note) => (
      <Note
        
        id={note.id}
        text={note.text}
        deleteNote={deleteNote}
      />
    ))}
    <CreateNote
      textHandler={textHandler}
      saveHandler={saveHandler}
      inputText={inputText}
    />
  </div>
  );
  
}

export default Notes;


