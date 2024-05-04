import React from "react";
import plus from "../../assets/images/plus.svg";
import { useLocation } from "react-router-dom";
const styles = require("./AddBtn.scss");

export default function AddBtn() {
  const path = useLocation().pathname;

  return (
    <button className={styles.button}>
      {path === "/" ? (
        <span className={styles.span}>Новая заметка</span>
      ) : path === "/consult" ? (
        <span className={styles.span}>Записать</span>
      ) : path === "/video" ? (
        <span className={styles.span}>Рекомендовать</span>
      ) : path === "/events" ? (
        <span className={styles.span}>Рекомендовать</span>
      ) : null}
      <div className={styles.container}>
        <img src={plus} alt="Плюс" />
      </div>
    </button>
  );
}
