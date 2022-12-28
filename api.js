import filmo1 from "./public/assets/Projects/Filmo/filmo-1.png";
import filmo2 from "./public/assets/Projects/Filmo/filmo-2.png";
import canal1 from "./public/assets/Projects/myCanal/canal-1.png";
import canal2 from "./public/assets/Projects/myCanal/canal-2.png";

//import elow1 from "./public/assets/Projects/Elow/elow-1.PNG";
import elow from "./public/assets/Projects/Elow/elow.png";
import elow2 from "./public/assets/Projects/Elow/elow-2.png";
import soundcharts1 from "./public/assets/Projects/Soundcharts/soundcharts-1.png";
import soundcharts2 from "./public/assets/Projects/Soundcharts/soundcharts-2.png";

export const data = [
  {
    id: 1,
    name: "MyCanal ",
    primaryImage: canal1,
    secondaryImage: canal2,
    description: [
      {
        id: 1,
        text: "Développment de l'application myCanal",
      },
      {
        id: 2,
        text: "sur Windows et Xbox.",
      },
    ],
    role: "Développeur Front-End",
    year: "2020 - Aujourd'hui",
    link: "https://www.canalplus.com/",
  },
  {
    id: 2,
    name: "FilmoTv",
    primaryImage: filmo1,
    secondaryImage: filmo2,
    description: [
      {
        id: 1,
        text: "Développment de l'application mobile FilmoTV",
      },
      {
        id: 2,
        text: "sur Android et IOS.",
      },
    ],
    role: "Développeur Front-End",
    year: "2020 - Aujourd'hui",
    link: "https://www.filmotv.fr/",
  },
  {
    id: 3,
    name: "Soundcharts",
    primaryImage: soundcharts1,
    secondaryImage: soundcharts2,
    description: [
      {
        id: 1,
        text: "Développment du site web et de l'application",
      },
      {
        id: 2,
        text: "Soundcharts sur Ios et Android",
      },
    ],
    role: "Développeur Front-End",
    year: "2020 - Aujourd'hui",
    link: "https://soundcharts.com/",
  },
  {
    id: 4,
    name: "Elow",
    primaryImage: elow,
    secondaryImage: elow2,
    description: [
      {
        id: 1,
        text: "Application permettant de mesurer la",
      },
      {
        id: 2,
        text: "consommation énergétique de son PC",
      },
    ],
    role: "Développeur Front-End",
    year: "2020 - Aujourd'hui",
    link: "https://elow.energy/fr/",
  },
];
