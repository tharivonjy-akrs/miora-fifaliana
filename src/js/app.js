// Sections

let sectionLoad = document.getElementById("sectionLoad");
let sectionMenu = document.getElementById("sectionMenu");
let intro = document.getElementById("in");
let skills = document.getElementById("sk");
let service = document.getElementById("sv");
let about = document.getElementById("ab");
let contact = document.getElementById("ct");

// Options menu

let btnIntro = document.getElementById("btnIntro");
let btnSkills = document.getElementById("btnSkills");
let btnServices = document.getElementById("btnServices");
let btnAbout = document.getElementById("btnAbout");
let btnContact = document.getElementById("btnContact");

// Bouttons retour

let btnR0 = document.getElementById("btn-retour0");
let btnR1 = document.getElementById("btn-retour1");
let btnR2 = document.getElementById("btn-retour2");
let btnR3 = document.getElementById("btn-retour3");
let btnR4 = document.getElementById("btn-retour4");

// Btn Menu competences

let menuAll = document.getElementById("menu-all");
let menuWeb = document.getElementById("menu-web");
let menuMobile = document.getElementById("menu-mobile");
let menuCms = document.getElementById("menu-cms");
let menuDesign = document.getElementById("menu-design");
let menuOther = document.getElementById("menu-other");

// Section competences

let skillsAll = document.getElementById("skills-all");
let skillsWeb = document.getElementById("skills-web");
let skillsMobile = document.getElementById("skills-mobile");
let skillsCms = document.getElementById("skills-cms");
let skillsDesign = document.getElementById("skills-design");
let skillsOther = document.getElementById("skills-other");

// Btn dans intro

let btnDecouvrirSkills = document.getElementById("decouvrirSkills");
let btnContactMoi = document.getElementById("contactMoi");

// Vider formulaire

const form = document.getElementById("contactForm");

form.addEventListener("submit", function () {
  setTimeout(() => {
    form.reset();
  }, 50);
});

// Action competence selection

menuAll.addEventListener("click", () => {
  menuAll.style.background = "#006dbb70";
  menuAll.style.color = "#0396ff";
  menuAll.style.border = "1px solid #006dbb";

  menuWeb.style.background = "none";
  menuWeb.style.color = "#aaa";
  menuWeb.style.border = "1px solid #dddddd1e";

  menuCms.style.background = "none";
  menuCms.style.color = "#aaa";
  menuCms.style.border = "1px solid #dddddd1e";

  menuDesign.style.background = "none";
  menuDesign.style.color = "#aaa";
  menuDesign.style.border = "1px solid #dddddd1e";

  menuOther.style.background = "none";
  menuOther.style.color = "#aaa";
  menuOther.style.border = "1px solid #dddddd1e";

  skillsWeb.style.opacity = "0";
  skillsCms.style.opacity = "0";
  skillsDesign.style.opacity = "0";
  skillsOther.style.opacity = "0";
  setTimeout(() => {
    skillsWeb.style.display = "none";
    skillsCms.style.display = "none";
    skillsDesign.style.display = "none";
    skillsOther.style.display = "none";
    skillsAll.style.display = "flex";
  }, 300);

  setTimeout(() => {
    skillsAll.style.opacity = "1";
  }, 500);
});

menuWeb.addEventListener("click", () => {
  menuWeb.style.background = "#006dbb70";
  menuWeb.style.color = "#0396ff";
  menuWeb.style.border = "1px solid #006dbb";

  menuAll.style.background = "none";
  menuAll.style.color = "#aaa";
  menuAll.style.border = "1px solid #dddddd1e";

  menuCms.style.background = "none";
  menuCms.style.color = "#aaa";
  menuCms.style.border = "1px solid #dddddd1e";

  menuDesign.style.background = "none";
  menuDesign.style.color = "#aaa";
  menuDesign.style.border = "1px solid #dddddd1e";

  menuOther.style.background = "none";
  menuOther.style.color = "#aaa";
  menuOther.style.border = "1px solid #dddddd1e";

  skillsAll.style.opacity = "0";
  skillsCms.style.opacity = "0";
  skillsDesign.style.opacity = "0";
  skillsOther.style.opacity = "0";
  setTimeout(() => {
    skillsAll.style.display = "none";
    skillsCms.style.display = "none";
    skillsDesign.style.display = "none";
    skillsOther.style.display = "none";
    skillsWeb.style.display = "flex";
  }, 300);

  setTimeout(() => {
    skillsWeb.style.opacity = "1";
  }, 500);
});

