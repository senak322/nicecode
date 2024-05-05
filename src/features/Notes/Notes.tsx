import React from "react";
import { notes } from "../../utils/config";
import Note from "../../components/Note/Note";
import map from "../../assets/images/map.png";
const styles = require("./Notes.scss");

export default function Notes() {
  return (
    <section className={styles.notes}>
      {notes.map((note, index) => (
        <Note key={index} noteDate={note.noteDate} text={note.text} />
      ))}
      <img src={map} alt="map" className={styles.map}/>
    </section>
  );
}
