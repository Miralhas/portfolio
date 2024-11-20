import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    headingSubtitle: "Full-Stack Web Developer",
                    language: "Language",
                    loading: "Loading...",
                    knownTechnologies: "Known Technologies",
                    resume: "Resume",
                    projects: "Projects"
                }
            },
            br: {
                translation: {
                    headingSubtitle: "Desenvolvedor Web Full-Stack",
                    language: "Linguagem",
                    loading: "Carregando...",
                    knownTechnologies: "Tecnologias Conhecidas",
                    resume: "Curriculo",
                    projects: "Projetos"
                }
            }
        }
    })