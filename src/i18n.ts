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
                    projects: "Projects",
                    ecommerce: "The project consists of developing a structure for an eCommerce using the technologies and knowledge learned during the internship.",
                    lecturizeit: "The Lecturize It platform, an innovative educational lecture center, is a project that aims to speed up access to academic content, simply and free of charge.",
                    artGallery: "Art Gallery is a django-based web application designed to provide a digital platform for artists to exhibit their creative work.",
                    portfolio: "My personal portfolio website.",
                }
            },
            br: {
                translation: {
                    headingSubtitle: "Desenvolvedor Web Full-Stack",
                    language: "Linguagem",
                    loading: "Carregando...",
                    knownTechnologies: "Tecnologias Conhecidas",
                    resume: "Curriculo",
                    projects: "Projetos",
                    ecommerce: "O projeto consiste no desenvolvimento de uma estrutura para um eCommerce, utilizando as tecnologias e conhecimentos aprendidos no estágio.",
                    lecturizeit: "A plataforma Lecturize It, uma central de palestras educacionais inovadora, é um projeto que visa agilizar o acesso a conteúdo acadêmico, de forma simples e gratuita.",
                    artGallery: "Art Gallery é uma aplicação web baseada em django concebida para fornecer uma plataforma digital para os artistas exporem o seu trabalho criativo.",
                    portfolio: "Meu website de portfólio pessoal.",
                }
            }
        }
    })