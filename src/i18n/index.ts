import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      available: "Disponible para trabajar",
      contact: "Contáctame",
      aboutMe: "Desarrollador Full Stack con experiencia comprobada en el desarrollo de aplicaciones web y móviles modernas. Especializado en la optimización de sistemas, diseño de arquitecturas escalables e integración eficiente de APIs. Comprometido con la escritura de código limpio, la colaboración en equipos ágiles y la entrega de soluciones confiables.",
    }
  },
  en: {
    translation: {
      available: "Available for work",
      contact: "Contact Me",
      aboutMe: "Full Stack Developer with proven experience in developing modern web and mobile applications. Specialized in system optimization, scalable architecture design, and efficient API integration. Committed to writing clean code, collaborating within agile teams, and delivering reliable solutions.",
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    interpolation: { escapeValue: false }
  })

export default i18n
