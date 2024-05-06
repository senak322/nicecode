import React from "react";
import ConsultItem from "../../components/ConsultItem/ConsultItem";
const styles = require("./Consult.scss");

export default function Consult() {
  return (
    <section className={styles.section}>
      <ul>
        <ConsultItem
          isOnline={true}
          consultDate="15.01.2019"
          consultTime="12:30-13:00"
          isApproved={true}
        />
        <ConsultItem
          isOnline={true}
          consultDate="15.01.2019"
          consultTime="12:30-13:00"
          isApproved={true}
        />
        <ConsultItem
          isOnline={false}
          consultDate="15.01.2019"
          consultTime="12:30-13:00"
          isApproved={false}
        />
      </ul>
    </section>
  );
}
