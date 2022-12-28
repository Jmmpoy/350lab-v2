import filmo1 from "./public/assets/Projects/Filmo/filmo-1.png";
import filmo2 from "./public/assets/Projects/Filmo/filmo-2.png";
import canal1 from "./public/assets/Projects/myCanal/canal-1.png";
import canal2 from "./public/assets/Projects/myCanal/canal-2.png";

import elow1 from "./public/assets/Projects/Elow/elow-1.png";
import elow2 from "./public/assets/Projects/Elow/elow-2.png";
import soundcharts1 from "./public/assets/Projects/Soundcharts/soundcharts-1.png";
import soundcharts2 from "./public/assets/Projects/Soundcharts/soundcharts-2.png";

const data = [
  {
    id: 1,
    name: "MyCanal ",
    primaryImage: canal1,
    secondaryImage: canal2,
    description: [
      {
        id: 1,
        text: "Development of the myCanal application",
      },
      {
        id: 2,
        text: "on Windows and Xbox.",
      },
    ],
    role: "Front End Developement ",
    year: "2020 - Now",
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
        text: "Development of FilmoTv mobile application",
      },
      {
        id: 2,
        text: "on Android and IOS.",
      },
    ],
    role: "Front End Developer",
    year: "2020-Now",
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
        text: "Development of Soundcharts website and mobile application",
      },
      {
        id: 2,
        text: "on Ios and Android",
      },
    ],
    role: "Front End Developer",
    year: "2020-Now",
    link: "https://soundcharts.com/",
  },
  {
    id: 4,
    name: "Elow",
    primaryImage: elow1,
    secondaryImage: elow2,
    description: [
      {
        id: 1,
        text: "Development of an application to measure the",
      },
      {
        id: 2,
        text: "computers power consumptions",
      },
    ],
    role: "Front End Developer",
    year: "2020-Now",
    link: "https://elow.energy/fr/",
  },
];

export default data;
