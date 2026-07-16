// EU-Quiz Questions Database
const countryNeighbors = {
  "Belgien": [
    "Niederlande",
    "Deutschland",
    "Luxemburg",
    "Frankreich"
  ],
  "Bulgarien": [
    "Rumänien",
    "Griechenland"
  ],
  "Dänemark": [
    "Deutschland",
    "Schweden"
  ],
  "Deutschland": [
    "Dänemark",
    "Niederlande",
    "Belgien",
    "Luxemburg",
    "Frankreich",
    "Österreich",
    "Tschechien",
    "Polen"
  ],
  "Estland": [
    "Lettland",
    "Finnland"
  ],
  "Finnland": [
    "Schweden",
    "Estland"
  ],
  "Frankreich": [
    "Belgien",
    "Luxemburg",
    "Deutschland",
    "Italien",
    "Spanien"
  ],
  "Griechenland": [
    "Bulgarien",
    "Zypern",
    "Italien"
  ],
  "Irland": [],
  "Italien": [
    "Frankreich",
    "Österreich",
    "Slowenien",
    "Kroatien",
    "Griechenland"
  ],
  "Kroatien": [
    "Slowenien",
    "Ungarn",
    "Italien"
  ],
  "Lettland": [
    "Estland",
    "Litauen"
  ],
  "Litauen": [
    "Lettland",
    "Polen"
  ],
  "Luxemburg": [
    "Belgien",
    "Deutschland",
    "Frankreich"
  ],
  "Malta": [
    "Italien"
  ],
  "Niederlande": [
    "Belgien",
    "Deutschland"
  ],
  "Österreich": [
    "Deutschland",
    "Tschechien",
    "Slowakei",
    "Ungarn",
    "Slowenien",
    "Italien"
  ],
  "Polen": [
    "Deutschland",
    "Tschechien",
    "Slowakei",
    "Litauen"
  ],
  "Portugal": [
    "Spanien"
  ],
  "Rumänien": [
    "Bulgarien",
    "Ungarn"
  ],
  "Schweden": [
    "Dänemark",
    "Finnland"
  ],
  "Slowakei": [
    "Tschechien",
    "Polen",
    "Ungarn",
    "Österreich"
  ],
  "Slowenien": [
    "Italien",
    "Österreich",
    "Ungarn",
    "Kroatien"
  ],
  "Spanien": [
    "Portugal",
    "Frankreich"
  ],
  "Tschechien": [
    "Deutschland",
    "Polen",
    "Slowakei",
    "Österreich"
  ],
  "Ungarn": [
    "Österreich",
    "Slowakei",
    "Rumänien",
    "Kroatien",
    "Slowenien"
  ],
  "Zypern": [
    "Griechenland"
  ]
};

const geoQuestions = {
  "Belgien": "In welchem Land befindet sich der Hauptsitz der Europäischen Kommission? 🇪🇺",
  "Bulgarien": "Welches Land liegt am Schwarzen Meer und hat Sofia als Hauptstadt? 🇧🇬",
  "Dänemark": "Welches nordische EU-Land grenzt direkt an Deutschland? 🇩🇰",
  "Deutschland": "In welchem Land liegt die Finanzmetropole Frankfurt am Main? 🇩🇪",
  "Estland": "Welches baltische Land liegt am finnischen Meerbusen und hat Tallinn als Hauptstadt? 🇪🇪",
  "Finnland": "Welches waldreiche EU-Land ist als das 'Land der tausend Seen' bekannt? 🇫🇮",
  "Frankreich": "In welchem Land befindet sich der Hauptsitz des Europäischen Parlaments in Straßburg? 🇫🇷",
  "Griechenland": "In welchem Land liegt die Halbinsel Peloponnes und die Akropolis? 🇬🇷",
  "Irland": "Welcher EU-Mitgliedstaat liegt auf einer Insel westlich von Großbritannien? 🇮🇪",
  "Italien": "Welcher EU-Staat hat die Form eines Stiefels und umschließt die Vatikanstadt? 🇮🇹",
  "Kroatien": "Welches Land an der Adria trat 2013 als bisher letztes Mitglied der EU bei? 🇭🇷",
  "Lettland": "Welches baltische Land liegt zwischen Estland und Litauen? 🇱🇻",
  "Litauen": "In welchem baltischen Land befindet sich das geografische Zentrum Europas? 🇱🇹",
  "Luxemburg": "In welchem Land befindet sich der Sitz des Europäischen Gerichtshofs? 🇱🇺",
  "Malta": "Welcher kleine Inselstaat im Mittelmeer liegt südlich von Sizilien? 🇲🇹",
  "Niederlande": "In welchem Land liegt der Regierungssitz Den Haag? 🇳🇱",
  "Österreich": "Welches Alpenland grenzt an Deutschland, Italien und die Schweiz? 🇦🇹",
  "Polen": "Welches große mitteleuropäische EU-Land liegt östlich der Oder-Neiße-Grenze? 🇵🇱",
  "Portugal": "Welches EU-Land liegt ganz im Westen der Iberischen Halbinsel am Atlantik? 🇵🇹",
  "Rumänien": "Durch welches osteuropäische Land fließt die Donau, bevor sie ins Schwarze Meer mündet? 🇷🇴",
  "Schweden": "Welches skandinavische Land ist flächenmäßig das größte in Nordeuropa? 🇸🇪",
  "Slowakei": "Welches Land hat Bratislava als Hauptstadt und grenzt im Westen an Österreich? 🇸🇰",
  "Slowenien": "In welchem Land liegen die Julischen Alpen und der malerische Bleder See? 🇸🇮",
  "Spanien": "Welches EU-Land nimmt den größten Teil der Iberischen Halbinsel ein? 🇪🇸",
  "Tschechien": "Welches Land ist für seine historische Region Böhmen bekannt? 🇨🇿",
  "Ungarn": "Durch welches EU-Mitgliedsland fließt die Donau direkt durch die Hauptstadt Budapest? 🇭🇺",
  "Zypern": "Welcher Inselstaat im östlichen Mittelmeer ist seit 2004 Mitglied der EU? 🇨🇾"
};

const visualQuestionsPool = [
  {
    "q": "Welches Brüsseler Wahrzeichen, das zur Weltausstellung 1958 gebaut wurde, zeigt ein 165-milliardenfach vergrößertes Eisenkristallgitter? ⚛️🇧🇪",
    "o": [
      "Atomium",
      "Manneken Pis",
      "Grand-Place",
      "Maison du Roi"
    ],
    "a": 0,
    "exp": "Das Atomium ist ein markantes Brüsseler Wahrzeichen, das 1958 für die Weltausstellung errichtet wurde. Es stellt eine 165-milliardenfache Vergrößerung der Kristallstruktur von Eisen dar."
  },
  {
    "q": "Welcher berühmte Eisenfachwerkturm in Paris ist das globale Kulturikone Frankreichs? 🗼🇫🇷",
    "o": [
      "Eiffelturm",
      "Arc de Triomphe",
      "Louvre-Pyramide",
      "Notre-Dame"
    ],
    "a": 0,
    "exp": "Der Eiffelturm wurde 1889 anlässlich der Weltausstellung zur Erinnerung an die Französische Revolution fertiggestellt."
  },
  {
    "q": "Welches antike Amphitheater in Rom ist das größte jemals gebaute seiner Art weltweit? 🏛️🇮🇹",
    "o": [
      "Kolosseum",
      "Pantheon",
      "Forum Romanum",
      "Caracalla-Thermen"
    ],
    "a": 0,
    "exp": "Das Kolosseum ist das größte antike Amphitheater der Welt und gilt als ingenieurtechnische Meisterleistung der römischen Antike."
  },
  {
    "q": "Welche weltberühmte antike Tempelanlage liegt auf einem flachen Felsen hoch über der griechischen Stadt Athen? 🏛️🇬🇷",
    "o": [
      "Akropolis",
      "Parthenon-Tempel",
      "Olympieion",
      "Hephaistostempel"
    ],
    "a": 0,
    "exp": "Die Akropolis von Athen ist die berühmteste Stadtfestung des antiken Griechenlands."
  },
  {
    "q": "Welcher EU-Staat is aufgrund seiner markanten geographischen Stiefelform weltweit bekannt? 👢🗺️",
    "o": [
      "Italien",
      "Kroatien",
      "Griechenland",
      "Spanien"
    ],
    "a": 0,
    "exp": "Italien hat auf der Weltkarte die sehr markante Gestalt eines Stiefels, der ins Mittelmeer hineinragt."
  },
  {
    "q": "Welcher EU-Mitgliedstaat wird wegen seiner geografischen Form im Französischen oft als 'L'Hexagone' (das Sechseck) bezeichnet? ⬡🗺️",
    "o": [
      "Frankreich",
      "Deutschland",
      "Polen",
      "Spanien"
    ],
    "a": 0,
    "exp": "Aufgrund seiner sechsseitigen Umrisse wird Frankreich liebevoll als 'L'Hexagone' bezeichnet."
  },
  {
    "q": "In welcher europäischen Hauptstadt steht das weltbekannte, prachtvolle neugotische Parlamentsgebäude direkt am Donauufer? 🏛️🇭🇺",
    "o": [
      "Budapest",
      "Wien",
      "Bratislava",
      "Bukarest"
    ],
    "a": 0,
    "exp": "Das ungarische Parlamentsgebäude in Budapest ist eines der größten und eindrucksvollsten Gebäude Europas."
  },
  {
    "q": "In welcher deutschen Stadt steht das weltbekannte klassizistische Brandenburger Tor? 🏛️🇩🇪",
    "o": [
      "Berlin",
      "München",
      "Hamburg",
      "Bonn"
    ],
    "a": 0,
    "exp": "Das Brandenburger Tor in Berlin wurde 1791 errichtet und ist heute das Symbol der deutschen Wiedervereinigung."
  },
  {
    "q": "In welcher spanischen Metropole steht die weltberühmte, noch unvollendete Basilika Sagrada Família von Antoni Gaudí? ⛪🇪🇸",
    "o": [
      "Barcelona",
      "Madrid",
      "Sevilla",
      "Valencia"
    ],
    "a": 0,
    "exp": "Die Sagrada Família in Barcelona ist Gaudís Lebenswerk. Ihr Bau begann 1882 und dauert bis heute an."
  },
  {
    "q": "Welche historische Brücke umschließt 16 Steinbögen und überquert die Moldau in Prag? 🌉🇨🇿",
    "o": [
      "Karlsbrücke",
      "Kettenbrücke",
      "Rialtobrücke",
      "Basteibrücke"
    ],
    "a": 0,
    "exp": "Die Karlsbrücke in Prag ist eine der ältesten Steinbrücken Europas und verbindet die Prager Altstadt mit der Kleinseite."
  },
  {
    "q": "Welches duftende Wahrzeichen steht an der Mündung des Tejo in Lissabon? 🏰🇵🇹",
    "o": [
      "Torre de Belém",
      "Castelo de São Jorge",
      "Padrão dos Descobrimentos",
      "Pena Palast"
    ],
    "a": 0,
    "exp": "Der Torre de Belém wurde im 16. Jahrhundert errichtet, um ankommende Schiffe zu begrüßen und Lissabon zu schützen."
  },
  {
    "q": "Welche rumänische Höhenburg in Transsilvanien wird weltweit touristisch als 'Dracula-Schloss' vermarktet? 🏰🇷🇴",
    "o": [
      "Schloss Bran",
      "Schloss Peleș",
      "Burg Hunedoara",
      "Festung Râșnov"
    ],
    "a": 0,
    "exp": "Schloss Bran (Törzburg) ähnelt der Beschreibung des Schlosses im Roman Dracula von Bram Stoker sehr stark."
  },
  {
    "q": "Welches romantische, märchenhafte Schloss in der Slowakei gilt als eines der schönsten Schlösser Mitteleuropas? 🏰🇸🇰",
    "o": [
      "Schloss Bojnice",
      "Burg Spiš",
      "Burg Bratislava",
      "Burg Devin"
    ],
    "a": 0,
    "exp": "Schloss Bojnice (Weinitz) ist ein romantisches Schloss mit neugotischem Umbau und ein sehr beliebtes Film- und Postkartenmotiv."
  },
  {
    "q": "Welche malerische Burg thront auf einer 130 Meter hohen Klippe direkt über dem berühmten Alpensee von Bled? 🏰🇸🇮",
    "o": [
      "Burg Bled",
      "Burg Ljubljana",
      "Predjama Höhlenburg",
      "Burg Celje"
    ],
    "a": 0,
    "exp": "Die Burg von Bled (Blejski grad) ist die älteste Burg Sloweniens und blickt direkt auf die kleine Insel im Bleder See."
  }
];

const categoryNames = {
  "1": "Geschichte & Verträge",
  "2": "Geografie & Städte",
  "3": "Institutionen & Politik",
  "4": "Kultur & Symbole",
  "5": "Wirtschaft & Euro"
};

const countries = [
  {
    "n": "Belgien",
    "f": "🇧🇪",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Bulgarien",
    "f": "🇧🇬",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Dänemark",
    "f": "🇩🇰",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Deutschland",
    "f": "🇩🇪",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Estland",
    "f": "🇪🇪",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Finnland",
    "f": "🇫🇮",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Frankreich",
    "f": "🇫🇷",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Griechenland",
    "f": "🇬🇷",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Irland",
    "f": "🇮🇪",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Italien",
    "f": "🇮🇹",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Kroatien",
    "f": "🇭🇷",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Lettland",
    "f": "🇱🇻",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Litauen",
    "f": "🇱🇹",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Luxemburg",
    "f": "🇱🇺",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Malta",
    "f": "🇲🇹",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Niederlande",
    "f": "🇳🇱",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Österreich",
    "f": "🇦🇹",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Polen",
    "f": "🇵🇱",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Portugal",
    "f": "🇵🇹",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Rumänien",
    "f": "🇷🇴",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Schweden",
    "f": "🇸🇪",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Slowakei",
    "f": "🇸🇰",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Slowenien",
    "f": "🇸🇮",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Spanien",
    "f": "🇪🇸",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Tschechien",
    "f": "🇨🇿",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Ungarn",
    "f": "🇭🇺",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  },
  {
    "n": "Zypern",
    "f": "🇨🇾",
    "p": {
      "1": 0,
      "2": 0,
      "3": 0
    }
  }
];

