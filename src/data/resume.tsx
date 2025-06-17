import { Icons } from "@/components/icons";
import { HomeIcon, icons, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bachtiar Dwi Pramudi",
  initials: "BDP",
  url: "https://superti4r.xyz",
  location: "Banyuwangi, Indonesia",
  locationLink: "https://www.google.com/maps/place/banyuwangi",
  description:
    "Software Engineer, Web Developer, UI/UX Designer",
  summary:
    "As a Software Engineer with expertise in web and mobile development, I am creating innovative and user-friendly solutions that solve real-world problems. I am currently pursuing my S.Tr.Kom degree in Informatics Engineering at the Jember State Polytechnic, where I have honed my skills in Web Development, Mobile Development, and UI/UX design.",
  avatarUrl: "/profile/me.png",
  skills: [
    "PHP",
    "Laravel",
    "Bootstrap",
    "TailwindCSS",
    "ReactJS",
    "MySQL",
    "Java",
    "Flutter",
    "Figma",
    "Adobe Premiere",
    "Adobe Photoshop",
    "Adobe After Effect",
    "Adobe Illustrator",
    "MikroTik",
    "anything about tech.."
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bchtrrprmd@gmail.com",
    tel: "+6285175315009",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/superti4r",
        icon: Icons.github,

        navbar: true,
      },
      Linkedin: {
        name: "Linkedin",
        url: "https://linkedin.com/in/supertiar",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/superti4r",
        icon: icons.Instagram,

        navbar:true,
      },
      Mail: {
        name: "Send Email",
        url: "mailto:bchtrrprmd@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
      {
      company: "MelodAI",
      href: "https://melodai.pro",
      badges: [],
      location: "Remote",
      title: "Community Moderator",
      logoUrl: "/work/melodai.png",
      start: "Jan 2025",
      end: "March 2025",
      description:
      "Multi-modal AI Agent Platform Experience the joy of instant creativity by simply entering a Prompt and earn token rewards as you explore your artistic potential.",
    },

    {
      company: "Art Of Manunggalan 10.0",
      href: "https://instagram.com/aom.jti",
      badges: [],
      location: "Jember",
      title: "Publishing & Documentation Division",
      logoUrl: "/work/aom.png",
      start: "Jun 2024",
      end: "Nov 2024",
      description:
        "Art Of Manunggalan (AOM) is an annual event from HMJ IT which is the culmination of a series of departmental ospek. In addition to introducing new students to the Information Technology Department, AOM is also a moment of togetherness for all students and as a warm welcome for new students who join the Information Technology Department of Jember State Polytechnic.",
    },

    {
      company: "IE23",
      href: "https://instagram.com/tifpolije23",
      badges: [],
      location: "Jember",
      title: "Chief",
      logoUrl: "/work/ie23.png",
      start: "Agt 2023",
      end: "Now",
      description:
      "A class from the Informatics Engineering study program that was born in August 2023 at Jember State Polytechnic",
    },
  ],
  education: [
    {
      school: "Politeknik Negeri Jember",
      href: "https://polije.ac.id",
      degree: "A 4-Year Diploma | Informatic Engineering",
      logoUrl: "/edu/polije.png",
      start: "2023",
      end: "Now",
    },
  ],
  projects: [
    {
      title: "E-Saturasi",
      href: "https://github.com/superti4r/esaturasi",
      dates: "Feb 2025 - Jun 2025",
      active: true,
      description:
        "E-Learning System of SMKN 1 Sumberasih using Laravel 12, Filament, TailwindCSS 4.",
      technologies: [
        "PHP",
        "Laravel",
        "Filament",
        "TailwindCSS",
        "MySQL",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/superti4r/esaturasi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project/esaturasi.png",
      video: "",
    },

    {
      title: "SpyCrypt",
      href: "https://github.com/superti4r/spycrypt",
      dates: "Jun 2025 - Now",
      active: true,
      description:
        "Cryptocurrency price monitor. Available prices: BTC, ETH, SOL, USDT. This repo uses Github Actions or Github Account to update data",
      technologies: [
        "Javascript",
        "Github Workflows",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/superti4r/spycrypt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project/spycrypt.png",
      video: "",
    },
  ],
} as const;
