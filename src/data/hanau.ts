// Alle stadt-spezifischen Inhalte. Für eine neue Stadt diese Datei kopieren,
// Texte/NAP/Stadtteile anpassen (>=30% individualisieren -> Anti-Duplicate-Content).

export const city = {
  slug: 'hanau',
  name: 'Hanau',
  brand: 'Entrümpelung Hanau',
  domain: 'ruempelprofi-hanau.de',
  url: 'https://ruempelprofi-hanau.de',
  // Web3Forms Access-Key von https://web3forms.com (dort E-Mail-Empfänger = info@sdwebdesign.de eintragen)
  web3formsKey: '2b7051c4-d976-4dfa-a4cb-7beac08220a5',

  // Betreiber der Seite (Impressum) – echte Daten, bis ein Mieter angebunden ist.
  operator: {
    company: 'sdWebdesign',
    owner: 'Steffen Fasselt',
    street: 'Hannah-Arendt-Str. 29',
    zip: '60438',
    cityName: 'Frankfurt am Main',
    region: 'Hessen',
    country: 'Deutschland',
    countryCode: 'DE',
    email: 'info@sdwebdesign.de',
    website: 'https://sdwebdesign.de',
  },

  nap: {
    legalName: 'sdWebdesign – Steffen Fasselt',
    phoneDisplay: '069 20169035',
    phoneLink: '+496920169035',
    email: 'info@sdwebdesign.de',
    geo: { lat: 50.1357, lng: 8.9176 },
    openingHours: 'Mo–Sa 7–20 Uhr',
    serves: 'Hanau & Umgebung',
  },

  meta: {
    title: 'Entrümpelung Hanau – Festpreis & kostenlose Besichtigung',
    description:
      'Entrümpelung in Hanau zum garantierten Festpreis: Wohnungs- & Haushaltsauflösung, Keller, Haus & Gewerbe. Kostenlose Besichtigung, besenreine Übergabe. Jetzt anrufen!',
  },

  rating: { value: '4,9', count: 120, valueNumeric: 4.9 },

  hero: {
    eyebrowBadges: [
      { icon: 'map-pin', label: 'Hanau & Umgebung' },
      { icon: 'tag', label: 'Festpreis-Garantie' },
    ],
    h1: 'Entrümpelung in Hanau – schnell, sauber, zum Festpreis',
    subline:
      'Festpreis, kostenlose Besichtigung und besenreine Übergabe – wir kümmern uns um alles.',
    usps: [
      'Garantierter Festpreis – keine versteckten Kosten',
      'Kostenlose & unverbindliche Besichtigung',
      'Besenreine Übergabe & Entsorgung',
    ],
  },

  trust: [
    { icon: 'clipboard-check', label: 'Kostenlose & unverbindliche Besichtigung' },
    { icon: 'shield-check', label: 'Vollständig versicherter Fachbetrieb' },
    { icon: 'file-check', label: 'Entsorgungsnachweis – fachgerecht & legal' },
    { icon: 'tag', label: 'Festpreis-Garantie ohne versteckte Kosten' },
  ],

  services: {
    eyebrow: 'UNSERE LEISTUNGEN',
    h2: 'Entrümpelung für jede Situation in Hanau',
    sub: 'Ob einzelne Räume oder das komplette Objekt – wir übernehmen die gesamte Räumung und Entsorgung.',
    items: [
      { icon: 'sofa', title: 'Wohnungsauflösung', href: '/wohnungsaufloesung-hanau', desc: 'Komplette Auflösung Ihrer Wohnung – besenrein übergeben, zum garantierten Festpreis.' },
      { icon: 'heart-handshake', title: 'Haushaltsauflösung', href: '/haushaltsaufloesung-hanau', desc: 'Pietätvoll und zuverlässig im Trauer- oder Nachlassfall – diskret und respektvoll.' },
      { icon: 'archive', title: 'Keller entrümpeln', href: '/keller-entruempeln-hanau', desc: 'Keller, Dachboden & Abstellräume schnell ausgeräumt, sortiert und besenrein hinterlassen.' },
      { icon: 'house', title: 'Haus entrümpeln', href: '/haus-entruempeln-hanau', desc: 'Komplette Hausentrümpelung – von Keller bis Dachboden, alles aus einer Hand.' },
      { icon: 'shield', title: 'Messie-Wohnung', href: '/messie-wohnung-hanau', desc: 'Diskrete und einfühlsame Entrümpelung stark verwahrloster Wohnungen – schnell und gründlich.' },
      { icon: 'building-2', title: 'Gewerbe-Entrümpelung', href: '/gewerbe-entruempelung-hanau', desc: 'Büro, Lager & Halle: schnelle Räumung für Gewerbe, Verwaltung und Hausverwaltungen.' },
    ],
  },

  process: {
    eyebrow: "SO EINFACH GEHT'S",
    h2: 'In 4 Schritten zur entrümpelten Immobilie',
    sub: 'Von der ersten Anfrage bis zur besenreinen Übergabe – transparent und ohne Stress.',
    steps: [
      { icon: 'phone', n: '1', title: 'Anfrage stellen', desc: 'Rufen Sie an oder senden Sie das Formular – wir melden uns innerhalb von 24 Stunden.' },
      { icon: 'calendar-check', n: '2', title: 'Kostenlose Besichtigung', desc: 'Wir schauen uns das Objekt vor Ort an – unverbindlich und völlig kostenlos.' },
      { icon: 'badge-euro', n: '3', title: 'Festpreis-Angebot', desc: 'Sie erhalten ein transparentes Festpreis-Angebot – ganz ohne versteckte Kosten.' },
      { icon: 'sparkles', n: '4', title: 'Entrümpelung & Übergabe', desc: 'Wir entrümpeln zum Wunschtermin und übergeben das Objekt besenrein.' },
    ],
  },

  pricing: {
    eyebrow: 'TRANSPARENTE PREISE',
    h2: 'Festpreis statt böser Überraschungen',
    body: 'Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis. Was wir vereinbaren, gilt – ohne Nachforderungen, ohne Kleingedrucktes.',
    bullets: [
      'Verbindlicher Festpreis vor Arbeitsbeginn',
      'Wertanrechnung verwertbarer Gegenstände',
      'Keine Anfahrts- oder Entsorgungskosten extra',
    ],
    items: [
      { label: '1-Zimmer-Wohnung', price: 'ab 490 €' },
      { label: 'Keller / Abstellraum', price: 'ab 190 €' },
      { label: '3-Zimmer-Wohnung', price: 'ab 990 €' },
      { label: 'Einfamilienhaus', price: 'ab 1.490 €' },
    ],
    note: 'Richtwerte – Ihr verbindlicher Festpreis folgt nach der kostenlosen Besichtigung.',
  },

  why: {
    eyebrow: 'WARUM ENTRÜMPELUNG HANAU',
    h2: 'Der zuverlässige Partner für Ihre Entrümpelung',
    items: [
      { icon: 'tag', title: 'Garantierter Festpreis', desc: 'Verbindliches Angebot ohne versteckte Kosten – Sie wissen vorher genau, was es kostet.' },
      { icon: 'clock', title: 'Schnelle Termine', desc: 'Kurzfristige Termine, auf Wunsch auch am Wochenende – meist innerhalb weniger Tage.' },
      { icon: 'shield-check', title: 'Diskret & zuverlässig', desc: 'Diskrete Abwicklung und zuverlässige Einhaltung aller Absprachen – darauf können Sie sich verlassen.' },
      { icon: 'badge-check', title: 'Versichert & seriös', desc: 'Vollständig versicherter Fachbetrieb – seriös, sauber und mit fester Ansprechperson.' },
      { icon: 'recycle', title: 'Fachgerechte Entsorgung', desc: 'Umweltgerechte Entsorgung mit Nachweis – ordnungsgemäß und gesetzeskonform.' },
      { icon: 'map-pin', title: 'Lokal aus der Region', desc: 'Wir kennen Hanau und die Region – kurze Wege, faire Preise, schnell vor Ort.' },
    ],
  },

  // Echte Bewertungen erst eintragen, wenn ein realer Betrieb (Mieter) dahintersteht.
  // Leeres Array => Sektion wird ausgeblendet (keine erfundenen Reviews = UWG-konform).
  reviews: {
    eyebrow: 'BEWERTUNGEN',
    h2: 'Das sagen unsere Kunden in Hanau',
    items: [] as { initial: string; name: string; location: string; quote: string }[],
  },

  area: {
    eyebrow: 'EINSATZGEBIET',
    h2: 'In ganz Hanau & Umgebung für Sie da',
    body: 'Wir sind in allen Stadtteilen Hanaus und den Nachbarorten schnell vor Ort – kurze Wege, faire Preise.',
    places: [
      'Innenstadt', 'Großauheim', 'Steinheim', 'Kesselstadt', 'Wolfgang', 'Lamboy',
      'Mittelbuchen', 'Klein-Auheim', 'Maintal', 'Bruchköbel', 'Erlensee', 'Rodenbach',
    ],
  },

  faq: {
    eyebrow: 'HÄUFIGE FRAGEN',
    h2: 'Antworten auf die wichtigsten Fragen',
    items: [
      { q: 'Was kostet eine Entrümpelung in Hanau?', a: 'Der Preis hängt von Menge, Zugang und Entsorgungsaufwand ab. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreis-Angebot – ohne versteckte Kosten.' },
      { q: 'Wie schnell bekomme ich einen Termin?', a: 'In der Regel innerhalb weniger Tage – auf Wunsch auch kurzfristig und am Wochenende.' },
      { q: 'Wie lange dauert eine Entrümpelung?', a: 'Eine durchschnittliche Wohnung ist meist an einem Tag erledigt, größere Objekte dauern 1–3 Tage.' },
      { q: 'Werden wertvolle Gegenstände angerechnet?', a: 'Ja. Verwertbare Gegenstände rechnen wir an und reduzieren damit Ihren Festpreis.' },
      { q: 'Ist die Besichtigung wirklich kostenlos?', a: 'Ja, Besichtigung und Angebot sind kostenlos und völlig unverbindlich.' },
    ],
  },

  finalCta: {
    eyebrow: 'KOSTENLOS & UNVERBINDLICH',
    h2: 'Jetzt kostenlose Besichtigung anfragen',
    body: 'Rufen Sie an oder senden Sie das Formular – wir melden uns innerhalb von 24 Stunden mit einem Festpreis-Angebot.',
    badges: ['100 % unverbindlich', 'Festpreis-Garantie', 'Antwort in 24 h'],
  },
};

export type City = typeof city;
