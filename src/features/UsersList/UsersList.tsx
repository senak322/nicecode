import React, { useCallback, useState } from "react";
import search from "../../assets/images/search.svg";
import searchwhite from "../../assets/images/searchwhite.svg";
import plus from "../../assets/images/plus.svg";
import plusWhite from "../../assets/images/plusWhite.svg";
import filter from "../../assets/images/filter.svg";
import filterWhite from "../../assets/images/filterWhite.svg";
import BtnIcon from "../../components/BtnIcon/BtnIcon";

const styles = require("./UsersList.scss");

export default function UsersList() {
  const [isSearch, setIsSearch] = useState(false);
  const hadleSearch = useCallback(() => {
    setIsSearch(true);
  }, []);

  const handleCloseSearch = useCallback(() => {
    setIsSearch(false);
  }, []);

  const handleFilter = useCallback(() => {}, []);

  const handlePlus = useCallback(() => {}, []);
  return (
    <section className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.inputWrapper}>
            <div
              className={
                !isSearch ? styles.inputContainer : styles.inputContainerActive
              }
            >
              <BtnIcon
                imgMain={search}
                imgHover={searchwhite}
                alt="Лупа"
                handleClick={hadleSearch}
                isSearch={isSearch}
              />
              <input
                className={styles.input}
                type="text"
                disabled={!isSearch}
              />
            </div>
            {!isSearch && (
              <BtnIcon
                imgMain={filter}
                imgHover={filterWhite}
                alt="Фильтр"
                handleClick={handleFilter}
              />
            )}
          </div>
          {!isSearch ? (
            <BtnIcon
              imgMain={plus}
              imgHover={plusWhite}
              alt="Плюс"
              handleClick={handlePlus}
            />
          ) : (
            <BtnIcon
              imgMain={plus}
              imgHover={plusWhite}
              alt="Закрыть поиск"
              handleClick={handleCloseSearch}
              isSearch={isSearch}
            />
          )}
        </div>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </section>
  );
}
