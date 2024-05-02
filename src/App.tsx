import React from "react";
import Header from "./features/Header/Header";
import NavBar from "./features/NavBar/NavBar";
import UserInfo from "./features/UserInfo/UserInfo";
// import styles from "./App.scss";
const styles = require("./App.scss");

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <NavBar />
        <section className={styles.section}>
          <UserInfo />
          
        </section>
      </main>
    </div>
  );
};

export default App;
