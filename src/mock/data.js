import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Сайт грузоперевозок',
    info: 'Первый проект. С использованием HTML, CSS, JavaScript и PHP',
    info2: '',
    url: 'https://gruzoperevozki69.ru',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Проект 2',
    info: 'С использованием HTML, CSS и адаптивной верстки',
    info2: '',
    url: 'https://alstermeria.github.io/project1/',
    repo: 'https://github.com/Alstermeria/project1.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Проект 3',
    info: 'С использованием HTML, CSS и адаптивной верстки',
    info2: '',
    url: 'https://alstermeria.github.io/project2/',
    repo: 'https://github.com/Alstermeria/project2.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'send',
  email: 'atmalsty@gmail.ru',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/MilEnSeaL',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/alstermeria',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Alstermeria',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
