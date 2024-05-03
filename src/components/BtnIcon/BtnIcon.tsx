import React, { useState } from "react";
const styles = require("./BtnIcon.scss");

interface ISearchIcon {
  imgMain: string;
  imgHover: string;
  alt: string;
  handleClick: () => void;
  isSearch?: boolean;
}

function BtnIcon({
  imgMain,
  imgHover,
  alt,
  handleClick,
  isSearch,
}: ISearchIcon) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={isSearch && alt === "Лупа" ? styles.lupe : styles.button}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        isSearch && alt === "Закрыть поиск"
          ? { transform: "rotate(45deg)" }
          : {}
      }
    >
      <img src={isHovered ? imgHover : imgMain} alt={alt} />
    </button>
  );
}

export default BtnIcon;
