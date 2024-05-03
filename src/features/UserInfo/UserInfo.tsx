import React, { useCallback } from "react";
import { userAge, userName, userSex } from "../../utils/config";
import userImage from "../../assets/images/user.png"; // Import the image
import dots from "../../assets/images/dots.svg";
import dotsHover from "../../assets/images/dotsWhite.svg";
import BtnIcon from "../../components/BtnIcon/BtnIcon";
const styles = require("./UserInfo.scss"); // Import the styles

export default function UserInfo() {
    const handleDots = useCallback(() => {
        
    }, []);
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
      <BtnIcon  imgMain={dots} imgHover={dotsHover} alt="Три точки" handleClick={handleDots}/>
    </div>
  );
}
