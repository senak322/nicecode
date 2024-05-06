import React from "react";
import Header from "./features/Header/Header";
import UsersList from "./features/UsersList/UsersList";
import UserInfo from "./features/UserInfo/UserInfo";
import NavBar from "./features/NavBar/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import AddBtn from "./components/AddBtn/AddBtn";
import Notes from "./features/Notes/Notes";
import Consult from "./features/Consult/Consult";
import Video from "./features/Video/Video";
import Event from "./features/Event/Event";
// import styles from "./App.scss";
const styles = require("./App.scss");

const App: React.FC = () => {
  // const [page, setPage] = useState("")
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <UsersList />
        <section className={styles.section}>
          <UserInfo />
          <div>
            <NavBar />
            {/* <Router> */}
              <Routes>
                <Route path="/" element={<Notes />} />
                <Route path="/consult" element={<Consult />} />
                <Route path="/video" element={<Video />} />
                <Route path="/events" element={<Event />} />
              </Routes>
            {/* </Router> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
