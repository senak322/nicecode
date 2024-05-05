import React from "react";
import Header from "./features/Header/Header";
import UsersList from "./features/UsersList/UsersList";
import UserInfo from "./features/UserInfo/UserInfo";
import NavBar from "./features/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import AddBtn from "./components/AddBtn/AddBtn";
import Notes from "./features/Notes/Notes";
// import styles from "./App.scss";
const styles = require("./App.scss");

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <UsersList />
        <section className={styles.section}>
          <UserInfo />
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="/consult" element={<div>Консультации</div>} />
              <Route path="/video" element={<div>Видео</div>} />
              <Route path="/events" element={<div>Мероприятия</div>} />
            </Routes>
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
