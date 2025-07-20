import rectangle22 from '../assets/Rectangle_22.jpg';
import rectangle221 from '../assets/Rectangle_221.png';
import rectangle222 from '../assets/Rectangle_222.png';
import rectangle223 from '../assets/Rectangle_223.png';
import rectangle224 from '../assets/Rectangle_224.png';

export type SkillData = {
  logo: string; 
  langs: string[];
  name: string;
  expl: string;
  live: string;
};

export const skills: SkillData[] = [
  {
    logo: rectangle22,
    langs: ["HTML", "CSS", "Python", "Flask"],
    name: "ChertNodes",
    expl: "Minecraft servers hosting",
    live: "https://www.google.lt"
  },
  {
    logo: rectangle221,
    langs: ["React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"],
    name: "ProtectX",
    expl: "Discord anti-crash bot",
    live: "https://www.google.lt"
  },
  {
    logo: rectangle222,
    langs: ["CSS", "Express", "Node.js"],
    name: "Kahoot Answers Viewer",
    expl: "Get answers to your kahoot quiz",
    live: "https://www.google.lt"
  },
  {
    logo: rectangle223,
    langs: ["HTML", "CSS", "JS"],
    name: "Kotik Bot",
    expl: "Multi-functional discord bot",
    live: "https://www.google.lt"
  },
  {
    logo: rectangle224,
    langs: ["Vue", "TS", "Less"],
    name: "Portfolio",
    expl: "You're using it right now",
    live: "https://www.google.lt"
  }
];
