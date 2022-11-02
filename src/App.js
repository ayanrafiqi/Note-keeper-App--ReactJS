import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";

function App() {
  const [area, setArea] = useState({ title: "", note: "" });
  const [note, setNote] = useState([]);

  function noteHandler(area) {
    setNote((prevNote) => {
      return [...prevNote, area];
    });
  }
  function deleteNote(id) {
    setNote((prevNote) => {
      return prevNote.filter((_, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={noteHandler} value={area} />
      {note.map((noteArea, index) => (
        <Note
          key={index}
          id={index}
          title={noteArea.title}
          note={noteArea.note}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
