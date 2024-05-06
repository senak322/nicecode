import React from "react";
import camera from "../../assets/images/video-camera.svg";
import calendar from "../../assets/images/calendar.svg";
import clock from "../../assets/images/clock.svg";  
const styles = require("./EventItem.scss");

interface IEventItem {
  img: string;
  title: string;
  type: string;
  date: string;
  time: string;
}

export default function EventItem({
  img,
  title,
  type,
  date,
  time,
}: IEventItem) {
  return (
    <li className={styles.item}>
      <img src={img} alt="event image" className={styles.image} />
      <div>
        <p className={styles.title}>{title}</p>
        <div className={styles.statusContainer}>
          <p className={styles.paragraph}><img src={camera} alt="video-camera" className={styles.icon}/>{type}</p>
          <p className={styles.paragraph}><img src={calendar} alt="calendar" className={styles.icon}/>{date}</p>
          <p className={styles.paragraph}><img src={clock} alt="clock" className={styles.icon}/>{time}</p>
        </div>
      </div>
    </li>
  );
}