menuCms.addEventListener("click", () => {
  menuCms.style.background = "#006dbb70";
  menuCms.style.color = "#0396ff";
  menuCms.style.border = "1px solid #006dbb";

  menuWeb.style.background = "none";
  menuWeb.style.color = "#aaa";
  menuWeb.style.border = "1px solid #dddddd1e";

  menuAll.style.background = "none";
  menuAll.style.color = "#aaa";
  menuAll.style.border = "1px solid #dddddd1e";

  menuDesign.style.background = "none";
  menuDesign.style.color = "#aaa";
  menuDesign.style.border = "1px solid #dddddd1e";

  menuOther.style.background = "none";
  menuOther.style.color = "#aaa";
  menuOther.style.border = "1px solid #dddddd1e";

  skillsAll.style.opacity = "0";
  skillsWeb.style.opacity = "0";
  skillsDesign.style.opacity = "0";
  skillsOther.style.opacity = "0";
  setTimeout(() => {
    skillsAll.style.display = "none";
    skillsWeb.style.display = "none";
    skillsDesign.style.display = "none";
    skillsOther.style.display = "none";
    skillsCms.style.display = "flex";
  }, 300);

  setTimeout(() => {
    skillsCms.style.opacity = "1";
  }, 500);
});

menuDesign.addEventListener("click", () => {
  menuDesign.style.background = "#006dbb70";
  menuDesign.style.color = "#0396ff";
  menuDesign.style.border = "1px solid #006dbb";

  menuWeb.style.background = "none";
  menuWeb.style.color = "#aaa";
  menuWeb.style.border = "1px solid #dddddd1e";

  menuCms.style.background = "none";
  menuCms.style.color = "#aaa";
  menuCms.style.border = "1px solid #dddddd1e";

  menuAll.style.background = "none";
  menuAll.style.color = "#aaa";
  menuAll.style.border = "1px solid #dddddd1e";

  menuOther.style.background = "none";
  menuOther.style.color = "#aaa";
  menuOther.style.border = "1px solid #dddddd1e";

  skillsAll.style.opacity = "0";
  skillsCms.style.opacity = "0";
  skillsWeb.style.opacity = "0";
  skillsOther.style.opacity = "0";
  setTimeout(() => {
    skillsAll.style.display = "none";
    skillsCms.style.display = "none";
    skillsWeb.style.display = "none";
    skillsOther.style.display = "none";
    skillsDesign.style.display = "flex";
  }, 300);

  setTimeout(() => {
    skillsDesign.style.opacity = "1";
  }, 500);
});

menuOther.addEventListener("click", () => {
  menuOther.style.background = "#006dbb70";
  menuOther.style.color = "#0396ff";
  menuOther.style.border = "1px solid #006dbb";

  menuWeb.style.background = "none";
  menuWeb.style.color = "#aaa";
  menuWeb.style.border = "1px solid #dddddd1e";

  menuCms.style.background = "none";
  menuCms.style.color = "#aaa";
  menuCms.style.border = "1px solid #dddddd1e";

  menuDesign.style.background = "none";
  menuDesign.style.color = "#aaa";
  menuDesign.style.border = "1px solid #dddddd1e";

  menuAll.style.background = "none";
  menuAll.style.color = "#aaa";
  menuAll.style.border = "1px solid #dddddd1e";

  skillsAll.style.opacity = "0";
  skillsCms.style.opacity = "0";
  skillsDesign.style.opacity = "0";
  skillsWeb.style.opacity = "0";
  setTimeout(() => {
    skillsAll.style.display = "none";
    skillsCms.style.display = "none";
    skillsDesign.style.display = "none";
    skillsWeb.style.display = "none";
    skillsOther.style.display = "flex";
  }, 300);

  setTimeout(() => {
    skillsOther.style.opacity = "1";
  }, 500);
});

// Actions retour

btnR0.addEventListener("click", () => {
  intro.style.transform = "translateY(100%)";
  intro.style.opacity = "0";

  setTimeout(() => {
    sectionMenu.style.display = "block";
    intro.style.display = "none";
  }, 500);

  setTimeout(() => {
    sectionMenu.style.opacity = "1";
    sectionMenu.style.transform = "translateY(0)";
  }, 550);
});

