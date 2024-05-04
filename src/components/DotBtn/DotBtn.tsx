import React, { useState } from "react";
import dots from "../../assets/images/dots.svg";
import dotsHover from "../../assets/images/dotsWhite.svg";
const styles = require("./DotBtn.scss");

export default function DotBtn() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const hadleDropClick = () => {
    setIsClicked(false);
    setIsHovered(false);
  }

  return (
    <button
      className={isClicked ? styles.buttonActive : styles.button}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered || isClicked ? dotsHover : dots} alt={"Три точки"} />
      <div className={styles.drop}>
        {isClicked && (
          <>
            <div className={styles.dropItem} onClick={hadleDropClick}>Изменить</div>
            <div className={styles.dropItem} onClick={hadleDropClick}>Удалить</div>
          </>
        )}
      </div>
    </button>
  );
}
