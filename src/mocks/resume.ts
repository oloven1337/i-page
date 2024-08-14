import { PlaseOfWork } from "../models/plase-of-work";

export const resumeData: PlaseOfWork[] = [
  {
    dateTitle: "Март 2023 — по настоящее время",
    companyName: "TimelySoft",
    post: "Frontend developer",
    projects: [
      {
        name: "GoChip",
        description:
          "Разработка функционала для приложения по отслеживанию животных по GPS",
        technologies: ["React", "typescript", "redux", "graphql", "webpack"],
      },
      {
        name: "Erda Alpha Consulting",
        description:
          "Разработка большого проекта для немецкой консалтинговой Erda Alpha Consulting",
        technologies: [
          "React",
          "typescript",
          "next js",
          "mobx",
          "API ChatGPT",
          "TailwindCSS",
        ],
      },
      {
        name: "Booblik",
        description: "Разработка большой CRM платформы для кофейни Booblik",
        technologies: ["Angular", "typescript", "rxjs"],
      },
      {
        name: "Impulse HR Platform",
        description:
          "Цифровые сервисы с полной автоматизацией HR и финансовых процессов при работе с внештатными исполнителями",
        technologies: ["React", "typescript", "redux", "mui"],
      },
    ],
  },
  {
    dateTitle: "Апрель 2024 — Июнь 2024",
    companyName: "Telegram mini app | Проектная работа",
    post: "Frontend developer",
    description:
      "Проект ime farming (наподобие notcoin). Разработал Web3-проект запущенный внутри экосистемы TON",
    technologies: ["React", "typescript", "mobx", "TailwindCSS"],
  },
  {
    dateTitle: "Июнь 2021 — март 2023",
    companyName: "Сбер",
    post: "Ведущий инженер по разработке",
    description:
      'Разработка функционала HR платформы по управлению персоналом "HR Pulse"',
    responsibilities: [
      "Разработка аналитических виджетов",
      "Разработка библиотеки для общего использования",
      "Оптимизация проектов",
      "Покрытие unit тестами",
      "Разработка приложений под канвас для виртуального ассистента СБЕРа",
      "Поддержка существующих проектов",
      "Код ревью",
    ],
  },
  {
    dateTitle: "Август 2020 — Июнь 2021",
    companyName: "SKIPP.PRO",
    post: "Frontend developer",
    description: `В основном участвовал в разработке различных интернет-магазинов,
    админок, разрабатывал сайты полностью с нуля или добавлял новые фитчи в уже
    существующие приложение, в основном используя библиотеку React.`,
  },
];
