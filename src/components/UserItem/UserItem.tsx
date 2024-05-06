import React from "react";
import { IUser } from "../../utils/config";
import tg from "../../assets/images/tg.svg";
import warning from "../../assets/images/warning.svg";
const styles = require("./UserItem.scss");

export default function UserItem({ name, isTg, isWarning, image }: IUser) {
  return (
    <li className={`${styles.item} ${isTg ? styles.itemTg : ""} ${name === "Рожков Денис" ? styles.aciveUser : ""}`}>
      <div className={styles.container}>
        <img src={image} alt="user image" className={styles.image} />
        <p className={styles.name}>{name}</p>
      </div>
      {isTg ? (
        <img src={tg} alt="tg" className={styles.icon} />
      ) : isWarning ? (
        <img src={warning} alt="warning" className={styles.icon} />
      ) : null}
    </li>
  );
}
