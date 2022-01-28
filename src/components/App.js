import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../../src/notes";

const note = (note) => (
  <Note key={note.key} title={note.title} content={note.content} />
);

function App(props) {
  return (
    <div>
      <Header />
      {notes.map(note)}
      <Footer />
    </div>
  );
}

export default App;
