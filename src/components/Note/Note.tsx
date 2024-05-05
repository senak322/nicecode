import React from "react";
import DotBtn from "../DotBtn/DotBtn";
import { INote } from "../../utils/config";
const styles = require("./Note.scss");

export default function Note({ noteDate, text }: INote) {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        <span className={styles.date}>{noteDate}</span>
        {text}
      </p>
      <DotBtn />
    </div>
  );
}
