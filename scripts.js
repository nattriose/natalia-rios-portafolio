const scrollButtons = document.querySelectorAll("[data-scroll]");
scrollButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const targetSelector = event.currentTarget.getAttribute("data-scroll");
    const target = document.querySelector(targetSelector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const translations = {
  en: {
    nav: { craft: "Craft", lab: "Lab", about: "About", contact: "Contact" },
    header: { talk: "Let’s talk", cv: "Download CV" },
    hero: {
      role: "Interface Designer · Front-end Dev",
      name: "Natalia Rios",
      side: "I simplify, I humanize.",
      more: "More about me →",
      lead:
        "I help purposeful teams ship delightful products that feel human, honest, and confident—spanning research, UX strategy, visual systems, and clean code.",
      ctaPrimary: "See Work",
      ctaSecondary: "About me",
    },
    craft: { label: "Craft" },
    projects: {
      caja: {
        title: "Seamless Banking Experiences",
        body:
          "Designed an intuitive banking app that simplifies transfers, transaction tracking, and secure authentication. Combined clean interfaces, micro-interactions, and facial recognition to help users complete their operations quickly and reliably.",
      },
      faro: {
        title: "Legal research, reimagined.",
        body:
          "Designed intelligent workspaces for hybrid legal teams, reducing routine workflows from hours to minutes with explainable AI.",
        cta: "View Work",
      },
      joyful: {
        title: "Fintech with empathy.",
        body:
          "Crafted an omni-channel client portal for boutique agencies to run invoicing, compliance, and client rituals from one place.",
        cta: "View Work",
      },
      lumen: {
        title: "Habit loops for real life.",
        body:
          "Led research-to-launch for a micro-coaching app turning therapy insights into playful weekly missions, complete with accessibility guardrails.",
        cta: "View Work",
      },
    },
    lab: {
      label: "Lab",
      heading: "Prototyping ideas that bend the rules.",
      body:
        "A space for quick ideas and small explorations where I combine interface design, motion, and front-end prototyping. It’s also where I document how AI tools—like Figma Make and Cursor—help me accelerate workflows, automate design-system-based patterns, and explore new UI variations faster than manual design alone. This is where I keep lightweight proof-of-concepts that keep my craft sharp and my curiosity active.",
      cards: {
        orb: {
          label: "Shader Toy",
          title: "Soft Plastic Orb",
          body: "GLSL experiment using signed distance fields for velvet-like light.",
        },
        genie: {
          label: "Micro SaaS",
          title: "Outline Genie",
          body: "Auto-storyboarding plugin for Figma using structured prompts.",
        },
        motion: {
          label: "Workshop",
          title: "Accessible Motions",
          body: "Guidelines + figma kit for building calm micro-interactions.",
        },
      },
    },
    about: {
      label: "About",
      heading: "Designing with Purpose, Building with Code",
      body:
        "I design interfaces that are intuitive, human-centered, and a little bold. UX/UI Designer and Computer Engineer from Lima, passionate about crafting products that balance creativity and usability.",
      list: {
        one: "4+ years of experience building products across health, fintech, and creative tech.",
        two: "CSkilled in Figma, design systems, rapid prototyping, and front-end collaboration.",
        three: "Experience balancing disruptive concepts with precise, brand-aligned execution.",
      },
      cta: "Book a call",
      cv: "Download CV",
    },
    contact: {
      label: "Contact",
      heading: "Let’s build something intentional.",
      email: "nata9532@icloud.com",
      linkedin: "LinkedIn ↗",
      dribbble: "Dribbble ↗",
      readcv: "Read.cv ↗",
    },
    footer: {
      tagline: "Built with love, caffeine, and semantic HTML.",
    },
  },
  es: {
    nav: { craft: "Proyectos", lab: "Laboratorio", about: "Perfil", contact: "Contacto" },
    header: { talk: "Hablemos", cv: "Descargar CV" },
    hero: {
      role: "Diseñadora UX/UI · Front-end Dev",
      name: "Natalia Rios",
      side: "Simplifico, humanizo.",
      more: "Conoce más →",
      lead:
        "Acompaño a equipos con propósito para lanzar productos cálidos, claros y confiables—desde research y estrategia UX hasta sistemas visuales y código limpio.",
      ctaPrimary: "Ver trabajo",
      ctaSecondary: "Sobre mí",
    },
    craft: { label: "Proyectos" },
    projects: {
      caja: {
        title: "Experiencias Bancarias Sin Fricción",
        body:
          "Diseñé una app bancaria intuitiva que facilita transferencias, consulta de movimientos y autenticación segura. Combiné interfaces limpias, micro-interacciones y reconocimiento facial para que los usuarios realicen sus operaciones de manera rápida y confiable.",
      },
      faro: {
        title: "Investigación legal reinventada.",
        body:
          "Creé espacios de trabajo inteligentes para equipos legales híbridos, reduciendo flujos rutinarios de horas a minutos con IA explicable.",
        cta: "Ver trabajo",
      },
      joyful: {
        title: "Finanzas con empatía.",
        body:
          "Diseñé un portal omni-channel para agencias boutique que centraliza facturación, cumplimiento y rituales con clientes.",
        cta: "Ver trabajo",
      },
      lumen: {
        title: "Hábitos para la vida real.",
        body:
          "Dirigí research y lanzamiento de una app de micro-coaching que convierte hallazgos terapéuticos en misiones semanales accesibles.",
        cta: "Ver trabajo",
      },
    },
    lab: {
      label: "Laboratorio",
      heading: "Prototipo ideas que rompen las reglas.",
      body:
        "Un espacio para ideas rápidas y pequeñas exploraciones donde combino diseño de interfaces, motion y prototipado front-end. También es donde documento cómo herramientas de IA —como Figma Make y Cursor— me ayudan a acelerar flujos, automatizar patrones basados en design systems y explorar nuevas variantes de UI más rápido de lo posible solo con diseño manual. Aquí guardo pruebas de concepto que mantienen mi criterio fresco y mi curiosidad activa.",
      cards: {
        orb: {
          label: "Shader Toy",
          title: "Órbita suave",
          body: "Experimento GLSL con campos de distancia para luz aterciopelada.",
        },
        genie: {
          label: "Micro SaaS",
          title: "Outline Genie",
          body: "Plugin de storyboards automáticos para Figma usando prompts estructurados.",
        },
        motion: {
          label: "Workshop",
          title: "Motion accesible",
          body: "Guías y kit de Figma para microinteracciones calmadas.",
        },
      },
    },
    about: {
      label: "Perfil",
      heading: "Diseñando con propósito, construyendo con código",
      body:
        "Diseño interfaces intuitivas, centradas en las personas y con un toque audaz. Soy UX/UI Designer e Ingeniera Informática de Lima, apasionada por crear productos que equilibran creatividad y usabilidad.",
      list: {
        one: "4+ años de experiencia desarrollando productos en salud, fintech y tecnología creativa.",
        two: "Experta en Figma, sistemas de diseño, prototipado rápido y colaboración con equipos de front-end.",
        three: "Experiencia equilibrando conceptos disruptivos con una ejecución precisa y alineada a la marca.",
      },
      cta: "Agenda una llamada",
      cv: "Descargar CV",
    },
    contact: {
      label: "Contacto",
      heading: "Construyamos algo intencional.",
      email: "hello@natiarios.design",
      linkedin: "LinkedIn ↗",
      dribbble: "Dribbble ↗",
      readcv: "Read.cv ↗",
    },
    footer: {
      tagline: "Hecho con amor, cafeína y HTML semántico.",
    },
  },
};

const cvLinks = {
  en: "assets/Natalia-Rios-CV-EN.pdf",
  es: "assets/Natalia-Rios-CV-ES.pdf",
};

const langButtons = document.querySelectorAll(".lang-btn");
let currentLanguage = "en";

const getTranslation = (lang, key) =>
  key.split(".").reduce((acc, part) => acc && acc[part], translations[lang]);

const updateTexts = (lang) => {
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = getTranslation(lang, key);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });
};

