import React from "react";
import VideoItem from "../../components/VideoItem/VideoItem";
import vid1 from "../../assets/images/vid1.png";
import vid2 from "../../assets/images/vid2.png";
import vid3 from "../../assets/images/vid3.png";
const styles = require("./Video.scss");

export default function Video() {
  return (
    <section className={styles.section}>
      <ul>
        <VideoItem
          title="Крабик, ходьба в бок в приседе с двумя резинками Кра…"
          image={vid1}
          videoDate=""
          autor="Астахова Е.В."
        />
        <VideoItem
          title="Разминка для локтевого сустава"
          image={vid2}
          videoDate="15.01.2019 - 22.01.2019"
          autor="Астахова Е.В."
        />
        <VideoItem
          title="Разминка для локтевого суставаРазминка для локтевого.."
          image={vid3}
          videoDate="15.01.2019 - 22.01.2019"
          autor="Астахова Е.В."
        />
      </ul>
    </section>
  );
}