btnR1.addEventListener("click", () => {
  skills.style.transform = "translateY(100%)";
  skills.style.opacity = "0";

  setTimeout(() => {
    sectionMenu.style.display = "block";
    skills.style.display = "none";
  }, 500);

  setTimeout(() => {
    sectionMenu.style.opacity = "1";
    sectionMenu.style.transform = "translateY(0)";
  }, 550);
});

btnR2.addEventListener("click", () => {
  service.style.transform = "translateY(100%)";
  service.style.opacity = "0";

  setTimeout(() => {
    sectionMenu.style.display = "block";
    service.style.display = "none";
  }, 500);

  setTimeout(() => {
    sectionMenu.style.opacity = "1";
    sectionMenu.style.transform = "translateY(0)";
  }, 550);
});

btnR3.addEventListener("click", () => {
  about.style.transform = "translateY(100%)";
  about.style.opacity = "0";

  setTimeout(() => {
    sectionMenu.style.display = "block";
    about.style.display = "none";
  }, 500);

  setTimeout(() => {
    sectionMenu.style.opacity = "1";
    sectionMenu.style.transform = "translateY(0)";
  }, 550);
});

btnR4.addEventListener("click", () => {
  contact.style.transform = "translateY(100%)";
  contact.style.opacity = "0";

  setTimeout(() => {
    sectionMenu.style.display = "block";
    contact.style.display = "none";
  }, 500);

  setTimeout(() => {
    sectionMenu.style.opacity = "1";
    sectionMenu.style.transform = "translateY(0)";
  }, 550);
});

// Selection menu

btnIntro.addEventListener("click", () => {
  sectionMenu.style.transform = "translateY(100%)";
  sectionMenu.style.opacity = "0";
  intro.style.display = "flex";
  setTimeout(() => {
    intro.style.transform = "translateY(0)";
    intro.style.opacity = "1";
    sectionMenu.style.display = "none";
  }, 500);
});

btnSkills.addEventListener("click", () => {
  sectionMenu.style.transform = "translateY(100%)";
  sectionMenu.style.opacity = "0";
  skills.style.display = "flex";
  setTimeout(() => {
    skills.style.transform = "translateY(0)";
    skills.style.opacity = "1";
    sectionMenu.style.display = "none";
  }, 500);
});

btnServices.addEventListener("click", () => {
  sectionMenu.style.transform = "translateY(100%)";
  sectionMenu.style.opacity = "0";
  service.style.display = "flex";
  setTimeout(() => {
    service.style.transform = "translateY(0)";
    service.style.opacity = "1";
    sectionMenu.style.display = "none";
  }, 500);
});

btnAbout.addEventListener("click", () => {
  sectionMenu.style.transform = "translateY(100%)";
  sectionMenu.style.opacity = "0";
  about.style.display = "flex";
  setTimeout(() => {
    about.style.transform = "translateY(0)";
    about.style.opacity = "1";
    sectionMenu.style.display = "none";
  }, 500);
});

btnContact.addEventListener("click", () => {
  sectionMenu.style.transform = "translateY(100%)";
  sectionMenu.style.opacity = "0";
  contact.style.display = "flex";
  setTimeout(() => {
    contact.style.transform = "translateY(0)";
    contact.style.opacity = "1";
    sectionMenu.style.display = "none";
  }, 500);
});

// Loading

function load() {
  setTimeout(() => {
    sectionLoad.style.opacity = "0";
    sectionMenu.style.display = "block";
  }, 1500);

  setTimeout(() => {
    sectionLoad.style.display = "none";
    sectionMenu.style.display = "block";
  }, 2500);

  setTimeout(() => {
    sectionMenu.style.opacity = "1";
    sectionMenu.style.transform = "translateY(0)";
  }, 2550);
}

window.addEventListener("load", load);

// Intro vers skills et contact

btnDecouvrirSkills.addEventListener("click", () => {
  intro.style.transform = "translateY(100%)";
  intro.style.opacity = "0";
  skills.style.display = "flex";
  setTimeout(() => {
    skills.style.transform = "translateY(0)";
    skills.style.opacity = "1";
    intro.style.display = "none";
  }, 500);
});

btnContactMoi.addEventListener("click", () => {
  intro.style.transform = "translateY(100%)";
  intro.style.opacity = "0";
  contact.style.display = "flex";
  setTimeout(() => {
    contact.style.transform = "translateY(0)";
    contact.style.opacity = "1";
    intro.style.display = "none";
  }, 500);
});
