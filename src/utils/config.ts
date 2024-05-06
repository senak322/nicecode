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
  },
  {
    name: "Рожков Денис",
    isTg: false,
    isWarning: false,
    image: user,
  },
  {
    name: "Кравцова Александра",
    isTg: false,
    isWarning: true,
    image: kravc,
  },
  {
    name: "Диброва Алевтина",
    isTg: false,
    isWarning: false,
    image: dibrova,
  },
  {
    name: "Иванов Дмитрий",
    isTg: false,
    isWarning: false,
    image: ivanov,
  },
  {
    name: "nosikov@list.ru",
    isTg: false,
    isWarning: false,
    image: nosikov,
  },
  {
    name: "Форс Александр",
    isTg: false,
    isWarning: false,
    image: fors,
  },
  {
    name: "Ахмедов Артур",
    isTg: false,
    isWarning: false,
    image: ahmed,
  },
  {
    name: "Блажевич Игорь",
    isTg: false,
    isWarning: false,
    image: igor,
  },
  {
    name: "Валиева Руфина",
    isTg: false,
    isWarning: false,
    image: ruf,
  },
  {
    name: "Волошина Виктория",
    isTg: false,
    isWarning: false,
    image: volosh,
  },
  {
    name: "Волошина Виктория",
    isTg: false,
    isWarning: false,
    image: volosh,
  },
];
