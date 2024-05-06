import kravc from "../assets/images/kravc.png";
import user from "../assets/images/user.png";
import dibrova from "../assets/images/dibrova.png";
import ivanov from "../assets/images/ivanov.png";
import nosikov from "../assets/images/nosikov.png";
import fors from "../assets/images/fors.png";
import ahmed from "../assets/images/ahmed.png";
import igor from "../assets/images/igor.png";
import ruf from "../assets/images/ruf.png";
import volosh from "../assets/images/volosh.png";

export interface INote {
  noteDate: string;
  text: string;
}

export interface IUser {
    name: string;
    isTg: boolean;
    isWarning: boolean;
    image: string;
    id?: number; 
}

export const userName = "Рожков Денис Петрович";
export const userAge = 30;
export const userSex = "муж";
export const notes: INote[] = [
  {
    noteDate: "20.12.2019",
    text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
  },
  {
    noteDate: "20.12.2019",
    text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
  },
];

export const users: IUser[] = [
  {
    name: "Кравцова Александра",
    isTg: true,
    isWarning: false,
    image: kravc,
    id: 1,
  },
  {
    name: "Рожков Денис",
    isTg: false,
    isWarning: false,
    image: user,
    id: 2,
  },
  {
    name: "Кравцова Александра",
    isTg: false,
    isWarning: true,
    image: kravc,
    id: 3,
  },
  {
    name: "Диброва Алевтина",
    isTg: false,
    isWarning: false,
    image: dibrova,
    id: 4,
  },
  {
    name: "Иванов Дмитрий",
    isTg: false,
    isWarning: false,
    image: ivanov,
    id: 5,
  },
  {
    name: "nosikov@list.ru",
    isTg: false,
    isWarning: false,
    image: nosikov,
    id: 6,
  },
  {
    name: "Форс Александр",
    isTg: false,
    isWarning: false,
    image: fors,
    id: 7,
  },
  {
    name: "Ахмедов Артур",
    isTg: false,
    isWarning: false,
    image: ahmed,
    id: 8,
  },
  {
    name: "Блажевич Игорь",
    isTg: false,
    isWarning: false,
    image: igor,
    id: 9,
  },
  {
    name: "Валиева Руфина",
    isTg: false,
    isWarning: false,
    image: ruf,
    id: 10,
  },
  {
    name: "Волошина Виктория",
    isTg: false,
    isWarning: false,
    image: volosh,
    id: 11,
  },
  {
    name: "Волошина Виктория",
    isTg: false,
    isWarning: false,
    image: volosh,
    id: 12,
  },
];
