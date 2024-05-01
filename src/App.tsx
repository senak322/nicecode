import React from "react";
import Header from "./features/Header/Header";
import NavBar from "./features/NavBar/NavBar";
// import styles from "./App.module.scss";
const styles = require("./App.scss");

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <NavBar />
        <section>
          
        </section>
      </main>
    </div>
  );
};

export default App;
