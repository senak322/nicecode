import React, { useCallback, useState } from "react";
import search from "../../assets/images/search.svg";
import searchwhite from "../../assets/images/searchwhite.svg";
import plus from "../../assets/images/plus.svg";
import plusWhite from "../../assets/images/plusWhite.svg";
import filter from "../../assets/images/filter.svg";
import filterWhite from "../../assets/images/filterWhite.svg";
import BtnIcon from "../../components/BtnIcon/BtnIcon";
import { users } from "../../utils/config";
import UserItem from "../../components/UserItem/UserItem";
import Сheckbox from "../../components/Сheckbox/Сheckbox"


const styles = require("./UsersList.scss");

export default function UsersList() {
  const [isSearch, setIsSearch] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState(new Set<number>());
  const [isAllChecked, setIsAllChecked] = useState(false);
  const hadleSearch = useCallback(() => {
    setIsSearch(true);
  }, []);

  const handleCloseSearch = useCallback(() => {
    setIsSearch(false);
  }, []);

  const handleFilter = useCallback(() => {}, []);

  const handlePlus = useCallback(() => {}, []);

  const handleDo = useCallback(() => {}, []);

  const handleCheckChange = useCallback((id: number, checked: boolean) => {
    setCheckedUsers((prevCheckedUsers) => {
      const newCheckedUsers = new Set(prevCheckedUsers);
      if (checked) {
        newCheckedUsers.add(id);
      } else {
        newCheckedUsers.delete(id);
      }
      return newCheckedUsers;
    });
  }, []);
  const handleAllCheckChange = useCallback((checked: boolean) => {
    setIsAllChecked(checked);
    if (checked) {
      setCheckedUsers(new Set(users.map(user => user.id)));
    } else {
      setCheckedUsers(new Set());
    }
  }, []);
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
      <div className={styles.counter}>
        {!isCheck ? (
          <>
            <p className={styles.usersCount}>213</p>
            <button
              className={styles.addButton}
              onClick={() => setIsCheck(true)}
            >
              Выбрать
            </button>
          </>
        ) : (
          <>
            <div className={styles.checkContainer}>
              <Сheckbox checked={isAllChecked} onChange={(e) => handleAllCheckChange(e.target.checked)}/>
              <span>
                {/* <input type="checkbox"  checked={isAllChecked} onChange={(e) => handleAllCheckChange(e.target.checked)} /> */}
                Все
              </span>
              <p className={`${styles.usersCount} ${styles.usersCountCheck}`}>{checkedUsers.size}</p>
            </div>
            <div>
              <button className={styles.addButton} onClick={handleDo}>
                Действия
              </button>
              <button
                className={styles.addButton}
                onClick={() => setIsCheck(false)}
              >
                Отменить
              </button>
            </div>
          </>
        )}
      </div>

      <ul>
        {users.map((user) => {
          return (
            <UserItem
              name={user.name}
              isTg={user.isTg}
              isWarning={user.isWarning}
              image={user.image}
              isChecked={checkedUsers.has(user.id)}
              onCheckChange={(checked) => handleCheckChange(user.id, checked)}
              isCheck={isCheck}
              key={user.id}
            />
          );
        })}
      </ul>
    </section>
  );
}
