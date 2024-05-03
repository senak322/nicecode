import React, { useState } from "react";
const styles = require("./BtnIcon.scss");

interface ISearchIcon {
  imgMain: string;
  imgHover: string;
  alt: string;
  handleClick: () => void;
}

function BtnIcon({ imgMain, imgHover, alt, handleClick }: ISearchIcon) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={styles.button}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? imgHover : imgMain} alt={alt} />
    </button>
  );
}

export default BtnIcon;