const pool = {
  "1": {
    "Belgien": {
      "1": [
        {
          "q": "Gehört Belgien zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 0,
          "exp": "Belgien war 1951 bei den Gründungsmitgliedern dabei."
        },
        {
          "q": "In welchem Jahr trat Belgien der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1951",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Belgien ist seit 1951 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Belgien vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Belgischer Franc",
            "Deutsche Mark",
            "Portugiesischer Escudo",
            "Zypern-Pfund"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Belgischer Franc."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Belgien?",
          "o": [
            "Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen",
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet",
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland",
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Belgien?",
          "o": [
            "Paul-Henri Spaak (Gründervater)",
            "Walter Hallstein (erster EU-Kommissionschef)",
            "Václav Havel (erster tschechischer Präsident)",
            "Ministerpräsident Viktor Orbán"
          ],
          "a": 0,
          "exp": "Paul-Henri Spaak (Gründervater) prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Bulgarien": {
      "1": [
        {
          "q": "Gehört Bulgarien zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Bulgarien trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Bulgarien der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2007",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Bulgarien ist seit 2007 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Bulgarien vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Bulgarischer Lew",
            "Luxemburgischer Franc",
            "Dänische Krone",
            "Portugiesischer Escudo"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Bulgarischer Lew."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Bulgarien?",
          "o": [
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt",
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas",
            "Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen",
            "die Europäische Zentralbank hat ihren Sitz in Frankfurt"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: Lew-Währung ist fest an die D-Mark/Euro gekoppelt."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Bulgarien?",
          "o": [
            "Finanzpolitikerin Kristalina Georgiewa",
            "Chefunterhändler Vasile Pușcaș",
            "EU-Kommissar Erkki Liikanen",
            "Reformer Konstantinos Karamanlis"
          ],
          "a": 0,
          "exp": "Finanzpolitikerin Kristalina Georgiewa prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Dänemark": {
      "1": [
        {
          "q": "Gehört Dänemark zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Dänemark trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Dänemark der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1973",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Dänemark ist seit 1973 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Dänemark vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Dänische Krone",
            "Niederländischer Gulden",
            "Belgischer Franc",
            "Österreichischer Schilling"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Dänische Krone."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Dänemark?",
          "o": [
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen",
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen",
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte",
            "die Römischen Verträge von 1957 wurden hier unterschrieben"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Dänemark?",
          "o": [
            "ehemaliger Ratspräsident Anders Fogh Rasmussen",
            "Václav Havel (erster tschechischer Präsident)",
            "Jan Willem Beyen (Gründervater)",
            "EU-Kommissar Erkki Liikanen"
          ],
          "a": 0,
          "exp": "ehemaliger Ratspräsident Anders Fogh Rasmussen prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Deutschland": {
      "1": [
        {
          "q": "Gehört Deutschland zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 0,
          "exp": "Deutschland war 1951 bei den Gründungsmitgliedern dabei."
        },
        {
          "q": "In welchem Jahr trat Deutschland der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1951",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Deutschland ist seit 1951 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Deutschland vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Deutsche Mark",
            "Dänische Krone",
            "Bulgarischer Lew",
            "Slowakische Krone"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Deutsche Mark."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Deutschland?",
          "o": [
            "die Europäische Zentralbank hat ihren Sitz in Frankfurt",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: die Europäische Zentralbank hat ihren Sitz in Frankfurt."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Deutschland?",
          "o": [
            "Walter Hallstein (erster EU-Kommissionschef)",
            "Václav Havel (erster tschechischer Präsident)",
            "Außenbeauftragte Kaja Kallas",
            "Jan Willem Beyen (Gründervater)"
          ],
          "a": 0,
          "exp": "Walter Hallstein (erster EU-Kommissionschef) prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Estland": {
      "1": [
        {
          "q": "Gehört Estland zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Estland trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Estland der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2004",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Estland ist seit 2004 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Estland vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Estnische Krone",
            "Irisches Pfund",
            "Finnische Mark",
            "Polnischen Złoty"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Estnische Krone."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Estland?",
          "o": [
            "hier kann man seit 2005 sicher online über das Internet wählen",
            "die Europäische Zentralbank hat ihren Sitz in Frankfurt",
            "hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt",
            "die Römischen Verträge von 1957 wurden hier unterschrieben"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: hier kann man seit 2005 sicher online über das Internet wählen."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Estland?",
          "o": [
            "Außenbeauftragte Kaja Kallas",
            "Kanzler Franz Vranitzky (Beitrittsunterzeichner)",
            "Finanzpolitikerin Kristalina Georgiewa",
            "EU-Kommissarin Helena Dalli"
          ],
          "a": 0,
          "exp": "Außenbeauftragte Kaja Kallas prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Finnland": {
      "1": [
        {
          "q": "Gehört Finnland zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Finnland trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Finnland der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1995",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Finnland ist seit 1995 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Finnland vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Finnische Mark",
            "Niederländischer Gulden",
            "Polnischen Złoty",
            "Slowenischer Tolar"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Finnische Mark."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Finnland?",
          "o": [
            "Lappland gilt als Heimatort des Weihnachtsmanns",
            "die Europäische Zentralbank hat ihren Sitz in Frankfurt",
            "die Atlantik-Inseln Azoren und Madeira gehören dazu",
            "Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: Lappland gilt als Heimatort des Weihnachtsmanns."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Finnland?",
          "o": [
            "EU-Kommissar Erkki Liikanen",
            "ehemaliger Präsident Glafkos Klerides",
            "Finanzpolitikerin Kristalina Georgiewa",
            "Walter Hallstein (erster EU-Kommissionschef)"
          ],
          "a": 0,
          "exp": "EU-Kommissar Erkki Liikanen prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Frankreich": {
      "1": [
        {
          "q": "Gehört Frankreich zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 0,
          "exp": "Frankreich war 1951 bei den Gründungsmitgliedern dabei."
        },
        {
          "q": "In welchem Jahr trat Frankreich der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1951",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Frankreich ist seit 1951 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Frankreich vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Französischer Franc",
            "Spanische Peseta",
            "Slowakische Krone",
            "Belgischer Franc"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Französischer Franc."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Frankreich?",
          "o": [
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "Mallorca und Ibiza gehören politisch zu diesem EU-Staat",
            "hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: das Europäische Parlament hat seinen Hauptsitz in Straßburg."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Frankreich?",
          "o": [
            "Robert Schuman (EU-Gründervater)",
            "Kommissionsvizepräsident Valdis Dombrovskis",
            "Finanzpolitikerin Kristalina Georgiewa",
            "ehemaliger Ratspräsident Anders Fogh Rasmussen"
          ],
          "a": 0,
          "exp": "Robert Schuman (EU-Gründervater) prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Griechenland": {
      "1": [
        {
          "q": "Gehört Griechenland zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Griechenland trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Griechenland der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1981",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Griechenland ist seit 1981 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Griechenland vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Griechische Drachme",
            "Italienische Lira",
            "Luxemburgischer Franc",
            "Finnische Mark"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Griechische Drachme."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Griechenland?",
          "o": [
            "trat der EU nach dem Ende der Militärdiktatur bei",
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "Lappland gilt als Heimatort des Weihnachtsmanns",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: trat der EU nach dem Ende der Militärdiktatur bei."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Griechenland?",
          "o": [
            "Reformer Konstantinos Karamanlis",
            "Politiker Alexander Dubček (Prager Frühling)",
            "Alcide De Gasperi (Gründervater)",
            "Walter Hallstein (erster EU-Kommissionschef)"
          ],
          "a": 0,
          "exp": "Reformer Konstantinos Karamanlis prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Irland": {
      "1": [
        {
          "q": "Gehört Irland zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Irland trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Irland der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1973",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Irland ist seit 1973 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Irland vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Irisches Pfund",
            "Italienische Lira",
            "Finnische Mark",
            "Lettischer Lats"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Irisches Pfund."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Irland?",
          "o": [
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen",
            "die Europäische Zentralbank hat ihren Sitz in Frankfurt",
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen",
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Irland?",
          "o": [
            "Kommissionspräsidenten-Kandidat Pat Cox",
            "Klimaaktivistin Greta Thunberg",
            "Jean-Claude Juncker (Kommissionschef)",
            "EU-Kommissar Erkki Liikanen"
          ],
          "a": 0,
          "exp": "Kommissionspräsidenten-Kandidat Pat Cox prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Italien": {
      "1": [
        {
          "q": "Gehört Italien zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 0,
          "exp": "Italien war 1951 bei den Gründungsmitgliedern dabei."
        },
        {
          "q": "In welchem Jahr trat Italien der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1951",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Italien ist seit 1951 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Italien vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Italienische Lira",
            "Finnische Mark",
            "Österreichischer Schilling",
            "Rumänischer Leu"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Italienische Lira."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Italien?",
          "o": [
            "die Römischen Verträge von 1957 wurden hier unterschrieben",
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen",
            "trat der EU nach dem Ende der Militärdiktatur bei",
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: die Römischen Verträge von 1957 wurden hier unterschrieben."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Italien?",
          "o": [
            "Alcide De Gasperi (Gründervater)",
            "ehemalige EU-Kommissarin Dalia Grybauskaitė",
            "Ministerpräsident Viktor Orbán",
            "Klimaaktivistin Greta Thunberg"
          ],
          "a": 0,
          "exp": "Alcide De Gasperi (Gründervater) prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Kroatien": {
      "1": [
        {
          "q": "Gehört Kroatien zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Kroatien trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Kroatien der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2013",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Kroatien ist seit 2013 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Kroatien vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Kroatische Kuna",
            "Zypern-Pfund",
            "Rumänischer Leu",
            "Belgischer Franc"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Kroatische Kuna."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Kroatien?",
          "o": [
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt",
            "die Atlantik-Inseln Azoren und Madeira gehören dazu",
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: ist das bisher jüngste Mitgliedsland der Europäischen Union."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Kroatien?",
          "o": [
            "ehemaliger Premier Zoran Milanović",
            "Außenbeauftragter Josep Borrell",
            "ehemaliger Ratspräsident Anders Fogh Rasmussen",
            "Walter Hallstein (erster EU-Kommissionschef)"
          ],
          "a": 0,
          "exp": "ehemaliger Premier Zoran Milanović prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Lettland": {
      "1": [
        {
          "q": "Gehört Lettland zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Lettland trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Lettland der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2004",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Lettland ist seit 2004 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Lettland vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Lettischer Lats",
            "Tschechische Krone",
            "Maltesische Lira",
            "Österreichischer Schilling"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Lettischer Lats."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Lettland?",
          "o": [
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "trennte sich 1993 völlig friedlich von der Tschechischen Republik"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Lettland?",
          "o": [
            "Kommissionsvizepräsident Valdis Dombrovskis",
            "Klimaaktivistin Greta Thunberg",
            "Paul-Henri Spaak (Gründervater)",
            "Kommissionspräsidenten-Kandidat Pat Cox"
          ],
          "a": 0,
          "exp": "Kommissionsvizepräsident Valdis Dombrovskis prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Litauen": {
      "1": [
        {
          "q": "Gehört Litauen zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Litauen trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Litauen der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2004",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Litauen ist seit 2004 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Litauen vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Litauischer Litas",
            "Luxemburgischer Franc",
            "Zypern-Pfund",
            "Estnische Krone"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Litauischer Litas."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Litauen?",
          "o": [
            "die Kurische Nehrung hat die größten Wanderdünen Europas",
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt",
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland",
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: die Kurische Nehrung hat die größten Wanderdünen Europas."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Litauen?",
          "o": [
            "ehemalige EU-Kommissarin Dalia Grybauskaitė",
            "Ministerpräsident Viktor Orbán",
            "Außenbeauftragte Kaja Kallas",
            "ehemaliger Ratspräsident Anders Fogh Rasmussen"
          ],
          "a": 0,
          "exp": "ehemalige EU-Kommissarin Dalia Grybauskaitė prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Luxemburg": {
      "1": [
        {
          "q": "Gehört Luxemburg zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 0,
          "exp": "Luxemburg war 1951 bei den Gründungsmitgliedern dabei."
        },
        {
          "q": "In welchem Jahr trat Luxemburg der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1951",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Luxemburg ist seit 1951 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Luxemburg vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Luxemburgischer Franc",
            "Bulgarischer Lew",
            "Italienische Lira",
            "Französischer Franc"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Luxemburgischer Franc."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Luxemburg?",
          "o": [
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet",
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas",
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "ein Viertel des Landes liegt unter dem Meeresspiegel"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Luxemburg?",
          "o": [
            "Jean-Claude Juncker (Kommissionschef)",
            "Politiker Alexander Dubček (Prager Frühling)",
            "Kommissionspräsidenten-Kandidat Pat Cox",
            "Alcide De Gasperi (Gründervater)"
          ],
          "a": 0,
          "exp": "Jean-Claude Juncker (Kommissionschef) prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Malta": {
      "1": [
        {
          "q": "Gehört Malta zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Malta trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Malta der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2004",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Malta ist seit 2004 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Malta vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Maltesische Lira",
            "Ungarischen Forint",
            "Polnischen Złoty",
            "Zypern-Pfund"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Maltesische Lira."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Malta?",
          "o": [
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU",
            "Lappland gilt als Heimatort des Weihnachtsmanns",
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: ist der flächenmäßig kleinste Mitgliedsstaat der EU."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Malta?",
          "o": [
            "EU-Kommissarin Helena Dalli",
            "Paul-Henri Spaak (Gründervater)",
            "Walter Hallstein (erster EU-Kommissionschef)",
            "Außenbeauftragte Kaja Kallas"
          ],
          "a": 0,
          "exp": "EU-Kommissarin Helena Dalli prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Niederlande": {
      "1": [
        {
          "q": "Gehört Niederlande zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 0,
          "exp": "Niederlande war 1951 bei den Gründungsmitgliedern dabei."
        },
        {
          "q": "In welchem Jahr trat Niederlande der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1951",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Niederlande ist seit 1951 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Niederlande vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Niederländischer Gulden",
            "Luxemburgischer Franc",
            "Ungarischen Forint",
            "Irisches Pfund"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Niederländischer Gulden."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Niederlande?",
          "o": [
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas",
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen",
            "hier kann man seit 2005 sicher online über das Internet wählen"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: ein Viertel des Landes liegt unter dem Meeresspiegel."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Niederlande?",
          "o": [
            "Jan Willem Beyen (Gründervater)",
            "Kanzler Franz Vranitzky (Beitrittsunterzeichner)",
            "Klimaaktivistin Greta Thunberg",
            "ehemaliger Premier Zoran Milanović"
          ],
          "a": 0,
          "exp": "Jan Willem Beyen (Gründervater) prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Österreich": {
      "1": [
        {
          "q": "Gehört Österreich zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Österreich trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Österreich der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1995",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Österreich ist seit 1995 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Österreich vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Österreichischer Schilling",
            "Dänische Krone",
            "Irisches Pfund",
            "Polnischen Złoty"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Österreichischer Schilling."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Österreich?",
          "o": [
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt",
            "Mallorca und Ibiza gehören politisch zu diesem EU-Staat",
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Österreich?",
          "o": [
            "Kanzler Franz Vranitzky (Beitrittsunterzeichner)",
            "Reformer Konstantinos Karamanlis",
            "Klimaaktivistin Greta Thunberg",
            "Ratspräsident Donald Tusk"
          ],
          "a": 0,
          "exp": "Kanzler Franz Vranitzky (Beitrittsunterzeichner) prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Polen": {
      "1": [
        {
          "q": "Gehört Polen zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Polen trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Polen der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2004",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Polen ist seit 2004 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Polen vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Polnischen Złoty",
            "Kroatische Kuna",
            "Luxemburgischer Franc",
            "Belgischer Franc"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Polnischen Złoty."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Polen?",
          "o": [
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland",
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "war das erste Land des ehemaligen Jugoslawiens, das der EU beitrat"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Polen?",
          "o": [
            "Ratspräsident Donald Tusk",
            "ehemaliger Premier Zoran Milanović",
            "Außenbeauftragter Josep Borrell",
            "Kommissionspräsidenten-Kandidat Pat Cox"
          ],
          "a": 0,
          "exp": "Ratspräsident Donald Tusk prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Portugal": {
      "1": [
        {
          "q": "Gehört Portugal zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Portugal trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Portugal der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1986",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Portugal ist seit 1986 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Portugal vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Portugiesischer Escudo",
            "Griechische Drachme",
            "Italienische Lira",
            "Slowenischer Tolar"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Portugiesischer Escudo."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Portugal?",
          "o": [
            "die Atlantik-Inseln Azoren und Madeira gehören dazu",
            "war das erste Land des ehemaligen Jugoslawiens, das der EU beitrat",
            "die Kurische Nehrung hat die größten Wanderdünen Europas",
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: die Atlantik-Inseln Azoren und Madeira gehören dazu."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Portugal?",
          "o": [
            "Kommissionschef José Manuel Barroso",
            "Politiker Alexander Dubček (Prager Frühling)",
            "Alcide De Gasperi (Gründervater)",
            "Klimaaktivistin Greta Thunberg"
          ],
          "a": 0,
          "exp": "Kommissionschef José Manuel Barroso prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Rumänien": {
      "1": [
        {
          "q": "Gehört Rumänien zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Rumänien trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Rumänien der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2007",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Rumänien ist seit 2007 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Rumänien vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Rumänischer Leu",
            "Litauischer Litas",
            "Ungarischen Forint",
            "Portugiesischer Escudo"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Rumänischer Leu."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Rumänien?",
          "o": [
            "hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt",
            "Mallorca und Ibiza gehören politisch zu diesem EU-Staat",
            "die Kurische Nehrung hat die größten Wanderdünen Europas",
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Rumänien?",
          "o": [
            "Chefunterhändler Vasile Pușcaș",
            "Finanzpolitikerin Kristalina Georgiewa",
            "ehemaliger Präsident Glafkos Klerides",
            "Ministerpräsident Viktor Orbán"
          ],
          "a": 0,
          "exp": "Chefunterhändler Vasile Pușcaș prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Schweden": {
      "1": [
        {
          "q": "Gehört Schweden zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Schweden trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Schweden der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1995",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Schweden ist seit 1995 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Schweden vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Schwedische Krone",
            "Slowenischer Tolar",
            "Irisches Pfund",
            "Ungarischen Forint"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Schwedische Krone."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Schweden?",
          "o": [
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab",
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "die historische Region Böhmen macht den Hauptteil des Landes aus"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Schweden?",
          "o": [
            "Klimaaktivistin Greta Thunberg",
            "Außenbeauftragter Josep Borrell",
            "EU-Kommissar Erkki Liikanen",
            "Walter Hallstein (erster EU-Kommissionschef)"
          ],
          "a": 0,
          "exp": "Klimaaktivistin Greta Thunberg prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Slowakei": {
      "1": [
        {
          "q": "Gehört Slowakei zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Slowakei trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Slowakei der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2004",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Slowakei ist seit 2004 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Slowakei vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Slowakische Krone",
            "Estnische Krone",
            "Lettischer Lats",
            "Irisches Pfund"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Slowakische Krone."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Slowakei?",
          "o": [
            "trennte sich 1993 völlig friedlich von der Tschechischen Republik",
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland",
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen",
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: trennte sich 1993 völlig friedlich von der Tschechischen Republik."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Slowakei?",
          "o": [
            "Politiker Alexander Dubček (Prager Frühling)",
            "EU-Kommissar Erkki Liikanen",
            "Václav Havel (erster tschechischer Präsident)",
            "Jan Willem Beyen (Gründervater)"
          ],
          "a": 0,
          "exp": "Politiker Alexander Dubček (Prager Frühling) prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Slowenien": {
      "1": [
        {
          "q": "Gehört Slowenien zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Slowenien trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Slowenien der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2004",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Slowenien ist seit 2004 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Slowenien vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Slowenischer Tolar",
            "Spanische Peseta",
            "Kroatische Kuna",
            "Niederländischer Gulden"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Slowenischer Tolar."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Slowenien?",
          "o": [
            "war das erste Land des ehemaligen Jugoslawiens, das der EU beitrat",
            "trennte sich 1993 völlig friedlich von der Tschechischen Republik",
            "Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: war das erste Land des ehemaligen Jugoslawiens, das der EU beitrat."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Slowenien?",
          "o": [
            "Präsidentin Nataša Pirc Musar",
            "Politiker Alexander Dubček (Prager Frühling)",
            "Ratspräsident Donald Tusk",
            "Jan Willem Beyen (Gründervater)"
          ],
          "a": 0,
          "exp": "Präsidentin Nataša Pirc Musar prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Spanien": {
      "1": [
        {
          "q": "Gehört Spanien zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Spanien trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Spanien der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 1986",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Spanien ist seit 1986 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Spanien vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Spanische Peseta",
            "Lettischer Lats",
            "Polnischen Złoty",
            "Finnische Mark"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Spanische Peseta."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Spanien?",
          "o": [
            "Mallorca und Ibiza gehören politisch zu diesem EU-Staat",
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: Mallorca und Ibiza gehören politisch zu diesem EU-Staat."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Spanien?",
          "o": [
            "Außenbeauftragter Josep Borrell",
            "Alcide De Gasperi (Gründervater)",
            "Chefunterhändler Vasile Pușcaș",
            "Ratspräsident Donald Tusk"
          ],
          "a": 0,
          "exp": "Außenbeauftragter Josep Borrell prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Tschechien": {
      "1": [
        {
          "q": "Gehört Tschechien zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Tschechien trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Tschechien der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2004",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Tschechien ist seit 2004 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Tschechien vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Tschechische Krone",
            "Irisches Pfund",
            "Luxemburgischer Franc",
            "Maltesische Lira"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Tschechische Krone."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Tschechien?",
          "o": [
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte",
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU",
            "die Kurische Nehrung hat die größten Wanderdünen Europas"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: die historische Region Böhmen macht den Hauptteil des Landes aus."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Tschechien?",
          "o": [
            "Václav Havel (erster tschechischer Präsident)",
            "Alcide De Gasperi (Gründervater)",
            "Politiker Alexander Dubček (Prager Frühling)",
            "Robert Schuman (EU-Gründervater)"
          ],
          "a": 0,
          "exp": "Václav Havel (erster tschechischer Präsident) prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Ungarn": {
      "1": [
        {
          "q": "Gehört Ungarn zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Ungarn trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Ungarn der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2004",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Ungarn ist seit 2004 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Ungarn vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Ungarischen Forint",
            "Spanische Peseta",
            "Bulgarischer Lew",
            "Irisches Pfund"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Ungarischen Forint."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Ungarn?",
          "o": [
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas",
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU",
            "Mallorca und Ibiza gehören politisch zu diesem EU-Staat",
            "hier kann man seit 2005 sicher online über das Internet wählen"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Ungarn?",
          "o": [
            "Ministerpräsident Viktor Orbán",
            "ehemaliger Ratspräsident Anders Fogh Rasmussen",
            "ehemaliger Präsident Glafkos Klerides",
            "ehemaliger Premier Zoran Milanović"
          ],
          "a": 0,
          "exp": "Ministerpräsident Viktor Orbán prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    },
    "Zypern": {
      "1": [
        {
          "q": "Gehört Zypern zu den 6 Gründungsmitgliedern der EU (EGKS 1951)?",
          "o": [
            "Ja, das Land ist Gründungsmitglied",
            "Nein, es trat erst viel später bei",
            "Nein, das Land gehört nicht zur EU",
            "Nur als passiver Beobachter"
          ],
          "a": 1,
          "exp": "Zypern trat erst 1973/nachfolgend der EU bei."
        },
        {
          "q": "In welchem Jahr trat Zypern der Europäischen Union (bzw. EWG/EG) offiziell bei?",
          "o": [
            "Im Jahr 2004",
            "Im Jahr 1995",
            "Im Jahr 2004",
            "Im Jahr 2013"
          ],
          "a": 0,
          "exp": "Zypern ist seit 2004 offizieller Teil der EU."
        }
      ],
      "2": [
        {
          "q": "Welche frühere Landeswährung wurde in Zypern vor dem Euro genutzt (bzw. gilt dort heute)?",
          "o": [
            "Zypern-Pfund",
            "Maltesische Lira",
            "Irisches Pfund",
            "Österreichischer Schilling"
          ],
          "a": 0,
          "exp": "Das offizielle Zahlungsmittel vor dem Euro war: Zypern-Pfund."
        },
        {
          "q": "Welcher wichtige historische Meilenstein oder Fakt prägt die EU-Mitgliedschaft von Zypern?",
          "o": [
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist",
            "die Europäische Zentralbank hat ihren Sitz in Frankfurt",
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab",
            "die Atlantik-Inseln Azoren und Madeira gehören dazu"
          ],
          "a": 0,
          "exp": "Interessanter Fakt: ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte EU-Politiker / Staatsmann oder geschichtliche Gründungsakteur stammt aus Zypern?",
          "o": [
            "ehemaliger Präsident Glafkos Klerides",
            "Alcide De Gasperi (Gründervater)",
            "EU-Kommissar Erkki Liikanen",
            "Robert Schuman (EU-Gründervater)"
          ],
          "a": 0,
          "exp": "ehemaliger Präsident Glafkos Klerides prägte die europäische Geschichte dieses Landes stark."
        },
        {
          "q": "Wie viele neue Mitgliedstaaten traten bei der großen EU-Osterweiterung im Jahr 2004 bei?",
          "o": [
            "10 Länder",
            "5 Länder",
            "15 Länder",
            "8 Länder"
          ],
          "a": 0,
          "exp": "Bei der großen Erweiterungswelle am 1. Mai 2004 traten 10 Staaten gleichzeitig bei."
        }
      ]
    }
  },
  "2": {
    "Belgien": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Belgien?",
          "o": [
            "Brüssel",
            "Sofia",
            "Warschau",
            "Lissabon"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Belgien ist Brüssel."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Belgien?",
          "o": [
            "Brüsseler Atomium",
            "Dracula-Schloss Bran",
            "historische Hauptstadt Valletta",
            "Eiffelturm in Paris"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Brüsseler Atomium liegt in Belgien."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Belgien?",
          "o": [
            "Signal de Botrange (694 Meter)",
            "Moldoveanu (2544 Meter)",
            "Großglockner (3798 Meter)",
            "Ponta do Pico (2351 Meter auf Azoren)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Signal de Botrange (694 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Belgien am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Belgien."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Belgien besonders aus?",
          "o": [
            "Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen",
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "Mallorca und Ibiza gehören politisch zu diesem EU-Staat",
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas"
          ],
          "a": 0,
          "exp": "Fakt: Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Belgien?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Bulgarien": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Bulgarien?",
          "o": [
            "Sofia",
            "Bratislava",
            "Warschau",
            "Zagreb"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Bulgarien ist Sofia."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Bulgarien?",
          "o": [
            "Rila-Kloster",
            "historische Hauptstadt Valletta",
            "Stockholmer Schloss",
            "Dracula-Schloss Bran"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Rila-Kloster liegt in Bulgarien."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Bulgarien?",
          "o": [
            "Musala (2925 Meter)",
            "Kneiff (560 Meter)",
            "Ponta do Pico (2351 Meter auf Azoren)",
            "Kékes (1014 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Musala (2925 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Bulgarien am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Bulgarien."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Bulgarien besonders aus?",
          "o": [
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt",
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte",
            "die Kurische Nehrung hat die größten Wanderdünen Europas",
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg"
          ],
          "a": 0,
          "exp": "Fakt: Lew-Währung ist fest an die D-Mark/Euro gekoppelt."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Bulgarien?",
          "o": [
            "Donau",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Dänemark": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Dänemark?",
          "o": [
            "Kopenhagen",
            "Wien",
            "Vilnius",
            "Luxemburg"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Dänemark ist Kopenhagen."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Dänemark?",
          "o": [
            "die kleine Meerjungfrau in Kopenhagen",
            "Karlsbrücke in Prag",
            "historische Altstadt von Dubrovnik",
            "Bratislavaer Burg"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen die kleine Meerjungfrau in Kopenhagen liegt in Dänemark."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Dänemark?",
          "o": [
            "Møllehøj (170 Meter)",
            "Ponta do Pico (2351 Meter auf Azoren)",
            "Olymp (1952 Meter)",
            "Kebnekaise (2096 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Møllehøj (170 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Dänemark am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Dänemark."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Dänemark besonders aus?",
          "o": [
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen",
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg"
          ],
          "a": 0,
          "exp": "Fakt: besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Dänemark?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Deutschland": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Deutschland?",
          "o": [
            "Berlin",
            "Amsterdam",
            "Valletta",
            "Budapest"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Deutschland ist Berlin."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Deutschland?",
          "o": [
            "Brandenburger Tor in Berlin",
            "Dracula-Schloss Bran",
            "schiefe Turm von Pisa",
            "historische Altstadt von Dubrovnik"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Brandenburger Tor in Berlin liegt in Deutschland."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Deutschland?",
          "o": [
            "Zugspitze (2962 Meter)",
            "Teide (3718 Meter auf Teneriffa)",
            "Kebnekaise (2096 Meter)",
            "Møllehøj (170 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Zugspitze (2962 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Deutschland am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Deutschland."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Deutschland besonders aus?",
          "o": [
            "die Europäische Zentralbank hat ihren Sitz in Frankfurt",
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU",
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen"
          ],
          "a": 0,
          "exp": "Fakt: die Europäische Zentralbank hat ihren Sitz in Frankfurt."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Deutschland?",
          "o": [
            "Rhein",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Estland": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Estland?",
          "o": [
            "Tallinn",
            "Nikosia",
            "Ljubljana",
            "Luxemburg"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Estland ist Tallinn."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Estland?",
          "o": [
            "mittelalterliche Altstadt von Tallinn",
            "Brandenburger Tor in Berlin",
            "Athener Akropolis",
            "Krakauer Wawel-Schloss"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen mittelalterliche Altstadt von Tallinn liegt in Estland."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Estland?",
          "o": [
            "Suur Munamägi (318 Meter)",
            "Olymp (1952 Meter)",
            "Ta' Dmejrek (253 Meter)",
            "Kebnekaise (2096 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Suur Munamägi (318 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Estland am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Estland."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Estland besonders aus?",
          "o": [
            "hier kann man seit 2005 sicher online über das Internet wählen",
            "die Römischen Verträge von 1957 wurden hier unterschrieben",
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland",
            "ein Viertel des Landes liegt unter dem Meeresspiegel"
          ],
          "a": 0,
          "exp": "Fakt: hier kann man seit 2005 sicher online über das Internet wählen."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Estland?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Finnland": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Finnland?",
          "o": [
            "Helsinki",
            "Lissabon",
            "Tallinn",
            "Wien"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Finnland ist Helsinki."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Finnland?",
          "o": [
            "Dom von Helsinki",
            "Krakauer Wawel-Schloss",
            "Karlsbrücke in Prag",
            "Stockholmer Schloss"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Dom von Helsinki liegt in Finnland."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Finnland?",
          "o": [
            "Haltitunturi (1324 Meter)",
            "Musala (2925 Meter)",
            "Møllehøj (170 Meter)",
            "Schneekoppe (1603 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Haltitunturi (1324 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Finnland am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Finnland."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Finnland besonders aus?",
          "o": [
            "Lappland gilt als Heimatort des Weihnachtsmanns",
            "Mallorca und Ibiza gehören politisch zu diesem EU-Staat",
            "die Römischen Verträge von 1957 wurden hier unterschrieben",
            "die Atlantik-Inseln Azoren und Madeira gehören dazu"
          ],
          "a": 0,
          "exp": "Fakt: Lappland gilt als Heimatort des Weihnachtsmanns."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Finnland?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Frankreich": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Frankreich?",
          "o": [
            "Paris",
            "Luxemburg",
            "Bukarest",
            "Vilnius"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Frankreich ist Paris."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Frankreich?",
          "o": [
            "Eiffelturm in Paris",
            "Wasserburg Trakai",
            "die kleine Meerjungfrau in Kopenhagen",
            "Rila-Kloster"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Eiffelturm in Paris liegt in Frankreich."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Frankreich?",
          "o": [
            "Mont Blanc (4807 Meter)",
            "Gaiziņkalns (311 Meter)",
            "Moldoveanu (2544 Meter)",
            "Møllehøj (170 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Mont Blanc (4807 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Frankreich am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Frankreich."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Frankreich besonders aus?",
          "o": [
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg",
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen",
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist",
            "hier kann man seit 2005 sicher online über das Internet wählen"
          ],
          "a": 0,
          "exp": "Fakt: das Europäische Parlament hat seinen Hauptsitz in Straßburg."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Frankreich?",
          "o": [
            "Rhein",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Griechenland": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Griechenland?",
          "o": [
            "Athen",
            "Brüssel",
            "Berlin",
            "Zagreb"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Griechenland ist Athen."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Griechenland?",
          "o": [
            "Athener Akropolis",
            "Sagrada Família in Barcelona",
            "Brüsseler Atomium",
            "Brandenburger Tor in Berlin"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Athener Akropolis liegt in Griechenland."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Griechenland?",
          "o": [
            "Olymp (2917 Meter)",
            "Zugspitze (2962 Meter)",
            "Musala (2925 Meter)",
            "Ponta do Pico (2351 Meter auf Azoren)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Olymp (2917 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Griechenland am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Griechenland."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Griechenland besonders aus?",
          "o": [
            "trat der EU nach dem Ende der Militärdiktatur bei",
            "die Atlantik-Inseln Azoren und Madeira gehören dazu",
            "hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt",
            "Lappland gilt als Heimatort des Weihnachtsmanns"
          ],
          "a": 0,
          "exp": "Fakt: trat der EU nach dem Ende der Militärdiktatur bei."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Griechenland?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Irland": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Irland?",
          "o": [
            "Dublin",
            "Ljubljana",
            "Athen",
            "Zagreb"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Irland ist Dublin."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Irland?",
          "o": [
            "die Klippen von Moher (Cliffs of Moher)",
            "Karlsbrücke in Prag",
            "Stockholmer Schloss",
            "Sagrada Família in Barcelona"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen die Klippen von Moher (Cliffs of Moher) liegt in Irland."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Irland?",
          "o": [
            "Carrauntoohil (1039 Meter)",
            "Gaiziņkalns (311 Meter)",
            "Rysy (2499 Meter)",
            "Teide (3718 Meter auf Teneriffa)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Carrauntoohil (1039 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Irland am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Irland."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Irland besonders aus?",
          "o": [
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen",
            "trat der EU nach dem Ende der Militärdiktatur bei",
            "die Europäische Zentralbank hat ihren Sitz in Frankfurt",
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU"
          ],
          "a": 0,
          "exp": "Fakt: muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Irland?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Italien": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Italien?",
          "o": [
            "Rom",
            "Nikosia",
            "Dublin",
            "Paris"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Italien ist Rom."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Italien?",
          "o": [
            "schiefe Turm von Pisa",
            "Rigaer Dom",
            "malerische Bleder See mit der Kircheninsel",
            "Eiffelturm in Paris"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen schiefe Turm von Pisa liegt in Italien."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Italien?",
          "o": [
            "Mont Blanc (Grenze zu Frankreich)",
            "Dinara (1831 Meter)",
            "Kebnekaise (2096 Meter)",
            "Aukštojas (294 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Mont Blanc (Grenze zu Frankreich)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Italien am besten?",
          "o": [
            "Flachland & Hügel",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Italien."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Italien besonders aus?",
          "o": [
            "die Römischen Verträge von 1957 wurden hier unterschrieben",
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg"
          ],
          "a": 0,
          "exp": "Fakt: die Römischen Verträge von 1957 wurden hier unterschrieben."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Italien?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Kroatien": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Kroatien?",
          "o": [
            "Zagreb",
            "Lissabon",
            "Berlin",
            "Paris"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Kroatien ist Zagreb."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Kroatien?",
          "o": [
            "historische Altstadt von Dubrovnik",
            "Dracula-Schloss Bran",
            "malerische Bleder See mit der Kircheninsel",
            "schiefe Turm von Pisa"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen historische Altstadt von Dubrovnik liegt in Kroatien."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Kroatien?",
          "o": [
            "Dinara (1831 Meter)",
            "Haltitunturi (1324 Meter)",
            "Aukštojas (294 Meter)",
            "Olymp (1952 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Dinara (1831 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Kroatien am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Kroatien."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Kroatien besonders aus?",
          "o": [
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen",
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist",
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab"
          ],
          "a": 0,
          "exp": "Fakt: ist das bisher jüngste Mitgliedsland der Europäischen Union."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Kroatien?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Lettland": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Lettland?",
          "o": [
            "Riga",
            "Madrid",
            "Stockholm",
            "Tallinn"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Lettland ist Riga."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Lettland?",
          "o": [
            "Rigaer Dom",
            "Kasematten von Luxemburg",
            "Stockholmer Schloss",
            "Parlamentsgebäude in Budapest"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Rigaer Dom liegt in Lettland."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Lettland?",
          "o": [
            "Gaiziņkalns (311 Meter)",
            "Gerlachovský štít (2655 Meter)",
            "Haltitunturi (1324 Meter)",
            "Kékes (1014 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Gaiziņkalns (311 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Lettland am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Lettland."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Lettland besonders aus?",
          "o": [
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt",
            "hier kann man seit 2005 sicher online über das Internet wählen",
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen",
            "trennte sich 1993 völlig friedlich von der Tschechischen Republik"
          ],
          "a": 0,
          "exp": "Fakt: die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Lettland?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Litauen": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Litauen?",
          "o": [
            "Vilnius",
            "Dublin",
            "Sofia",
            "Riga"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Litauen ist Vilnius."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Litauen?",
          "o": [
            "Wasserburg Trakai",
            "Rila-Kloster",
            "Kasematten von Luxemburg",
            "die Klippen von Moher (Cliffs of Moher)"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Wasserburg Trakai liegt in Litauen."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Litauen?",
          "o": [
            "Aukštojas (294 Meter)",
            "Mont Blanc (Grenze zu Frankreich)",
            "Moldoveanu (2544 Meter)",
            "Møllehøj (170 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Aukštojas (294 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Litauen am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Litauen."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Litauen besonders aus?",
          "o": [
            "die Kurische Nehrung hat die größten Wanderdünen Europas",
            "trennte sich 1993 völlig friedlich von der Tschechischen Republik",
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas",
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen"
          ],
          "a": 0,
          "exp": "Fakt: die Kurische Nehrung hat die größten Wanderdünen Europas."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Litauen?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Luxemburg": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Luxemburg?",
          "o": [
            "Luxemburg",
            "Kopenhagen",
            "Vilnius",
            "Brüssel"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Luxemburg ist Luxemburg."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Luxemburg?",
          "o": [
            "Kasematten von Luxemburg",
            "Brüsseler Atomium",
            "Windmühlen von Kinderdijk",
            "Dom von Helsinki"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Kasematten von Luxemburg liegt in Luxemburg."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Luxemburg?",
          "o": [
            "Kneiff (560 Meter)",
            "Olymp (2917 Meter)",
            "Haltitunturi (1324 Meter)",
            "Møllehøj (170 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Kneiff (560 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Luxemburg am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Luxemburg."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Luxemburg besonders aus?",
          "o": [
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "hier kann man seit 2005 sicher online über das Internet wählen"
          ],
          "a": 0,
          "exp": "Fakt: das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Luxemburg?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Malta": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Malta?",
          "o": [
            "Valletta",
            "Vilnius",
            "Madrid",
            "Rom"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Malta ist Valletta."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Malta?",
          "o": [
            "historische Hauptstadt Valletta",
            "Rigaer Dom",
            "historische Altstadt von Dubrovnik",
            "Parlamentsgebäude in Budapest"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen historische Hauptstadt Valletta liegt in Malta."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Malta?",
          "o": [
            "Ta' Dmejrek (253 Meter)",
            "Olymp (2917 Meter)",
            "Signal de Botrange (694 Meter)",
            "Aukštojas (294 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Ta' Dmejrek (253 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Malta am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Malta."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Malta besonders aus?",
          "o": [
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU",
            "Mallorca und Ibiza gehören politisch zu diesem EU-Staat",
            "hier kann man seit 2005 sicher online über das Internet wählen",
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas"
          ],
          "a": 0,
          "exp": "Fakt: ist der flächenmäßig kleinste Mitgliedsstaat der EU."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Malta?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Niederlande": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Niederlande?",
          "o": [
            "Amsterdam",
            "Zagreb",
            "Berlin",
            "Prag"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Niederlande ist Amsterdam."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Niederlande?",
          "o": [
            "Windmühlen von Kinderdijk",
            "Athener Akropolis",
            "Torre de Belém in Lissabon",
            "Bratislavaer Burg"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Windmühlen von Kinderdijk liegt in Niederlande."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Niederlande?",
          "o": [
            "Vaalserberg (322 Meter)",
            "Rysy (2499 Meter)",
            "Carrauntoohil (1039 Meter)",
            "Kékes (1014 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Vaalserberg (322 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Niederlande am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Niederlande."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Niederlande besonders aus?",
          "o": [
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "war das erste Land des ehemaligen Jugoslawiens, das der EU beitrat",
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt"
          ],
          "a": 0,
          "exp": "Fakt: ein Viertel des Landes liegt unter dem Meeresspiegel."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Niederlande?",
          "o": [
            "Rhein",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Österreich": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Österreich?",
          "o": [
            "Wien",
            "Amsterdam",
            "Riga",
            "Stockholm"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Österreich ist Wien."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Österreich?",
          "o": [
            "Schloss Schönbrunn in Wien",
            "Dracula-Schloss Bran",
            "Karlsbrücke in Prag",
            "Windmühlen von Kinderdijk"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Schloss Schönbrunn in Wien liegt in Österreich."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Österreich?",
          "o": [
            "Großglockner (3798 Meter)",
            "Kneiff (560 Meter)",
            "Olymp (2917 Meter)",
            "Gaiziņkalns (311 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Großglockner (3798 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Österreich am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Österreich."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Österreich besonders aus?",
          "o": [
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte",
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen",
            "Lappland gilt als Heimatort des Weihnachtsmanns",
            "trennte sich 1993 völlig friedlich von der Tschechischen Republik"
          ],
          "a": 0,
          "exp": "Fakt: war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Österreich?",
          "o": [
            "Donau",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Polen": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Polen?",
          "o": [
            "Warschau",
            "Valletta",
            "Ljubljana",
            "Lissabon"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Polen ist Warschau."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Polen?",
          "o": [
            "Krakauer Wawel-Schloss",
            "Dom von Helsinki",
            "Wasserburg Trakai",
            "Torre de Belém in Lissabon"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Krakauer Wawel-Schloss liegt in Polen."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Polen?",
          "o": [
            "Rysy (2499 Meter)",
            "Suur Munamägi (318 Meter)",
            "Kebnekaise (2096 Meter)",
            "Ta' Dmejrek (253 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Rysy (2499 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Polen am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Polen."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Polen besonders aus?",
          "o": [
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland",
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU",
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union"
          ],
          "a": 0,
          "exp": "Fakt: ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Polen?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Portugal": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Portugal?",
          "o": [
            "Lissabon",
            "Ljubljana",
            "Sofia",
            "Valletta"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Portugal ist Lissabon."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Portugal?",
          "o": [
            "Torre de Belém in Lissabon",
            "Krakauer Wawel-Schloss",
            "Rigaer Dom",
            "Bratislavaer Burg"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Torre de Belém in Lissabon liegt in Portugal."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Portugal?",
          "o": [
            "Ponta do Pico (2351 Meter auf Azoren)",
            "Olymp (1952 Meter)",
            "Vaalserberg (322 Meter)",
            "Kebnekaise (2096 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Ponta do Pico (2351 Meter auf Azoren)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Portugal am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Portugal."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Portugal besonders aus?",
          "o": [
            "die Atlantik-Inseln Azoren und Madeira gehören dazu",
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt",
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt"
          ],
          "a": 0,
          "exp": "Fakt: die Atlantik-Inseln Azoren und Madeira gehören dazu."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Portugal?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Rumänien": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Rumänien?",
          "o": [
            "Bukarest",
            "Ljubljana",
            "Berlin",
            "Rom"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Rumänien ist Bukarest."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Rumänien?",
          "o": [
            "Dracula-Schloss Bran",
            "Krakauer Wawel-Schloss",
            "Brandenburger Tor in Berlin",
            "Eiffelturm in Paris"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Dracula-Schloss Bran liegt in Rumänien."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Rumänien?",
          "o": [
            "Moldoveanu (2544 Meter)",
            "Gaiziņkalns (311 Meter)",
            "Kékes (1014 Meter)",
            "Aukštojas (294 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Moldoveanu (2544 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Rumänien am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Rumänien."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Rumänien besonders aus?",
          "o": [
            "hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt",
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt",
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland"
          ],
          "a": 0,
          "exp": "Fakt: hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Rumänien?",
          "o": [
            "Donau",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Schweden": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Schweden?",
          "o": [
            "Stockholm",
            "Madrid",
            "Bratislava",
            "Brüssel"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Schweden ist Stockholm."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Schweden?",
          "o": [
            "Stockholmer Schloss",
            "Eiffelturm in Paris",
            "Wasserburg Trakai",
            "Dom von Helsinki"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Stockholmer Schloss liegt in Schweden."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Schweden?",
          "o": [
            "Kebnekaise (2096 Meter)",
            "Signal de Botrange (694 Meter)",
            "Triglav (2864 Meter)",
            "Moldoveanu (2544 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Kebnekaise (2096 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Schweden am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Schweden."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Schweden besonders aus?",
          "o": [
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "die Kurische Nehrung hat die größten Wanderdünen Europas",
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte"
          ],
          "a": 0,
          "exp": "Fakt: die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Schweden?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Slowakei": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Slowakei?",
          "o": [
            "Bratislava",
            "Tallinn",
            "Kopenhagen",
            "Luxemburg"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Slowakei ist Bratislava."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Slowakei?",
          "o": [
            "Bratislavaer Burg",
            "Athener Akropolis",
            "Windmühlen von Kinderdijk",
            "Dom von Helsinki"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Bratislavaer Burg liegt in Slowakei."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Slowakei?",
          "o": [
            "Gerlachovský štít (2655 Meter)",
            "Teide (3718 Meter auf Teneriffa)",
            "Mont Blanc (Grenze zu Frankreich)",
            "Suur Munamägi (318 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Gerlachovský štít (2655 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Slowakei am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Slowakei."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Slowakei besonders aus?",
          "o": [
            "trennte sich 1993 völlig friedlich von der Tschechischen Republik",
            "die Römischen Verträge von 1957 wurden hier unterschrieben",
            "die Kurische Nehrung hat die größten Wanderdünen Europas",
            "die Atlantik-Inseln Azoren und Madeira gehören dazu"
          ],
          "a": 0,
          "exp": "Fakt: trennte sich 1993 völlig friedlich von der Tschechischen Republik."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Slowakei?",
          "o": [
            "Donau",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Slowenien": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Slowenien?",
          "o": [
            "Ljubljana",
            "Vilnius",
            "Lissabon",
            "Dublin"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Slowenien ist Ljubljana."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Slowenien?",
          "o": [
            "malerische Bleder See mit der Kircheninsel",
            "Stockholmer Schloss",
            "Karlsbrücke in Prag",
            "Dom von Helsinki"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen malerische Bleder See mit der Kircheninsel liegt in Slowenien."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Slowenien?",
          "o": [
            "Triglav (2864 Meter)",
            "Møllehøj (170 Meter)",
            "Carrauntoohil (1039 Meter)",
            "Olymp (1952 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Triglav (2864 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Slowenien am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Slowenien."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Slowenien besonders aus?",
          "o": [
            "war das erste Land des ehemaligen Jugoslawiens, das der EU beitrat",
            "Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen",
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte",
            "hier kann man seit 2005 sicher online über das Internet wählen"
          ],
          "a": 0,
          "exp": "Fakt: war das erste Land des ehemaligen Jugoslawiens, das der EU beitrat."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Slowenien?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Spanien": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Spanien?",
          "o": [
            "Madrid",
            "Valletta",
            "Kopenhagen",
            "Ljubljana"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Spanien ist Madrid."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Spanien?",
          "o": [
            "Sagrada Família in Barcelona",
            "die kleine Meerjungfrau in Kopenhagen",
            "malerische Bleder See mit der Kircheninsel",
            "Rigaer Dom"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Sagrada Família in Barcelona liegt in Spanien."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Spanien?",
          "o": [
            "Teide (3718 Meter auf Teneriffa)",
            "Mont Blanc (Grenze zu Frankreich)",
            "Kékes (1014 Meter)",
            "Olymp (1952 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Teide (3718 Meter auf Teneriffa)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Spanien am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Spanien."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Spanien besonders aus?",
          "o": [
            "Mallorca und Ibiza gehören politisch zu diesem EU-Staat",
            "Lappland gilt als Heimatort des Weihnachtsmanns",
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "die Kurische Nehrung hat die größten Wanderdünen Europas"
          ],
          "a": 0,
          "exp": "Fakt: Mallorca und Ibiza gehören politisch zu diesem EU-Staat."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Spanien?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Tschechien": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Tschechien?",
          "o": [
            "Prag",
            "Brüssel",
            "Warschau",
            "Rom"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Tschechien ist Prag."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Tschechien?",
          "o": [
            "Karlsbrücke in Prag",
            "Windmühlen von Kinderdijk",
            "Sagrada Família in Barcelona",
            "Bratislavaer Burg"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Karlsbrücke in Prag liegt in Tschechien."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Tschechien?",
          "o": [
            "Schneekoppe (1603 Meter)",
            "Vaalserberg (322 Meter)",
            "Gaiziņkalns (311 Meter)",
            "Mont Blanc (Grenze zu Frankreich)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Schneekoppe (1603 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Tschechien am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Tschechien."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Tschechien besonders aus?",
          "o": [
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "trat der EU nach dem Ende der Militärdiktatur bei",
            "die Atlantik-Inseln Azoren und Madeira gehören dazu",
            "Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen"
          ],
          "a": 0,
          "exp": "Fakt: die historische Region Böhmen macht den Hauptteil des Landes aus."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Tschechien?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Ungarn": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Ungarn?",
          "o": [
            "Budapest",
            "Nikosia",
            "Berlin",
            "Rom"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Ungarn ist Budapest."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Ungarn?",
          "o": [
            "Parlamentsgebäude in Budapest",
            "malerische Bleder See mit der Kircheninsel",
            "Windmühlen von Kinderdijk",
            "Torre de Belém in Lissabon"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Parlamentsgebäude in Budapest liegt in Ungarn."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Ungarn?",
          "o": [
            "Kékes (1014 Meter)",
            "Dinara (1831 Meter)",
            "Mont Blanc (Grenze zu Frankreich)",
            "Schneekoppe (1603 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Kékes (1014 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Ungarn am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Ungarn."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Ungarn besonders aus?",
          "o": [
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU",
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg"
          ],
          "a": 0,
          "exp": "Fakt: der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Ungarn?",
          "o": [
            "Donau",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    },
    "Zypern": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt von Zypern?",
          "o": [
            "Nikosia",
            "Bukarest",
            "Rom",
            "Budapest"
          ],
          "a": 0,
          "exp": "Die Hauptstadt von Zypern ist Nikosia."
        },
        {
          "q": "Welches bekannte landschaftliche oder städtische Wahrzeichen liegt in Zypern?",
          "o": [
            "Felsen der Aphrodite",
            "Windmühlen von Kinderdijk",
            "Athener Akropolis",
            "Torre de Belém in Lissabon"
          ],
          "a": 0,
          "exp": "Das Wahrzeichen Felsen der Aphrodite liegt in Zypern."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der höchste Berg bzw. Punkt in Zypern?",
          "o": [
            "Olymp (1952 Meter)",
            "Kneiff (560 Meter)",
            "Gerlachovský štít (2655 Meter)",
            "Mont Blanc (4807 Meter)"
          ],
          "a": 0,
          "exp": "Die höchste Erhebung des Landes ist Olymp (1952 Meter)."
        },
        {
          "q": "Was beschreibt die geografische Lage von Zypern am besten?",
          "o": [
            "Alpen- und Bergregionen",
            "Liegt auf einer isolierten Insel im Nordpolarmeer",
            "Hat keine europäischen Nachbarstaaten",
            "Besteht ausschließlich aus Wüstensand"
          ],
          "a": 0,
          "exp": "Die geografischen Besonderheiten prägen die Natur von Zypern."
        }
      ],
      "3": [
        {
          "q": "Welcher geografische Fakt zeichnet das Territorium von Zypern besonders aus?",
          "o": [
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist",
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet",
            "die Atlantik-Inseln Azoren und Madeira gehören dazu",
            "trennte sich 1993 völlig friedlich von der Tschechischen Republik"
          ],
          "a": 0,
          "exp": "Fakt: ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist."
        },
        {
          "q": "Welcher bekannte Fluss oder Gewässer fließt durch Zypern?",
          "o": [
            "Ostsee / Atlantik",
            "Nil",
            "Amazonas",
            "Kongo"
          ],
          "a": 0,
          "exp": "Dieses wichtige Gewässer verbindet das Land mit dem Rest Europas."
        }
      ]
    }
  },
  "3": {
    "Belgien": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Belgien?",
          "o": [
            "parlamentarische Monarchie",
            "semipräsidentielle Republik",
            "parlamentarische Republik",
            "parlamentarische Erbmonarchie"
          ],
          "a": 0,
          "exp": "Die Staatsform von Belgien ist: parlamentarische Monarchie."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Belgien?",
          "o": [
            "Föderales Parlament",
            "Abgeordnetenkammer",
            "Riigikogu",
            "Seimas"
          ],
          "a": 0,
          "exp": "Das Parlament in Belgien trägt den Namen Föderales Parlament."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Belgien gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "drei offizielle Amtssprachen",
            "Gälisch und Englisch",
            "griechische Sprache",
            "litauische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: drei offizielle Amtssprachen."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Belgien normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Paul-Henri Spaak (Gründervater)",
            "Kommissionschef José Manuel Barroso",
            "Ministerpräsident Viktor Orbán",
            "Jean-Claude Juncker (Kommissionschef)"
          ],
          "a": 0,
          "exp": "Paul-Henri Spaak (Gründervater) vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Bulgarien": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Bulgarien?",
          "o": [
            "parlamentarische Republik",
            "parlamentarische Monarchie",
            "Großherzogtum",
            "präsidiale Republik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Bulgarien ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Bulgarien?",
          "o": [
            "Nationalversammlung",
            "Generalstaaten",
            "Parlamento Italiano",
            "Saeima"
          ],
          "a": 0,
          "exp": "Das Parlament in Bulgarien trägt den Namen Nationalversammlung."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Bulgarien gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "kyrillische Schrift",
            "litauische Sprache",
            "griechische Sprache",
            "Griechisch und Türkisch"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: kyrillische Schrift."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Bulgarien normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Finanzpolitikerin Kristalina Georgiewa",
            "Alcide De Gasperi (Gründervater)",
            "Jean-Claude Juncker (Kommissionschef)",
            "Kanzler Franz Vranitzky (Beitrittsunterzeichner)"
          ],
          "a": 0,
          "exp": "Finanzpolitikerin Kristalina Georgiewa vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Dänemark": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Dänemark?",
          "o": [
            "parlamentarische Monarchie",
            "präsidiale Republik",
            "parlamentarische Republik",
            "Großherzogtum"
          ],
          "a": 0,
          "exp": "Die Staatsform von Dänemark ist: parlamentarische Monarchie."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Dänemark?",
          "o": [
            "Folketing",
            "Seimas",
            "Generalstaaten",
            "Oireachtas"
          ],
          "a": 0,
          "exp": "Das Parlament in Dänemark trägt den Namen Folketing."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Dänemark gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "dänische Sprache",
            "tschechische Sprache",
            "ungarische Sprache",
            "drei offizielle Amtssprachen"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: dänische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Dänemark normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "ehemaliger Ratspräsident Anders Fogh Rasmussen",
            "EU-Kommissarin Helena Dalli",
            "ehemaliger Premier Zoran Milanović",
            "Jan Willem Beyen (Gründervater)"
          ],
          "a": 0,
          "exp": "ehemaliger Ratspräsident Anders Fogh Rasmussen vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Deutschland": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Deutschland?",
          "o": [
            "parlamentarische Bundesrepublik",
            "parlamentarische Erbmonarchie",
            "präsidiale Republik",
            "Großherzogtum"
          ],
          "a": 0,
          "exp": "Die Staatsform von Deutschland ist: parlamentarische Bundesrepublik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Deutschland?",
          "o": [
            "Deutscher Bundestag",
            "Parlament",
            "Sejm",
            "Folketing"
          ],
          "a": 0,
          "exp": "Das Parlament in Deutschland trägt den Namen Deutscher Bundestag."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Deutschland gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "deutsche Sprache",
            "estnische Sprache",
            "lettische Sprache",
            "polnische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: deutsche Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Deutschland normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Walter Hallstein (erster EU-Kommissionschef)",
            "Ratspräsident Donald Tusk",
            "Kanzler Franz Vranitzky (Beitrittsunterzeichner)",
            "EU-Kommissarin Helena Dalli"
          ],
          "a": 0,
          "exp": "Walter Hallstein (erster EU-Kommissionschef) vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Estland": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Estland?",
          "o": [
            "parlamentarische Republik",
            "parlamentarische Erbmonarchie",
            "Großherzogtum",
            "parlamentarische Monarchie"
          ],
          "a": 0,
          "exp": "Die Staatsform von Estland ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Estland?",
          "o": [
            "Riigikogu",
            "Eduskunta",
            "Oireachtas",
            "Folketing"
          ],
          "a": 0,
          "exp": "Das Parlament in Estland trägt den Namen Riigikogu."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Estland gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "estnische Sprache",
            "ungarische Sprache",
            "litauische Sprache",
            "französische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: estnische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Estland normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Außenbeauftragte Kaja Kallas",
            "Kommissionspräsidenten-Kandidat Pat Cox",
            "Paul-Henri Spaak (Gründervater)",
            "Chefunterhändler Vasile Pușcaș"
          ],
          "a": 0,
          "exp": "Außenbeauftragte Kaja Kallas vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Finnland": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Finnland?",
          "o": [
            "parlamentarische Republik",
            "präsidiale Republik",
            "Großherzogtum",
            "semipräsidentielle Republik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Finnland ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Finnland?",
          "o": [
            "Eduskunta",
            "Riksdag",
            "Sabor",
            "Versammlung der Republik"
          ],
          "a": 0,
          "exp": "Das Parlament in Finnland trägt den Namen Eduskunta."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Finnland gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "finnische und schwedische Amtssprache",
            "drei offizielle Amtssprachen",
            "Maltesisch und Englisch",
            "griechische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: finnische und schwedische Amtssprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Finnland normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "EU-Kommissar Erkki Liikanen",
            "ehemaliger Premier Zoran Milanović",
            "ehemaliger Ratspräsident Anders Fogh Rasmussen",
            "Václav Havel (erster tschechischer Präsident)"
          ],
          "a": 0,
          "exp": "EU-Kommissar Erkki Liikanen vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Frankreich": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Frankreich?",
          "o": [
            "semipräsidentielle Republik",
            "präsidiale Republik",
            "parlamentarische Erbmonarchie",
            "parlamentarische Republik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Frankreich ist: semipräsidentielle Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Frankreich?",
          "o": [
            "Nationalversammlung",
            "Eduskunta",
            "Generalstaaten",
            "Parlamento Italiano"
          ],
          "a": 0,
          "exp": "Das Parlament in Frankreich trägt den Namen Nationalversammlung."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Frankreich gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "französische Sprache",
            "italienische Sprache",
            "rumänische Sprache",
            "Spanisch (Kastilisch) sowie Katalanisch/Galicisch/Baskisch"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: französische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Frankreich normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Robert Schuman (EU-Gründervater)",
            "Kommissionschef José Manuel Barroso",
            "Paul-Henri Spaak (Gründervater)",
            "Präsidentin Nataša Pirc Musar"
          ],
          "a": 0,
          "exp": "Robert Schuman (EU-Gründervater) vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Griechenland": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Griechenland?",
          "o": [
            "parlamentarische Republik",
            "parlamentarische Bundesrepublik",
            "parlamentarische Monarchie",
            "präsidiale Republik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Griechenland ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Griechenland?",
          "o": [
            "Parlament (Vouli)",
            "Folketing",
            "Eduskunta",
            "Sejm"
          ],
          "a": 0,
          "exp": "Das Parlament in Griechenland trägt den Namen Parlament (Vouli)."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Griechenland gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "griechische Sprache",
            "Gälisch und Englisch",
            "litauische Sprache",
            "schwedische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: griechische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Griechenland normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Reformer Konstantinos Karamanlis",
            "Paul-Henri Spaak (Gründervater)",
            "Robert Schuman (EU-Gründervater)",
            "Politiker Alexander Dubček (Prager Frühling)"
          ],
          "a": 0,
          "exp": "Reformer Konstantinos Karamanlis vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Irland": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Irland?",
          "o": [
            "parlamentarische Republik",
            "parlamentarische Erbmonarchie",
            "parlamentarische Bundesrepublik",
            "parlamentarische Monarchie"
          ],
          "a": 0,
          "exp": "Die Staatsform von Irland ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Irland?",
          "o": [
            "Oireachtas",
            "Generalstaaten",
            "Abgeordnetenhaus",
            "Föderales Parlament"
          ],
          "a": 0,
          "exp": "Das Parlament in Irland trägt den Namen Oireachtas."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Irland gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "Gälisch und Englisch",
            "slowenische Sprache",
            "griechische Sprache",
            "lettische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: Gälisch und Englisch."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Irland normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Kommissionspräsidenten-Kandidat Pat Cox",
            "Außenbeauftragte Kaja Kallas",
            "EU-Kommissarin Helena Dalli",
            "Reformer Konstantinos Karamanlis"
          ],
          "a": 0,
          "exp": "Kommissionspräsidenten-Kandidat Pat Cox vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Italien": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Italien?",
          "o": [
            "parlamentarische Republik",
            "präsidiale Republik",
            "semipräsidentielle Republik",
            "parlamentarische Erbmonarchie"
          ],
          "a": 0,
          "exp": "Die Staatsform von Italien ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Italien?",
          "o": [
            "Parlamento Italiano",
            "Nationalversammlung",
            "Seimas",
            "Riksdag"
          ],
          "a": 0,
          "exp": "Das Parlament in Italien trägt den Namen Parlamento Italiano."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Italien gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "italienische Sprache",
            "lettische Sprache",
            "portugiesische Sprache",
            "Gälisch und Englisch"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: italienische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Italien normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Alcide De Gasperi (Gründervater)",
            "Ratspräsident Donald Tusk",
            "ehemaliger Ratspräsident Anders Fogh Rasmussen",
            "Außenbeauftragter Josep Borrell"
          ],
          "a": 0,
          "exp": "Alcide De Gasperi (Gründervater) vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Kroatien": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Kroatien?",
          "o": [
            "parlamentarische Republik",
            "präsidiale Republik",
            "parlamentarische Erbmonarchie",
            "semipräsidentielle Republik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Kroatien ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Kroatien?",
          "o": [
            "Sabor",
            "Generalstaaten",
            "Parlament",
            "Saeima"
          ],
          "a": 0,
          "exp": "Das Parlament in Kroatien trägt den Namen Sabor."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Kroatien gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "kroatische Sprache",
            "finnische und schwedische Amtssprache",
            "italienische Sprache",
            "kyrillische Schrift"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: kroatische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Kroatien normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "ehemaliger Premier Zoran Milanović",
            "Alcide De Gasperi (Gründervater)",
            "Ministerpräsident Viktor Orbán",
            "Ratspräsident Donald Tusk"
          ],
          "a": 0,
          "exp": "ehemaliger Premier Zoran Milanović vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Lettland": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Lettland?",
          "o": [
            "parlamentarische Republik",
            "parlamentarische Monarchie",
            "semipräsidentielle Republik",
            "parlamentarische Bundesrepublik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Lettland ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Lettland?",
          "o": [
            "Saeima",
            "Parlament",
            "Abgeordnetenhaus",
            "Oireachtas"
          ],
          "a": 0,
          "exp": "Das Parlament in Lettland trägt den Namen Saeima."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Lettland gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "lettische Sprache",
            "kyrillische Schrift",
            "rumänische Sprache",
            "Luxemburgisch, Französisch und Deutsch"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: lettische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Lettland normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Kommissionsvizepräsident Valdis Dombrovskis",
            "Politiker Alexander Dubček (Prager Frühling)",
            "Außenbeauftragter Josep Borrell",
            "Chefunterhändler Vasile Pușcaș"
          ],
          "a": 0,
          "exp": "Kommissionsvizepräsident Valdis Dombrovskis vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Litauen": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Litauen?",
          "o": [
            "parlamentarische Republik",
            "Großherzogtum",
            "parlamentarische Monarchie",
            "präsidiale Republik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Litauen ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Litauen?",
          "o": [
            "Seimas",
            "Riksdag",
            "Abgeordnetenkammer",
            "Parlamento Italiano"
          ],
          "a": 0,
          "exp": "Das Parlament in Litauen trägt den Namen Seimas."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Litauen gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "litauische Sprache",
            "Spanisch (Kastilisch) sowie Katalanisch/Galicisch/Baskisch",
            "estnische Sprache",
            "dänische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: litauische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Litauen normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "ehemalige EU-Kommissarin Dalia Grybauskaitė",
            "Jean-Claude Juncker (Kommissionschef)",
            "Finanzpolitikerin Kristalina Georgiewa",
            "ehemaliger Premier Zoran Milanović"
          ],
          "a": 0,
          "exp": "ehemalige EU-Kommissarin Dalia Grybauskaitė vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Luxemburg": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Luxemburg?",
          "o": [
            "Großherzogtum",
            "semipräsidentielle Republik",
            "parlamentarische Monarchie",
            "parlamentarische Republik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Luxemburg ist: Großherzogtum."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Luxemburg?",
          "o": [
            "Abgeordnetenkammer",
            "Oireachtas",
            "Föderales Parlament",
            "Parlament (Vouli)"
          ],
          "a": 0,
          "exp": "Das Parlament in Luxemburg trägt den Namen Abgeordnetenkammer."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Luxemburg gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "Luxemburgisch, Französisch und Deutsch",
            "slowenische Sprache",
            "niederländische Sprache",
            "griechische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: Luxemburgisch, Französisch und Deutsch."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Luxemburg normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Jean-Claude Juncker (Kommissionschef)",
            "EU-Kommissarin Helena Dalli",
            "Kanzler Franz Vranitzky (Beitrittsunterzeichner)",
            "ehemaliger Präsident Glafkos Klerides"
          ],
          "a": 0,
          "exp": "Jean-Claude Juncker (Kommissionschef) vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Malta": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Malta?",
          "o": [
            "parlamentarische Republik",
            "parlamentarische Bundesrepublik",
            "Großherzogtum",
            "parlamentarische Monarchie"
          ],
          "a": 0,
          "exp": "Die Staatsform von Malta ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Malta?",
          "o": [
            "Repräsentantenhaus",
            "Riigikogu",
            "Eduskunta",
            "Parlamento Italiano"
          ],
          "a": 0,
          "exp": "Das Parlament in Malta trägt den Namen Repräsentantenhaus."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Malta gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "Maltesisch und Englisch",
            "niederländische Sprache",
            "drei offizielle Amtssprachen",
            "französische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: Maltesisch und Englisch."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Malta normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "EU-Kommissarin Helena Dalli",
            "Ministerpräsident Viktor Orbán",
            "Politiker Alexander Dubček (Prager Frühling)",
            "Kommissionsvizepräsident Valdis Dombrovskis"
          ],
          "a": 0,
          "exp": "EU-Kommissarin Helena Dalli vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Niederlande": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Niederlande?",
          "o": [
            "parlamentarische Monarchie",
            "parlamentarische Erbmonarchie",
            "parlamentarische Bundesrepublik",
            "semipräsidentielle Republik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Niederlande ist: parlamentarische Monarchie."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Niederlande?",
          "o": [
            "Generalstaaten",
            "Repräsentantenhaus",
            "Abgeordnetenhaus",
            "Saeima"
          ],
          "a": 0,
          "exp": "Das Parlament in Niederlande trägt den Namen Generalstaaten."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Niederlande gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "niederländische Sprache",
            "kyrillische Schrift",
            "slowenische Sprache",
            "portugiesische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: niederländische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Niederlande normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Jan Willem Beyen (Gründervater)",
            "Paul-Henri Spaak (Gründervater)",
            "Jean-Claude Juncker (Kommissionschef)",
            "Kommissionschef José Manuel Barroso"
          ],
          "a": 0,
          "exp": "Jan Willem Beyen (Gründervater) vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Österreich": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Österreich?",
          "o": [
            "parlamentarische Bundesrepublik",
            "parlamentarische Monarchie",
            "parlamentarische Erbmonarchie",
            "Großherzogtum"
          ],
          "a": 0,
          "exp": "Die Staatsform von Österreich ist: parlamentarische Bundesrepublik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Österreich?",
          "o": [
            "Nationalrat",
            "Seimas",
            "Parlament",
            "Abgeordnetenhaus"
          ],
          "a": 0,
          "exp": "Das Parlament in Österreich trägt den Namen Nationalrat."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Österreich gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "deutsche Sprache",
            "finnische und schwedische Amtssprache",
            "tschechische Sprache",
            "dänische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: deutsche Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Österreich normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Kanzler Franz Vranitzky (Beitrittsunterzeichner)",
            "Alcide De Gasperi (Gründervater)",
            "ehemalige EU-Kommissarin Dalia Grybauskaitė",
            "Kommissionsvizepräsident Valdis Dombrovskis"
          ],
          "a": 0,
          "exp": "Kanzler Franz Vranitzky (Beitrittsunterzeichner) vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Polen": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Polen?",
          "o": [
            "parlamentarische Republik",
            "semipräsidentielle Republik",
            "parlamentarische Erbmonarchie",
            "präsidiale Republik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Polen ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Polen?",
          "o": [
            "Sejm",
            "Parlamento Italiano",
            "Parlament",
            "Saeima"
          ],
          "a": 0,
          "exp": "Das Parlament in Polen trägt den Namen Sejm."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Polen gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "polnische Sprache",
            "litauische Sprache",
            "estnische Sprache",
            "tschechische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: polnische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Polen normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Ratspräsident Donald Tusk",
            "Außenbeauftragter Josep Borrell",
            "Klimaaktivistin Greta Thunberg",
            "Alcide De Gasperi (Gründervater)"
          ],
          "a": 0,
          "exp": "Ratspräsident Donald Tusk vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Portugal": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Portugal?",
          "o": [
            "semipräsidentielle Republik",
            "präsidiale Republik",
            "Großherzogtum",
            "parlamentarische Erbmonarchie"
          ],
          "a": 0,
          "exp": "Die Staatsform von Portugal ist: semipräsidentielle Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Portugal?",
          "o": [
            "Versammlung der Republik",
            "Eduskunta",
            "Saeima",
            "Parlament (Vouli)"
          ],
          "a": 0,
          "exp": "Das Parlament in Portugal trägt den Namen Versammlung der Republik."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Portugal gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "portugiesische Sprache",
            "lettische Sprache",
            "deutsche Sprache",
            "schwedische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: portugiesische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Portugal normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Kommissionschef José Manuel Barroso",
            "EU-Kommissarin Helena Dalli",
            "Außenbeauftragter Josep Borrell",
            "Robert Schuman (EU-Gründervater)"
          ],
          "a": 0,
          "exp": "Kommissionschef José Manuel Barroso vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Rumänien": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Rumänien?",
          "o": [
            "semipräsidentielle Republik",
            "parlamentarische Monarchie",
            "parlamentarische Republik",
            "parlamentarische Bundesrepublik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Rumänien ist: semipräsidentielle Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Rumänien?",
          "o": [
            "Parlament",
            "Deutscher Bundestag",
            "Repräsentantenhaus",
            "Föderales Parlament"
          ],
          "a": 0,
          "exp": "Das Parlament in Rumänien trägt den Namen Parlament."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Rumänien gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "rumänische Sprache",
            "griechische Sprache",
            "schwedische Sprache",
            "ungarische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: rumänische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Rumänien normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Chefunterhändler Vasile Pușcaș",
            "Außenbeauftragte Kaja Kallas",
            "Finanzpolitikerin Kristalina Georgiewa",
            "Politiker Alexander Dubček (Prager Frühling)"
          ],
          "a": 0,
          "exp": "Chefunterhändler Vasile Pușcaș vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Schweden": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Schweden?",
          "o": [
            "parlamentarische Monarchie",
            "parlamentarische Bundesrepublik",
            "parlamentarische Republik",
            "parlamentarische Erbmonarchie"
          ],
          "a": 0,
          "exp": "Die Staatsform von Schweden ist: parlamentarische Monarchie."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Schweden?",
          "o": [
            "Riksdag",
            "Versammlung der Republik",
            "Abgeordnetenkammer",
            "Folketing"
          ],
          "a": 0,
          "exp": "Das Parlament in Schweden trägt den Namen Riksdag."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Schweden gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "schwedische Sprache",
            "deutsche Sprache",
            "drei offizielle Amtssprachen",
            "niederländische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: schwedische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Schweden normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Klimaaktivistin Greta Thunberg",
            "Außenbeauftragter Josep Borrell",
            "Paul-Henri Spaak (Gründervater)",
            "Finanzpolitikerin Kristalina Georgiewa"
          ],
          "a": 0,
          "exp": "Klimaaktivistin Greta Thunberg vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Slowakei": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Slowakei?",
          "o": [
            "parlamentarische Republik",
            "Großherzogtum",
            "parlamentarische Monarchie",
            "parlamentarische Bundesrepublik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Slowakei ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Slowakei?",
          "o": [
            "Nationalrat",
            "Abgeordnetenhaus",
            "Seimas",
            "Sejm"
          ],
          "a": 0,
          "exp": "Das Parlament in Slowakei trägt den Namen Nationalrat."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Slowakei gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "slowakische Sprache",
            "Griechisch und Türkisch",
            "schwedische Sprache",
            "Maltesisch und Englisch"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: slowakische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Slowakei normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Politiker Alexander Dubček (Prager Frühling)",
            "ehemaliger Premier Zoran Milanović",
            "Ministerpräsident Viktor Orbán",
            "ehemaliger Ratspräsident Anders Fogh Rasmussen"
          ],
          "a": 0,
          "exp": "Politiker Alexander Dubček (Prager Frühling) vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Slowenien": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Slowenien?",
          "o": [
            "parlamentarische Republik",
            "Großherzogtum",
            "semipräsidentielle Republik",
            "parlamentarische Monarchie"
          ],
          "a": 0,
          "exp": "Die Staatsform von Slowenien ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Slowenien?",
          "o": [
            "Nationalversammlung",
            "Repräsentantenhaus",
            "Parlamento Italiano",
            "Abgeordnetenkammer"
          ],
          "a": 0,
          "exp": "Das Parlament in Slowenien trägt den Namen Nationalversammlung."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Slowenien gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "slowenische Sprache",
            "Spanisch (Kastilisch) sowie Katalanisch/Galicisch/Baskisch",
            "tschechische Sprache",
            "portugiesische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: slowenische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Slowenien normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Präsidentin Nataša Pirc Musar",
            "Jan Willem Beyen (Gründervater)",
            "ehemaliger Präsident Glafkos Klerides",
            "Klimaaktivistin Greta Thunberg"
          ],
          "a": 0,
          "exp": "Präsidentin Nataša Pirc Musar vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Spanien": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Spanien?",
          "o": [
            "parlamentarische Erbmonarchie",
            "parlamentarische Bundesrepublik",
            "parlamentarische Monarchie",
            "präsidiale Republik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Spanien ist: parlamentarische Erbmonarchie."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Spanien?",
          "o": [
            "Cortes Generales",
            "Saeima",
            "Generalstaaten",
            "Riksdag"
          ],
          "a": 0,
          "exp": "Das Parlament in Spanien trägt den Namen Cortes Generales."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Spanien gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "Spanisch (Kastilisch) sowie Katalanisch/Galicisch/Baskisch",
            "Luxemburgisch, Französisch und Deutsch",
            "finnische und schwedische Amtssprache",
            "schwedische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: Spanisch (Kastilisch) sowie Katalanisch/Galicisch/Baskisch."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Spanien normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Außenbeauftragter Josep Borrell",
            "Paul-Henri Spaak (Gründervater)",
            "Kommissionspräsidenten-Kandidat Pat Cox",
            "EU-Kommissar Erkki Liikanen"
          ],
          "a": 0,
          "exp": "Außenbeauftragter Josep Borrell vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Tschechien": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Tschechien?",
          "o": [
            "parlamentarische Republik",
            "Großherzogtum",
            "parlamentarische Monarchie",
            "semipräsidentielle Republik"
          ],
          "a": 0,
          "exp": "Die Staatsform von Tschechien ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Tschechien?",
          "o": [
            "Abgeordnetenhaus",
            "Parlament (Vouli)",
            "Parlament",
            "Nationalrat"
          ],
          "a": 0,
          "exp": "Das Parlament in Tschechien trägt den Namen Abgeordnetenhaus."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Tschechien gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "tschechische Sprache",
            "schwedische Sprache",
            "rumänische Sprache",
            "kyrillische Schrift"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: tschechische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Tschechien normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Václav Havel (erster tschechischer Präsident)",
            "ehemaliger Präsident Glafkos Klerides",
            "Politiker Alexander Dubček (Prager Frühling)",
            "Präsidentin Nataša Pirc Musar"
          ],
          "a": 0,
          "exp": "Václav Havel (erster tschechischer Präsident) vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Ungarn": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Ungarn?",
          "o": [
            "parlamentarische Republik",
            "parlamentarische Bundesrepublik",
            "Großherzogtum",
            "parlamentarische Monarchie"
          ],
          "a": 0,
          "exp": "Die Staatsform von Ungarn ist: parlamentarische Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Ungarn?",
          "o": [
            "Nationalversammlung",
            "Versammlung der Republik",
            "Abgeordnetenkammer",
            "Deutscher Bundestag"
          ],
          "a": 0,
          "exp": "Das Parlament in Ungarn trägt den Namen Nationalversammlung."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Ungarn gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "ungarische Sprache",
            "schwedische Sprache",
            "drei offizielle Amtssprachen",
            "deutsche Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: ungarische Sprache."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Ungarn normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "Ministerpräsident Viktor Orbán",
            "Walter Hallstein (erster EU-Kommissionschef)",
            "Außenbeauftragter Josep Borrell",
            "EU-Kommissarin Helena Dalli"
          ],
          "a": 0,
          "exp": "Ministerpräsident Viktor Orbán vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    },
    "Zypern": {
      "1": [
        {
          "q": "Welche Regierungsform bzw. Staatsform hat Zypern?",
          "o": [
            "präsidiale Republik",
            "semipräsidentielle Republik",
            "parlamentarische Monarchie",
            "parlamentarische Erbmonarchie"
          ],
          "a": 0,
          "exp": "Die Staatsform von Zypern ist: präsidiale Republik."
        },
        {
          "q": "Wie heißt die parlamentarische Vertretung (das Parlament) von Zypern?",
          "o": [
            "Repräsentantenhaus",
            "Eduskunta",
            "Sabor",
            "Parlamento Italiano"
          ],
          "a": 0,
          "exp": "Das Parlament in Zypern trägt den Namen Repräsentantenhaus."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Sprache wird in Zypern gesprochen (bzw. welche Schrift wird dort genutzt)?",
          "o": [
            "Griechisch und Türkisch",
            "französische Sprache",
            "slowenische Sprache",
            "lettische Sprache"
          ],
          "a": 0,
          "exp": "Offiziell gilt dort: Griechisch und Türkisch."
        },
        {
          "q": "Wie oft finden die Europawahlen statt, um Abgeordnete nach Straßburg und Brüssel zu schicken?",
          "o": [
            "Alle 5 Jahre",
            "Alle 3 Jahre",
            "Alle 4 Jahre",
            "Alle 6 Jahre"
          ],
          "a": 0,
          "exp": "In allen EU-Mitgliedsstaaten wird das Europäische Parlament alle 5 Jahre neu gewählt."
        }
      ],
      "3": [
        {
          "q": "Wer vertritt Zypern normalerweise bei den regelmäßigen Treffen der Staats- und Regierungschefs (Europäischer Rat)?",
          "o": [
            "Der Premierminister / Bundeskanzler (oder Staatspräsident)",
            "Der regierende König",
            "Der Finanzminister des Landes",
            "Der Präsident des nationalen Parlaments"
          ],
          "a": 0,
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs der 27 EU-Staaten."
        },
        {
          "q": "Welche politische Person des Landes übernahm wichtige Aufgaben in der EU-Politik?",
          "o": [
            "ehemaliger Präsident Glafkos Klerides",
            "EU-Kommissar Erkki Liikanen",
            "Kommissionspräsidenten-Kandidat Pat Cox",
            "Finanzpolitikerin Kristalina Georgiewa"
          ],
          "a": 0,
          "exp": "ehemaliger Präsident Glafkos Klerides vertritt oder vertrat das Land auf höchster europäischer Ebene."
        }
      ]
    }
  },
  "4": {
    "Belgien": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Belgien bekannt?",
          "o": [
            "belgische Waffeln",
            "Mămăligă (Maisbrei)",
            "Ćevapčići & dalmatinischer Schinken",
            "Baguette & Croissants"
          ],
          "a": 0,
          "exp": "belgische Waffeln ist ein bekanntes Nationalgericht von Belgien."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Belgien?",
          "o": [
            "Zeichner Peyo (Erfinder der Schlümpfe)",
            "Radprofi Tadej Pogačar",
            "Physiker Nikola Tesla",
            "Philosoph Sokrates"
          ],
          "a": 0,
          "exp": "Zeichner Peyo (Erfinder der Schlümpfe) ist weltberühmt und stammt aus Belgien."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Belgien?",
          "o": [
            "Tim & Struppi kommen aus Belgien",
            "Marteniza-Puppen (rot-weiß) als Frühlingsgruß",
            "die Legende, dass Aphrodite hier dem Schaum des Meeres entstieg",
            "das sommerliche Midsommar-Fest"
          ],
          "a": 0,
          "exp": "Typisch Belgien: Tim & Struppi kommen aus Belgien."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Belgien hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Belgien aus?",
          "o": [
            "Brüsseler Atomium",
            "Dracula-Schloss Bran",
            "historische Hauptstadt Valletta",
            "Eiffelturm in Paris"
          ],
          "a": 0,
          "exp": "Brüsseler Atomium gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Belgien?",
          "o": [
            "Zeichner Peyo (Erfinder der Schlümpfe)",
            "Radprofi Tadej Pogačar",
            "Physiker Nikola Tesla",
            "Philosoph Sokrates"
          ],
          "a": 0,
          "exp": "Zeichner Peyo (Erfinder der Schlümpfe) ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Bulgarien": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Bulgarien bekannt?",
          "o": [
            "bulgarischer Joghurt",
            "Pastéis de Nata (Puddingtörtchen)",
            "marinierter Hering",
            "Cepelinai (Kartoffelklöße)"
          ],
          "a": 0,
          "exp": "bulgarischer Joghurt ist ein bekanntes Nationalgericht von Bulgarien."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Bulgarien?",
          "o": [
            "Verpackungskünstler Christo",
            "General Milan Rastislav Štefánik",
            "Erfinder Ernő Rubik",
            "Popgruppe ABBA"
          ],
          "a": 0,
          "exp": "Verpackungskünstler Christo ist weltberühmt und stammt aus Bulgarien."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Bulgarien?",
          "o": [
            "Marteniza-Puppen (rot-weiß) als Frühlingsgruß",
            "die traditionellen bunten Luzzu-Fischerboote",
            "das Donaudelta als Naturparadies",
            "Millionen Fahrräder auf eigenen Radwegen"
          ],
          "a": 0,
          "exp": "Typisch Bulgarien: Marteniza-Puppen (rot-weiß) als Frühlingsgruß."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Bulgarien hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Bulgarien aus?",
          "o": [
            "Rila-Kloster",
            "historische Hauptstadt Valletta",
            "Stockholmer Schloss",
            "Dracula-Schloss Bran"
          ],
          "a": 0,
          "exp": "Rila-Kloster gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Bulgarien?",
          "o": [
            "Verpackungskünstler Christo",
            "General Milan Rastislav Štefánik",
            "Erfinder Ernő Rubik",
            "Popgruppe ABBA"
          ],
          "a": 0,
          "exp": "Verpackungskünstler Christo ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Dänemark": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Dänemark bekannt?",
          "o": [
            "Smørrebrød",
            "Irish Stew",
            "belgische Waffeln",
            "Pizza & Pasta"
          ],
          "a": 0,
          "exp": "Smørrebrød ist ein bekanntes Nationalgericht von Dänemark."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Dänemark?",
          "o": [
            "Hans Christian Andersen",
            "Physiker Nikola Tesla",
            "General Milan Rastislav Štefánik",
            "Maler Vincent van Gogh"
          ],
          "a": 0,
          "exp": "Hans Christian Andersen ist weltberühmt und stammt aus Dänemark."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Dänemark?",
          "o": [
            "das dänische Wort 'Hygge' für Gemütlichkeit",
            "die finnische Sauna gehört zum Alltag",
            "das Baguette wurde zum UNESCO-Weltkulturerbe erklärt",
            "das Prager Marionettentheater"
          ],
          "a": 0,
          "exp": "Typisch Dänemark: das dänische Wort 'Hygge' für Gemütlichkeit."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Dänemark hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Dänemark aus?",
          "o": [
            "die kleine Meerjungfrau in Kopenhagen",
            "Karlsbrücke in Prag",
            "historische Altstadt von Dubrovnik",
            "Bratislavaer Burg"
          ],
          "a": 0,
          "exp": "die kleine Meerjungfrau in Kopenhagen gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Dänemark?",
          "o": [
            "Hans Christian Andersen",
            "Physiker Nikola Tesla",
            "General Milan Rastislav Štefánik",
            "Maler Vincent van Gogh"
          ],
          "a": 0,
          "exp": "Hans Christian Andersen ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Deutschland": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Deutschland bekannt?",
          "o": [
            "Currywurst & Brezeln",
            "Graue Erbsen mit Speck",
            "Pierogi (Teigtaschen)",
            "Bryndzové halušky (Schafskäse-Nockerl)"
          ],
          "a": 0,
          "exp": "Currywurst & Brezeln ist ein bekanntes Nationalgericht von Deutschland."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Deutschland?",
          "o": [
            "Komponist Ludwig van Beethoven",
            "Tove Jansson (Erfinderin der Mumins)",
            "Kaiser Napoleon Bonaparte",
            "Maler Vincent van Gogh"
          ],
          "a": 0,
          "exp": "Komponist Ludwig van Beethoven ist weltberühmt und stammt aus Deutschland."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Deutschland?",
          "o": [
            "das Oktoberfest in München",
            "die Legende, dass Aphrodite hier dem Schaum des Meeres entstieg",
            "Marteniza-Puppen (rot-weiß) als Frühlingsgruß",
            "das dänische Wort 'Hygge' für Gemütlichkeit"
          ],
          "a": 0,
          "exp": "Typisch Deutschland: das Oktoberfest in München."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Deutschland hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Deutschland aus?",
          "o": [
            "Brandenburger Tor in Berlin",
            "Dracula-Schloss Bran",
            "schiefe Turm von Pisa",
            "historische Altstadt von Dubrovnik"
          ],
          "a": 0,
          "exp": "Brandenburger Tor in Berlin gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Deutschland?",
          "o": [
            "Komponist Ludwig van Beethoven",
            "Tove Jansson (Erfinderin der Mumins)",
            "Kaiser Napoleon Bonaparte",
            "Maler Vincent van Gogh"
          ],
          "a": 0,
          "exp": "Komponist Ludwig van Beethoven ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Estland": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Estland bekannt?",
          "o": [
            "marinierter Hering",
            "bulgarischer Joghurt",
            "Halloumi-Grillkäse",
            "Potica (Hefekuchen)"
          ],
          "a": 0,
          "exp": "marinierter Hering ist ein bekanntes Nationalgericht von Estland."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Estland?",
          "o": [
            "Komponist Arvo Pärt",
            "Kaiser Napoleon Bonaparte",
            "Radprofi Tadej Pogačar",
            "Band U2 (Sänger Bono)"
          ],
          "a": 0,
          "exp": "Komponist Arvo Pärt ist weltberühmt und stammt aus Estland."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Estland?",
          "o": [
            "das gigantische Liederfest Laulupidu",
            "die weißen Lipizzaner-Pferde stammen ursprünglich aus Lipica",
            "das Neujahrskonzert der Wiener Philharmoniker",
            "der mystische Berg der Kreuze (Kryžių kalnas)"
          ],
          "a": 0,
          "exp": "Typisch Estland: das gigantische Liederfest Laulupidu."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Estland hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Estland aus?",
          "o": [
            "mittelalterliche Altstadt von Tallinn",
            "Brandenburger Tor in Berlin",
            "Athener Akropolis",
            "Krakauer Wawel-Schloss"
          ],
          "a": 0,
          "exp": "mittelalterliche Altstadt von Tallinn gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Estland?",
          "o": [
            "Komponist Arvo Pärt",
            "Kaiser Napoleon Bonaparte",
            "Radprofi Tadej Pogačar",
            "Band U2 (Sänger Bono)"
          ],
          "a": 0,
          "exp": "Komponist Arvo Pärt ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Finnland": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Finnland bekannt?",
          "o": [
            "karelische Piroggen",
            "Graue Erbsen mit Speck",
            "Baguette & Croissants",
            "Irish Stew"
          ],
          "a": 0,
          "exp": "karelische Piroggen ist ein bekanntes Nationalgericht von Finnland."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Finnland?",
          "o": [
            "Tove Jansson (Erfinderin der Mumins)",
            "Schriftsteller Franz Kafka",
            "Hans Christian Andersen",
            "Tennisprofi Marcos Baghdatis"
          ],
          "a": 0,
          "exp": "Tove Jansson (Erfinderin der Mumins) ist weltberühmt und stammt aus Finnland."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Finnland?",
          "o": [
            "die finnische Sauna gehört zum Alltag",
            "das Neujahrskonzert der Wiener Philharmoniker",
            "das dänische Wort 'Hygge' für Gemütlichkeit",
            "der slowakische Robin Hood Juraj Jánošík"
          ],
          "a": 0,
          "exp": "Typisch Finnland: die finnische Sauna gehört zum Alltag."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Finnland hauptsächlich?",
          "o": [
            "Rot, Blau und Weiß",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Finnland aus?",
          "o": [
            "Dom von Helsinki",
            "Krakauer Wawel-Schloss",
            "Karlsbrücke in Prag",
            "Stockholmer Schloss"
          ],
          "a": 0,
          "exp": "Dom von Helsinki gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Finnland?",
          "o": [
            "Tove Jansson (Erfinderin der Mumins)",
            "Schriftsteller Franz Kafka",
            "Hans Christian Andersen",
            "Tennisprofi Marcos Baghdatis"
          ],
          "a": 0,
          "exp": "Tove Jansson (Erfinderin der Mumins) ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Frankreich": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Frankreich bekannt?",
          "o": [
            "Baguette & Croissants",
            "Feta & Tzatziki",
            "Currywurst & Brezeln",
            "Wiener Schnitzel & Sachertorte"
          ],
          "a": 0,
          "exp": "Baguette & Croissants ist ein bekanntes Nationalgericht von Frankreich."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Frankreich?",
          "o": [
            "Kaiser Napoleon Bonaparte",
            "Komponist Ludwig van Beethoven",
            "General Milan Rastislav Štefánik",
            "Hans Christian Andersen"
          ],
          "a": 0,
          "exp": "Kaiser Napoleon Bonaparte ist weltberühmt und stammt aus Frankreich."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Frankreich?",
          "o": [
            "das Baguette wurde zum UNESCO-Weltkulturerbe erklärt",
            "Marteniza-Puppen (rot-weiß) als Frühlingsgruß",
            "das Donaudelta als Naturparadies",
            "das sommerliche Midsommar-Fest"
          ],
          "a": 0,
          "exp": "Typisch Frankreich: das Baguette wurde zum UNESCO-Weltkulturerbe erklärt."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Frankreich hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Frankreich aus?",
          "o": [
            "Eiffelturm in Paris",
            "Wasserburg Trakai",
            "die kleine Meerjungfrau in Kopenhagen",
            "Rila-Kloster"
          ],
          "a": 0,
          "exp": "Eiffelturm in Paris gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Frankreich?",
          "o": [
            "Kaiser Napoleon Bonaparte",
            "Komponist Ludwig van Beethoven",
            "General Milan Rastislav Štefánik",
            "Hans Christian Andersen"
          ],
          "a": 0,
          "exp": "Kaiser Napoleon Bonaparte ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Griechenland": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Griechenland bekannt?",
          "o": [
            "Feta & Tzatziki",
            "Pizza & Pasta",
            "Graue Erbsen mit Speck",
            "Köttbullar & Zimtschnecken"
          ],
          "a": 0,
          "exp": "Feta & Tzatziki ist ein bekanntes Nationalgericht von Griechenland."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Griechenland?",
          "o": [
            "Philosoph Sokrates",
            "Entdecker Vasco da Gama",
            "Erfinder Ernő Rubik",
            "Hans Christian Andersen"
          ],
          "a": 0,
          "exp": "Philosoph Sokrates ist weltberühmt und stammt aus Griechenland."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Griechenland?",
          "o": [
            "die Olympischen Spiele der Antike",
            "das dänische Wort 'Hygge' für Gemütlichkeit",
            "das Neujahrskonzert der Wiener Philharmoniker",
            "die Wichtel-Statuen in Breslau (Wrocław)"
          ],
          "a": 0,
          "exp": "Typisch Griechenland: die Olympischen Spiele der Antike."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Griechenland hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Griechenland aus?",
          "o": [
            "Athener Akropolis",
            "Sagrada Família in Barcelona",
            "Brüsseler Atomium",
            "Brandenburger Tor in Berlin"
          ],
          "a": 0,
          "exp": "Athener Akropolis gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Griechenland?",
          "o": [
            "Philosoph Sokrates",
            "Entdecker Vasco da Gama",
            "Erfinder Ernő Rubik",
            "Hans Christian Andersen"
          ],
          "a": 0,
          "exp": "Philosoph Sokrates ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Irland": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Irland bekannt?",
          "o": [
            "Irish Stew",
            "Pizza & Pasta",
            "Feta & Tzatziki",
            "Cepelinai (Kartoffelklöße)"
          ],
          "a": 0,
          "exp": "Irish Stew ist ein bekanntes Nationalgericht von Irland."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Irland?",
          "o": [
            "Band U2 (Sänger Bono)",
            "Tove Jansson (Erfinderin der Mumins)",
            "Hans Christian Andersen",
            "Parlamentspräsidentin Roberta Metsola"
          ],
          "a": 0,
          "exp": "Band U2 (Sänger Bono) ist weltberühmt und stammt aus Irland."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Irland?",
          "o": [
            "der grüne Saint Patrick's Day am 17. März",
            "die Olympischen Spiele der Antike",
            "die traditionellen bunten Luzzu-Fischerboote",
            "das dänische Wort 'Hygge' für Gemütlichkeit"
          ],
          "a": 0,
          "exp": "Typisch Irland: der grüne Saint Patrick's Day am 17. März."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Irland hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Irland aus?",
          "o": [
            "die Klippen von Moher (Cliffs of Moher)",
            "Karlsbrücke in Prag",
            "Stockholmer Schloss",
            "Sagrada Família in Barcelona"
          ],
          "a": 0,
          "exp": "die Klippen von Moher (Cliffs of Moher) gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Irland?",
          "o": [
            "Band U2 (Sänger Bono)",
            "Tove Jansson (Erfinderin der Mumins)",
            "Hans Christian Andersen",
            "Parlamentspräsidentin Roberta Metsola"
          ],
          "a": 0,
          "exp": "Band U2 (Sänger Bono) ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Italien": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Italien bekannt?",
          "o": [
            "Pizza & Pasta",
            "Feta & Tzatziki",
            "Pastizzi (Blätterteigtaschen)",
            "Judd mat Gaardebounen (Schweinefleisch)"
          ],
          "a": 0,
          "exp": "Pizza & Pasta ist ein bekanntes Nationalgericht von Italien."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Italien?",
          "o": [
            "Maler & Erfinder Leonardo da Vinci",
            "Komponist Arvo Pärt",
            "Entdecker Vasco da Gama",
            "Tove Jansson (Erfinderin der Mumins)"
          ],
          "a": 0,
          "exp": "Maler & Erfinder Leonardo da Vinci ist weltberühmt und stammt aus Italien."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Italien?",
          "o": [
            "die Gondeln in Venedig",
            "das Oktoberfest in München",
            "das lettische Lieder- und Tanzfest",
            "das Donaudelta als Naturparadies"
          ],
          "a": 0,
          "exp": "Typisch Italien: die Gondeln in Venedig."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Italien hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Italien aus?",
          "o": [
            "schiefe Turm von Pisa",
            "Rigaer Dom",
            "malerische Bleder See mit der Kircheninsel",
            "Eiffelturm in Paris"
          ],
          "a": 0,
          "exp": "schiefe Turm von Pisa gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Italien?",
          "o": [
            "Maler & Erfinder Leonardo da Vinci",
            "Komponist Arvo Pärt",
            "Entdecker Vasco da Gama",
            "Tove Jansson (Erfinderin der Mumins)"
          ],
          "a": 0,
          "exp": "Maler & Erfinder Leonardo da Vinci ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Kroatien": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Kroatien bekannt?",
          "o": [
            "Ćevapčići & dalmatinischer Schinken",
            "Feta & Tzatziki",
            "Potica (Hefekuchen)",
            "Pierogi (Teigtaschen)"
          ],
          "a": 0,
          "exp": "Ćevapčići & dalmatinischer Schinken ist ein bekanntes Nationalgericht von Kroatien."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Kroatien?",
          "o": [
            "Physiker Nikola Tesla",
            "Komponist Wolfgang Amadeus Mozart",
            "Schriftsteller Franz Kafka",
            "Erfinder Ernő Rubik"
          ],
          "a": 0,
          "exp": "Physiker Nikola Tesla ist weltberühmt und stammt aus Kroatien."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Kroatien?",
          "o": [
            "die gepunkteten Dalmatiner-Hunde stammen von hier",
            "Millionen Fahrräder auf eigenen Radwegen",
            "die finnische Sauna gehört zum Alltag",
            "die Wichtel-Statuen in Breslau (Wrocław)"
          ],
          "a": 0,
          "exp": "Typisch Kroatien: die gepunkteten Dalmatiner-Hunde stammen von hier."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Kroatien hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Kroatien aus?",
          "o": [
            "historische Altstadt von Dubrovnik",
            "Dracula-Schloss Bran",
            "malerische Bleder See mit der Kircheninsel",
            "schiefe Turm von Pisa"
          ],
          "a": 0,
          "exp": "historische Altstadt von Dubrovnik gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Kroatien?",
          "o": [
            "Physiker Nikola Tesla",
            "Komponist Wolfgang Amadeus Mozart",
            "Schriftsteller Franz Kafka",
            "Erfinder Ernő Rubik"
          ],
          "a": 0,
          "exp": "Physiker Nikola Tesla ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Lettland": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Lettland bekannt?",
          "o": [
            "Graue Erbsen mit Speck",
            "bulgarischer Joghurt",
            "Köttbullar & Zimtschnecken",
            "Gouda-Käse & Stroopwafels"
          ],
          "a": 0,
          "exp": "Graue Erbsen mit Speck ist ein bekanntes Nationalgericht von Lettland."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Lettland?",
          "o": [
            "Dirigent Mariss Jansons",
            "Popgruppe ABBA",
            "Bildhauer Constantin Brâncuși",
            "Zeichner Peyo (Erfinder der Schlümpfe)"
          ],
          "a": 0,
          "exp": "Dirigent Mariss Jansons ist weltberühmt und stammt aus Lettland."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Lettland?",
          "o": [
            "das lettische Lieder- und Tanzfest",
            "Millionen Fahrräder auf eigenen Radwegen",
            "das dänische Wort 'Hygge' für Gemütlichkeit",
            "der traditionelle Fado-Gesang"
          ],
          "a": 0,
          "exp": "Typisch Lettland: das lettische Lieder- und Tanzfest."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Lettland hauptsächlich?",
          "o": [
            "Rot, Blau und Weiß",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Lettland aus?",
          "o": [
            "Rigaer Dom",
            "Kasematten von Luxemburg",
            "Stockholmer Schloss",
            "Parlamentsgebäude in Budapest"
          ],
          "a": 0,
          "exp": "Rigaer Dom gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Lettland?",
          "o": [
            "Dirigent Mariss Jansons",
            "Popgruppe ABBA",
            "Bildhauer Constantin Brâncuși",
            "Zeichner Peyo (Erfinder der Schlümpfe)"
          ],
          "a": 0,
          "exp": "Dirigent Mariss Jansons ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Litauen": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Litauen bekannt?",
          "o": [
            "Cepelinai (Kartoffelklöße)",
            "marinierter Hering",
            "Gulaschsuppe",
            "Knödel & Gulasch"
          ],
          "a": 0,
          "exp": "Cepelinai (Kartoffelklöße) ist ein bekanntes Nationalgericht von Litauen."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Litauen?",
          "o": [
            "Basketballer Jonas Valančiūnas",
            "Philosoph Sokrates",
            "Tennisstar Rafael Nadal",
            "Entdecker Vasco da Gama"
          ],
          "a": 0,
          "exp": "Basketballer Jonas Valančiūnas ist weltberühmt und stammt aus Litauen."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Litauen?",
          "o": [
            "der mystische Berg der Kreuze (Kryžių kalnas)",
            "das Neujahrskonzert der Wiener Philharmoniker",
            "Millionen Fahrräder auf eigenen Radwegen",
            "das gigantische Liederfest Laulupidu"
          ],
          "a": 0,
          "exp": "Typisch Litauen: der mystische Berg der Kreuze (Kryžių kalnas)."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Litauen hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Litauen aus?",
          "o": [
            "Wasserburg Trakai",
            "Rila-Kloster",
            "Kasematten von Luxemburg",
            "die Klippen von Moher (Cliffs of Moher)"
          ],
          "a": 0,
          "exp": "Wasserburg Trakai gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Litauen?",
          "o": [
            "Basketballer Jonas Valančiūnas",
            "Philosoph Sokrates",
            "Tennisstar Rafael Nadal",
            "Entdecker Vasco da Gama"
          ],
          "a": 0,
          "exp": "Basketballer Jonas Valančiūnas ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Luxemburg": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Luxemburg bekannt?",
          "o": [
            "Judd mat Gaardebounen (Schweinefleisch)",
            "marinierter Hering",
            "Knödel & Gulasch",
            "Pastizzi (Blätterteigtaschen)"
          ],
          "a": 0,
          "exp": "Judd mat Gaardebounen (Schweinefleisch) ist ein bekanntes Nationalgericht von Luxemburg."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Luxemburg?",
          "o": [
            "Radprofi Andy Schleck",
            "Hans Christian Andersen",
            "Dirigent Mariss Jansons",
            "Komponist Arvo Pärt"
          ],
          "a": 0,
          "exp": "Radprofi Andy Schleck ist weltberühmt und stammt aus Luxemburg."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Luxemburg?",
          "o": [
            "die Echternacher Springprozession",
            "die Legende, dass Aphrodite hier dem Schaum des Meeres entstieg",
            "das Oktoberfest in München",
            "Millionen Fahrräder auf eigenen Radwegen"
          ],
          "a": 0,
          "exp": "Typisch Luxemburg: die Echternacher Springprozession."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Luxemburg hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Luxemburg aus?",
          "o": [
            "Kasematten von Luxemburg",
            "Brüsseler Atomium",
            "Windmühlen von Kinderdijk",
            "Dom von Helsinki"
          ],
          "a": 0,
          "exp": "Kasematten von Luxemburg gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Luxemburg?",
          "o": [
            "Radprofi Andy Schleck",
            "Hans Christian Andersen",
            "Dirigent Mariss Jansons",
            "Komponist Arvo Pärt"
          ],
          "a": 0,
          "exp": "Radprofi Andy Schleck ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Malta": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Malta bekannt?",
          "o": [
            "Pastizzi (Blätterteigtaschen)",
            "Köttbullar & Zimtschnecken",
            "Potica (Hefekuchen)",
            "Gouda-Käse & Stroopwafels"
          ],
          "a": 0,
          "exp": "Pastizzi (Blätterteigtaschen) ist ein bekanntes Nationalgericht von Malta."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Malta?",
          "o": [
            "Parlamentspräsidentin Roberta Metsola",
            "Tove Jansson (Erfinderin der Mumins)",
            "Dirigent Mariss Jansons",
            "Zeichner Peyo (Erfinder der Schlümpfe)"
          ],
          "a": 0,
          "exp": "Parlamentspräsidentin Roberta Metsola ist weltberühmt und stammt aus Malta."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Malta?",
          "o": [
            "die traditionellen bunten Luzzu-Fischerboote",
            "die weißen Lipizzaner-Pferde stammen ursprünglich aus Lipica",
            "Marteniza-Puppen (rot-weiß) als Frühlingsgruß",
            "das gigantische Liederfest Laulupidu"
          ],
          "a": 0,
          "exp": "Typisch Malta: die traditionellen bunten Luzzu-Fischerboote."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Malta hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Malta aus?",
          "o": [
            "historische Hauptstadt Valletta",
            "Rigaer Dom",
            "historische Altstadt von Dubrovnik",
            "Parlamentsgebäude in Budapest"
          ],
          "a": 0,
          "exp": "historische Hauptstadt Valletta gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Malta?",
          "o": [
            "Parlamentspräsidentin Roberta Metsola",
            "Tove Jansson (Erfinderin der Mumins)",
            "Dirigent Mariss Jansons",
            "Zeichner Peyo (Erfinder der Schlümpfe)"
          ],
          "a": 0,
          "exp": "Parlamentspräsidentin Roberta Metsola ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Niederlande": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Niederlande bekannt?",
          "o": [
            "Gouda-Käse & Stroopwafels",
            "Pizza & Pasta",
            "karelische Piroggen",
            "Baguette & Croissants"
          ],
          "a": 0,
          "exp": "Gouda-Käse & Stroopwafels ist ein bekanntes Nationalgericht von Niederlande."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Niederlande?",
          "o": [
            "Maler Vincent van Gogh",
            "Popgruppe ABBA",
            "General Milan Rastislav Štefánik",
            "Hans Christian Andersen"
          ],
          "a": 0,
          "exp": "Maler Vincent van Gogh ist weltberühmt und stammt aus Niederlande."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Niederlande?",
          "o": [
            "Millionen Fahrräder auf eigenen Radwegen",
            "die gepunkteten Dalmatiner-Hunde stammen von hier",
            "der slowakische Robin Hood Juraj Jánošík",
            "das gigantische Liederfest Laulupidu"
          ],
          "a": 0,
          "exp": "Typisch Niederlande: Millionen Fahrräder auf eigenen Radwegen."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Niederlande hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Niederlande aus?",
          "o": [
            "Windmühlen von Kinderdijk",
            "Athener Akropolis",
            "Torre de Belém in Lissabon",
            "Bratislavaer Burg"
          ],
          "a": 0,
          "exp": "Windmühlen von Kinderdijk gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Niederlande?",
          "o": [
            "Maler Vincent van Gogh",
            "Popgruppe ABBA",
            "General Milan Rastislav Štefánik",
            "Hans Christian Andersen"
          ],
          "a": 0,
          "exp": "Maler Vincent van Gogh ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Österreich": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Österreich bekannt?",
          "o": [
            "Wiener Schnitzel & Sachertorte",
            "Köttbullar & Zimtschnecken",
            "Mămăligă (Maisbrei)",
            "Pastizzi (Blätterteigtaschen)"
          ],
          "a": 0,
          "exp": "Wiener Schnitzel & Sachertorte ist ein bekanntes Nationalgericht von Österreich."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Österreich?",
          "o": [
            "Komponist Wolfgang Amadeus Mozart",
            "Zeichner Peyo (Erfinder der Schlümpfe)",
            "Erfinder Ernő Rubik",
            "Tennisprofi Marcos Baghdatis"
          ],
          "a": 0,
          "exp": "Komponist Wolfgang Amadeus Mozart ist weltberühmt und stammt aus Österreich."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Österreich?",
          "o": [
            "das Neujahrskonzert der Wiener Philharmoniker",
            "Marteniza-Puppen (rot-weiß) als Frühlingsgruß",
            "die Echternacher Springprozession",
            "das Donaudelta als Naturparadies"
          ],
          "a": 0,
          "exp": "Typisch Österreich: das Neujahrskonzert der Wiener Philharmoniker."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Österreich hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Österreich aus?",
          "o": [
            "Schloss Schönbrunn in Wien",
            "Dracula-Schloss Bran",
            "Karlsbrücke in Prag",
            "Windmühlen von Kinderdijk"
          ],
          "a": 0,
          "exp": "Schloss Schönbrunn in Wien gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Österreich?",
          "o": [
            "Komponist Wolfgang Amadeus Mozart",
            "Zeichner Peyo (Erfinder der Schlümpfe)",
            "Erfinder Ernő Rubik",
            "Tennisprofi Marcos Baghdatis"
          ],
          "a": 0,
          "exp": "Komponist Wolfgang Amadeus Mozart ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Polen": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Polen bekannt?",
          "o": [
            "Pierogi (Teigtaschen)",
            "Irish Stew",
            "Halloumi-Grillkäse",
            "Baguette & Croissants"
          ],
          "a": 0,
          "exp": "Pierogi (Teigtaschen) ist ein bekanntes Nationalgericht von Polen."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Polen?",
          "o": [
            "Astronom Nikolaus Kopernikus",
            "Bildhauer Constantin Brâncuși",
            "Tove Jansson (Erfinderin der Mumins)",
            "Maler Vincent van Gogh"
          ],
          "a": 0,
          "exp": "Astronom Nikolaus Kopernikus ist weltberühmt und stammt aus Polen."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Polen?",
          "o": [
            "die Wichtel-Statuen in Breslau (Wrocław)",
            "das Oktoberfest in München",
            "das gigantische Liederfest Laulupidu",
            "die Olympischen Spiele der Antike"
          ],
          "a": 0,
          "exp": "Typisch Polen: die Wichtel-Statuen in Breslau (Wrocław)."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Polen hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Polen aus?",
          "o": [
            "Krakauer Wawel-Schloss",
            "Dom von Helsinki",
            "Wasserburg Trakai",
            "Torre de Belém in Lissabon"
          ],
          "a": 0,
          "exp": "Krakauer Wawel-Schloss gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Polen?",
          "o": [
            "Astronom Nikolaus Kopernikus",
            "Bildhauer Constantin Brâncuși",
            "Tove Jansson (Erfinderin der Mumins)",
            "Maler Vincent van Gogh"
          ],
          "a": 0,
          "exp": "Astronom Nikolaus Kopernikus ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Portugal": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Portugal bekannt?",
          "o": [
            "Pastéis de Nata (Puddingtörtchen)",
            "Pierogi (Teigtaschen)",
            "Cepelinai (Kartoffelklöße)",
            "Ćevapčići & dalmatinischer Schinken"
          ],
          "a": 0,
          "exp": "Pastéis de Nata (Puddingtörtchen) ist ein bekanntes Nationalgericht von Portugal."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Portugal?",
          "o": [
            "Entdecker Vasco da Gama",
            "General Milan Rastislav Štefánik",
            "Basketballer Jonas Valančiūnas",
            "Hans Christian Andersen"
          ],
          "a": 0,
          "exp": "Entdecker Vasco da Gama ist weltberühmt und stammt aus Portugal."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Portugal?",
          "o": [
            "der traditionelle Fado-Gesang",
            "das Neujahrskonzert der Wiener Philharmoniker",
            "die Olympischen Spiele der Antike",
            "das dänische Wort 'Hygge' für Gemütlichkeit"
          ],
          "a": 0,
          "exp": "Typisch Portugal: der traditionelle Fado-Gesang."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Portugal hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Portugal aus?",
          "o": [
            "Torre de Belém in Lissabon",
            "Krakauer Wawel-Schloss",
            "Rigaer Dom",
            "Bratislavaer Burg"
          ],
          "a": 0,
          "exp": "Torre de Belém in Lissabon gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Portugal?",
          "o": [
            "Entdecker Vasco da Gama",
            "General Milan Rastislav Štefánik",
            "Basketballer Jonas Valančiūnas",
            "Hans Christian Andersen"
          ],
          "a": 0,
          "exp": "Entdecker Vasco da Gama ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Rumänien": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Rumänien bekannt?",
          "o": [
            "Mămăligă (Maisbrei)",
            "Bryndzové halušky (Schafskäse-Nockerl)",
            "Pierogi (Teigtaschen)",
            "Smørrebrød"
          ],
          "a": 0,
          "exp": "Mămăligă (Maisbrei) ist ein bekanntes Nationalgericht von Rumänien."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Rumänien?",
          "o": [
            "Bildhauer Constantin Brâncuși",
            "Erfinder Ernő Rubik",
            "Tennisstar Rafael Nadal",
            "Band U2 (Sänger Bono)"
          ],
          "a": 0,
          "exp": "Bildhauer Constantin Brâncuși ist weltberühmt und stammt aus Rumänien."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Rumänien?",
          "o": [
            "das Donaudelta als Naturparadies",
            "die traditionellen bunten Luzzu-Fischerboote",
            "Tim & Struppi kommen aus Belgien",
            "das Neujahrskonzert der Wiener Philharmoniker"
          ],
          "a": 0,
          "exp": "Typisch Rumänien: das Donaudelta als Naturparadies."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Rumänien hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Rumänien aus?",
          "o": [
            "Dracula-Schloss Bran",
            "Krakauer Wawel-Schloss",
            "Brandenburger Tor in Berlin",
            "Eiffelturm in Paris"
          ],
          "a": 0,
          "exp": "Dracula-Schloss Bran gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Rumänien?",
          "o": [
            "Bildhauer Constantin Brâncuși",
            "Erfinder Ernő Rubik",
            "Tennisstar Rafael Nadal",
            "Band U2 (Sänger Bono)"
          ],
          "a": 0,
          "exp": "Bildhauer Constantin Brâncuși ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Schweden": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Schweden bekannt?",
          "o": [
            "Köttbullar & Zimtschnecken",
            "Gulaschsuppe",
            "Pastéis de Nata (Puddingtörtchen)",
            "Smørrebrød"
          ],
          "a": 0,
          "exp": "Köttbullar & Zimtschnecken ist ein bekanntes Nationalgericht von Schweden."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Schweden?",
          "o": [
            "Popgruppe ABBA",
            "Erfinder Ernő Rubik",
            "Entdecker Vasco da Gama",
            "Tennisstar Rafael Nadal"
          ],
          "a": 0,
          "exp": "Popgruppe ABBA ist weltberühmt und stammt aus Schweden."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Schweden?",
          "o": [
            "das sommerliche Midsommar-Fest",
            "die Legende, dass Aphrodite hier dem Schaum des Meeres entstieg",
            "der leidenschaftliche Flamenco-Tanz",
            "Marteniza-Puppen (rot-weiß) als Frühlingsgruß"
          ],
          "a": 0,
          "exp": "Typisch Schweden: das sommerliche Midsommar-Fest."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Schweden hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Schweden aus?",
          "o": [
            "Stockholmer Schloss",
            "Eiffelturm in Paris",
            "Wasserburg Trakai",
            "Dom von Helsinki"
          ],
          "a": 0,
          "exp": "Stockholmer Schloss gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Schweden?",
          "o": [
            "Popgruppe ABBA",
            "Erfinder Ernő Rubik",
            "Entdecker Vasco da Gama",
            "Tennisstar Rafael Nadal"
          ],
          "a": 0,
          "exp": "Popgruppe ABBA ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Slowakei": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Slowakei bekannt?",
          "o": [
            "Bryndzové halušky (Schafskäse-Nockerl)",
            "Halloumi-Grillkäse",
            "Graue Erbsen mit Speck",
            "marinierter Hering"
          ],
          "a": 0,
          "exp": "Bryndzové halušky (Schafskäse-Nockerl) ist ein bekanntes Nationalgericht von Slowakei."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Slowakei?",
          "o": [
            "General Milan Rastislav Štefánik",
            "Komponist Ludwig van Beethoven",
            "Tove Jansson (Erfinderin der Mumins)",
            "Tennisprofi Marcos Baghdatis"
          ],
          "a": 0,
          "exp": "General Milan Rastislav Štefánik ist weltberühmt und stammt aus Slowakei."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Slowakei?",
          "o": [
            "der slowakische Robin Hood Juraj Jánošík",
            "das Baguette wurde zum UNESCO-Weltkulturerbe erklärt",
            "das Prager Marionettentheater",
            "die Echternacher Springprozession"
          ],
          "a": 0,
          "exp": "Typisch Slowakei: der slowakische Robin Hood Juraj Jánošík."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Slowakei hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Slowakei aus?",
          "o": [
            "Bratislavaer Burg",
            "Athener Akropolis",
            "Windmühlen von Kinderdijk",
            "Dom von Helsinki"
          ],
          "a": 0,
          "exp": "Bratislavaer Burg gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Slowakei?",
          "o": [
            "General Milan Rastislav Štefánik",
            "Komponist Ludwig van Beethoven",
            "Tove Jansson (Erfinderin der Mumins)",
            "Tennisprofi Marcos Baghdatis"
          ],
          "a": 0,
          "exp": "General Milan Rastislav Štefánik ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Slowenien": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Slowenien bekannt?",
          "o": [
            "Potica (Hefekuchen)",
            "belgische Waffeln",
            "Currywurst & Brezeln",
            "Smørrebrød"
          ],
          "a": 0,
          "exp": "Potica (Hefekuchen) ist ein bekanntes Nationalgericht von Slowenien."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Slowenien?",
          "o": [
            "Radprofi Tadej Pogačar",
            "Tennisstar Rafael Nadal",
            "Philosoph Sokrates",
            "Parlamentspräsidentin Roberta Metsola"
          ],
          "a": 0,
          "exp": "Radprofi Tadej Pogačar ist weltberühmt und stammt aus Slowenien."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Slowenien?",
          "o": [
            "die weißen Lipizzaner-Pferde stammen ursprünglich aus Lipica",
            "die Olympischen Spiele der Antike",
            "das Neujahrskonzert der Wiener Philharmoniker",
            "Tim & Struppi kommen aus Belgien"
          ],
          "a": 0,
          "exp": "Typisch Slowenien: die weißen Lipizzaner-Pferde stammen ursprünglich aus Lipica."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Slowenien hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Slowenien aus?",
          "o": [
            "malerische Bleder See mit der Kircheninsel",
            "Stockholmer Schloss",
            "Karlsbrücke in Prag",
            "Dom von Helsinki"
          ],
          "a": 0,
          "exp": "malerische Bleder See mit der Kircheninsel gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Slowenien?",
          "o": [
            "Radprofi Tadej Pogačar",
            "Tennisstar Rafael Nadal",
            "Philosoph Sokrates",
            "Parlamentspräsidentin Roberta Metsola"
          ],
          "a": 0,
          "exp": "Radprofi Tadej Pogačar ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Spanien": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Spanien bekannt?",
          "o": [
            "Paella & Tapas",
            "Currywurst & Brezeln",
            "Gulaschsuppe",
            "Wiener Schnitzel & Sachertorte"
          ],
          "a": 0,
          "exp": "Paella & Tapas ist ein bekanntes Nationalgericht von Spanien."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Spanien?",
          "o": [
            "Tennisstar Rafael Nadal",
            "Hans Christian Andersen",
            "Verpackungskünstler Christo",
            "Philosoph Sokrates"
          ],
          "a": 0,
          "exp": "Tennisstar Rafael Nadal ist weltberühmt und stammt aus Spanien."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Spanien?",
          "o": [
            "der leidenschaftliche Flamenco-Tanz",
            "die gepunkteten Dalmatiner-Hunde stammen von hier",
            "das Oktoberfest in München",
            "das Donaudelta als Naturparadies"
          ],
          "a": 0,
          "exp": "Typisch Spanien: der leidenschaftliche Flamenco-Tanz."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Spanien hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Spanien aus?",
          "o": [
            "Sagrada Família in Barcelona",
            "die kleine Meerjungfrau in Kopenhagen",
            "malerische Bleder See mit der Kircheninsel",
            "Rigaer Dom"
          ],
          "a": 0,
          "exp": "Sagrada Família in Barcelona gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Spanien?",
          "o": [
            "Tennisstar Rafael Nadal",
            "Hans Christian Andersen",
            "Verpackungskünstler Christo",
            "Philosoph Sokrates"
          ],
          "a": 0,
          "exp": "Tennisstar Rafael Nadal ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Tschechien": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Tschechien bekannt?",
          "o": [
            "Knödel & Gulasch",
            "Irish Stew",
            "Currywurst & Brezeln",
            "Wiener Schnitzel & Sachertorte"
          ],
          "a": 0,
          "exp": "Knödel & Gulasch ist ein bekanntes Nationalgericht von Tschechien."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Tschechien?",
          "o": [
            "Schriftsteller Franz Kafka",
            "Komponist Arvo Pärt",
            "Maler Vincent van Gogh",
            "Hans Christian Andersen"
          ],
          "a": 0,
          "exp": "Schriftsteller Franz Kafka ist weltberühmt und stammt aus Tschechien."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Tschechien?",
          "o": [
            "das Prager Marionettentheater",
            "die Legende, dass Aphrodite hier dem Schaum des Meeres entstieg",
            "Tim & Struppi kommen aus Belgien",
            "das legendäre Sziget-Musikfestival in Budapest"
          ],
          "a": 0,
          "exp": "Typisch Tschechien: das Prager Marionettentheater."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Tschechien hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Tschechien aus?",
          "o": [
            "Karlsbrücke in Prag",
            "Windmühlen von Kinderdijk",
            "Sagrada Família in Barcelona",
            "Bratislavaer Burg"
          ],
          "a": 0,
          "exp": "Karlsbrücke in Prag gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Tschechien?",
          "o": [
            "Schriftsteller Franz Kafka",
            "Komponist Arvo Pärt",
            "Maler Vincent van Gogh",
            "Hans Christian Andersen"
          ],
          "a": 0,
          "exp": "Schriftsteller Franz Kafka ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Ungarn": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Ungarn bekannt?",
          "o": [
            "Gulaschsuppe",
            "Cepelinai (Kartoffelklöße)",
            "Ćevapčići & dalmatinischer Schinken",
            "Judd mat Gaardebounen (Schweinefleisch)"
          ],
          "a": 0,
          "exp": "Gulaschsuppe ist ein bekanntes Nationalgericht von Ungarn."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Ungarn?",
          "o": [
            "Erfinder Ernő Rubik",
            "Radprofi Tadej Pogačar",
            "Band U2 (Sänger Bono)",
            "Zeichner Peyo (Erfinder der Schlümpfe)"
          ],
          "a": 0,
          "exp": "Erfinder Ernő Rubik ist weltberühmt und stammt aus Ungarn."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Ungarn?",
          "o": [
            "das legendäre Sziget-Musikfestival in Budapest",
            "die weißen Lipizzaner-Pferde stammen ursprünglich aus Lipica",
            "der grüne Saint Patrick's Day am 17. März",
            "die Wichtel-Statuen in Breslau (Wrocław)"
          ],
          "a": 0,
          "exp": "Typisch Ungarn: das legendäre Sziget-Musikfestival in Budapest."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Ungarn hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Ungarn aus?",
          "o": [
            "Parlamentsgebäude in Budapest",
            "malerische Bleder See mit der Kircheninsel",
            "Windmühlen von Kinderdijk",
            "Torre de Belém in Lissabon"
          ],
          "a": 0,
          "exp": "Parlamentsgebäude in Budapest gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Ungarn?",
          "o": [
            "Erfinder Ernő Rubik",
            "Radprofi Tadej Pogačar",
            "Band U2 (Sänger Bono)",
            "Zeichner Peyo (Erfinder der Schlümpfe)"
          ],
          "a": 0,
          "exp": "Erfinder Ernő Rubik ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    },
    "Zypern": {
      "1": [
        {
          "q": "Für welches berühmte Gericht oder welche kulinarische Spezialität ist Zypern bekannt?",
          "o": [
            "Halloumi-Grillkäse",
            "Gouda-Käse & Stroopwafels",
            "Graue Erbsen mit Speck",
            "Köttbullar & Zimtschnecken"
          ],
          "a": 0,
          "exp": "Halloumi-Grillkäse ist ein bekanntes Nationalgericht von Zypern."
        },
        {
          "q": "Welcher berühmte Kulturschaffende, Popstar oder Sportler kommt aus Zypern?",
          "o": [
            "Tennisprofi Marcos Baghdatis",
            "Hans Christian Andersen",
            "Astronom Nikolaus Kopernikus",
            "Physiker Nikola Tesla"
          ],
          "a": 0,
          "exp": "Tennisprofi Marcos Baghdatis ist weltberühmt und stammt aus Zypern."
        }
      ],
      "2": [
        {
          "q": "Welcher traditionelle Brauch oder witzige Kulturfakt gehört zu Zypern?",
          "o": [
            "die Legende, dass Aphrodite hier dem Schaum des Meeres entstieg",
            "das Donaudelta als Naturparadies",
            "die Olympischen Spiele der Antike",
            "die weißen Lipizzaner-Pferde stammen ursprünglich aus Lipica"
          ],
          "a": 0,
          "exp": "Typisch Zypern: die Legende, dass Aphrodite hier dem Schaum des Meeres entstieg."
        },
        {
          "q": "Welche Farben hat die Landesflagge von Zypern hauptsächlich?",
          "o": [
            "Kombinationen aus Nationalfarben",
            "Pink-Türkisch-Gepunktet",
            "Neon-Grün und Lila",
            "Silberglänzend"
          ],
          "a": 0,
          "exp": "Die Nationalfarben spiegeln sich in der Flagge des Landes wider."
        }
      ],
      "3": [
        {
          "q": "Welches bekannte Kulturerbe (z.B. Bauwerk oder Tradition) zeichnet Zypern aus?",
          "o": [
            "Felsen der Aphrodite",
            "Windmühlen von Kinderdijk",
            "Athener Akropolis",
            "Torre de Belém in Lissabon"
          ],
          "a": 0,
          "exp": "Felsen der Aphrodite gehört zu den herausragenden Wahrzeichen des Landes."
        },
        {
          "q": "Welcher weltberühmte Erfinder oder Künstler stammt aus Zypern?",
          "o": [
            "Tennisprofi Marcos Baghdatis",
            "Hans Christian Andersen",
            "Astronom Nikolaus Kopernikus",
            "Physiker Nikola Tesla"
          ],
          "a": 0,
          "exp": "Tennisprofi Marcos Baghdatis ist eng mit der wissenschaftlichen oder künstlerischen Tradition des Landes verbunden."
        }
      ]
    }
  },
  "5": {
    "Belgien": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Belgien heute im Alltag?",
          "o": [
            "Belgischer Franc",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Belgischer Franc."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Belgien?",
          "o": [
            "feine Pralinen",
            "LEGO-Bausteine",
            "Online-Glücksspiel (iGaming)",
            "Olivenöl & Schifffahrt"
          ],
          "a": 0,
          "exp": "feine Pralinen ist ein bekanntes Aushängeschild der Wirtschaft von Belgien."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Belgien?",
          "o": [
            "Diamantenhandel in Antwerpen",
            "Luft- und Raumfahrt (Airbus)",
            "Maschinenbau und Automobilzulieferung",
            "internationale Tech-Konzerne (Google, Apple)"
          ],
          "a": 0,
          "exp": "Diamantenhandel in Antwerpen ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Belgien?",
          "o": [
            "feine Pralinen",
            "LEGO-Bausteine",
            "Online-Glücksspiel (iGaming)",
            "Olivenöl & Schifffahrt"
          ],
          "a": 0,
          "exp": "feine Pralinen wurde in Belgien gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Belgien?",
          "o": [
            "Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen",
            "die Römischen Verträge von 1957 wurden hier unterschrieben",
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland",
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt"
          ],
          "a": 0,
          "exp": "Fakt: Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Belgien?",
          "o": [
            "feine Pralinen",
            "LEGO-Bausteine",
            "Online-Glücksspiel (iGaming)",
            "Olivenöl & Schifffahrt"
          ],
          "a": 0,
          "exp": "Belgien exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Bulgarien": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Bulgarien heute im Alltag?",
          "o": [
            "Bulgarischer Lew",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Bulgarischer Lew."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Bulgarien?",
          "o": [
            "duftendes Rosenöl",
            "Nokia-Handys & Angry Birds",
            "Skype & digitale e-Residency",
            "Zara-Kleidung (Inditex)"
          ],
          "a": 0,
          "exp": "duftendes Rosenöl ist ein bekanntes Aushängeschild der Wirtschaft von Bulgarien."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Bulgarien?",
          "o": [
            "Tourismus am Goldstrand",
            "Blumenhandel (Aalsmeer)",
            "Finanzdienstleistungen und Reedereien",
            "Windkraftanlagen von Vestas"
          ],
          "a": 0,
          "exp": "Tourismus am Goldstrand ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Bulgarien?",
          "o": [
            "duftendes Rosenöl",
            "Nokia-Handys & Angry Birds",
            "Skype & digitale e-Residency",
            "Zara-Kleidung (Inditex)"
          ],
          "a": 0,
          "exp": "duftendes Rosenöl wurde in Bulgarien gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Bulgarien?",
          "o": [
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt",
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet",
            "hier kann man seit 2005 sicher online über das Internet wählen",
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist"
          ],
          "a": 0,
          "exp": "Fakt: Lew-Währung ist fest an die D-Mark/Euro gekoppelt."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Bulgarien?",
          "o": [
            "duftendes Rosenöl",
            "Nokia-Handys & Angry Birds",
            "Skype & digitale e-Residency",
            "Zara-Kleidung (Inditex)"
          ],
          "a": 0,
          "exp": "Bulgarien exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Dänemark": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Dänemark heute im Alltag?",
          "o": [
            "Dänische Krone",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Dänische Krone."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Dänemark?",
          "o": [
            "LEGO-Bausteine",
            "Naturkorken für Weinflaschen",
            "Nokia-Handys & Angry Birds",
            "Investmentfonds & Frachtflüge"
          ],
          "a": 0,
          "exp": "LEGO-Bausteine ist ein bekanntes Aushängeschild der Wirtschaft von Dänemark."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Dänemark?",
          "o": [
            "Windkraftanlagen von Vestas",
            "Obst- und Gemüseexporte ('Gewächshaus Europas')",
            "Holz- und Papierprodukte",
            "pharmazeutische Generika-Industrie (Krka)"
          ],
          "a": 0,
          "exp": "Windkraftanlagen von Vestas ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Dänemark?",
          "o": [
            "LEGO-Bausteine",
            "Naturkorken für Weinflaschen",
            "Nokia-Handys & Angry Birds",
            "Investmentfonds & Frachtflüge"
          ],
          "a": 0,
          "exp": "LEGO-Bausteine wurde in Dänemark gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Dänemark?",
          "o": [
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen",
            "trennte sich 1993 völlig friedlich von der Tschechischen Republik",
            "hier kann man seit 2005 sicher online über das Internet wählen",
            "die historische Region Böhmen macht den Hauptteil des Landes aus"
          ],
          "a": 0,
          "exp": "Fakt: besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Dänemark?",
          "o": [
            "LEGO-Bausteine",
            "Naturkorken für Weinflaschen",
            "Nokia-Handys & Angry Birds",
            "Investmentfonds & Frachtflüge"
          ],
          "a": 0,
          "exp": "Dänemark exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Deutschland": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Deutschland heute im Alltag?",
          "o": [
            "Deutsche Mark",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Deutsche Mark."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Deutschland?",
          "o": [
            "Autos von VW, BMW oder Mercedes",
            "FinTech (wie Revolut-Lizenzen)",
            "Gorenje-Kühlschränke",
            "Schiffsregister & Tourismus"
          ],
          "a": 0,
          "exp": "Autos von VW, BMW oder Mercedes ist ein bekanntes Aushängeschild der Wirtschaft von Deutschland."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Deutschland?",
          "o": [
            "Maschinenbau und Chemie",
            "Automobilherstellung pro Kopf weltweit am höchsten",
            "Automobilwerke (Audi, Suzuki) und Elektronik",
            "internationaler Bankensektor"
          ],
          "a": 0,
          "exp": "Maschinenbau und Chemie ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Deutschland?",
          "o": [
            "Autos von VW, BMW oder Mercedes",
            "FinTech (wie Revolut-Lizenzen)",
            "Gorenje-Kühlschränke",
            "Schiffsregister & Tourismus"
          ],
          "a": 0,
          "exp": "Autos von VW, BMW oder Mercedes wurde in Deutschland gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Deutschland?",
          "o": [
            "die Europäische Zentralbank hat ihren Sitz in Frankfurt",
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen",
            "hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt",
            "die Atlantik-Inseln Azoren und Madeira gehören dazu"
          ],
          "a": 0,
          "exp": "Fakt: die Europäische Zentralbank hat ihren Sitz in Frankfurt."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Deutschland?",
          "o": [
            "Autos von VW, BMW oder Mercedes",
            "FinTech (wie Revolut-Lizenzen)",
            "Gorenje-Kühlschränke",
            "Schiffsregister & Tourismus"
          ],
          "a": 0,
          "exp": "Deutschland exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Estland": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Estland heute im Alltag?",
          "o": [
            "Estnische Krone",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Estnische Krone."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Estland?",
          "o": [
            "Skype & digitale e-Residency",
            "Tokajer-Süßwein & Rubik's Zauberwürfel",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "FinTech (wie Revolut-Lizenzen)"
          ],
          "a": 0,
          "exp": "Skype & digitale e-Residency ist ein bekanntes Aushängeschild der Wirtschaft von Estland."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Estland?",
          "o": [
            "fortschrittliches e-Government",
            "Automobilbau (Volvo) und Stahl",
            "schnell wachsende IT-Branche in Cluj",
            "Blumenhandel (Aalsmeer)"
          ],
          "a": 0,
          "exp": "fortschrittliches e-Government ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Estland?",
          "o": [
            "Skype & digitale e-Residency",
            "Tokajer-Süßwein & Rubik's Zauberwürfel",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "FinTech (wie Revolut-Lizenzen)"
          ],
          "a": 0,
          "exp": "Skype & digitale e-Residency wurde in Estland gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Estland?",
          "o": [
            "hier kann man seit 2005 sicher online über das Internet wählen",
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab",
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "die historische Region Böhmen macht den Hauptteil des Landes aus"
          ],
          "a": 0,
          "exp": "Fakt: hier kann man seit 2005 sicher online über das Internet wählen."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Estland?",
          "o": [
            "Skype & digitale e-Residency",
            "Tokajer-Süßwein & Rubik's Zauberwürfel",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "FinTech (wie Revolut-Lizenzen)"
          ],
          "a": 0,
          "exp": "Estland exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Finnland": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Finnland heute im Alltag?",
          "o": [
            "Finnische Mark",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Finnische Mark."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Finnland?",
          "o": [
            "Nokia-Handys & Angry Birds",
            "Skype & digitale e-Residency",
            "Gorenje-Kühlschränke",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Nokia-Handys & Angry Birds ist ein bekanntes Aushängeschild der Wirtschaft von Finnland."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Finnland?",
          "o": [
            "Holz- und Papierprodukte",
            "Windkraftanlagen von Vestas",
            "Maschinenbau und Automobilzulieferung",
            "Maschinenbau und Chemie"
          ],
          "a": 0,
          "exp": "Holz- und Papierprodukte ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Finnland?",
          "o": [
            "Nokia-Handys & Angry Birds",
            "Skype & digitale e-Residency",
            "Gorenje-Kühlschränke",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Nokia-Handys & Angry Birds wurde in Finnland gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Finnland?",
          "o": [
            "Lappland gilt als Heimatort des Weihnachtsmanns",
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt",
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland",
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab"
          ],
          "a": 0,
          "exp": "Fakt: Lappland gilt als Heimatort des Weihnachtsmanns."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Finnland?",
          "o": [
            "Nokia-Handys & Angry Birds",
            "Skype & digitale e-Residency",
            "Gorenje-Kühlschränke",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Finnland exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Frankreich": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Frankreich heute im Alltag?",
          "o": [
            "Französischer Franc",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Französischer Franc."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Frankreich?",
          "o": [
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Autos von VW, BMW oder Mercedes",
            "Schiffsregister & Tourismus",
            "elektrische Hypercars von Rimac"
          ],
          "a": 0,
          "exp": "Luxusartikel von Louis Vuitton oder Chanel ist ein bekanntes Aushängeschild der Wirtschaft von Frankreich."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Frankreich?",
          "o": [
            "Luft- und Raumfahrt (Airbus)",
            "Tourismus auf den griechischen Inseln",
            "Automobilbau (Volvo) und Stahl",
            "schnell wachsende IT-Branche in Cluj"
          ],
          "a": 0,
          "exp": "Luft- und Raumfahrt (Airbus) ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Frankreich?",
          "o": [
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Autos von VW, BMW oder Mercedes",
            "Schiffsregister & Tourismus",
            "elektrische Hypercars von Rimac"
          ],
          "a": 0,
          "exp": "Luxusartikel von Louis Vuitton oder Chanel wurde in Frankreich gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Frankreich?",
          "o": [
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg",
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte",
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab"
          ],
          "a": 0,
          "exp": "Fakt: das Europäische Parlament hat seinen Hauptsitz in Straßburg."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Frankreich?",
          "o": [
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Autos von VW, BMW oder Mercedes",
            "Schiffsregister & Tourismus",
            "elektrische Hypercars von Rimac"
          ],
          "a": 0,
          "exp": "Frankreich exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Griechenland": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Griechenland heute im Alltag?",
          "o": [
            "Griechische Drachme",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Griechische Drachme."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Griechenland?",
          "o": [
            "Olivenöl & Schifffahrt",
            "IKEA-Möbel & Spotify-Musik",
            "Ryanair-Flüge & Guinness-Bier",
            "rote Sportwagen von Ferrari"
          ],
          "a": 0,
          "exp": "Olivenöl & Schifffahrt ist ein bekanntes Aushängeschild der Wirtschaft von Griechenland."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Griechenland?",
          "o": [
            "Tourismus auf den griechischen Inseln",
            "Blumenhandel (Aalsmeer)",
            "Biotechnologie und Lasertechnik",
            "Obst- und Gemüseexporte ('Gewächshaus Europas')"
          ],
          "a": 0,
          "exp": "Tourismus auf den griechischen Inseln ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Griechenland?",
          "o": [
            "Olivenöl & Schifffahrt",
            "IKEA-Möbel & Spotify-Musik",
            "Ryanair-Flüge & Guinness-Bier",
            "rote Sportwagen von Ferrari"
          ],
          "a": 0,
          "exp": "Olivenöl & Schifffahrt wurde in Griechenland gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Griechenland?",
          "o": [
            "trat der EU nach dem Ende der Militärdiktatur bei",
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist",
            "die Römischen Verträge von 1957 wurden hier unterschrieben",
            "hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt"
          ],
          "a": 0,
          "exp": "Fakt: trat der EU nach dem Ende der Militärdiktatur bei."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Griechenland?",
          "o": [
            "Olivenöl & Schifffahrt",
            "IKEA-Möbel & Spotify-Musik",
            "Ryanair-Flüge & Guinness-Bier",
            "rote Sportwagen von Ferrari"
          ],
          "a": 0,
          "exp": "Griechenland exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Irland": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Irland heute im Alltag?",
          "o": [
            "Irisches Pfund",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Irisches Pfund."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Irland?",
          "o": [
            "Ryanair-Flüge & Guinness-Bier",
            "Dacia-Autos",
            "Zara-Kleidung (Inditex)",
            "Online-Glücksspiel (iGaming)"
          ],
          "a": 0,
          "exp": "Ryanair-Flüge & Guinness-Bier ist ein bekanntes Aushängeschild der Wirtschaft von Irland."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Irland?",
          "o": [
            "internationale Tech-Konzerne (Google, Apple)",
            "Transport und Transitlogistik",
            "Diamantenhandel in Antwerpen",
            "Automobilbau (Volvo) und Stahl"
          ],
          "a": 0,
          "exp": "internationale Tech-Konzerne (Google, Apple) ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Irland?",
          "o": [
            "Ryanair-Flüge & Guinness-Bier",
            "Dacia-Autos",
            "Zara-Kleidung (Inditex)",
            "Online-Glücksspiel (iGaming)"
          ],
          "a": 0,
          "exp": "Ryanair-Flüge & Guinness-Bier wurde in Irland gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Irland?",
          "o": [
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen",
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt",
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt"
          ],
          "a": 0,
          "exp": "Fakt: muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Irland?",
          "o": [
            "Ryanair-Flüge & Guinness-Bier",
            "Dacia-Autos",
            "Zara-Kleidung (Inditex)",
            "Online-Glücksspiel (iGaming)"
          ],
          "a": 0,
          "exp": "Irland exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Italien": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Italien heute im Alltag?",
          "o": [
            "Italienische Lira",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Italienische Lira."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Italien?",
          "o": [
            "rote Sportwagen von Ferrari",
            "LEGO-Bausteine",
            "IKEA-Möbel & Spotify-Musik",
            "Red Bull Energy-Drinks"
          ],
          "a": 0,
          "exp": "rote Sportwagen von Ferrari ist ein bekanntes Aushängeschild der Wirtschaft von Italien."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Italien?",
          "o": [
            "Modehäuser in Mailand (Gucci, Prada)",
            "Schiffsregister und Tourismus",
            "Automobilbau (Volvo) und Stahl",
            "Biotechnologie und Lasertechnik"
          ],
          "a": 0,
          "exp": "Modehäuser in Mailand (Gucci, Prada) ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Italien?",
          "o": [
            "rote Sportwagen von Ferrari",
            "LEGO-Bausteine",
            "IKEA-Möbel & Spotify-Musik",
            "Red Bull Energy-Drinks"
          ],
          "a": 0,
          "exp": "rote Sportwagen von Ferrari wurde in Italien gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Italien?",
          "o": [
            "die Römischen Verträge von 1957 wurden hier unterschrieben",
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist",
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas",
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet"
          ],
          "a": 0,
          "exp": "Fakt: die Römischen Verträge von 1957 wurden hier unterschrieben."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Italien?",
          "o": [
            "rote Sportwagen von Ferrari",
            "LEGO-Bausteine",
            "IKEA-Möbel & Spotify-Musik",
            "Red Bull Energy-Drinks"
          ],
          "a": 0,
          "exp": "Italien exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Kroatien": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Kroatien heute im Alltag?",
          "o": [
            "Kroatische Kuna",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Kroatische Kuna."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Kroatien?",
          "o": [
            "elektrische Hypercars von Rimac",
            "Videospiele wie The Witcher",
            "Red Bull Energy-Drinks",
            "Luxusartikel von Louis Vuitton oder Chanel"
          ],
          "a": 0,
          "exp": "elektrische Hypercars von Rimac ist ein bekanntes Aushängeschild der Wirtschaft von Kroatien."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Kroatien?",
          "o": [
            "Adria-Tourismus",
            "Zellulose- und Papierherstellung",
            "Maschinenbau und Chemie",
            "Finanzdienstleistungen und Reedereien"
          ],
          "a": 0,
          "exp": "Adria-Tourismus ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Kroatien?",
          "o": [
            "elektrische Hypercars von Rimac",
            "Videospiele wie The Witcher",
            "Red Bull Energy-Drinks",
            "Luxusartikel von Louis Vuitton oder Chanel"
          ],
          "a": 0,
          "exp": "elektrische Hypercars von Rimac wurde in Kroatien gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Kroatien?",
          "o": [
            "ist das bisher jüngste Mitgliedsland der Europäischen Union",
            "die Kurische Nehrung hat die größten Wanderdünen Europas",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt",
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet"
          ],
          "a": 0,
          "exp": "Fakt: ist das bisher jüngste Mitgliedsland der Europäischen Union."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Kroatien?",
          "o": [
            "elektrische Hypercars von Rimac",
            "Videospiele wie The Witcher",
            "Red Bull Energy-Drinks",
            "Luxusartikel von Louis Vuitton oder Chanel"
          ],
          "a": 0,
          "exp": "Kroatien exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Lettland": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Lettland heute im Alltag?",
          "o": [
            "Lettischer Lats",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Lettischer Lats."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Lettland?",
          "o": [
            "airBaltic-Flüge & Holzexporte",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Red Bull Energy-Drinks",
            "Heineken-Bier & ASML-Chipmaschinen"
          ],
          "a": 0,
          "exp": "airBaltic-Flüge & Holzexporte ist ein bekanntes Aushängeschild der Wirtschaft von Lettland."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Lettland?",
          "o": [
            "Transport und Transitlogistik",
            "Blumenhandel (Aalsmeer)",
            "Windkraftanlagen von Vestas",
            "Finanzdienstleistungen und Reedereien"
          ],
          "a": 0,
          "exp": "Transport und Transitlogistik ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Lettland?",
          "o": [
            "airBaltic-Flüge & Holzexporte",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Red Bull Energy-Drinks",
            "Heineken-Bier & ASML-Chipmaschinen"
          ],
          "a": 0,
          "exp": "airBaltic-Flüge & Holzexporte wurde in Lettland gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Lettland?",
          "o": [
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt",
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab",
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg",
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist"
          ],
          "a": 0,
          "exp": "Fakt: die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Lettland?",
          "o": [
            "airBaltic-Flüge & Holzexporte",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Red Bull Energy-Drinks",
            "Heineken-Bier & ASML-Chipmaschinen"
          ],
          "a": 0,
          "exp": "Lettland exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Litauen": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Litauen heute im Alltag?",
          "o": [
            "Litauischer Litas",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Litauischer Litas."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Litauen?",
          "o": [
            "FinTech (wie Revolut-Lizenzen)",
            "duftendes Rosenöl",
            "rote Sportwagen von Ferrari",
            "Skype & digitale e-Residency"
          ],
          "a": 0,
          "exp": "FinTech (wie Revolut-Lizenzen) ist ein bekanntes Aushängeschild der Wirtschaft von Litauen."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Litauen?",
          "o": [
            "Biotechnologie und Lasertechnik",
            "Blumenhandel (Aalsmeer)",
            "Holz- und Papierprodukte",
            "Adria-Tourismus"
          ],
          "a": 0,
          "exp": "Biotechnologie und Lasertechnik ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Litauen?",
          "o": [
            "FinTech (wie Revolut-Lizenzen)",
            "duftendes Rosenöl",
            "rote Sportwagen von Ferrari",
            "Skype & digitale e-Residency"
          ],
          "a": 0,
          "exp": "FinTech (wie Revolut-Lizenzen) wurde in Litauen gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Litauen?",
          "o": [
            "die Kurische Nehrung hat die größten Wanderdünen Europas",
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas",
            "die Europäische Zentralbank hat ihren Sitz in Frankfurt",
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist"
          ],
          "a": 0,
          "exp": "Fakt: die Kurische Nehrung hat die größten Wanderdünen Europas."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Litauen?",
          "o": [
            "FinTech (wie Revolut-Lizenzen)",
            "duftendes Rosenöl",
            "rote Sportwagen von Ferrari",
            "Skype & digitale e-Residency"
          ],
          "a": 0,
          "exp": "Litauen exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Luxemburg": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Luxemburg heute im Alltag?",
          "o": [
            "Luxemburgischer Franc",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Luxemburgischer Franc."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Luxemburg?",
          "o": [
            "Investmentfonds & Frachtflüge",
            "Autoproduktion für VW, Kia und Jaguar",
            "LEGO-Bausteine",
            "elektrische Hypercars von Rimac"
          ],
          "a": 0,
          "exp": "Investmentfonds & Frachtflüge ist ein bekanntes Aushängeschild der Wirtschaft von Luxemburg."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Luxemburg?",
          "o": [
            "internationaler Bankensektor",
            "Blumenhandel (Aalsmeer)",
            "Diamantenhandel in Antwerpen",
            "Obst- und Gemüseexporte ('Gewächshaus Europas')"
          ],
          "a": 0,
          "exp": "internationaler Bankensektor ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Luxemburg?",
          "o": [
            "Investmentfonds & Frachtflüge",
            "Autoproduktion für VW, Kia und Jaguar",
            "LEGO-Bausteine",
            "elektrische Hypercars von Rimac"
          ],
          "a": 0,
          "exp": "Investmentfonds & Frachtflüge wurde in Luxemburg gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Luxemburg?",
          "o": [
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet",
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen",
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt"
          ],
          "a": 0,
          "exp": "Fakt: das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Luxemburg?",
          "o": [
            "Investmentfonds & Frachtflüge",
            "Autoproduktion für VW, Kia und Jaguar",
            "LEGO-Bausteine",
            "elektrische Hypercars von Rimac"
          ],
          "a": 0,
          "exp": "Luxemburg exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Malta": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Malta heute im Alltag?",
          "o": [
            "Maltesische Lira",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Maltesische Lira."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Malta?",
          "o": [
            "Online-Glücksspiel (iGaming)",
            "Skype & digitale e-Residency",
            "Ryanair-Flüge & Guinness-Bier",
            "Olivenöl & Schifffahrt"
          ],
          "a": 0,
          "exp": "Online-Glücksspiel (iGaming) ist ein bekanntes Aushängeschild der Wirtschaft von Malta."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Malta?",
          "o": [
            "Schiffsregister und Tourismus",
            "Modehäuser in Mailand (Gucci, Prada)",
            "Automobilbau (Volvo) und Stahl",
            "Transport und Transitlogistik"
          ],
          "a": 0,
          "exp": "Schiffsregister und Tourismus ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Malta?",
          "o": [
            "Online-Glücksspiel (iGaming)",
            "Skype & digitale e-Residency",
            "Ryanair-Flüge & Guinness-Bier",
            "Olivenöl & Schifffahrt"
          ],
          "a": 0,
          "exp": "Online-Glücksspiel (iGaming) wurde in Malta gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Malta?",
          "o": [
            "ist der flächenmäßig kleinste Mitgliedsstaat der EU",
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt",
            "war das erste Land des ehemaligen Jugoslawiens, das der EU beitrat"
          ],
          "a": 0,
          "exp": "Fakt: ist der flächenmäßig kleinste Mitgliedsstaat der EU."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Malta?",
          "o": [
            "Online-Glücksspiel (iGaming)",
            "Skype & digitale e-Residency",
            "Ryanair-Flüge & Guinness-Bier",
            "Olivenöl & Schifffahrt"
          ],
          "a": 0,
          "exp": "Malta exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Niederlande": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Niederlande heute im Alltag?",
          "o": [
            "Niederländischer Gulden",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Niederländischer Gulden."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Niederlande?",
          "o": [
            "Heineken-Bier & ASML-Chipmaschinen",
            "Investmentfonds & Frachtflüge",
            "Videospiele wie The Witcher",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Heineken-Bier & ASML-Chipmaschinen ist ein bekanntes Aushängeschild der Wirtschaft von Niederlande."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Niederlande?",
          "o": [
            "Blumenhandel (Aalsmeer)",
            "Adria-Tourismus",
            "Diamantenhandel in Antwerpen",
            "Tourismus auf den griechischen Inseln"
          ],
          "a": 0,
          "exp": "Blumenhandel (Aalsmeer) ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Niederlande?",
          "o": [
            "Heineken-Bier & ASML-Chipmaschinen",
            "Investmentfonds & Frachtflüge",
            "Videospiele wie The Witcher",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Heineken-Bier & ASML-Chipmaschinen wurde in Niederlande gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Niederlande?",
          "o": [
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "trennte sich 1993 völlig friedlich von der Tschechischen Republik",
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen",
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland"
          ],
          "a": 0,
          "exp": "Fakt: ein Viertel des Landes liegt unter dem Meeresspiegel."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Niederlande?",
          "o": [
            "Heineken-Bier & ASML-Chipmaschinen",
            "Investmentfonds & Frachtflüge",
            "Videospiele wie The Witcher",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Niederlande exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Österreich": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Österreich heute im Alltag?",
          "o": [
            "Österreichischer Schilling",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Österreichischer Schilling."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Österreich?",
          "o": [
            "Red Bull Energy-Drinks",
            "Skoda-Autos & Pilsner Bier",
            "Schiffsregister & Tourismus",
            "elektrische Hypercars von Rimac"
          ],
          "a": 0,
          "exp": "Red Bull Energy-Drinks ist ein bekanntes Aushängeschild der Wirtschaft von Österreich."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Österreich?",
          "o": [
            "Skihersteller und Alpintourismus",
            "Zellulose- und Papierherstellung",
            "Diamantenhandel in Antwerpen",
            "Maschinenbau und Automobilzulieferung"
          ],
          "a": 0,
          "exp": "Skihersteller und Alpintourismus ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Österreich?",
          "o": [
            "Red Bull Energy-Drinks",
            "Skoda-Autos & Pilsner Bier",
            "Schiffsregister & Tourismus",
            "elektrische Hypercars von Rimac"
          ],
          "a": 0,
          "exp": "Red Bull Energy-Drinks wurde in Österreich gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Österreich?",
          "o": [
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte",
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg",
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab",
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen"
          ],
          "a": 0,
          "exp": "Fakt: war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Österreich?",
          "o": [
            "Red Bull Energy-Drinks",
            "Skoda-Autos & Pilsner Bier",
            "Schiffsregister & Tourismus",
            "elektrische Hypercars von Rimac"
          ],
          "a": 0,
          "exp": "Österreich exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Polen": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Polen heute im Alltag?",
          "o": [
            "Polnischen Złoty",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Polnischen Złoty."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Polen?",
          "o": [
            "Videospiele wie The Witcher",
            "Red Bull Energy-Drinks",
            "IKEA-Möbel & Spotify-Musik",
            "Olivenöl & Schifffahrt"
          ],
          "a": 0,
          "exp": "Videospiele wie The Witcher ist ein bekanntes Aushängeschild der Wirtschaft von Polen."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Polen?",
          "o": [
            "Möbel- und Holzproduktion",
            "Luft- und Raumfahrt (Airbus)",
            "internationale Tech-Konzerne (Google, Apple)",
            "Blumenhandel (Aalsmeer)"
          ],
          "a": 0,
          "exp": "Möbel- und Holzproduktion ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Polen?",
          "o": [
            "Videospiele wie The Witcher",
            "Red Bull Energy-Drinks",
            "IKEA-Möbel & Spotify-Musik",
            "Olivenöl & Schifffahrt"
          ],
          "a": 0,
          "exp": "Videospiele wie The Witcher wurde in Polen gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Polen?",
          "o": [
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland",
            "die Atlantik-Inseln Azoren und Madeira gehören dazu",
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt"
          ],
          "a": 0,
          "exp": "Fakt: ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Polen?",
          "o": [
            "Videospiele wie The Witcher",
            "Red Bull Energy-Drinks",
            "IKEA-Möbel & Spotify-Musik",
            "Olivenöl & Schifffahrt"
          ],
          "a": 0,
          "exp": "Polen exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Portugal": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Portugal heute im Alltag?",
          "o": [
            "Portugiesischer Escudo",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Portugiesischer Escudo."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Portugal?",
          "o": [
            "Naturkorken für Weinflaschen",
            "Skoda-Autos & Pilsner Bier",
            "Videospiele wie The Witcher",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Naturkorken für Weinflaschen ist ein bekanntes Aushängeschild der Wirtschaft von Portugal."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Portugal?",
          "o": [
            "Zellulose- und Papierherstellung",
            "Maschinenbau und Automobilzulieferung",
            "Maschinenbau und Chemie",
            "Windkraftanlagen von Vestas"
          ],
          "a": 0,
          "exp": "Zellulose- und Papierherstellung ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Portugal?",
          "o": [
            "Naturkorken für Weinflaschen",
            "Skoda-Autos & Pilsner Bier",
            "Videospiele wie The Witcher",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Naturkorken für Weinflaschen wurde in Portugal gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Portugal?",
          "o": [
            "die Atlantik-Inseln Azoren und Madeira gehören dazu",
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab",
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte",
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg"
          ],
          "a": 0,
          "exp": "Fakt: die Atlantik-Inseln Azoren und Madeira gehören dazu."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Portugal?",
          "o": [
            "Naturkorken für Weinflaschen",
            "Skoda-Autos & Pilsner Bier",
            "Videospiele wie The Witcher",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Portugal exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Rumänien": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Rumänien heute im Alltag?",
          "o": [
            "Rumänischer Leu",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Rumänischer Leu."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Rumänien?",
          "o": [
            "Dacia-Autos",
            "Zara-Kleidung (Inditex)",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Red Bull Energy-Drinks"
          ],
          "a": 0,
          "exp": "Dacia-Autos ist ein bekanntes Aushängeschild der Wirtschaft von Rumänien."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Rumänien?",
          "o": [
            "schnell wachsende IT-Branche in Cluj",
            "Modehäuser in Mailand (Gucci, Prada)",
            "Adria-Tourismus",
            "pharmazeutische Generika-Industrie (Krka)"
          ],
          "a": 0,
          "exp": "schnell wachsende IT-Branche in Cluj ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Rumänien?",
          "o": [
            "Dacia-Autos",
            "Zara-Kleidung (Inditex)",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Red Bull Energy-Drinks"
          ],
          "a": 0,
          "exp": "Dacia-Autos wurde in Rumänien gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Rumänien?",
          "o": [
            "hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt",
            "das Europäische Parlament hat seinen Hauptsitz in Straßburg",
            "hier kann man seit 2005 sicher online über das Internet wählen",
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt"
          ],
          "a": 0,
          "exp": "Fakt: hat den riesigen Parlamentspalast in Bukarest - eines der schwersten Gebäude der Welt."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Rumänien?",
          "o": [
            "Dacia-Autos",
            "Zara-Kleidung (Inditex)",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Red Bull Energy-Drinks"
          ],
          "a": 0,
          "exp": "Rumänien exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Schweden": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Schweden heute im Alltag?",
          "o": [
            "Schwedische Krone",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Schwedische Krone."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Schweden?",
          "o": [
            "IKEA-Möbel & Spotify-Musik",
            "Olivenöl & Schifffahrt",
            "Gorenje-Kühlschränke",
            "rote Sportwagen von Ferrari"
          ],
          "a": 0,
          "exp": "IKEA-Möbel & Spotify-Musik ist ein bekanntes Aushängeschild der Wirtschaft von Schweden."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Schweden?",
          "o": [
            "Automobilbau (Volvo) und Stahl",
            "Transport und Transitlogistik",
            "internationale Tech-Konzerne (Google, Apple)",
            "Tourismus auf den griechischen Inseln"
          ],
          "a": 0,
          "exp": "Automobilbau (Volvo) und Stahl ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Schweden?",
          "o": [
            "IKEA-Möbel & Spotify-Musik",
            "Olivenöl & Schifffahrt",
            "Gorenje-Kühlschränke",
            "rote Sportwagen von Ferrari"
          ],
          "a": 0,
          "exp": "IKEA-Möbel & Spotify-Musik wurde in Schweden gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Schweden?",
          "o": [
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab",
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas",
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet",
            "die Kurische Nehrung hat die größten Wanderdünen Europas"
          ],
          "a": 0,
          "exp": "Fakt: die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Schweden?",
          "o": [
            "IKEA-Möbel & Spotify-Musik",
            "Olivenöl & Schifffahrt",
            "Gorenje-Kühlschränke",
            "rote Sportwagen von Ferrari"
          ],
          "a": 0,
          "exp": "Schweden exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Slowakei": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Slowakei heute im Alltag?",
          "o": [
            "Slowakische Krone",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Slowakische Krone."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Slowakei?",
          "o": [
            "Autoproduktion für VW, Kia und Jaguar",
            "Ryanair-Flüge & Guinness-Bier",
            "rote Sportwagen von Ferrari",
            "LEGO-Bausteine"
          ],
          "a": 0,
          "exp": "Autoproduktion für VW, Kia und Jaguar ist ein bekanntes Aushängeschild der Wirtschaft von Slowakei."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Slowakei?",
          "o": [
            "Automobilherstellung pro Kopf weltweit am höchsten",
            "fortschrittliches e-Government",
            "Holz- und Papierprodukte",
            "internationale Tech-Konzerne (Google, Apple)"
          ],
          "a": 0,
          "exp": "Automobilherstellung pro Kopf weltweit am höchsten ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Slowakei?",
          "o": [
            "Autoproduktion für VW, Kia und Jaguar",
            "Ryanair-Flüge & Guinness-Bier",
            "rote Sportwagen von Ferrari",
            "LEGO-Bausteine"
          ],
          "a": 0,
          "exp": "Autoproduktion für VW, Kia und Jaguar wurde in Slowakei gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Slowakei?",
          "o": [
            "trennte sich 1993 völlig friedlich von der Tschechischen Republik",
            "Lew-Währung ist fest an die D-Mark/Euro gekoppelt",
            "die Hauptstadt Riga hat eine weltbekannte Jugendstil-Altstadt",
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet"
          ],
          "a": 0,
          "exp": "Fakt: trennte sich 1993 völlig friedlich von der Tschechischen Republik."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Slowakei?",
          "o": [
            "Autoproduktion für VW, Kia und Jaguar",
            "Ryanair-Flüge & Guinness-Bier",
            "rote Sportwagen von Ferrari",
            "LEGO-Bausteine"
          ],
          "a": 0,
          "exp": "Slowakei exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Slowenien": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Slowenien heute im Alltag?",
          "o": [
            "Slowenischer Tolar",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Slowenischer Tolar."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Slowenien?",
          "o": [
            "Gorenje-Kühlschränke",
            "elektrische Hypercars von Rimac",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Zara-Kleidung (Inditex)"
          ],
          "a": 0,
          "exp": "Gorenje-Kühlschränke ist ein bekanntes Aushängeschild der Wirtschaft von Slowenien."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Slowenien?",
          "o": [
            "pharmazeutische Generika-Industrie (Krka)",
            "Biotechnologie und Lasertechnik",
            "Blumenhandel (Aalsmeer)",
            "Holz- und Papierprodukte"
          ],
          "a": 0,
          "exp": "pharmazeutische Generika-Industrie (Krka) ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Slowenien?",
          "o": [
            "Gorenje-Kühlschränke",
            "elektrische Hypercars von Rimac",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Zara-Kleidung (Inditex)"
          ],
          "a": 0,
          "exp": "Gorenje-Kühlschränke wurde in Slowenien gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Slowenien?",
          "o": [
            "war das erste Land des ehemaligen Jugoslawiens, das der EU beitrat",
            "die Wähler lehnten den Euro 2003 in einer Volksabstimmung ab",
            "die Römischen Verträge von 1957 wurden hier unterschrieben",
            "Lappland gilt als Heimatort des Weihnachtsmanns"
          ],
          "a": 0,
          "exp": "Fakt: war das erste Land des ehemaligen Jugoslawiens, das der EU beitrat."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Slowenien?",
          "o": [
            "Gorenje-Kühlschränke",
            "elektrische Hypercars von Rimac",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Zara-Kleidung (Inditex)"
          ],
          "a": 0,
          "exp": "Slowenien exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Spanien": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Spanien heute im Alltag?",
          "o": [
            "Spanische Peseta",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Spanische Peseta."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Spanien?",
          "o": [
            "Zara-Kleidung (Inditex)",
            "Red Bull Energy-Drinks",
            "Olivenöl & Schifffahrt",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Zara-Kleidung (Inditex) ist ein bekanntes Aushängeschild der Wirtschaft von Spanien."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Spanien?",
          "o": [
            "Obst- und Gemüseexporte ('Gewächshaus Europas')",
            "Biotechnologie und Lasertechnik",
            "Holz- und Papierprodukte",
            "Blumenhandel (Aalsmeer)"
          ],
          "a": 0,
          "exp": "Obst- und Gemüseexporte ('Gewächshaus Europas') ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Spanien?",
          "o": [
            "Zara-Kleidung (Inditex)",
            "Red Bull Energy-Drinks",
            "Olivenöl & Schifffahrt",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Zara-Kleidung (Inditex) wurde in Spanien gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Spanien?",
          "o": [
            "Mallorca und Ibiza gehören politisch zu diesem EU-Staat",
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "muss EU-Verträge verfassungsgemäß per Volksabstimmung beschließen",
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte"
          ],
          "a": 0,
          "exp": "Fakt: Mallorca und Ibiza gehören politisch zu diesem EU-Staat."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Spanien?",
          "o": [
            "Zara-Kleidung (Inditex)",
            "Red Bull Energy-Drinks",
            "Olivenöl & Schifffahrt",
            "Autoproduktion für VW, Kia und Jaguar"
          ],
          "a": 0,
          "exp": "Spanien exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Tschechien": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Tschechien heute im Alltag?",
          "o": [
            "Tschechische Krone",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Tschechische Krone."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Tschechien?",
          "o": [
            "Skoda-Autos & Pilsner Bier",
            "airBaltic-Flüge & Holzexporte",
            "feine Pralinen",
            "Red Bull Energy-Drinks"
          ],
          "a": 0,
          "exp": "Skoda-Autos & Pilsner Bier ist ein bekanntes Aushängeschild der Wirtschaft von Tschechien."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Tschechien?",
          "o": [
            "Maschinenbau und Automobilzulieferung",
            "Automobilwerke (Audi, Suzuki) und Elektronik",
            "Adria-Tourismus",
            "Blumenhandel (Aalsmeer)"
          ],
          "a": 0,
          "exp": "Maschinenbau und Automobilzulieferung ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Tschechien?",
          "o": [
            "Skoda-Autos & Pilsner Bier",
            "airBaltic-Flüge & Holzexporte",
            "feine Pralinen",
            "Red Bull Energy-Drinks"
          ],
          "a": 0,
          "exp": "Skoda-Autos & Pilsner Bier wurde in Tschechien gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Tschechien?",
          "o": [
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "das Schengener Abkommen wurde in einem luxemburgischen Dorf unterzeichnet",
            "Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen",
            "war 2007 das erste EU-Land, das das Wahlalter auf 16 Jahre senkte"
          ],
          "a": 0,
          "exp": "Fakt: die historische Region Böhmen macht den Hauptteil des Landes aus."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Tschechien?",
          "o": [
            "Skoda-Autos & Pilsner Bier",
            "airBaltic-Flüge & Holzexporte",
            "feine Pralinen",
            "Red Bull Energy-Drinks"
          ],
          "a": 0,
          "exp": "Tschechien exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Ungarn": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Ungarn heute im Alltag?",
          "o": [
            "Ungarischen Forint",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Ungarischen Forint."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Ungarn?",
          "o": [
            "Tokajer-Süßwein & Rubik's Zauberwürfel",
            "duftendes Rosenöl",
            "feine Pralinen",
            "Naturkorken für Weinflaschen"
          ],
          "a": 0,
          "exp": "Tokajer-Süßwein & Rubik's Zauberwürfel ist ein bekanntes Aushängeschild der Wirtschaft von Ungarn."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Ungarn?",
          "o": [
            "Automobilwerke (Audi, Suzuki) und Elektronik",
            "Finanzdienstleistungen und Reedereien",
            "pharmazeutische Generika-Industrie (Krka)",
            "internationale Tech-Konzerne (Google, Apple)"
          ],
          "a": 0,
          "exp": "Automobilwerke (Audi, Suzuki) und Elektronik ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Ungarn?",
          "o": [
            "Tokajer-Süßwein & Rubik's Zauberwürfel",
            "duftendes Rosenöl",
            "feine Pralinen",
            "Naturkorken für Weinflaschen"
          ],
          "a": 0,
          "exp": "Tokajer-Süßwein & Rubik's Zauberwürfel wurde in Ungarn gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Ungarn?",
          "o": [
            "der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas",
            "die historische Region Böhmen macht den Hauptteil des Landes aus",
            "ist das bevölkerungsreichste osteuropäische EU-Mitgliedsland",
            "Mallorca und Ibiza gehören politisch zu diesem EU-Staat"
          ],
          "a": 0,
          "exp": "Fakt: der Plattensee (Balaton) ist der größte Binnensee Mitteleuropas."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Ungarn?",
          "o": [
            "Tokajer-Süßwein & Rubik's Zauberwürfel",
            "duftendes Rosenöl",
            "feine Pralinen",
            "Naturkorken für Weinflaschen"
          ],
          "a": 0,
          "exp": "Ungarn exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    },
    "Zypern": {
      "1": [
        {
          "q": "Welche Landeswährung nutzt Zypern heute im Alltag?",
          "o": [
            "Zypern-Pfund",
            "Pfund",
            "Dollar",
            "Yen"
          ],
          "a": 0,
          "exp": "Das Land zahlt weiterhin mit seiner Landeswährung: Zypern-Pfund."
        },
        {
          "q": "Welche weltweit bekannte Marke oder welches Exportprodukt stammt aus Zypern?",
          "o": [
            "Schiffsregister & Tourismus",
            "Investmentfonds & Frachtflüge",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Zara-Kleidung (Inditex)"
          ],
          "a": 0,
          "exp": "Schiffsregister & Tourismus ist ein bekanntes Aushängeschild der Wirtschaft von Zypern."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig ist von großer Bedeutung für Zypern?",
          "o": [
            "Finanzdienstleistungen und Reedereien",
            "Biotechnologie und Lasertechnik",
            "pharmazeutische Generika-Industrie (Krka)",
            "Maschinenbau und Chemie"
          ],
          "a": 0,
          "exp": "Finanzdienstleistungen und Reedereien ist eine wichtige tragende Säule der Wirtschaft."
        },
        {
          "q": "Welcher bekannte europäische Konzern bzw. welches Exportgut stammt aus Zypern?",
          "o": [
            "Schiffsregister & Tourismus",
            "Investmentfonds & Frachtflüge",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Zara-Kleidung (Inditex)"
          ],
          "a": 0,
          "exp": "Schiffsregister & Tourismus wurde in Zypern gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftsfakt oder welche steuerliche Besonderheit gilt für Zypern?",
          "o": [
            "ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist",
            "ein Viertel des Landes liegt unter dem Meeresspiegel",
            "besitzt drei Opt-outs (Ausnahmen) von EU-Verträgen",
            "Sitz des Europäischen Gerichtshofs ist hier nicht, aber dafür fast alle EU-Politiker-Zentralen"
          ],
          "a": 0,
          "exp": "Fakt: ist eine politisch geteilte Insel, wobei der Norden vom Süden getrennt ist."
        },
        {
          "q": "Welches Produkt gehört zu den wichtigsten wirtschaftlichen Exportgütern von Zypern?",
          "o": [
            "Schiffsregister & Tourismus",
            "Investmentfonds & Frachtflüge",
            "Luxusartikel von Louis Vuitton oder Chanel",
            "Zara-Kleidung (Inditex)"
          ],
          "a": 0,
          "exp": "Zypern exportiert dieses Gut in die gesamte Europäische Union."
        }
      ]
    }
  }
};
