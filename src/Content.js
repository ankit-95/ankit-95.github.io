// import images
import Hero_person from "./assets/images/Hero/person.png";

import java from "./assets/images/Skills/java.png";
import docker from "./assets/images/Skills/docker.png";
import gitlab from "./assets/images/Skills/gitlab.png";
import reactjs from "./assets/images/Skills/react.png";
import hibernate from "./assets/images/Skills/hibernate.png";
import springboot from "./assets/images/Skills/springboot.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
//import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  navbar: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "ANKIT",
    LastName: "GUPTA",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Backend development",
      },
      {
        count: "6+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Java",
        para: "Worked on Java 8.",
        logo: java,
        values:
          "I am having more than 1.5 years of experience in Java 8.I was very much fascinated by Java in my College life due to this I completed by advanced Java Certification from NIIT CP in 2nd year of my college.",
      },
      {
        name: "Hibernate",
        para: "Worked on Hibernate for DB Integration.",
        logo: hibernate,
        values:
          "I am having a Hibernate experience of more than 1.5 years as I am extensively involved in the development of a Major Transaction Management Module that is been developed as a spring boot mirco-service.",
      },
      {
        name: "Spring Boot",
        para: "Worked on Spring Boot 5.",
        logo: springboot,
        values:
          "I am having a Spring boot experience of more than 1.5 years as I am extensively involved in the development of a Major Transaction Management Module that is been developed as a spring boot mirco-service.",
      },
      {
        name: "React js",
        para: "Worked on ReactJs to develop interative pages.",
        logo: reactjs,
        values:
          "I am having a ReactJs experience of more than 1.5 years as I am extensively involved in the development of a Major Transaction Management Module that is been developed as a spring boot mirco-service.",
      },
      {
        name: "GitLab",
        para: "For Version Control Management.",
        logo: gitlab,
        values:
          "As a software developer it is mandatory to understand how builds are going to be released as the sprint releases and it is basically achieved with the help of a version controlled tool like github.So I do have hands on experience in GITHUB and GITLAB.",
      },
      {
        name: "Docker",
        para: "Worked on Docker and Kubernetes.",
        logo: docker,
        values:
          "I am having a good knowledge of Docker and Containerization as I have been actively deploying many of the Spring boot apps on IBM Cloud in my day to-day life.Due to this I am familiar with Scalability and Monitoring of Web-apps as well.",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "BackEnd Development",
        para: "I am a computer science engineer, I am a passionate and dedicated person with a competitive nature. My technical background involves programming software backend in Java. Successfully implemented back-end programming language like Java by utilizing Spring Boot framework.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "I have an experience of working with Figma to built efficient Website interfaces. I have also built website layout of my college website.",
        logo: services_logo2,
      },
      {
        title: "Full Stack Development",
        para: "Provided leadership on one of the microservices on hosting issues, Detect to Correct module of ITIL, and general upgrades/maintenance of servers. I have knowledge of complete end-to-end to agile model of software delivery lifecylce",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "NSIT Revamp - Website",
        subTitle:
          "Made on Figma to revamp my College (NSIT) Website as a Curriculum Activity of my M.Tech in CSE.",
        image: project1,
        url: "https://www.figma.com/proto/eUMY8Ml1I2yfWSc2IFsWez/NSUT-East-Campus-Figma-Project?type=design&node-id=2-3&scaling=min-zoom&page-id=0%3A1",
      },
      {
        title: "TechnoPool",
        subTitle:
          '"TechnoPool" is a Tool that makes life easy by automatically pumping all Tech Jobs in one place.',
        image: project2,
        url: "https://techno-pool.vercel.app/",
      },
      {
        title: "Customer Tracker App",
        subTitle:
          "Worked as a team of 3 to build a complete tool composed of Administrator, Banking officer and Customers portal using – Spring Framework , HTML, CSS , JavaScript & Hibernate.",
        image: project3,
        url: "",
      },
      {
        title: "My Portfolio Website - ver 1.0",
        subTitle:
          "A portfolio web-site (Made with ❤️) | Four sections - Namely Home, Portfolio, Work and Contact | Technologies Used - ReactJs, SCSS and SASS",
        image: project4,
        url: "",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person,
    para: "I am a computer science engineer, I am a passionate and dedicated person with a competitive nature. My technical background involves programming software backend in Java. My biggest asset is my self motivating nature and will to still keep improving and chasing to be even better at the skills I possess, no matter how strong command I hold on them. There's always something new to learn.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ankitgv.kvtagore@gmail.com",
        icon: GrMail,
        link: "mailto:ankitgv.kvtagore@gmail.com",
      },
      {
        text: "+91 8860 252669",
        icon: MdCall,
        link: "https://wa.me/8860252669",
      },
      {
        text: "Ankit Gupta",
        icon: BsInstagram,
        link: "https://www.instagram.com/95ankit_gupta/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
