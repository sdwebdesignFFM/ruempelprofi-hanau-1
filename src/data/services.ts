// Inhalte der Service-Unterseiten (eigene URL je Leistung).
// Slugs müssen zu den hrefs in hanau.ts (services.items) passen.

export interface ServicePage {
  slug: string;
  icon: string;
  navTitle: string;
  short: string;
  title: string;
  metaDescription: string;
  h1: string;
  lead: string;
  body: string;
  includes: string[];
  faqs: { q: string; a: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: 'wohnungsaufloesung-hanau',
    icon: 'sofa',
    navTitle: 'Wohnungsauflösung',
    short: 'Komplette Wohnungsauflösung, besenrein zum Festpreis.',
    title: 'Wohnungsauflösung Hanau – Festpreis & besenrein',
    metaDescription:
      'Wohnungsauflösung in Hanau zum Festpreis: komplette Räumung, Wertanrechnung, besenreine Übergabe. Kostenlose Besichtigung – jetzt anfragen.',
    h1: 'Wohnungsauflösung Hanau – besenrein & zum Festpreis',
    lead: 'Sie müssen eine Wohnung in Hanau auflösen – wegen Umzug, Auszug oder einer geerbten Immobilie? Wir übernehmen die komplette Wohnungsauflösung: schnell, diskret und zum garantierten Festpreis.',
    body: 'Von der ersten Besichtigung bis zur besenreinen Übergabe an Vermieter oder Käufer kümmern wir uns um alles – inklusive fachgerechter Entsorgung und Wertanrechnung verwertbarer Gegenstände. So sparen Sie Zeit, Nerven und oft auch Geld.',
    includes: [
      'Komplette Räumung aller Zimmer, Keller & Dachboden',
      'Demontage von Möbeln, Küchen & Einbauten',
      'Fachgerechte Entsorgung mit Nachweis',
      'Wertanrechnung verwertbarer Gegenstände',
      'Besenreine, termingerechte Übergabe',
    ],
    faqs: [
      { q: 'Wie schnell kann die Wohnung aufgelöst werden?', a: 'Eine durchschnittliche Wohnung lösen wir meist innerhalb eines Tages auf, größere Objekte in 1–3 Tagen – auf Wunsch kurzfristig.' },
      { q: 'Übernehmen Sie auch die Endreinigung?', a: 'Die Wohnung wird besenrein übergeben. Eine weitergehende Endreinigung organisieren wir auf Wunsch.' },
      { q: 'Was passiert mit noch brauchbaren Möbeln?', a: 'Verwertbare Gegenstände rechnen wir an und reduzieren so Ihren Festpreis.' },
    ],
  },
  {
    slug: 'haushaltsaufloesung-hanau',
    icon: 'heart-handshake',
    navTitle: 'Haushaltsauflösung',
    short: 'Pietätvoll & diskret im Trauer- oder Nachlassfall.',
    title: 'Haushaltsauflösung Hanau – pietätvoll & zuverlässig',
    metaDescription:
      'Haushaltsauflösung in Hanau: einfühlsam im Trauer- & Nachlassfall, Festpreis, besenrein. Diskrete Abwicklung – kostenlose Besichtigung anfragen.',
    h1: 'Haushaltsauflösung Hanau – pietätvoll & zuverlässig',
    lead: 'Eine Haushaltsauflösung steht oft in einer belastenden Situation an – etwa im Trauer- oder Nachlassfall. Wir nehmen Ihnen diese Aufgabe in Hanau respektvoll und zuverlässig ab.',
    body: 'Wir gehen sorgsam mit persönlichen Gegenständen um, sortieren auf Wunsch Unterlagen und Wertsachen heraus und lösen den kompletten Haushalt diskret auf – zum Festpreis und besenrein übergeben.',
    includes: [
      'Diskrete, respektvolle Abwicklung',
      'Aussortieren von Dokumenten & Wertsachen auf Wunsch',
      'Komplette Räumung & Demontage',
      'Umweltgerechte Entsorgung mit Nachweis',
      'Wertanrechnung & besenreine Übergabe',
    ],
    faqs: [
      { q: 'Können wir persönliche Gegenstände vorab heraussuchen?', a: 'Selbstverständlich. Sagen Sie uns, was erhalten bleiben soll – auf Wunsch sortieren wir auch Dokumente und Wertsachen für Sie aus.' },
      { q: 'Wie diskret läuft die Auflösung ab?', a: 'Sehr diskret. Wir arbeiten zügig und unauffällig, gerade in sensiblen Situationen.' },
      { q: 'Was kostet eine Haushaltsauflösung?', a: 'Der Preis richtet sich nach Umfang und Aufwand. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis.' },
    ],
  },
  {
    slug: 'keller-entruempeln-hanau',
    icon: 'archive',
    navTitle: 'Keller entrümpeln',
    short: 'Keller, Dachboden & Abstellraum schnell & besenrein.',
    title: 'Keller entrümpeln Hanau – schnell & besenrein',
    metaDescription:
      'Keller, Dachboden & Abstellraum in Hanau entrümpeln: schnell ausgeräumt, sortiert, besenrein. Festpreis ab 190 € & kostenlose Besichtigung.',
    h1: 'Keller entrümpeln in Hanau – schnell & besenrein',
    lead: 'Vollgestellter Keller, Dachboden oder Abstellraum? Wir entrümpeln in Hanau schnell, räumen alles aus und hinterlassen die Fläche besenrein.',
    body: 'Egal ob einzelnes Kellerabteil oder das komplette Untergeschoss eines Mehrfamilienhauses – wir sortieren, entsorgen fachgerecht und rechnen Verwertbares an.',
    includes: [
      'Komplettes Ausräumen von Keller, Dachboden & Abstellraum',
      'Sortierung & fachgerechte Entsorgung',
      'Auch enge Zugänge & Mehrfamilienhäuser',
      'Wertanrechnung verwertbarer Gegenstände',
      'Besenreine Übergabe',
    ],
    faqs: [
      { q: 'Lohnt sich das auch für einen kleinen Keller?', a: 'Ja. Auch einzelne Kellerabteile räumen wir – zum fairen Festpreis.' },
      { q: 'Wie schnell geht das?', a: 'Die meisten Keller sind innerhalb weniger Stunden bis zu einem Tag geräumt.' },
      { q: 'Was kostet eine Kellerentrümpelung?', a: 'Ab ca. 190 € je nach Menge und Zugang – verbindlich nach kostenloser Besichtigung.' },
    ],
  },
  {
    slug: 'haus-entruempeln-hanau',
    icon: 'house',
    navTitle: 'Haus entrümpeln',
    short: 'Komplette Hausentrümpelung von Keller bis Dachboden.',
    title: 'Haus entrümpeln Hanau – komplett aus einer Hand',
    metaDescription:
      'Hausentrümpelung in Hanau: von Keller bis Dachboden komplett, Festpreis, besenrein. Ideal vor Verkauf oder Übergabe. Jetzt anfragen.',
    h1: 'Haus entrümpeln in Hanau – komplett aus einer Hand',
    lead: 'Ein ganzes Haus zu entrümpeln ist ein Großprojekt – wir übernehmen es in Hanau komplett, von Keller bis Dachboden, alles aus einer Hand.',
    body: 'Ob vor Verkauf, Vermietung oder nach einem Erbfall: Wir räumen das gesamte Objekt inklusive Nebengebäuden, entsorgen fachgerecht und übergeben besenrein – planbar zum Festpreis.',
    includes: [
      'Komplette Räumung aller Etagen & Nebengebäude',
      'Demontage von Einbauten, Küchen & Möbeln',
      'Garage, Schuppen & Garten auf Wunsch',
      'Fachgerechte Entsorgung mit Nachweis',
      'Wertanrechnung & besenreine Übergabe',
    ],
    faqs: [
      { q: 'Wie lange dauert eine Hausentrümpelung?', a: 'Je nach Größe 1–3 Tage, größere Objekte nach Absprache.' },
      { q: 'Räumen Sie auch Garage und Garten?', a: 'Ja, auf Wunsch inklusive Garage, Schuppen und Gartenfläche.' },
      { q: 'Ist das vor einem Hausverkauf sinnvoll?', a: 'Sehr – ein besenrein übergebenes Haus verkauft sich schneller und besser.' },
    ],
  },
  {
    slug: 'messie-wohnung-hanau',
    icon: 'shield',
    navTitle: 'Messie-Wohnung',
    short: 'Diskrete, einfühlsame Entrümpelung verwahrloster Wohnungen.',
    title: 'Messie-Wohnung entrümpeln Hanau – diskret & einfühlsam',
    metaDescription:
      'Messie-Wohnung in Hanau entrümpeln: diskret, einfühlsam, gründlich. Auch stark verwahrloste Wohnungen – Festpreis & kostenlose Besichtigung.',
    h1: 'Messie-Wohnung entrümpeln in Hanau – diskret & einfühlsam',
    lead: 'Die Entrümpelung einer stark verwahrlosten oder Messie-Wohnung erfordert Fingerspitzengefühl. In Hanau gehen wir diskret, einfühlsam und ohne Vorurteile vor.',
    body: 'Wir räumen auch stark vermüllte Wohnungen vollständig, kümmern uns auf Wunsch um Desinfektion und Geruchsbeseitigung und stellen einen besenreinen Zustand wieder her – vertraulich und zuverlässig.',
    includes: [
      'Diskrete, vorurteilsfreie Abwicklung',
      'Komplette Räumung auch bei starker Verwahrlosung',
      'Desinfektion & Geruchsbeseitigung auf Wunsch',
      'Fachgerechte Entsorgung',
      'Wiederherstellung eines besenreinen Zustands',
    ],
    faqs: [
      { q: 'Läuft das wirklich diskret ab?', a: 'Absolut. Wir arbeiten vertraulich und unauffällig – ohne Wertung.' },
      { q: 'Übernehmen Sie auch die Reinigung?', a: 'Auf Wunsch inklusive Grundreinigung, Desinfektion und Geruchsbeseitigung.' },
      { q: 'Kann eine Kostenübernahme geklärt werden?', a: 'In manchen Fällen beteiligen sich Kostenträger. Wir stellen Ihnen eine transparente Aufstellung bereit.' },
    ],
  },
  {
    slug: 'gewerbe-entruempelung-hanau',
    icon: 'building-2',
    navTitle: 'Gewerbe-Entrümpelung',
    short: 'Büro, Lager, Halle & Praxis schnell geräumt.',
    title: 'Gewerbe-Entrümpelung Hanau – Büro, Lager & Halle',
    metaDescription:
      'Gewerbe-Entrümpelung in Hanau: Büro, Lager, Halle & Praxis schnell geräumt. Für Unternehmen & Hausverwaltungen. Festpreis, auch kurzfristig.',
    h1: 'Gewerbe-Entrümpelung Hanau – Büro, Lager & Halle',
    lead: 'Büroauflösung, Lagerräumung oder Hallenentrümpelung in Hanau? Wir räumen Gewerbeobjekte schnell und planbar – auf Wunsch auch außerhalb der Geschäftszeiten.',
    body: 'Für Unternehmen, Praxen, Verwaltungen und Hausverwaltungen übernehmen wir die komplette Räumung inklusive Mobiliar, Technik und Akten – fachgerecht entsorgt, mit Nachweis und zum Festpreis.',
    includes: [
      'Büro-, Lager-, Hallen- & Praxisräumung',
      'Demontage von Mobiliar & Einrichtung',
      'DSGVO-konforme Aktenvernichtung auf Wunsch',
      'Termine auch abends & am Wochenende',
      'Fachgerechte Entsorgung mit Nachweis',
    ],
    faqs: [
      { q: 'Können Sie außerhalb der Geschäftszeiten räumen?', a: 'Ja, auf Wunsch abends oder am Wochenende, um Ihren Betrieb nicht zu stören.' },
      { q: 'Vernichten Sie Akten DSGVO-konform?', a: 'Ja, auf Wunsch mit zertifizierter, datenschutzkonformer Aktenvernichtung.' },
      { q: 'Arbeiten Sie mit Hausverwaltungen zusammen?', a: 'Regelmäßig – mit fester Ansprechperson und transparenter Abrechnung.' },
    ],
  },
];
