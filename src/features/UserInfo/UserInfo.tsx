import React from "react";
import { userAge, userName, userSex } from "../../utils/config";
import userImage from "../../assets/images/user.png"; // Import the image
const styles = require("./UserInfo.scss"); // Import the styles

export default function UserInfo() {
  return (
    <div className={styles.contaner}>
      <div className={styles.wrapper}>
        <img src={userImage} className={styles.photo} alt="User avatar" />
        <div className={styles.userContainer}>
          <h1 className={styles.name}>{userName}</h1>
          <p className={styles.about}>
            {userAge} лет, {userSex}
          </p>
        </div>
      </div>
      <button className={styles.btn}>...</button>
    </div>
  );
}