const updateCvLink = (lang) => {
  const link = document.getElementById("cv-link");
  if (link && cvLinks[lang]) {
    link.href = cvLinks[lang];
  }
};

const setActiveLangButton = (lang) => {
  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
};

const setLanguage = (lang) => {
  if (!translations[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  updateTexts(lang);
  updateCvLink(lang);
  setActiveLangButton(lang);
};

langButtons.forEach((btn) =>
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang))
);

setLanguage(currentLanguage);

// Hero blob animation
const blobPath = document.getElementById("blob-path");
if (blobPath) {
  const center = 300;
  const baseRadius = 215;
  const points = 48;
  const variance = 52;

  const midpoint = (a, b) => ({
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  });

  const buildPath = (time) => {
    const coords = [];
    for (let i = 0; i < points; i += 1) {
      const angle = (Math.PI * 2 * i) / points;
      const noise =
        Math.sin(angle * 3.2 + time * 0.0016) * variance +
        Math.cos(angle * 1.5 + time * 0.001) * (variance * 0.35) +
        Math.sin(angle * 5.1 + time * 0.0024) * (variance * 0.25);
      const pulse = Math.sin(time * 0.0005) * 6;
      const radius = baseRadius + noise + pulse;
      coords.push({
        x: center + Math.cos(angle) * radius,
        y: center + Math.sin(angle) * radius,
      });
    }

    const start = midpoint(coords[0], coords[coords.length - 1]);
    let d = `M ${start.x} ${start.y}`;

    for (let i = 0; i < coords.length; i += 1) {
      const current = coords[i];
      const next = coords[(i + 1) % coords.length];
      const mid = midpoint(current, next);
      d += ` Q ${current.x} ${current.y} ${mid.x} ${mid.y}`;
    }

    d += " Z";
    return d;
  };

  const animate = (time) => {
    blobPath.setAttribute("d", buildPath(time));
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}

