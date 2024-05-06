import React from 'react';
import EventItem from '../../components/EventItem/EventItem';
import eventImg from '../../assets/images/event.png';
const styles = require('./Event.scss');

export default function Event() {
    return (
        <section className={styles.section}>
        <ul>
            <EventItem
            img={eventImg}
            title="Тяга резинки в шаге со сгибанием локтя под 90 градусов"
            type="Вебинар"
            date="9 марта 2021"
            time="17:00"
            />
            <EventItem
            img={eventImg}
            title="Тяга резинки в шаге со сгибанием локтя под 90 градусов"
            type="Вебинар"
            date="9 марта 2021"
            time="17:00"
            />
            <EventItem
            img={eventImg}
            title="Тяга резинки в шаге со сгибанием локтя под 90 градусов"
            type="Вебинар"
            date="9 марта 2021"
            time="17:00"
            />
        </ul>
        </section>
    );
}