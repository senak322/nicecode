import React from "react";
import { NavLink } from "react-router-dom";
const styles = require("./NavBar.scss");

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? styles.linkPending
            : isActive
            ? styles.linkActive
            : styles.link
        }
      >
        Заметки
      </NavLink>
      <NavLink
        to="/consult"
        className={({ isActive, isPending }) =>
          isPending
            ? styles.linkPending
            : isActive
            ? styles.linkActive
            : styles.link
        }
      >
        Консультации
      </NavLink>
      <NavLink
        to="/video"
        className={({ isActive, isPending }) =>
          isPending
            ? styles.linkPending
            : isActive
            ? styles.linkActive
            : styles.link
        }
      >
        Видео
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive, isPending }) =>
          isPending
            ? styles.linkPending
            : isActive
            ? styles.linkActive
            : styles.link
        }
      >
        Мероприятия
      </NavLink>
    </nav>
  );
}
