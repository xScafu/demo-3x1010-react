export const pageData = {
  header: {
    navigation: {
      logo: {
        src: "3x1010Logo.svg",
        alt: "3x1010 Logo",
      },
      menuItems: [
        {
          id: "homepage",
          label: "Homepage",
          href: "http://localhost:5173",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          id: "servizi",
          label: "Servizi",
          href: "#",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          id: "portfolio",
          label: "Portfolio",
          href: "#",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          id: "storia",
          label: "Storia",
          href: "#",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      ],
      mobileMenu: { toggleLabel: "Open menu", closeLabel: "Close menu" },
    },
    hero: {
      backgroundImage: "./img/Hero.png",
      title: "Uno spazio dove la tecnologia rende possibile la creatività",
      link: {
        text: "Scopri 3x1010",
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
  },
  main: {
    services: {
      title: "Services",
      items: [
        {
          id: "service1",
          title: "Creative Website Development",
          text: "Sviluppiamo siti web creativi e originali lasciando massima libertà alla creatività dei vostri designer. Il limite tecnico è per noi una sfida sempre emozionante da superare.",
          link: {
            text: "Menu item",
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
        {
          id: "service2",
          title: "Enterprise Custom Development",
          text: "Progettiamo e sviluppiamo soluzioni enterprise ad alta complessità per rendere possibile ogni dettaglio del tuo business.",
          link: {
            text: "Menu item",
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
        {
          id: "service3",
          title: "Full Stack Design & Development",
          text: "Possiamo progettare tutto quanto ti serve, dalla fase di design grafico, alla produzione dei contenuti e de ilayout, finalizzando lo sviluppo per fornire una soluzione chiavi in mano.",
          link: {
            text: "Menu item",
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      description:
        "Esplora una selezione dei nostri lavori più esemplificativi del nostro metodo e della qualità.",
      cards: [
        {
          id: "card1",
          image: { src: "./img/placeholder_1.png", alt: "Xerjoff Duran Duran" },
          title: "Xerjoff Duran Duran",
          text: "Progettazione visiva. Sviluppo frontend.",
        },
        {
          id: "card2",
          image: { src: "./img/placeholder_2.png", alt: "SIME Museo Egizio" },
          title: "SIME Museo Egizio",
          text: "Progettazione del sistema di archiviazione. Sviluppo enterprise.",
        },
        {
          id: "card3",
          image: {
            src: "./img/placeholder_3.png",
            alt: "Full Stack Design & Develompment",
          },
          title: "Full Stack Design & Development",
          text: "Ingegnerizzazione, Sviluppo backend, Raccolta dati, System Integration, AI",
        },
        {
          id: "card4",
          image: { src: "./img/placeholder_2.png", alt: "SIME Museo Egizio" },
          title: "SIME Museo Egizio",
          text: "Progettazione del sistema di archiviazione. Sviluppo enterprise.",
        },
        {
          id: "card5",
          image: {
            src: "./img/placeholder_3.png",
            alt: "Full Stack Design & Develompment",
          },
          title: "Full Stack Design & Development",
          text: "Ingegnerizzazione, Sviluppo backend, Raccolta dati, System Integration, AI",
        },
        {
          id: "card6",
          image: { src: "./img/placeholder_1.png", alt: "Xerjoff Duran Duran" },
          title: "Xerjoff Duran Duran",
          text: "Progettazione visiva. Sviluppo frontend.",
        },
      ],
      link: {
        text: "Scopri tutti i progetti",
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    history: {
      title: "Storia",
      description: "I passi fondamentali del nostro percorso professionale",
      items: [
        {
          className: "goal",
          id: "1",
          textClass: "stageText",
          year: "2011",
          text: "Fondiamo 3×1010 per fornire servizi informatici e creativi.",
        },
        {
          className: "goal",
          id: "2",
          textClass: "stageText",
          year: "2015",
          text: "Realizziamo avanzati sistemi di gestione asset aziendali per clienti internazionali come Heineken.",
        },
        {
          className: "goal",
          id: "3",
          textClass: "stageText",
          year: "2018",
          text: "Iniziamo la collaborazione con Compagnia dei Caraibi per progettare e sviluppare la loro intera transizione digitale.",
        },
        {
          className: "goal",
          id: "4",
          textClass: "stageText",
          year: "2024",
          text: "Progettiamo e realizziamo diversi siti creativi per famosi brand e personaggi internazionali nei settori del lusso, della moda e della musica.",
        },
        {
          className: "goal",
          id: "5",
          textClass: "stageText",
          innerText: "Eccoci qui. Chiamaci!",
        },
      ],
    },
  },
  footer: {
    contacts: {
      title: "Contattaci",
      description:
        "Per fare qualcosa insieme dobbiamo prima conoscerci un po’.",
      form: [
        {
          key: "name",
          className: "nameInput",
          label: { htmlFor: "name", text: "Nome" },
          input: {
            type: "text",
            id: "name",
            name: "name",
            placeholder: "Come ti chiamiamo",
          },
        },
        {
          key: "email",
          className: "emailInput",
          label: { htmlFor: "email", text: "Email" },
          input: {
            type: "text",
            id: "email",
            name: "email",
            placeholder: "Dove vuoi che ti scriviamo",
          },
        },
        {
          key: "telephone",
          className: "telephoneInput",
          label: { htmlFor: "telephone", text: "Telefono" },
          input: {
            type: "text",
            id: "telephone",
            name: "telephone",
            placeholder: "Se preferisci ti telefoniamo",
          },
        },
        {
          key: "textarea",
          className: "textareaInput",
          label: { htmlFor: "message", text: "Messaggio" },
          textarea: {
            id: "message",
            name: "message",
            rows: "4",
            placeholder:
              "Facci sapere cosa ti piacerebbe fare insieme a noi. O anche un saluto.",
          },
        },
      ],
      button: { type: "submit", text: "Invia" },
    },
    info: {
      text: "3×1010 s.r.l. - c/o OGR Tech – Corso Castelfidardo, 22 - 10138 Torino CF/P.IVA: 02407220900 - Codice SDI: SUBM70N",
    },
  },
};
