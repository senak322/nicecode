import React from "react";
const styles = require("./VideoItem.scss");

interface IVideoItem {
  title: string;
  image: string;
  videoDate: string;
  autor: string;
}

export default function VideoItem({
  title,
  image,
  videoDate,
  autor,
}: IVideoItem) {
  return (
    <li className={styles.item}>
      <img src={image} alt="video image" className={styles.image} />
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <div className={styles.statusContainer}>
          <p className={styles.autor}>{autor}</p>
          {videoDate && <p className={styles.autor}>{videoDate}</p>}
        </div>
      </div>
    </li>
  );
}
