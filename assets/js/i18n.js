const translations = {
  pt: {
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
    "nav.contact": "Contatos"
  },
  en: {
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
    "nav.contact": "Contact"

  },
  es: {
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
    "nav.contact": "Contactos"
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