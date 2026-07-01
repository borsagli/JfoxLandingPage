const translations = {
  pt: {
    //navbar tradução port
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.industries": "Indústrias",
    "nav.industries1": "Indústria 1", //industrias do dropdown
    "nav.industries2": "Indústria 2",
    "nav.industries3": "Indústria 3",
    "nav.cases": "Cases",
    "nav.about": "Quem somos",
    "nav.careers": "Carreiras",
    "nav.blog": "Blog",
    "nav.contact": "Contatos",
    "nav.schedulebutton": "Agendar Diagnóstico",
    //hero tradução
    "hero.p": "Salesforce + AI Agents. A nova geração do CRM já começou.",
    "hero.title": "Seus agentes de IA já estão trabalhando. A pergunta é: para quem?",
    "hero.text": "A JFox é a consultoria Salesforce especializada em Agentforce — a plataforma de agentes autônomos de IA que transforma como sua empresa vende, atende e cresce. Do diagnóstico à ativação, estamos com você em cada etapa.",
    "stats.projects": "Projetos Salesforce entregues.",
    "stats.certifications": "Certificações.",
    "stats.years": "Anos no ecossistema.",
    "hero.diagnosis-btn": "Agendar Diagnóstico Salesforce + IA",
  },
  en: {
    //navbar tradução ingles
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.industries": "Industries",
    "nav.industries1": "Industry 1", //industrias do dropdown
    "nav.industries2": "Industry 2",
    "nav.industries3": "Industry 3",
    "nav.cases": "Cases",
    "nav.about": "About Us",
    "nav.careers": "Careers",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.schedulebutton": "Schedule Diagnosis",
    //hero tradução
    "hero.p": "Salesforce + AI Agents. The new generation of CRM has already begun.",
    "hero.title": "Your AI agents are already at work. The question is: for whom?",
    "hero.text": "JFox is the Salesforce consultancy specializing in Agentforce — the autonomous AI agent platform that transforms how your company sells, serves, and grows. From diagnosis to activation, we are with you every step of the way.",
    "stats.projects": "Salesforce projects delivered.",
    "stats.certifications": "Certifications.",
    "stats.years": "Years in the ecosystem.",
    "hero.diagnosis-btn": "Schedule Salesforce + AI Diagnosis",

  },
  es: {
    //navbar tradução espanhol
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.industries": "Industrias",
    "nav.industries1": "Industria 1", //industrias do dropdown
    "nav.industries2": "Industria 2",
    "nav.industries3": "Industria 3",
    "nav.cases": "Casos",
    "nav.about": "Quiénes somos",
    "nav.careers": "Carreras",
    "nav.blog": "Blog",
    "nav.contact": "Contactos",
    "nav.schedulebutton": "Agendar Diagnóstico",
    // hero traducao 
    "hero.p": "Salesforce + AI Agents. La nueva generación de CRM ya ha comenzado.",
    "hero.title": "Tus agentes de IA ya están trabajando. La pregunta es: ¿para quién?",
    "hero.text": "JFox es la consultoría de Salesforce especializada en Agentforce — la plataforma de agentes autónomos de IA que transforma cómo tu empresa vende, atiende y crece. Desde el diagnóstico hasta la activación, estamos contigo en cada etapa.",
    "stats.projects": "Proyectos Salesforce entregados.",
    "stats.certifications": "Certificaciones.",
    "stats.years": "Años en el ecosistema.",
    "hero.diagnosis-btn": "Agendar Diagnóstico Salesforce + IA",
  },
};

const langLabels = {
  pt: "PT-BR",
  en: "ENG",
  es: "ES",
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;

  const current = document.querySelector(".current-lang");
  if (current) current.textContent = langLabels[lang];

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang");
  const browser = navigator.language.slice(0, 2);
  const initial = saved || (translations[browser] ? browser : "pt");
  setLanguage(initial);

  document.querySelectorAll(".dropdown .content a[data-lang]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setLanguage(link.getAttribute("data-lang"));
    });
  });
});