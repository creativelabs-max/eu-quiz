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
    "q": "Welches Brüsseler Wahrzeichen zeigt ein vergrößertes Eisenkristallgitter? ⚛️🇧🇪",
    "o": [
      "Atomium",
      "Manneken Pis",
      "Grand-Place",
      "Maison du Roi"
    ],
    "a": 0,
    "exp": "Das Atomium stellt ein vergrößertes Eisenkristall dar."
  },
  {
    "q": "Welcher berühmte Eisenfachwerkturm in Paris ist das Wahrzeichen Frankreichs? 🗼🇫🇷",
    "o": [
      "Eiffelturm",
      "Arc de Triomphe",
      "Louvre-Pyramide",
      "Notre-Dame"
    ],
    "a": 0,
    "exp": "Der Eiffelturm wurde 1889 errichtet."
  },
  {
    "q": "Welches antike Amphitheater in Rom ist das größte der Welt? 🏛️🇮🇹",
    "o": [
      "Kolosseum",
      "Pantheon",
      "Forum Romanum",
      "Caracalla-Thermen"
    ],
    "a": 0,
    "exp": "Das Kolosseum bot Platz für über 50.000 Zuschauer."
  },
  {
    "q": "Welche Tempelanlage liegt auf einem Felsen über Athen? 🏛️🇬🇷",
    "o": [
      "Akropolis",
      "Parthenon",
      "Olympieion",
      "Hephaistostempel"
    ],
    "a": 0,
    "exp": "Die Akropolis ist das Symbol der Antike."
  },
  {
    "q": "Welcher EU-Staat hat auf der Landkarte die Form eines Stiefels? 👢🗺️",
    "o": [
      "Italien",
      "Kroatien",
      "Griechenland",
      "Spanien"
    ],
    "a": 0,
    "exp": "Italien hat die Form eines Stiefels."
  },
  {
    "q": "Welcher Staat wird wegen seiner sechseckigen Form 'L'Hexagone' genannt? ⬡🗺️",
    "o": [
      "Frankreich",
      "Deutschland",
      "Polen",
      "Spanien"
    ],
    "a": 0,
    "exp": "Wegen seiner Form wird Frankreich so genannt."
  },
  {
    "q": "In welcher Hauptstadt steht das berühmte neugotische Parlamentsgebäude am Donauufer? 🏛️🇭🇺",
    "o": [
      "Budapest",
      "Wien",
      "Bratislava",
      "Bukarest"
    ],
    "a": 0,
    "exp": "Das ungarische Parlament steht in Budapest."
  },
  {
    "q": "In welcher deutschen Stadt steht das Brandenburger Tor? 🏛️🇩🇪",
    "o": [
      "Berlin",
      "München",
      "Hamburg",
      "Bonn"
    ],
    "a": 0,
    "exp": "Das Brandenburger Tor steht in Berlin."
  },
  {
    "q": "In welcher Stadt steht die unvollendete Basilika Sagrada Família von Gaudí? ⛪🇪🇸",
    "o": [
      "Barcelona",
      "Madrid",
      "Sevilla",
      "Valencia"
    ],
    "a": 0,
    "exp": "Gaudís Lebenswerk steht in Barcelona."
  },
  {
    "q": "Welche historische Brücke überquert die Moldau in Prag? 🌉🇨🇿",
    "o": [
      "Karlsbrücke",
      "Kettenbrücke",
      "Rialtobrücke",
      "Basteibrücke"
    ],
    "a": 0,
    "exp": "Die Karlsbrücke liegt in Prag."
  },
  {
    "q": "Welcher historische Wehrturm steht an der Mündung des Tejo in Lissabon? 🏰🇵🇹",
    "o": [
      "Torre de Belém",
      "Castelo de São Jorge",
      "Padrão dos Descobrimentos",
      "Pena Palast"
    ],
    "a": 0,
    "exp": "Der Torre de Belém steht in Lissabon."
  },
  {
    "q": "Welche Höhenburg in Transsilvanien wird als 'Dracula-Schloss' bezeichnet? 🏰🇷🇴",
    "o": [
      "Schloss Bran",
      "Schloss Peleș",
      "Burg Hunedoara",
      "Festung Râșnov"
    ],
    "a": 0,
    "exp": "Schloss Bran inspirierte die Dracula-Legenden."
  },
  {
    "q": "Welches märchenhafte Schloss in der Slowakei gilt als eines der schönsten Mitteleuropas? 🏰🇸🇰",
    "o": [
      "Schloss Bojnice",
      "Burg Spiš",
      "Burg Bratislava",
      "Burg Devin"
    ],
    "a": 0,
    "exp": "Schloss Bojnice liegt in der Slowakei."
  },
  {
    "q": "Welche Burg thront auf einer Klippe über dem Bleder See? 🏰🇸🇮",
    "o": [
      "Burg Bled",
      "Burg Ljubljana",
      "Predjama Höhlenburg",
      "Burg Celje"
    ],
    "a": 0,
    "exp": "Die Burg Bled thront über dem Bleder See."
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
          "q": "Welches historische Abkommen führte 1921 zur Gründung einer der ältesten Währungs- und Wirtschaftsunionen Europas zwischen Belgien und einem Nachbarland?",
          "o": [
            "Benelux-Vertrag",
            "Belgisch-Luxemburgische Wirtschaftsunion",
            "Verträge von Brüssel",
            "Maagdenburg-Abkommen"
          ],
          "a": 1,
          "exp": "Die BLEU wurde 1921 zwischen Belgien und Luxemburg geschlossen."
        },
        {
          "q": "In welchem berühmten Brüsseler Gebäude hat die Europäische Kommission ihren offiziellen Sitz?",
          "o": [
            "Europa-Gebäude",
            "Berlaymont-Gebäude",
            "Justus-Lipsius-Gebäude",
            "Lex-Gebäude"
          ],
          "a": 1,
          "exp": "Das Berlaymont-Gebäude ist der Hauptsitz der Kommission."
        }
      ],
      "2": [
        {
          "q": "Der Pakt von Brüssel (1948) war ein Vorläufer der NATO. Welche Gründungsländer gehörten ihm neben Großbritannien und Frankreich an?",
          "o": [
            "Belgien, Niederlande und Luxemburg",
            "Belgien, Deutschland und Italien",
            "Dänemark, Norwegen und Belgien",
            "Belgien, Irland und die Schweiz"
          ],
          "a": 0,
          "exp": "Der Brüsseler Pakt wurde von den Benelux-Staaten, Frankreich und Großbritannien unterzeichnet."
        },
        {
          "q": "Welches EU-Land übte als erstes in der Geschichte der Gemeinschaft im Jahr 1958 unter Paul-Henri Spaak den Ratsvorsitz aus?",
          "o": [
            "Frankreich",
            "Deutschland",
            "Belgien",
            "Niederlande"
          ],
          "a": 2,
          "exp": "Belgien übernahm 1958 den ersten Ratsvorsitz."
        }
      ],
      "3": [
        {
          "q": "Welcher europäische Vertrag von 1965 führte die Exekutivorgane der EGW, Montanunion und Atomgemeinschaft ab 1967 in Brüssel zusammen?",
          "o": [
            "Vertrag von Nizza",
            "Fusionsvertrag",
            "Amsterdamer Vertrag",
            "Einheitliche Europäische Akte"
          ],
          "a": 1,
          "exp": "Der Fusionsvertrag vereinte die Organe der Europäischen Gemeinschaften."
        },
        {
          "q": "Welcher belgische Politiker war von 1995 bis 1999 der erste Präsident der Europäischen Kommission nach ihrer Reform und Stärkung durch den Vertrag von Maastricht?",
          "o": [
            "Jean-Claude Juncker",
            "Jacques Santer",
            "Gaston Thorn",
            "Etienne Davignon"
          ],
          "a": 1,
          "exp": "Jacques Santer war Kommissionspräsident von 1995 bis 1999."
        }
      ]
    },
    "Bulgarien": {
      "1": [
        {
          "q": "Welches Abkommen von 1878 verkleinerte das im selben Jahr im Frieden von San Stefano geschaffene 'Großbulgarien' beträchtlich?",
          "o": [
            "Berliner Vertrag",
            "Pariser Frieden",
            "Londoner Protokoll",
            "Vertrag von Bukarest"
          ],
          "a": 0,
          "exp": "Der Berliner Kongress revidierte den Frieden von San Stefano."
        },
        {
          "q": "Welches Amt bekleidete die bulgarische EU-Kommissarin Mariya Gabriel, bevor sie in die nationale Politik zurückkehrte?",
          "o": [
            "EU-Kommissarin für Innovation, Forschung, Kultur, Bildung und Jugend",
            "Hohe Vertreterin der EU für Außen- und Sicherheitspolitik",
            "EU-Kommissarin für Wettbewerb",
            "Präsidentin des Europäischen Rechnungshofs"
          ],
          "a": 0,
          "exp": "Mariya Gabriel leitete das Ressort Innovation und Bildung."
        }
      ],
      "2": [
        {
          "q": "Welcher Friedensvertrag nach dem Ersten Weltkrieg regelte 1919 die Gebietsverluste Bulgariens an die Entente-Mächte?",
          "o": [
            "Vertrag von Trianon",
            "Vertrag von Neuilly-sur-Seine",
            "Vertrag von Sèvres",
            "Vertrag von Saint-Germain"
          ],
          "a": 1,
          "exp": "Der Vertrag von Neuilly-sur-Seine regelte die Bedingungen für Bulgarien."
        },
        {
          "q": "In welchem Jahr trat Bulgarien – gemeinsam mit Rumänien – dem Schengen-Raum bei (zumindest für den Luft- und Seeverkehr)?",
          "o": [
            "2011",
            "2018",
            "2024",
            "Sie sind bis heute nicht im Schengen-Raum"
          ],
          "a": 2,
          "exp": "Bulgarien trat im März 2024 Schengen für Luft- und Seegrenzen bei."
        }
      ],
      "3": [
        {
          "q": "In welchem Beitrittsvertrag von 2005 wurde die Aufnahme Bulgariens und Rumäniens in die EU zum 1. Januar 2007 besiegelt?",
          "o": [
            "Vertrag von Luxemburg",
            "Vertrag von Sofia",
            "Vertrag von Athen",
            "Vertrag von Straßburg"
          ],
          "a": 0,
          "exp": "Der Beitrittsvertrag wurde 2005 in Luxemburg unterzeichnet."
        },
        {
          "q": "Wie heißt die bulgarische Nationalwährung, die Bulgarien trotz EU-Mitgliedschaft und der Erfüllung vieler Kriterien noch behalten hat, bevor der Euro kommt?",
          "o": [
            "Denar",
            "Lew",
            "Forint",
            "Kuna"
          ],
          "a": 1,
          "exp": "Der Lew ist die Währung Bulgariens vor dem Euro-Beitritt."
        }
      ]
    },
    "Dänemark": {
      "1": [
        {
          "q": "In welchem Vertrag von 1864 musste Dänemark nach dem Deutsch-Dänischen Krieg die Herzogtümer Schleswig, Holstein und Lauenburg abtreten?",
          "o": [
            "Frieden von Wien",
            "Vertrag von Prag",
            "Kopenhagener Diktat",
            "Abkommen von Malmö"
          ],
          "a": 0,
          "exp": "Der Frieden von Wien beendete den Deutsch-Dänischen Krieg 1864."
        },
        {
          "q": "Welches berühmte Protokoll handelte Dänemark 1992 aus, um nach dem Nein zum Vertrag von Maastricht bestimmte EU-Bereiche nicht mitmachen zu müssen?",
          "o": [
            "Edinburgh-Entscheidung",
            "Kopenhagener Kriterien",
            "Jütland-Ausnahme",
            "Öresund-Klausel"
          ],
          "a": 0,
          "exp": "Die Edinburgh-Entscheidung sicherte Dänemarks Opt-outs."
        }
      ],
      "2": [
        {
          "q": "Welcher Zusatzpakt sicherte Dänemark 1992 die Befreiung von der Euro-Einführung und der gemeinsamen Verteidigung zu (Opt-Outs)?",
          "o": [
            "Abkommen von Edinburgh",
            "Protokoll von Aarhus",
            "Kompromiss von Odense",
            "Statut von Aalborg"
          ],
          "a": 0,
          "exp": "Das Abkommen von Edinburgh sicherte Dänemarks vier Opt-Outs."
        },
        {
          "q": "In welchem Jahr stimmte die dänische Bevölkerung in einem Referendum schließlich dafür, das jahrzehntelange EU-Verteidigungsopt-out aufzuheben?",
          "o": [
            "2015",
            "2019",
            "2022",
            "2025"
          ],
          "a": 2,
          "exp": "Im Juni 2022 stimmte Dänemark für das Ende des Verteidigungs-Opt-outs."
        }
      ],
      "3": [
        {
          "q": "Welcher historische Friede beendete 1660 den Krieg zwischen Dänemark-Norwegen und Schweden und legte die bis heute gültige Grenze am Öresund fest?",
          "o": [
            "Frieden von Roskilde",
            "Frieden von Kopenhagen",
            "Frieden von Lund",
            "Frieden von Stettin"
          ],
          "a": 1,
          "exp": "Der Frieden von Kopenhagen bestätigte die Grenze am Öresund."
        },
        {
          "q": "Nach wem sind die berühmten Beitrittskriterien benannt, die Kandidatenländer erfüllen müssen, bevor sie der EU beitreten dürfen?",
          "o": [
            "Nach der Stadt Kopenhagen",
            "Nach dem dänischen EU-Kommissar Poul Schlüter",
            "Nach dem Vertrag von Odense",
            "Nach dem Nordischen Rat"
          ],
          "a": 0,
          "exp": "Die Kopenhagener Kriterien wurden 1993 auf dem EU-Gipfel in Kopenhagen beschlossen."
        }
      ]
    },
    "Deutschland": {
      "1": [
        {
          "q": "Welches historische Regelwerk von 1648 beendete den Dreißigjährigen Krieg im Heiligen Römischen Reich Deutscher Nation?",
          "o": [
            "Westfälischer Friede",
            "Augsburger Religionsfrieden",
            "Frieden von Utrecht",
            "Rastatter Frieden"
          ],
          "a": 0,
          "exp": "Der Westfälische Friede wurde in Münster und Osnabrück geschlossen."
        },
        {
          "q": "In welcher deutschen Stadt hat die Europäische Zentralbank (EZB) ihren Hauptsitz?",
          "o": [
            "Berlin",
            "Bonn",
            "Frankfurt am Main",
            "München"
          ],
          "a": 2,
          "exp": "Die EZB steuert die Geldpolitik vom Hauptsitz Frankfurt am Main."
        }
      ],
      "2": [
        {
          "q": "Welcher Vertrag zwischen den beiden deutschen Staaten und den vier Siegermächten machte 1990 den Weg für die Deutsche Wiedervereinigung frei?",
          "o": [
            "Grundlagenvertrag",
            "Zweiter Deutschlandvertrag",
            "Zwei-plus-Vier-Vertrag",
            "Potsdamer Abkommen"
          ],
          "a": 2,
          "exp": "Der Zwei-plus-Vier-Vertrag regelte die äußeren Aspekte der Wiedervereinigung."
        },
        {
          "q": "Welche Stadt in Deutschland wurde für ihre besonders europafreundliche Haltung mit dem renommierten Europapreis ausgezeichnet und trägt oft den Titel 'Europastadt'?",
          "o": [
            "Aachen",
            "Straßburg",
            "Kehl",
            "Passau"
          ],
          "a": 0,
          "exp": "Aachen verleiht jährlich den Internationalen Karlspreis."
        }
      ],
      "3": [
        {
          "q": "Welcher zwischenmenschliche Versöhnungsvertrag wurde 1963 von Konrad Adenauer und Charles de Gaulle unterzeichnet?",
          "o": [
            "Elysee-Vertrag",
            "Vertrag von Aachen",
            "Rheinland-Pakt",
            "Vertrag von Locarno"
          ],
          "a": 0,
          "exp": "Der Élysée-Vertrag begründete die deutsch-französische Freundschaft."
        },
        {
          "q": "Welcher deutsche Bundeskanzler schlug 1998 gemeinsam mit dem französischen Präsidenten ein Konzept für eine engere europäische Wirtschaftspolitik vor?",
          "o": [
            "Helmut Kohl",
            "Gerhard Schröder",
            "Angela Merkel",
            "Olaf Scholz"
          ],
          "a": 1,
          "exp": "Gerhard Schröder gestaltete die Einführung des Euro mit."
        }
      ]
    },
    "Estland": {
      "1": [
        {
          "q": "Welcher Friedensvertrag von 1920 zwischen Estland und Sowjetrussland erkannte die estnische Unabhängigkeit 'auf ewige Zeiten' an?",
          "o": [
            "Frieden von Tartu",
            "Vertrag von Tallinn",
            "Frieden von Brest-Litowsk",
            "Abkommen von Narva"
          ],
          "a": 0,
          "exp": "Im Frieden von Tartu erkannte Russland Estlands Unabhängigkeit an."
        },
        {
          "q": "In welcher estnischen Stadt befindet sich die wichtigste EU-Agentur für das Betriebsmanagement von IT-Großsystemen im Raum Freiheit, Sicherheit und Recht (eu-LISA)?",
          "o": [
            "Tartu",
            "Tallinn",
            "Pärnu",
            "Narva"
          ],
          "a": 1,
          "exp": "eu-LISA hat ihren Hauptsitz in Tallinn."
        }
      ],
      "2": [
        {
          "q": "Welches Geheimprotokoll führte 1939 dazu, dass Estland von der Sowjetunion besetzt und annektiert wurde?",
          "o": [
            "Hitler-Stalin-Pakt",
            "Dreimächtepakt",
            "Zusatzerklärung von Jalta",
            "Münchner Abkommen"
          ],
          "a": 0,
          "exp": "Das geheime Zusatzprotokoll teilte Osteuropa in Interessensphären."
        },
        {
          "q": "In welchem Jahr führte Estland als erster der drei baltischen Staaten den Euro als offizielle Währung ein?",
          "o": [
            "2007",
            "2011",
            "2014",
            "2015"
          ],
          "a": 1,
          "exp": "Estland führte am 1. Januar 2011 den Euro ein."
        }
      ],
      "3": [
        {
          "q": "In welcher städtischen Absichtserklärung forderten die baltischen Staaten 1989 die Aufhebung der sowjetischen Besatzung?",
          "o": [
            "Deklaration von Tallinn",
            "Baltische Karta",
            "Rigaer Aufruf",
            "Manifest von Pärnu"
          ],
          "a": 1,
          "exp": "Die Baltische Karta untermauerte das Streben nach Freiheit."
        },
        {
          "q": "Welche estnische Politikerin wurde 2024 zur Hohen Vertreterin der EU für Außen- und Sicherheitspolitik nominiert bzw. gewählt?",
          "o": [
            "Kersti Kaljulaid",
            "Kaja Kallas",
            "Marina Kaljurand",
            "Yana Toom"
          ],
          "a": 1,
          "exp": "Kaja Kallas folgte auf Josep Borrell als EU-Außenbeauftragte."
        }
      ]
    },
    "Finnland": {
      "1": [
        {
          "q": "Durch welchen Vertrag mit Schweden trat dieses 1809 das gesamte Gebiet Finnlands an das Russische Kaiserreich ab?",
          "o": [
            "Frieden von Fredrikshamn",
            "Vertrag von Åbo",
            "Frieden von Nystad",
            "Abkommen von Vasa"
          ],
          "a": 0,
          "exp": "Der Frieden von Fredrikshamn machte Finnland zum Großfürstentum im Russischen Reich."
        },
        {
          "q": "Welche EU-Agentur mit Sitz in Helsinki ist für die Sicherheit von Chemikalien und den Schutz von Mensch und Umwelt zuständig?",
          "o": [
            "Europäische Agentur für Chemikalien",
            "Europäische Arzneimittel-Agentur",
            "Europäische Umweltagentur",
            "Europäische Grenzschutzagentur"
          ],
          "a": 0,
          "exp": "Die ECHA ist in Helsinki ansässig."
        }
      ],
      "2": [
        {
          "q": "Welcher Friedensvertrag von 1947 verpflichtete Finnland nach dem Zweiten Weltkrieg zu Gebietsabtretungen (wie Karelien) an die Sowjetunion?",
          "o": [
            "Pariser Friedensvertrag",
            "Frieden von Moskau",
            "Waffenstillstand von Haparanda",
            "Vertrag von Poti"
          ],
          "a": 0,
          "exp": "Der Pariser Friedensvertrag von 1947 beendete den Kriegszustand."
        },
        {
          "q": "In welchem Jahr trat Finnland gemeinsam mit Schweden und Österreich der Europäischen Union bei?",
          "o": [
            "1973",
            "1986",
            "1995",
            "2004"
          ],
          "a": 2,
          "exp": "Finnland trat am 1. Januar 1995 der EU bei."
        }
      ],
      "3": [
        {
          "q": "In welcher Stadt wurde 1975 die Schlussakte der Konferenz über Sicherheit und Zusammenarbeit in Europa (KSZE) unterzeichnet?",
          "o": [
            "Tampere",
            "Turku",
            "Helsinki",
            "Rovaniemi"
          ],
          "a": 2,
          "exp": "Die Schlussakte von Helsinki war ein Meilenstein des Kalten Krieges."
        },
        {
          "q": "Welcher finnische Ministerpräsident vertrat sein Land 1999 beim EU-Gipfel in Köln, als die gemeinsame europäische Sicherheits- und Verteidigungspolitik beschlossen wurde?",
          "o": [
            "Paavo Lipponen",
            "Esko Aho",
            "Matti Vanhanen",
            "Alexander Stubb"
          ],
          "a": 0,
          "exp": "Paavo Lipponen war finnischer Ministerpräsident."
        }
      ]
    },
    "Frankreich": {
      "1": [
        {
          "q": "Welcher Vertrag von 1951 legte den Grundstein für das europäische Projekt durch die Gründung der Montanunion (EGKS)?",
          "o": [
            "Vertrag von Rom",
            "Pariser Vertrag",
            "Vertrag von Maastricht",
            "Schuman-Akte"
          ],
          "a": 1,
          "exp": "Der Pariser Vertrag gründete 1951 die EGKS."
        },
        {
          "q": "Welche französische Stadt ist neben Brüssel der offizielle Sitz des Europäischen Parlaments, in dem die monatlichen Plenartagungen stattfinden?",
          "o": [
            "Paris",
            "Lyon",
            "Straßburg",
            "Marseille"
          ],
          "a": 2,
          "exp": "Straßburg ist der verfassungsmäßige Tagungsort des EU-Parlaments."
        }
      ],
      "2": [
        {
          "q": "Mit welchem Abkommen beendete Frankreich 1962 den Algerienkrieg und entließ das nordafrikanische Land in die Unabhängigkeit?",
          "o": [
            "Verträge von Évian",
            "Deklaration von Algier",
            "Frieden von Marseille",
            "Abkommen von Casablanca"
          ],
          "a": 0,
          "exp": "Die Verträge von Évian beendeten den Algerienkrieg."
        },
        {
          "q": "Welcher französische Außenminister legte am 9. Mai 1950 den Grundstein für die europäische Einigung mit seiner berühmten Erklärung?",
          "o": [
            "Aristide Briand",
            "Robert Schuman",
            "Jean Monnet",
            "Pierre Mendès France"
          ],
          "a": 1,
          "exp": "Der Schuman-Plan führte zur Gründung der EGKS."
        }
      ],
      "3": [
        {
          "q": "In welchem Schloss wurde 1919 der Friedensvertrag unterzeichnet, der den Ersten Weltkrieg mit Deutschland offiziell beendete?",
          "o": [
            "Schloss Fontainebleau",
            "Schloss Versailles",
            "Schloss Saint-Germain",
            "Schloss Compiègne"
          ],
          "a": 1,
          "exp": "Der Vertrag von Versailles wurde im Spiegelsaal unterzeichnet."
        },
        {
          "q": "In welchem Jahr stimmten die Franzosen in einem überraschend knappen Referendum für den Vertrag von Maastricht?",
          "o": [
            "1991",
            "1992",
            "1993",
            "1995"
          ],
          "a": 1,
          "exp": "Frankreich stimmte im September 1992 für den Vertrag."
        }
      ]
    },
    "Griechenland": {
      "1": [
        {
          "q": "Welcher Vertrag von 1832 erkannte die Unabhängigkeit Griechenlands vom Osmanischen Reich international durch die Großmächte an?",
          "o": [
            "Vertrag von Konstantinopel",
            "Vertrag von Adrianopel",
            "Londoner Protokoll",
            "Frieden von Bukarest"
          ],
          "a": 0,
          "exp": "Der Vertrag von Konstantinopel bestätigte Griechenlands Unabhängigkeit."
        },
        {
          "q": "Als wievieltes Mitgliedsland trat Griechenland 1981 der damaligen Europäischen Gemeinschaft (EG) bei?",
          "o": [
            "Als 7. Mitglied",
            "Als 10. Mitglied",
            "Als 12. Mitglied",
            "Als 15. Mitglied"
          ],
          "a": 1,
          "exp": "Griechenland wurde 1981 das 10. EG-Mitglied."
        }
      ],
      "2": [
        {
          "q": "In welchem Vertrag von 1923 wurde der Bevölkerungsaustausch zwischen Griechenland und der Türkei nach dem Griechisch-Türkischen Krieg geregelt?",
          "o": [
            "Vertrag von Lausanne",
            "Vertrag von Sèvres",
            "Abkommen von Izmir",
            "Pakt von Athen"
          ],
          "a": 0,
          "exp": "Der Vertrag von Lausanne regelte den Bevölkerungsaustausch."
        },
        {
          "q": "Wie hieß das gigantische finanzielle Hilfsprogramm, mit dem die Eurozone Griechenland ab 2010 vor der Staatspleite rettete?",
          "o": [
            "Griechenland-Fonds",
            "Europäischer Rettungsschirm",
            "Athener Stabilitätspakt",
            "Troika-Hilfsfonds"
          ],
          "a": 1,
          "exp": "EFSF und ESM stützten Griechenlands Staatsfinanzen."
        }
      ],
      "3": [
        {
          "q": "Welcher Friedensvertrag von 1947 sprach den Dodekanes (inklusive Rhodos) nach dem Zweiten Weltkrieg von Italien an Griechenland zu?",
          "o": [
            "Pariser Friedensvertrag",
            "Vertrag von Rhodos",
            "Abkommen von London",
            "Vertrag von Genf"
          ],
          "a": 0,
          "exp": "Der Pariser Frieden übertrug den Dodekanes an Griechenland."
        },
        {
          "q": "Welche griechische Insel war jahrelang das Epizentrum der europäischen Migrationskrise und beherbergte das umstrittene EU-Lager Moria?",
          "o": [
            "Kreta",
            "Rhodos",
            "Lesbos",
            "Korfu"
          ],
          "a": 2,
          "exp": "Lesbos lag im Zentrum der Fluchtroute im Ägäischen Meer."
        }
      ]
    },
    "Irland": {
      "1": [
        {
          "q": "Welcher Vertrag beendete 1921 den Irischen Unabhängigkeitskrieg und schuf den Irischen Freistaat?",
          "o": [
            "Anglo-Irischer Vertrag",
            "Vertrag von Belfast",
            "Abkommen von Limerick",
            "Traktat von Dublin"
          ],
          "a": 0,
          "exp": "Der Anglo-Irische Vertrag schuf den Freistaat."
        },
        {
          "q": "In welchem Jahr trat Irland (zeitgleich mit dem Vereinigten Königreich und Dänemark) der EU bei?",
          "o": [
            "1957",
            "1973",
            "1981",
            "1995"
          ],
          "a": 1,
          "exp": "Irland trat 1973 der Europäischen Gemeinschaft bei."
        }
      ],
      "2": [
        {
          "q": "Welches historische Abkommen von 1691 besiegelte die Unterwerfung der katholischen Iren unter den protestantischen König Wilhelm von Oranien?",
          "o": [
            "Vertrag von Limerick",
            "Pakt von Boyne",
            "Edikt von Cork",
            "Statut von Kilkenny"
          ],
          "a": 0,
          "exp": "Der Vertrag von Limerick beendete den Krieg der zwei Könige."
        },
        {
          "q": "Welcher EU-Steueraspekt und wirtschaftliche Standortvorteil ist seit Jahrzehnten ein Markenzeichen und oft heftig diskutiertes Thema in Irland?",
          "o": [
            "Sehr hohe CO2-Steuern",
            "Die niedrige Körperschaftsteuer für Unternehmen",
            "Steuerfreiheit für sämtliche Exporte",
            "Die vollständige Befreiung von der Mehrwertsteuer"
          ],
          "a": 1,
          "exp": "Die niedrige Körperschaftsteuer lockte globale Tech-Konzerne an."
        }
      ],
      "3": [
        {
          "q": "In welchem Abkommen verpflichteten sich das VK und Irland 1985 erstmals, der Republik Irland eine konsultative Rolle in Nordirland einzuräumen?",
          "o": [
            "Anglo-Irisches Abkommen",
            "Karfreitagsabkommen",
            "Abkommen von Sunningdale",
            "Pakt von Stormont"
          ],
          "a": 0,
          "exp": "Das Anglo-Irische Abkommen von 1985 gab Irland Beratungsschritte."
        },
        {
          "q": "Welches berühmte irische 'Nein' bei einem EU-Referendum sorgte 2008 für eine kurze institutionelle Krise, ehe es beim zweiten Anlauf klappte?",
          "o": [
            "Ablehnung des Vertrags von Lissabon",
            "Ablehnung des Vertrags von Nizza",
            "Ablehnung des Euro-Beitritts",
            "Ablehnung der EU-Verfassung"
          ],
          "a": 0,
          "exp": "2008 lehnten die Iren den Vertrag von Lissabon zunächst ab."
        }
      ]
    },
    "Italien": {
      "1": [
        {
          "q": "Welche Verträge von 1925 sollten die europäischen Grenzen der Nachkriegszeit nach dem Ersten Weltkrieg sichern?",
          "o": [
            "Verträge von Locarno",
            "Verträge von Rapallo",
            "Dreimächtepakt",
            "Pakt von Stresa"
          ],
          "a": 0,
          "exp": "Die Verträge von Locarno sicherten die Westgrenzen."
        },
        {
          "q": "Italien gehört zu den sechs Gründungsstaaten. Wie hieß das Vorläuferbündnis, das 1951 in Paris unterzeichnet wurde?",
          "o": [
            "Europäische Wirtschaftsgemeinschaft",
            "Europäische Gemeinschaft für Kohle und Stahl",
            "Europäische Verteidigungsgemeinschaft",
            "Europäische Politische Gemeinschaft"
          ],
          "a": 1,
          "exp": "Die EGKS wurde 1951 von den sechs Gründerstaaten ins Leben gerufen."
        }
      ],
      "2": [
        {
          "q": "Welcher Bündnisvertrag von 1882 verband Italien militärisch mit Deutschland und Österreich-Ungarn?",
          "o": [
            "Dreibund",
            "Zweibund",
            "Dreikaiserabkommen",
            "Achse Rom-Berlin"
          ],
          "a": 0,
          "exp": "Der Dreibund verband Italien mit den Mittelmächten."
        },
        {
          "q": "In welcher italienischen Stadt wurde 1957 der historische Vertrag zur Gründung der EWG und Euratom unterzeichnet?",
          "o": [
            "Mailand",
            "Rom",
            "Florenz",
            "Neapel"
          ],
          "a": 1,
          "exp": "Die Römischen Verträge wurden 1957 im Kapitol unterzeichnet."
        }
      ],
      "3": [
        {
          "q": "In welchem Vertrag verlor Italien 1859 die Lombardei an das spätere Königreich Italien (über Frankreich)?",
          "o": [
            "Vorfrieden von Villafranca",
            "Vertrag von Turin",
            "Frieden von Solferino",
            "Pakt von Mailand"
          ],
          "a": 0,
          "exp": "Der Vorfrieden von Villafranca beendete den Sardinischen Krieg."
        },
        {
          "q": "Welcher ehemalige italienische Ministerpräsident trat 1999 die Nachfolge von Jacques Santer als EU-Kommissionspräsident an?",
          "o": [
            "Silvio Berlusconi",
            "Romano Prodi",
            "Mario Draghi",
            "Giuliano Amato"
          ],
          "a": 1,
          "exp": "Romano Prodi leitete die Kommission von 1999 bis 2004."
        }
      ]
    },
    "Kroatien": {
      "1": [
        {
          "q": "Welches Friedensabkommen beendete 1995 den Kroatienkrieg und regelte die friedliche Reintegration Ostslawoniens?",
          "o": [
            "Erdut-Abkommen",
            "Abkommen von Dayton",
            "Vertrag von Split",
            "Pakt von Zadar"
          ],
          "a": 0,
          "exp": "Das Erdut-Abkommen regelte die friedliche Reintegration."
        },
        {
          "q": "Mit welchem Datum wurde Kroatien offiziell das 28. Mitglied der Europäischen Union?",
          "o": [
            "1. Januar 2007",
            "1. Juli 2013",
            "1. Januar 2015",
            "1. Januar 2020"
          ],
          "a": 1,
          "exp": "Kroatien trat am 1. Juli 2013 der EU bei."
        }
      ],
      "2": [
        {
          "q": "Welches Abkommen führte 1939 zur Schaffung einer autonomen Banowina Kroatien innerhalb des Königreichs Jugoslawien?",
          "o": [
            "Cvetković-Maček-Abkommen",
            "Abkommen von Vid",
            "Pakt von Belgrad",
            "Deklaration von Zagreb"
          ],
          "a": 0,
          "exp": "Das Cvetković-Maček-Abkommen schuf die Banowina Kroatien."
        },
        {
          "q": "In welchem Jahr trat Kroatien nach erfüllten Kriterien dem engsten europäischen Raum bei: der Eurozone und dem Schengen-Raum?",
          "o": [
            "2015",
            "2020",
            "2023",
            "2025"
          ],
          "a": 2,
          "exp": "Am 1. Januar 2023 führte Kroatien den Euro ein und trat Schengen bei."
        }
      ],
      "3": [
        {
          "q": "Durch welchen Vertrag von 1920 trat das Königreich der Serben, Kroaten und Slowenen Teile Istriens und Zadar an Italien ab?",
          "o": [
            "Grenzvertrag von Rapallo",
            "Vertrag von Rom",
            "Abkommen von Fiume",
            "Vertrag von Pula"
          ],
          "a": 0,
          "exp": "Der Grenzvertrag von Rapallo legte die Adria-Grenzen fest."
        },
        {
          "q": "Wer war die kroatische Premierministerin, unter deren Führung das Land die EU-Beitrittsverhandlungen erfolgreich abschloss?",
          "o": [
            "Ivo Sanader",
            "Jadranka Kosor",
            "Andrej Plenković",
            "Zoran Milanović"
          ],
          "a": 1,
          "exp": "Jadranka Kosor schloss 2011 die Beitrittsverhandlungen ab."
        }
      ]
    },
    "Lettland": {
      "1": [
        {
          "q": "Welcher Friedensvertrag beendete am 11. August 1920 den Lettischen Unabhängigkeitskrieg gegen Sowjetrussland?",
          "o": [
            "Frieden von Riga",
            "Vertrag von Liepāja",
            "Pakt von Daugavpils",
            "Abkommen von Brest"
          ],
          "a": 0,
          "exp": "Der Frieden von Riga sicherte Lettlands Unabhängigkeit 1920."
        },
        {
          "q": "Wann hatte Lettland zum ersten Mal den Ratsvorsitz der Europäischen Union inne?",
          "o": [
            "Im ersten Halbjahr 2015",
            "Im zweiten Halbjahr 2018",
            "Im ersten Halbjahr 2020",
            "Lettland hatte diesen noch nie"
          ],
          "a": 0,
          "exp": "Lettland übernahm im 1. Halbjahr 2015 den EU-Ratsvorsitz."
        }
      ],
      "2": [
        {
          "q": "Welches multilaterale Abkommen führte 1921 zur offiziellen Aufnahme Lettlands in den Völkerbund?",
          "o": [
            "Völkerbund-Akte von Genf",
            "Vertrag von Versailles",
            "Deklaration von Riga",
            "Statut von Den Haag"
          ],
          "a": 0,
          "exp": "Lettland wurde 1921 Mitglied des Völkerbundes."
        },
        {
          "q": "Welches war das genaue Jahr, in dem Lettland den Euro einführte?",
          "o": [
            "2009",
            "2012",
            "2014",
            "2016"
          ],
          "a": 2,
          "exp": "Lettland trat am 1. Januar 2014 der Eurozone bei."
        }
      ],
      "3": [
        {
          "q": "In welchem Grenzvertrag von 2007 verzichtete Lettland endgültig auf das Gebiet Pytalowo (Abrene) zugunsten Russlands?",
          "o": [
            "Vertrag von Moskau",
            "Vertrag von Riga",
            "Grenzprotokoll von Pskow",
            "Deklaration von St. Petersburg"
          ],
          "a": 0,
          "exp": "Der Vertrag von Moskau regelte die grenzrechtliche Situation."
        },
        {
          "q": "Welcher bekannte lettische Politiker und ehemalige Ministerpräsident wurde 2014 zum EU-Kommissar und später zum Exekutiv-Vizepräsidenten der EU-Kommission ernannt?",
          "o": [
            "Valdis Dombrovskis",
            "Māris Kučinskis",
            "Krišjānis Kariņš",
            "Edgars Rinkēvičs"
          ],
          "a": 0,
          "exp": "Valdis Dombrovskis bekleidete führende EU-Finanzressorts."
        }
      ]
    },
    "Litauen": {
      "1": [
        {
          "q": "Welcher Vertrag begründete 1569 die reale Personalunion zwischen dem Königreich Polen und dem Großfürstentum Litauen?",
          "o": [
            "Union von Lublin",
            "Union von Krewo",
            "Pakt von Vilnius",
            "Vertrag von Trakai"
          ],
          "a": 0,
          "exp": "Die Union von Lublin schuf den polnisch-litauischen Staat."
        },
        {
          "q": "Welche litauische Politikerin und frühere Präsidentin wurde 2009 die erste weibliche Präsidentin des Landes und war davor hochangesehene EU-Kommissarin für Finanzplanung und Budget?",
          "o": [
            "Inga Šimonytė",
            "Dalia Grybauskaitė",
            "Viktorija Čmilytė-Nielsen",
            "Audronė Ažubalienė"
          ],
          "a": 1,
          "exp": "Dalia Grybauskaitė war EU-Kommissarin und Staatsoberhaupt."
        }
      ],
      "2": [
        {
          "q": "Welcher Friedensvertrag von 1422 nach der Schlacht bei Tannenberg legte die Grenze Litauens zum Deutschen Orden fest?",
          "o": [
            "Frieden von Melnosee",
            "Frieden von Thorn",
            "Vertrag von Kaunas",
            "Abkommen von Klaipėda"
          ],
          "a": 0,
          "exp": "Der Frieden von Melnosee legte die preußisch-litauische Grenze fest."
        },
        {
          "q": "In welchem Jahr führte Litauen als letzter der baltischen Staaten den Euro ein?",
          "o": [
            "2011",
            "2013",
            "2015",
            "2018"
          ],
          "a": 2,
          "exp": "Litauen wurde am 1. Januar 2015 Mitglied der Eurozone."
        }
      ],
      "3": [
        {
          "q": "Durch welchen Vertrag von 1920 erkannte Sowjetrussland Vilnius als Hauptstadt des unabhängigen Litauens an?",
          "o": [
            "Sowjetisch-Litauischer Friedensvertrag",
            "Vertrag von Suwałki",
            "Pakt von Grodno",
            "Abkommen von Tilsit"
          ],
          "a": 0,
          "exp": "Der Vertrag von 1920 erkannte Vilnius als Hauptstadt Litauens an."
        },
        {
          "q": "Welches Institut der EU hat seinen Sitz in Vilnius und widmet sich der Gleichstellung von Frauen und Männern?",
          "o": [
            "Europäisches Institut für Gleichstellungsfragen",
            "Europäische Agentur für Cybersicherheit",
            "Europäische Arbeitsbehörde",
            "Agentur für Grundrechte"
          ],
          "a": 0,
          "exp": "Das EIGE hat seinen Hauptsitz in Vilnius."
        }
      ]
    },
    "Luxemburg": {
      "1": [
        {
          "q": "In welchem luxemburgischen Grenzdorf wurde 1985 das Abkommen zum Abbau der Personenkontrollen an den europäischen Grenzen unterzeichnet?",
          "o": [
            "Schengen",
            "Vianden",
            "Echternach",
            "Remich"
          ],
          "a": 0,
          "exp": "Das Schengener Abkommen wurde in Schengen unterzeichnet."
        },
        {
          "q": "Luxemburg ist neben Brüssel und Straßburg der dritte offizielle Arbeitsort der EU. Welche wichtigen EU-Institutionen haben dort ihren Sitz?",
          "o": [
            "Europäischer Gerichtshof und Europäische Investitionsbank",
            "Europäische Zentralbank und EU-Parlament",
            "Europäischer Rechnungshof und EU-Kommission",
            "Europol und Eurojust"
          ],
          "a": 0,
          "exp": "Der EuGH, der EuRH und die EIB sitzen in Luxemburg."
        }
      ],
      "2": [
        {
          "q": "Welcher Erste Londoner Vertrag von 1839 spaltete das Großherzogtum Luxemburg und trat die westliche Hälfte an ein Nachbarland ab?",
          "o": [
            "Abkommen an Belgien",
            "Abkommen an Frankreich",
            "Pakt an Preußen",
            "Vertrag an die Niederlande"
          ],
          "a": 0,
          "exp": "Der Vertrag teilte Luxemburg und trat den Westteil an Belgien ab."
        },
        {
          "q": "Wer war der langjährige luxemburgische Premierminister und EU-Kommissionspräsident, der wie kein anderer die Euro-Krise und die Ära nach der Jahrtausendwende prägte?",
          "o": [
            "Jacques Santer",
            "Jean-Claude Juncker",
            "Xavier Bettel",
            "Luc Frieden"
          ],
          "a": 1,
          "exp": "Jean-Claude Juncker leitete von 2014 bis 2019 die Kommission."
        }
      ],
      "3": [
        {
          "q": "Welchem deutschen Wirtschaftsbündnis gehörte Luxemburg von 1842 bis zum Ende des Ersten Weltkriegs 1919 an?",
          "o": [
            "Deutscher Zollverein",
            "Norddeutscher Bund",
            "Rheinbund",
            "Mitteldeutscher Handelsverein"
          ],
          "a": 0,
          "exp": "Luxemburg war Mitglied im Deutschen Zollverein."
        },
        {
          "q": "In welchem Jahr trat das nach einer luxemburgischen Ortschaft benannte Schengener Abkommen in Kraft?",
          "o": [
            "1985 bzw. 1995",
            "1992",
            "2000",
            "2004"
          ],
          "a": 0,
          "exp": "Das Schengener Abkommen wurde 1985 unterzeichnet und trat 1995 in Kraft."
        }
      ]
    },
    "Malta": {
      "1": [
        {
          "q": "Welches Abkommen regelte 1972 den endgültigen Abzug der britischen Truppen und der NATO-Basis von Malta bis 1979?",
          "o": [
            "Das Maintop-Abkommen",
            "Vertrag von Valletta",
            "Pakt von Mdina",
            "Deklaration von London"
          ],
          "a": 0,
          "exp": "Das Abkommen leitete das Ende der britischen Militärpräsenz ein."
        },
        {
          "q": "In welchem Jahr trat der Inselstaat Malta gemeinsam mit neun anderen Ländern der Europäischen Union bei?",
          "o": [
            "1995",
            "2004",
            "2007",
            "2013"
          ],
          "a": 1,
          "exp": "Malta trat am 1. Mai 2004 der EU bei."
        }
      ],
      "2": [
        {
          "q": "Welcher Friedensvertrag von 1802 sah eigentlich vor, dass Malta an den Johanniterorden zurückgegeben werden sollte (was nie geschah)?",
          "o": [
            "Frieden von Amiens",
            "Vertrag von Paris",
            "Kongressakte von Wien",
            "Vertrag von Campo Formio"
          ],
          "a": 0,
          "exp": "Der Frieden von Amiens sah die Rückgabe an den Orden vor."
        },
        {
          "q": "Welche wichtige EU-Agentur hat ihren Hauptsitz in Malta?",
          "o": [
            "Europäische Agentur für Asylfragen",
            "Europäische Fischereiförderung",
            "Europäische Arzneimittelagentur",
            "Europäische Raumfahrtagentur"
          ],
          "a": 0,
          "exp": "Die EUAA sitzt in Valletta/Marsa."
        }
      ],
      "3": [
        {
          "q": "In welchem multilateralen Vertrag trat Frankreich 1814 die Lufthoheit und Souveränität über Malta offiziell an Großbritannien ab?",
          "o": [
            "Erster Pariser Frieden",
            "Vertrag von Gent",
            "Wiener Kongress",
            "Vertrag von Utrecht"
          ],
          "a": 0,
          "exp": "Der Pariser Frieden sprach Malta Großbritannien zu."
        },
        {
          "q": "In welchem Jahr führte Malta den Euro als offizielle Währung ein?",
          "o": [
            "2004",
            "2008",
            "2011",
            "2014"
          ],
          "a": 1,
          "exp": "Malta führte am 1. Januar 2008 den Euro ein."
        }
      ]
    },
    "Niederlande": {
      "1": [
        {
          "q": "Welcher Friedensvertrag von 1648 erkannte die Unabhängigkeit der Republik der Sieben Vereinigten Niederlande von Spanien an?",
          "o": [
            "Frieden von Münster",
            "Frieden von Breda",
            "Frieden von Nijmegen",
            "Frieden von Rijswijk"
          ],
          "a": 0,
          "exp": "Der Frieden von Münster besiegelte die niederländische Unabhängigkeit."
        },
        {
          "q": "Nach welcher niederländischen Stadt ist der berühmte Vertrag von 1992 benannt, mit dem die Europäische Union (EU) offiziell gegründet wurde?",
          "o": [
            "Amsterdam",
            "Rotterdam",
            "Maastricht",
            "Den Haag"
          ],
          "a": 2,
          "exp": "Der Vertrag von Maastricht wurde 1992 unterzeichnet."
        }
      ],
      "2": [
        {
          "q": "In welcher niederländischen Stadt wurde 1992 der Vertrag über die Europäische Union (VEU) unterzeichnet?",
          "o": [
            "Amsterdam",
            "Maastricht",
            "Rotterdam",
            "Utrecht"
          ],
          "a": 1,
          "exp": "Der Vertrag von Maastricht wurde 1992 unterzeichnet."
        },
        {
          "q": "Welche weltbekannte europäische Strafverfolgungsbehörde hat ihren Sitz in Den Haag (Niederlande)?",
          "o": [
            "Europol",
            "Eurojust",
            "Frontex",
            "OLAF"
          ],
          "a": 0,
          "exp": "Europol hat seinen Hauptsitz in Den Haag."
        }
      ],
      "3": [
        {
          "q": "Welches Abkommen schlossen die Niederlande 1944 im Exil in London zur Gründung einer Zollunion mit Belgien und Luxemburg?",
          "o": [
            "Benelux-Abkommen",
            "Vertrag von Den Haag",
            "Atlantik-Pakt",
            "Dreiländer-Akte"
          ],
          "a": 0,
          "exp": "Das Benelux-Abkommen schuf die Zollunion."
        },
        {
          "q": "Welcher niederländische Politiker und ehemalige Ministerpräsident wurde 2024 zum Generalsekretär der NATO ernannt?",
          "o": [
            "Mark Rutte",
            "Wim Kok",
            "Jan Peter Balkenende",
            "Dries van Agt"
          ],
          "a": 0,
          "exp": "Mark Rutte übernahm 2024 die Führung der NATO."
        }
      ]
    },
    "Österreich": {
      "1": [
        {
          "q": "Welcher Diktatfrieden von 1919 besiegelte die Auflösung der Doppelmonarchie Österreich-Ungarn nach dem Ersten Weltkrieg?",
          "o": [
            "Vertrag von Saint-Germain-en-Laye",
            "Vertrag von Trianon",
            "Frieden von Brest-Litowsk",
            "Vertrag von Neuilly"
          ],
          "a": 0,
          "exp": "Der Vertrag von Saint-Germain löste Österreich-Ungarn auf."
        },
        {
          "q": "In welchem Jahr trat Österreich nach einer erfolgreichen Volksabstimmung der Europäischen Union bei?",
          "o": [
            "1992",
            "1995",
            "1999",
            "2004"
          ],
          "a": 1,
          "exp": "Österreich trat am 1. Januar 1995 der EU bei."
        }
      ],
      "2": [
        {
          "q": "Welches Abkommen verpflichtete Österreich 1955 gegenüber den Besatzungsmächten zur Verankerung der Immerwährenden Neutralität?",
          "o": [
            "Moskauer Memorandum",
            "Genfer Protokolle",
            "Wiener Übereinkommen",
            "Staatsvertrag von Belgrad"
          ],
          "a": 0,
          "exp": "Das Moskauer Memorandum ging dem Staatsvertrag voraus."
        },
        {
          "q": "Wer war der allererste österreichische EU-Kommissar nach dem Beitritt des Landes 1995?",
          "o": [
            "Benita Ferrero-Waldner",
            "Franz Fischler",
            "Ursula Haubner",
            "Maria Berger"
          ],
          "a": 1,
          "exp": "Franz Fischler amtierte von 1995 bis 2004 als Landwirtschaftskommissar."
        }
      ],
      "3": [
        {
          "q": "In welchen Protokollen von 1922 gewährte der Völkerbund Österreich eine Völkerbundanleihe zur Sanierung der Staatsfinanzen?",
          "o": [
            "Genfer Protokolle",
            "Vertrag von Lausanne",
            "Abkommen von Linz",
            "Pakt von Baden"
          ],
          "a": 0,
          "exp": "Die Genfer Protokolle sanierten die Finanzen."
        },
        {
          "q": "Welche EU-Agentur hat ihren Sitz in Wien und ist auf Grundrechte und Menschenrechte spezialisiert?",
          "o": [
            "Agentur der Europäischen Union für Grundrechte",
            "Europäisches Patentamt",
            "Internationale Atomenergie-Organisation",
            "Europäische Umweltagentur"
          ],
          "a": 0,
          "exp": "Die FRA sitzt in Wien."
        }
      ]
    },
    "Polen": {
      "1": [
        {
          "q": "Welches Abkommen von 1970 zwischen der BRD und Polen erkannte die Oder-Neiße-Linie als polnische Westgrenze an?",
          "o": [
            "Warschauer Vertrag",
            "Görlitzer Abkommen",
            "Vertrag von Danzig",
            "Potsdamer Charta"
          ],
          "a": 0,
          "exp": "Der Warschauer Vertrag erkannte die Oder-Neiße-Grenze an."
        },
        {
          "q": "Welche bedeutende EU-Agentur hat ihren Hauptsitz in Warschau und koordiniert den Schutz der EU-Außengrenzen?",
          "o": [
            "Frontex",
            "Europol",
            "Eurojust",
            "Amt für Betrugsbekämpfung"
          ],
          "a": 0,
          "exp": "Frontex hat seinen Hauptsitz in Warschau."
        }
      ],
      "2": [
        {
          "q": "Welcher Bündnispakt des Ostblocks wurde 1955 als Gegenstück zur NATO in der polnischen Hauptstadt gegründet?",
          "o": [
            "Warschauer Pakt",
            "Roter Pakt",
            "Osteuropäischer Bund",
            "Rat für gegenseitige Wirtschaftshilfe"
          ],
          "a": 0,
          "exp": "Der Warschauer Pakt wurde 1955 gegründet."
        },
        {
          "q": "In welchem Jahr trat Polen im Zuge der großen EU-Osterweiterung der Gemeinschaft bei?",
          "o": [
            "1999",
            "2004",
            "2007",
            "2011"
          ],
          "a": 1,
          "exp": "Polen trat am 1. Mai 2004 der EU bei."
        }
      ],
      "3": [
        {
          "q": "In welchem Grenzvertrag von 1921 wurden die Grenzen Polens nach dem Polnisch-Sowjetischen Krieg festgelegt?",
          "o": [
            "Frieden von Riga",
            "Vertrag von Brest-Litowsk",
            "Vertrag von Lublin",
            "Pakt von Suwałki"
          ],
          "a": 0,
          "exp": "Der Frieden von Riga legte die Ostgrenze fest."
        },
        {
          "q": "Welcher polnische Ministerpräsident und spätere EU-Ratspräsident (2014–2019) prägte die europäische Politik maßgeblich mit?",
          "o": [
            "Lech Wałęsa",
            "Jarosław Kaczyński",
            "Donald Tusk",
            "Mateusz Morawiecki"
          ],
          "a": 2,
          "exp": "Donald Tusk war von 2014 bis 2019 Präsident des Europäischen Rates."
        }
      ]
    },
    "Portugal": {
      "1": [
        {
          "q": "Welcher ältester noch heute gültige Bündnisvertrag der Welt wurde 1386 zwischen Portugal und England geschlossen?",
          "o": [
            "Vertrag von Windsor",
            "Allianzpakt von Lissabon",
            "Vertrag von Tagus",
            "Krone-Pakt von London"
          ],
          "a": 0,
          "exp": "Der Vertrag von Windsor gilt als ältestes aktives Bündnis."
        },
        {
          "q": "In welcher portugiesischen Stadt fand im Jahr 2000 der historische EU-Gipfel statt, auf dem die sogenannte 'Lissabon-Strategie' beschlossen wurde?",
          "o": [
            "Lissabon",
            "Porto",
            "Coimbra",
            "Faro"
          ],
          "a": 0,
          "exp": "Der EU-Gipfel im März 2000 fand in Lissabon statt."
        }
      ],
      "2": [
        {
          "q": "In welcher portugiesischen Stadt wurde 2007 der Reformvertrag der Europäischen Union unterzeichnet?",
          "o": [
            "Porto",
            "Lissabon",
            "Coimbra",
            "Faro"
          ],
          "a": 1,
          "exp": "Der Vertrag von Lissabon trat 2009 in Kraft."
        },
        {
          "q": "Welcher portugiesische Premierminister wurde 2024 zum Präsidenten des Europäischen Rates gewählt?",
          "o": [
            "Aníbal Cavaco Silva",
            "José Manuel Barroso",
            "António Costa",
            "Marcelo Rebelo de Sousa"
          ],
          "a": 2,
          "exp": "António Costa wurde 2024 zum EU-Ratspräsidenten gewählt."
        }
      ],
      "3": [
        {
          "q": "Welches Abkommen teilte 1529 die Einflusssphären zwischen Portugal und Spanien auf der östlichen Hemisphäre (Pazifik) auf?",
          "o": [
            "Vertrag von Saragossa",
            "Vertrag von Tordesillas",
            "Pakt von Macao",
            "Akte von Goa"
          ],
          "a": 0,
          "exp": "Der Vertrag von Saragossa ergänzte Tordesillas im Pazifik."
        },
        {
          "q": "Wer war der langjährige portugiesische Ministerpräsident, der von 2004 bis 2014 als Präsident der Europäischen Kommission amtierte?",
          "o": [
            "José Manuel Barroso",
            "António Guterres",
            "Pedro Passos Coelho",
            "Jorge Sampaio"
          ],
          "a": 0,
          "exp": "José Manuel Barroso leitete zwei Amtszeiten lang die EU-Kommission."
        }
      ]
    },
    "Rumänien": {
      "1": [
        {
          "q": "Welcher Vertrag besiegelte 1878 auf dem Berliner Kongress die Unabhängigkeit Rumäniens vom Osmanischen Reich?",
          "o": [
            "Berliner Vertrag",
            "Vertrag von San Stefano",
            "Pariser Frieden",
            "Vertrag von Bukarest"
          ],
          "a": 0,
          "exp": "Der Berliner Vertrag erkannte Rumäniens Unabhängigkeit an."
        },
        {
          "q": "In welchem Jahr trat Rumänien gemeinsam mit Bulgarien der Europäischen Union bei?",
          "o": [
            "2004",
            "2007",
            "2011",
            "2013"
          ],
          "a": 1,
          "exp": "Rumänien trat am 1. Januar 2007 der EU bei."
        }
      ],
      "2": [
        {
          "q": "In welchem Friedensvertrag von 1920 wurden Rumänien Gebiete wie Siebenbürgen, das Banat und die Bukowina zugesprochen?",
          "o": [
            "Vertrag von Trianon",
            "Vertrag von Neuilly",
            "Frieden von Craiova",
            "Abkommen von Iași"
          ],
          "a": 0,
          "exp": "Der Vertrag von Trianon regelte die Nachkriegsgrenzen."
        },
        {
          "q": "Welche rumänische Spitzenjuristin wurde 2019 zur allerersten Europäischen Generalstaatsanwältin und Leiterin der Europäischen Staatsanwaltschaft (EPPO) ernannt?",
          "o": [
            "Laura Codruța Kövesi",
            "Viorica Dăncilă",
            "Alina Gorghiu",
            "Monica Macovei"
          ],
          "a": 0,
          "exp": "Laura Codruța Kövesi leitet die EPPO."
        }
      ],
      "3": [
        {
          "q": "Durch welchen Vertrag von 1940 musste Rumänien die Süddobrudscha an Bulgarien abtreten?",
          "o": [
            "Vertrag von Craiova",
            "Wiener Schiedsspruch",
            "Pakt von Galati",
            "Abkommen von Sofia"
          ],
          "a": 0,
          "exp": "Der Vertrag von Craiova trat die Süddobrudscha an Bulgarien ab."
        },
        {
          "q": "Welcher wichtige EU-Gipfel zur Zukunft der EU fand 2019 in der rumänischen Stadt Sibiu statt?",
          "o": [
            "Der Gipfel von Sibiu",
            "Bukarest-Konferenz",
            "Karpaten-Gipfel",
            "Schwarzmeer-Forum"
          ],
          "a": 0,
          "exp": "Der Gipfel von Sibiu befasste sich mit der strategischen Agenda."
        }
      ]
    },
    "Schweden": {
      "1": [
        {
          "q": "Welches historische Bündnis schloss Schweden 1397 mit Dänemark und Norwegen zur gemeinsamen Herrschaft?",
          "o": [
            "Kalmarer Union",
            "Nordischer Bund",
            "Ostsee-Liga",
            "Hanse-Union"
          ],
          "a": 0,
          "exp": "Die Kalmarer Union vereinte Nordeuropa."
        },
        {
          "q": "In welchem Jahr trat Schweden (zeitgleich mit Finnland und Österreich) der Europäischen Union bei?",
          "o": [
            "1973",
            "1986",
            "1995",
            "2004"
          ],
          "a": 2,
          "exp": "Schweden wurde am 1. Januar 1995 EU-Mitglied."
        }
      ],
      "2": [
        {
          "q": "Welcher Friedensvertrag beendete 1721 den Großen Nordischen Krieg und läutete das Ende Schwedens als Großmacht ein?",
          "o": [
            "Frieden von Nystad",
            "Frieden von Altranstädt",
            "Frieden von Traventhal",
            "Vertrag von Stockholm"
          ],
          "a": 0,
          "exp": "Der Frieden von Nystad beendete Schwedens Großmachtrolle."
        },
        {
          "q": "Welches bemerkenswerte Votum gab die schwedische Bevölkerung in einer Volksabstimmung im Jahr 2003 bezüglich der EU ab?",
          "o": [
            "Sie stimmten gegen die Einführung des Euro.",
            "Sie stimmten für den Austritt aus der EU.",
            "Sie stimmten gegen den Verbleib im Schengen-Raum.",
            "Sie lehnten die gemeinsame EU-Agrarpolitik ab."
          ],
          "a": 0,
          "exp": "2003 lehnte eine Mehrheit der Schweden den Euro ab."
        }
      ],
      "3": [
        {
          "q": "Welcher Konvention von 1905 regelte die friedliche Auflösung der schwedisch-norwegischen Personalunion?",
          "o": [
            "Konvention von Karlstad",
            "Vertrag von Oslo",
            "Pakt von Göteborg",
            "Akte von Malmö"
          ],
          "a": 0,
          "exp": "Die Konvention von Karlstad löste die Union friedlich auf."
        },
        {
          "q": "Welche wichtige EU-Gesundheitsagentur hat ihren Sitz in Stockholm?",
          "o": [
            "Europäisches Zentrum für die Prävention und die Kontrolle von Krankheiten",
            "Europäische Arzneimittel-Agentur",
            "Europäische Umweltagentur",
            "Europäische Agentur für Lebensmittelsicherheit"
          ],
          "a": 0,
          "exp": "Das ECDC hat seinen Sitz in Stockholm."
        }
      ]
    },
    "Slowakei": {
      "1": [
        {
          "q": "Welches Abkommen regelt seit 1991 die enge regionale Zusammenarbeit der Slowakei mit Polen, Ungarn und Tschechien?",
          "o": [
            "Visegrád-Abkommen",
            "Donauraum-Pakt",
            "Mitteleuropäisches Abkommen",
            "Karpaten-Konvention"
          ],
          "a": 0,
          "exp": "Die Visegrád-Gruppe fördert die regionale Kooperation."
        },
        {
          "q": "In welchem Jahr trat die Slowakei der Europäischen Union bei und in welchem Jahr führte sie den Euro ein?",
          "o": [
            "Beitritt 2004, Euro 2009",
            "Beitritt 2007, Euro 2011",
            "Beitritt 2004, Euro 2007",
            "Beitritt 2009, Euro 2014"
          ],
          "a": 0,
          "exp": "Die Slowakei trat 2004 bei und führte 2009 den Euro ein."
        }
      ],
      "2": [
        {
          "q": "Welcher erste Schiedsspruch von 1938 zwang die Tschechoslowakei zur Abtretung südlicher Gebiete an Ungarn?",
          "o": [
            "Erster Wiener Schiedsspruch",
            "Münchner Abkommen",
            "Pakt von Bratislava",
            "Diktat von Komárno"
          ],
          "a": 0,
          "exp": "Der Erste Wiener Schiedsspruch trat Gebiete an Ungarn ab."
        },
        {
          "q": "Welcher slowakische Diplomat und EU-Politiker amtierte jahrelang als Vizepräsident der EU-Kommission und war für den Green Deal zuständig?",
          "o": [
            "Maroš Šefčovič",
            "Ivan Korčok",
            "Miroslav Lajčák",
            "Eduard Heger"
          ],
          "a": 0,
          "exp": "Maroš Šefčovič ist langjähriges Kommissionsmitglied."
        }
      ],
      "3": [
        {
          "q": "In welchem Abkommen von 1945 trat die Tschechoslowakei die Karpatenukraine offiziell an die Sowjetunion ab?",
          "o": [
            "Vertrag von Moskau",
            "Vertrag von Uschhorod",
            "Kaschauer Programm",
            "Prager Manifest"
          ],
          "a": 0,
          "exp": "Der Vertrag von Moskau schloss den Übergang ab."
        },
        {
          "q": "Welche Länder bildeten gemeinsam mit der Slowakei das Fundament der Visegrád-Gruppe (V4) im Jahr 1991?",
          "o": [
            "Polen, Ungarn und Tschechien",
            "Österreich, Slowenien und Kroatien",
            "Rumänien, Bulgarien und Griechenland",
            "Die baltischen Staaten"
          ],
          "a": 0,
          "exp": "Die V4 vereint Polen, Tschechien, die Slowakei und Ungarn."
        }
      ]
    },
    "Slowenien": {
      "1": [
        {
          "q": "Welches Abkommen von 1954 teilte das Freie Territorium Triest vorübergehend zwischen Italien und Jugoslawien auf?",
          "o": [
            "Londoner Memorandum",
            "Vertrag von Osimo",
            "Pakt von Koper",
            "Grenzvertrag von Gorizia"
          ],
          "a": 0,
          "exp": "Das Londoner Memorandum regelte die Zonenverwaltung."
        },
        {
          "q": "Als erstes der neuen EU-Länder aus dem ehemaligen Jugoslawien führte Slowenien im Jahr... welchen Schritt getan?",
          "o": [
            "Es führte 2007 den Euro ein.",
            "Es trat 2004 der EU bei und trat sofort der Eurozone bei.",
            "Es erfand den Schengen-Raum mit.",
            "Es übernahm als erstes Land den EU-Ratsvorsitz im Jahr 2004."
          ],
          "a": 0,
          "exp": "Slowenien führte am 1. Januar 2007 den Euro ein."
        }
      ],
      "2": [
        {
          "q": "Welcher Vertrag von 1975 legte die Grenze zwischen Italien und Jugoslawien (heute Slowenien) endgültig völkerrechtlich fest?",
          "o": [
            "Vertrag von Osimo",
            "Vertrag von Rapallo",
            "Abkommen von Brijuni",
            "Pakt von Portorož"
          ],
          "a": 0,
          "exp": "Der Vertrag von Osimo bestätigte die Staatsgrenze."
        },
        {
          "q": "In welchem Jahr hatte Slowenien zum ersten Mal den rotierenden Vorsitz im Rat der Europäischen Union inne?",
          "o": [
            "Im ersten Halbjahr 2008",
            "Im zweiten Halbjahr 2010",
            "Im ersten Halbjahr 2013",
            "Im zweiten Halbjahr 2015"
          ],
          "a": 0,
          "exp": "Slowenien übernahm im 1. Halbjahr 2008 den EU-Ratsvorsitz."
        }
      ],
      "3": [
        {
          "q": "Welche Deklaration beendete am 8. Juli 1991 den Zehn-Tage-Krieg in Slowenien und fror die Unabhängigkeit für 3 Monate ein?",
          "o": [
            "Deklaration von Brijuni",
            "Abkommen von Brdo",
            "Pakt von Ljubljana",
            "Abkommen von Piran"
          ],
          "a": 0,
          "exp": "Die Deklaration von Brijuni stoppte die Kampfhandlungen."
        },
        {
          "q": "Welcher slowenische Philosoph und Intellektuelle mischt sich regelmäßig in europäische Diskurse über die Krise des Kapitalismus und der EU ein?",
          "o": [
            "Slavoj Žižek",
            "Milan Kučan",
            "Danilo Türk",
            "Janez Janša"
          ],
          "a": 0,
          "exp": "Slavoj Žižek ist ein weltweit bekannter Philosoph."
        }
      ]
    },
    "Spanien": {
      "1": [
        {
          "q": "Welcher Vertrag von 1713 beendete den Spanischen Erbfolgekrieg und sprach Gibraltar an Großbritannien ab?",
          "o": [
            "Frieden von Utrecht",
            "Vertrag von Rastatt",
            "Frieden von Baden",
            "Pakt von Madrid"
          ],
          "a": 0,
          "exp": "Der Frieden von Utrecht sprach Gibraltar den Briten zu."
        },
        {
          "q": "In welchem Jahr traten Spanien und Portugal gleichzeitig der Europäischen Gemeinschaft (EG) bei?",
          "o": [
            "1981",
            "1986",
            "1992",
            "1995"
          ],
          "a": 1,
          "exp": "Spanien und Portugal traten am 1. Januar 1986 bei."
        }
      ],
      "2": [
        {
          "q": "In welchem Pariser Frieden von 1898 verlor Spanien nach dem Spanisch-Amerikanischen Krieg seine letzten Kolonien?",
          "o": [
            "Pariser Vertrag von 1898",
            "Vertrag von Manila",
            "Pakt von Havanna",
            "Abkommen von Washington"
          ],
          "a": 0,
          "exp": "Der Pariser Vertrag von 1898 beendete das Kolonialreich in Übersee."
        },
        {
          "q": "Welche spanische Stadt ist der offizielle Sitz der EU-Agentur für geistiges Eigentum (EUIPO)?",
          "o": [
            "Madrid",
            "Barcelona",
            "Alicante",
            "Valencia"
          ],
          "a": 2,
          "exp": "Das EUIPO sitzt in Alicante."
        }
      ],
      "3": [
        {
          "q": "Welches Beitrittsabkommen von 1985 besiegelte den EU-Beitritt Spaniens und Portugals zum 1. Januar 1986?",
          "o": [
            "Vertrag von Madrid/Lissabon",
            "Vertrag von Sevilla",
            "Pakt von Toledo",
            "Abkommen von Porto"
          ],
          "a": 0,
          "exp": "Der Beitrittsvertrag wurde 1985 feierlich unterzeichnet."
        },
        {
          "q": "Welcher berühmte spanische Politiker war von 2019 bis 2024 Hoher Vertreter der EU für Außen- und Sicherheitspolitik?",
          "o": [
            "Javier Solana",
            "Josep Borrell",
            "Felipe González",
            "Luis de Guindos"
          ],
          "a": 1,
          "exp": "Josep Borrell amtierte als EU-Außenbeauftragter."
        }
      ]
    },
    "Tschechien": {
      "1": [
        {
          "q": "Welches Abkommen von 1938 zwang die Tschechoslowakei zur Abtretung des Sudetenlandes an das Deutsche Reich?",
          "o": [
            "Münchner Abkommen",
            "Vertrag von Berlin",
            "Prager Pakt",
            "Wiener Diktat"
          ],
          "a": 0,
          "exp": "Das Münchner Abkommen führte zur Abtretung des Sudetenlandes."
        },
        {
          "q": "In welchem Jahr trat Tschechien gemeinsam mit neun anderen Staaten der Europäischen Union bei?",
          "o": [
            "1999",
            "2004",
            "2007",
            "2013"
          ],
          "a": 1,
          "exp": "Tschechien wurde am 1. Mai 2004 EU-Mitglied."
        }
      ],
      "2": [
        {
          "q": "Welcher Friedensvertrag beendete 1866 den Deutschen Krieg zwischen Preußen und Österreich und führte zur Auflösung des Deutschen Bundes in Prag?",
          "o": [
            "Prager Frieden",
            "Vertrag von Olmütz",
            "Frieden von Königgrätz",
            "Pakt von Pilsen"
          ],
          "a": 0,
          "exp": "Der Prager Frieden beendete den Krieg von 1866."
        },
        {
          "q": "Welche EU-Agentur für Weltraumnavigation und das europäische Satellitennavigationssystem (Galileo) hat ihren Hauptsitz in der tschechischen Hauptstadt Prag?",
          "o": [
            "Agentur der Europäischen Union für das Weltraumprogramm",
            "Europäische Weltraumorganisation",
            "Europäische Raumfahrtbehörde für Galileo",
            "Europäisches Satellitenzentrum"
          ],
          "a": 0,
          "exp": "Die EUSPA hat ihren Hauptsitz in Prag."
        }
      ],
      "3": [
        {
          "q": "Welcher historische Prager Frieden von 1635 war ein Versuch, den Dreißigjährigen Krieg im Heiligen Römischen Reich vorzeitig zu beenden?",
          "o": [
            "Prager Frieden",
            "Böhmischer Ausgleich",
            "Kaiserliches Edikt",
            "Vertrag von Leitmeritz"
          ],
          "a": 0,
          "exp": "Der Prager Frieden von 1635 versuchte den Reichsfrieden wiederherzustellen."
        },
        {
          "q": "Welcher tschechische Präsident (1989–1993), bekannt als früherer Dissident, war ein glühender Verfechter einer tiefen europäischen Integration und Menschenrechtspolitik?",
          "o": [
            "Václav Klaus",
            "Václav Havel",
            "Miloš Zeman",
            "Petr Fiala"
          ],
          "a": 1,
          "exp": "Václav Havel war ein berühmter Vorkämpfer der Demokratie."
        }
      ]
    },
    "Ungarn": {
      "1": [
        {
          "q": "Welcher Friedensvertrag von 1920 kostete das Königreich Ungarn rund zwei Drittel seines bisherigen Territoriums?",
          "o": [
            "Vertrag von Trianon",
            "Vertrag von Saint-Germain",
            "Diktat von Bratislava",
            "Vertrag von Sèvres"
          ],
          "a": 0,
          "exp": "Der Vertrag von Trianon regelte die Grenzen Ungarns nach 1918."
        },
        {
          "q": "In welchem Jahr trat Ungarn der Europäischen Union bei?",
          "o": [
            "2000",
            "2004",
            "2007",
            "2011"
          ],
          "a": 1,
          "exp": "Ungarn trat am 1. Mai 2004 der EU bei."
        }
      ],
      "2": [
        {
          "q": "Welches historische Dokument von 1222 beschränkte erstmals die Macht des ungarischen Königs zugunsten des Adels?",
          "o": [
            "Goldene Bulle von Ungarn",
            "Pakt von Buda",
            "Statut von Székesfehérvár",
            "Charta von Pest"
          ],
          "a": 0,
          "exp": "Die Goldene Bulle von 1222 beschränkte die königliche Macht."
        },
        {
          "q": "Welches Prinzip oder Verfahren der EU wurde in den letzten Jahren im Streit um Rechtsstaatlichkeit und Justizreformen besonders im Zusammenhang mit Ungarn intensiv diskutiert?",
          "o": [
            "Der Rechtsstaatsmechanismus und eingefrorene EU-Gelder",
            "Das automatische Ausschlussverfahren für Nettozahler",
            "Die Entziehung des EU-Ratsvorsitzes auf Lebenszeit",
            "Die Suspendierung des Stimmrechts nach Artikel 50"
          ],
          "a": 0,
          "exp": "Der Rechtsstaatsmechanismus bindet EU-Mittel an Rechtsstaatlichkeit."
        }
      ],
      "3": [
        {
          "q": "Welche Konvention von 1699 beendete den Großen Türkenkrieg und sprach fast ganz Ungarn den Habsburgern zu?",
          "o": [
            "Frieden von Karlowitz",
            "Frieden von Passarowitz",
            "Vertrag von Eisenburg",
            "Pakt von Szeged"
          ],
          "a": 0,
          "exp": "Der Frieden von Karlowitz beendete die osmanische Herrschaft."
        },
        {
          "q": "Welcher ungarische Politiker war langjähriger EU-Kommissar für Erweiterung und europäische Nachbarschaftspolitik?",
          "o": [
            "Tibor Navracsics",
            "Olivér Várhelyi",
            "László Kovács",
            "Péter Szijjártó"
          ],
          "a": 1,
          "exp": "Olivér Várhelyi amtierte als Kommissar für Erweiterung."
        }
      ]
    },
    "Zypern": {
      "1": [
        {
          "q": "Welche drei Staaten garantierten im Garantievertrag von 1960 die Unabhängigkeit und Verfassungsordnung Zyperns?",
          "o": [
            "Großbritannien, Griechenland und die Türkei",
            "Großbritannien, Italien und Griechenland",
            "USA, Griechenland und die Türkei",
            "Großbritannien, Frankreich und Griechenland"
          ],
          "a": 0,
          "exp": "Großbritannien, Griechenland und die Türkei waren die Garantiemächte."
        },
        {
          "q": "In welchem Jahr trat die Republik Zypern der Europäischen Union bei?",
          "o": [
            "2000",
            "2004",
            "2007",
            "2008"
          ],
          "a": 1,
          "exp": "Zypern trat am 1. Mai 2004 der EU bei."
        }
      ],
      "2": [
        {
          "q": "In welchen Abkommen von 1959 wurden die Grundlagen für die Unabhängigkeit Zyperns von Großbritannien erarbeitet?",
          "o": [
            "Zürcher und Londoner Abkommen",
            "Genfer Konventionen",
            "Verträge von Nikosia",
            "Pakt von Athen"
          ],
          "a": 0,
          "exp": "Die Zürcher und Londoner Abkommen schufen die Republik Zypern."
        },
        {
          "q": "Warum gilt das EU-Recht de facto bis heute nicht im gesamten Staatsgebiet der Republik Zypern?",
          "o": [
            "Weil der Norden der Insel seit 1974 de facto von der Türkei besetzt und nicht unter der Kontrolle der Regierung ist.",
            "Weil Zypern eine Ausnahmegenehmigung für das gesamte Wirtschaftsrecht hat.",
            "Weil Zypern zwar in der EU, aber nicht im Binnenmarkt ist.",
            "Weil die Insel den Euro nie eingeführt hat."
          ],
          "a": 0,
          "exp": "Das EU-Recht ist im Norden Zyperns ausgesetzt."
        }
      ],
      "3": [
        {
          "q": "Welcher Vertrag regelt die Rechtsgrundlage der beiden britischen Militärbasen Akrotiri und Dekelia auf Zypern?",
          "o": [
            "Gründungsvertrag der Republik Zypern",
            "Commonwealth-Akte",
            "NATO-Statut von Nikosia",
            "Pakt von Famagusta"
          ],
          "a": 0,
          "exp": "Der Gründungsvertrag regelte die britischen Militärstützpunkte."
        },
        {
          "q": "In welchem Jahr führte Zypern den Euro als offizielle Landeswährung ein?",
          "o": [
            "2004",
            "2008",
            "2010",
            "2012"
          ],
          "a": 1,
          "exp": "Zypern führte am 1. Januar 2008 den Euro ein."
        }
      ]
    }
  },
  "2": {
    "Belgien": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt, die auch als Hauptsitz der Europäischen Union und der NATO gilt?",
          "o": [
            "Rotterdam",
            "Brüssel",
            "Antwerpen",
            "Straßburg"
          ],
          "a": 1,
          "tip": "Der Name der Stadt beginnt mit dem Buchstaben „B“.",
          "exp": "Brüssel ist die Hauptstadt Belgiens und Sitz der wichtigsten EU-Institutionen."
        },
        {
          "q": "Wie heißt die Hauptstadt, die auch als Hauptsitz der Europäischen Union und der NATO gilt?",
          "o": [
            "Rotterdam",
            "Brüssel",
            "Antwerpen",
            "Straßburg"
          ],
          "a": 1,
          "tip": "Der Name der Stadt beginnt mit dem Buchstaben „B“.",
          "exp": "Brüssel ist die Hauptstadt Belgiens und Sitz der wichtigsten EU-Institutionen."
        }
      ],
      "2": [
        {
          "q": "Diese Hafenstadt an der Schelde ist weltweit bekannt als Zentrum des historischen Diamantenhandels. Wie heißt sie?",
          "o": [
            "Antwerpen",
            "Brügge",
            "Gent",
            "Charleroi"
          ],
          "a": 0,
          "tip": "Sie liegt im Norden des Landes in der Region Flandern.",
          "exp": "Antwerpen ist weltbekannt für seinen Diamantenhandel und großen Seehafen."
        },
        {
          "q": "Diese Hafenstadt an der Schelde ist weltweit bekannt als Zentrum des historischen Diamantenhandels. Wie heißt sie?",
          "o": [
            "Antwerpen",
            "Brügge",
            "Gent",
            "Charleroi"
          ],
          "a": 0,
          "tip": "Sie liegt im Norden des Landes in der Region Flandern.",
          "exp": "Antwerpen ist weltbekannt für seinen Diamantenhandel und großen Seehafen."
        }
      ],
      "3": [
        {
          "q": "Welcher gebirgige Landstrich im Südosten ist bekannt für dichte Wälder, sanfte Hügel und Höhlensysteme?",
          "o": [
            "Die Karpaten",
            "Die Eifel",
            "Die Ardennen",
            "Der Schwarzwald"
          ],
          "a": 2,
          "tip": "Das Gebiet spielte in der Geschichte beider Weltkriege eine wichtige Rolle.",
          "exp": "Die Ardennen erstrecken sich über den waldreichen Süden Belgiens."
        },
        {
          "q": "Welcher gebirgige Landstrich im Südosten ist bekannt für dichte Wälder, sanfte Hügel und Höhlensysteme?",
          "o": [
            "Die Karpaten",
            "Die Eifel",
            "Die Ardennen",
            "Der Schwarzwald"
          ],
          "a": 2,
          "tip": "Das Gebiet spielte in der Geschichte beider Weltkriege eine wichtige Rolle.",
          "exp": "Die Ardennen erstrecken sich über den waldreichen Süden Belgiens."
        }
      ]
    },
    "Bulgarien": {
      "1": [
        {
          "q": "Welche Stadt liegt am Fuße des Witoscha-Gebirges und ist die Hauptstadt des Landes?",
          "o": [
            "Plowdiw",
            "Sofia",
            "Warna",
            "Burgas"
          ],
          "a": 1,
          "tip": "Der Name der Stadt bedeutet auf Griechisch „Weisheit“.",
          "exp": "Sofia liegt im Westen Bulgariens am Fuße des Witoscha-Gebirges."
        },
        {
          "q": "Welche Stadt liegt am Fuße des Witoscha-Gebirges und ist die Hauptstadt des Landes?",
          "o": [
            "Plowdiw",
            "Sofia",
            "Warna",
            "Burgas"
          ],
          "a": 1,
          "tip": "Der Name der Stadt bedeutet auf Griechisch „Weisheit“.",
          "exp": "Sofia liegt im Westen Bulgariens am Fuße des Witoscha-Gebirges."
        }
      ],
      "2": [
        {
          "q": "Welches große Binnenmeer begrenzt das Land im Osten und lockt viele Urlaubsgäste an?",
          "o": [
            "Das Schwarze Meer",
            "Das Ägäische Meer",
            "Das Adriatische Meer",
            "Das Kaspische Meer"
          ],
          "a": 0,
          "tip": "Es hat einen sehr dunklen Namen.",
          "exp": "Die gesamte Ostgrenze Bulgariens verläuft am Schwarzen Meer."
        },
        {
          "q": "Welches große Binnenmeer begrenzt das Land im Osten und lockt viele Urlaubsgäste an?",
          "o": [
            "Das Schwarze Meer",
            "Das Ägäische Meer",
            "Das Adriatische Meer",
            "Das Kaspische Meer"
          ],
          "a": 0,
          "tip": "Es hat einen sehr dunklen Namen.",
          "exp": "Die gesamte Ostgrenze Bulgariens verläuft am Schwarzen Meer."
        }
      ],
      "3": [
        {
          "q": "Welches Gebirge erstreckt sich quer von West nach Ost durch das Land und gab der gesamten Halbinsel ihren Namen?",
          "o": [
            "Das Pirin-Gebirge",
            "Das Balkangebirge",
            "Das Rila-Gebirge",
            "Die Dinarischen Alpen"
          ],
          "a": 1,
          "tip": "Man nennt die gesamte Region Südosteuropas oft nach diesem Gebirge.",
          "exp": "Das Balkangebirge gab der Balkanhalbinsel ihren Namen."
        },
        {
          "q": "Welches Gebirge erstreckt sich quer von West nach Ost durch das Land und gab der gesamten Halbinsel ihren Namen?",
          "o": [
            "Das Pirin-Gebirge",
            "Das Balkangebirge",
            "Das Rila-Gebirge",
            "Die Dinarischen Alpen"
          ],
          "a": 1,
          "tip": "Man nennt die gesamte Region Südosteuropas oft nach diesem Gebirge.",
          "exp": "Das Balkangebirge gab der Balkanhalbinsel ihren Namen."
        }
      ]
    },
    "Dänemark": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt, in der man die berühmte Statue der „Kleinen Meerjungfrau“ am Hafen besuchen kann?",
          "o": [
            "Kopenhagen",
            "Aarhus",
            "Odense",
            "Aalborg"
          ],
          "a": 0,
          "tip": "Die Stadt liegt auf der Insel Seeland.",
          "exp": "Die Kleine Meerjungfrau in Kopenhagen geht auf das Märchen von H. C. Andersen zurück."
        },
        {
          "q": "Wie heißt die Hauptstadt, in der man die berühmte Statue der „Kleinen Meerjungfrau“ am Hafen besuchen kann?",
          "o": [
            "Kopenhagen",
            "Aarhus",
            "Odense",
            "Aalborg"
          ],
          "a": 0,
          "tip": "Die Stadt liegt auf der Insel Seeland.",
          "exp": "Die Kleine Meerjungfrau in Kopenhagen geht auf das Märchen von H. C. Andersen zurück."
        }
      ],
      "2": [
        {
          "q": "Wie heißt die große Halbinsel, die den festländischen Teil des Staates bildet und im Süden direkt an Deutschland grenzt?",
          "o": [
            "Fünen",
            "Seeland",
            "Jütland",
            "Skåne"
          ],
          "a": 2,
          "tip": "Sie trennt die Nordsee von der Ostsee.",
          "exp": "Jütland verbindet Dänemark mit dem europäischen Festland."
        },
        {
          "q": "Wie heißt die große Halbinsel, die den festländischen Teil des Staates bildet und im Süden direkt an Deutschland grenzt?",
          "o": [
            "Fünen",
            "Seeland",
            "Jütland",
            "Skåne"
          ],
          "a": 2,
          "tip": "Sie trennt die Nordsee von der Ostsee.",
          "exp": "Jütland verbindet Dänemark mit dem europäischen Festland."
        }
      ],
      "3": [
        {
          "q": "Welche riesige arktische Insel gehört politisch als autonomes Gebiet zu diesem Staat?",
          "o": [
            "Island",
            "Grönland",
            "Spitzbergen",
            "Bornholm"
          ],
          "a": 1,
          "tip": "Es ist die größte Insel der Erde.",
          "exp": "Grönland ist politisch Teil des dänischen Königreichs, aber weitgehend autonom."
        },
        {
          "q": "Welche riesige arktische Insel gehört politisch als autonomes Gebiet zu diesem Staat?",
          "o": [
            "Island",
            "Grönland",
            "Spitzbergen",
            "Bornholm"
          ],
          "a": 1,
          "tip": "Es ist die größte Insel der Erde.",
          "exp": "Grönland ist politisch Teil des dänischen Königreichs, aber weitgehend autonom."
        }
      ]
    },
    "Deutschland": {
      "1": [
        {
          "q": "Wie heißt die bundesweite Hauptstadt, die durch das Brandenburger Tor und den Fernsehturm berühmt ist?",
          "o": [
            "München",
            "Berlin",
            "Hamburg",
            "Köln"
          ],
          "a": 1,
          "tip": "Sie war im Kalten Krieg durch eine Mauer geteilt.",
          "exp": "Berlin wurde 1990 mit der Wiedervereinigung wieder Gesamt-Hauptstadt."
        },
        {
          "q": "Wie heißt die bundesweite Hauptstadt, die durch das Brandenburger Tor und den Fernsehturm berühmt ist?",
          "o": [
            "München",
            "Berlin",
            "Hamburg",
            "Köln"
          ],
          "a": 1,
          "tip": "Sie war im Kalten Krieg durch eine Mauer geteilt.",
          "exp": "Berlin wurde 1990 mit der Wiedervereinigung wieder Gesamt-Hauptstadt."
        }
      ],
      "2": [
        {
          "q": "Welcher Fluss entspringt im Schwarzwald und fließt quer durch Mitteleuropa bis ins Schwarze Meer?",
          "o": [
            "Der Rhein",
            "Die Elbe",
            "Die Donau",
            "Die Weser"
          ],
          "a": 2,
          "tip": "Es ist der zweitlängste Fluss Europas und fließt auch durch Österreich.",
          "exp": "Die Donau entspringt im Schwarzwald und mündet im Schwarzen Meer."
        },
        {
          "q": "Welcher Fluss entspringt im Schwarzwald und fließt quer durch Mitteleuropa bis ins Schwarze Meer?",
          "o": [
            "Der Rhein",
            "Die Elbe",
            "Die Donau",
            "Die Weser"
          ],
          "a": 2,
          "tip": "Es ist der zweitlängste Fluss Europas und fließt auch durch Österreich.",
          "exp": "Die Donau entspringt im Schwarzwald und mündet im Schwarzen Meer."
        }
      ],
      "3": [
        {
          "q": "Welches Mittelgebirge beherbergt den Brocken als seinen höchsten Berg?",
          "o": [
            "Der Harz",
            "Der Thüringer Wald",
            "Der Taunus",
            "Der Schwarzwald"
          ],
          "a": 0,
          "tip": "Der Name hat nur vier Buchstaben.",
          "exp": "Der Harz liegt im Norden Deutschlands, der Brocken ist 1141 Meter hoch."
        },
        {
          "q": "Welches Mittelgebirge beherbergt den Brocken als seinen höchsten Berg?",
          "o": [
            "Der Harz",
            "Der Thüringer Wald",
            "Der Taunus",
            "Der Schwarzwald"
          ],
          "a": 0,
          "tip": "Der Name hat nur vier Buchstaben.",
          "exp": "Der Harz liegt im Norden Deutschlands, der Brocken ist 1141 Meter hoch."
        }
      ]
    },
    "Estland": {
      "1": [
        {
          "q": "Wie heißt die nördlichste Hauptstadt der drei baltischen Staaten, die direkt am Finnischen Meerbusen liegt?",
          "o": [
            "Riga",
            "Vilnius",
            "Tallinn",
            "Helsinki"
          ],
          "a": 2,
          "tip": "Die gut erhaltene mittelalterliche Altstadt ist weltberühmt.",
          "exp": "Tallinn besitzt eine der besterhaltenen Altstädte Nordeuropas."
        },
        {
          "q": "Wie heißt die nördlichste Hauptstadt der drei baltischen Staaten, die direkt am Finnischen Meerbusen liegt?",
          "o": [
            "Riga",
            "Vilnius",
            "Tallinn",
            "Helsinki"
          ],
          "a": 2,
          "tip": "Die gut erhaltene mittelalterliche Altstadt ist weltberühmt.",
          "exp": "Tallinn besitzt eine der besterhaltenen Altstädte Nordeuropas."
        }
      ],
      "2": [
        {
          "q": "Welche Ostseeinsel gehört zu diesem Staat und ist zugleich seine größte Insel?",
          "o": [
            "Saaremaa",
            "Gotland",
            "Dagö",
            "Åland"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit dem Buchstaben „S“.",
          "exp": "Saaremaa ist die größte estnische Insel vor der Westküste."
        },
        {
          "q": "Welche Ostseeinsel gehört zu diesem Staat und ist zugleich seine größte Insel?",
          "o": [
            "Saaremaa",
            "Gotland",
            "Dagö",
            "Åland"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit dem Buchstaben „S“.",
          "exp": "Saaremaa ist die größte estnische Insel vor der Westküste."
        }
      ],
      "3": [
        {
          "q": "Wie heißt der riesige Grenzsee im Osten, der das Land von Russland trennt?",
          "o": [
            "Ladogasee",
            "Peipussee",
            "Onegasee",
            "Vänernsee"
          ],
          "a": 1,
          "tip": "Er ist der fünftgrößte See Europas.",
          "exp": "Der Peipussee bildet die natürliche Grenze zu Russland."
        },
        {
          "q": "Wie heißt der riesige Grenzsee im Osten, der das Land von Russland trennt?",
          "o": [
            "Ladogasee",
            "Peipussee",
            "Onegasee",
            "Vänernsee"
          ],
          "a": 1,
          "tip": "Er ist der fünftgrößte See Europas.",
          "exp": "Der Peipussee bildet die natürliche Grenze zu Russland."
        }
      ]
    },
    "Finnland": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt im Süden des Landes, die für ihren weißen Dom am Senatsplatz bekannt ist?",
          "o": [
            "Helsinki",
            "Tampere",
            "Turku",
            "Espoo"
          ],
          "a": 0,
          "tip": "Sie liegt direkt gegenüber von Tallinn an der Ostsee.",
          "exp": "Helsinki ist die größte Stadt und Hauptstadt Finnlands."
        },
        {
          "q": "Wie heißt die Hauptstadt im Süden des Landes, die für ihren weißen Dom am Senatsplatz bekannt ist?",
          "o": [
            "Helsinki",
            "Tampere",
            "Turku",
            "Espoo"
          ],
          "a": 0,
          "tip": "Sie liegt direkt gegenüber von Tallinn an der Ostsee.",
          "exp": "Helsinki ist die größte Stadt und Hauptstadt Finnlands."
        }
      ],
      "2": [
        {
          "q": "Wie heißt die nördlichste Region des Landes, die für Polarlichter, Mitternachtssonne und Rentiere bekannt ist?",
          "o": [
            "Karelien",
            "Lappland",
            "Savolen",
            "Ostbottnien"
          ],
          "a": 1,
          "tip": "Hier wohnt laut der Sage der Weihnachtsmann.",
          "exp": "Lappland erstreckt sich über den Norden des Landes."
        },
        {
          "q": "Wie heißt die nördlichste Region des Landes, die für Polarlichter, Mitternachtssonne und Rentiere bekannt ist?",
          "o": [
            "Karelien",
            "Lappland",
            "Savolen",
            "Ostbottnien"
          ],
          "a": 1,
          "tip": "Hier wohnt laut der Sage der Weihnachtsmann.",
          "exp": "Lappland erstreckt sich über den Norden des Landes."
        }
      ],
      "3": [
        {
          "q": "Welches riesige zusammenhängende Seensystem bildet das größte Binnengewässer des Landes?",
          "o": [
            "Der Saimaa-See",
            "Der Inarisee",
            "Der Päijänne-See",
            "Der Oulujärvi"
          ],
          "a": 0,
          "tip": "Hier lebt eine seltene Süßwasser-Ringelrobbe.",
          "exp": "Das Saimaa-Seengebiet beheimatet die vom Aussterben bedrohte Saimaa-Ringelrobbe."
        },
        {
          "q": "Welches riesige zusammenhängende Seensystem bildet das größte Binnengewässer des Landes?",
          "o": [
            "Der Saimaa-See",
            "Der Inarisee",
            "Der Päijänne-See",
            "Der Oulujärvi"
          ],
          "a": 0,
          "tip": "Hier lebt eine seltene Süßwasser-Ringelrobbe.",
          "exp": "Das Saimaa-Seengebiet beheimatet die vom Aussterben bedrohte Saimaa-Ringelrobbe."
        }
      ]
    },
    "Frankreich": {
      "1": [
        {
          "q": "Wie heißt die weltberühmte Hauptstadt an der Seine mit dem Eiffelturm?",
          "o": [
            "Lyon",
            "Paris",
            "Marseille",
            "Bordeaux"
          ],
          "a": 1,
          "tip": "Sie wird auch oft die „Stadt der Liebe“ genannt.",
          "exp": "Paris ist das politische, wirtschaftliche und kulturelle Zentrum Frankreichs."
        },
        {
          "q": "Wie heißt die weltberühmte Hauptstadt an der Seine mit dem Eiffelturm?",
          "o": [
            "Lyon",
            "Paris",
            "Marseille",
            "Bordeaux"
          ],
          "a": 1,
          "tip": "Sie wird auch oft die „Stadt der Liebe“ genannt.",
          "exp": "Paris ist das politische, wirtschaftliche und kulturelle Zentrum Frankreichs."
        }
      ],
      "2": [
        {
          "q": "Welcher höchste Berg der Alpen liegt an der Grenze zu Italien?",
          "o": [
            "Das Matterhorn",
            "Der Mont Blanc",
            "Die Zugspitze",
            "Der Großglockner"
          ],
          "a": 1,
          "tip": "Übersetzt bedeutet der Name „Weißer Berg“.",
          "exp": "Der Mont Blanc ist mit 4805 Metern der höchste Berg der Alpen."
        },
        {
          "q": "Welcher höchste Berg der Alpen liegt an der Grenze zu Italien?",
          "o": [
            "Das Matterhorn",
            "Der Mont Blanc",
            "Die Zugspitze",
            "Der Großglockner"
          ],
          "a": 1,
          "tip": "Übersetzt bedeutet der Name „Weißer Berg“.",
          "exp": "Der Mont Blanc ist mit 4805 Metern der höchste Berg der Alpen."
        }
      ],
      "3": [
        {
          "q": "Wie heißt die große Mittelmeerinsel, die zu diesem Staat gehört und auf der Napoleon Bonaparte geboren wurde?",
          "o": [
            "Sardinien",
            "Sizilien",
            "Korsika",
            "Malta"
          ],
          "a": 2,
          "tip": "Sie liegt direkt nördlich der italienischen Insel Sardinien.",
          "exp": "Napoleon wurde 1769 in Ajaccio auf Korsika geboren."
        },
        {
          "q": "Wie heißt die große Mittelmeerinsel, die zu diesem Staat gehört und auf der Napoleon Bonaparte geboren wurde?",
          "o": [
            "Sardinien",
            "Sizilien",
            "Korsika",
            "Malta"
          ],
          "a": 2,
          "tip": "Sie liegt direkt nördlich der italienischen Insel Sardinien.",
          "exp": "Napoleon wurde 1769 in Ajaccio auf Korsika geboren."
        }
      ]
    },
    "Griechenland": {
      "1": [
        {
          "q": "Wie heißt die historische Hauptstadt, die für die antike Tempelanlage der Akropolis berühmt ist?",
          "o": [
            "Athen",
            "Thessaloniki",
            "Patras",
            "Heraklion"
          ],
          "a": 0,
          "tip": "Sie gilt als die Wiege der Demokratie.",
          "exp": "Athen ist eine der ältesten Städte Europas und die griechische Hauptstadt."
        },
        {
          "q": "Wie heißt die historische Hauptstadt, die für die antike Tempelanlage der Akropolis berühmt ist?",
          "o": [
            "Athen",
            "Thessaloniki",
            "Patras",
            "Heraklion"
          ],
          "a": 0,
          "tip": "Sie gilt als die Wiege der Demokratie.",
          "exp": "Athen ist eine der ältesten Städte Europas und die griechische Hauptstadt."
        }
      ],
      "2": [
        {
          "q": "Welche ist die größte Insel des Landes, die das Ägäische Meer vom Libyschen Meer trennt?",
          "o": [
            "Rhodos",
            "Kreta",
            "Korfu",
            "Kos"
          ],
          "a": 1,
          "tip": "In der Antike war sie der Mittelpunkt der minoischen Kultur.",
          "exp": "Kreta ist das größte griechische Eiland und die fünftgrößte Insel im Mittelmeer."
        },
        {
          "q": "Welche ist die größte Insel des Landes, die das Ägäische Meer vom Libyschen Meer trennt?",
          "o": [
            "Rhodos",
            "Kreta",
            "Korfu",
            "Kos"
          ],
          "a": 1,
          "tip": "In der Antike war sie der Mittelpunkt der minoischen Kultur.",
          "exp": "Kreta ist das größte griechische Eiland und die fünftgrößte Insel im Mittelmeer."
        }
      ],
      "3": [
        {
          "q": "Welches Gebirgsmassiv gilt laut der antiken Mythologie als Sitz der Götter und bildet zugleich die höchste Erhebung des Landes?",
          "o": [
            "Der Parnass",
            "Der Olymp",
            "Der Athos",
            "Das Taygetos-Gebirge"
          ],
          "a": 1,
          "tip": "Das Wort steckt auch im Namen der berühmtesten Sportveranstaltung der Welt.",
          "exp": "Der Olymp ist mit 2917 Metern der höchste Berg Griechenlands."
        },
        {
          "q": "Welches Gebirgsmassiv gilt laut der antiken Mythologie als Sitz der Götter und bildet zugleich die höchste Erhebung des Landes?",
          "o": [
            "Der Parnass",
            "Der Olymp",
            "Der Athos",
            "Das Taygetos-Gebirge"
          ],
          "a": 1,
          "tip": "Das Wort steckt auch im Namen der berühmtesten Sportveranstaltung der Welt.",
          "exp": "Der Olymp ist mit 2917 Metern der höchste Berg Griechenlands."
        }
      ]
    },
    "Irland": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt an der Ostküste, durch die der Fluss Liffey fließt?",
          "o": [
            "Cork",
            "Dublin",
            "Galway",
            "Belfast"
          ],
          "a": 1,
          "tip": "Sie ist weltbekannt für ihr Altstadtviertel Temple Bar.",
          "exp": "Dublin liegt an der Mündung des Flusses Liffey in die Irische See."
        },
        {
          "q": "Wie heißt die Hauptstadt an der Ostküste, durch die der Fluss Liffey fließt?",
          "o": [
            "Cork",
            "Dublin",
            "Galway",
            "Belfast"
          ],
          "a": 1,
          "tip": "Sie ist weltbekannt für ihr Altstadtviertel Temple Bar.",
          "exp": "Dublin liegt an der Mündung des Flusses Liffey in die Irische See."
        }
      ],
      "2": [
        {
          "q": "Welcher ist der längste Fluss des Landes, der das Innere der Insel von Nord nach Süd durchquert?",
          "o": [
            "Der Shannon",
            "Der Boyne",
            "Der Barrow",
            "Der Lee"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit dem Buchstaben „S“.",
          "exp": "Der River Shannon ist mit 360 Kilometern der längste Fluss Irlands."
        },
        {
          "q": "Welcher ist der längste Fluss des Landes, der das Innere der Insel von Nord nach Süd durchquert?",
          "o": [
            "Der Shannon",
            "Der Boyne",
            "Der Barrow",
            "Der Lee"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit dem Buchstaben „S“.",
          "exp": "Der River Shannon ist mit 360 Kilometern der längste Fluss Irlands."
        }
      ],
      "3": [
        {
          "q": "Wie heißen die spektakulären, über 200 Meter steil im Atlantik abfallenden Steilklippen an der Westküste?",
          "o": [
            "Cliffs of Moher",
            "Giant’s Causeway",
            "Slieve League",
            "Dun Aengus"
          ],
          "a": 0,
          "tip": "Das Wort „Moher“ steckt im Namen.",
          "exp": "Die Cliffs of Moher gehören zu den bekanntesten Klippen Europas."
        },
        {
          "q": "Wie heißen die spektakulären, über 200 Meter steil im Atlantik abfallenden Steilklippen an der Westküste?",
          "o": [
            "Cliffs of Moher",
            "Giant’s Causeway",
            "Slieve League",
            "Dun Aengus"
          ],
          "a": 0,
          "tip": "Das Wort „Moher“ steckt im Namen.",
          "exp": "Die Cliffs of Moher gehören zu den bekanntesten Klippen Europas."
        }
      ]
    },
    "Italien": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt, in deren Zentrum das antike Kolosseum steht?",
          "o": [
            "Mailand",
            "Rom",
            "Neapel",
            "Florenz"
          ],
          "a": 1,
          "tip": "Man nennt sie seit der Antike auch die „Ewige Stadt“.",
          "exp": "Rom blickt auf eine über 2700-jährige Geschichte zurück."
        },
        {
          "q": "Wie heißt die Hauptstadt, in deren Zentrum das antike Kolosseum steht?",
          "o": [
            "Mailand",
            "Rom",
            "Neapel",
            "Florenz"
          ],
          "a": 1,
          "tip": "Man nennt sie seit der Antike auch die „Ewige Stadt“.",
          "exp": "Rom blickt auf eine über 2700-jährige Geschichte zurück."
        }
      ],
      "2": [
        {
          "q": "Welcher aktive Vulkan liegt am Golf von Neapel und verschüttete im Jahr 79 n. Chr. die Stadt Pompeji?",
          "o": [
            "Der Ätna",
            "Der Vesuv",
            "Der Stromboli",
            "Der Vulcano"
          ],
          "a": 1,
          "tip": "Er liegt auf dem europäischen Festland, nicht auf einer Insel.",
          "exp": "Der Vesuv ist der einzige aktive Vulkan auf dem europäischen Festland."
        },
        {
          "q": "Welcher aktive Vulkan liegt am Golf von Neapel und verschüttete im Jahr 79 n. Chr. die Stadt Pompeji?",
          "o": [
            "Der Ätna",
            "Der Vesuv",
            "Der Stromboli",
            "Der Vulcano"
          ],
          "a": 1,
          "tip": "Er liegt auf dem europäischen Festland, nicht auf einer Insel.",
          "exp": "Der Vesuv ist der einzige aktive Vulkan auf dem europäischen Festland."
        }
      ],
      "3": [
        {
          "q": "Welcher ist der längste Fluss des Landes, der die fruchtbare Ebene im Norden durchfließt?",
          "o": [
            "Der Po",
            "Der Tiber",
            "Der Arno",
            "Die Etsch"
          ],
          "a": 0,
          "tip": "Der Name hat nur zwei Buchstaben.",
          "exp": "Der Po mündet nach 652 Kilometern in die Adria."
        },
        {
          "q": "Welcher ist der längste Fluss des Landes, der die fruchtbare Ebene im Norden durchfließt?",
          "o": [
            "Der Po",
            "Der Tiber",
            "Der Arno",
            "Die Etsch"
          ],
          "a": 0,
          "tip": "Der Name hat nur zwei Buchstaben.",
          "exp": "Der Po mündet nach 652 Kilometern in die Adria."
        }
      ]
    },
    "Kroatien": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt im Landesinneren, die nördlich des Flusses Save liegt?",
          "o": [
            "Split",
            "Zagreb",
            "Dubrovnik",
            "Rijeka"
          ],
          "a": 1,
          "tip": "Sie ist die größte Stadt des Landes.",
          "exp": "Zagreb ist die Hauptstadt und das Kulturzentrum Kroatiens."
        },
        {
          "q": "Wie heißt die Hauptstadt im Landesinneren, die nördlich des Flusses Save liegt?",
          "o": [
            "Split",
            "Zagreb",
            "Dubrovnik",
            "Rijeka"
          ],
          "a": 1,
          "tip": "Sie ist die größte Stadt des Landes.",
          "exp": "Zagreb ist die Hauptstadt und das Kulturzentrum Kroatiens."
        }
      ],
      "2": [
        {
          "q": "Welche historische Festungsstadt ganz im Süden der Küste wird oft als „Perle der Adria“ bezeichnet?",
          "o": [
            "Zadar",
            "Pula",
            "Dubrovnik",
            "Šibenik"
          ],
          "a": 2,
          "tip": "Ihre massive begehbare Stadtmauer ist weltweit berühmt.",
          "exp": "Dubrovniks historische Altstadt gehört zum UNESCO-Weltkulturerbe."
        },
        {
          "q": "Welche historische Festungsstadt ganz im Süden der Küste wird oft als „Perle der Adria“ bezeichnet?",
          "o": [
            "Zadar",
            "Pula",
            "Dubrovnik",
            "Šibenik"
          ],
          "a": 2,
          "tip": "Ihre massive begehbare Stadtmauer ist weltweit berühmt.",
          "exp": "Dubrovniks historische Altstadt gehört zum UNESCO-Weltkulturerbe."
        }
      ],
      "3": [
        {
          "q": "Wie heißt der bekannte Nationalpark im Landesinneren mit seinen 16 kaskadenartig verbundenen Seen?",
          "o": [
            "Plitvizer Seen",
            "Krka-Nationalpark",
            "Paklenica",
            "Kornaten"
          ],
          "a": 0,
          "tip": "Hier wurden früher die Karl-May-Klassiker wie Winnetou gedreht.",
          "exp": "Der Nationalpark Plitvizer Seen zeichnet sich durch glasklare Wasserfälle aus."
        },
        {
          "q": "Wie heißt der bekannte Nationalpark im Landesinneren mit seinen 16 kaskadenartig verbundenen Seen?",
          "o": [
            "Plitvizer Seen",
            "Krka-Nationalpark",
            "Paklenica",
            "Kornaten"
          ],
          "a": 0,
          "tip": "Hier wurden früher die Karl-May-Klassiker wie Winnetou gedreht.",
          "exp": "Der Nationalpark Plitvizer Seen zeichnet sich durch glasklare Wasserfälle aus."
        }
      ]
    },
    "Lettland": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt, die an der Mündung der Düna in die Ostsee liegt?",
          "o": [
            "Tallinn",
            "Riga",
            "Vilnius",
            "Liepāja"
          ],
          "a": 1,
          "tip": "Sie ist die einwohnerreichste Stadt des gesamten Baltikums.",
          "exp": "Riga ist berühmt für seine gut erhaltene Jugendstil-Architektur."
        },
        {
          "q": "Wie heißt die Hauptstadt, die an der Mündung der Düna in die Ostsee liegt?",
          "o": [
            "Tallinn",
            "Riga",
            "Vilnius",
            "Liepāja"
          ],
          "a": 1,
          "tip": "Sie ist die einwohnerreichste Stadt des gesamten Baltikums.",
          "exp": "Riga ist berühmt für seine gut erhaltene Jugendstil-Architektur."
        }
      ],
      "2": [
        {
          "q": "Welches große Meeresbecken der Ostsee grenzt im Nordwesten direkt an die Küste des Landes?",
          "o": [
            "Der Finnische Meerbusen",
            "Der Rigaische Meerbusen",
            "Das Kattegat",
            "Das Bottenmeer"
          ],
          "a": 1,
          "tip": "Die Meeresbucht ist nach der Hauptstadt benannt.",
          "exp": "Der Rigaische Meerbusen (Rigaer Bucht) ist eine Bucht der Ostsee."
        },
        {
          "q": "Welches große Meeresbecken der Ostsee grenzt im Nordwesten direkt an die Küste des Landes?",
          "o": [
            "Der Finnische Meerbusen",
            "Der Rigaische Meerbusen",
            "Das Kattegat",
            "Das Bottenmeer"
          ],
          "a": 1,
          "tip": "Die Meeresbucht ist nach der Hauptstadt benannt.",
          "exp": "Der Rigaische Meerbusen (Rigaer Bucht) ist eine Bucht der Ostsee."
        }
      ],
      "3": [
        {
          "q": "Wie heißt der bekannte Ostsee-Kurort nahe der Hauptstadt, der für seinen kilometerlangen Sandstrand und Holzvillen bekannt ist?",
          "o": [
            "Jūrmala",
            "Ventspils",
            "Jelgava",
            "Daugavpils"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit dem Buchstaben „J“.",
          "exp": "Jūrmala ist der größte Badeort in den baltischen Staaten."
        },
        {
          "q": "Wie heißt der bekannte Ostsee-Kurort nahe der Hauptstadt, der für seinen kilometerlangen Sandstrand und Holzvillen bekannt ist?",
          "o": [
            "Jūrmala",
            "Ventspils",
            "Jelgava",
            "Daugavpils"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit dem Buchstaben „J“.",
          "exp": "Jūrmala ist der größte Badeort in den baltischen Staaten."
        }
      ]
    },
    "Litauen": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt im Südosten des Landes, die für ihre riesige barocke Altstadt bekannt ist?",
          "o": [
            "Kaunas",
            "Vilnius",
            "Klaipėda",
            "Šiauliai"
          ],
          "a": 1,
          "tip": "Sie ist die einzige baltische Hauptstadt, die nicht direkt am Meer liegt.",
          "exp": "Vilnius ist bekannt für seine über 40 Barockkirchen."
        },
        {
          "q": "Wie heißt die Hauptstadt im Südosten des Landes, die für ihre riesige barocke Altstadt bekannt ist?",
          "o": [
            "Kaunas",
            "Vilnius",
            "Klaipėda",
            "Šiauliai"
          ],
          "a": 1,
          "tip": "Sie ist die einzige baltische Hauptstadt, die nicht direkt am Meer liegt.",
          "exp": "Vilnius ist bekannt für seine über 40 Barockkirchen."
        }
      ],
      "2": [
        {
          "q": "Welche langgestreckte Sand-Landzunge trennt das Haff von der offenen Ostsee?",
          "o": [
            "Kurische Nehrung",
            "Frische Nehrung",
            "Halbinsel Hel",
            "Darß"
          ],
          "a": 0,
          "tip": "Sie ist bekannt für ihre riesigen Wanderdünen.",
          "exp": "Die Kurische Nehrung wird von Litauen und Russland geteilt."
        },
        {
          "q": "Welche langgestreckte Sand-Landzunge trennt das Haff von der offenen Ostsee?",
          "o": [
            "Kurische Nehrung",
            "Frische Nehrung",
            "Halbinsel Hel",
            "Darß"
          ],
          "a": 0,
          "tip": "Sie ist bekannt für ihre riesigen Wanderdünen.",
          "exp": "Die Kurische Nehrung wird von Litauen und Russland geteilt."
        }
      ],
      "3": [
        {
          "q": "Welches ist der längste und wasserreichste Fluss des Landes, der bei Klaipėda in die Ostsee mündet?",
          "o": [
            "Die Memel",
            "Die Düna",
            "Die Weichsel",
            "Die Neris"
          ],
          "a": 0,
          "tip": "Auf Litauisch heißt dieser Fluss „Nemunas“.",
          "exp": "Die Memel mündet über das Kurische Haff in die Ostsee."
        },
        {
          "q": "Welches ist der längste und wasserreichste Fluss des Landes, der bei Klaipėda in die Ostsee mündet?",
          "o": [
            "Die Memel",
            "Die Düna",
            "Die Weichsel",
            "Die Neris"
          ],
          "a": 0,
          "tip": "Auf Litauisch heißt dieser Fluss „Nemunas“.",
          "exp": "Die Memel mündet über das Kurische Haff in die Ostsee."
        }
      ]
    },
    "Luxemburg": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt dieses Großherzogtums?",
          "o": [
            "Luxemburg",
            "Esch an der Alzette",
            "Echternach",
            "Differdingen"
          ],
          "a": 0,
          "tip": "Die Hauptstadt heißt genauso wie der Staat selbst.",
          "exp": "Die Stadt Luxemburg beherbergt viele europäische Institutionen."
        },
        {
          "q": "Wie heißt die Hauptstadt dieses Großherzogtums?",
          "o": [
            "Luxemburg",
            "Esch an der Alzette",
            "Echternach",
            "Differdingen"
          ],
          "a": 0,
          "tip": "Die Hauptstadt heißt genauso wie der Staat selbst.",
          "exp": "Die Stadt Luxemburg beherbergt viele europäische Institutionen."
        }
      ],
      "2": [
        {
          "q": "Welcher Fluss bildet die östliche Grenze des Landes zum Nachbarland Deutschland?",
          "o": [
            "Die Mosel",
            "Die Maas",
            "Die Alzette",
            "Die Saar"
          ],
          "a": 0,
          "tip": "Dieser Fluss ist auch in Deutschland für seinen Weinbau bekannt.",
          "exp": "Die Mosel ist der wichtigste Grenzfluss im Osten Luxemburgs."
        },
        {
          "q": "Welcher Fluss bildet die östliche Grenze des Landes zum Nachbarland Deutschland?",
          "o": [
            "Die Mosel",
            "Die Maas",
            "Die Alzette",
            "Die Saar"
          ],
          "a": 0,
          "tip": "Dieser Fluss ist auch in Deutschland für seinen Weinbau bekannt.",
          "exp": "Die Mosel ist der wichtigste Grenzfluss im Osten Luxemburgs."
        }
      ],
      "3": [
        {
          "q": "Wie heißt die malerische Region im Nordosten des Landes, die wegen ihrer Sandsteinformationen oft als „Kleine Schweiz“ bezeichnet wird?",
          "o": [
            "Ösling",
            "Gutland",
            "Müllerthal",
            "Minett"
          ],
          "a": 2,
          "tip": "Der Name erinnert an den Beruf eines Müllers.",
          "exp": "Das Müllerthal verdankt seinen Namen den ehemaligen Mühlen an der Sauer."
        },
        {
          "q": "Wie heißt die malerische Region im Nordosten des Landes, die wegen ihrer Sandsteinformationen oft als „Kleine Schweiz“ bezeichnet wird?",
          "o": [
            "Ösling",
            "Gutland",
            "Müllerthal",
            "Minett"
          ],
          "a": 2,
          "tip": "Der Name erinnert an den Beruf eines Müllers.",
          "exp": "Das Müllerthal verdankt seinen Namen den ehemaligen Mühlen an der Sauer."
        }
      ]
    },
    "Malta": {
      "1": [
        {
          "q": "Wie heißt die historische Festungsstadt und Hauptstadt des Inselstaates?",
          "o": [
            "Sliema",
            "Valletta",
            "Mdina",
            "St. Julian’s"
          ],
          "a": 1,
          "tip": "Sie gehört flächenmäßig zu den kleinsten Hauptstädten Europas.",
          "exp": "Valletta ist als Gesamtmonument UNESCO-Welterbe."
        },
        {
          "q": "Wie heißt die historische Festungsstadt und Hauptstadt des Inselstaates?",
          "o": [
            "Sliema",
            "Valletta",
            "Mdina",
            "St. Julian’s"
          ],
          "a": 1,
          "tip": "Sie gehört flächenmäßig zu den kleinsten Hauptstädten Europas.",
          "exp": "Valletta ist als Gesamtmonument UNESCO-Welterbe."
        }
      ],
      "2": [
        {
          "q": "Welches ist die zweitgrößte Insel dieses Archipels im Mittelmeer?",
          "o": [
            "Gozo",
            "Comino",
            "Linosa",
            "Lampedusa"
          ],
          "a": 0,
          "tip": "Der Name hat nur vier Buchstaben und beginnt mit „G“.",
          "exp": "Gozo ist ländlicher und grüner als die Hauptinsel Malta."
        },
        {
          "q": "Welches ist die zweitgrößte Insel dieses Archipels im Mittelmeer?",
          "o": [
            "Gozo",
            "Comino",
            "Linosa",
            "Lampedusa"
          ],
          "a": 0,
          "tip": "Der Name hat nur vier Buchstaben und beginnt mit „G“.",
          "exp": "Gozo ist ländlicher und grüner als die Hauptinsel Malta."
        }
      ],
      "3": [
        {
          "q": "Wie heißt die winzige, fast unbewohnte Insel zwischen den beiden Hauptinseln, die für ihre „Blaue Lagune“ berühmt ist?",
          "o": [
            "Comino",
            "Filfla",
            "Cominotto",
            "Manoel Island"
          ],
          "a": 0,
          "tip": "Ihr Name klingt ähnlich wie die Insel Gozo.",
          "exp": "Comino ist autofrei und hat nur sehr wenige ständige Einwohner."
        },
        {
          "q": "Wie heißt die winzige, fast unbewohnte Insel zwischen den beiden Hauptinseln, die für ihre „Blaue Lagune“ berühmt ist?",
          "o": [
            "Comino",
            "Filfla",
            "Cominotto",
            "Manoel Island"
          ],
          "a": 0,
          "tip": "Ihr Name klingt ähnlich wie die Insel Gozo.",
          "exp": "Comino ist autofrei und hat nur sehr wenige ständige Einwohner."
        }
      ]
    },
    "Niederlande": {
      "1": [
        {
          "q": "Wie heißt die offizielle Hauptstadt, die für ihre vielen Grachten und Fahrräder bekannt ist?",
          "o": [
            "Rotterdam",
            "Den Haag",
            "Amsterdam",
            "Utrecht"
          ],
          "a": 2,
          "tip": "Der Name leitet sich von einem Dammsystem an der Amstel ab.",
          "exp": "Amsterdam ist weltbekannt für sein historisches Grachtennetz."
        },
        {
          "q": "Wie heißt die offizielle Hauptstadt, die für ihre vielen Grachten und Fahrräder bekannt ist?",
          "o": [
            "Rotterdam",
            "Den Haag",
            "Amsterdam",
            "Utrecht"
          ],
          "a": 2,
          "tip": "Der Name leitet sich von einem Dammsystem an der Amstel ab.",
          "exp": "Amsterdam ist weltbekannt für sein historisches Grachtennetz."
        }
      ],
      "2": [
        {
          "q": "In welcher Stadt befinden sich der Regierungssitz, das Parlament und der Internationale Gerichtshof?",
          "o": [
            "Amsterdam",
            "Den Haag",
            "Rotterdam",
            "Eindhoven"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Artikel „Den“.",
          "exp": "Den Haag ist der administrative Hauptort der Niederlande."
        },
        {
          "q": "In welcher Stadt befinden sich der Regierungssitz, das Parlament und der Internationale Gerichtshof?",
          "o": [
            "Amsterdam",
            "Den Haag",
            "Rotterdam",
            "Eindhoven"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Artikel „Den“.",
          "exp": "Den Haag ist der administrative Hauptort der Niederlande."
        }
      ],
      "3": [
        {
          "q": "Wie heißt das große flache Küstenmeer mit seinen Inseln, das bei Ebbe stellenweise trockenfällt und zum UNESCO-Weltnaturerbe gehört?",
          "o": [
            "IJsselmeer",
            "Wattenmeer",
            "Markermeer",
            "Zeeland-Delta"
          ],
          "a": 1,
          "tip": "Man kann dort bei Niedrigwasser auf dem Meeresboden wandern.",
          "exp": "Das Wattenmeer ist das größte Wattflächensystem der Welt."
        },
        {
          "q": "Wie heißt das große flache Küstenmeer mit seinen Inseln, das bei Ebbe stellenweise trockenfällt und zum UNESCO-Weltnaturerbe gehört?",
          "o": [
            "IJsselmeer",
            "Wattenmeer",
            "Markermeer",
            "Zeeland-Delta"
          ],
          "a": 1,
          "tip": "Man kann dort bei Niedrigwasser auf dem Meeresboden wandern.",
          "exp": "Das Wattenmeer ist das größte Wattflächensystem der Welt."
        }
      ]
    },
    "Österreich": {
      "1": [
        {
          "q": "Wie heißt die Bundeshauptstadt an der Donau, die für den Stephansdom und den Prater bekannt ist?",
          "o": [
            "Graz",
            "Linz",
            "Wien",
            "Salzburg"
          ],
          "a": 2,
          "tip": "Sie ist das größte politische und kulturelle Zentrum des Landes.",
          "exp": "Wien ist die meistbevölkerte Stadt Österreichs."
        },
        {
          "q": "Wie heißt die Bundeshauptstadt an der Donau, die für den Stephansdom und den Prater bekannt ist?",
          "o": [
            "Graz",
            "Linz",
            "Wien",
            "Salzburg"
          ],
          "a": 2,
          "tip": "Sie ist das größte politische und kulturelle Zentrum des Landes.",
          "exp": "Wien ist die meistbevölkerte Stadt Österreichs."
        }
      ],
      "2": [
        {
          "q": "Welcher Berg im Nationalpark Hohe Tauern ist die höchste Erhebung des Landes?",
          "o": [
            "Wildspitze",
            "Großglockner",
            "Dachstein",
            "Piz Buin"
          ],
          "a": 1,
          "tip": "Er erreicht eine Höhe von 3.798 Metern.",
          "exp": "Der Großglockner besitzt den größten Gletscher Österreichs, die Pasterze."
        },
        {
          "q": "Welcher Berg im Nationalpark Hohe Tauern ist die höchste Erhebung des Landes?",
          "o": [
            "Wildspitze",
            "Großglockner",
            "Dachstein",
            "Piz Buin"
          ],
          "a": 1,
          "tip": "Er erreicht eine Höhe von 3.798 Metern.",
          "exp": "Der Großglockner besitzt den größten Gletscher Österreichs, die Pasterze."
        }
      ],
      "3": [
        {
          "q": "Welcher große Steppensee im Osten reicht bis an das Staatsgebiet des Nachbarlandes Ungarn heran?",
          "o": [
            "Bodensee",
            "Neusiedler See",
            "Attersee",
            "Wörthersee"
          ],
          "a": 1,
          "tip": "Er liegt im kleinsten und östlichsten Bundesland.",
          "exp": "Der Neusiedler See ist einer der wenigen Steppenseen in Europa."
        },
        {
          "q": "Welcher große Steppensee im Osten reicht bis an das Staatsgebiet des Nachbarlandes Ungarn heran?",
          "o": [
            "Bodensee",
            "Neusiedler See",
            "Attersee",
            "Wörthersee"
          ],
          "a": 1,
          "tip": "Er liegt im kleinsten und östlichsten Bundesland.",
          "exp": "Der Neusiedler See ist einer der wenigen Steppenseen in Europa."
        }
      ]
    },
    "Polen": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt an der Weichsel, die im Zweiten Weltkrieg fast völlig zerstört und danach wieder aufgebaut wurde?",
          "o": [
            "Krakau",
            "Warschau",
            "Breslau",
            "Danzig"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Buchstaben „W“.",
          "exp": "Die Altstadt von Warschau wurde originalgetreu rekonstruiert."
        },
        {
          "q": "Wie heißt die Hauptstadt an der Weichsel, die im Zweiten Weltkrieg fast völlig zerstört und danach wieder aufgebaut wurde?",
          "o": [
            "Krakau",
            "Warschau",
            "Breslau",
            "Danzig"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Buchstaben „W“.",
          "exp": "Die Altstadt von Warschau wurde originalgetreu rekonstruiert."
        }
      ],
      "2": [
        {
          "q": "Welche historische Königsstadt im Süden des Landes besaß im Mittelalter die berühmten Tuchhallen am Hauptmarkt?",
          "o": [
            "Krakau",
            "Posen",
            "Katowitz",
            "Stettin"
          ],
          "a": 0,
          "tip": "Sie liegt nahe den Beskiden an der Weichsel.",
          "exp": "Krakau war bis 1596 die Hauptstadt Polens."
        },
        {
          "q": "Welche historische Königsstadt im Süden des Landes besaß im Mittelalter die berühmten Tuchhallen am Hauptmarkt?",
          "o": [
            "Krakau",
            "Posen",
            "Katowitz",
            "Stettin"
          ],
          "a": 0,
          "tip": "Sie liegt nahe den Beskiden an der Weichsel.",
          "exp": "Krakau war bis 1596 die Hauptstadt Polens."
        }
      ],
      "3": [
        {
          "q": "Welches riesige Seengebiet im Nordosten des Landes besteht aus mehr als 2.000 Masuren-Seen?",
          "o": [
            "Kaschubische Seenplatte",
            "Masurische Seenplatte",
            "Pommersche Seenplatte",
            "Großpolnische Seenplatte"
          ],
          "a": 1,
          "tip": "Das gesuchte Wort steckt bereits versteckt in der Frage.",
          "exp": "Die Masurische Seenplatte ist ein Paradies für Wassersportler."
        },
        {
          "q": "Welches riesige Seengebiet im Nordosten des Landes besteht aus mehr als 2.000 Masuren-Seen?",
          "o": [
            "Kaschubische Seenplatte",
            "Masurische Seenplatte",
            "Pommersche Seenplatte",
            "Großpolnische Seenplatte"
          ],
          "a": 1,
          "tip": "Das gesuchte Wort steckt bereits versteckt in der Frage.",
          "exp": "Die Masurische Seenplatte ist ein Paradies für Wassersportler."
        }
      ]
    },
    "Portugal": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt an der Mündung des Tejo, die für ihre gelben historischen Straßenbahnen bekannt ist?",
          "o": [
            "Porto",
            "Lissabon",
            "Faro",
            "Coimbra"
          ],
          "a": 1,
          "tip": "Sie liegt im Westen des Landes nahe dem Atlantik.",
          "exp": "Lissabon ist die westlichste Großstadt Kontinentaleuropas."
        },
        {
          "q": "Wie heißt die Hauptstadt an der Mündung des Tejo, die für ihre gelben historischen Straßenbahnen bekannt ist?",
          "o": [
            "Porto",
            "Lissabon",
            "Faro",
            "Coimbra"
          ],
          "a": 1,
          "tip": "Sie liegt im Westen des Landes nahe dem Atlantik.",
          "exp": "Lissabon ist die westlichste Großstadt Kontinentaleuropas."
        }
      ],
      "2": [
        {
          "q": "Welche zweitgrößte Stadt des Landes im Norden ist weltberühmt für ihren Portwein und die Brücke Dom Luís I.?",
          "o": [
            "Braga",
            "Porto",
            "Aveiro",
            "Guimarães"
          ],
          "a": 1,
          "tip": "Das Land verdankt dieser Stadt historisch einen Teil seines Namens.",
          "exp": "Porto gab dem Land Portugal und dem Portwein den Namen."
        },
        {
          "q": "Welche zweitgrößte Stadt des Landes im Norden ist weltberühmt für ihren Portwein und die Brücke Dom Luís I.?",
          "o": [
            "Braga",
            "Porto",
            "Aveiro",
            "Guimarães"
          ],
          "a": 1,
          "tip": "Das Land verdankt dieser Stadt historisch einen Teil seines Namens.",
          "exp": "Porto gab dem Land Portugal und dem Portwein den Namen."
        }
      ],
      "3": [
        {
          "q": "Wie heißt die Blumeninsel im Atlantik, die geografisch zu Afrika gehört, aber politisch Teil dieses europäischen Staates is?",
          "o": [
            "Azoren",
            "Madeira",
            "Kap Verde",
            "Kanaren"
          ],
          "a": 1,
          "tip": "Sie ist für ihren berühmten Botanischen Garten und das milde Klima bekannt.",
          "exp": "Madeira liegt rund 950 km südwestlich von Lissabon."
        },
        {
          "q": "Wie heißt die Blumeninsel im Atlantik, die geografisch zu Afrika gehört, aber politisch Teil dieses europäischen Staates is?",
          "o": [
            "Azoren",
            "Madeira",
            "Kap Verde",
            "Kanaren"
          ],
          "a": 1,
          "tip": "Sie ist für ihren berühmten Botanischen Garten und das milde Klima bekannt.",
          "exp": "Madeira liegt rund 950 km südwestlich von Lissabon."
        }
      ]
    },
    "Rumänien": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt im Süden des Landes, die wegen ihrer Architektur früher manchmal „Kleine Paris des Ostens“ genannt wurde?",
          "o": [
            "Klausenburg",
            "Bukarest",
            "Timișoara",
            "Brașov"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit einem „B“.",
          "exp": "Bukarest ist das Kultur- und Handelszentrum des Landes."
        },
        {
          "q": "Wie heißt die Hauptstadt im Süden des Landes, die wegen ihrer Architektur früher manchmal „Kleine Paris des Ostens“ genannt wurde?",
          "o": [
            "Klausenburg",
            "Bukarest",
            "Timișoara",
            "Brașov"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit einem „B“.",
          "exp": "Bukarest ist das Kultur- und Handelszentrum des Landes."
        }
      ],
      "2": [
        {
          "q": "Welches große Gebirge zieht sich in einem Bogen durch die Mitte des Landes?",
          "o": [
            "Die Karpaten",
            "Die Balkaniden",
            "Die Dinariden",
            "Die Rodopen"
          ],
          "a": 0,
          "tip": "Zu diesem Gebirgszug gehört auch die historische Region Siebenbürgen.",
          "exp": "Die Karpaten prägen einen Großteil Rumäniens."
        },
        {
          "q": "Welches große Gebirge zieht sich in einem Bogen durch die Mitte des Landes?",
          "o": [
            "Die Karpaten",
            "Die Balkaniden",
            "Die Dinariden",
            "Die Rodopen"
          ],
          "a": 0,
          "tip": "Zu diesem Gebirgszug gehört auch die historische Region Siebenbürgen.",
          "exp": "Die Karpaten prägen einen Großteil Rumäniens."
        }
      ],
      "3": [
        {
          "q": "Wo mündet der zweitlängste Fluss Europas ins Schwarze Meer und bildet eines der größten Feuchtgebiete des Kontinents?",
          "o": [
            "Wolgadelta",
            "Donaudelta",
            "Dnjeprdelta",
            "Rhônedelta"
          ],
          "a": 1,
          "tip": "Es ist der Mündungsbereich desselben Flusses, der auch durch Wien fließt.",
          "exp": "Das Donaudelta ist das zweitgrößte Flussdelta Europas."
        },
        {
          "q": "Wo mündet der zweitlängste Fluss Europas ins Schwarze Meer und bildet eines der größten Feuchtgebiete des Kontinents?",
          "o": [
            "Wolgadelta",
            "Donaudelta",
            "Dnjeprdelta",
            "Rhônedelta"
          ],
          "a": 1,
          "tip": "Es ist der Mündungsbereich desselben Flusses, der auch durch Wien fließt.",
          "exp": "Das Donaudelta ist das zweitgrößte Flussdelta Europas."
        }
      ]
    },
    "Schweden": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt, die auf 14 Inseln erbaut wurde und daher auch „Venedig des Nordens“ genannt wird?",
          "o": [
            "Göteborg",
            "Malmö",
            "Stockholm",
            "Uppsala"
          ],
          "a": 2,
          "tip": "Hier werden jährlich die Nobelpreise verliehen.",
          "exp": "Stockholm liegt an der Mündung des Mälarensees in die Ostsee."
        },
        {
          "q": "Wie heißt die Hauptstadt, die auf 14 Inseln erbaut wurde und daher auch „Venedig des Nordens“ genannt wird?",
          "o": [
            "Göteborg",
            "Malmö",
            "Stockholm",
            "Uppsala"
          ],
          "a": 2,
          "tip": "Hier werden jährlich die Nobelpreise verliehen.",
          "exp": "Stockholm liegt an der Mündung des Mälarensees in die Ostsee."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der größte See des Landes und gleichzeitig der drittgrößte See Europas?",
          "o": [
            "Vättern",
            "Vänern",
            "Mälaren",
            "Hjälmaren"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit „Vä-“.",
          "exp": "Der Vänern ist fast zehnmal so groß wie der Bodensee."
        },
        {
          "q": "Wie heißt der größte See des Landes und gleichzeitig der drittgrößte See Europas?",
          "o": [
            "Vättern",
            "Vänern",
            "Mälaren",
            "Hjälmaren"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit „Vä-“.",
          "exp": "Der Vänern ist fast zehnmal so groß wie der Bodensee."
        }
      ],
      "3": [
        {
          "q": "Welches Gebirge bildet im Westen die natürliche Grenze zum Nachbarland Norwegen?",
          "o": [
            "Skandinavisches Gebirge",
            "Ural",
            "Kaskadenkette",
            "Grampian Mountains"
          ],
          "a": 0,
          "tip": "Es trägt den Namen der nordischen Halbinsel.",
          "exp": "Das Skandinavische Gebirge erstreckt sich über die gesamte Halbinsel."
        },
        {
          "q": "Welches Gebirge bildet im Westen die natürliche Grenze zum Nachbarland Norwegen?",
          "o": [
            "Skandinavisches Gebirge",
            "Ural",
            "Kaskadenkette",
            "Grampian Mountains"
          ],
          "a": 0,
          "tip": "Es trägt den Namen der nordischen Halbinsel.",
          "exp": "Das Skandinavische Gebirge erstreckt sich über die gesamte Halbinsel."
        }
      ]
    },
    "Slowakei": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt an der Donau, die nur wenige Kilometer von der österreichischen Grenze entfernt liegt?",
          "o": [
            "Košice",
            "Bratislava",
            "Prešov",
            "Nitra"
          ],
          "a": 1,
          "tip": "Auf Deutsch hieß die Stadt früher Preßburg.",
          "exp": "Bratislava und Wien sind die zwei am nächsten beieinander liegenden Hauptstädte Europas."
        },
        {
          "q": "Wie heißt die Hauptstadt an der Donau, die nur wenige Kilometer von der österreichischen Grenze entfernt liegt?",
          "o": [
            "Košice",
            "Bratislava",
            "Prešov",
            "Nitra"
          ],
          "a": 1,
          "tip": "Auf Deutsch hieß die Stadt früher Preßburg.",
          "exp": "Bratislava und Wien sind die zwei am nächsten beieinander liegenden Hauptstädte Europas."
        }
      ],
      "2": [
        {
          "q": "Welches Gebirge im Norden des Landes ist der höchste Teilzug der Karpaten und ein beliebtes Wintersportgebiet?",
          "o": [
            "Niedere Tatra",
            "Hohe Tatra",
            "Kleine Karpaten",
            "Fatra"
          ],
          "a": 1,
          "tip": "Der höchste Berg heißt Gerlachovský štít.",
          "exp": "Die Hohe Tatra ist das kleinste Hochgebirge der Welt."
        },
        {
          "q": "Welches Gebirge im Norden des Landes ist der höchste Teilzug der Karpaten und ein beliebtes Wintersportgebiet?",
          "o": [
            "Niedere Tatra",
            "Hohe Tatra",
            "Kleine Karpaten",
            "Fatra"
          ],
          "a": 1,
          "tip": "Der höchste Berg heißt Gerlachovský štít.",
          "exp": "Die Hohe Tatra ist das kleinste Hochgebirge der Welt."
        }
      ],
      "3": [
        {
          "q": "Welcher Fluss bildet über weite Strecken die südliche Grenze des Landes zum Nachbarland Ungarn?",
          "o": [
            "Die Waag",
            "Die Donau",
            "Die Gran",
            "Die Theiß"
          ],
          "a": 1,
          "tip": "Dieser europäische Hauptstrom fließt durch mehrere Hauptstädte.",
          "exp": "Die Donau ist die Lebensader im Süden der Slowakei."
        },
        {
          "q": "Welcher Fluss bildet über weite Strecken die südliche Grenze des Landes zum Nachbarland Ungarn?",
          "o": [
            "Die Waag",
            "Die Donau",
            "Die Gran",
            "Die Theiß"
          ],
          "a": 1,
          "tip": "Dieser europäische Hauptstrom fließt durch mehrere Hauptstädte.",
          "exp": "Die Donau ist die Lebensader im Süden der Slowakei."
        }
      ]
    },
    "Slowenien": {
      "1": [
        {
          "q": "Wie heißt die grüne Hauptstadt des Landes, durch die der Fluss Ljubljanica fließt?",
          "o": [
            "Maribor",
            "Ljubljana",
            "Koper",
            "Celje"
          ],
          "a": 1,
          "tip": "Auf Deutsch nannte man die Stadt früher Laibach.",
          "exp": "Ljubljana wurde 2016 als grüne Hauptstadt Europas ausgezeichnet."
        },
        {
          "q": "Wie heißt die grüne Hauptstadt des Landes, durch die der Fluss Ljubljanica fließt?",
          "o": [
            "Maribor",
            "Ljubljana",
            "Koper",
            "Celje"
          ],
          "a": 1,
          "tip": "Auf Deutsch nannte man die Stadt früher Laibach.",
          "exp": "Ljubljana wurde 2016 als grüne Hauptstadt Europas ausgezeichnet."
        }
      ],
      "2": [
        {
          "q": "Wie heißt der alpine Gletschersee im Nordwesten mit einer kleinen Marienkirche auf einer Insel in der Mitte?",
          "o": [
            "Bohinj-See",
            "Bleder See",
            "Cerknica-See",
            "Wörthersee"
          ],
          "a": 1,
          "tip": "Der Name des Ortes und des Sees besteht aus nur 4 Buchstaben (Bled).",
          "exp": "Der Bleder See ist für seine Inselkirche und Burg bekannt."
        },
        {
          "q": "Wie heißt der alpine Gletschersee im Nordwesten mit einer kleinen Marienkirche auf einer Insel in der Mitte?",
          "o": [
            "Bohinj-See",
            "Bleder See",
            "Cerknica-See",
            "Wörthersee"
          ],
          "a": 1,
          "tip": "Der Name des Ortes und des Sees besteht aus nur 4 Buchstaben (Bled).",
          "exp": "Der Bleder See ist für seine Inselkirche und Burg bekannt."
        }
      ],
      "3": [
        {
          "q": "Welcher Berg in den Julischen Alpen ist mit 2.864 Metern die höchste Erhebung des Landes und ziert auch das Wappen?",
          "o": [
            "Triglav",
            "Mangart",
            "Grintovec",
            "Stol"
          ],
          "a": 0,
          "tip": "Der Name bedeutet übersetzt „Dreikopf“.",
          "exp": "Der Triglav ziert die slowenische Nationalflagge."
        },
        {
          "q": "Welcher Berg in den Julischen Alpen ist mit 2.864 Metern die höchste Erhebung des Landes und ziert auch das Wappen?",
          "o": [
            "Triglav",
            "Mangart",
            "Grintovec",
            "Stol"
          ],
          "a": 0,
          "tip": "Der Name bedeutet übersetzt „Dreikopf“.",
          "exp": "Der Triglav ziert die slowenische Nationalflagge."
        }
      ]
    },
    "Spanien": {
      "1": [
        {
          "q": "Wie heißt die im Zentrum der Iberischen Halbinsel gelegene Hauptstadt?",
          "o": [
            "Barcelona",
            "Madrid",
            "Sevilla",
            "Valencia"
          ],
          "a": 1,
          "tip": "Hier befindet sich das berühmte Kunstmuseum Museo del Prado.",
          "exp": "Madrid ist die am höchsten gelegene Hauptstadt der EU."
        },
        {
          "q": "Wie heißt die im Zentrum der Iberischen Halbinsel gelegene Hauptstadt?",
          "o": [
            "Barcelona",
            "Madrid",
            "Sevilla",
            "Valencia"
          ],
          "a": 1,
          "tip": "Hier befindet sich das berühmte Kunstmuseum Museo del Prado.",
          "exp": "Madrid ist die am höchsten gelegene Hauptstadt der EU."
        }
      ],
      "2": [
        {
          "q": "Welches hohe Grenzgebirge trennt das Land im Nordosten vom Nachbarland Frankreich ab?",
          "o": [
            "Die Pyrenäen",
            "Die Kantabrischen Alpen",
            "Die Baetische Kordillere",
            "Die Sierra Nevada"
          ],
          "a": 0,
          "tip": "Dieser Gebirgszug erstreckt sich vom Atlantik bis zum Mittelmeer.",
          "exp": "Die Pyrenäen umschließen auch den Zwergstaat Andorra."
        },
        {
          "q": "Welches hohe Grenzgebirge trennt das Land im Nordosten vom Nachbarland Frankreich ab?",
          "o": [
            "Die Pyrenäen",
            "Die Kantabrischen Alpen",
            "Die Baetische Kordillere",
            "Die Sierra Nevada"
          ],
          "a": 0,
          "tip": "Dieser Gebirgszug erstreckt sich vom Atlantik bis zum Mittelmeer.",
          "exp": "Die Pyrenäen umschließen auch den Zwergstaat Andorra."
        }
      ],
      "3": [
        {
          "q": "Welche Inselgruppe im Atlantischen Ozean vor der Küste Westafrikas gehört als autonome Gemeinschaft zu diesem Staat?",
          "o": [
            "Balearen",
            "Kanaren",
            "Azoren",
            "Maltesischer Archipel"
          ],
          "a": 1,
          "tip": "Dazu gehören Inseln wie Teneriffa, Gran Canaria und Fuerteventura.",
          "exp": "Die Kanarischen Inseln sind vulkanischen Ursprungs."
        },
        {
          "q": "Welche Inselgruppe im Atlantischen Ozean vor der Küste Westafrikas gehört als autonome Gemeinschaft zu diesem Staat?",
          "o": [
            "Balearen",
            "Kanaren",
            "Azoren",
            "Maltesischer Archipel"
          ],
          "a": 1,
          "tip": "Dazu gehören Inseln wie Teneriffa, Gran Canaria und Fuerteventura.",
          "exp": "Die Kanarischen Inseln sind vulkanischen Ursprungs."
        }
      ]
    },
    "Tschechien": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt an der Moldau, die für die Karlsbrücke und die Prager Burg bekannt ist?",
          "o": [
            "Brünn",
            "Prag",
            "Pilsen",
            "Ostrau"
          ],
          "a": 1,
          "tip": "Sie wird auch oft die „Goldene Stadt“ genannt.",
          "exp": "Prag war über Jahrhunderte eine bedeutende Residenzstadt."
        },
        {
          "q": "Wie heißt die Hauptstadt an der Moldau, die für die Karlsbrücke und die Prager Burg bekannt ist?",
          "o": [
            "Brünn",
            "Prag",
            "Pilsen",
            "Ostrau"
          ],
          "a": 1,
          "tip": "Sie wird auch oft die „Goldene Stadt“ genannt.",
          "exp": "Prag war über Jahrhunderte eine bedeutende Residenzstadt."
        }
      ],
      "2": [
        {
          "q": "Wie heißt die höchste Erhebung des Landes im Riesengebirge an der Grenze zu Polen?",
          "o": [
            "Schneekoppe",
            "Keilberg",
            "Altvater",
            "Great Fatra"
          ],
          "a": 0,
          "tip": "Auf Tschechisch heißt dieser Berg „Sněžka“.",
          "exp": "Die Schneekoppe misst 1603 Meter Höhe."
        },
        {
          "q": "Wie heißt die höchste Erhebung des Landes im Riesengebirge an der Grenze zu Polen?",
          "o": [
            "Schneekoppe",
            "Keilberg",
            "Altvater",
            "Great Fatra"
          ],
          "a": 0,
          "tip": "Auf Tschechisch heißt dieser Berg „Sněžka“.",
          "exp": "Die Schneekoppe misst 1603 Meter Höhe."
        }
      ],
      "3": [
        {
          "q": "Welches historische Gebiet bildet neben Böhmen und Schlesien den östlichen Teil des Landes?",
          "o": [
            "Mähren",
            "Galizien",
            "Steiermark",
            "Banat"
          ],
          "a": 0,
          "tip": "Die größte Stadt dieser Region ist Brünn (Brno).",
          "exp": "Mähren nimmt das östliche Drittel Tschechiens ein."
        },
        {
          "q": "Welches historische Gebiet bildet neben Böhmen und Schlesien den östlichen Teil des Landes?",
          "o": [
            "Mähren",
            "Galizien",
            "Steiermark",
            "Banat"
          ],
          "a": 0,
          "tip": "Die größte Stadt dieser Region ist Brünn (Brno).",
          "exp": "Mähren nimmt das östliche Drittel Tschechiens ein."
        }
      ]
    },
    "Ungarn": {
      "1": [
        {
          "q": "Wie heißt die Hauptstadt an der Donau, die aus dem Zusammenwachsen zweier historischer Stadtteile entstand?",
          "o": [
            "Debrecen",
            "Budapest",
            "Szeged",
            "Miskolc"
          ],
          "a": 1,
          "tip": "Der Name setzt sich aus den ehemaligen Städten Buda und Pest zusammen.",
          "exp": "Die Kettenbrücke verbindet Buda und Pest über die Donau."
        },
        {
          "q": "Wie heißt die Hauptstadt an der Donau, die aus dem Zusammenwachsen zweier historischer Stadtteile entstand?",
          "o": [
            "Debrecen",
            "Budapest",
            "Szeged",
            "Miskolc"
          ],
          "a": 1,
          "tip": "Der Name setzt sich aus den ehemaligen Städten Buda und Pest zusammen.",
          "exp": "Die Kettenbrücke verbindet Buda und Pest über die Donau."
        }
      ],
      "2": [
        {
          "q": "Welcher ist der größte Binnensee Mitteleuropas und ein extrem beliebtes Urlaubsziel im Land?",
          "o": [
            "Neusiedler See",
            "Plattensee",
            "Velence-See",
            "Tisza-See"
          ],
          "a": 1,
          "tip": "Der ungarische Name lautet Balaton.",
          "exp": "Der Plattensee (Balaton) ist berühmt für sein warmes Wasser."
        },
        {
          "q": "Welcher ist der größte Binnensee Mitteleuropas und ein extrem beliebtes Urlaubsziel im Land?",
          "o": [
            "Neusiedler See",
            "Plattensee",
            "Velence-See",
            "Tisza-See"
          ],
          "a": 1,
          "tip": "Der ungarische Name lautet Balaton.",
          "exp": "Der Plattensee (Balaton) ist berühmt für sein warmes Wasser."
        }
      ],
      "3": [
        {
          "q": "Wie heißt die große baumlose Grassteppe im Osten des Landes, die für Pferde und Hirtenkultur bekannt ist?",
          "o": [
            "Puszta",
            "Tundra",
            "Taiga",
            "Pampa"
          ],
          "a": 0,
          "tip": "Das Wort beginnt mit dem Buchstaben „P“.",
          "exp": "Die Puszta gehört zum Nationalpark Hortobágy."
        },
        {
          "q": "Wie heißt die große baumlose Grassteppe im Osten des Landes, die für Pferde und Hirtenkultur bekannt ist?",
          "o": [
            "Puszta",
            "Tundra",
            "Taiga",
            "Pampa"
          ],
          "a": 0,
          "tip": "Das Wort beginnt mit dem Buchstaben „P“.",
          "exp": "Die Puszta gehört zum Nationalpark Hortobágy."
        }
      ]
    },
    "Zypern": {
      "1": [
        {
          "q": "Wie heißt die im Landesinneren gelegene Hauptstadt, die bis heute durch eine grüne Linie geteilt ist?",
          "o": [
            "Limassol",
            "Nikosia",
            "Larnaka",
            "Paphos"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Buchstaben „N“.",
          "exp": "Nikosia ist die letzte geteilte Hauptstadt Europas."
        },
        {
          "q": "Wie heißt die im Landesinneren gelegene Hauptstadt, die bis heute durch eine grüne Linie geteilt ist?",
          "o": [
            "Limassol",
            "Nikosia",
            "Larnaka",
            "Paphos"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Buchstaben „N“.",
          "exp": "Nikosia ist die letzte geteilte Hauptstadt Europas."
        }
      ],
      "2": [
        {
          "q": "Welches große Gebirge zieht sich durch das Innere der Insel und beherbergt den Berg Olympos?",
          "o": [
            "Troodos-Gebirge",
            "Kyrenia-Gebirge",
            "Pindos-Gebirge",
            "Ida-Gebirge"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit den Buchstaben „Tr-“.",
          "exp": "Das Troodos-Gebirge nimmt das Zentrum Zyperns ein."
        },
        {
          "q": "Welches große Gebirge zieht sich durch das Innere der Insel und beherbergt den Berg Olympos?",
          "o": [
            "Troodos-Gebirge",
            "Kyrenia-Gebirge",
            "Pindos-Gebirge",
            "Ida-Gebirge"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit den Buchstaben „Tr-“.",
          "exp": "Das Troodos-Gebirge nimmt das Zentrum Zyperns ein."
        }
      ],
      "3": [
        {
          "q": "An welcher Küstenstadt im Südwesten befindet sich laut der griechischen Mythologie der Geburtsfelsen der Göttin Aphrodite?",
          "o": [
            "Paphos",
            "Ayia Napa",
            "Famagusta",
            "Kyrenia"
          ],
          "a": 0,
          "tip": "Die Stadt besitzt einen bekannten archäologischen Park und einen Flughafen.",
          "exp": "Der Felsen 'Petra tou Romiou' nahe Paphos markiert Aphrodites Geburtsort."
        },
        {
          "q": "An welcher Küstenstadt im Südwesten befindet sich laut der griechischen Mythologie der Geburtsfelsen der Göttin Aphrodite?",
          "o": [
            "Paphos",
            "Ayia Napa",
            "Famagusta",
            "Kyrenia"
          ],
          "a": 0,
          "tip": "Die Stadt besitzt einen bekannten archäologischen Park und einen Flughafen.",
          "exp": "Der Felsen 'Petra tou Romiou' nahe Paphos markiert Aphrodites Geburtsort."
        }
      ]
    }
  },
  "3": {
    "Belgien": {
      "1": [
        {
          "q": "In welcher Stadt tagt das Europäische Parlament während der meisten Arbeitswochen und befindet sich der Hauptsitz der Europäischen Kommission?",
          "o": [
            "Luxemburg",
            "Brüssel",
            "Straßburg",
            "Den Haag"
          ],
          "a": 1,
          "tip": "Die Stadt gilt inoffiziell als „Hauptstadt Europas“.",
          "exp": "Brüssel beherbergt die Hauptsitze der EU-Kommission und des Rates."
        },
        {
          "q": "In welcher Stadt tagt das Europäische Parlament während der meisten Arbeitswochen und befindet sich der Hauptsitz der Europäischen Kommission?",
          "o": [
            "Luxemburg",
            "Brüssel",
            "Straßburg",
            "Den Haag"
          ],
          "a": 1,
          "tip": "Die Stadt gilt inoffiziell als „Hauptstadt Europas“.",
          "exp": "Brüssel beherbergt die Hauptsitze der EU-Kommission und des Rates."
        }
      ],
      "2": [
        {
          "q": "Welche Staatsform hat dieses Land, in dem das europäische Machtzentrum liegt?",
          "o": [
            "Parlamentarische Republik",
            "Präsidialrepublik",
            "Parlamentarische Monarchie",
            "Absolute Monarchie"
          ],
          "a": 2,
          "tip": "Es gibt einen König, aber das Parlament bestimmt die Politik.",
          "exp": "Belgien ist eine parlamentarische Erbmonarchie mit König Filip an der Spitze."
        },
        {
          "q": "Welche Staatsform hat dieses Land, in dem das europäische Machtzentrum liegt?",
          "o": [
            "Parlamentarische Republik",
            "Präsidialrepublik",
            "Parlamentarische Monarchie",
            "Absolute Monarchie"
          ],
          "a": 2,
          "tip": "Es gibt einen König, aber das Parlament bestimmt die Politik.",
          "exp": "Belgien ist eine parlamentarische Erbmonarchie mit König Filip an der Spitze."
        }
      ],
      "3": [
        {
          "q": "In welcher Stadt hat der Europäische Rat (die Versammlung der Staats- und Regierungschefs) seinen offiziellen Sitz im sogenannten „Europa-Gebäude“?",
          "o": [
            "Brüssel",
            "Antwerpen",
            "Gent",
            "Namur"
          ],
          "a": 0,
          "tip": "Es ist dieselbe Stadt, in der auch die EU-Kommission sits.",
          "exp": "Der Europäische Rat hat seinen ständigen Sitz im Europa-Gebäude in Brüssel."
        },
        {
          "q": "In welcher Stadt hat der Europäische Rat (die Versammlung der Staats- und Regierungschefs) seinen offiziellen Sitz im sogenannten „Europa-Gebäude“?",
          "o": [
            "Brüssel",
            "Antwerpen",
            "Gent",
            "Namur"
          ],
          "a": 0,
          "tip": "Es ist dieselbe Stadt, in der auch die EU-Kommission sits.",
          "exp": "Der Europäische Rat hat seinen ständigen Sitz im Europa-Gebäude in Brüssel."
        }
      ]
    },
    "Bulgarien": {
      "1": [
        {
          "q": "In welchem Jahr trat dieses Land im Südosten Europas gemeinsam mit Rumänien der Europäischen Union bei?",
          "o": [
            "2004",
            "2007",
            "2013",
            "2020"
          ],
          "a": 1,
          "tip": "Es war die zweite große Österweiterung nach 2004.",
          "exp": "Bulgarien und Rumänien traten am 1. Januar 2007 der EU bei."
        },
        {
          "q": "In welchem Jahr trat dieses Land im Südosten Europas gemeinsam mit Rumänien der Europäischen Union bei?",
          "o": [
            "2004",
            "2007",
            "2013",
            "2020"
          ],
          "a": 1,
          "tip": "Es war die zweite große Österweiterung nach 2004.",
          "exp": "Bulgarien und Rumänien traten am 1. Januar 2007 der EU bei."
        }
      ],
      "2": [
        {
          "q": "Welche Währung gilt in diesem Land als offizielle Landeswährung, obwohl der Staat die Einführung des Euro anstrebt?",
          "o": [
            "Leu",
            "Lew",
            "Kuna",
            "Dinar"
          ],
          "a": 1,
          "tip": "Der Name der Währung bedeutet übersetzt „Löwe“ und klingt fast wie die Währung des Nachbarlandes.",
          "exp": "Der bulgarische Lew ist seit 1999 im Verhältnis 1:1,95583 an die D-Mark gekoppelt."
        },
        {
          "q": "Welche Währung gilt in diesem Land als offizielle Landeswährung, obwohl der Staat die Einführung des Euro anstrebt?",
          "o": [
            "Leu",
            "Lew",
            "Kuna",
            "Dinar"
          ],
          "a": 1,
          "tip": "Der Name der Währung bedeutet übersetzt „Löwe“ und klingt fast wie die Währung des Nachbarlandes.",
          "exp": "Der bulgarische Lew ist seit 1999 im Verhältnis 1:1,95583 an die D-Mark gekoppelt."
        }
      ],
      "3": [
        {
          "q": "Welches Schriftsystem brachte dieses Land mit seinem EU-Beitritt als dritte offizielle Alphabetschrift in die EU ein?",
          "o": [
            "Griechisch",
            "Kyrillisch",
            "Arabisch",
            "Georgisch"
          ],
          "a": 1,
          "tip": "Diese Schrift wird auch in Russland und Serbien verwendet.",
          "exp": "Mit Bulgarien wurde die kyrillische Schrift 2007 zur dritten offiziellen EU-Schrift."
        },
        {
          "q": "Welches Schriftsystem brachte dieses Land mit seinem EU-Beitritt als dritte offizielle Alphabetschrift in die EU ein?",
          "o": [
            "Griechisch",
            "Kyrillisch",
            "Arabisch",
            "Georgisch"
          ],
          "a": 1,
          "tip": "Diese Schrift wird auch in Russland und Serbien verwendet.",
          "exp": "Mit Bulgarien wurde die kyrillische Schrift 2007 zur dritten offiziellen EU-Schrift."
        }
      ]
    },
    "Dänemark": {
      "1": [
        {
          "q": "Was bedeutet der sogenannte „Opt-out“-Status, den dieses nördliche Land bei manchen EU-Themen (wie z. B. ursprünglich der Euro-Währung) nutzt?",
          "o": [
            "Das Land muss doppelt so viele Steuern an die EU zahlen.",
            "Das Land darf Sonderregeln nutzen und muss nicht an allen EU-Bereichen teilnehmen.",
            "Das Land hat kein Stimmrecht im Europäischen Parlament.",
            "Das Land darf nur alle fünf Jahre an EU-Gipfeln teilnehmen."
          ],
          "a": 1,
          "tip": "„Opt-out“ heißt übersetzt so viel wie „Ausstieg“ oder „Ausschluss von einer Pflicht“.",
          "exp": "Dänemark besitzt vertraglich gesicherte Ausnahmeregelungen (Opt-outs) in der EU-Politik."
        },
        {
          "q": "Was bedeutet der sogenannte „Opt-out“-Status, den dieses nördliche Land bei manchen EU-Themen (wie z. B. ursprünglich der Euro-Währung) nutzt?",
          "o": [
            "Das Land muss doppelt so viele Steuern an die EU zahlen.",
            "Das Land darf Sonderregeln nutzen und muss nicht an allen EU-Bereichen teilnehmen.",
            "Das Land hat kein Stimmrecht im Europäischen Parlament.",
            "Das Land darf nur alle fünf Jahre an EU-Gipfeln teilnehmen."
          ],
          "a": 1,
          "tip": "„Opt-out“ heißt übersetzt so viel wie „Ausstieg“ oder „Ausschluss von einer Pflicht“.",
          "exp": "Dänemark besitzt vertraglich gesicherte Ausnahmeregelungen (Opt-outs) in der EU-Politik."
        }
      ],
      "2": [
        {
          "q": "Welche Staatsform hat dieser Staat, der seit 1973 Mitglied der Europäischen Union ist?",
          "o": [
            "Bundesrepublik",
            "Parlamentarische Monarchie",
            "Sozialistische Republik",
            "Großherzogtum"
          ],
          "a": 1,
          "tip": "Das Land hat ein Königshaus mit einer Königin oder einem König an der Spitze.",
          "exp": "Dänemark ist eine konstitutionell-parlamentarische Monarchie."
        },
        {
          "q": "Welche Staatsform hat dieser Staat, der seit 1973 Mitglied der Europäischen Union ist?",
          "o": [
            "Bundesrepublik",
            "Parlamentarische Monarchie",
            "Sozialistische Republik",
            "Großherzogtum"
          ],
          "a": 1,
          "tip": "Das Land hat ein Königshaus mit einer Königin oder einem König an der Spitze.",
          "exp": "Dänemark ist eine konstitutionell-parlamentarische Monarchie."
        }
      ],
      "3": [
        {
          "q": "Welcher Vertrag aus dem Jahr 1992 wurde von den Bürgern dieses Landes beim ersten Referendum überraschend abgelehnt, bevor Nachverhandlungen stattfanden?",
          "o": [
            "Vertrag von Nizza",
            "Vertrag von Maastricht",
            "Vertrag von Lissabon",
            "Vertrag von Amsterdam"
          ],
          "a": 1,
          "tip": "Es ist der Vertrag, der die Europäische Union in ihrer heutigen Form begründete.",
          "exp": "Erst nach Zugeständnissen (Edinburgh-Beschluss) stimmten die Dänen 1993 für Maastricht."
        },
        {
          "q": "Welcher Vertrag aus dem Jahr 1992 wurde von den Bürgern dieses Landes beim ersten Referendum überraschend abgelehnt, bevor Nachverhandlungen stattfanden?",
          "o": [
            "Vertrag von Nizza",
            "Vertrag von Maastricht",
            "Vertrag von Lissabon",
            "Vertrag von Amsterdam"
          ],
          "a": 1,
          "tip": "Es ist der Vertrag, der die Europäische Union in ihrer heutigen Form begründete.",
          "exp": "Erst nach Zugeständnissen (Edinburgh-Beschluss) stimmten die Dänen 1993 für Maastricht."
        }
      ]
    },
    "Deutschland": {
      "1": [
        {
          "q": "In welcher Finanzmetropole hat die Europäische Zentralbank (EZB) ihren Hauptsitz?",
          "o": [
            "Berlin",
            "Frankfurt am Main",
            "München",
            "Hamburg"
          ],
          "a": 1,
          "tip": "Die Stadt ist bekannt für ihre Wolkenkratzer-Skyline und ihren riesigen Flughafen.",
          "exp": "Die EZB steuert die Geldpolitik des Euroraums von Frankfurt am Main aus."
        },
        {
          "q": "In welcher Finanzmetropole hat die Europäische Zentralbank (EZB) ihren Hauptsitz?",
          "o": [
            "Berlin",
            "Frankfurt am Main",
            "München",
            "Hamburg"
          ],
          "a": 1,
          "tip": "Die Stadt ist bekannt für ihre Wolkenkratzer-Skyline und ihren riesigen Flughafen.",
          "exp": "Die EZB steuert die Geldpolitik des Euroraums von Frankfurt am Main aus."
        }
      ],
      "2": [
        {
          "q": "Welcher Mitbegründer der Europäischen Wirtschaftsgemeinschaft (EWG) hat die meisten Abgeordneten im Europäischen Parlament?",
          "o": [
            "Das bevölkerungsreichste Mitgliedsland",
            "Das flächenmäßig größte Mitgliedsland",
            "Das wirtschaftlich schwächste Mitgliedsland",
            "Alle Länder haben exakt gleich viele Abgeordnete"
          ],
          "a": 0,
          "tip": "Die Anzahl der Sitze richtet sich nach der Einwohnerzahl des jeweiligen Staates.",
          "exp": "Deutschland stellt aufgrund seiner Einwohnerzahl mit 96 Abgeordneten das größte Kontingent."
        },
        {
          "q": "Welcher Mitbegründer der Europäischen Wirtschaftsgemeinschaft (EWG) hat die meisten Abgeordneten im Europäischen Parlament?",
          "o": [
            "Das bevölkerungsreichste Mitgliedsland",
            "Das flächenmäßig größte Mitgliedsland",
            "Das wirtschaftlich schwächste Mitgliedsland",
            "Alle Länder haben exakt gleich viele Abgeordnete"
          ],
          "a": 0,
          "tip": "Die Anzahl der Sitze richtet sich nach der Einwohnerzahl des jeweiligen Staates.",
          "exp": "Deutschland stellt aufgrund seiner Einwohnerzahl mit 96 Abgeordneten das größte Kontingent."
        }
      ],
      "3": [
        {
          "q": "Welcher Grundsatz der EU besagt, dass Aufgaben so weit wie möglich auf lokaler oder nationaler Ebene geregelt werden sollen und die EU nur eingreift, wenn es notwendiger ist?",
          "o": [
            "Einstimmigkeitsprinzip",
            "Subsidiaritätsprinzip",
            "Neutralitätsprinzip",
            "Solidaritätsprinzip"
          ],
          "a": 1,
          "tip": "Das Wort leitet sich vom lateinischen Begriff für „Hilfe“ oder „Reserve“ ab.",
          "exp": "Das Subsidiaritätsprinzip schützt die Eigenständigkeit der Mitgliedstaaten."
        },
        {
          "q": "Welcher Grundsatz der EU besagt, dass Aufgaben so weit wie möglich auf lokaler oder nationaler Ebene geregelt werden sollen und die EU nur eingreift, wenn es notwendiger ist?",
          "o": [
            "Einstimmigkeitsprinzip",
            "Subsidiaritätsprinzip",
            "Neutralitätsprinzip",
            "Solidaritätsprinzip"
          ],
          "a": 1,
          "tip": "Das Wort leitet sich vom lateinischen Begriff für „Hilfe“ oder „Reserve“ ab.",
          "exp": "Das Subsidiaritätsprinzip schützt die Eigenständigkeit der Mitgliedstaaten."
        }
      ]
    },
    "Estland": {
      "1": [
        {
          "q": "Dieses Land gilt als absoluter EU-Pionier in welchem Bereich der modernen Verwaltung?",
          "o": [
            "Weltraumfahrt",
            "E-Government und digitale Verwaltung",
            "Schwerindustrie",
            "Ökologische Landwirtschaft"
          ],
          "a": 1,
          "tip": "Hier kann man fast alle Amtsgeschäfte und Wahlen digital über das Internet erledigen.",
          "exp": "Estland bietet fast alle staatlichen Dienstleistungen vollkommen digital an (e-Estonia)."
        },
        {
          "q": "Dieses Land gilt als absoluter EU-Pionier in welchem Bereich der modernen Verwaltung?",
          "o": [
            "Weltraumfahrt",
            "E-Government und digitale Verwaltung",
            "Schwerindustrie",
            "Ökologische Landwirtschaft"
          ],
          "a": 1,
          "tip": "Hier kann man fast alle Amtsgeschäfte und Wahlen digital über das Internet erledigen.",
          "exp": "Estland bietet fast alle staatlichen Dienstleistungen vollkommen digital an (e-Estonia)."
        }
      ],
      "2": [
        {
          "q": "Welches Beitrittsjahr markiert den Eintritt dieses baltischen Staates in die Europäische Union?",
          "o": [
            "1995",
            "2004",
            "2007",
            "2013"
          ],
          "a": 1,
          "tip": "Es war das Jahr der großen Osterweiterung mit insgesamt 10 neuen Mitgliedstaaten.",
          "exp": "Estland trat am 1. Mai 2004 im Zuge der EU-Osterweiterung bei."
        },
        {
          "q": "Welches Beitrittsjahr markiert den Eintritt dieses baltischen Staates in die Europäische Union?",
          "o": [
            "1995",
            "2004",
            "2007",
            "2013"
          ],
          "a": 1,
          "tip": "Es war das Jahr der großen Osterweiterung mit insgesamt 10 neuen Mitgliedstaaten.",
          "exp": "Estland trat am 1. Mai 2004 im Zuge der EU-Osterweiterung bei."
        }
      ],
      "3": [
        {
          "q": "Welcher europäischen Schengen-Zone gehört das Land seit 2007 an?",
          "o": [
            "Zone ohne Grenzkontrollen zwischen den Mitgliedstaaten",
            "Zone mit einheitlichen Steuersätzen",
            "Militärbündnis der nordischen Staaten",
            "Zone mit einer gemeinsamen europäischen Armee"
          ],
          "a": 0,
          "tip": "Das Abkommen ist nach einem kleinen Ort in Luxemburg benannt.",
          "exp": "Die Schengen-Mitgliedschaft schaffte die systematischen Grenzkontrollen ab."
        },
        {
          "q": "Welcher europäischen Schengen-Zone gehört das Land seit 2007 an?",
          "o": [
            "Zone ohne Grenzkontrollen zwischen den Mitgliedstaaten",
            "Zone mit einheitlichen Steuersätzen",
            "Militärbündnis der nordischen Staaten",
            "Zone mit einer gemeinsamen europäischen Armee"
          ],
          "a": 0,
          "tip": "Das Abkommen ist nach einem kleinen Ort in Luxemburg benannt.",
          "exp": "Die Schengen-Mitgliedschaft schaffte die systematischen Grenzkontrollen ab."
        }
      ]
    },
    "Finnland": {
      "1": [
        {
          "q": "Dieses Land hat eine sehr lange Außengrenze zu welchem Nicht-EU-Staat, was für die EU-Sicherheitspolitik besonders wichtig ist?",
          "o": [
            "Norwegen",
            "Russland",
            "Schweden",
            "Belarus"
          ],
          "a": 1,
          "tip": "Das Land im Osten ist der flächenmäßig größte Staat der Erde.",
          "exp": "Finnland teilt eine rund 1340 Kilometer lange Grenze mit Russland."
        },
        {
          "q": "Dieses Land hat eine sehr lange Außengrenze zu welchem Nicht-EU-Staat, was für die EU-Sicherheitspolitik besonders wichtig ist?",
          "o": [
            "Norwegen",
            "Russland",
            "Schweden",
            "Belarus"
          ],
          "a": 1,
          "tip": "Das Land im Osten ist der flächenmäßig größte Staat der Erde.",
          "exp": "Finnland teilt eine rund 1340 Kilometer lange Grenze mit Russland."
        }
      ],
      "2": [
        {
          "q": "In welchem Jahr trat das Land gemeinsam mit Österreich und Schweden der Europäischen Union bei?",
          "o": [
            "1986",
            "1995",
            "2004",
            "2007"
          ],
          "a": 1,
          "tip": "Es war die vierte Erweiterungsrunde der EU in den 1990er Jahren.",
          "exp": "Finnland wurde nach einer Volksabstimmung am 1. Januar 1995 EU-Mitglied."
        },
        {
          "q": "In welchem Jahr trat das Land gemeinsam mit Österreich und Schweden der Europäischen Union bei?",
          "o": [
            "1986",
            "1995",
            "2004",
            "2007"
          ],
          "a": 1,
          "tip": "Es war die vierte Erweiterungsrunde der EU in den 1990er Jahren.",
          "exp": "Finnland wurde nach einer Volksabstimmung am 1. Januar 1995 EU-Mitglied."
        }
      ],
      "3": [
        {
          "q": "Welche Haltung vertrat das Land in der Außenpolitik jahrzehntelang vor seinem Beitritt zur EU und zur NATO?",
          "o": [
            "Streitkräftefreie Zone",
            "Militärische Bündnisfreiheit und Neutralität",
            "Kommunistisches Bündnis",
            "Isolationismus"
          ],
          "a": 1,
          "tip": "Eine ähnliche Rolle verfassungsrechtlicher Art nimmt auch Österreich ein.",
          "exp": "Finnland bewahrte während des Kalten Krieges strikte militärische Neutralität."
        },
        {
          "q": "Welche Haltung vertrat das Land in der Außenpolitik jahrzehntelang vor seinem Beitritt zur EU und zur NATO?",
          "o": [
            "Streitkräftefreie Zone",
            "Militärische Bündnisfreiheit und Neutralität",
            "Kommunistisches Bündnis",
            "Isolationismus"
          ],
          "a": 1,
          "tip": "Eine ähnliche Rolle verfassungsrechtlicher Art nimmt auch Österreich ein.",
          "exp": "Finnland bewahrte während des Kalten Krieges strikte militärische Neutralität."
        }
      ]
    },
    "Frankreich": {
      "1": [
        {
          "q": "In welcher Stadt befindet sich der offizielle Sitz des Europäischen Parlaments, in dem die monatlichen Plenartagungen stattfinden?",
          "o": [
            "Paris",
            "Straßburg",
            "Lyon",
            "Marseille"
          ],
          "a": 1,
          "tip": "Die Stadt liegt direkt an der Grenze zu Deutschland im Elsass.",
          "exp": "Straßburg ist der verfassungsmäßig verankerte Hauptsitz des EU-Parlaments."
        },
        {
          "q": "In welcher Stadt befindet sich der offizielle Sitz des Europäischen Parlaments, in dem die monatlichen Plenartagungen stattfinden?",
          "o": [
            "Paris",
            "Straßburg",
            "Lyon",
            "Marseille"
          ],
          "a": 1,
          "tip": "Die Stadt liegt direkt an der Grenze zu Deutschland im Elsass.",
          "exp": "Straßburg ist der verfassungsmäßig verankerte Hauptsitz des EU-Parlaments."
        }
      ],
      "2": [
        {
          "q": "Wer vertritt ein Mitgliedsland im „Europäischen Rat“?",
          "o": [
            "Der Staats- oder Regierungschef",
            "Der Außenminister",
            "Ein gewählter Bürgerbeauftragter",
            "Der Präsident des Europäischen Gerichtshofs"
          ],
          "a": 0,
          "tip": "Es sind die mächtigsten Politiker der jeweiligen Länder (z. B. Bundeskanzler oder Präsidenten).",
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs sowie dem Kommissionspräsidenten."
        },
        {
          "q": "Wer vertritt ein Mitgliedsland im „Europäischen Rat“?",
          "o": [
            "Der Staats- oder Regierungschef",
            "Der Außenminister",
            "Ein gewählter Bürgerbeauftragter",
            "Der Präsident des Europäischen Gerichtshofs"
          ],
          "a": 0,
          "tip": "Es sind die mächtigsten Politiker der jeweiligen Länder (z. B. Bundeskanzler oder Präsidenten).",
          "exp": "Der Europäische Rat besteht aus den Staats- und Regierungschefs sowie dem Kommissionspräsidenten."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte Außenminister dieses Landes schlug 1950 den Kohle- und Stahl-Plan vor, der als Grundstein der heutigen EU gilt?",
          "o": [
            "Charles de Gaulle",
            "Robert Schuman",
            "François Mitterrand",
            "Emmanuel Macron"
          ],
          "a": 1,
          "tip": "Nach ihm ist auch das europäische Bildungsprogramm für Schulen benannt (Schuman-Erklärung).",
          "exp": "Die Schuman-Erklärung vom 9. Mai 1950 gilt als Geburtsstunde der EU."
        },
        {
          "q": "Welcher berühmte Außenminister dieses Landes schlug 1950 den Kohle- und Stahl-Plan vor, der als Grundstein der heutigen EU gilt?",
          "o": [
            "Charles de Gaulle",
            "Robert Schuman",
            "François Mitterrand",
            "Emmanuel Macron"
          ],
          "a": 1,
          "tip": "Nach ihm ist auch das europäische Bildungsprogramm für Schulen benannt (Schuman-Erklärung).",
          "exp": "Die Schuman-Erklärung vom 9. Mai 1950 gilt als Geburtsstunde der EU."
        }
      ]
    },
    "Griechenland": {
      "1": [
        {
          "q": "Aus welcher antiken Sprache und kultur stammt der Begriff „Demokratie“, der als Grundwert in den EU-Verträgen verankert ist?",
          "o": [
            "Latein",
            "Altgriechisch",
            "Altägyptisch",
            "Phönizisch"
          ],
          "a": 1,
          "tip": "Das Wort setzt sich aus „Demos“ (Volk) und „Kratein“ (herrschen) zusammen.",
          "exp": "Das antike Athen gilt als historischer Ursprungsort der demokratischen Idee."
        },
        {
          "q": "Aus welcher antiken Sprache und kultur stammt der Begriff „Demokratie“, der als Grundwert in den EU-Verträgen verankert ist?",
          "o": [
            "Latein",
            "Altgriechisch",
            "Altägyptisch",
            "Phönizisch"
          ],
          "a": 1,
          "tip": "Das Wort setzt sich aus „Demos“ (Volk) und „Kratein“ (herrschen) zusammen.",
          "exp": "Das antike Athen gilt als historischer Ursprungsort der demokratischen Idee."
        }
      ],
      "2": [
        {
          "q": "In welchem Jahr trat dieses südosteuropäische Land der Europäischen Gemeinschaft (heute EU) bei?",
          "o": [
            "1973",
            "1981",
            "1986",
            "1995"
          ],
          "a": 1,
          "tip": "Es war der einzige Staat, der in den 1980er Jahren ganz am Anfang des Jahrzehnts beitrat.",
          "exp": "Griechenland trat am 1. Januar 1981 als 10. Vollmitglied der Gemeinschaft bei."
        },
        {
          "q": "In welchem Jahr trat dieses südosteuropäische Land der Europäischen Gemeinschaft (heute EU) bei?",
          "o": [
            "1973",
            "1981",
            "1986",
            "1995"
          ],
          "a": 1,
          "tip": "Es war der einzige Staat, der in den 1980er Jahren ganz am Anfang des Jahrzehnts beitrat.",
          "exp": "Griechenland trat am 1. Januar 1981 als 10. Vollmitglied der Gemeinschaft bei."
        }
      ],
      "3": [
        {
          "q": "Welches finanzielle Rettungsprogramm der EU („Troika“ aus EU-Kommission, EZB und IWF) prägte die Politik des Landes nach der Finanzkrise 2008 stark?",
          "o": [
            "Der Kohäsionsfonds",
            "Die Euro-Rettungsschirme",
            "Der Schengen-Fonds",
            "Das Erasmus-Programm"
          ],
          "a": 1,
          "tip": "Es ging um Notkredite zur Abwendung von Staatspleiten im Euroraum.",
          "exp": "Die Rettungspakete ab 2010 waren an strenge Spar- und Reformauflagen gekoppelt."
        },
        {
          "q": "Welches finanzielle Rettungsprogramm der EU („Troika“ aus EU-Kommission, EZB und IWF) prägte die Politik des Landes nach der Finanzkrise 2008 stark?",
          "o": [
            "Der Kohäsionsfonds",
            "Die Euro-Rettungsschirme",
            "Der Schengen-Fonds",
            "Das Erasmus-Programm"
          ],
          "a": 1,
          "tip": "Es ging um Notkredite zur Abwendung von Staatspleiten im Euroraum.",
          "exp": "Die Rettungspakete ab 2010 waren an strenge Spar- und Reformauflagen gekoppelt."
        }
      ]
    },
    "Irland": {
      "1": [
        {
          "q": "Neben der Landessprache ist welche Sprache in diesem Staat offizielle Amtssprache, die auch in der EU eine dominierende Rolle spielt?",
          "o": [
            "Französisch",
            "Englisch",
            "Spanisch",
            "Deutsch"
          ],
          "a": 1,
          "tip": "Es ist die weltweit am häufigsten gelernte Zweitsprache.",
          "exp": "Englisch und Irisch sind die beiden offiziellen Amtssprachen Irlands."
        },
        {
          "q": "Neben der Landessprache ist welche Sprache in diesem Staat offizielle Amtssprache, die auch in der EU eine dominierende Rolle spielt?",
          "o": [
            "Französisch",
            "Englisch",
            "Spanisch",
            "Deutsch"
          ],
          "a": 1,
          "tip": "Es ist die weltweit am häufigsten gelernte Zweitsprache.",
          "exp": "Englisch und Irisch sind die beiden offiziellen Amtssprachen Irlands."
        }
      ],
      "2": [
        {
          "q": "Welchen Vorteil nutzt das Land durch niedrige Unternehmenssteuern innerhalb des EU-Binnenmarktes besonders erfolgreich?",
          "o": [
            "Anlockung internationaler Technologie- und Pharmakonzerne",
            "Aufbau einer riesigen Kohleindustrie",
            "Verhinderung von Importen aus anderen EU-Ländern",
            "Abschaffung aller Banken"
          ],
          "a": 0,
          "tip": "Große Konzerne wie Apple oder Google haben hier ihren Europa-Sitz.",
          "exp": "Irlands niedriger Körperschaftssteuersatz von 12,5 % zog Hunderte US-Konzerne an."
        },
        {
          "q": "Welchen Vorteil nutzt das Land durch niedrige Unternehmenssteuern innerhalb des EU-Binnenmarktes besonders erfolgreich?",
          "o": [
            "Anlockung internationaler Technologie- und Pharmakonzerne",
            "Aufbau einer riesigen Kohleindustrie",
            "Verhinderung von Importen aus anderen EU-Ländern",
            "Abschaffung aller Banken"
          ],
          "a": 0,
          "tip": "Große Konzerne wie Apple oder Google haben hier ihren Europa-Sitz.",
          "exp": "Irlands niedriger Körperschaftssteuersatz von 12,5 % zog Hunderte US-Konzerne an."
        }
      ],
      "3": [
        {
          "q": "Welches Abkommen zwischen der EU und dem Vereinigten Königreich war nach dem „Brexit“ besonders wichtig, um eine harte Grenze auf der Insel zu verhindern?",
          "o": [
            "Das Karpaten-Protokoll",
            "Das Nordirland-Protokoll",
            "Das Gibraltar-Abkommen",
            "Der Vertrag von Nizza"
          ],
          "a": 1,
          "tip": "Es betrifft den nördlichen Teil der Atlantikinsel.",
          "exp": "Das Nordirland-Protokoll verhinderte Grenzkontrollen zwischen Irland und Nordirland."
        },
        {
          "q": "Welches Abkommen zwischen der EU und dem Vereinigten Königreich war nach dem „Brexit“ besonders wichtig, um eine harte Grenze auf der Insel zu verhindern?",
          "o": [
            "Das Karpaten-Protokoll",
            "Das Nordirland-Protokoll",
            "Das Gibraltar-Abkommen",
            "Der Vertrag von Nizza"
          ],
          "a": 1,
          "tip": "Es betrifft den nördlichen Teil der Atlantikinsel.",
          "exp": "Das Nordirland-Protokoll verhinderte Grenzkontrollen zwischen Irland und Nordirland."
        }
      ]
    },
    "Italien": {
      "1": [
        {
          "q": "In welcher italienischen Stadt wurden 1957 die historischen Verträge zur Gründung der Europäischen Wirtschaftsgemeinschaft (EWG) unterzeichnet?",
          "o": [
            "Mailand",
            "Rom",
            "Venedig",
            "Florenz"
          ],
          "a": 1,
          "tip": "Die Verträge heißen genau wie diese Hauptstadt.",
          "exp": "Die Römischen Verträge sind die wichtigsten Gründungsdokumente der EWG."
        },
        {
          "q": "In welcher italienischen Stadt wurden 1957 die historischen Verträge zur Gründung der Europäischen Wirtschaftsgemeinschaft (EWG) unterzeichnet?",
          "o": [
            "Mailand",
            "Rom",
            "Venedig",
            "Florenz"
          ],
          "a": 1,
          "tip": "Die Verträge heißen genau wie diese Hauptstadt.",
          "exp": "Die Römischen Verträge sind die wichtigsten Gründungsdokumente der EWG."
        }
      ],
      "2": [
        {
          "q": "Welcher Mitbegründer der EU war eines der ursprünglichen wie vielen Länder der Montanunion (EGKS)?",
          "o": [
            "Die „Inneren Sechs“",
            "Die „Glorreichen Sieben“",
            "Die „Neun Gründer“",
            "Die „Zwölf Apostel“"
          ],
          "a": 0,
          "tip": "Es waren zu Beginn exakt 6 Staaten (Deutschland, Frankreich, Italien und die Benelux-Staaten).",
          "exp": "Die EGKS wurde 1951 von den sechs Gründerstaaten unterzeichnet."
        },
        {
          "q": "Welcher Mitbegründer der EU war eines der ursprünglichen wie vielen Länder der Montanunion (EGKS)?",
          "o": [
            "Die „Inneren Sechs“",
            "Die „Glorreichen Sieben“",
            "Die „Neun Gründer“",
            "Die „Zwölf Apostel“"
          ],
          "a": 0,
          "tip": "Es waren zu Beginn exakt 6 Staaten (Deutschland, Frankreich, Italien und die Benelux-Staaten).",
          "exp": "Die EGKS wurde 1951 von den sechs Gründerstaaten unterzeichnet."
        }
      ],
      "3": [
        {
          "q": "Welches europäische Amt hat seinen Hauptsitz in der Stadt Parma und kümmert sich um die Sicherheit von Lebensmitteln in der EU?",
          "o": [
            "Europäische Arzneimittel-Agentur",
            "Europäische Behörde für Lebensmittelsicherheit",
            "Europäisches Polizeiamt",
            "Europäische Umweltagentur"
          ],
          "a": 1,
          "tip": "Parma ist auch für seinen berühmten Schinken und Käse bekannt.",
          "exp": "Die EFSA wurde 2002 gegründet und überwacht Lebensmittelsicherheitsrisiken."
        },
        {
          "q": "Welches europäische Amt hat seinen Hauptsitz in der Stadt Parma und kümmert sich um die Sicherheit von Lebensmitteln in der EU?",
          "o": [
            "Europäische Arzneimittel-Agentur",
            "Europäische Behörde für Lebensmittelsicherheit",
            "Europäisches Polizeiamt",
            "Europäische Umweltagentur"
          ],
          "a": 1,
          "tip": "Parma ist auch für seinen berühmten Schinken und Käse bekannt.",
          "exp": "Die EFSA wurde 2002 gegründet und überwacht Lebensmittelsicherheitsrisiken."
        }
      ]
    },
    "Kroatien": {
      "1": [
        {
          "q": "Welches Land trat am 1. Juli 2013 als bislang letzter Mitgliedsstaat der Europäischen Union bei?",
          "o": [
            "Serbien",
            "Kroatien",
            "Albanien",
            "Nordmazedonien"
          ],
          "a": 1,
          "tip": "Es liegt an der Adria und ist ein sehr beliebtes Urlaubsland der Österreicher.",
          "exp": "Kroatien ist das derzeit 27. und jüngste EU-Mitgliedsland."
        },
        {
          "q": "Welches Land trat am 1. Juli 2013 als bislang letzter Mitgliedsstaat der Europäischen Union bei?",
          "o": [
            "Serbien",
            "Kroatien",
            "Albanien",
            "Nordmazedonien"
          ],
          "a": 1,
          "tip": "Es liegt an der Adria und ist ein sehr beliebtes Urlaubsland der Österreicher.",
          "exp": "Kroatien ist das derzeit 27. und jüngste EU-Mitgliedsland."
        }
      ],
      "2": [
        {
          "q": "Welchen Meilenstein der europäischen Integration erreichte dieses Land am 1. Jänner 2023 gleichzeitig mit dem Beitritt zum Schengen-Raum?",
          "o": [
            "Einführung des Euro als Währung",
            "Beitritt zur NATO",
            "Übernahme der EU-Ratspräsidentschaft",
            "Verlegung des EU-Parlaments"
          ],
          "a": 0,
          "tip": "Das Land löste damit seine bisherige Währung (Kuna) ab.",
          "exp": "Am 1. Jänner 2023 vollzog Kroatien den gleichzeitigen Schengen- und Euro-Beitritt."
        },
        {
          "q": "Welchen Meilenstein der europäischen Integration erreichte dieses Land am 1. Jänner 2023 gleichzeitig mit dem Beitritt zum Schengen-Raum?",
          "o": [
            "Einführung des Euro als Währung",
            "Beitritt zur NATO",
            "Übernahme der EU-Ratspräsidentschaft",
            "Verlegung des EU-Parlaments"
          ],
          "a": 0,
          "tip": "Das Land löste damit seine bisherige Währung (Kuna) ab.",
          "exp": "Am 1. Jänner 2023 vollzog Kroatien den gleichzeitigen Schengen- und Euro-Beitritt."
        }
      ],
      "3": [
        {
          "q": "Wie nennt man das System, bei dem die Vertretung der EU-Mitgliedstaaten im Rat der Europäischen Union alle sechs Monate wechselt?",
          "o": [
            "EU-Kommissionsvorsitz",
            "Rotierende Ratspräsidentschaft",
            "Europäisches Direktorium",
            "Ständer Sicherheitsrat"
          ],
          "a": 1,
          "tip": "Alle EU-Länder lösen sich dabei im Halbjahrestakt ab.",
          "exp": "Die rotierende Präsidentschaft führt zu wechselnden thematischen Schwerpunkten."
        },
        {
          "q": "Wie nennt man das System, bei dem die Vertretung der EU-Mitgliedstaaten im Rat der Europäischen Union alle sechs Monate wechselt?",
          "o": [
            "EU-Kommissionsvorsitz",
            "Rotierende Ratspräsidentschaft",
            "Europäisches Direktorium",
            "Ständer Sicherheitsrat"
          ],
          "a": 1,
          "tip": "Alle EU-Länder lösen sich dabei im Halbjahrestakt ab.",
          "exp": "Die rotierende Präsidentschaft führt zu wechselnden thematischen Schwerpunkten."
        }
      ]
    },
    "Lettland": {
      "1": [
        {
          "q": "Was ist die Hauptaufgabe des Europäischen Rates, in dem die Staats- und Regierungschef aller Mitgliedstaaten zusammentreffen?",
          "o": [
            "Festlegung der allgemeinen politischen Zielsetzungen und Prioritäten der EU",
            "Erlassen von detaillierten Gesetzen für die Landwirtschaft",
            "Bestrafung von Bürgern bei Verkehrsdelikten",
            "Drucken von Geldscheinen"
          ],
          "a": 0,
          "tip": "Der Rat gibt die große Marschrichtung für ganz Europa vor.",
          "exp": "Der Europäische Rat definiert die übergeordneten Leitlinien der EU-Politik."
        },
        {
          "q": "Was ist die Hauptaufgabe des Europäischen Rates, in dem die Staats- und Regierungschef aller Mitgliedstaaten zusammentreffen?",
          "o": [
            "Festlegung der allgemeinen politischen Zielsetzungen und Prioritäten der EU",
            "Erlassen von detaillierten Gesetzen für die Landwirtschaft",
            "Bestrafung von Bürgern bei Verkehrsdelikten",
            "Drucken von Geldscheinen"
          ],
          "a": 0,
          "tip": "Der Rat gibt die große Marschrichtung für ganz Europa vor.",
          "exp": "Der Europäische Rat definiert die übergeordneten Leitlinien der EU-Politik."
        }
      ],
      "2": [
        {
          "q": "Welches System sorgt dafür, dass Bürger der EU-Länder im gesamten Raum der Union ohne Visum arbeiten und wohnen dürfen?",
          "o": [
            "Europäische Zollunion",
            "EU-Freizügigkeit",
            "Schengener Abkommen",
            "Europarat"
          ],
          "a": 1,
          "tip": "Das Wort beschreibt das „freie Bewegen“ der Menschen.",
          "exp": "Die Personenfreizügigkeit ist ein Eckpfeiler der EU-Bürgerschaft."
        },
        {
          "q": "Welches System sorgt dafür, dass Bürger der EU-Länder im gesamten Raum der Union ohne Visum arbeiten und wohnen dürfen?",
          "o": [
            "Europäische Zollunion",
            "EU-Freizügigkeit",
            "Schengener Abkommen",
            "Europarat"
          ],
          "a": 1,
          "tip": "Das Wort beschreibt das „freie Bewegen“ der Menschen.",
          "exp": "Die Personenfreizügigkeit ist ein Eckpfeiler der EU-Bürgerschaft."
        }
      ],
      "3": [
        {
          "q": "In welchem Jahr führte dieser baltische Staat den Euro als offizielle Währung ein und ersetzte damit den Lats?",
          "o": [
            "2004",
            "2014",
            "2018",
            "2021"
          ],
          "a": 1,
          "tip": "Es geschah genau 10 Jahre nach dem Beitritt zur Europäischen Union.",
          "exp": "Lettland führte am 1. Jänner 2014 die europäische Gemeinschaftswährung ein."
        },
        {
          "q": "In welchem Jahr führte dieser baltische Staat den Euro als offizielle Währung ein und ersetzte damit den Lats?",
          "o": [
            "2004",
            "2014",
            "2018",
            "2021"
          ],
          "a": 1,
          "tip": "Es geschah genau 10 Jahre nach dem Beitritt zur Europäischen Union.",
          "exp": "Lettland führte am 1. Jänner 2014 die europäische Gemeinschaftswährung ein."
        }
      ]
    },
    "Litauen": {
      "1": [
        {
          "q": "Welcher europäische Gerichtshof sorgt dafür, dass das EU-Recht in allen Mitgliedsländern gleich angewendet und ausgelegt wird?",
          "o": [
            "Europäischer Gerichtshof für Menschenrechte",
            "Europäischer Gerichtshof",
            "Internationaler Strafgerichtshof",
            "Bundesverfassungsgericht"
          ],
          "a": 1,
          "tip": "Die Abkürzung lautet EuGH.",
          "exp": "Der EuGH in Luxemburg überwacht die Rechtmäßigkeit von EU-Organen."
        },
        {
          "q": "Welcher europäische Gerichtshof sorgt dafür, dass das EU-Recht in allen Mitgliedsländern gleich angewendet und ausgelegt wird?",
          "o": [
            "Europäischer Gerichtshof für Menschenrechte",
            "Europäischer Gerichtshof",
            "Internationaler Strafgerichtshof",
            "Bundesverfassungsgericht"
          ],
          "a": 1,
          "tip": "Die Abkürzung lautet EuGH.",
          "exp": "Der EuGH in Luxemburg überwacht die Rechtmäßigkeit von EU-Organen."
        }
      ],
      "2": [
        {
          "q": "Welcher Grenzabschnitt dieses Landes ist politisch besonders sensibel, da er das russische Gebiet Kaliningrad vom verbündeten Belarus trennt?",
          "o": [
            "Die Suwalki-Lücke",
            "Der Brennerpass",
            "Die Ostrand-Zone",
            "Das Memelland"
          ],
          "a": 0,
          "tip": "Die Korridor-Region ist nach einer nahegelegenen polnischen Stadt benannt.",
          "exp": "Die Suwalki-Lücke gilt militärisch als verletzlichste Flanke der NATO."
        },
        {
          "q": "Welcher Grenzabschnitt dieses Landes ist politisch besonders sensibel, da er das russische Gebiet Kaliningrad vom verbündeten Belarus trennt?",
          "o": [
            "Die Suwalki-Lücke",
            "Der Brennerpass",
            "Die Ostrand-Zone",
            "Das Memelland"
          ],
          "a": 0,
          "tip": "Die Korridor-Region ist nach einer nahegelegenen polnischen Stadt benannt.",
          "exp": "Die Suwalki-Lücke gilt militärisch als verletzlichste Flanke der NATO."
        }
      ],
      "3": [
        {
          "q": "Wie heißen die drei Baltischen Staaten zusammen, die 2004 gemeinsam der EU beigetreten sind?",
          "o": [
            "Polen, Tschechien, Slowakei",
            "Estland, Lettland, Litauen",
            "Dänemark, Schweden, Finnland",
            "Rumänien, Bulgarien, Moldau"
          ],
          "a": 1,
          "tip": "Es handelt sich um die drei nordöstlichen EU-Staaten an der Ostsee.",
          "exp": "Estland, Lettland und Litauen werden geographisch und politisch als Baltikum zusammengefasst."
        },
        {
          "q": "Wie heißen die drei Baltischen Staaten zusammen, die 2004 gemeinsam der EU beigetreten sind?",
          "o": [
            "Polen, Tschechien, Slowakei",
            "Estland, Lettland, Litauen",
            "Dänemark, Schweden, Finnland",
            "Rumänien, Bulgarien, Moldau"
          ],
          "a": 1,
          "tip": "Es handelt sich um die drei nordöstlichen EU-Staaten an der Ostsee.",
          "exp": "Estland, Lettland und Litauen werden geographisch und politisch als Baltikum zusammengefasst."
        }
      ]
    },
    "Luxemburg": {
      "1": [
        {
          "q": "Welches wichtige EU-Organ hat neben dem Europäischen Gerichtshof (EuGH) seinen Hauptsitz in diesem kleinen Land?",
          "o": [
            "Europäischer Rechnungshof",
            "Europäisches Parlament",
            "Europäische Zentralbank",
            "Europäische Agentur für Frontex"
          ],
          "a": 0,
          "tip": "Diese Behörde prüft, ob die EU-Gelder korrekt und rechtmäßig ausgegeben werden.",
          "exp": "Der Europäische Rechnungshof (EuRH) kontrolliert die EU-Finanzen."
        },
        {
          "q": "Welches wichtige EU-Organ hat neben dem Europäischen Gerichtshof (EuGH) seinen Hauptsitz in diesem kleinen Land?",
          "o": [
            "Europäischer Rechnungshof",
            "Europäisches Parlament",
            "Europäische Zentralbank",
            "Europäische Agentur für Frontex"
          ],
          "a": 0,
          "tip": "Diese Behörde prüft, ob die EU-Gelder korrekt und rechtmäßig ausgegeben werden.",
          "exp": "Der Europäische Rechnungshof (EuRH) kontrolliert die EU-Finanzen."
        }
      ],
      "2": [
        {
          "q": "Nach welchem grenznahen Dorf in diesem Land ist das berühmte Abkommen zur Abschaffung der Passkontrollen an den europäischen Binnengrenzen benannt?",
          "o": [
            "Schengen",
            "Echternach",
            "Vianden",
            "Remich"
          ],
          "a": 0,
          "tip": "Es liegt im Dreiländereck mit Deutschland und Frankreich.",
          "exp": "Das Schengener Abkommen wurde 1985 auf einem Schiff nahe Schengen unterzeichnet."
        },
        {
          "q": "Nach welchem grenznahen Dorf in diesem Land ist das berühmte Abkommen zur Abschaffung der Passkontrollen an den europäischen Binnengrenzen benannt?",
          "o": [
            "Schengen",
            "Echternach",
            "Vianden",
            "Remich"
          ],
          "a": 0,
          "tip": "Es liegt im Dreiländereck mit Deutschland und Frankreich.",
          "exp": "Das Schengener Abkommen wurde 1985 auf einem Schiff nahe Schengen unterzeichnet."
        }
      ],
      "3": [
        {
          "q": "Wie wird die Gewichtung der Stimmen im Rat der EU genannt, wenn Gesetzgebungen beschlossen werden?",
          "o": [
            "Absolute Mehrheit",
            "Qualifizierte Mehrheit",
            "Einfache Einstimmigkeit",
            "Veto-Prinzip"
          ],
          "a": 1,
          "tip": "Es müssen mindestens 55 % der Staaten zustimmen, die mindestens 65 % der EU-Bevölkerung repräsentieren.",
          "exp": "Die qualifizierte Mehrheit sichert die demokratische Vertretung kleiner und großer Länder."
        },
        {
          "q": "Wie wird die Gewichtung der Stimmen im Rat der EU genannt, wenn Gesetzgebungen beschlossen werden?",
          "o": [
            "Absolute Mehrheit",
            "Qualifizierte Mehrheit",
            "Einfache Einstimmigkeit",
            "Veto-Prinzip"
          ],
          "a": 1,
          "tip": "Es müssen mindestens 55 % der Staaten zustimmen, die mindestens 65 % der EU-Bevölkerung repräsentieren.",
          "exp": "Die qualifizierte Mehrheit sichert die demokratische Vertretung kleiner und großer Länder."
        }
      ]
    },
    "Malta": {
      "1": [
        {
          "q": "Welches Land ist flächenmäßig und nach der Einwohnerzahl das kleinste Mitgliedsland der Europäischen Union?",
          "o": [
            "Luxemburg",
            "Malta",
            "Zypern",
            "Estland"
          ],
          "a": 1,
          "tip": "Der Staat besteht aus einer kleinen Inselgruppe im Mittelmeer.",
          "exp": "Malta besitzt eine Fläche von nur 316 Quadratkilometern."
        },
        {
          "q": "Welches Land ist flächenmäßig und nach der Einwohnerzahl das kleinste Mitgliedsland der Europäischen Union?",
          "o": [
            "Luxemburg",
            "Malta",
            "Zypern",
            "Estland"
          ],
          "a": 1,
          "tip": "Der Staat besteht aus einer kleinen Inselgruppe im Mittelmeer.",
          "exp": "Malta besitzt eine Fläche von nur 316 Quadratkilometern."
        }
      ],
      "2": [
        {
          "q": "Wie viele Abgeordnete sendet das kleinste EU-Land mindestens in das Europäische Parlament?",
          "o": [
            "1 Abgeordneter",
            "6 Abgeordnete",
            "12 Abgeordnete",
            "20 Abgeordnete"
          ],
          "a": 1,
          "tip": "Das EU-Recht garantiert jedem Land eine Mindestanzahl von sechs Sitzen.",
          "exp": "Nach dem Prinzip der degressiven Proportionalität hat jedes Land mindestens 6 Abgeordnete."
        },
        {
          "q": "Wie viele Abgeordnete sendet das kleinste EU-Land mindestens in das Europäische Parlament?",
          "o": [
            "1 Abgeordneter",
            "6 Abgeordnete",
            "12 Abgeordnete",
            "20 Abgeordnete"
          ],
          "a": 1,
          "tip": "Das EU-Recht garantiert jedem Land eine Mindestanzahl von sechs Sitzen.",
          "exp": "Nach dem Prinzip der degressiven Proportionalität hat jedes Land mindestens 6 Abgeordnete."
        }
      ],
      "3": [
        {
          "q": "Wann trat dieser Inselstaat im Mittelmeer der Europäischen Union bei?",
          "o": [
            "1995",
            "2004",
            "2007",
            "2013"
          ],
          "a": 1,
          "tip": "Es trat im Rahmen der bisher größten EU-Erweiterungswelle bei.",
          "exp": "Malta trat am 1. Mai 2004 gemeinsam mit 9 weiteren Staaten bei."
        },
        {
          "q": "Wann trat dieser Inselstaat im Mittelmeer der Europäischen Union bei?",
          "o": [
            "1995",
            "2004",
            "2007",
            "2013"
          ],
          "a": 1,
          "tip": "Es trat im Rahmen der bisher größten EU-Erweiterungswelle bei.",
          "exp": "Malta trat am 1. Mai 2004 gemeinsam mit 9 weiteren Staaten bei."
        }
      ]
    },
    "Niederlande": {
      "1": [
        {
          "q": "Welcher Europäische Gerichtshof oder welche EU-Agentur befindet sich in der Stadt Den Haag?",
          "o": [
            "Europäische Arzneimittel-Agentur",
            "Europol",
            "Europäische Zentralbank",
            "Europäisches Parlament"
          ],
          "a": 1,
          "tip": "Den Haag ist international als „Stadt des Friedens und des Rechts“ bekannt.",
          "exp": "Europol koordiniert die Kriminalitätsbekämpfung der EU-Staaten."
        },
        {
          "q": "Welcher Europäische Gerichtshof oder welche EU-Agentur befindet sich in der Stadt Den Haag?",
          "o": [
            "Europäische Arzneimittel-Agentur",
            "Europol",
            "Europäische Zentralbank",
            "Europäisches Parlament"
          ],
          "a": 1,
          "tip": "Den Haag ist international als „Stadt des Friedens und des Rechts“ bekannt.",
          "exp": "Europol koordiniert die Kriminalitätsbekämpfung der EU-Staaten."
        }
      ],
      "2": [
        {
          "q": "Wie nennt man den Zusammenschluss der drei westeuropäischen Nachbarstaaten (inklusive Belgien und Luxemburg), der als Vorbild für die spätere EU galt?",
          "o": [
            "Nordischer Rat",
            "Benelux-Union",
            "Visegrád-Gruppe",
            "Baltischer Rat"
          ],
          "a": 1,
          "tip": "Der Name setzt sich aus den Anfangsbuchstaben der drei Länder zusammen.",
          "exp": "Die Benelux-Zollunion wurde bereits 1944 gegründet."
        },
        {
          "q": "Wie nennt man den Zusammenschluss der drei westeuropäischen Nachbarstaaten (inklusive Belgien und Luxemburg), der als Vorbild für die spätere EU galt?",
          "o": [
            "Nordischer Rat",
            "Benelux-Union",
            "Visegrád-Gruppe",
            "Baltischer Rat"
          ],
          "a": 1,
          "tip": "Der Name setzt sich aus den Anfangsbuchstaben der drei Länder zusammen.",
          "exp": "Die Benelux-Zollunion wurde bereits 1944 gegründet."
        }
      ],
      "3": [
        {
          "q": "Welcher historische Vertrag wurde 1992 im holländischen Maastricht unterzeichnet?",
          "o": [
            "Der Vertrag zur Gründung der EU und Vorbereitung des Euro",
            "Der Vertrag zur Abschaffung der Zölle",
            "Der Friedensvertrag nach dem Kalten Krieg",
            "Der Beitrittsvertrag Österreichs zur EU"
          ],
          "a": 0,
          "tip": "Er meißelte den Übergang von der EG zur Europäischen Union (EU) fest.",
          "exp": "Der Vertrag von Maastricht trat am 1. November 1993 in Kraft."
        },
        {
          "q": "Welcher historische Vertrag wurde 1992 im holländischen Maastricht unterzeichnet?",
          "o": [
            "Der Vertrag zur Gründung der EU und Vorbereitung des Euro",
            "Der Vertrag zur Abschaffung der Zölle",
            "Der Friedensvertrag nach dem Kalten Krieg",
            "Der Beitrittsvertrag Österreichs zur EU"
          ],
          "a": 0,
          "tip": "Er meißelte den Übergang von der EG zur Europäischen Union (EU) fest.",
          "exp": "Der Vertrag von Maastricht trat am 1. November 1993 in Kraft."
        }
      ]
    },
    "Österreich": {
      "1": [
        {
          "q": "In welchem Jahr stimmte die Bevölkerung dieses Landes in einer Volksabstimmung für den Beitritt zur Europäischen Union?",
          "o": [
            "1989",
            "1994",
            "1998",
            "2002"
          ],
          "a": 1,
          "tip": "Der tatsächliche Beitritt erfolgte am 1. Jänner 1995.",
          "exp": "Zwei Drittel der stimmberechtigten Österreicher stimmten 1994 für den Beitritt."
        },
        {
          "q": "In welchem Jahr stimmte die Bevölkerung dieses Landes in einer Volksabstimmung für den Beitritt zur Europäischen Union?",
          "o": [
            "1989",
            "1994",
            "1998",
            "2002"
          ],
          "a": 1,
          "tip": "Der tatsächliche Beitritt erfolgte am 1. Jänner 1995.",
          "exp": "Zwei Drittel der stimmberechtigten Österreicher stimmten 1994 für den Beitritt."
        }
      ],
      "2": [
        {
          "q": "Welches EU-Organ vertritt das Volk der EU-Bürger direkt und wird alle 5 Jahre direkt gewählt?",
          "o": [
            "Der Europäische Rat",
            "Das Europäische Parlament",
            "Die Europäische Kommission",
            "Der Rat der Europäischen Union"
          ],
          "a": 1,
          "tip": "Hier sitzen die direkt gewählten Volksvertreter (MEPs).",
          "exp": "Das Europäische Parlament teilt sich die Gesetzgebung mit dem Ministerrat."
        },
        {
          "q": "Welches EU-Organ vertritt das Volk der EU-Bürger direkt und wird alle 5 Jahre direkt gewählt?",
          "o": [
            "Der Europäische Rat",
            "Das Europäische Parlament",
            "Die Europäische Kommission",
            "Der Rat der Europäischen Union"
          ],
          "a": 1,
          "tip": "Hier sitzen die direkt gewählten Volksvertreter (MEPs).",
          "exp": "Das Europäische Parlament teilt sich die Gesetzgebung mit dem Ministerrat."
        }
      ],
      "3": [
        {
          "q": "Welcher Artikel der Verfassung schützt das verfassungsrechtliche Grundprinzip des Landes, das auch bei EU-Militäreinsätzen stets beachtet werden muss?",
          "o": [
            "Das Neutralitätsgesetz",
            "Das Immunitätsgesetz",
            "Das Notverordnungsrecht",
            "Das Schengener Abkommen"
          ],
          "a": 0,
          "tip": "Es legt fest, dass das Land keinen fremden Bündnissen beitritt und keine fremden Stützpunkte erlaubt.",
          "exp": "Das Bundesverfassungsgesetz über die Neutralität Österreichs wurde 1955 beschlossen."
        },
        {
          "q": "Welcher Artikel der Verfassung schützt das verfassungsrechtliche Grundprinzip des Landes, das auch bei EU-Militäreinsätzen stets beachtet werden muss?",
          "o": [
            "Das Neutralitätsgesetz",
            "Das Immunitätsgesetz",
            "Das Notverordnungsrecht",
            "Das Schengener Abkommen"
          ],
          "a": 0,
          "tip": "Es legt fest, dass das Land keinen fremden Bündnissen beitritt und keine fremden Stützpunkte erlaubt.",
          "exp": "Das Bundesverfassungsgesetz über die Neutralität Österreichs wurde 1955 beschlossen."
        }
      ]
    },
    "Polen": {
      "1": [
        {
          "q": "Welches wichtige Gremium der EU besteht aus jeweils einem Kommissar oder einer Kommissarin aus jedem Mitgliedstaat?",
          "o": [
            "Der Europäische Gerichtshof",
            "Die Europäische Kommission",
            "Der Europäische Rechnungshof",
            "Die Europäische Investitionsbank"
          ],
          "a": 1,
          "tip": "Sie gilt als die „Regierung“ oder Exekutive der EU.",
          "exp": "Die EU-Kommission schlägt Gesetze vor und überwacht deren Einhaltung."
        },
        {
          "q": "Welches wichtige Gremium der EU besteht aus jeweils einem Kommissar oder einer Kommissarin aus jedem Mitgliedstaat?",
          "o": [
            "Der Europäische Gerichtshof",
            "Die Europäische Kommission",
            "Der Europäische Rechnungshof",
            "Die Europäische Investitionsbank"
          ],
          "a": 1,
          "tip": "Sie gilt als die „Regierung“ oder Exekutive der EU.",
          "exp": "Die EU-Kommission schlägt Gesetze vor und überwacht deren Einhaltung."
        }
      ],
      "2": [
        {
          "q": "Welches Koordinierungsgremium bildete dieses Land zusammen mit Tschechien, der Slowakei und Ungarn zur Förderung der regionalen Zusammenarbeit in der EU?",
          "o": [
            "Die Benelux-Gruppe",
            "Die Visegrád-Gruppe",
            "Der Nordische Rat",
            "Die Weimarer Dreieck"
          ],
          "a": 1,
          "tip": "Die Gruppe ist nach einer ungarischen Stadt benannt.",
          "exp": "Die V4 wurde 1991 auf der Burg Visegrád gegründet."
        },
        {
          "q": "Welches Koordinierungsgremium bildete dieses Land zusammen mit Tschechien, der Slowakei und Ungarn zur Förderung der regionalen Zusammenarbeit in der EU?",
          "o": [
            "Die Benelux-Gruppe",
            "Die Visegrád-Gruppe",
            "Der Nordische Rat",
            "Die Weimarer Dreieck"
          ],
          "a": 1,
          "tip": "Die Gruppe ist nach einer ungarischen Stadt benannt.",
          "exp": "Die V4 wurde 1991 auf der Burg Visegrád gegründet."
        }
      ],
      "3": [
        {
          "q": "Wie heißt die europäische Agentur für die Grenz- und Küstenwache, die ihren Hauptsitz in der Hauptstadt dieses Landes hat?",
          "o": [
            "Europol",
            "Frontex",
            "Eurojust",
            "Cedefop"
          ],
          "a": 1,
          "tip": "Der Name leitet sich von den französischen Wörtern für „Frontières extérieures“ (Außengrenzen) ab.",
          "exp": "Frontex hat seinen operativen Hauptsitz in Warschau."
        },
        {
          "q": "Wie heißt die europäische Agentur für die Grenz- und Küstenwache, die ihren Hauptsitz in der Hauptstadt dieses Landes hat?",
          "o": [
            "Europol",
            "Frontex",
            "Eurojust",
            "Cedefop"
          ],
          "a": 1,
          "tip": "Der Name leitet sich von den französischen Wörtern für „Frontières extérieures“ (Außengrenzen) ab.",
          "exp": "Frontex hat seinen operativen Hauptsitz in Warschau."
        }
      ]
    },
    "Portugal": {
      "1": [
        {
          "q": "Welcher Vertrag der EU wurde 2007 unterzeichnet und reformierte die Funktionsweise der Europäischen Union grundlegend?",
          "o": [
            "Vertrag von Nizza",
            "Vertrag von Lissabon",
            "Vertrag von Amsterdam",
            "Vertrag von Maastricht"
          ],
          "a": 1,
          "tip": "Er trägt den Namen der Hauptstadt dieses südeuropäischen Landes.",
          "exp": "Der Vertrag von Lissabon ersetzte den Verfassungsentwurf der EU."
        },
        {
          "q": "Welcher Vertrag der EU wurde 2007 unterzeichnet und reformierte die Funktionsweise der Europäischen Union grundlegend?",
          "o": [
            "Vertrag von Nizza",
            "Vertrag von Lissabon",
            "Vertrag von Amsterdam",
            "Vertrag von Maastricht"
          ],
          "a": 1,
          "tip": "Er trägt den Namen der Hauptstadt dieses südeuropäischen Landes.",
          "exp": "Der Vertrag von Lissabon ersetzte den Verfassungsentwurf der EU."
        }
      ],
      "2": [
        {
          "q": "Wie wird die europäische Währungsunion genannt, der 20 der 27 EU-Staaten angehören?",
          "o": [
            "Schengen-Raum",
            "Eurozone",
            "Binnenmarkt",
            "Europäischer Wirtschaftsraum"
          ],
          "a": 1,
          "tip": "Das Wort leitet sich direkt von der gemeinsamen Währung ab.",
          "exp": "Die Eurozone umfasst alle EU-Staaten, die den Euro eingeführt haben."
        },
        {
          "q": "Wie wird die europäische Währungsunion genannt, der 20 der 27 EU-Staaten angehören?",
          "o": [
            "Schengen-Raum",
            "Eurozone",
            "Binnenmarkt",
            "Europäischer Wirtschaftsraum"
          ],
          "a": 1,
          "tip": "Das Wort leitet sich direkt von der gemeinsamen Währung ab.",
          "exp": "Die Eurozone umfasst alle EU-Staaten, die den Euro eingeführt haben."
        }
      ],
      "3": [
        {
          "q": "Welcher Politiker dieses Landes war von 2004 bis 2014 für zwei Amtszeiten Präsident der Europäischen Kommission?",
          "o": [
            "Mário Soares",
            "José Manuel Barroso",
            "António Guterres",
            "Marcelo Rebelo de Sousa"
          ],
          "a": 1,
          "tip": "Sein Nachfolger an der Spitze der EU-Kommission war Jean-Claude Juncker.",
          "exp": "Barroso war zuvor Premierminister Portugals."
        },
        {
          "q": "Welcher Politiker dieses Landes war von 2004 bis 2014 für zwei Amtszeiten Präsident der Europäischen Kommission?",
          "o": [
            "Mário Soares",
            "José Manuel Barroso",
            "António Guterres",
            "Marcelo Rebelo de Sousa"
          ],
          "a": 1,
          "tip": "Sein Nachfolger an der Spitze der EU-Kommission war Jean-Claude Juncker.",
          "exp": "Barroso war zuvor Premierminister Portugals."
        }
      ]
    },
    "Rumänien": {
      "1": [
        {
          "q": "Welche Vertretung besitzt jedes EU-Mitgliedsland in der Europäischen Kommission?",
          "o": [
            "Genau einen EU-Kommissar",
            "Zwei EU-Kommissare",
            "Fünf EU-Kommissare",
            "Die Anzahl hängt von der Einwohnerzahl ab"
          ],
          "a": 0,
          "tip": "Das Prinzip lautet: Ein Land, ein Mitglied in der Kommission.",
          "exp": "Jedes Land stellt ein Mitglied der 27-köpfigen EU-Kommission."
        },
        {
          "q": "Welche Vertretung besitzt jedes EU-Mitgliedsland in der Europäischen Kommission?",
          "o": [
            "Genau einen EU-Kommissar",
            "Zwei EU-Kommissare",
            "Fünf EU-Kommissare",
            "Die Anzahl hängt von der Einwohnerzahl ab"
          ],
          "a": 0,
          "tip": "Das Prinzip lautet: Ein Land, ein Mitglied in der Kommission.",
          "exp": "Jedes Land stellt ein Mitglied der 27-köpfigen EU-Kommission."
        }
      ],
      "2": [
        {
          "q": "In welchem Jahr wurden Grenzübertritte über den Seeweg und Luftweg für dieses Land im Schengen-Raum teilintegriert („Schengen-Air“)?",
          "o": [
            "2013",
            "2020",
            "2024",
            "2026"
          ],
          "a": 2,
          "tip": "Es geschah im März eines sehr kürzlich vergangenen Jahres.",
          "exp": "Rumänien trat am 31. März 2024 dem Schengen-Raum für Flug- und Schiffsverkehr bei."
        },
        {
          "q": "In welchem Jahr wurden Grenzübertritte über den Seeweg und Luftweg für dieses Land im Schengen-Raum teilintegriert („Schengen-Air“)?",
          "o": [
            "2013",
            "2020",
            "2024",
            "2026"
          ],
          "a": 2,
          "tip": "Es geschah im März eines sehr kürzlich vergangenen Jahres.",
          "exp": "Rumänien trat am 31. März 2024 dem Schengen-Raum für Flug- und Schiffsverkehr bei."
        }
      ],
      "3": [
        {
          "q": "Was versteht man unter dem Begriff „EU-Kohäsionspolitik“?",
          "o": [
            "Die gemeinsame Abwehr von Cyberangriffen",
            "Die Verringerung von wirtschaftlichen und sozialen Unterschieden zwischen den Regionen Europas",
            "Die Kontrolle von Passagieren an Binnengrenzen",
            "Die Vereinheitlichung der Schulsysteme"
          ],
          "a": 1,
          "tip": "Kohäsion bedeutet wörtlich „Zusammenhalt“.",
          "exp": "Die Kohäsionspolitik fördert finanzschwächere Regionen gezielt mit EU-Mitteln."
        },
        {
          "q": "Was versteht man unter dem Begriff „EU-Kohäsionspolitik“?",
          "o": [
            "Die gemeinsame Abwehr von Cyberangriffen",
            "Die Verringerung von wirtschaftlichen und sozialen Unterschieden zwischen den Regionen Europas",
            "Die Kontrolle von Passagieren an Binnengrenzen",
            "Die Vereinheitlichung der Schulsysteme"
          ],
          "a": 1,
          "tip": "Kohäsion bedeutet wörtlich „Zusammenhalt“.",
          "exp": "Die Kohäsionspolitik fördert finanzschwächere Regionen gezielt mit EU-Mitteln."
        }
      ]
    },
    "Schweden": {
      "1": [
        {
          "q": "Welches europäische Bürgerrecht erlaubt es Menschen aus allen EU-Ländern, in diesem skandinavischen Land ohne Arbeitsvisum eine Arbeit aufzunehmen?",
          "o": [
            "Das Europäische Asylrecht",
            "Die Arbeitnehmerfreizügigkeit",
            "Die Diplomatenimmunität",
            "Das Niederlassungsprivileg"
          ],
          "a": 1,
          "tip": "Es gehört zu den vier Grundfreiheiten des EU-Binnenmarktes.",
          "exp": "Die Arbeitnehmerfreizügigkeit erlaubt die freie Stellenwahl in der EU."
        },
        {
          "q": "Welches europäische Bürgerrecht erlaubt es Menschen aus allen EU-Ländern, in diesem skandinavischen Land ohne Arbeitsvisum eine Arbeit aufzunehmen?",
          "o": [
            "Das Europäische Asylrecht",
            "Die Arbeitnehmerfreizügigkeit",
            "Die Diplomatenimmunität",
            "Das Niederlassungsprivileg"
          ],
          "a": 1,
          "tip": "Es gehört zu den vier Grundfreiheiten des EU-Binnenmarktes.",
          "exp": "Die Arbeitnehmerfreizügigkeit erlaubt die freie Stellenwahl in der EU."
        }
      ],
      "2": [
        {
          "q": "Obwohl das Land seit 1995 EU-Mitglied ist, hat die Bevölkerung in einer Volksabstimmung 2003 die Einführung welcher Neuerung abgelehnt?",
          "o": [
            "Den Beitritt zum Schengen-Raum",
            "Die Einführung des Euro als Währung",
            "Das EU-Parlamentswahlrecht",
            "Den Beitritt zur EU-Zollunion"
          ],
          "a": 1,
          "tip": "Das Land bezahlt deshalb bis heute mit der Kronen-Währung.",
          "exp": "Schweden behielt nach dem Referendum 2003 die schwedische Krone."
        },
        {
          "q": "Obwohl das Land seit 1995 EU-Mitglied ist, hat die Bevölkerung in einer Volksabstimmung 2003 die Einführung welcher Neuerung abgelehnt?",
          "o": [
            "Den Beitritt zum Schengen-Raum",
            "Die Einführung des Euro als Währung",
            "Das EU-Parlamentswahlrecht",
            "Den Beitritt zur EU-Zollunion"
          ],
          "a": 1,
          "tip": "Das Land bezahlt deshalb bis heute mit der Kronen-Währung.",
          "exp": "Schweden behielt nach dem Referendum 2003 die schwedische Krone."
        }
      ],
      "3": [
        {
          "q": "Welcher Begriff beschreibt das Recht von EU-Bürgern, Einsicht in offizielle Dokumente von EU-Institutionen zu verlangen – ein Prinzip, das traditionell aus diesem Land stammt?",
          "o": [
            "Amtsgeheimnis",
            "Transparenzprinzip",
            "Datenschutz-Grundverordnung",
            "Zensurrecht"
          ],
          "a": 1,
          "tip": "Es sorgt dafür, dass die europäische Politik für Bürger nachvollziehbar ist.",
          "exp": "Schweden führte bereits 1766 das historische Öffentlichkeitsprinzip ein."
        },
        {
          "q": "Welcher Begriff beschreibt das Recht von EU-Bürgern, Einsicht in offizielle Dokumente von EU-Institutionen zu verlangen – ein Prinzip, das traditionell aus diesem Land stammt?",
          "o": [
            "Amtsgeheimnis",
            "Transparenzprinzip",
            "Datenschutz-Grundverordnung",
            "Zensurrecht"
          ],
          "a": 1,
          "tip": "Es sorgt dafür, dass die europäische Politik für Bürger nachvollziehbar ist.",
          "exp": "Schweden führte bereits 1766 das historische Öffentlichkeitsprinzip ein."
        }
      ]
    },
    "Slowakei": {
      "1": [
        {
          "q": "Welche Währung wird in diesem Mitteleuropäischen Land verwendet, das direkt an Österreich grenzt?",
          "o": [
            "Slowakische Krone",
            "Euro",
            "Forint",
            "Złoty"
          ],
          "a": 1,
          "tip": "Das Land führte die Währung im Jahr 2009 ein.",
          "exp": "Die Slowakei führte am 1. Jänner 2009 den Euro ein."
        },
        {
          "q": "Welche Währung wird in diesem Mitteleuropäischen Land verwendet, das direkt an Österreich grenzt?",
          "o": [
            "Slowakische Krone",
            "Euro",
            "Forint",
            "Złoty"
          ],
          "a": 1,
          "tip": "Das Land führte die Währung im Jahr 2009 ein.",
          "exp": "Die Slowakei führte am 1. Jänner 2009 den Euro ein."
        }
      ],
      "2": [
        {
          "q": "Welches Organ der EU übt zusammen mit dem Europäischen Parlament die Gesetzgebung (Legislative) aus?",
          "o": [
            "Der Rat der Europäischen Union",
            "Die Europäische Zentralbank",
            "Der Europäische Gerichtshof",
            "Der Ausschuss der Regionen"
          ],
          "a": 0,
          "tip": "Hier kommen die Fachminister der einzelnen Mitgliedstaaten zusammen.",
          "exp": "Der Rat der Europäischen Union repräsentiert die Regierungen der Mitgliedstaaten."
        },
        {
          "q": "Welches Organ der EU übt zusammen mit dem Europäischen Parlament die Gesetzgebung (Legislative) aus?",
          "o": [
            "Der Rat der Europäischen Union",
            "Die Europäische Zentralbank",
            "Der Europäische Gerichtshof",
            "Der Ausschuss der Regionen"
          ],
          "a": 0,
          "tip": "Hier kommen die Fachminister der einzelnen Mitgliedstaaten zusammen.",
          "exp": "Der Rat der Europäischen Union repräsentiert die Regierungen der Mitgliedstaaten."
        }
      ],
      "3": [
        {
          "q": "Was legt fest, wie viele Sitze jedem Land im Europäischen Parlament zustehen?",
          "o": [
            "Das Prinzip der „degressiven Proportionalität“",
            "Die reine Fläche des Staates",
            "Die Höhe der Einzahlungen in den EU-Haushalt",
            "Das Alter des jeweiligen Staates"
          ],
          "a": 0,
          "tip": "Kleinere Länder bekommen verhältnismäßig mehr Sitze pro Einwohner als große Länder.",
          "exp": "Das Prinzip stellt sicher, dass auch kleine Stimmen Gehör finden."
        },
        {
          "q": "Was legt fest, wie viele Sitze jedem Land im Europäischen Parlament zustehen?",
          "o": [
            "Das Prinzip der „degressiven Proportionalität“",
            "Die reine Fläche des Staates",
            "Die Höhe der Einzahlungen in den EU-Haushalt",
            "Das Alter des jeweiligen Staates"
          ],
          "a": 0,
          "tip": "Kleinere Länder bekommen verhältnismäßig mehr Sitze pro Einwohner als große Länder.",
          "exp": "Das Prinzip stellt sicher, dass auch kleine Stimmen Gehör finden."
        }
      ]
    },
    "Slowenien": {
      "1": [
        {
          "q": "Wie viele Sterne befinden sich auf der offiziellen Flagge der Europäischen Union?",
          "o": [
            "10 Sterne",
            "12 Sterne",
            "27 Sterne",
            "50 Sterne"
          ],
          "a": 1,
          "tip": "Die Anzahl steht symbolisch für Vollkommenheit und Einheit, nicht für die Anzahl der Länder.",
          "exp": "Die 12 Sterne auf blauem Grund sind das Symbol der europäischen Einheit."
        },
        {
          "q": "Wie viele Sterne befinden sich auf der offiziellen Flagge der Europäischen Union?",
          "o": [
            "10 Sterne",
            "12 Sterne",
            "27 Sterne",
            "50 Sterne"
          ],
          "a": 1,
          "tip": "Die Anzahl steht symbolisch für Vollkommenheit und Einheit, nicht für die Anzahl der Länder.",
          "exp": "Die 12 Sterne auf blauem Grund sind das Symbol der europäischen Einheit."
        }
      ],
      "2": [
        {
          "q": "Dieses Nachbarland Österreichs war das erste der 2004 beigetretenen Länder, das welche Voraussetzung erfüllte?",
          "o": [
            "Die Übernahme des Euro bereits im Jahr 2007",
            "Der Austritt aus der EU",
            "Der Bau des EU-Parlaments",
            "Die Abschaffung aller Steuern"
          ],
          "a": 0,
          "tip": "Es trat der europäischen Gemeinschaftswährung sehr schnell bei.",
          "exp": "Slowenien trat am 1. Jänner 2007 der Eurozone bei."
        },
        {
          "q": "Dieses Nachbarland Österreichs war das erste der 2004 beigetretenen Länder, das welche Voraussetzung erfüllte?",
          "o": [
            "Die Übernahme des Euro bereits im Jahr 2007",
            "Der Austritt aus der EU",
            "Der Bau des EU-Parlaments",
            "Die Abschaffung aller Steuern"
          ],
          "a": 0,
          "tip": "Es trat der europäischen Gemeinschaftswährung sehr schnell bei.",
          "exp": "Slowenien trat am 1. Jänner 2007 der Eurozone bei."
        }
      ],
      "3": [
        {
          "q": "Welcher Begriff beschreibt die Fähigkeit von EU-Mitgliedsländern, bei bestimmten Entscheidungen im Rat (z. B. Außenpolitik) Gesetze allein zu blockieren?",
          "o": [
            "Mehrheitsentscheid",
            "Vetorecht",
            "Enthaltsamkeitsklausel",
            "Dringlichkeitsverfahren"
          ],
          "a": 1,
          "tip": "Das lateinische Wort „Veto“ bedeutet „Ich verbiete“.",
          "exp": "Das Einstimmigkeitsprinzip sichert jedem Land ein Vetorecht in Kernbereichen."
        },
        {
          "q": "Welcher Begriff beschreibt die Fähigkeit von EU-Mitgliedsländern, bei bestimmten Entscheidungen im Rat (z. B. Außenpolitik) Gesetze allein zu blockieren?",
          "o": [
            "Mehrheitsentscheid",
            "Vetorecht",
            "Enthaltsamkeitsklausel",
            "Dringlichkeitsverfahren"
          ],
          "a": 1,
          "tip": "Das lateinische Wort „Veto“ bedeutet „Ich verbiete“.",
          "exp": "Das Einstimmigkeitsprinzip sichert jedem Land ein Vetorecht in Kernbereichen."
        }
      ]
    },
    "Spanien": {
      "1": [
        {
          "q": "In welchem Jahrzehnt traten dieser Staat und sein Nachbarland Portugal der Europäischen Gemeinschaft bei?",
          "o": [
            "1970er Jahre",
            "1980er Jahre",
            "1990er Jahre",
            "2000er Jahre"
          ],
          "a": 1,
          "tip": "Der Beitritt erfolgte exakt im Jahr 1986.",
          "exp": "Spanien trat am 1. Jänner 1986 der EG bei."
        },
        {
          "q": "In welchem Jahrzehnt traten dieser Staat und sein Nachbarland Portugal der Europäischen Gemeinschaft bei?",
          "o": [
            "1970er Jahre",
            "1980er Jahre",
            "1990er Jahre",
            "2000er Jahre"
          ],
          "a": 1,
          "tip": "Der Beitritt erfolgte exakt im Jahr 1986.",
          "exp": "Spanien trat am 1. Jänner 1986 der EG bei."
        }
      ],
      "2": [
        {
          "q": "Welcher Hochkommissar bzw. Hohe Vertreter vertritt die EU nach außen in Fragen der gemeinsamen Außen- und Sicherheitspolitik?",
          "o": [
            "Der Hohe Vertreter der EU für Außen- und Sicherheitspolitik",
            "Der NATO-Generalsekretär",
            "Der Präsident des UN-Sicherheitsrates",
            "Der Europäische Bürgerbeauftragte"
          ],
          "a": 0,
          "tip": "Dieser Posten wird oft inoffiziell als „EU-Außenminister“ bezeichnet.",
          "exp": "Der Hohe Vertreter koordiniert die gemeinsame Außenpolitik."
        },
        {
          "q": "Welcher Hochkommissar bzw. Hohe Vertreter vertritt die EU nach außen in Fragen der gemeinsamen Außen- und Sicherheitspolitik?",
          "o": [
            "Der Hohe Vertreter der EU für Außen- und Sicherheitspolitik",
            "Der NATO-Generalsekretär",
            "Der Präsident des UN-Sicherheitsrates",
            "Der Europäische Bürgerbeauftragte"
          ],
          "a": 0,
          "tip": "Dieser Posten wird oft inoffiziell als „EU-Außenminister“ bezeichnet.",
          "exp": "Der Hohe Vertreter koordiniert die gemeinsame Außenpolitik."
        }
      ],
      "3": [
        {
          "q": "Welche Exklaven dieses Landes an der nordafrikanischen Küste bilden eine Außengrenze der Europäischen Union auf dem afrikanischen Kontinent?",
          "o": [
            "Ceuta und Melilla",
            "Gibraltar und Ibiza",
            "Las Palmas und Teneriffa",
            "Mallorca und Menorca"
          ],
          "a": 0,
          "tip": "Es handelt sich um zwei spanische Städte an der Küste Marokkos.",
          "exp": "Ceuta und Melilla sind spanische Hoheitsgebiete auf dem afrikanischen Festland."
        },
        {
          "q": "Welche Exklaven dieses Landes an der nordafrikanischen Küste bilden eine Außengrenze der Europäischen Union auf dem afrikanischen Kontinent?",
          "o": [
            "Ceuta und Melilla",
            "Gibraltar und Ibiza",
            "Las Palmas und Teneriffa",
            "Mallorca und Menorca"
          ],
          "a": 0,
          "tip": "Es handelt sich um zwei spanische Städte an der Küste Marokkos.",
          "exp": "Ceuta und Melilla sind spanische Hoheitsgebiete auf dem afrikanischen Festland."
        }
      ]
    },
    "Tschechien": {
      "1": [
        {
          "q": "Welcher berühmte Staatsmann und Bürgerrechtler war der erste Präsident dieses Landes nach dem Fall des Eisernen Vorhangs und trieb den EU-Beitritt voran?",
          "o": [
            "Václav Havel",
            "Alexander Dubček",
            "Lech Wałęsa",
            "Viktor Orbán"
          ],
          "a": 0,
          "tip": "Er war auch ein bekannter Schriftsteller und Dramatiker.",
          "exp": "Havel war von 1993 bis 2003 Präsident der Tschechischen Republik."
        },
        {
          "q": "Welcher berühmte Staatsmann und Bürgerrechtler war der erste Präsident dieses Landes nach dem Fall des Eisernen Vorhangs und trieb den EU-Beitritt voran?",
          "o": [
            "Václav Havel",
            "Alexander Dubček",
            "Lech Wałęsa",
            "Viktor Orbán"
          ],
          "a": 0,
          "tip": "Er war auch ein bekannter Schriftsteller und Dramatiker.",
          "exp": "Havel war von 1993 bis 2003 Präsident der Tschechischen Republik."
        }
      ],
      "2": [
        {
          "q": "Welche offizielle Währung nutzt dieses mitteleuropäische Land weiterhin, obwohl es Mitglied der EU ist?",
          "o": [
            "Tschechische Krone",
            "Euro",
            "Dinar",
            "Lei"
          ],
          "a": 0,
          "tip": "Die Währung trägt die Bezeichnung „Krone“ (Koruň).",
          "exp": "Tschechien bezahlt weiterhin mit der tschechischen Krone."
        },
        {
          "q": "Welche offizielle Währung nutzt dieses mitteleuropäische Land weiterhin, obwohl es Mitglied der EU ist?",
          "o": [
            "Tschechische Krone",
            "Euro",
            "Dinar",
            "Lei"
          ],
          "a": 0,
          "tip": "Die Währung trägt die Bezeichnung „Krone“ (Koruň).",
          "exp": "Tschechien bezahlt weiterhin mit der tschechischen Krone."
        }
      ],
      "3": [
        {
          "q": "Welches Gesetzgebungsverfahren ist das Standardverfahren in der EU, bei dem das Europäische Parlament und der Rat gleichberechtigt entscheiden?",
          "o": [
            "Zustimmungsverfahren",
            "Ordentliches Gesetzgebungsverfahren",
            "Anhörungsverfahren",
            "Dringlichkeitsanordnung"
          ],
          "a": 1,
          "tip": "Das Wort drückt aus, dass dies der normale und „ordentliche“ Weg ist.",
          "exp": "Das ordentliche Gesetzgebungsverfahren sichert die gleichberechtigte Mitbestimmung."
        },
        {
          "q": "Welches Gesetzgebungsverfahren ist das Standardverfahren in der EU, bei dem das Europäische Parlament und der Rat gleichberechtigt entscheiden?",
          "o": [
            "Zustimmungsverfahren",
            "Ordentliches Gesetzgebungsverfahren",
            "Anhörungsverfahren",
            "Dringlichkeitsanordnung"
          ],
          "a": 1,
          "tip": "Das Wort drückt aus, dass dies der normale und „ordentliche“ Weg ist.",
          "exp": "Das ordentliche Gesetzgebungsverfahren sichert die gleichberechtigte Mitbestimmung."
        }
      ]
    },
    "Ungarn": {
      "1": [
        {
          "q": "Was passiert bei den Europawahlen, die alle fünf Jahre in allen Mitgliedstaaten stattfinden?",
          "o": [
            "Die Bürger wählen die Abgeordneten des Europäischen Parlaments.",
            "Die Bürger wählen den Präsidenten der USA.",
            "Die Bürger bestimmen die Richter des EuGH.",
            "Die Bürger wählen die Bürgermeister von Brüssel."
          ],
          "a": 0,
          "tip": "Es ist die einzige Direktwahl auf europäischer Ebene.",
          "exp": "Die Abgeordneten des EU-Parlaments werden direkt von den Bürgern gewählt."
        },
        {
          "q": "Was passiert bei den Europawahlen, die alle fünf Jahre in allen Mitgliedstaaten stattfinden?",
          "o": [
            "Die Bürger wählen die Abgeordneten des Europäischen Parlaments.",
            "Die Bürger wählen den Präsidenten der USA.",
            "Die Bürger bestimmen die Richter des EuGH.",
            "Die Bürger wählen die Bürgermeister von Brüssel."
          ],
          "a": 0,
          "tip": "Es ist die einzige Direktwahl auf europäischer Ebene.",
          "exp": "Die Abgeordneten des EU-Parlaments werden direkt von den Bürgern gewählt."
        }
      ],
      "2": [
        {
          "q": "Welcher Artikel des EU-Vertrags (Vertrag über die Europäische Union) regelt das Verfahren, wenn einem Land wegen Verletzung von Grundwerten wie Rechtsstaatlichkeit Stimmrechte entzogen werden können?",
          "o": [
            "Artikel 7",
            "Artikel 50",
            "Artikel 13",
            "Artikel 100"
          ],
          "a": 0,
          "tip": "Es ist eine einstellige, sehr bekannte Artikelnummer.",
          "exp": "Artikel 7 des EU-Vertrags sieht Sanktionen bei Grundwerteverletzungen vor."
        },
        {
          "q": "Welcher Artikel des EU-Vertrags (Vertrag über die Europäische Union) regelt das Verfahren, wenn einem Land wegen Verletzung von Grundwerten wie Rechtsstaatlichkeit Stimmrechte entzogen werden können?",
          "o": [
            "Artikel 7",
            "Artikel 50",
            "Artikel 13",
            "Artikel 100"
          ],
          "a": 0,
          "tip": "Es ist eine einstellige, sehr bekannte Artikelnummer.",
          "exp": "Artikel 7 des EU-Vertrags sieht Sanktionen bei Grundwerteverletzungen vor."
        }
      ],
      "3": [
        {
          "q": "Welche nationale Währung nutzt der Staat im Karpatenbecken, der 2004 der EU beitrat?",
          "o": [
            "Złoty",
            "Forint",
            "Lei",
            "Lev"
          ],
          "a": 1,
          "tip": "Die Abkürzung dieser Währung lautet HUF.",
          "exp": "Ungarn nutzt weiterhin den ungarischen Forint als Zahlungsmittel."
        },
        {
          "q": "Welche nationale Währung nutzt der Staat im Karpatenbecken, der 2004 der EU beitrat?",
          "o": [
            "Złoty",
            "Forint",
            "Lei",
            "Lev"
          ],
          "a": 1,
          "tip": "Die Abkürzung dieser Währung lautet HUF.",
          "exp": "Ungarn nutzt weiterhin den ungarischen Forint als Zahlungsmittel."
        }
      ]
    },
    "Zypern": {
      "1": [
        {
          "q": "Welches besondere politische Problem betrifft dieses Mitgliedsland seit 1974 und erschwert die EU-Integration der gesamten Insel?",
          "o": [
            "Die Teilung der Insel in einen südlichen und einen nördlichen Teil",
            "Das Fehlen einer Verfassung",
            "Die Zugehörigkeit zu Südamerika",
            "Der Mangel an eigenen Häfen"
          ],
          "a": 0,
          "tip": "Der Norden der Insel wird nur von der Türkei als eigener Staat anerkannt.",
          "exp": "Zypern ist de facto seit der türkischen Intervention 1974 geteilt."
        },
        {
          "q": "Welches besondere politische Problem betrifft dieses Mitgliedsland seit 1974 und erschwert die EU-Integration der gesamten Insel?",
          "o": [
            "Die Teilung der Insel in einen südlichen und einen nördlichen Teil",
            "Das Fehlen einer Verfassung",
            "Die Zugehörigkeit zu Südamerika",
            "Der Mangel an eigenen Häfen"
          ],
          "a": 0,
          "tip": "Der Norden der Insel wird nur von der Türkei als eigener Staat anerkannt.",
          "exp": "Zypern ist de facto seit der türkischen Intervention 1974 geteilt."
        }
      ],
      "2": [
        {
          "q": "Wann trat dieses Inselstaat-Mitglied der Eurozone bei und wendete damit den Euro als Landeswährung an?",
          "o": [
            "2004",
            "2008",
            "2015",
            "2020"
          ],
          "a": 1,
          "tip": "Es geschah exakt vier Jahre nach dem EU-Beitritt (zusammen mit Malta).",
          "exp": "Zypern führte am 1. Jänner 2008 den Euro ein."
        },
        {
          "q": "Wann trat dieses Inselstaat-Mitglied der Eurozone bei und wendete damit den Euro als Landeswährung an?",
          "o": [
            "2004",
            "2008",
            "2015",
            "2020"
          ],
          "a": 1,
          "tip": "Es geschah exakt vier Jahre nach dem EU-Beitritt (zusammen mit Malta).",
          "exp": "Zypern führte am 1. Jänner 2008 den Euro ein."
        }
      ],
      "3": [
        {
          "q": "Das EU-Recht ist im nördlichen Teil der Insel derzeit ausgesetzt. Wie nennt man die Trennlinie zwischen beiden Teilen, die von der UNO überwacht wird?",
          "o": [
            "Eiserner Vorhang",
            "Grüne Linie",
            "Maginot-Linie",
            "Schengen-Grenze"
          ],
          "a": 1,
          "tip": "Die Linie ist nach einer Farbe benannt.",
          "exp": "Die Grüne Linie teilt die Insel Zypern und die Hauptstadt Nikosia."
        },
        {
          "q": "Das EU-Recht ist im nördlichen Teil der Insel derzeit ausgesetzt. Wie nennt man die Trennlinie zwischen beiden Teilen, die von der UNO überwacht wird?",
          "o": [
            "Eiserner Vorhang",
            "Grüne Linie",
            "Maginot-Linie",
            "Schengen-Grenze"
          ],
          "a": 1,
          "tip": "Die Linie ist nach einer Farbe benannt.",
          "exp": "Die Grüne Linie teilt die Insel Zypern und die Hauptstadt Nikosia."
        }
      ]
    }
  },
  "4": {
    "Belgien": {
      "1": [
        {
          "q": "Welche weltberühmte Süßspeise und Beilage, die fälschlicherweise oft Amerika zugeschrieben wird, ist das kulinarische Aushängeschild des Landes?",
          "o": [
            "Churros",
            "Pommes Frites",
            "Donuts",
            "Croissants"
          ],
          "a": 1,
          "tip": "Sie werden traditionell zweifach frittiert und oft mit Mayonnaise in der Tüte serviert.",
          "exp": "Pommes Frites stammen historisch aus Belgien, wo sie Nationalspeise sind."
        },
        {
          "q": "Welche weltberühmte Süßspeise und Beilage, die fälschlicherweise oft Amerika zugeschrieben wird, ist das kulinarische Aushängeschild des Landes?",
          "o": [
            "Churros",
            "Pommes Frites",
            "Donuts",
            "Croissants"
          ],
          "a": 1,
          "tip": "Sie werden traditionell zweifach frittiert und oft mit Mayonnaise in der Tüte serviert.",
          "exp": "Pommes Frites stammen historisch aus Belgien, wo sie Nationalspeise sind."
        }
      ],
      "2": [
        {
          "q": "Wie heißen die weltberühmten Comic-Figuren (kleine blaue Wesen mit weißen Mützen), die von einem Künstler aus diesem Land erfunden wurden?",
          "o": [
            "Die Gallier",
            "Die Schlümpfe",
            "Die Minions",
            "Die Moomins"
          ],
          "a": 1,
          "tip": "Ihr Erfinder nannte sich „Peyo“.",
          "exp": "Die Schlümpfe wurden 1958 vom belgischen Zeichner Peyo kreiert."
        },
        {
          "q": "Wie heißen die weltberühmten Comic-Figuren (kleine blaue Wesen mit weißen Mützen), die von einem Künstler aus diesem Land erfunden wurden?",
          "o": [
            "Die Gallier",
            "Die Schlümpfe",
            "Die Minions",
            "Die Moomins"
          ],
          "a": 1,
          "tip": "Ihr Erfinder nannte sich „Peyo“.",
          "exp": "Die Schlümpfe wurden 1958 vom belgischen Zeichner Peyo kreiert."
        }
      ],
      "3": [
        {
          "q": "Welches berühmte Wahrzeichen in der Hauptstadt wurde zur Weltausstellung 1958 erbaut und stellt ein vergrößertes Eisen-Kristallmodell dar?",
          "o": [
            "Der Fernsehturm",
            "Das Atomium",
            "Das Hundertwasserhaus",
            "Die Pyramide"
          ],
          "a": 1,
          "tip": "Das Bauwerk besteht aus neun großen glänzenden Kugeln.",
          "exp": "Das Atomium ist 102 Meter hoch und stellt eine 165-milliardenfache Kristallgitter-Vergrößerung dar."
        },
        {
          "q": "Welches berühmte Wahrzeichen in der Hauptstadt wurde zur Weltausstellung 1958 erbaut und stellt ein vergrößertes Eisen-Kristallmodell dar?",
          "o": [
            "Der Fernsehturm",
            "Das Atomium",
            "Das Hundertwasserhaus",
            "Die Pyramide"
          ],
          "a": 1,
          "tip": "Das Bauwerk besteht aus neun großen glänzenden Kugeln.",
          "exp": "Das Atomium ist 102 Meter hoch und stellt eine 165-milliardenfache Kristallgitter-Vergrößerung dar."
        }
      ]
    },
    "Bulgarien": {
      "1": [
        {
          "q": "Aus welchem Produkt ist dieses Land einer der weltweiten Hauptproduzenten, das besonders in der Kosmetik und Parfümherstellung genutzt wird?",
          "o": [
            "Lavendelöl",
            "Rosenöl",
            "Olivenöl",
            "Arganöl"
          ],
          "a": 1,
          "tip": "Das berühmte „Tal der Blüten“ ist nach dieser roten oder rosa Blume benannt.",
          "exp": "Bulgarien liefert einen Großteil des weltweiten Bedarfs an kostbarem Rosenöl."
        },
        {
          "q": "Aus welchem Produkt ist dieses Land einer der weltweiten Hauptproduzenten, das besonders in der Kosmetik und Parfümherstellung genutzt wird?",
          "o": [
            "Lavendelöl",
            "Rosenöl",
            "Olivenöl",
            "Arganöl"
          ],
          "a": 1,
          "tip": "Das berühmte „Tal der Blüten“ ist nach dieser roten oder rosa Blume benannt.",
          "exp": "Bulgarien liefert einen Großteil des weltweiten Bedarfs an kostbarem Rosenöl."
        }
      ],
      "2": [
        {
          "q": "Welche Tradition wird am 1. März gefeiert, bei der man sich rot-weiße Glücksbringer aus Wolle („Marteniza“) ansteckt?",
          "o": [
            "Der Frühlingsanfang",
            "Das Erntedankfest",
            "Die Sonnenwende",
            "Das Neujahrsfest"
          ],
          "a": 0,
          "tip": "Das Fest begrüßt das Erwachen der Natur nach dem Winter.",
          "exp": "Die Marteniza symbolisiert Gesundheit und das Nahen des Frühlings."
        },
        {
          "q": "Welche Tradition wird am 1. März gefeiert, bei der man sich rot-weiße Glücksbringer aus Wolle („Marteniza“) ansteckt?",
          "o": [
            "Der Frühlingsanfang",
            "Das Erntedankfest",
            "Die Sonnenwende",
            "Das Neujahrsfest"
          ],
          "a": 0,
          "tip": "Das Fest begrüßt das Erwachen der Natur nach dem Winter.",
          "exp": "Die Marteniza symbolisiert Gesundheit und das Nahen des Frühlings."
        }
      ],
      "3": [
        {
          "q": "Wie heißen die traditionellen Maskentänzer, die mit riesigen Holzmasken und schallenden Glocken böse Geister vertreiben sollen?",
          "o": [
            "Kukeri",
            "Krampusse",
            "Perchten",
            "Glöckler"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit dem Buchstaben „K“.",
          "exp": "Das Kukeri-Ritual findet im Winter statt und soll Fruchtbarkeit bringen."
        },
        {
          "q": "Wie heißen die traditionellen Maskentänzer, die mit riesigen Holzmasken und schallenden Glocken böse Geister vertreiben sollen?",
          "o": [
            "Kukeri",
            "Krampusse",
            "Perchten",
            "Glöckler"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit dem Buchstaben „K“.",
          "exp": "Das Kukeri-Ritual findet im Winter statt und soll Fruchtbarkeit bringen."
        }
      ]
    },
    "Dänemark": {
      "1": [
        {
          "q": "Welches weltbekannte Spielzeug aus bunten Kunststoff-Bausteinen wurde in diesem skandinavischen Land erfunden?",
          "o": [
            "Playmobil",
            "Lego",
            "Fischertechnik",
            "Märklin"
          ],
          "a": 1,
          "tip": "Der Name leitet sich vom dänischen „leg godt“ (spiel gut) ab.",
          "exp": "Lego wurde in Billund erfunden und ist der größte Spielzeughersteller der Welt."
        },
        {
          "q": "Welches weltbekannte Spielzeug aus bunten Kunststoff-Bausteinen wurde in diesem skandinavischen Land erfunden?",
          "o": [
            "Playmobil",
            "Lego",
            "Fischertechnik",
            "Märklin"
          ],
          "a": 1,
          "tip": "Der Name leitet sich vom dänischen „leg godt“ (spiel gut) ab.",
          "exp": "Lego wurde in Billund erfunden und ist der größte Spielzeughersteller der Welt."
        }
      ],
      "2": [
        {
          "q": "Welcher berühmte Märchenerzähler erfand Figuren wie „Die kleine Meerjungfrau“ und „Das hässliche Entlein“?",
          "o": [
            "Hans Christian Andersen",
            "Gebrüder Grimm",
            "Astrid Lindgren",
            "Roald Dahl"
          ],
          "a": 0,
          "tip": "Seine Initialen sind H. C. A.",
          "exp": "Andersen ist Dänemarks bekanntester Schriftsteller und Dichter."
        },
        {
          "q": "Welcher berühmte Märchenerzähler erfand Figuren wie „Die kleine Meerjungfrau“ und „Das hässliche Entlein“?",
          "o": [
            "Hans Christian Andersen",
            "Gebrüder Grimm",
            "Astrid Lindgren",
            "Roald Dahl"
          ],
          "a": 0,
          "tip": "Seine Initialen sind H. C. A.",
          "exp": "Andersen ist Dänemarks bekanntester Schriftsteller und Dichter."
        }
      ],
      "3": [
        {
          "q": "Welches dänische Lebensgefühl beschreibt eine gemütliche, herzliche Atmosphäre und das Genießen der guten Dinge im Leben?",
          "o": [
            "Lagom",
            "Hygge",
            "Sisu",
            "Dolce Vita"
          ],
          "a": 1,
          "tip": "Das Wort beginnt mit „Hyg-“.",
          "exp": "Hygge steht für dänische Behaglichkeit, Wärme und Gemeinschaft."
        },
        {
          "q": "Welches dänische Lebensgefühl beschreibt eine gemütliche, herzliche Atmosphäre und das Genießen der guten Dinge im Leben?",
          "o": [
            "Lagom",
            "Hygge",
            "Sisu",
            "Dolce Vita"
          ],
          "a": 1,
          "tip": "Das Wort beginnt mit „Hyg-“.",
          "exp": "Hygge steht für dänische Behaglichkeit, Wärme und Gemeinschaft."
        }
      ]
    },
    "Deutschland": {
      "1": [
        {
          "q": "Welches weltweit größte Volksfest zieht jedes Jahr Millionen Menschen in die bayrische Landeshauptstadt?",
          "o": [
            "Der Wiener Prater",
            "Das Oktoberfest",
            "Der Kölner Karneval",
            "Die Cannstatter Wasen"
          ],
          "a": 1,
          "tip": "Es wird trotz des Namens größtenteils im September gefeiert.",
          "exp": "Das Oktoberfest in München findet seit 1810 auf der Theresienwiese statt."
        },
        {
          "q": "Welches weltweit größte Volksfest zieht jedes Jahr Millionen Menschen in die bayrische Landeshauptstadt?",
          "o": [
            "Der Wiener Prater",
            "Das Oktoberfest",
            "Der Kölner Karneval",
            "Die Cannstatter Wasen"
          ],
          "a": 1,
          "tip": "Es wird trotz des Namens größtenteils im September gefeiert.",
          "exp": "Das Oktoberfest in München findet seit 1810 auf der Theresienwiese statt."
        }
      ],
      "2": [
        {
          "q": "Welcher weltberühmte Komponist der Klassik schrieb die Melodie der Europahymne („Ode an die Freude“)?",
          "o": [
            "Wolfgang Amadeus Mozart",
            "Ludwig van Beethoven",
            "Johann Sebastian Bach",
            "Richard Wagner"
          ],
          "a": 1,
          "tip": "Er wurde in Bonn geboren und vollendete seine 9. Sinfonie, als er bereits taub war.",
          "exp": "Beethovens Vertonung von Schillers Ode wurde 1985 zur offiziellen EU-Hymne."
        },
        {
          "q": "Welcher weltberühmte Komponist der Klassik schrieb die Melodie der Europahymne („Ode an die Freude“)?",
          "o": [
            "Wolfgang Amadeus Mozart",
            "Ludwig van Beethoven",
            "Johann Sebastian Bach",
            "Richard Wagner"
          ],
          "a": 1,
          "tip": "Er wurde in Bonn geboren und vollendete seine 9. Sinfonie, als er bereits taub war.",
          "exp": "Beethovens Vertonung von Schillers Ode wurde 1985 zur offiziellen EU-Hymne."
        }
      ],
      "3": [
        {
          "q": "Welches Symbol auf der Nationalflagge und dem Bundeswappen geht historisch auf das Heilige Römische Reich zurück?",
          "o": [
            "Der Löwe",
            "Der Bundesadler",
            "Der Bär",
            "Der Stier"
          ],
          "a": 1,
          "tip": "Der greifvogelartige Vogel ziert auch die deutschen Euro-Münzen.",
          "exp": "Der Adler ist eines der ältesten staatlichen Symbole der Welt."
        },
        {
          "q": "Welches Symbol auf der Nationalflagge und dem Bundeswappen geht historisch auf das Heilige Römische Reich zurück?",
          "o": [
            "Der Löwe",
            "Der Bundesadler",
            "Der Bär",
            "Der Stier"
          ],
          "a": 1,
          "tip": "Der greifvogelartige Vogel ziert auch die deutschen Euro-Münzen.",
          "exp": "Der Adler ist eines der ältesten staatlichen Symbole der Welt."
        }
      ]
    },
    "Estland": {
      "1": [
        {
          "q": "Welches musikalische Großereignis findet alle fünf Jahre statt und spielte eine riesige Rolle bei der friedlichen Unabhängigkeit des Landes („Singende Revolution“)?",
          "o": [
            "Das Sängerfest",
            "Der Eurovision Song Contest",
            "Das Opernfestival",
            "Das Rock-am-Ring-Festival"
          ],
          "a": 0,
          "tip": "Tausende Chöre singen dabei gemeinsam auf einer riesigen Freilichtbühne.",
          "exp": "Das Sängerfest Laulupidu ist immaterielles UNESCO-Weltkulturerbe."
        },
        {
          "q": "Welches musikalische Großereignis findet alle fünf Jahre statt und spielte eine riesige Rolle bei der friedlichen Unabhängigkeit des Landes („Singende Revolution“)?",
          "o": [
            "Das Sängerfest",
            "Der Eurovision Song Contest",
            "Das Opernfestival",
            "Das Rock-am-Ring-Festival"
          ],
          "a": 0,
          "tip": "Tausende Chöre singen dabei gemeinsam auf einer riesigen Freilichtbühne.",
          "exp": "Das Sängerfest Laulupidu ist immaterielles UNESCO-Weltkulturerbe."
        }
      ],
      "2": [
        {
          "q": "Welcher Fabel- oder Waldkreatur wird in der nationalen Folklore besonders viel Respekt entgegengebracht?",
          "o": [
            "Dem Bären",
            "Dem Wolf",
            "Dem Elch",
            "Dem Luchs"
          ],
          "a": 1,
          "tip": "Es ist das grösste Raubtier europäischer Wälder und gilt als offizielles Nationaltier.",
          "exp": "Der Wolf ist seit 2018 das offizielle Nationaltier Estlands."
        },
        {
          "q": "Welcher Fabel- oder Waldkreatur wird in der nationalen Folklore besonders viel Respekt entgegengebracht?",
          "o": [
            "Dem Bären",
            "Dem Wolf",
            "Dem Elch",
            "Dem Luchs"
          ],
          "a": 1,
          "tip": "Es ist das grösste Raubtier europäischer Wälder und gilt als offizielles Nationaltier.",
          "exp": "Der Wolf ist seit 2018 das offizielle Nationaltier Estlands."
        }
      ],
      "3": [
        {
          "q": "Was bedeuten die drei Farben Schwarz, Blau und Weiß auf der Nationalflagge nach traditioneller Deutung?",
          "o": [
            "Kohle, Meer und Wolken",
            "Erde/Vergangenheit, Himmel und Schnee/Licht",
            "Nacht, Seen und Freiheit",
            "Wald, Ostsee und Frieden"
          ],
          "a": 1,
          "tip": "Blau steht für den klaren Himmel über dem Land.",
          "exp": "Blau symbolisiert Vertreue und Himmel, Schwarz die Heimaterde, Weiß die Reinheit."
        },
        {
          "q": "Was bedeuten die drei Farben Schwarz, Blau und Weiß auf der Nationalflagge nach traditioneller Deutung?",
          "o": [
            "Kohle, Meer und Wolken",
            "Erde/Vergangenheit, Himmel und Schnee/Licht",
            "Nacht, Seen und Freiheit",
            "Wald, Ostsee und Frieden"
          ],
          "a": 1,
          "tip": "Blau steht für den klaren Himmel über dem Land.",
          "exp": "Blau symbolisiert Vertreue und Himmel, Schwarz die Heimaterde, Weiß die Reinheit."
        }
      ]
    },
    "Finnland": {
      "1": [
        {
          "q": "Welches Schwitzbad ist der wichtigste Bestandteil der Kultur dieses Landes und in fast jedem Haushalt zu finden?",
          "o": [
            "Das Hammam",
            "Die Sauna",
            "Das Bania",
            "Das Dampfbad"
          ],
          "a": 1,
          "tip": "Es gibt im Land mehr dieser Schwitzkabinen als Autos.",
          "exp": "Die finnische Saunakultur gehört zum immateriellen Kulturerbe der Menschheit."
        },
        {
          "q": "Welches Schwitzbad ist der wichtigste Bestandteil der Kultur dieses Landes und in fast jedem Haushalt zu finden?",
          "o": [
            "Das Hammam",
            "Die Sauna",
            "Das Bania",
            "Das Dampfbad"
          ],
          "a": 1,
          "tip": "Es gibt im Land mehr dieser Schwitzkabinen als Autos.",
          "exp": "Die finnische Saunakultur gehört zum immateriellen Kulturerbe der Menschheit."
        }
      ],
      "2": [
        {
          "q": "Welches berühmte Buch- und Comicuniversum über weiße, nielfpferdähnliche Trollwesen erfand die Künstlerin Tove Jansson?",
          "o": [
            "Die Schlümpfe",
            "Die Moomins",
            "Die Barbapapas",
            "Die Fraggles"
          ],
          "a": 1,
          "tip": "Das Tal dieser Wesen heißt „Mumingrad“ bzw. „Mumintal“.",
          "exp": "Die Mumins sind weltweit beliebte finnische Kultfiguren."
        },
        {
          "q": "Welches berühmte Buch- und Comicuniversum über weiße, nielfpferdähnliche Trollwesen erfand die Künstlerin Tove Jansson?",
          "o": [
            "Die Schlümpfe",
            "Die Moomins",
            "Die Barbapapas",
            "Die Fraggles"
          ],
          "a": 1,
          "tip": "Das Tal dieser Wesen heißt „Mumingrad“ bzw. „Mumintal“.",
          "exp": "Die Mumins sind weltweit beliebte finnische Kultfiguren."
        }
      ],
      "3": [
        {
          "q": "Welches nationale Epos stellt die legendäre Mythensammlung des Landes dar, auf der auch viele Fantasy-Werke (wie Der Herr der Ringe) aufbauen?",
          "o": [
            "Nibelungenlied",
            "Kalevala",
            "Edda",
            "Beowulf"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Buchstaben „K“.",
          "exp": "Das Kalevala-Epos wurde im 19. Jahrhundert von Elias Lönnrot zusammengestellt."
        },
        {
          "q": "Welches nationale Epos stellt die legendäre Mythensammlung des Landes dar, auf der auch viele Fantasy-Werke (wie Der Herr der Ringe) aufbauen?",
          "o": [
            "Nibelungenlied",
            "Kalevala",
            "Edda",
            "Beowulf"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Buchstaben „K“.",
          "exp": "Das Kalevala-Epos wurde im 19. Jahrhundert von Elias Lönnrot zusammengestellt."
        }
      ]
    },
    "Frankreich": {
      "1": [
        {
          "q": "Welcher Nationalfeiertag am 14. Juli erinnert an den Sturm auf eine berühmte Pariser Festung im Jahr 1789?",
          "o": [
            "Der Tag der Arbeit",
            "Der Bastille-Tag",
            "Der Tag des Sieges",
            "Der Europagut-Tag"
          ],
          "a": 1,
          "tip": "Es war der Beginn der Französischen Revolution.",
          "exp": "Der Sturm auf die Bastille am 14. Juli 1789 markiert den Beginn der Revolution."
        },
        {
          "q": "Welcher Nationalfeiertag am 14. Juli erinnert an den Sturm auf eine berühmte Pariser Festung im Jahr 1789?",
          "o": [
            "Der Tag der Arbeit",
            "Der Bastille-Tag",
            "Der Tag des Sieges",
            "Der Europagut-Tag"
          ],
          "a": 1,
          "tip": "Es war der Beginn der Französischen Revolution.",
          "exp": "Der Sturm auf die Bastille am 14. Juli 1789 markiert den Beginn der Revolution."
        }
      ],
      "2": [
        {
          "q": "Welches lange, dünne Weißbrot gehört als UNESCO-Weltkulturerbe fest zur täglichen Esskultur des Landes?",
          "o": [
            "Ciabatta",
            "Baguette",
            "Pumpernickel",
            "Brioche"
          ],
          "a": 1,
          "tip": "Übersetzt bedeutet das Wort so viel wie „Stäbchen“ oder „Stock“.",
          "exp": "Das Baguette ist weltweit das Erkennungsmerkmal französischer Bäcker."
        },
        {
          "q": "Welches lange, dünne Weißbrot gehört als UNESCO-Weltkulturerbe fest zur täglichen Esskultur des Landes?",
          "o": [
            "Ciabatta",
            "Baguette",
            "Pumpernickel",
            "Brioche"
          ],
          "a": 1,
          "tip": "Übersetzt bedeutet das Wort so viel wie „Stäbchen“ oder „Stock“.",
          "exp": "Das Baguette ist weltweit das Erkennungsmerkmal französischer Bäcker."
        }
      ],
      "3": [
        {
          "q": "Welche Frauengestalt mit der phrygischen Mütze gilt als Nationalfigur und Symbol für Freiheit und die Republik?",
          "o": [
            "Britannia",
            "Marianne",
            "Helvetia",
            "Columbia"
          ],
          "a": 1,
          "tip": "Ihr Bildnis hängt in allen Rathäusern und ziert die Cent-Münzen des Landes.",
          "exp": "Marianne verkörpert die französischen Werte Liberté, Égalité, Fraternité."
        },
        {
          "q": "Welche Frauengestalt mit der phrygischen Mütze gilt als Nationalfigur und Symbol für Freiheit und die Republik?",
          "o": [
            "Britannia",
            "Marianne",
            "Helvetia",
            "Columbia"
          ],
          "a": 1,
          "tip": "Ihr Bildnis hängt in allen Rathäusern und ziert die Cent-Münzen des Landes.",
          "exp": "Marianne verkörpert die französischen Werte Liberté, Égalité, Fraternité."
        }
      ]
    },
    "Griechenland": {
      "1": [
        {
          "q": "Welcher traditionelle Gruppentanz mit ansteigendem Tempo wurde durch den Film „Zorba“ weltweit berühmt?",
          "o": [
            "Tango",
            "Sirtaki",
            "Flamenco",
            "Walzer"
          ],
          "a": 1,
          "tip": "Die Tänzer legen die Arme auf die Schultern ihrer Nachbarn.",
          "exp": "Der Sirtaki wurde 1964 speziell für den Film 'Alexis Sorbas' kreiert."
        },
        {
          "q": "Welcher traditionelle Gruppentanz mit ansteigendem Tempo wurde durch den Film „Zorba“ weltweit berühmt?",
          "o": [
            "Tango",
            "Sirtaki",
            "Flamenco",
            "Walzer"
          ],
          "a": 1,
          "tip": "Die Tänzer legen die Arme auf die Schultern ihrer Nachbarn.",
          "exp": "Der Sirtaki wurde 1964 speziell für den Film 'Alexis Sorbas' kreiert."
        }
      ],
      "2": [
        {
          "q": "Welches blaue Schutzsymbol gegen den „bösen Blick“ sieht man in diesem Land an fast jeder Haustür und als Souvenir?",
          "o": [
            "Das Nazar-Auge",
            "Das Hamsa-Handzeichen",
            "Das Kleeblatt",
            "Das Hufeisen"
          ],
          "a": 0,
          "tip": "Es besteht aus konzentrischen Kreisen in Dunkelblau, Hellblau, Weiß und Schwarz.",
          "exp": "Das Nazar-Auge (griechisch 'Mati') soll Unglück abwenden."
        },
        {
          "q": "Welches blaue Schutzsymbol gegen den „bösen Blick“ sieht man in diesem Land an fast jeder Haustür und als Souvenir?",
          "o": [
            "Das Nazar-Auge",
            "Das Hamsa-Handzeichen",
            "Das Kleeblatt",
            "Das Hufeisen"
          ],
          "a": 0,
          "tip": "Es besteht aus konzentrischen Kreisen in Dunkelblau, Hellblau, Weiß und Schwarz.",
          "exp": "Das Nazar-Auge (griechisch 'Mati') soll Unglück abwenden."
        }
      ],
      "3": [
        {
          "q": "Welcher weiße Salzlakenkäse aus Schaf- und Ziegenmilch ist herkunftsgeschützt und die Hauptzutat des Bauernsalats?",
          "o": [
            "Mozzarella",
            "Feta",
            "Halloumi",
            "Gouda"
          ],
          "a": 1,
          "tip": "Der Name hat nur vier Buchstaben.",
          "exp": "Echter Feta darf seit 2002 nur in Griechenland hergestellt werden."
        },
        {
          "q": "Welcher weiße Salzlakenkäse aus Schaf- und Ziegenmilch ist herkunftsgeschützt und die Hauptzutat des Bauernsalats?",
          "o": [
            "Mozzarella",
            "Feta",
            "Halloumi",
            "Gouda"
          ],
          "a": 1,
          "tip": "Der Name hat nur vier Buchstaben.",
          "exp": "Echter Feta darf seit 2002 nur in Griechenland hergestellt werden."
        }
      ]
    },
    "Irland": {
      "1": [
        {
          "q": "Welcher Nationalfeiertag wird am 17. März weltweit mit grüner Kleidung und Paraden gefeiert?",
          "o": [
            "St. Patrick’s Day",
            "Halloween",
            "Bloomsday",
            "Thanksgiving"
          ],
          "a": 0,
          "tip": "Der heilige Schutzpatron soll laut der Sage die Schlangen von der Insel vertrieben haben.",
          "exp": "Der St. Patrick's Day ehrt den irischen Bischof Patrick."
        },
        {
          "q": "Welcher Nationalfeiertag wird am 17. März weltweit mit grüner Kleidung und Paraden gefeiert?",
          "o": [
            "St. Patrick’s Day",
            "Halloween",
            "Bloomsday",
            "Thanksgiving"
          ],
          "a": 0,
          "tip": "Der heilige Schutzpatron soll laut der Sage die Schlangen von der Insel vertrieben haben.",
          "exp": "Der St. Patrick's Day ehrt den irischen Bischof Patrick."
        }
      ],
      "2": [
        {
          "q": "Welches dreiblättrige Pflanzensymbol nutzt der Schutzheilige laut Legende, um die Heilige Dreifaltigkeit zu erklären?",
          "o": [
            "Die Rose",
            "Der Shamrock",
            "Die Distel",
            "Der Farn"
          ],
          "a": 1,
          "tip": "Es ist das grüne Erkennungszeichen des Landes.",
          "exp": "Der Shamrock ist das inoffizielle Nationalsymbol Irlands."
        },
        {
          "q": "Welches dreiblättrige Pflanzensymbol nutzt der Schutzheilige laut Legende, um die Heilige Dreifaltigkeit zu erklären?",
          "o": [
            "Die Rose",
            "Der Shamrock",
            "Die Distel",
            "Der Farn"
          ],
          "a": 1,
          "tip": "Es ist das grüne Erkennungszeichen des Landes.",
          "exp": "Der Shamrock ist das inoffizielle Nationalsymbol Irlands."
        }
      ],
      "3": [
        {
          "q": "Welches Musikinstrument ziert als offizielles Staatswappen die Euro-Münzen und Reisepässe des Landes?",
          "o": [
            "Der Dudelsack",
            "Die keltische Harfe",
            "Die Geige",
            "Die Flöte"
          ],
          "a": 1,
          "tip": "Es ist ein sehr altes Zupfinstrument mit Saiten.",
          "exp": "Die Harfe ist das offizielle Wappensymbol Irlands."
        },
        {
          "q": "Welches Musikinstrument ziert als offizielles Staatswappen die Euro-Münzen und Reisepässe des Landes?",
          "o": [
            "Der Dudelsack",
            "Die keltische Harfe",
            "Die Geige",
            "Die Flöte"
          ],
          "a": 1,
          "tip": "Es ist ein sehr altes Zupfinstrument mit Saiten.",
          "exp": "Die Harfe ist das offizielle Wappensymbol Irlands."
        }
      ]
    },
    "Italien": {
      "1": [
        {
          "q": "Welches weltweit beliebte Gericht stammt ursprünglich aus der Stadt Neapel und bestand klassisch nur aus Teig, Tomaten, Mozzarella und Basilikum?",
          "o": [
            "Lasagne",
            "Pizza Margherita",
            "Risotto",
            "Tortellini"
          ],
          "a": 1,
          "tip": "Die Farben der Zutaten entsprechen der Flagge des Landes (Rot, Weiß, Grün).",
          "exp": "Die Pizza Margherita wurde 1889 zu Ehren der Königin Margarethe erfunden."
        },
        {
          "q": "Welches weltweit beliebte Gericht stammt ursprünglich aus der Stadt Neapel und bestand klassisch nur aus Teig, Tomaten, Mozzarella und Basilikum?",
          "o": [
            "Lasagne",
            "Pizza Margherita",
            "Risotto",
            "Tortellini"
          ],
          "a": 1,
          "tip": "Die Farben der Zutaten entsprechen der Flagge des Landes (Rot, Weiß, Grün).",
          "exp": "Die Pizza Margherita wurde 1889 zu Ehren der Königin Margarethe erfunden."
        }
      ],
      "2": [
        {
          "q": "Welche Stadt ist berühmt für ihren Karneval, bei dem die Menschen kunstvolle historische Masken und Kostüme auf den Kanälen tragen?",
          "o": [
            "Rom",
            "Venedig",
            "Mailand",
            "Florenz"
          ],
          "a": 1,
          "tip": "In dieser Stadt fährt man mit Gondeln.",
          "exp": "Der Karneval in Venedig geht auf das Mittelalter zurück."
        },
        {
          "q": "Welche Stadt ist berühmt für ihren Karneval, bei dem die Menschen kunstvolle historische Masken und Kostüme auf den Kanälen tragen?",
          "o": [
            "Rom",
            "Venedig",
            "Mailand",
            "Florenz"
          ],
          "a": 1,
          "tip": "In dieser Stadt fährt man mit Gondeln.",
          "exp": "Der Karneval in Venedig geht auf das Mittelalter zurück."
        }
      ],
      "3": [
        {
          "q": "Welcher weltberühmte Künstler und Universalgelehrte der Renaissance malte die „Mona Lisa“ und das „Abendmahl“?",
          "o": [
            "Michelangelo",
            "Leonardo da Vinci",
            "Raffael",
            "Sandro Botticelli"
          ],
          "a": 1,
          "tip": "Sein Name verrät seine Herkunft aus der Kleinstadt Vinci.",
          "exp": "Leonardo da Vinci war Maler, Bildhauer, Architekt und Anatom."
        },
        {
          "q": "Welcher weltberühmte Künstler und Universalgelehrte der Renaissance malte die „Mona Lisa“ und das „Abendmahl“?",
          "o": [
            "Michelangelo",
            "Leonardo da Vinci",
            "Raffael",
            "Sandro Botticelli"
          ],
          "a": 1,
          "tip": "Sein Name verrät seine Herkunft aus der Kleinstadt Vinci.",
          "exp": "Leonardo da Vinci war Maler, Bildhauer, Architekt und Anatom."
        }
      ]
    },
    "Kroatien": {
      "1": [
        {
          "q": "Welches weltberühmte Modeaccessoire für Männer wurde ursprünglich von den Soldaten dieses Landes im 17. Jahrhundert erfunden?",
          "o": [
            "Die Krawatte",
            "Der Zylinder",
            "Der Gürtel",
            "Die Fliege"
          ],
          "a": 0,
          "tip": "Das Wort leitet sich direkt vom Französischen „à la Croate“ ab.",
          "exp": "Die Krawatte wurde von kroatischen Söldnern in Frankreich populär gemacht."
        },
        {
          "q": "Welches weltberühmte Modeaccessoire für Männer wurde ursprünglich von den Soldaten dieses Landes im 17. Jahrhundert erfunden?",
          "o": [
            "Die Krawatte",
            "Der Zylinder",
            "Der Gürtel",
            "Die Fliege"
          ],
          "a": 0,
          "tip": "Das Wort leitet sich direkt vom Französischen „à la Croate“ ab.",
          "exp": "Die Krawatte wurde von kroatischen Söldnern in Frankreich populär gemacht."
        }
      ],
      "2": [
        {
          "q": "Welches rot-weiße Muster ist das markanteste Symbol auf dem Wappen und den Trikots der Sport-Nationalteams?",
          "o": [
            "Das Streifenmuster",
            "Das Schachbrettmuster",
            "Das Punktemuster",
            "Das Rautenmuster"
          ],
          "a": 1,
          "tip": "Es erinnert an das Spiel Schach.",
          "exp": "Das Schachbrettmuster Šahovnica ist das Staatswappen Kroatiens."
        },
        {
          "q": "Welches rot-weiße Muster ist das markanteste Symbol auf dem Wappen und den Trikots der Sport-Nationalteams?",
          "o": [
            "Das Streifenmuster",
            "Das Schachbrettmuster",
            "Das Punktemuster",
            "Das Rautenmuster"
          ],
          "a": 1,
          "tip": "Es erinnert an das Spiel Schach.",
          "exp": "Das Schachbrettmuster Šahovnica ist das Staatswappen Kroatiens."
        }
      ],
      "3": [
        {
          "q": "Welche weltbekannte Hunderasse mit weißem Fell und schwarzen Punkten stammt historisch aus der Küstenregion Dalmatien?",
          "o": [
            "Dalmatiner",
            "Dackel",
            "Schäferhund",
            "Pudel"
          ],
          "a": 0,
          "tip": "Bekannt auch durch den Disney-Film „101 ...“.",
          "exp": "Dalmatiner sind nach der kroatischen Region Dalmatien benannt."
        },
        {
          "q": "Welche weltbekannte Hunderasse mit weißem Fell und schwarzen Punkten stammt historisch aus der Küstenregion Dalmatien?",
          "o": [
            "Dalmatiner",
            "Dackel",
            "Schäferhund",
            "Pudel"
          ],
          "a": 0,
          "tip": "Bekannt auch durch den Disney-Film „101 ...“.",
          "exp": "Dalmatiner sind nach der kroatischen Region Dalmatien benannt."
        }
      ]
    },
    "Lettland": {
      "1": [
        {
          "q": "Welches Mittsommerfest in der Nacht vom 23. auf den 24. Juni ist das wichtigste und traditionsreichste Fest des Jahres?",
          "o": [
            "Jāņi",
            "Diwali",
            "Hanami",
            "Ostara"
          ],
          "a": 0,
          "tip": "Man flicht Blumenkränze, springt über Lagerfeuer und sucht nach der magischen Farnblüte.",
          "exp": "Jāņi feiert die Sommersonnenwende und ist ein gesetzlicher Feiertag."
        },
        {
          "q": "Welches Mittsommerfest in der Nacht vom 23. auf den 24. Juni ist das wichtigste und traditionsreichste Fest des Jahres?",
          "o": [
            "Jāņi",
            "Diwali",
            "Hanami",
            "Ostara"
          ],
          "a": 0,
          "tip": "Man flicht Blumenkränze, springt über Lagerfeuer und sucht nach der magischen Farnblüte.",
          "exp": "Jāņi feiert die Sommersonnenwende und ist ein gesetzlicher Feiertag."
        }
      ],
      "2": [
        {
          "q": "Welches fossile Harz, das an den Stränden der Ostsee angespült wird, ist der traditionelle Schmuckstein des Landes?",
          "o": [
            "Rubin",
            "Bernstein",
            "Smaragd",
            "Opal"
          ],
          "a": 1,
          "tip": "Man nennt das fossile Nadelholzharz auch das „Gold der Ostsee“.",
          "exp": "Der baltische Bernstein wird seit Jahrtausenden gesammelt und verarbeitet."
        },
        {
          "q": "Welches fossile Harz, das an den Stränden der Ostsee angespült wird, ist der traditionelle Schmuckstein des Landes?",
          "o": [
            "Rubin",
            "Bernstein",
            "Smaragd",
            "Opal"
          ],
          "a": 1,
          "tip": "Man nennt das fossile Nadelholzharz auch das „Gold der Ostsee“.",
          "exp": "Der baltische Bernstein wird seit Jahrtausenden gesammelt und verarbeitet."
        }
      ],
      "3": [
        {
          "q": "Wie heißen die kurzen, vierzeiligen traditionellen Volkslieder, von denen es über eine Million überlieferte Verse gibt?",
          "o": [
            "Haikus",
            "Dainas",
            "Chansons",
            "Balladen"
          ],
          "a": 1,
          "tip": "Der Name klingt ähnlich wie die Vorname „Diana“.",
          "exp": "Die Dainas bilden den Kern lettischer Folklore und Identität."
        },
        {
          "q": "Wie heißen die kurzen, vierzeiligen traditionellen Volkslieder, von denen es über eine Million überlieferte Verse gibt?",
          "o": [
            "Haikus",
            "Dainas",
            "Chansons",
            "Balladen"
          ],
          "a": 1,
          "tip": "Der Name klingt ähnlich wie die Vorname „Diana“.",
          "exp": "Die Dainas bilden den Kern lettischer Folklore und Identität."
        }
      ]
    },
    "Litauen": {
      "1": [
        {
          "q": "Welches Gericht aus geriebenen Kartoffeln, meist gefüllt mit Hackfleisch und serviert mit Sauerrahm, ist das Nationalgericht?",
          "o": [
            "Cepelinai",
            "Pierogi",
            "Gulasch",
            "Knödel"
          ],
          "a": 0,
          "tip": "Die Form des Gerichts erinnert an ein bekanntes großes Luftschiff.",
          "exp": "Cepelinai sind große Kartoffelklöße, benannt nach Graf Zeppelin."
        },
        {
          "q": "Welches Gericht aus geriebenen Kartoffeln, meist gefüllt mit Hackfleisch und serviert mit Sauerrahm, ist das Nationalgericht?",
          "o": [
            "Cepelinai",
            "Pierogi",
            "Gulasch",
            "Knödel"
          ],
          "a": 0,
          "tip": "Die Form des Gerichts erinnert an ein bekanntes großes Luftschiff.",
          "exp": "Cepelinai sind große Kartoffelklöße, benannt nach Graf Zeppelin."
        }
      ],
      "2": [
        {
          "q": "Welches beeindruckende Symbol des katholischen Glaubens und des Widerstands gegen die Sowjetunion besteht aus über 100.000 aufgestellten Holzkreuzen?",
          "o": [
            "Der Berg der Kreuze",
            "Das Tal der Könige",
            "Der Altar der Freiheit",
            "Die Wand der Stimmen"
          ],
          "a": 0,
          "tip": "Es ist ein Hügel in der Nähe der Stadt Šiauliai.",
          "exp": "Der Berg der Kreuze (Kryžių kalnas) ist eine weltbekannte Pilgerstätte."
        },
        {
          "q": "Welches beeindruckende Symbol des katholischen Glaubens und des Widerstands gegen die Sowjetunion besteht aus über 100.000 aufgestellten Holzkreuzen?",
          "o": [
            "Der Berg der Kreuze",
            "Das Tal der Könige",
            "Der Altar der Freiheit",
            "Die Wand der Stimmen"
          ],
          "a": 0,
          "tip": "Es ist ein Hügel in der Nähe der Stadt Šiauliai.",
          "exp": "Der Berg der Kreuze (Kryžių kalnas) ist eine weltbekannte Pilgerstätte."
        }
      ],
      "3": [
        {
          "q": "Welcher edle Raubvogel ziert das historische Wappen („Vytis“) als Reittier eines bewaffneten Ritters auf weißem Pferd?",
          "o": [
            "Kein Vogel, es ist ein Wappenreiter",
            "Ein doppelköpfiger Adler",
            "Ein Falke",
            "Ein Drache"
          ],
          "a": 0,
          "tip": "Das Wappen zeigt gar keinen Vogel, sondern einen galoppierenden Ritter mit Schwert!",
          "exp": "Das litauische Staatswappen Vytis zeigt einen aufgerichteten weißen Ritter auf Pferd."
        },
        {
          "q": "Welcher edle Raubvogel ziert das historische Wappen („Vytis“) als Reittier eines bewaffneten Ritters auf weißem Pferd?",
          "o": [
            "Kein Vogel, es ist ein Wappenreiter",
            "Ein doppelköpfiger Adler",
            "Ein Falke",
            "Ein Drache"
          ],
          "a": 0,
          "tip": "Das Wappen zeigt gar keinen Vogel, sondern einen galoppierenden Ritter mit Schwert!",
          "exp": "Das litauische Staatswappen Vytis zeigt einen aufgerichteten weißen Ritter auf Pferd."
        }
      ]
    },
    "Luxemburg": {
      "1": [
        {
          "q": "In welcher Sprache, die eine Mischung aus moselfränkischen Dialekten und französischen Einflüssen ist, unterhalten sich die Einheimischen im Alltag?",
          "o": [
            "Letzeburgisch",
            "Flämisch",
            "Wallonisch",
            "Rätoromanisch"
          ],
          "a": 0,
          "tip": "Der Name der Sprache leitet sich vom Landesnamen ab.",
          "exp": "Luxemburgisch ist seit 1984 die gesetzliche Nationalsprache des Landes."
        },
        {
          "q": "In welcher Sprache, die eine Mischung aus moselfränkischen Dialekten und französischen Einflüssen ist, unterhalten sich die Einheimischen im Alltag?",
          "o": [
            "Letzeburgisch",
            "Flämisch",
            "Wallonisch",
            "Rätoromanisch"
          ],
          "a": 0,
          "tip": "Der Name der Sprache leitet sich vom Landesnamen ab.",
          "exp": "Luxemburgisch ist seit 1984 die gesetzliche Nationalsprache des Landes."
        }
      ],
      "2": [
        {
          "q": "Welche mythische Wasserfee aus den Sagen des Landes soll die Gemahlin des ersten Grafen Siegfried gewesen sein?",
          "o": [
            "Loreley",
            "Melusina",
            "Undine",
            "Rusalka"
          ],
          "a": 1,
          "tip": "Ihr Name beginnt mit den Buchstaben „Mel-“.",
          "exp": "Die Melusina-Legende besagt, dass sie sich samstags in eine Meerjungfrau verwandelt."
        },
        {
          "q": "Welche mythische Wasserfee aus den Sagen des Landes soll die Gemahlin des ersten Grafen Siegfried gewesen sein?",
          "o": [
            "Loreley",
            "Melusina",
            "Undine",
            "Rusalka"
          ],
          "a": 1,
          "tip": "Ihr Name beginnt mit den Buchstaben „Mel-“.",
          "exp": "Die Melusina-Legende besagt, dass sie sich samstags in eine Meerjungfrau verwandelt."
        }
      ],
      "3": [
        {
          "q": "Welcher traditionelle Umzug findet jedes Jahr am Pfingstdienstag in der Stadt Echternach statt und gehört zum UNESCO-Weltkulturerbe?",
          "o": [
            "Der Blumenkorso",
            "Die Echternacher Springprozession",
            "Der Almabtrieb",
            "Der Narrensprung"
          ],
          "a": 1,
          "tip": "Die Teilnehmer hüpfen dabei rhythmisch zu Marschmusik durch die Straßen.",
          "exp": "Die Springprozession zu Ehren des Heiligen Willibrord lockt Tausende Pilger an."
        },
        {
          "q": "Welcher traditionelle Umzug findet jedes Jahr am Pfingstdienstag in der Stadt Echternach statt und gehört zum UNESCO-Weltkulturerbe?",
          "o": [
            "Der Blumenkorso",
            "Die Echternacher Springprozession",
            "Der Almabtrieb",
            "Der Narrensprung"
          ],
          "a": 1,
          "tip": "Die Teilnehmer hüpfen dabei rhythmisch zu Marschmusik durch die Straßen.",
          "exp": "Die Springprozession zu Ehren des Heiligen Willibrord lockt Tausende Pilger an."
        }
      ]
    },
    "Malta": {
      "1": [
        {
          "q": "Welches Kreuz mit acht Spitzen gilt als weltweit bekanntes Symbol dieses Inselstaates und seiner historischen Ritter?",
          "o": [
            "Das Georgskreuz",
            "Das Malteserkreuz",
            "Das Eiserne Kreuz",
            "Das Keltische Kreuz"
          ],
          "a": 1,
          "tip": "Der Name der Ritter und des Kreuzes ist identisch mit dem Namen des Landes.",
          "exp": "Das Malteserkreuz geht auf den katholischen Malteserorden zurück."
        },
        {
          "q": "Welches Kreuz mit acht Spitzen gilt als weltweit bekanntes Symbol dieses Inselstaates und seiner historischen Ritter?",
          "o": [
            "Das Georgskreuz",
            "Das Malteserkreuz",
            "Das Eiserne Kreuz",
            "Das Keltische Kreuz"
          ],
          "a": 1,
          "tip": "Der Name der Ritter und des Kreuzes ist identisch mit dem Namen des Landes.",
          "exp": "Das Malteserkreuz geht auf den katholischen Malteserorden zurück."
        }
      ],
      "2": [
        {
          "q": "Wie heißen die traditionellen, bunt bemaltem Fischerboote mit den typischen aufgemalten Osiris-Augen am Bug?",
          "o": [
            "Gondeln",
            "Luzzus",
            "Dhows",
            "Kajaks"
          ],
          "a": 1,
          "tip": "Der Name hat nur 5 Buchstaben und beginnt mit „L“.",
          "exp": "Die Luzzus schützten laut Aberglaube die Fischer vor den Gefahren des Meeres."
        },
        {
          "q": "Wie heißen die traditionellen, bunt bemaltem Fischerboote mit den typischen aufgemalten Osiris-Augen am Bug?",
          "o": [
            "Gondeln",
            "Luzzus",
            "Dhows",
            "Kajaks"
          ],
          "a": 1,
          "tip": "Der Name hat nur 5 Buchstaben und beginnt mit „L“.",
          "exp": "Die Luzzus schützten laut Aberglaube die Fischer vor den Gefahren des Meeres."
        }
      ],
      "3": [
        {
          "q": "Welches prähistorische unterirdische Höhlensystem und Tempelanlage gehört zu den ältesten freistehenden Bauwerken der Menschheit?",
          "o": [
            "Das Hypogäum von Ħal-Saflieni",
            "Die Katakomben von Rom",
            "Der Parthenon",
            "Die Pyramiden von Gizeh"
          ],
          "a": 0,
          "tip": "Das Wort „Hypogäum“ kommt aus dem Griechischen und bedeutet „unter der Erde“.",
          "exp": "Das Hypogäum wurde um 4000 v. Chr. als Begräbnisstätte genutzt."
        },
        {
          "q": "Welches prähistorische unterirdische Höhlensystem und Tempelanlage gehört zu den ältesten freistehenden Bauwerken der Menschheit?",
          "o": [
            "Das Hypogäum von Ħal-Saflieni",
            "Die Katakomben von Rom",
            "Der Parthenon",
            "Die Pyramiden von Gizeh"
          ],
          "a": 0,
          "tip": "Das Wort „Hypogäum“ kommt aus dem Griechischen und bedeutet „unter der Erde“.",
          "exp": "Das Hypogäum wurde um 4000 v. Chr. als Begräbnisstätte genutzt."
        }
      ]
    },
    "Niederlande": {
      "1": [
        {
          "q": "Welche Blume ist das berühmteste florale Symbol des Landes, für das im Frühling ganze Felder bunt aufblühen?",
          "o": [
            "Die Rose",
            "Die Tulpe",
            "Die Sonnenblume",
            "Die Narzisse"
          ],
          "a": 1,
          "tip": "Im 17. Jahrhundert gab es um diese Zwiebelblume sogar eine riesige Spekulationsblase („Tulpenmanie“).",
          "exp": "Die Tulpe wurde im 16. Jahrhundert aus dem Osmanischen Reich importiert."
        },
        {
          "q": "Welche Blume ist das berühmteste florale Symbol des Landes, für das im Frühling ganze Felder bunt aufblühen?",
          "o": [
            "Die Rose",
            "Die Tulpe",
            "Die Sonnenblume",
            "Die Narzisse"
          ],
          "a": 1,
          "tip": "Im 17. Jahrhundert gab es um diese Zwiebelblume sogar eine riesige Spekulationsblase („Tulpenmanie“).",
          "exp": "Die Tulpe wurde im 16. Jahrhundert aus dem Osmanischen Reich importiert."
        }
      ],
      "2": [
        {
          "q": "Welche Farbe trägt das Königshaus (Haus Oranien-Nassau) und ist daher die inoffizielle Nationalfarbe bei Sportevents?",
          "o": [
            "Rot",
            "Blau",
            "Orange",
            "Gelb"
          ],
          "a": 2,
          "tip": "Die Farbe leitet sich vom englischen Wort „Orange“ ab.",
          "exp": "Orange symbolisiert die Verbundenheit der Niederländer mit dem Königshaus."
        },
        {
          "q": "Welche Farbe trägt das Königshaus (Haus Oranien-Nassau) und ist daher die inoffizielle Nationalfarbe bei Sportevents?",
          "o": [
            "Rot",
            "Blau",
            "Orange",
            "Gelb"
          ],
          "a": 2,
          "tip": "Die Farbe leitet sich vom englischen Wort „Orange“ ab.",
          "exp": "Orange symbolisiert die Verbundenheit der Niederländer mit dem Königshaus."
        }
      ],
      "3": [
        {
          "q": "Welcher berühmte Maler des Barock schuf das riesige Meisterwerk „Die Nachtwache“?",
          "o": [
            "Vincent van Gogh",
            "Rembrandt van Rijn",
            "Johannes Vermeer",
            "Piet Mondrian"
          ],
          "a": 1,
          "tip": "Sein Vorname lautet Rembrandt.",
          "exp": "Rembrandts Nachtwache (1642) hängt heute im Rijksmuseum in Amsterdam."
        },
        {
          "q": "Welcher berühmte Maler des Barock schuf das riesige Meisterwerk „Die Nachtwache“?",
          "o": [
            "Vincent van Gogh",
            "Rembrandt van Rijn",
            "Johannes Vermeer",
            "Piet Mondrian"
          ],
          "a": 1,
          "tip": "Sein Vorname lautet Rembrandt.",
          "exp": "Rembrandts Nachtwache (1642) hängt heute im Rijksmuseum in Amsterdam."
        }
      ]
    },
    "Österreich": {
      "1": [
        {
          "q": "Welcher weltberühmte Walzer von Johann Strauß Sohn gilt als inoffizielle Landeshymne und wird traditionell zu Silvester gespielt?",
          "o": [
            "Radetzky-Marsch",
            "An der schönen blauen Donau",
            "Wiener Blut",
            "Kaiser-Walzer"
          ],
          "a": 1,
          "tip": "Der Titel nennt den zweitlängste Fluss Europas.",
          "exp": "Der Donauwalzer wurde 1867 uraufgeführt und ist fester Neujahrsbestandteil."
        },
        {
          "q": "Welcher weltberühmte Walzer von Johann Strauß Sohn gilt als inoffizielle Landeshymne und wird traditionell zu Silvester gespielt?",
          "o": [
            "Radetzky-Marsch",
            "An der schönen blauen Donau",
            "Wiener Blut",
            "Kaiser-Walzer"
          ],
          "a": 1,
          "tip": "Der Titel nennt den zweitlängste Fluss Europas.",
          "exp": "Der Donauwalzer wurde 1867 uraufgeführt und ist fester Neujahrsbestandteil."
        }
      ],
      "2": [
        {
          "q": "Welche edle Rasse weißer Pferde wird in der Spanischen Hofreitschule in der Hauptstadt ausgebildet?",
          "o": [
            "Haflinger",
            "Lipizzaner",
            "Isländer",
            "Friesen"
          ],
          "a": 1,
          "tip": "Die Fohlen werden dunkel geboren und werden erst im Laufe der Jahre weiß.",
          "exp": "Lipizzaner gehen auf das kaiserliche Gestüt Lippiza zurück."
        },
        {
          "q": "Welche edle Rasse weißer Pferde wird in der Spanischen Hofreitschule in der Hauptstadt ausgebildet?",
          "o": [
            "Haflinger",
            "Lipizzaner",
            "Isländer",
            "Friesen"
          ],
          "a": 1,
          "tip": "Die Fohlen werden dunkel geboren und werden erst im Laufe der Jahre weiß.",
          "exp": "Lipizzaner gehen auf das kaiserliche Gestüt Lippiza zurück."
        }
      ],
      "3": [
        {
          "q": "Welches weltberühmte Werk des Künstlers Gustav Klimt zeigt ein schlingendes Paar im Goldregen?",
          "o": [
            "Die Schrei",
            "Der Kuss",
            "Die Mona Lisa",
            "Das Mädchen mit dem Perlenohrring"
          ],
          "a": 1,
          "tip": "Der Name beschreibt eine sehr liebevolle Geste.",
          "exp": "Der Kuss (1908) ist das Prunkstück des Wiener Belvedere-Museums."
        },
        {
          "q": "Welches weltberühmte Werk des Künstlers Gustav Klimt zeigt ein schlingendes Paar im Goldregen?",
          "o": [
            "Die Schrei",
            "Der Kuss",
            "Die Mona Lisa",
            "Das Mädchen mit dem Perlenohrring"
          ],
          "a": 1,
          "tip": "Der Name beschreibt eine sehr liebevolle Geste.",
          "exp": "Der Kuss (1908) ist das Prunkstück des Wiener Belvedere-Museums."
        }
      ]
    },
    "Polen": {
      "1": [
        {
          "q": "Welches gefüllte Teigtaschen-Gericht ist das bekannteste Nationalgericht und wird sowohl herzhaft als auch süß serviert?",
          "o": [
            "Pelmeni",
            "Pierogi",
            "Tortellini",
            "Empanadas"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Buchstaben „P“.",
          "exp": "Pierogi sind in Polen und ganz Osteuropa ein fester Küchenbestandteil."
        },
        {
          "q": "Welches gefüllte Teigtaschen-Gericht ist das bekannteste Nationalgericht und wird sowohl herzhaft als auch süß serviert?",
          "o": [
            "Pelmeni",
            "Pierogi",
            "Tortellini",
            "Empanadas"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Buchstaben „P“.",
          "exp": "Pierogi sind in Polen und ganz Osteuropa ein fester Küchenbestandteil."
        }
      ],
      "2": [
        {
          "q": "Welches Tier ziert als majestätisches Symbol das Wappen des Landes auf rotem Grund?",
          "o": [
            "Der weiße Adler",
            "Der braune Bär",
            "Der schwarze Stier",
            "Der graue Wolf"
          ],
          "a": 0,
          "tip": "Er trägt eine goldene Krone auf dem Kopf.",
          "exp": "Der weiße Adler auf rotem Schild ist seit Jahrhunderten Polens Wappentier."
        },
        {
          "q": "Welches Tier ziert als majestätisches Symbol das Wappen des Landes auf rotem Grund?",
          "o": [
            "Der weiße Adler",
            "Der braune Bär",
            "Der schwarze Stier",
            "Der graue Wolf"
          ],
          "a": 0,
          "tip": "Er trägt eine goldene Krone auf dem Kopf.",
          "exp": "Der weiße Adler auf rotem Schild ist seit Jahrhunderten Polens Wappentier."
        }
      ],
      "3": [
        {
          "q": "Welcher weltberühmte Komponist der Romantik schrieb fast ausschließlich Werke für das Klavier, darunter viele Mazurken und Polonaisen?",
          "o": [
            "Franz Liszt",
            "Frédéric Chopin",
            "Antonín Dvořák",
            "Béla Bartók"
          ],
          "a": 1,
          "tip": "Der Flughafen in der Hauptstadt ist nach ihm benannt.",
          "exp": "Chopin verbrachte seine ersten 20 Jahre in Polen und starb in Paris."
        },
        {
          "q": "Welcher weltberühmte Komponist der Romantik schrieb fast ausschließlich Werke für das Klavier, darunter viele Mazurken und Polonaisen?",
          "o": [
            "Franz Liszt",
            "Frédéric Chopin",
            "Antonín Dvořák",
            "Béla Bartók"
          ],
          "a": 1,
          "tip": "Der Flughafen in der Hauptstadt ist nach ihm benannt.",
          "exp": "Chopin verbrachte seine ersten 20 Jahre in Polen und starb in Paris."
        }
      ]
    },
    "Portugal": {
      "1": [
        {
          "q": "Welches Gericht aus getrocknetem und gesalzenem Kabeljau soll es in über 365 verschiedenen Rezepten geben?",
          "o": [
            "Paella",
            "Bacalhau",
            "Tapas",
            "Sardinen"
          ],
          "a": 1,
          "tip": "Es ist der berühmte Klippfisch.",
          "exp": "Bacalhau wird seit den Entdeckerzeiten getrocknet und eingesalzen haltbar gemacht."
        },
        {
          "q": "Welches Gericht aus getrocknetem und gesalzenem Kabeljau soll es in über 365 verschiedenen Rezepten geben?",
          "o": [
            "Paella",
            "Bacalhau",
            "Tapas",
            "Sardinen"
          ],
          "a": 1,
          "tip": "Es ist der berühmte Klippfisch.",
          "exp": "Bacalhau wird seit den Entdeckerzeiten getrocknet und eingesalzen haltbar gemacht."
        }
      ],
      "2": [
        {
          "q": "Welcher Musikstil ist bekannt für seine schwermütigen Melodien, Gitarrenklänge und das Thema der Sehnsucht („Saudade“)?",
          "o": [
            "Flamenco",
            "Fado",
            "Samba",
            "Bossa Nova"
          ],
          "a": 1,
          "tip": "Das Wort hat nur vier Buchstaben und bedeutet übersetzt „Schicksal“.",
          "exp": "Fado gehört zum UNESCO-Weltkulturerbe und spiegelt das portugiesische Lebensgefühl wider."
        },
        {
          "q": "Welcher Musikstil ist bekannt für seine schwermütigen Melodien, Gitarrenklänge und das Thema der Sehnsucht („Saudade“)?",
          "o": [
            "Flamenco",
            "Fado",
            "Samba",
            "Bossa Nova"
          ],
          "a": 1,
          "tip": "Das Wort hat nur vier Buchstaben und bedeutet übersetzt „Schicksal“.",
          "exp": "Fado gehört zum UNESCO-Weltkulturerbe und spiegelt das portugiesische Lebensgefühl wider."
        }
      ],
      "3": [
        {
          "q": "Welcher bunte Hahn gilt als nationaler Glücksbringer und Symbol für Ehrlichkeit und Gerechtigkeit?",
          "o": [
            "Der Hahn von Barcelos",
            "Der Hahn von Sintra",
            "Der Gallische Hahn",
            "Der goldene Gockel"
          ],
          "a": 0,
          "tip": "Die Legende besagt, dass ein gebratener Hahn krähte, um die Unschuld eines Pilgers zu beweisen.",
          "exp": "Der Hahn von Barcelos (Galo de Barcelos) ist Portugals Nationalsymbol."
        },
        {
          "q": "Welcher bunte Hahn gilt als nationaler Glücksbringer und Symbol für Ehrlichkeit und Gerechtigkeit?",
          "o": [
            "Der Hahn von Barcelos",
            "Der Hahn von Sintra",
            "Der Gallische Hahn",
            "Der goldene Gockel"
          ],
          "a": 0,
          "tip": "Die Legende besagt, dass ein gebratener Hahn krähte, um die Unschuld eines Pilgers zu beweisen.",
          "exp": "Der Hahn von Barcelos (Galo de Barcelos) ist Portugals Nationalsymbol."
        }
      ]
    },
    "Rumänien": {
      "1": [
        {
          "q": "Welche fiktive Romanfigur des Autors Bram Stoker beruht lose auf dem historischen Herrscher Vlad III. Drăculea?",
          "o": [
            "Frankenstein",
            "Graf Dracula",
            "Der Werwolf",
            "Van Helsing"
          ],
          "a": 1,
          "tip": "Es handelt sich um den berühmtesten Vampir der Weltgeschichte.",
          "exp": "Vlad der Pfähler lieferte die Inspiration für den Vampirfürsten Dracula."
        },
        {
          "q": "Welche fiktive Romanfigur des Autors Bram Stoker beruht lose auf dem historischen Herrscher Vlad III. Drăculea?",
          "o": [
            "Frankenstein",
            "Graf Dracula",
            "Der Werwolf",
            "Van Helsing"
          ],
          "a": 1,
          "tip": "Es handelt sich um den berühmtesten Vampir der Weltgeschichte.",
          "exp": "Vlad der Pfähler lieferte die Inspiration für den Vampirfürsten Dracula."
        }
      ],
      "2": [
        {
          "q": "Welches Schloss in Transsilvanien wird Touristen oft als das angebliche „Dracula-Schloss“ präsentiert?",
          "o": [
            "Schloss Bran",
            "Schloss Peleș",
            "Burg Hunedoara",
            "Schloss Corvinus"
          ],
          "a": 0,
          "tip": "Es hat nur vier Buchstaben im Namen (Bran).",
          "exp": "Schloss Bran ähnelt Stokers Beschreibung, Vlad III. hat es aber wohl nie bewohnt."
        },
        {
          "q": "Welches Schloss in Transsilvanien wird Touristen oft als das angebliche „Dracula-Schloss“ präsentiert?",
          "o": [
            "Schloss Bran",
            "Schloss Peleș",
            "Burg Hunedoara",
            "Schloss Corvinus"
          ],
          "a": 0,
          "tip": "Es hat nur vier Buchstaben im Namen (Bran).",
          "exp": "Schloss Bran ähnelt Stokers Beschreibung, Vlad III. hat es aber wohl nie bewohnt."
        }
      ],
      "3": [
        {
          "q": "Wie heißt die traditionelle bestickte Leinenbluse, die als Symbol des nationalen Kulturerbes gilt?",
          "o": [
            "Dirndl",
            "Ia",
            "Sarafan",
            "Vyshhyvanka"
          ],
          "a": 1,
          "tip": "Der Name ist extrem kurz und besteht aus nur zwei Vokalen.",
          "exp": "Die Ia ist die reich verzierte rumänische Volkstrachtenbluse."
        },
        {
          "q": "Wie heißt die traditionelle bestickte Leinenbluse, die als Symbol des nationalen Kulturerbes gilt?",
          "o": [
            "Dirndl",
            "Ia",
            "Sarafan",
            "Vyshhyvanka"
          ],
          "a": 1,
          "tip": "Der Name ist extrem kurz und besteht aus nur zwei Vokalen.",
          "exp": "Die Ia ist die reich verzierte rumänische Volkstrachtenbluse."
        }
      ]
    },
    "Schweden": {
      "1": [
        {
          "q": "Welches Midsommar-Symbol wird auf den Wiesen aufgestellt, um das man in Gruppen tanzt und singt?",
          "o": [
            "Der Maibaum",
            "Das Osterfeuer",
            "Der Adventskranz",
            "Der Erntedankkorb"
          ],
          "a": 0,
          "tip": "Es ist ein mit Birkenzweigen und Blumen geschmückter Mast.",
          "exp": "Das Midsommar-Fest feiert das Licht zur Sommersonnenwende."
        },
        {
          "q": "Welches Midsommar-Symbol wird auf den Wiesen aufgestellt, um das man in Gruppen tanzt und singt?",
          "o": [
            "Der Maibaum",
            "Das Osterfeuer",
            "Der Adventskranz",
            "Der Erntedankkorb"
          ],
          "a": 0,
          "tip": "Es ist ein mit Birkenzweigen und Blumen geschmückter Mast.",
          "exp": "Das Midsommar-Fest feiert das Licht zur Sommersonnenwende."
        }
      ],
      "2": [
        {
          "q": "Welches rote Holzpferdchen aus der Region Dalarna ist das bekannteste Souvenir und Symbol des Landes?",
          "o": [
            "Dalahäst",
            "Lindwurm",
            "Schaukelpferd",
            "Holzbock"
          ],
          "a": 0,
          "tip": "Es ist meist leuchtend rot bemalt und mit traditionellen Blumenmustern verziert.",
          "exp": "Das Dala-Pferd entstand im 17. Jahrhundert als Schnitzspielzeug."
        },
        {
          "q": "Welches rote Holzpferdchen aus der Region Dalarna ist das bekannteste Souvenir und Symbol des Landes?",
          "o": [
            "Dalahäst",
            "Lindwurm",
            "Schaukelpferd",
            "Holzbock"
          ],
          "a": 0,
          "tip": "Es ist meist leuchtend rot bemalt und mit traditionellen Blumenmustern verziert.",
          "exp": "Das Dala-Pferd entstand im 17. Jahrhundert als Schnitzspielzeug."
        }
      ],
      "3": [
        {
          "q": "Welches Pop-Quartett gewann 1974 mit dem Song „Waterloo“ den Eurovision Song Contest und wurde weltberühmt?",
          "o": [
            "Roxette",
            "ABBA",
            "A-ha",
            "Ace of Base"
          ],
          "a": 1,
          "tip": "Der Name setzt sich aus den Anfangsbuchstaben der vier Mitglieder Agnetha, Björn, Benny und Anni-Frid zusammen.",
          "exp": "ABBA ist mit rund 400 Millionen Tonträgern eine der erfolgreichsten Bands aller Zeiten."
        },
        {
          "q": "Welches Pop-Quartett gewann 1974 mit dem Song „Waterloo“ den Eurovision Song Contest und wurde weltberühmt?",
          "o": [
            "Roxette",
            "ABBA",
            "A-ha",
            "Ace of Base"
          ],
          "a": 1,
          "tip": "Der Name setzt sich aus den Anfangsbuchstaben der vier Mitglieder Agnetha, Björn, Benny und Anni-Frid zusammen.",
          "exp": "ABBA ist mit rund 400 Millionen Tonträgern eine der erfolgreichsten Bands aller Zeiten."
        }
      ]
    },
    "Slowakei": {
      "1": [
        {
          "q": "Welcher legendäre Bergamts-Räuber gilt im Volk als nationaler Volksheld (ähnlich wie Robin Hood)?",
          "o": [
            "Juraj Jánošík",
            "Sandor Rózsa",
            "Räuber Hotzenplotz",
            "Wilhelm Tell"
          ],
          "a": 0,
          "tip": "Er stahl von den Reichen und gab es den Armen.",
          "exp": "Jánošík lebte im frühen 18. Jahrhundert und wurde zum Volkshelden verklärt."
        },
        {
          "q": "Welcher legendäre Bergamts-Räuber gilt im Volk als nationaler Volksheld (ähnlich wie Robin Hood)?",
          "o": [
            "Juraj Jánošík",
            "Sandor Rózsa",
            "Räuber Hotzenplotz",
            "Wilhelm Tell"
          ],
          "a": 0,
          "tip": "Er stahl von den Reichen und gab es den Armen.",
          "exp": "Jánošík lebte im frühen 18. Jahrhundert und wurde zum Volkshelden verklärt."
        }
      ],
      "2": [
        {
          "q": "Welches Gericht aus Kartoffelnocken mit Schafskäse (Bryndza) und krossen Speckwürfeln ist das Nationalgericht?",
          "o": [
            "Bryndzové halušky",
            "Piroggen",
            "Schätzle",
            "Gulasch"
          ],
          "a": 0,
          "tip": "Die Nocken ähneln den Spätzle.",
          "exp": "Bryndzové halušky ist der Inbegriff der slowakischen Traditionsküche."
        },
        {
          "q": "Welches Gericht aus Kartoffelnocken mit Schafskäse (Bryndza) und krossen Speckwürfeln ist das Nationalgericht?",
          "o": [
            "Bryndzové halušky",
            "Piroggen",
            "Schätzle",
            "Gulasch"
          ],
          "a": 0,
          "tip": "Die Nocken ähneln den Spätzle.",
          "exp": "Bryndzové halušky ist der Inbegriff der slowakischen Traditionsküche."
        }
      ],
      "3": [
        {
          "q": "Welches Symbol mit einem Doppelkreuz auf drei blauen Hügeln ziert die Nationalflagge und das Wappen?",
          "o": [
            "Das Byzantinische Doppelkreuz",
            "Das Malteserkreuz",
            "Das Keltische Kreuz",
            "Das Balkenkreuz"
          ],
          "a": 0,
          "tip": "Die drei Hügel stellen die Gebirge Tatra, Fatra und Mátra dar.",
          "exp": "Das Doppelkreuz geht auf den byzantinischen Einfluss im Mittelalter zurück."
        },
        {
          "q": "Welches Symbol mit einem Doppelkreuz auf drei blauen Hügeln ziert die Nationalflagge und das Wappen?",
          "o": [
            "Das Byzantinische Doppelkreuz",
            "Das Malteserkreuz",
            "Das Keltische Kreuz",
            "Das Balkenkreuz"
          ],
          "a": 0,
          "tip": "Die drei Hügel stellen die Gebirge Tatra, Fatra und Mátra dar.",
          "exp": "Das Doppelkreuz geht auf den byzantinischen Einfluss im Mittelalter zurück."
        }
      ]
    },
    "Slowenien": {
      "1": [
        {
          "q": "Welcher Höhlenmolch (ein blinder Schwanzlurch), der in den berühmten Postojna-Höhlen lebt, wird auch als „Menschliches Fischlein“ bezeichnet?",
          "o": [
            "Grottenolm",
            "Feuersalamander",
            "Axolotl",
            "Bergmolch"
          ],
          "a": 0,
          "tip": "Er hat eine hautähnliche rosa Farbe und lebt komplett im Dunkeln.",
          "exp": "Der Grottenolm schlägt ohne Nahrung Jahre durch und atmet über Kiemen."
        },
        {
          "q": "Welcher Höhlenmolch (ein blinder Schwanzlurch), der in den berühmten Postojna-Höhlen lebt, wird auch als „Menschliches Fischlein“ bezeichnet?",
          "o": [
            "Grottenolm",
            "Feuersalamander",
            "Axolotl",
            "Bergmolch"
          ],
          "a": 0,
          "tip": "Er hat eine hautähnliche rosa Farbe und lebt komplett im Dunkeln.",
          "exp": "Der Grottenolm schlägt ohne Nahrung Jahre durch und atmet über Kiemen."
        }
      ],
      "2": [
        {
          "q": "Welche Delikatesse aus Hefeteig mit einer Füllung aus Nüssen, Estragon oder Mohn ist der traditionelle Festtagskuchen?",
          "o": [
            "Potica",
            "Strudel",
            "Panettone",
            "Gugelhupf"
          ],
          "a": 0,
          "tip": "Der Name klingt ähnlich wie „Potizza“.",
          "exp": "Potica ist das unverzichtbare Festgebäck Sloweniens."
        },
        {
          "q": "Welche Delikatesse aus Hefeteig mit einer Füllung aus Nüssen, Estragon oder Mohn ist der traditionelle Festtagskuchen?",
          "o": [
            "Potica",
            "Strudel",
            "Panettone",
            "Gugelhupf"
          ],
          "a": 0,
          "tip": "Der Name klingt ähnlich wie „Potizza“.",
          "exp": "Potica ist das unverzichtbare Festgebäck Sloweniens."
        }
      ],
      "3": [
        {
          "q": "Welches Tier gilt als Symbol für Fleiß und Ausdauer und wird in der traditionellen Bienenhaltung auf bunt bemallten Beutenbrettern geehrt?",
          "o": [
            "Die Krainer Biene",
            "Die Ameise",
            "Der Biber",
            "Die Seidenraupe"
          ],
          "a": 0,
          "tip": "Im Land hat die Imkerei eine riesige historische Tradition.",
          "exp": "Die Krainer Biene (Apis mellifera carnica) ist weltweit als sanftmütig bekannt."
        },
        {
          "q": "Welches Tier gilt als Symbol für Fleiß und Ausdauer und wird in der traditionellen Bienenhaltung auf bunt bemallten Beutenbrettern geehrt?",
          "o": [
            "Die Krainer Biene",
            "Die Ameise",
            "Der Biber",
            "Die Seidenraupe"
          ],
          "a": 0,
          "tip": "Im Land hat die Imkerei eine riesige historische Tradition.",
          "exp": "Die Krainer Biene (Apis mellifera carnica) ist weltweit als sanftmütig bekannt."
        }
      ]
    },
    "Spanien": {
      "1": [
        {
          "q": "Welches traditionelle Gericht aus Reis, Safran, Gemüse und Meeresfrüchten oder Fleisch wird in einer großen flachen Pfanne zubereitet?",
          "o": [
            "Gazpacho",
            "Paella",
            "Tortilla",
            "Tapas"
          ],
          "a": 1,
          "tip": "Es stammt ursprünglich aus der Region Valencia.",
          "exp": "Die Paella ist die weltweit bekannteste Spezialität Spaniens."
        },
        {
          "q": "Welches traditionelle Gericht aus Reis, Safran, Gemüse und Meeresfrüchten oder Fleisch wird in einer großen flachen Pfanne zubereitet?",
          "o": [
            "Gazpacho",
            "Paella",
            "Tortilla",
            "Tapas"
          ],
          "a": 1,
          "tip": "Es stammt ursprünglich aus der Region Valencia.",
          "exp": "Die Paella ist die weltweit bekannteste Spezialität Spaniens."
        }
      ],
      "2": [
        {
          "q": "Welcher feurige Tanz- und Musikstil aus Andalusien kombiniert Gesang, Gitarrenspiel, Klatschen und ausdrucksstarken Tanz?",
          "o": [
            "Tango",
            "Flamenco",
            "Salsa",
            "Merengue"
          ],
          "a": 1,
          "tip": "Die Tänzerinnen tragen oft weit schwingende Kleider mit Fransen.",
          "exp": "Der Flamenco ist immaterielles UNESCO-Weltkulturerbe."
        },
        {
          "q": "Welcher feurige Tanz- und Musikstil aus Andalusien kombiniert Gesang, Gitarrenspiel, Klatschen und ausdrucksstarken Tanz?",
          "o": [
            "Tango",
            "Flamenco",
            "Salsa",
            "Merengue"
          ],
          "a": 1,
          "tip": "Die Tänzerinnen tragen oft weit schwingende Kleider mit Fransen.",
          "exp": "Der Flamenco ist immaterielles UNESCO-Weltkulturerbe."
        }
      ],
      "3": [
        {
          "q": "Welcher weltberühmte Architekt entwarf das bis heute unvollendete Meisterwerk der Basilika Sagrada Família in Barcelona?",
          "o": [
            "Antoni Gaudí",
            "Pablo Picasso",
            "Salvador Dalí",
            "Joan Miró"
          ],
          "a": 0,
          "tip": "Seine Bauwerke zeichnen sich durch geschwungene organische Formen aus der Natur aus.",
          "exp": "Gaudís Sagrada Família befindet sich seit 1882 im Bau."
        },
        {
          "q": "Welcher weltberühmte Architekt entwarf das bis heute unvollendete Meisterwerk der Basilika Sagrada Família in Barcelona?",
          "o": [
            "Antoni Gaudí",
            "Pablo Picasso",
            "Salvador Dalí",
            "Joan Miró"
          ],
          "a": 0,
          "tip": "Seine Bauwerke zeichnen sich durch geschwungene organische Formen aus der Natur aus.",
          "exp": "Gaudís Sagrada Família befindet sich seit 1882 im Bau."
        }
      ]
    },
    "Tschechien": {
      "1": [
        {
          "q": "Welche zeichentrickfigur eines kleinen schwarzen Grabtiers mit roter Nase und blauer Latzhose begeistert seit den 1950er Jahren Kinder weltweit?",
          "o": [
            "Der kleine Maulwurf",
            "Biene Maja",
            "Schnuffel",
            "Pittiplatsch"
          ],
          "a": 0,
          "tip": "Auf Tschechisch heißt das Tier „Krtek“.",
          "exp": "Der kleine Maulwurf wurde vom tschechischen Zeichner Zdeněk Miler erschaffen."
        },
        {
          "q": "Welche zeichentrickfigur eines kleinen schwarzen Grabtiers mit roter Nase und blauer Latzhose begeistert seit den 1950er Jahren Kinder weltweit?",
          "o": [
            "Der kleine Maulwurf",
            "Biene Maja",
            "Schnuffel",
            "Pittiplatsch"
          ],
          "a": 0,
          "tip": "Auf Tschechisch heißt das Tier „Krtek“.",
          "exp": "Der kleine Maulwurf wurde vom tschechischen Zeichner Zdeněk Miler erschaffen."
        }
      ],
      "2": [
        {
          "q": "Welches Hopfengetränk hat in diesem Land die weltweit höchste Pro-Kopf-Menge beim Konsum und stammt z. B. aus der Stadt Pilsen?",
          "o": [
            "Wein",
            "Bier",
            "Cider",
            "Met"
          ],
          "a": 1,
          "tip": "Die Brauart „Pils“ ist nach einer tschechischen Stadt benannt.",
          "exp": "Tschechien hält seit Jahren den Rekord beim weltweiten Bierkonsum pro Kopf."
        },
        {
          "q": "Welches Hopfengetränk hat in diesem Land die weltweit höchste Pro-Kopf-Menge beim Konsum und stammt z. B. aus der Stadt Pilsen?",
          "o": [
            "Wein",
            "Bier",
            "Cider",
            "Met"
          ],
          "a": 1,
          "tip": "Die Brauart „Pils“ ist nach einer tschechischen Stadt benannt.",
          "exp": "Tschechien hält seit Jahren den Rekord beim weltweiten Bierkonsum pro Kopf."
        }
      ],
      "3": [
        {
          "q": "Welches mystische Tonwesen soll laut einer Prager Legende im 16. Jahrhundert von Rabbi Löw erschaffen worden sein, um die Menschen zu beschützen?",
          "o": [
            "Der Golem",
            "Der Frankenstein",
            "Der Wassermann",
            "Der Gargoyle"
          ],
          "a": 0,
          "tip": "Das Wesen bestand aus Lehm und Erde.",
          "exp": "Die Legende vom Prager Golem inspirierte weltweit Fantasy-Autoren."
        },
        {
          "q": "Welches mystische Tonwesen soll laut einer Prager Legende im 16. Jahrhundert von Rabbi Löw erschaffen worden sein, um die Menschen zu beschützen?",
          "o": [
            "Der Golem",
            "Der Frankenstein",
            "Der Wassermann",
            "Der Gargoyle"
          ],
          "a": 0,
          "tip": "Das Wesen bestand aus Lehm und Erde.",
          "exp": "Die Legende vom Prager Golem inspirierte weltweit Fantasy-Autoren."
        }
      ]
    },
    "Ungarn": {
      "1": [
        {
          "q": "Welcher rote Gewürzpaprika gibt dem traditionellen Kesselsuppen-Gericht seine typische Farbe und Schärfe?",
          "o": [
            "Curry",
            "Paprikapulver",
            "Safran",
            "Chili"
          ],
          "a": 1,
          "tip": "Das Gericht selbst wird oft fälschlicherweise als „Gulasch“ bezeichnet (in Wahrheit ist es eine Suppe).",
          "exp": "Ungarischer Paprika ist weltweit für seine Qualität und sein Aroma bekannt."
        },
        {
          "q": "Welcher rote Gewürzpaprika gibt dem traditionellen Kesselsuppen-Gericht seine typische Farbe und Schärfe?",
          "o": [
            "Curry",
            "Paprikapulver",
            "Safran",
            "Chili"
          ],
          "a": 1,
          "tip": "Das Gericht selbst wird oft fälschlicherweise als „Gulasch“ bezeichnet (in Wahrheit ist es eine Suppe).",
          "exp": "Ungarischer Paprika ist weltweit für seine Qualität und sein Aroma bekannt."
        }
      ],
      "2": [
        {
          "q": "Welches gedrehte Gebäck, das über offener Glut gebacken und in Zucker und Nüssen gewälzt wird, ist der bekannteste Straßen-Snack?",
          "o": [
            "Kürtőskalács",
            "Lángos",
            "Churros",
            "Donut"
          ],
          "a": 0,
          "tip": "Es wird auch Schornsteinkuchen genannt, weil der Dampf oben heraussteigt.",
          "exp": "Kürtőskalács stammt ursprünglich aus Siebenbürgen."
        },
        {
          "q": "Welches gedrehte Gebäck, das über offener Glut gebacken und in Zucker und Nüssen gewälzt wird, ist der bekannteste Straßen-Snack?",
          "o": [
            "Kürtőskalács",
            "Lángos",
            "Churros",
            "Donut"
          ],
          "a": 0,
          "tip": "Es wird auch Schornsteinkuchen genannt, weil der Dampf oben heraussteigt.",
          "exp": "Kürtőskalács stammt ursprünglich aus Siebenbürgen."
        }
      ],
      "3": [
        {
          "q": "Welches knifflige 3D-Drehrätsel mit 6 farbigen Seiten erfand der Architekturprofessor Ernő Rubik im Jahr 1974?",
          "o": [
            "Das Tangram",
            "Der Rubik’s Cube",
            "Sudoku",
            "Das Solitär"
          ],
          "a": 1,
          "tip": "Es trägt den Namen seines Erfinders.",
          "exp": "Der Rubik's Cube ist eines der meistverkauften Geduldspiele weltweit."
        },
        {
          "q": "Welches knifflige 3D-Drehrätsel mit 6 farbigen Seiten erfand der Architekturprofessor Ernő Rubik im Jahr 1974?",
          "o": [
            "Das Tangram",
            "Der Rubik’s Cube",
            "Sudoku",
            "Das Solitär"
          ],
          "a": 1,
          "tip": "Es trägt den Namen seines Erfinders.",
          "exp": "Der Rubik's Cube ist eines der meistverkauften Geduldspiele weltweit."
        }
      ]
    },
    "Zypern": {
      "1": [
        {
          "q": "Welcher weiße, feste Käse, der beim Grillen oder Braten nicht schmilzt, ist die bekannteste kulinarische Spezialität der Insel?",
          "o": [
            "Feta",
            "Halloumi",
            "Mozzarella",
            "Parmesan"
          ],
          "a": 1,
          "tip": "Er wird oft aus Schaf- und Ziegenmilch hergestellt und quietscht leicht beim Kauen.",
          "exp": "Halloumi besitzt einen EU-weit geschützten Ursprungsstatus."
        },
        {
          "q": "Welcher weiße, feste Käse, der beim Grillen oder Braten nicht schmilzt, ist die bekannteste kulinarische Spezialität der Insel?",
          "o": [
            "Feta",
            "Halloumi",
            "Mozzarella",
            "Parmesan"
          ],
          "a": 1,
          "tip": "Er wird oft aus Schaf- und Ziegenmilch hergestellt und quietscht leicht beim Kauen.",
          "exp": "Halloumi besitzt einen EU-weit geschützten Ursprungsstatus."
        }
      ],
      "2": [
        {
          "q": "Welches Tier ziert die Münzen und Briefmarken des Landes und gilt als geschütztes Symbol der Bergregionen?",
          "o": [
            "Das Zypern-Mufflon",
            "Der Esel",
            "Der Flamingo",
            "Die Meeresschildkröte"
          ],
          "a": 0,
          "tip": "Es ist eine scheue Wildschaf-Art mit geschwungenen Hörnern.",
          "exp": "Das Zypern-Mufflon lebt wild im bewaldeten Troodos-Gebirge."
        },
        {
          "q": "Welches Tier ziert die Münzen und Briefmarken des Landes und gilt als geschütztes Symbol der Bergregionen?",
          "o": [
            "Das Zypern-Mufflon",
            "Der Esel",
            "Der Flamingo",
            "Die Meeresschildkröte"
          ],
          "a": 0,
          "tip": "Es ist eine scheue Wildschaf-Art mit geschwungenen Hörnern.",
          "exp": "Das Zypern-Mufflon lebt wild im bewaldeten Troodos-Gebirge."
        }
      ],
      "3": [
        {
          "q": "Welche Liebesgöttin aus der antiken griechischen Mythologie soll an den Felsen von Petra tou Romiou aus dem Meeresschaum entstiegen sein?",
          "o": [
            "Athena",
            "Aphrodite",
            "Hera",
            "Artemis"
          ],
          "a": 1,
          "tip": "Bei den Römern hieß diese Göttin „Venus“.",
          "exp": "Zypern wird in der antiken Sage oft als die Insel der Aphrodite bezeichnet."
        },
        {
          "q": "Welche Liebesgöttin aus der antiken griechischen Mythologie soll an den Felsen von Petra tou Romiou aus dem Meeresschaum entstiegen sein?",
          "o": [
            "Athena",
            "Aphrodite",
            "Hera",
            "Artemis"
          ],
          "a": 1,
          "tip": "Bei den Römern hieß diese Göttin „Venus“.",
          "exp": "Zypern wird in der antiken Sage oft als die Insel der Aphrodite bezeichnet."
        }
      ]
    }
  },
  "5": {
    "Belgien": {
      "1": [
        {
          "q": "In welcher Stadt befindet sich der zweitgrößte Seehafen Europas, der als wichtiger Umschlagplatz für Chemie, Autos und Container gilt?",
          "o": [
            "Rotterdam",
            "Antwerpen",
            "Hamburg",
            "Marseille"
          ],
          "a": 1,
          "tip": "Die Stadt liegt an der Schelde im Norden des Landes.",
          "exp": "Der Hafen von Antwerpen ist ein zentraler Wirtschaftsmotor Belgiens."
        },
        {
          "q": "In welcher Stadt befindet sich der zweitgrößte Seehafen Europas, der als wichtiger Umschlagplatz für Chemie, Autos und Container gilt?",
          "o": [
            "Rotterdam",
            "Antwerpen",
            "Hamburg",
            "Marseille"
          ],
          "a": 1,
          "tip": "Die Stadt liegt an der Schelde im Norden des Landes.",
          "exp": "Der Hafen von Antwerpen ist ein zentraler Wirtschaftsmotor Belgiens."
        }
      ],
      "2": [
        {
          "q": "Dieses Land gehört zu den wenigen EU-Staaten, in denen Löhne und Gehälter automatisch an welche Wirtschaftskennzahl angepasst werden?",
          "o": [
            "Die Inflationsrate",
            "Der Aktienindex",
            "Der Goldpreis",
            "Der Wechselkurs des US-Dollars"
          ],
          "a": 0,
          "tip": "Diese automatische Anpassung soll die Kaufkraft der Bürger bei Preissteigerungen sichern.",
          "exp": "Die Indexierung der Löhne sichert die Kaufkraft der Arbeitnehmer automatisch ab."
        },
        {
          "q": "Dieses Land gehört zu den wenigen EU-Staaten, in denen Löhne und Gehälter automatisch an welche Wirtschaftskennzahl angepasst werden?",
          "o": [
            "Die Inflationsrate",
            "Der Aktienindex",
            "Der Goldpreis",
            "Der Wechselkurs des US-Dollars"
          ],
          "a": 0,
          "tip": "Diese automatische Anpassung soll die Kaufkraft der Bürger bei Preissteigerungen sichern.",
          "exp": "Die Indexierung der Löhne sichert die Kaufkraft der Arbeitnehmer automatisch ab."
        }
      ],
      "3": [
        {
          "q": "In welcher Stadt hat die Europäische Investitionsbank (EIB) zwar nicht ihren Hauptsitz, aber welche Institution regelt die Abwicklung von Wertpapiergeschäften über den Finanzplatz der Hauptstadt?",
          "o": [
            "Euroclear",
            "Wall Street",
            "Börse Frankfurt",
            "NASDAQ"
          ],
          "a": 0,
          "tip": "Der Finanzdienstleister hat seinen Sitz im Zentrum des Landes nahe den EU-Institutionen.",
          "exp": "Euroclear ist einer der weltweit größten Abwickler für Wertpapiertransaktionen."
        },
        {
          "q": "In welcher Stadt hat die Europäische Investitionsbank (EIB) zwar nicht ihren Hauptsitz, aber welche Institution regelt die Abwicklung von Wertpapiergeschäften über den Finanzplatz der Hauptstadt?",
          "o": [
            "Euroclear",
            "Wall Street",
            "Börse Frankfurt",
            "NASDAQ"
          ],
          "a": 0,
          "tip": "Der Finanzdienstleister hat seinen Sitz im Zentrum des Landes nahe den EU-Institutionen.",
          "exp": "Euroclear ist einer der weltweit größten Abwickler für Wertpapiertransaktionen."
        }
      ]
    },
    "Bulgarien": {
      "1": [
        {
          "q": "Welcher steuerliche Anreiz mit einem festen Steuersatz von nur 10 % zieht viele ausländische Unternehmen und digitale Nomaden an?",
          "o": [
            "Die progressive Einkommensteuer",
            "Die Flat Tax",
            "Die Luxussteuer",
            "Die Finanztransaktionssteuer"
          ],
          "a": 1,
          "tip": "Alle Einkommen werden unabhängig von der Höhe mit genau demselben Prozentsatz besteuert.",
          "exp": "Bulgarien hat mit 10 % eine der niedrigsten Flat Taxes in Europa."
        },
        {
          "q": "Welcher steuerliche Anreiz mit einem festen Steuersatz von nur 10 % zieht viele ausländische Unternehmen und digitale Nomaden an?",
          "o": [
            "Die progressive Einkommensteuer",
            "Die Flat Tax",
            "Die Luxussteuer",
            "Die Finanztransaktionssteuer"
          ],
          "a": 1,
          "tip": "Alle Einkommen werden unabhängig von der Höhe mit genau demselben Prozentsatz besteuert.",
          "exp": "Bulgarien hat mit 10 % eine der niedrigsten Flat Taxes in Europa."
        }
      ],
      "2": [
        {
          "q": "An welche europäische Leitwährung ist die nationale Währung (Lew) über ein festes Wechselkurssystem (Currency Board) gebunden?",
          "o": [
            "An den Schweizer Franken",
            "An den Euro",
            "An das Britische Pfund",
            "An den US-Dollar"
          ],
          "a": 1,
          "tip": "Ein Euro entspricht genau 1,95583 dieser Landeswährung.",
          "exp": "Der bulgarische Lew ist fest an den Euro gekoppelt."
        },
        {
          "q": "An welche europäische Leitwährung ist die nationale Währung (Lew) über ein festes Wechselkurssystem (Currency Board) gebunden?",
          "o": [
            "An den Schweizer Franken",
            "An den Euro",
            "An das Britische Pfund",
            "An den US-Dollar"
          ],
          "a": 1,
          "tip": "Ein Euro entspricht genau 1,95583 dieser Landeswährung.",
          "exp": "Der bulgarische Lew ist fest an den Euro gekoppelt."
        }
      ],
      "3": [
        {
          "q": "Welcher Wirtschaftszweig im Landesinneren profitiert enorm vom Anbau von Rosenblüten für die weltweite Kosmetikindustrie?",
          "o": [
            "Die Pharmazie und Parfümöl-Produktion",
            "Die Schwerindustrie",
            "Die Halbleiterfertigung",
            "Die Papierherstellung"
          ],
          "a": 0,
          "tip": "Das ätherische Öl ist eines der teuersten Exportprodukte des Landes.",
          "exp": "Bulgariens Rosenöl ist weltweit für Parfüms gefragt."
        },
        {
          "q": "Welcher Wirtschaftszweig im Landesinneren profitiert enorm vom Anbau von Rosenblüten für die weltweite Kosmetikindustrie?",
          "o": [
            "Die Pharmazie und Parfümöl-Produktion",
            "Die Schwerindustrie",
            "Die Halbleiterfertigung",
            "Die Papierherstellung"
          ],
          "a": 0,
          "tip": "Das ätherische Öl ist eines der teuersten Exportprodukte des Landes.",
          "exp": "Bulgariens Rosenöl ist weltweit für Parfüms gefragt."
        }
      ]
    },
    "Dänemark": {
      "1": [
        {
          "q": "Welcher weltweite Marktführer in der Container-Schifffahrt hat seinen Hauptsitz in diesem Land?",
          "o": [
            "MSC",
            "Maersk",
            "Hapag-Lloyd",
            "CMA CGM"
          ],
          "a": 1,
          "tip": "Die riesigen blauen Containerschiffe tragen einen siebenzackigen Stern im Logo.",
          "exp": "Maersk ist eine der größten Containerschiffs-Reedereien der Welt."
        },
        {
          "q": "Welcher weltweite Marktführer in der Container-Schifffahrt hat seinen Hauptsitz in diesem Land?",
          "o": [
            "MSC",
            "Maersk",
            "Hapag-Lloyd",
            "CMA CGM"
          ],
          "a": 1,
          "tip": "Die riesigen blauen Containerschiffe tragen einen siebenzackigen Stern im Logo.",
          "exp": "Maersk ist eine der größten Containerschiffs-Reedereien der Welt."
        }
      ],
      "2": [
        {
          "q": "Aus welchem Grund zahlt das Land bis heute nicht mit dem Euro, obwohl es alle wirtschaftlichen Kriterien erfüllt?",
          "o": [
            "Die EU hat den Zutritt verwehrt",
            "Die Bevölkerung stimmte in einer Volksabstimmung dagegen",
            "Das Land hat keine eigene Zentralbank",
            "Der Euro ist dort gesetzlich verboten"
          ],
          "a": 1,
          "tip": "Das Land nutzt eine vereinbarte Duldung (Opt-out) nach einem Referendum.",
          "exp": "Dänemark lehnte den Euro im Jahr 2000 in einer Volksabstimmung ab."
        },
        {
          "q": "Aus welchem Grund zahlt das Land bis heute nicht mit dem Euro, obwohl es alle wirtschaftlichen Kriterien erfüllt?",
          "o": [
            "Die EU hat den Zutritt verwehrt",
            "Die Bevölkerung stimmte in einer Volksabstimmung dagegen",
            "Das Land hat keine eigene Zentralbank",
            "Der Euro ist dort gesetzlich verboten"
          ],
          "a": 1,
          "tip": "Das Land nutzt eine vereinbarte Duldung (Opt-out) nach einem Referendum.",
          "exp": "Dänemark lehnte den Euro im Jahr 2000 in einer Volksabstimmung ab."
        }
      ],
      "3": [
        {
          "q": "Welcher Pharmakonzern aus diesem Land wurde durch seine Diabetes-Medikamente und Abnehm-Spritzen zum wertvollsten Unternehmen Europas?",
          "o": [
            "Roche",
            "Novo Nordisk",
            "Sanofi",
            "Bayer"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit den Wörtern „Novo...“.",
          "exp": "Novo Nordisk hat durch seine Medikamente einen enormen Börsenwert erreicht."
        },
        {
          "q": "Welcher Pharmakonzern aus diesem Land wurde durch seine Diabetes-Medikamente und Abnehm-Spritzen zum wertvollsten Unternehmen Europas?",
          "o": [
            "Roche",
            "Novo Nordisk",
            "Sanofi",
            "Bayer"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit den Wörtern „Novo...“.",
          "exp": "Novo Nordisk hat durch seine Medikamente einen enormen Börsenwert erreicht."
        }
      ]
    },
    "Deutschland": {
      "1": [
        {
          "q": "Welcher Industriezweig gilt mit Marken wie Volkswagen, BMW und Mercedes-Benz als der wichtigste Motor der heimischen Wirtschaft?",
          "o": [
            "Die Textilindustrie",
            "Die Automobilindustrie",
            "Die Uhrenindustrie",
            "Die Spielzeugindustrie"
          ],
          "a": 1,
          "tip": "Das Land ist weltweit berühmt für den Bau hochwertiger Fahrzeuge.",
          "exp": "Die Automobilindustrie ist der umsatzstärkste Industriezweig Deutschlands."
        },
        {
          "q": "Welcher Industriezweig gilt mit Marken wie Volkswagen, BMW und Mercedes-Benz als der wichtigste Motor der heimischen Wirtschaft?",
          "o": [
            "Die Textilindustrie",
            "Die Automobilindustrie",
            "Die Uhrenindustrie",
            "Die Spielzeugindustrie"
          ],
          "a": 1,
          "tip": "Das Land ist weltweit berühmt für den Bau hochwertiger Fahrzeuge.",
          "exp": "Die Automobilindustrie ist der umsatzstärkste Industriezweig Deutschlands."
        }
      ],
      "2": [
        {
          "q": "Welches Konzept beschreibt die Wirtschaftsordnung des Landes, die freien Markt wettbewerblich nutzt, aber durch sozialen Ausgleich ergänzt?",
          "o": [
            "Planwirtschaft",
            "Soziale Marktwirtschaft",
            "Reine Marktwirtschaft",
            "Feudalismus"
          ],
          "a": 1,
          "tip": "Ludwig Erhard gilt als einer der Gründerväter dieses Modells.",
          "exp": "Die Soziale Marktwirtschaft verbindet wirtschaftliche Freiheit mit sozialer Gerechtigkeit."
        },
        {
          "q": "Welches Konzept beschreibt die Wirtschaftsordnung des Landes, die freien Markt wettbewerblich nutzt, aber durch sozialen Ausgleich ergänzt?",
          "o": [
            "Planwirtschaft",
            "Soziale Marktwirtschaft",
            "Reine Marktwirtschaft",
            "Feudalismus"
          ],
          "a": 1,
          "tip": "Ludwig Erhard gilt als einer der Gründerväter dieses Modells.",
          "exp": "Die Soziale Marktwirtschaft verbindet wirtschaftliche Freiheit mit sozialer Gerechtigkeit."
        }
      ],
      "3": [
        {
          "q": "Welcher wichtigste Aktienindex fasst die 40 größten und umsatzstärksten börsennotierten Unternehmen des Landes zusammen?",
          "o": [
            "Dow Jones",
            "DAX",
            "ATX",
            "CAC 40"
          ],
          "a": 1,
          "tip": "Die Abkürzung steht für „Deutscher Aktienindex“.",
          "exp": "Der DAX misst die Wertentwicklung der 40 größten deutschen Aktiengesellschaften."
        },
        {
          "q": "Welcher wichtigste Aktienindex fasst die 40 größten und umsatzstärksten börsennotierten Unternehmen des Landes zusammen?",
          "o": [
            "Dow Jones",
            "DAX",
            "ATX",
            "CAC 40"
          ],
          "a": 1,
          "tip": "Die Abkürzung steht für „Deutscher Aktienindex“.",
          "exp": "Der DAX misst die Wertentwicklung der 40 größten deutschen Aktiengesellschaften."
        }
      ]
    },
    "Estland": {
      "1": [
        {
          "q": "Welcher weltbekannte Internet-Videotelefonie-Dienst wurde Anfang der 2000er Jahre von Software-Entwicklern aus diesem baltischen Land erfunden?",
          "o": [
            "Zoom",
            "Skype",
            "WhatsApp",
            "Teams"
          ],
          "a": 1,
          "tip": "Der Dienst hat ein blaues S-Logo.",
          "exp": "Skype wurde von estnischen Entwicklern mitbegründet und aufgebaut."
        },
        {
          "q": "Welcher weltbekannte Internet-Videotelefonie-Dienst wurde Anfang der 2000er Jahre von Software-Entwicklern aus diesem baltischen Land erfunden?",
          "o": [
            "Zoom",
            "Skype",
            "WhatsApp",
            "Teams"
          ],
          "a": 1,
          "tip": "Der Dienst hat ein blaues S-Logo.",
          "exp": "Skype wurde von estnischen Entwicklern mitbegründet und aufgebaut."
        }
      ],
      "2": [
        {
          "q": "Welches einzigartige Steuersystem nutzt das Land, um Investitionen von Unternehmen anzulocken?",
          "o": [
            "Einbehaltene und wiederinvestierte Gewinne von Unternehmen sind steuerfrei",
            "Es gibt überhaupt keine Mehrwertsteuer",
            "Unternehmen zahlen 80 % Steuern",
            "Bargeld ist gesetzlich verboten"
          ],
          "a": 0,
          "tip": "Erst wenn Gewinne an Eigentümer ausgeschüttet werden, fällt Steuer an.",
          "exp": "Reinvestierte Gewinne werden in Estland nicht besteuert, was Firmen anzieht."
        },
        {
          "q": "Welches einzigartige Steuersystem nutzt das Land, um Investitionen von Unternehmen anzulocken?",
          "o": [
            "Einbehaltene und wiederinvestierte Gewinne von Unternehmen sind steuerfrei",
            "Es gibt überhaupt keine Mehrwertsteuer",
            "Unternehmen zahlen 80 % Steuern",
            "Bargeld ist gesetzlich verboten"
          ],
          "a": 0,
          "tip": "Erst wenn Gewinne an Eigentümer ausgeschüttet werden, fällt Steuer an.",
          "exp": "Reinvestierte Gewinne werden in Estland nicht besteuert, was Firmen anzieht."
        }
      ],
      "3": [
        {
          "q": "Welches Programm ermöglicht es Menschen aus aller Welt, eine digitale Identität in diesem Land zu beantragen und dort online Firmen zu gründen?",
          "o": [
            "Green Card",
            "e-Residency",
            "Digital Nomads Visa",
            "Golden Passport"
          ],
          "a": 1,
          "tip": "Es macht einen zum „elektronischen Einwohner“.",
          "exp": "Die e-Residency erlaubt es Ausländern, digitale Dienste wie Firmengründungen zu nutzen."
        },
        {
          "q": "Welches Programm ermöglicht es Menschen aus aller Welt, eine digitale Identität in diesem Land zu beantragen und dort online Firmen zu gründen?",
          "o": [
            "Green Card",
            "e-Residency",
            "Digital Nomads Visa",
            "Golden Passport"
          ],
          "a": 1,
          "tip": "Es macht einen zum „elektronischen Einwohner“.",
          "exp": "Die e-Residency erlaubt es Ausländern, digitale Dienste wie Firmengründungen zu nutzen."
        }
      ]
    },
    "Finnland": {
      "1": [
        {
          "q": "Welches einst weltgrößte Mobilfunkunternehmen hatte seinen Hauptsitz in diesem nordischen Staat?",
          "o": [
            "Samsung",
            "Nokia",
            "Sony",
            "Apple"
          ],
          "a": 1,
          "tip": "Bekannt für legendäre Robuste Handys wie das Modell 3310.",
          "exp": "Nokia war über Jahre hinweg Weltmarktführer bei Mobiltelefonen."
        },
        {
          "q": "Welches einst weltgrößte Mobilfunkunternehmen hatte seinen Hauptsitz in diesem nordischen Staat?",
          "o": [
            "Samsung",
            "Nokia",
            "Sony",
            "Apple"
          ],
          "a": 1,
          "tip": "Bekannt für legendäre Robuste Handys wie das Modell 3310.",
          "exp": "Nokia war über Jahre hinweg Weltmarktführer bei Mobiltelefonen."
        }
      ],
      "2": [
        {
          "q": "Welcher Rohstoff aus den riesigen Taiga-Wäldern bildet traditionell das Rückgrat der Exportwirtschaft?",
          "o": [
            "Erdöl",
            "Holz",
            "Eisenerz",
            "Bauxit"
          ],
          "a": 1,
          "tip": "Das Land ist zu über 70 % mit Wald bedeckt.",
          "exp": "Finnlands Forstwirtschaft gehört zu den größten Holzexporteuren Europas."
        },
        {
          "q": "Welcher Rohstoff aus den riesigen Taiga-Wäldern bildet traditionell das Rückgrat der Exportwirtschaft?",
          "o": [
            "Erdöl",
            "Holz",
            "Eisenerz",
            "Bauxit"
          ],
          "a": 1,
          "tip": "Das Land ist zu über 70 % mit Wald bedeckt.",
          "exp": "Finnlands Forstwirtschaft gehört zu den größten Holzexporteuren Europas."
        }
      ],
      "3": [
        {
          "q": "Welcher Entwickler von Handyspielen aus diesem Land feierte weltweite Erfolge mit Spielen wie „Clash of Clans“ und „Hay Day“?",
          "o": [
            "Rovio",
            "Supercell",
            "Mojang",
            "Epic Games"
          ],
          "a": 1,
          "tip": "Der Firmenname lautet übersetzt „Superzelle“.",
          "exp": "Supercell ist eines der erfolgreichsten Mobile-Gaming-Studios weltweit."
        },
        {
          "q": "Welcher Entwickler von Handyspielen aus diesem Land feierte weltweite Erfolge mit Spielen wie „Clash of Clans“ und „Hay Day“?",
          "o": [
            "Rovio",
            "Supercell",
            "Mojang",
            "Epic Games"
          ],
          "a": 1,
          "tip": "Der Firmenname lautet übersetzt „Superzelle“.",
          "exp": "Supercell ist eines der erfolgreichsten Mobile-Gaming-Studios weltweit."
        }
      ]
    },
    "Frankreich": {
      "1": [
        {
          "q": "Für welche weltweite Branche mit Konzernen wie LVMH (Moët Hennessy Louis Vuitton) ist dieses Land die unangefochtene Nummer 1?",
          "o": [
            "Schwerer Maschinenbau",
            "Luxusgüter und Mode",
            "Unterhaltungselektronik",
            "Bergbau"
          ],
          "a": 1,
          "tip": "Marken wie Chanel, Dior oder Louis Vuitton prägen dieses Image.",
          "exp": "Die französische Luxusgüterindustrie gehört zu den erfolgreichsten Exportbranchen."
        },
        {
          "q": "Für welche weltweite Branche mit Konzernen wie LVMH (Moët Hennessy Louis Vuitton) ist dieses Land die unangefochtene Nummer 1?",
          "o": [
            "Schwerer Maschinenbau",
            "Luxusgüter und Mode",
            "Unterhaltungselektronik",
            "Bergbau"
          ],
          "a": 1,
          "tip": "Marken wie Chanel, Dior oder Louis Vuitton prägen dieses Image.",
          "exp": "Die französische Luxusgüterindustrie gehört zu den erfolgreichsten Exportbranchen."
        }
      ],
      "2": [
        {
          "q": "Aus welcher Energiequelle gewinnt das Land rund 60 bis 70 % seines gesamten Strombedarfs?",
          "o": [
            "Kohlekraftwerke",
            "Kernkraft",
            "Windkraft",
            "Wasserkraft"
          ],
          "a": 1,
          "tip": "Das Land betreibt über 50 Reaktoren im ganzen Staat.",
          "exp": "Frankreich setzt stark auf Atomstrom zur Energieversorgung."
        },
        {
          "q": "Aus welcher Energiequelle gewinnt das Land rund 60 bis 70 % seines gesamten Strombedarfs?",
          "o": [
            "Kohlekraftwerke",
            "Kernkraft",
            "Windkraft",
            "Wasserkraft"
          ],
          "a": 1,
          "tip": "Das Land betreibt über 50 Reaktoren im ganzen Staat.",
          "exp": "Frankreich setzt stark auf Atomstrom zur Energieversorgung."
        }
      ],
      "3": [
        {
          "q": "Welches Europäische Luft- und Raumfahrtkonsortium baut in der Nähe von Toulouse Passagierflugzeuge als größter Konkurrent von Boeing?",
          "o": [
            "Lockheed Martin",
            "Airbus",
            "Bombardier",
            "Embraer"
          ],
          "a": 1,
          "tip": "Der Name bedeutet übersetzt „Luft-Bus“.",
          "exp": "Airbus hat seinen Sitz in Toulouse und baut einen Großteil aller Verkehrsflugzeuge."
        },
        {
          "q": "Welches Europäische Luft- und Raumfahrtkonsortium baut in der Nähe von Toulouse Passagierflugzeuge als größter Konkurrent von Boeing?",
          "o": [
            "Lockheed Martin",
            "Airbus",
            "Bombardier",
            "Embraer"
          ],
          "a": 1,
          "tip": "Der Name bedeutet übersetzt „Luft-Bus“.",
          "exp": "Airbus hat seinen Sitz in Toulouse und baut einen Großteil aller Verkehrsflugzeuge."
        }
      ]
    },
    "Griechenland": {
      "1": [
        {
          "q": "Welche traditionelle Branche mit riesigen Tanker- und Frachtflotten macht dieses Land zu einer globalen Supermacht auf den Weltmeeren?",
          "o": [
            "Die Seeschifffahrt",
            "Die Raumfahrt",
            "Der Eisenbahnbau",
            "Die Halbleiterindustrie"
          ],
          "a": 0,
          "tip": "Reeder wie Aristoteles Onassis wurden damit Steinreich.",
          "exp": "Griechenland besitzt die größte Handelsflotte der Welt nach Tonnage."
        },
        {
          "q": "Welche traditionelle Branche mit riesigen Tanker- und Frachtflotten macht dieses Land zu einer globalen Supermacht auf den Weltmeeren?",
          "o": [
            "Die Seeschifffahrt",
            "Die Raumfahrt",
            "Der Eisenbahnbau",
            "Die Halbleiterindustrie"
          ],
          "a": 0,
          "tip": "Reeder wie Aristoteles Onassis wurden damit Steinreich.",
          "exp": "Griechenland besitzt die größte Handelsflotte der Welt nach Tonnage."
        }
      ],
      "2": [
        {
          "q": "Welcher Dienstleistungssektor ist neben der Schifffahrt der wichtigste Arbeitgeber und bringt am meisten Devisen ins Land?",
          "o": [
            "Der Tourismus",
            "Der Bergbau",
            "Die Automobilherstellung",
            "Die Holzverarbeitung"
          ],
          "a": 0,
          "tip": "Millionen Menschen besuchen im Sommer die Inseln und antiken Stätten.",
          "exp": "Der Tourismus trägt rund ein Fünftel zur griechischen Wirtschaftsleistung bei."
        },
        {
          "q": "Welcher Dienstleistungssektor ist neben der Schifffahrt der wichtigste Arbeitgeber und bringt am meisten Devisen ins Land?",
          "o": [
            "Der Tourismus",
            "Der Bergbau",
            "Die Automobilherstellung",
            "Die Holzverarbeitung"
          ],
          "a": 0,
          "tip": "Millionen Menschen besuchen im Sommer die Inseln und antiken Stätten.",
          "exp": "Der Tourismus trägt rund ein Fünftel zur griechischen Wirtschaftsleistung bei."
        }
      ],
      "3": [
        {
          "q": "Welches Agrarprodukt gilt als das „flüssige Gold“ des Landes und ist ein Hauptschwerpunkt des Exports im Binnenmarkt?",
          "o": [
            "Ahornsirup",
            "Olivenöl",
            "Palmöl",
            "Sonnenblumenöl"
          ],
          "a": 1,
          "tip": "Es ist die Basis der gesunden mediterranen Küche.",
          "exp": "Griechenland exportiert hochwertiges, kaltgepresstes Olivenöl weltweit."
        },
        {
          "q": "Welches Agrarprodukt gilt als das „flüssige Gold“ des Landes und ist ein Hauptschwerpunkt des Exports im Binnenmarkt?",
          "o": [
            "Ahornsirup",
            "Olivenöl",
            "Palmöl",
            "Sonnenblumenöl"
          ],
          "a": 1,
          "tip": "Es ist die Basis der gesunden mediterranen Küche.",
          "exp": "Griechenland exportiert hochwertiges, kaltgepresstes Olivenöl weltweit."
        }
      ]
    },
    "Irland": {
      "1": [
        {
          "q": "Aus welchem Grund haben US-Tech-Riesen wie Google, Meta und Apple ihre europäischen Hauptsitze in diesem Land aufgeschlagen?",
          "o": [
            "Wegen des extrem heißen Klimas",
            "Wegen niedriger Unternehmenssteuern und der englischen Sprache",
            "Weil es dort keine Gesetze gibt",
            "Weil dort alle Rohstoffe gefördert werden"
          ],
          "a": 1,
          "tip": "Die Körperschaftsteuer lag lange Zeit bei nur 12,5 %.",
          "exp": "Niedrige Steuern und gut ausgebildete englischsprachige Arbeitskräfte locken US-Firmen."
        },
        {
          "q": "Aus welchem Grund haben US-Tech-Riesen wie Google, Meta und Apple ihre europäischen Hauptsitze in diesem Land aufgeschlagen?",
          "o": [
            "Wegen des extrem heißen Klimas",
            "Wegen niedriger Unternehmenssteuern und der englischen Sprache",
            "Weil es dort keine Gesetze gibt",
            "Weil dort alle Rohstoffe gefördert werden"
          ],
          "a": 1,
          "tip": "Die Körperschaftsteuer lag lange Zeit bei nur 12,5 %.",
          "exp": "Niedrige Steuern und gut ausgebildete englischsprachige Arbeitskräfte locken US-Firmen."
        }
      ],
      "2": [
        {
          "q": "Welcher Begriff beschreibt das rasante Wirtschaftswachstum des Landes in den 1990er und 2000er Jahren in Anlehnung an asiatische Staaten?",
          "o": [
            "Der Keltische Tiger",
            "Der Nordische Bär",
            "Der Atlantische Löwe",
            "Der Grüne Pansen"
          ],
          "a": 0,
          "tip": "Eine Raubkatze steckt im Namen.",
          "exp": "Das irische Wirtschaftswunder brachte dem Land den Spitznamen Keltischer Tiger ein."
        },
        {
          "q": "Welcher Begriff beschreibt das rasante Wirtschaftswachstum des Landes in den 1990er und 2000er Jahren in Anlehnung an asiatische Staaten?",
          "o": [
            "Der Keltische Tiger",
            "Der Nordische Bär",
            "Der Atlantische Löwe",
            "Der Grüne Pansen"
          ],
          "a": 0,
          "tip": "Eine Raubkatze steckt im Namen.",
          "exp": "Das irische Wirtschaftswunder brachte dem Land den Spitznamen Keltischer Tiger ein."
        }
      ],
      "3": [
        {
          "q": "Welches weltbekannte alkoholfreie oder alkoholische Exportgut (ein sehr dunkles Staut-Bier) wird in der St. James’s Gate Brewery gebraut?",
          "o": [
            "Heineken",
            "Guinness",
            "Budweiser",
            "Carlsberg"
          ],
          "a": 1,
          "tip": "Das Symbol der Marke ist eine goldene Harfe.",
          "exp": "Guinness ist ein weltbekanntes dunkles Stout-Bier aus Dublin."
        },
        {
          "q": "Welches weltbekannte alkoholfreie oder alkoholische Exportgut (ein sehr dunkles Staut-Bier) wird in der St. James’s Gate Brewery gebraut?",
          "o": [
            "Heineken",
            "Guinness",
            "Budweiser",
            "Carlsberg"
          ],
          "a": 1,
          "tip": "Das Symbol der Marke ist eine goldene Harfe.",
          "exp": "Guinness ist ein weltbekanntes dunkles Stout-Bier aus Dublin."
        }
      ]
    },
    "Italien": {
      "1": [
        {
          "q": "Welcher Sportwagenhersteller mit dem tänzelnden Pferd im Logo hat seinen Hauptsitz in Maranello?",
          "o": [
            "Lamborghini",
            "Ferrari",
            "Maserati",
            "Alfa Romeo"
          ],
          "a": 1,
          "tip": "Die Rennwagen fahren traditionell in der Farbe „Rosso Corsa“ (Rennrot).",
          "exp": "Ferrari wurde von Enzo Ferrari gegründet und steht für Rennsport-Tradition."
        },
        {
          "q": "Welcher Sportwagenhersteller mit dem tänzelnden Pferd im Logo hat seinen Hauptsitz in Maranello?",
          "o": [
            "Lamborghini",
            "Ferrari",
            "Maserati",
            "Alfa Romeo"
          ],
          "a": 1,
          "tip": "Die Rennwagen fahren traditionell in der Farbe „Rosso Corsa“ (Rennrot).",
          "exp": "Ferrari wurde von Enzo Ferrari gegründet und steht für Rennsport-Tradition."
        }
      ],
      "2": [
        {
          "q": "Wie nennt man das wirtschaftliche Gefälle zwischen dem Industrie-reichen Norden und dem historisch strukturschwächeren Süden des Landes?",
          "o": [
            "Der Ost-West-Konflikt",
            "Die Nord-Süd-Kluft",
            "Der Röstigraben",
            "Das Ruhrgebiets-Phänomen"
          ],
          "a": 1,
          "tip": "Der Süden wird auf Italienisch oft „Mezzogiorno“ genannt.",
          "exp": "Der Mezzogiorno im Süden kämpft historisch mit höherer Arbeitslosigkeit."
        },
        {
          "q": "Wie nennt man das wirtschaftliche Gefälle zwischen dem Industrie-reichen Norden und dem historisch strukturschwächeren Süden des Landes?",
          "o": [
            "Der Ost-West-Konflikt",
            "Die Nord-Süd-Kluft",
            "Der Röstigraben",
            "Das Ruhrgebiets-Phänomen"
          ],
          "a": 1,
          "tip": "Der Süden wird auf Italienisch oft „Mezzogiorno“ genannt.",
          "exp": "Der Mezzogiorno im Süden kämpft historisch mit höherer Arbeitslosigkeit."
        }
      ],
      "3": [
        {
          "q": "Welcher Brillenkonzern (EssilorLuxottica) aus diesem Land ist der größte Brillenhersteller der Welt (u. a. Ray-Ban, Oakley)?",
          "o": [
            "Luxottica",
            "Gucci",
            "Safilo",
            "Prada"
          ],
          "a": 0,
          "tip": "Der Name setzt sich aus „Lux“ und „Ottica“ zusammen.",
          "exp": "Luxottica produziert einen Großteil aller Design-Brillengestelle weltweit."
        },
        {
          "q": "Welcher Brillenkonzern (EssilorLuxottica) aus diesem Land ist der größte Brillenhersteller der Welt (u. a. Ray-Ban, Oakley)?",
          "o": [
            "Luxottica",
            "Gucci",
            "Safilo",
            "Prada"
          ],
          "a": 0,
          "tip": "Der Name setzt sich aus „Lux“ und „Ottica“ zusammen.",
          "exp": "Luxottica produziert einen Großteil aller Design-Brillengestelle weltweit."
        }
      ]
    },
    "Kroatien": {
      "1": [
        {
          "q": "Welches Hochtechnologie-Unternehmen für elektrische Hypercars und Batterien (u. a. Modell „Nevera“) stammt aus diesem Adria-Staat?",
          "o": [
            "Tesla",
            "Rimac Automobili",
            "NIO",
            "Polestar"
          ],
          "a": 1,
          "tip": "Der Gründer heißt Mate Rimac.",
          "exp": "Rimac baut die schnellsten straßenzugelassenen Elektro-Hypercars."
        },
        {
          "q": "Welches Hochtechnologie-Unternehmen für elektrische Hypercars und Batterien (u. a. Modell „Nevera“) stammt aus diesem Adria-Staat?",
          "o": [
            "Tesla",
            "Rimac Automobili",
            "NIO",
            "Polestar"
          ],
          "a": 1,
          "tip": "Der Gründer heißt Mate Rimac.",
          "exp": "Rimac baut die schnellsten straßenzugelassenen Elektro-Hypercars."
        }
      ],
      "2": [
        {
          "q": "Welcher Wirtschaftszweig macht mehr als 20 % des gesamten Bruttoinlandsprodukts (BIP) aus und ist damit so hoch wie in kaum einem anderen EU-Land?",
          "o": [
            "Der Tourismus",
            "Die Kohleförderung",
            "Die Schwerindustrie",
            "Der Bausektor"
          ],
          "a": 0,
          "tip": "Die lange Adriaküste zieht im Sommer Millionen Urlauber an.",
          "exp": "Kroatien ist für Einnahmen aus dem Küstentourismus stark sensibilisiert."
        },
        {
          "q": "Welcher Wirtschaftszweig macht mehr als 20 % des gesamten Bruttoinlandsprodukts (BIP) aus und ist damit so hoch wie in kaum einem anderen EU-Land?",
          "o": [
            "Der Tourismus",
            "Die Kohleförderung",
            "Die Schwerindustrie",
            "Der Bausektor"
          ],
          "a": 0,
          "tip": "Die lange Adriaküste zieht im Sommer Millionen Urlauber an.",
          "exp": "Kroatien ist für Einnahmen aus dem Küstentourismus stark sensibilisiert."
        }
      ],
      "3": [
        {
          "q": "Welcher ehemals staatliche Werften- und Schiffbaukomplex in den Städten Pula und Rijeka prägte jahrzehntelang die Industrie des Landes?",
          "o": [
            "Uljanik",
            "Meyer Werft",
            "Damen Shipyards",
            "Fincantieri"
          ],
          "a": 0,
          "tip": "Der Name der Werft in Pula beginnt mit einem „U“.",
          "exp": "Die Uljanik-Werft baute Riesenschiffe, ging aber in eine schwere Finanzkrise."
        },
        {
          "q": "Welcher ehemals staatliche Werften- und Schiffbaukomplex in den Städten Pula und Rijeka prägte jahrzehntelang die Industrie des Landes?",
          "o": [
            "Uljanik",
            "Meyer Werft",
            "Damen Shipyards",
            "Fincantieri"
          ],
          "a": 0,
          "tip": "Der Name der Werft in Pula beginnt mit einem „U“.",
          "exp": "Die Uljanik-Werft baute Riesenschiffe, ging aber in eine schwere Finanzkrise."
        }
      ]
    },
    "Lettland": {
      "1": [
        {
          "q": "Welche Fluggesellschaft ist die größte Airline aller drei baltischen Staaten und hat ihren Hauptknotenpunkt in der Hauptstadt?",
          "o": [
            "Ryanair",
            "airBaltic",
            "Lufthansa",
            "Wizz Air"
          ],
          "a": 1,
          "tip": "Der Name zeigt direkt die Zugehörigkeit zur baltischen Region.",
          "exp": "airBaltic ist die staatliche lettische Fluglinie und Marktführer im Baltikum."
        },
        {
          "q": "Welche Fluggesellschaft ist die größte Airline aller drei baltischen Staaten und hat ihren Hauptknotenpunkt in der Hauptstadt?",
          "o": [
            "Ryanair",
            "airBaltic",
            "Lufthansa",
            "Wizz Air"
          ],
          "a": 1,
          "tip": "Der Name zeigt direkt die Zugehörigkeit zur baltischen Region.",
          "exp": "airBaltic ist die staatliche lettische Fluglinie und Marktführer im Baltikum."
        }
      ],
      "2": [
        {
          "q": "Welcher Rohstoff aus der Natur macht einen enormen Teil der verarbeitenden Industrie und der Exporte des Landes aus?",
          "o": [
            "Erdgas",
            "Holz und Holzprodukte",
            "Aluminium",
            "Steinkohle"
          ],
          "a": 1,
          "tip": "Rund die Hälfte der Landesfläche besteht aus Wäldern.",
          "exp": "Holzverarbeitung bildet die tragende Säule der lettischen Exportindustrie."
        },
        {
          "q": "Welcher Rohstoff aus der Natur macht einen enormen Teil der verarbeitenden Industrie und der Exporte des Landes aus?",
          "o": [
            "Erdgas",
            "Holz und Holzprodukte",
            "Aluminium",
            "Steinkohle"
          ],
          "a": 1,
          "tip": "Rund die Hälfte der Landesfläche besteht aus Wäldern.",
          "exp": "Holzverarbeitung bildet die tragende Säule der lettischen Exportindustrie."
        }
      ],
      "3": [
        {
          "q": "Welches IT- und Elektronikunternehmen aus diesem Land ist weltweit bekannt für die Herstellung von WLAN-Routern und Netzwerkgeräten?",
          "o": [
            "MikroTik",
            "TP-Link",
            "Cisco",
            "NETGEAR"
          ],
          "a": 0,
          "tip": "Der Firmenname beschreibt kleine Technologie („Mikro...“).",
          "exp": "MikroTik stellt weltweit geschätzte Profi-Netzwerkausrüstung her."
        },
        {
          "q": "Welches IT- und Elektronikunternehmen aus diesem Land ist weltweit bekannt für die Herstellung von WLAN-Routern und Netzwerkgeräten?",
          "o": [
            "MikroTik",
            "TP-Link",
            "Cisco",
            "NETGEAR"
          ],
          "a": 0,
          "tip": "Der Firmenname beschreibt kleine Technologie („Mikro...“).",
          "exp": "MikroTik stellt weltweit geschätzte Profi-Netzwerkausrüstung her."
        }
      ]
    },
    "Litauen": {
      "1": [
        {
          "q": "Welches europäische Fintech-Unternehmen für Second-Hand-Kleidung () wurde in der Hauptstadt gegründet und wurde zum ersten Milliarden-Startup () des Landes?",
          "o": [
            "Zalando",
            "Vinted",
            "Depop",
            "Willhaben"
          ],
          "a": 1,
          "tip": "Der Slogan lautet: „Du trägst es nicht? Verkaufs auf...“.",
          "exp": "Vinted ist Europas größte Online-Plattform für Second-Hand-Mode."
        },
        {
          "q": "Welches europäische Fintech-Unternehmen für Second-Hand-Kleidung () wurde in der Hauptstadt gegründet und wurde zum ersten Milliarden-Startup () des Landes?",
          "o": [
            "Zalando",
            "Vinted",
            "Depop",
            "Willhaben"
          ],
          "a": 1,
          "tip": "Der Slogan lautet: „Du trägst es nicht? Verkaufs auf...“.",
          "exp": "Vinted ist Europas größte Online-Plattform für Second-Hand-Mode."
        }
      ],
      "2": [
        {
          "q": "Welcher Industriekomplex nahe der Stadt Kėdainiai ist ein wichtiger Produzent für den europäischen Agrarmarkt?",
          "o": [
            "Düngemittelherstellung",
            "Mikrochip-Produktion",
            "Flugzeugbau",
            "Uhrenmanufaktur"
          ],
          "a": 0,
          "tip": "Das Produkt hilft Bauern, Pflanzen besser wachsen zu lassen.",
          "exp": "Düngemittelwerke machen einen wesentlichen Teil der litauischen Chemieindustrie aus."
        },
        {
          "q": "Welcher Industriekomplex nahe der Stadt Kėdainiai ist ein wichtiger Produzent für den europäischen Agrarmarkt?",
          "o": [
            "Düngemittelherstellung",
            "Mikrochip-Produktion",
            "Flugzeugbau",
            "Uhrenmanufaktur"
          ],
          "a": 0,
          "tip": "Das Produkt hilft Bauern, Pflanzen besser wachsen zu lassen.",
          "exp": "Düngemittelwerke machen einen wesentlichen Teil der litauischen Chemieindustrie aus."
        }
      ],
      "3": [
        {
          "q": "Welches schwimmende LNG-Terminal (Flüssigerdgas) im Hafen von Klaipėda machte das Land als erstes baltisches Land komplett unabhängig von russischem Gas?",
          "o": [
            "Nord Stream",
            "Independence",
            "Poseidon",
            "Baltic Pipe"
          ],
          "a": 1,
          "tip": "Das englische Wort bedeutet „Unabhängigkeit“.",
          "exp": "Das LNG-Terminal Independence sichert Litauens unabhängige Gasversorgung."
        },
        {
          "q": "Welches schwimmende LNG-Terminal (Flüssigerdgas) im Hafen von Klaipėda machte das Land als erstes baltisches Land komplett unabhängig von russischem Gas?",
          "o": [
            "Nord Stream",
            "Independence",
            "Poseidon",
            "Baltic Pipe"
          ],
          "a": 1,
          "tip": "Das englische Wort bedeutet „Unabhängigkeit“.",
          "exp": "Das LNG-Terminal Independence sichert Litauens unabhängige Gasversorgung."
        }
      ]
    },
    "Luxemburg": {
      "1": [
        {
          "q": "Welcher Wirtschaftssektor macht dieses kleine Land zu einem der reichsten Staaten der Welt (höchstes BIP pro Kopf in der EU)?",
          "o": [
            "Der Finanz- und Bankensektor",
            "Die Landwirtschaft",
            "Der Tourismus",
            "Die Fischerei"
          ],
          "a": 0,
          "tip": "Zahlreiche internationale Banken und Investmentfonds haben hier ihren Sitz.",
          "exp": "Luxemburg ist das größte Fonds- und Investmentzentrum Europas."
        },
        {
          "q": "Welcher Wirtschaftssektor macht dieses kleine Land zu einem der reichsten Staaten der Welt (höchstes BIP pro Kopf in der EU)?",
          "o": [
            "Der Finanz- und Bankensektor",
            "Die Landwirtschaft",
            "Der Tourismus",
            "Die Fischerei"
          ],
          "a": 0,
          "tip": "Zahlreiche internationale Banken und Investmentfonds haben hier ihren Sitz.",
          "exp": "Luxemburg ist das größte Fonds- und Investmentzentrum Europas."
        }
      ],
      "2": [
        {
          "q": "Welcher weltgrößte Stahlkonzern hat seinen Hauptsitz in der Hauptstadt dieses Staates?",
          "o": [
            "Thyssenkrupp",
            "ArcelorMittal",
            "Voestalpine",
            "POSCO"
          ],
          "a": 1,
          "tip": "Der Name setzt sich aus Arcelor und Mittal zusammen.",
          "exp": "ArcelorMittal entstand durch die Fusion von Arcelor und Mittal Steel."
        },
        {
          "q": "Welcher weltgrößte Stahlkonzern hat seinen Hauptsitz in der Hauptstadt dieses Staates?",
          "o": [
            "Thyssenkrupp",
            "ArcelorMittal",
            "Voestalpine",
            "POSCO"
          ],
          "a": 1,
          "tip": "Der Name setzt sich aus Arcelor und Mittal zusammen.",
          "exp": "ArcelorMittal entstand durch die Fusion von Arcelor und Mittal Steel."
        }
      ],
      "3": [
        {
          "q": "Welcher weltweit führende Satellitenbetreiber hat seinen Hauptsitz auf Schloss Betzdorf in diesem Land?",
          "o": [
            "SES",
            "SpaceX",
            "Eutelsat",
            "Intelsat"
          ],
          "a": 0,
          "tip": "Die Abkürzung hat drei Buchstaben und beginnt mit „S“.",
          "exp": "SES betreibt ein weltweites Netz von Kommunikationssatelliten."
        },
        {
          "q": "Welcher weltweit führende Satellitenbetreiber hat seinen Hauptsitz auf Schloss Betzdorf in diesem Land?",
          "o": [
            "SES",
            "SpaceX",
            "Eutelsat",
            "Intelsat"
          ],
          "a": 0,
          "tip": "Die Abkürzung hat drei Buchstaben und beginnt mit „S“.",
          "exp": "SES betreibt ein weltweites Netz von Kommunikationssatelliten."
        }
      ]
    },
    "Malta": {
      "1": [
        {
          "q": "Welches moderne digitale Geschäftsfeld nutzt den Vorteil von Lizenzen und macht das Land zu einem europäischen Zentrum dieser Branche?",
          "o": [
            "iGaming",
            "Weltraum-Tourismus",
            "Auto-Prototypenbau",
            "Schwerindustrie"
          ],
          "a": 0,
          "tip": "Viele europäische Online-Casino- und Sportwettenanbieter haben hier ihre Lizenz.",
          "exp": "Malta war das erste EU-Land, das Online-Glücksspiel gesetzlich regulierte."
        },
        {
          "q": "Welches moderne digitale Geschäftsfeld nutzt den Vorteil von Lizenzen und macht das Land zu einem europäischen Zentrum dieser Branche?",
          "o": [
            "iGaming",
            "Weltraum-Tourismus",
            "Auto-Prototypenbau",
            "Schwerindustrie"
          ],
          "a": 0,
          "tip": "Viele europäische Online-Casino- und Sportwettenanbieter haben hier ihre Lizenz.",
          "exp": "Malta war das erste EU-Land, das Online-Glücksspiel gesetzlich regulierte."
        }
      ],
      "2": [
        {
          "q": "Welches Register macht die Flagge dieses Landes zur größten Handelsflotte innerhalb der Europäischen Union?",
          "o": [
            "Das Schiffsregister",
            "Das Luftfahrtregister",
            "Das Gold-Register",
            "Das Patentregister"
          ],
          "a": 0,
          "tip": "Tausende Frachtschiffe fahren weltweit unter der rot-weißen Flagge der Insel.",
          "exp": "Malta bietet Reedern Steuervorteile über sein offenes Schiffsregister."
        },
        {
          "q": "Welches Register macht die Flagge dieses Landes zur größten Handelsflotte innerhalb der Europäischen Union?",
          "o": [
            "Das Schiffsregister",
            "Das Luftfahrtregister",
            "Das Gold-Register",
            "Das Patentregister"
          ],
          "a": 0,
          "tip": "Tausende Frachtschiffe fahren weltweit unter der rot-weißen Flagge der Insel.",
          "exp": "Malta bietet Reedern Steuervorteile über sein offenes Schiffsregister."
        }
      ],
      "3": [
        {
          "q": "Welcher Sektor neben Finanzdienstleistungen profitiert stark vom warmen Klima und der englischen Sprache für Sprachschüler?",
          "o": [
            "Der Sprach- und Bildungstourismus",
            "Die Wintersportindustrie",
            "Die Holzverarbeitung",
            "Der Bergbau"
          ],
          "a": 0,
          "tip": "Tausende Jugendliche reisen im Sommer dorthin, um Englisch zu lernen.",
          "exp": "Englische Sprachschulen sind ein tragendes Element der maltesischen Wirtschaft."
        },
        {
          "q": "Welcher Sektor neben Finanzdienstleistungen profitiert stark vom warmen Klima und der englischen Sprache für Sprachschüler?",
          "o": [
            "Der Sprach- und Bildungstourismus",
            "Die Wintersportindustrie",
            "Die Holzverarbeitung",
            "Der Bergbau"
          ],
          "a": 0,
          "tip": "Tausende Jugendliche reisen im Sommer dorthin, um Englisch zu lernen.",
          "exp": "Englische Sprachschulen sind ein tragendes Element der maltesischen Wirtschaft."
        }
      ]
    },
    "Niederlande": {
      "1": [
        {
          "q": "Wie heißt der flächen- und umsatzmäßig größte Seehafen Europas?",
          "o": [
            "Hafen von Antwerpen",
            "Hafen von Rotterdam",
            "Hafen von Hamburg",
            "Hafen von Felixstowe"
          ],
          "a": 1,
          "tip": "Er liegt im Rhein-Maas-Delta im Westen des Landes.",
          "exp": "Der Hafen Rotterdam ist die logistische Drehscheibe für den Binnenmarkt."
        },
        {
          "q": "Wie heißt der flächen- und umsatzmäßig größte Seehafen Europas?",
          "o": [
            "Hafen von Antwerpen",
            "Hafen von Rotterdam",
            "Hafen von Hamburg",
            "Hafen von Felixstowe"
          ],
          "a": 1,
          "tip": "Er liegt im Rhein-Maas-Delta im Westen des Landes.",
          "exp": "Der Hafen Rotterdam ist die logistische Drehscheibe für den Binnenmarkt."
        }
      ],
      "2": [
        {
          "q": "Welches Tech-Unternehmen aus diesem Land baut die weltweit einzigen Spezialmaschinen zur Herstellung modernster Mikrochips?",
          "o": [
            "ASML",
            "Intel",
            "Nvidia",
            "Foxconn"
          ],
          "a": 0,
          "tip": "Die Abkürzung hat vier Buchstaben und beginnt mit „A“.",
          "exp": "ASML besitzt ein Monopol auf die fortschrittlichsten Halbleiter-Belichtungsanlagen."
        },
        {
          "q": "Welches Tech-Unternehmen aus diesem Land baut die weltweit einzigen Spezialmaschinen zur Herstellung modernster Mikrochips?",
          "o": [
            "ASML",
            "Intel",
            "Nvidia",
            "Foxconn"
          ],
          "a": 0,
          "tip": "Die Abkürzung hat vier Buchstaben und beginnt mit „A“.",
          "exp": "ASML besitzt ein Monopol auf die fortschrittlichsten Halbleiter-Belichtungsanlagen."
        }
      ],
      "3": [
        {
          "q": "Welches internationale Lebensmittel- und Konsumgüterunternehmen hatte lange seinen Hauptsitz in Rotterdam (Hersteller von Knorr, Dove, Ben & Jerry’s)?",
          "o": [
            "Nestlé",
            "Unilever",
            "Procter & Gamble",
            "Danone"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit „Uni...“.",
          "exp": "Unilever ist einer der weltgrößten Konsumgüterkonzerne."
        },
        {
          "q": "Welches internationale Lebensmittel- und Konsumgüterunternehmen hatte lange seinen Hauptsitz in Rotterdam (Hersteller von Knorr, Dove, Ben & Jerry’s)?",
          "o": [
            "Nestlé",
            "Unilever",
            "Procter & Gamble",
            "Danone"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit „Uni...“.",
          "exp": "Unilever ist einer der weltgrößten Konsumgüterkonzerne."
        }
      ]
    },
    "Österreich": {
      "1": [
        {
          "q": "Welcher weltbekannte Schmuckkonzern aus Tirol ist berühmt für die Herstellung von geschliffenem Kristallglas?",
          "o": [
            "Pandora",
            "Swarovski",
            "Tiffany & Co.",
            "Cartier"
          ],
          "a": 1,
          "tip": "Das Firmenlogo zeigt einen eleganten Schwan.",
          "exp": "Swarovski hat seinen Stammsitz in Wattens, Tirol."
        },
        {
          "q": "Welcher weltbekannte Schmuckkonzern aus Tirol ist berühmt für die Herstellung von geschliffenem Kristallglas?",
          "o": [
            "Pandora",
            "Swarovski",
            "Tiffany & Co.",
            "Cartier"
          ],
          "a": 1,
          "tip": "Das Firmenlogo zeigt einen eleganten Schwan.",
          "exp": "Swarovski hat seinen Stammsitz in Wattens, Tirol."
        }
      ],
      "2": [
        {
          "q": "Welcher Energy-Drink-Hersteller aus Fuschl am See revolutionierte den weltweiten Getränkemarkt und betreibt eigene Sport-Teams?",
          "o": [
            "Monster Energy",
            "Red Bull",
            "Rockstar",
            "Coca-Cola"
          ],
          "a": 1,
          "tip": "Der Drink „verleiht Flügel“.",
          "exp": "Red Bull ist das bekannteste globale Marketing- und Getränkeunternehmen Österreichs."
        },
        {
          "q": "Welcher Energy-Drink-Hersteller aus Fuschl am See revolutionierte den weltweiten Getränkemarkt und betreibt eigene Sport-Teams?",
          "o": [
            "Monster Energy",
            "Red Bull",
            "Rockstar",
            "Coca-Cola"
          ],
          "a": 1,
          "tip": "Der Drink „verleiht Flügel“.",
          "exp": "Red Bull ist das bekannteste globale Marketing- und Getränkeunternehmen Österreichs."
        }
      ],
      "3": [
        {
          "q": "Welcher spezialisierte Stahl- und Technologiekonzern in Linz ist ein Pionier im Bereich der CO2-armen Stahlherstellung?",
          "o": [
            "Voestalpine",
            "Thyssenkrupp",
            "ArcelorMittal",
            "Salzgitter AG"
          ],
          "a": 0,
          "tip": "Der Firmenname setzt sich aus „VOEST“ und „Alpine“ zusammen.",
          "exp": "Die Voestalpine gilt als einer der innovativsten Industriekonzerne Europas."
        },
        {
          "q": "Welcher spezialisierte Stahl- und Technologiekonzern in Linz ist ein Pionier im Bereich der CO2-armen Stahlherstellung?",
          "o": [
            "Voestalpine",
            "Thyssenkrupp",
            "ArcelorMittal",
            "Salzgitter AG"
          ],
          "a": 0,
          "tip": "Der Firmenname setzt sich aus „VOEST“ und „Alpine“ zusammen.",
          "exp": "Die Voestalpine gilt als einer der innovativsten Industriekonzerne Europas."
        }
      ]
    },
    "Polen": {
      "1": [
        {
          "q": "Welches Videospiel-Entwicklerstudio aus dieser Nation erschuf weltweite Megahits wie „The Witcher 3“ und „Cyberpunk 2077“?",
          "o": [
            "Ubisoft",
            "CD Projekt Red",
            "Rockstar Games",
            "EA Sports"
          ],
          "a": 1,
          "tip": "Die Abkürzung „CD Projekt“ gehört dazu.",
          "exp": "CD Projekt Red ist das größte und bekannteste Entwicklerstudio Polens."
        },
        {
          "q": "Welches Videospiel-Entwicklerstudio aus dieser Nation erschuf weltweite Megahits wie „The Witcher 3“ und „Cyberpunk 2077“?",
          "o": [
            "Ubisoft",
            "CD Projekt Red",
            "Rockstar Games",
            "EA Sports"
          ],
          "a": 1,
          "tip": "Die Abkürzung „CD Projekt“ gehört dazu.",
          "exp": "CD Projekt Red ist das größte und bekannteste Entwicklerstudio Polens."
        }
      ],
      "2": [
        {
          "q": "Welcher Sektor hat sich in den letzten Jahrzehnten enorm entwickelt, sodass das Land als „Werkbank Europas“ für die Automobil- und Elektrogeräteindustrie gilt?",
          "o": [
            "Das verarbeitende Gewerbe",
            "Der reine Tourismus",
            "Die Fischzucht",
            "Die Ölförderung"
          ],
          "a": 0,
          "tip": "Viele deutsche und internationale Konzerne lassen dort produzieren.",
          "exp": "Polen ist ein führender Zulieferer und Fertiger im EU-Binnenmarkt."
        },
        {
          "q": "Welcher Sektor hat sich in den letzten Jahrzehnten enorm entwickelt, sodass das Land als „Werkbank Europas“ für die Automobil- und Elektrogeräteindustrie gilt?",
          "o": [
            "Das verarbeitende Gewerbe",
            "Der reine Tourismus",
            "Die Fischzucht",
            "Die Ölförderung"
          ],
          "a": 0,
          "tip": "Viele deutsche und internationale Konzerne lassen dort produzieren.",
          "exp": "Polen ist ein führender Zulieferer und Fertiger im EU-Binnenmarkt."
        }
      ],
      "3": [
        {
          "q": "Wie heißt die Landeswährung, die trotz EU-Mitgliedschaft weiterhin genutzt wird?",
          "o": [
            "Koruna",
            "Złoty",
            "Forint",
            "Leu"
          ],
          "a": 1,
          "tip": "Übersetzt bedeutet das Wort „der Goldene“.",
          "exp": "Polen nutzt nach wie vor den Złoty als Währung."
        },
        {
          "q": "Wie heißt die Landeswährung, die trotz EU-Mitgliedschaft weiterhin genutzt wird?",
          "o": [
            "Koruna",
            "Złoty",
            "Forint",
            "Leu"
          ],
          "a": 1,
          "tip": "Übersetzt bedeutet das Wort „der Goldene“.",
          "exp": "Polen nutzt nach wie vor den Złoty als Währung."
        }
      ]
    },
    "Portugal": {
      "1": [
        {
          "q": "Welches Naturprodukt macht das Land zum weltweiten Marktführer bei der Herstellung von Flaschenverschlüssen?",
          "o": [
            "Kunststoff",
            "Kork",
            "Schraubverschlüsse aus Aluminium",
            "Glas"
          ],
          "a": 1,
          "tip": "Es wird aus der Rinde der Korkeiche gewonnen.",
          "exp": "Portugal produziert rund die Hälfte des weltweiten Flaschenkorks."
        },
        {
          "q": "Welches Naturprodukt macht das Land zum weltweiten Marktführer bei der Herstellung von Flaschenverschlüssen?",
          "o": [
            "Kunststoff",
            "Kork",
            "Schraubverschlüsse aus Aluminium",
            "Glas"
          ],
          "a": 1,
          "tip": "Es wird aus der Rinde der Korkeiche gewonnen.",
          "exp": "Portugal produziert rund die Hälfte des weltweiten Flaschenkorks."
        }
      ],
      "2": [
        {
          "q": "Welcher Sektor der erneuerbaren Energien gedeiht an der Atlantikküste und im windigen Landesinneren besonders gut?",
          "o": [
            "Atomkraft",
            "Wind- und Solarenergie",
            "Geothermie",
            "Braunkohle"
          ],
          "a": 1,
          "tip": "Das Land deckt an manchen Tagen über 100 % seines Strombedarfs aus diesen nachhaltigen Quellen.",
          "exp": "Portugal gehört zu den EU-Pionieren bei erneuerbarer Elektrizität."
        },
        {
          "q": "Welcher Sektor der erneuerbaren Energien gedeiht an der Atlantikküste und im windigen Landesinneren besonders gut?",
          "o": [
            "Atomkraft",
            "Wind- und Solarenergie",
            "Geothermie",
            "Braunkohle"
          ],
          "a": 1,
          "tip": "Das Land deckt an manchen Tagen über 100 % seines Strombedarfs aus diesen nachhaltigen Quellen.",
          "exp": "Portugal gehört zu den EU-Pionieren bei erneuerbarer Elektrizität."
        }
      ],
      "3": [
        {
          "q": "Welcher traditionelle Export-Süßwein aus dem Douro-Tal wird in der Stadt Vila Nova de Gaia gereift und verschifft?",
          "o": [
            "Sherry",
            "Portwein",
            "Prosecco",
            "Marsala"
          ],
          "a": 1,
          "tip": "Der Name leitet sich von der zweitgrößten Stadt des Landes (Porto) ab.",
          "exp": "Portwein darf rechtlich geschützt nur aus Nordportugal stammen."
        },
        {
          "q": "Welcher traditionelle Export-Süßwein aus dem Douro-Tal wird in der Stadt Vila Nova de Gaia gereift und verschifft?",
          "o": [
            "Sherry",
            "Portwein",
            "Prosecco",
            "Marsala"
          ],
          "a": 1,
          "tip": "Der Name leitet sich von der zweitgrößten Stadt des Landes (Porto) ab.",
          "exp": "Portwein darf rechtlich geschützt nur aus Nordportugal stammen."
        }
      ]
    },
    "Rumänien": {
      "1": [
        {
          "q": "Welcher Autohersteller aus diesem Land gehört heute zum Renault-Konzern und ist bekannt für preiswerte Modelle wie Duster und Sandero?",
          "o": [
            "Škoda",
            "Dacia",
            "Lada",
            "Seat"
          ],
          "a": 1,
          "tip": "Der Wappenname geht auf eine antike Region auf dem Staatsgebiet zurück.",
          "exp": "Dacia wurde 1999 von Renault übernommen und feierte Billigauto-Erfolge."
        },
        {
          "q": "Welcher Autohersteller aus diesem Land gehört heute zum Renault-Konzern und ist bekannt für preiswerte Modelle wie Duster und Sandero?",
          "o": [
            "Škoda",
            "Dacia",
            "Lada",
            "Seat"
          ],
          "a": 1,
          "tip": "Der Wappenname geht auf eine antike Region auf dem Staatsgebiet zurück.",
          "exp": "Dacia wurde 1999 von Renault übernommen und feierte Billigauto-Erfolge."
        }
      ],
      "2": [
        {
          "q": "Welcher Sektor der Wirtschaft in Städten wie Klausenburg (Cluj) und Bukarest wächst extrem schnell und gilt als IT-Hub Osteuropas?",
          "o": [
            "Die Softwareentwicklung und IT-Dienstleistungen",
            "Der Schiffbau",
            "Die Uhrenproduktion",
            "Die Kohleförderung"
          ],
          "a": 0,
          "tip": "Das Land ist bekannt für hervorragend ausgebildete Programmierer.",
          "exp": "Rumäniens IT-Sektor zieht viele multinationale Technologiekonzerne an."
        },
        {
          "q": "Welcher Sektor der Wirtschaft in Städten wie Klausenburg (Cluj) und Bukarest wächst extrem schnell und gilt als IT-Hub Osteuropas?",
          "o": [
            "Die Softwareentwicklung und IT-Dienstleistungen",
            "Der Schiffbau",
            "Die Uhrenproduktion",
            "Die Kohleförderung"
          ],
          "a": 0,
          "tip": "Das Land ist bekannt für hervorragend ausgebildete Programmierer.",
          "exp": "Rumäniens IT-Sektor zieht viele multinationale Technologiekonzerne an."
        }
      ],
      "3": [
        {
          "q": "Welches Erdöl- und Erdgasunternehmen (OMV Petrom) ist das größte Unternehmen des Landes und gehört mehrheitlich zu einem österreichischen Konzern?",
          "o": [
            "Petrom",
            "Rompetrol",
            "Lukoil",
            "Shell"
          ],
          "a": 0,
          "tip": "Der Wappenname setzt sich aus „Petro-“ und „-rom“ zusammen.",
          "exp": "Petrom wurde 2004 von der österreichischen OMV mehrheitlich erworben."
        },
        {
          "q": "Welches Erdöl- und Erdgasunternehmen (OMV Petrom) ist das größte Unternehmen des Landes und gehört mehrheitlich zu einem österreichischen Konzern?",
          "o": [
            "Petrom",
            "Rompetrol",
            "Lukoil",
            "Shell"
          ],
          "a": 0,
          "tip": "Der Wappenname setzt sich aus „Petro-“ und „-rom“ zusammen.",
          "exp": "Petrom wurde 2004 von der österreichischen OMV mehrheitlich erworben."
        }
      ]
    },
    "Schweden": {
      "1": [
        {
          "q": "Welcher weltbekannte Möbelkonzern wurde von Ingvar Kamprad gegründet und vertreibt zerlegbare Möbel in blau-gelben Einrichtungshäusern?",
          "o": [
            "XXL Lutz",
            "IKEA",
            "Mömax",
            "Jysk"
          ],
          "a": 1,
          "tip": "Der Name besteht aus den Initialen des Gründers und seines Heimatdorfes (I.K.E.A.).",
          "exp": "IKEA ist das weltweit größte Möbelhandelsunternehmen."
        },
        {
          "q": "Welcher weltbekannte Möbelkonzern wurde von Ingvar Kamprad gegründet und vertreibt zerlegbare Möbel in blau-gelben Einrichtungshäusern?",
          "o": [
            "XXL Lutz",
            "IKEA",
            "Mömax",
            "Jysk"
          ],
          "a": 1,
          "tip": "Der Name besteht aus den Initialen des Gründers und seines Heimatdorfes (I.K.E.A.).",
          "exp": "IKEA ist das weltweit größte Möbelhandelsunternehmen."
        }
      ],
      "2": [
        {
          "q": "Welcher Audio-Streaming-Dienst für Musik und Podcasts wurde 2006 in Stockholm gegründet?",
          "o": [
            "Apple Music",
            "Spotify",
            "Deezer",
            "Tidal"
          ],
          "a": 1,
          "tip": "Das Logo ist grün mit drei schwarzen Schallwellen.",
          "exp": "Spotify revolutionierte den weltweiten Musikvertrieb durch Streaming."
        },
        {
          "q": "Welcher Audio-Streaming-Dienst für Musik und Podcasts wurde 2006 in Stockholm gegründet?",
          "o": [
            "Apple Music",
            "Spotify",
            "Deezer",
            "Tidal"
          ],
          "a": 1,
          "tip": "Das Logo ist grün mit drei schwarzen Schallwellen.",
          "exp": "Spotify revolutionierte den weltweiten Musikvertrieb durch Streaming."
        }
      ],
      "3": [
        {
          "q": "Welcher LKW- und Bushersteller mit dem Greif-Logo gehört neben der Volvo Group zu den bekanntesten Nutzfahrzeugmarken des Landes?",
          "o": [
            "MAN",
            "Scania",
            "Iveco",
            "DAF"
          ],
          "a": 1,
          "tip": "Der Name leitet sich von der historischen Provinz Schonen ab.",
          "exp": "Scania ist einer der profitabelsten Schwer-LKW-Bauer der Welt."
        },
        {
          "q": "Welcher LKW- und Bushersteller mit dem Greif-Logo gehört neben der Volvo Group zu den bekanntesten Nutzfahrzeugmarken des Landes?",
          "o": [
            "MAN",
            "Scania",
            "Iveco",
            "DAF"
          ],
          "a": 1,
          "tip": "Der Name leitet sich von der historischen Provinz Schonen ab.",
          "exp": "Scania ist einer der profitabelsten Schwer-LKW-Bauer der Welt."
        }
      ]
    },
    "Slowakei": {
      "1": [
        {
          "q": "Welcher Industriezweig macht das Land zum weltweiten Spitzenreiter bei der Anzahl der produzierten Fahrzeuge pro Einwohner?",
          "o": [
            "Der Schiffbau",
            "Die Automobilindustrie",
            "Der Flugzeugbau",
            "Die Fahrradherstellung"
          ],
          "a": 1,
          "tip": "Große Werke von VW, Kia, Stellantis und Jaguar Land Rover stehen im Land.",
          "exp": "Die Slowakei ist bezogen auf die Einwohnerzahl der größte Autohersteller weltweit."
        },
        {
          "q": "Welcher Industriezweig macht das Land zum weltweiten Spitzenreiter bei der Anzahl der produzierten Fahrzeuge pro Einwohner?",
          "o": [
            "Der Schiffbau",
            "Die Automobilindustrie",
            "Der Flugzeugbau",
            "Die Fahrradherstellung"
          ],
          "a": 1,
          "tip": "Große Werke von VW, Kia, Stellantis und Jaguar Land Rover stehen im Land.",
          "exp": "Die Slowakei ist bezogen auf die Einwohnerzahl der größte Autohersteller weltweit."
        }
      ],
      "2": [
        {
          "q": "Welches Cybersicherheitsunternehmen () hat seinen Hauptsitz in der Hauptstadt und entwickelt Antiviren-Software?",
          "o": [
            "Kaspersky",
            "ESET",
            "Avast",
            "Norton"
          ],
          "a": 1,
          "tip": "Der Name besteht aus vier Buchstaben (ESET).",
          "exp": "ESET schützt mit seiner Software Millionen Computer weltweit."
        },
        {
          "q": "Welches Cybersicherheitsunternehmen () hat seinen Hauptsitz in der Hauptstadt und entwickelt Antiviren-Software?",
          "o": [
            "Kaspersky",
            "ESET",
            "Avast",
            "Norton"
          ],
          "a": 1,
          "tip": "Der Name besteht aus vier Buchstaben (ESET).",
          "exp": "ESET schützt mit seiner Software Millionen Computer weltweit."
        }
      ],
      "3": [
        {
          "q": "In welchem Jahr führte das Land den Euro ein und verabschiedete sich von der Krone?",
          "o": [
            "2004",
            "2009",
            "2015",
            "2020"
          ],
          "a": 1,
          "tip": "Es geschah genau fünf Jahre nach dem EU-Beitritt.",
          "exp": "Die Slowakei führte am 1. Jänner 2009 die europäische Währung ein."
        },
        {
          "q": "In welchem Jahr führte das Land den Euro ein und verabschiedete sich von der Krone?",
          "o": [
            "2004",
            "2009",
            "2015",
            "2020"
          ],
          "a": 1,
          "tip": "Es geschah genau fünf Jahre nach dem EU-Beitritt.",
          "exp": "Die Slowakei führte am 1. Jänner 2009 die europäische Währung ein."
        }
      ]
    },
    "Slowenien": {
      "1": [
        {
          "q": "Welcher internationale Hersteller von Haushaltsgeräten (u. a. Kühlschränke, Herdsets) stammt aus diesem Land und gehört heute zum Hisense-Konzern?",
          "o": [
            "Bosch",
            "Gorenje",
            "Miele",
            "Beko"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Buchstaben „G“.",
          "exp": "Gorenje ist eine feste Marke für Haushaltsgeräte in ganz Europa."
        },
        {
          "q": "Welcher internationale Hersteller von Haushaltsgeräten (u. a. Kühlschränke, Herdsets) stammt aus diesem Land und gehört heute zum Hisense-Konzern?",
          "o": [
            "Bosch",
            "Gorenje",
            "Miele",
            "Beko"
          ],
          "a": 1,
          "tip": "Der Name beginnt mit dem Buchstaben „G“.",
          "exp": "Gorenje ist eine feste Marke für Haushaltsgeräte in ganz Europa."
        }
      ],
      "2": [
        {
          "q": "Welcher Pharma-Riese () aus der Stadt Novo Mesto gehört zu den führenden Herstellern von Generika-Medikamenten in Mitteleuropa?",
          "o": [
            "Krka",
            "Novartis",
            "Pfizer",
            "Astra Zeneca"
          ],
          "a": 0,
          "tip": "Der Name lautet genau wie ein bekannter Fluss und Nationalpark im Nachbarland Kroatien.",
          "exp": "Krka exportiert Generika-Arzneimittel in über 70 Länder."
        },
        {
          "q": "Welcher Pharma-Riese () aus der Stadt Novo Mesto gehört zu den führenden Herstellern von Generika-Medikamenten in Mitteleuropa?",
          "o": [
            "Krka",
            "Novartis",
            "Pfizer",
            "Astra Zeneca"
          ],
          "a": 0,
          "tip": "Der Name lautet genau wie ein bekannter Fluss und Nationalpark im Nachbarland Kroatien.",
          "exp": "Krka exportiert Generika-Arzneimittel in über 70 Länder."
        }
      ],
      "3": [
        {
          "q": "Welches Sportartikelunternehmen aus diesem Land ist weltberühmt für die Herstellung von Skiern und Yachten?",
          "o": [
            "Atomic",
            "Elan",
            "Fischer",
            "Head"
          ],
          "a": 1,
          "tip": "Der Name hat nur vier Buchstaben und bedeutet übersetzt Schwung oder Begeisterung.",
          "exp": "Elan gilt als Pionier beim Carving-Ski."
        },
        {
          "q": "Welches Sportartikelunternehmen aus diesem Land ist weltberühmt für die Herstellung von Skiern und Yachten?",
          "o": [
            "Atomic",
            "Elan",
            "Fischer",
            "Head"
          ],
          "a": 1,
          "tip": "Der Name hat nur vier Buchstaben und bedeutet übersetzt Schwung oder Begeisterung.",
          "exp": "Elan gilt als Pionier beim Carving-Ski."
        }
      ]
    },
    "Spanien": {
      "1": [
        {
          "q": "Welcher internationale Modekonzern (Inditex) betreibt Modemarken wie Zara, Pull&Bear und Massimo Dutti?",
          "o": [
            "H&M",
            "Inditex",
            "Mango",
            "Primark"
          ],
          "a": 1,
          "tip": "Der Gründer Amancio Ortega gehörte lange zu den reichsten Menschen der Welt.",
          "exp": "Inditex ist einer der weltgrößten Mode-Filialisten."
        },
        {
          "q": "Welcher internationale Modekonzern (Inditex) betreibt Modemarken wie Zara, Pull&Bear und Massimo Dutti?",
          "o": [
            "H&M",
            "Inditex",
            "Mango",
            "Primark"
          ],
          "a": 1,
          "tip": "Der Gründer Amancio Ortega gehörte lange zu den reichsten Menschen der Welt.",
          "exp": "Inditex ist einer der weltgrößten Mode-Filialisten."
        }
      ],
      "2": [
        {
          "q": "Welches Finanzinstitut (Banco Santander) gehört zu den größten und wertvollsten Bankengruppen in der gesamten Eurozone?",
          "o": [
            "Deutsche Bank",
            "Banco Santander",
            "BNP Paribas",
            "ING"
          ],
          "a": 1,
          "tip": "Das Firmenlogo zeigt eine rote Flamme.",
          "exp": "Santander ist die größte Bank Spaniens und stark im Privatkundengeschäft."
        },
        {
          "q": "Welches Finanzinstitut (Banco Santander) gehört zu den größten und wertvollsten Bankengruppen in der gesamten Eurozone?",
          "o": [
            "Deutsche Bank",
            "Banco Santander",
            "BNP Paribas",
            "ING"
          ],
          "a": 1,
          "tip": "Das Firmenlogo zeigt eine rote Flamme.",
          "exp": "Santander ist die größte Bank Spaniens und stark im Privatkundengeschäft."
        }
      ],
      "3": [
        {
          "q": "Welche Automarke gehört zum Volkswagen-Konzern und hat ihren Hauptsitz in Martorell nahe Barcelona?",
          "o": [
            "SEAT",
            "Fiat",
            "Renault",
            "Peugeot"
          ],
          "a": 0,
          "tip": "Die sportliche Submarke heißt „Cupra“.",
          "exp": "SEAT wurde 1950 gegründet und gehört seit 1986 zu VW."
        },
        {
          "q": "Welche Automarke gehört zum Volkswagen-Konzern und hat ihren Hauptsitz in Martorell nahe Barcelona?",
          "o": [
            "SEAT",
            "Fiat",
            "Renault",
            "Peugeot"
          ],
          "a": 0,
          "tip": "Die sportliche Submarke heißt „Cupra“.",
          "exp": "SEAT wurde 1950 gegründet und gehört seit 1986 zu VW."
        }
      ]
    },
    "Tschechien": {
      "1": [
        {
          "q": "Welcher traditionsreiche Automobilhersteller aus Mladá Boleslav gehört seit 1991 zum Volkswagen-Konzern?",
          "o": [
            "Tatra",
            "Škoda",
            "Trabant",
            "Wartburg"
          ],
          "a": 1,
          "tip": "Das Logo stellt einen geflügelten Pfeil dar.",
          "exp": "Škoda ist einer der ältesten noch produzierenden Autobauer der Welt."
        },
        {
          "q": "Welcher traditionsreiche Automobilhersteller aus Mladá Boleslav gehört seit 1991 zum Volkswagen-Konzern?",
          "o": [
            "Tatra",
            "Škoda",
            "Trabant",
            "Wartburg"
          ],
          "a": 1,
          "tip": "Das Logo stellt einen geflügelten Pfeil dar.",
          "exp": "Škoda ist einer der ältesten noch produzierenden Autobauer der Welt."
        }
      ],
      "2": [
        {
          "q": "Welches berühmte Produkt macht die Stadt Pilsen (Plzeň) zu einer weltbekannten Legende im Getränkesektor?",
          "o": [
            "Pilsner Urquell",
            "Champagner",
            "Whisky",
            "Gin"
          ],
          "a": 0,
          "tip": "Es begründete die weltweit am häufigsten gebraute Bierart.",
          "exp": "Das helle Lagerbier Pilsner Urquell wird seit 1842 gebraut."
        },
        {
          "q": "Welches berühmte Produkt macht die Stadt Pilsen (Plzeň) zu einer weltbekannten Legende im Getränkesektor?",
          "o": [
            "Pilsner Urquell",
            "Champagner",
            "Whisky",
            "Gin"
          ],
          "a": 0,
          "tip": "Es begründete die weltweit am häufigsten gebraute Bierart.",
          "exp": "Das helle Lagerbier Pilsner Urquell wird seit 1842 gebraut."
        }
      ],
      "3": [
        {
          "q": "Welches Sicherheitsunternehmen für Cybersicherheit () wurde in Prag gegründet und schützte Millionen PCs vor Viren?",
          "o": [
            "Avast",
            "Bitdefender",
            "McAfee",
            "Sophos"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit den Buchstaben „Av-“.",
          "exp": "Avast wurde durch kostenlose Virenscanner weltbekannt."
        },
        {
          "q": "Welches Sicherheitsunternehmen für Cybersicherheit () wurde in Prag gegründet und schützte Millionen PCs vor Viren?",
          "o": [
            "Avast",
            "Bitdefender",
            "McAfee",
            "Sophos"
          ],
          "a": 0,
          "tip": "Der Name beginnt mit den Buchstaben „Av-“.",
          "exp": "Avast wurde durch kostenlose Virenscanner weltbekannt."
        }
      ]
    },
    "Ungarn": {
      "1": [
        {
          "q": "Welcher Bereich der Fertigung hat in Städten wie Kecskemét (Mercedes), Győr (Audi) und Debrecen (BMW) tausende Arbeitsplätze geschaffen?",
          "o": [
            "Die Automobil- und Motorenfertigung",
            "Die Uhrenmanufaktur",
            "Die Textilweberei",
            "Die Halbleiterfertigung"
          ],
          "a": 0,
          "tip": "Das Land baut viele Verbrennungs- und Elektromotoren für deutsche Premium-Marken.",
          "exp": "Die Automobilproduktion ist ein dominanter Zweig der ungarischen Industrie."
        },
        {
          "q": "Welcher Bereich der Fertigung hat in Städten wie Kecskemét (Mercedes), Győr (Audi) und Debrecen (BMW) tausende Arbeitsplätze geschaffen?",
          "o": [
            "Die Automobil- und Motorenfertigung",
            "Die Uhrenmanufaktur",
            "Die Textilweberei",
            "Die Halbleiterfertigung"
          ],
          "a": 0,
          "tip": "Das Land baut viele Verbrennungs- und Elektromotoren für deutsche Premium-Marken.",
          "exp": "Die Automobilproduktion ist ein dominanter Zweig der ungarischen Industrie."
        }
      ],
      "2": [
        {
          "q": "Wie heißt die eigene Landeswährung, die der Staat trotz Mitgliedschaft in der Europäischen Union weiterhin nutzt?",
          "o": [
            "Forint",
            "Złoty",
            "Krone",
            "Lei"
          ],
          "a": 0,
          "tip": "Die internationale Abkürzung lautet HUF.",
          "exp": "Ungarn bezahlt weiterhin mit dem ungarischen Forint."
        },
        {
          "q": "Wie heißt die eigene Landeswährung, die der Staat trotz Mitgliedschaft in der Europäischen Union weiterhin nutzt?",
          "o": [
            "Forint",
            "Złoty",
            "Krone",
            "Lei"
          ],
          "a": 0,
          "tip": "Die internationale Abkürzung lautet HUF.",
          "exp": "Ungarn bezahlt weiterhin mit dem ungarischen Forint."
        }
      ],
      "3": [
        {
          "q": "Welcher Pharma-Konzern () aus der Hauptstadt gehört zu den ältesten und bedeutendsten Herstellern von Arzneimitteln in Osteuropa?",
          "o": [
            "Richter Gedeon",
            "Sanofi",
            "Sandoz",
            "Zentiva"
          ],
          "a": 0,
          "tip": "Der Name trägt den Vornamen und Nachnamen des Firmengründers.",
          "exp": "Gedeon Richter wurde 1901 gegründet und stellt vor allem Gynäkologika her."
        },
        {
          "q": "Welcher Pharma-Konzern () aus der Hauptstadt gehört zu den ältesten und bedeutendsten Herstellern von Arzneimitteln in Osteuropa?",
          "o": [
            "Richter Gedeon",
            "Sanofi",
            "Sandoz",
            "Zentiva"
          ],
          "a": 0,
          "tip": "Der Name trägt den Vornamen und Nachnamen des Firmengründers.",
          "exp": "Gedeon Richter wurde 1901 gegründet und stellt vor allem Gynäkologika her."
        }
      ]
    },
    "Zypern": {
      "1": [
        {
          "q": "Welcher Wirtschaftszweig im Dienstleistungssektor profitierte lange Zeit von niedrigen Steuern und zog viele ausländische Anleger und Unternehmen an?",
          "o": [
            "Der Offshore-Finanz- und Treuhandsektor",
            "Die Schwerindustrie",
            "Die Automobilfertigung",
            "Die Raumfahrt"
          ],
          "a": 0,
          "tip": "Es geht um Bankkonten, Firmenregistrierungen und Finanzberatung.",
          "exp": "Zypern zog durch niedrige Steuersätze viele Treuhandgeschäfte an."
        },
        {
          "q": "Welcher Wirtschaftszweig im Dienstleistungssektor profitierte lange Zeit von niedrigen Steuern und zog viele ausländische Anleger und Unternehmen an?",
          "o": [
            "Der Offshore-Finanz- und Treuhandsektor",
            "Die Schwerindustrie",
            "Die Automobilfertigung",
            "Die Raumfahrt"
          ],
          "a": 0,
          "tip": "Es geht um Bankkonten, Firmenregistrierungen und Finanzberatung.",
          "exp": "Zypern zog durch niedrige Steuersätze viele Treuhandgeschäfte an."
        }
      ],
      "2": [
        {
          "q": "Welcher Sektor profitiert vom extrem sonnigen Wetter im Mittelmeer und den Sandstränden wie in Ayia Napa?",
          "o": [
            "Der Tourismus",
            "Der Wintersport",
            "Die Holzfällerei",
            "Die Kohleförderung"
          ],
          "a": 0,
          "tip": "Er bildet das Rückgrat der Wirtschaft auf der Insel.",
          "exp": "Der Tourismus ist die Haupteinnahmequelle Zyperns."
        },
        {
          "q": "Welcher Sektor profitiert vom extrem sonnigen Wetter im Mittelmeer und den Sandstränden wie in Ayia Napa?",
          "o": [
            "Der Tourismus",
            "Der Wintersport",
            "Die Holzfällerei",
            "Die Kohleförderung"
          ],
          "a": 0,
          "tip": "Er bildet das Rückgrat der Wirtschaft auf der Insel.",
          "exp": "Der Tourismus ist die Haupteinnahmequelle Zyperns."
        }
      ],
      "3": [
        {
          "q": "In welchem Jahr führte die Insel den Euro ein und ersetzte damit das Pfund?",
          "o": [
            "2004",
            "2008",
            "2013",
            "2018"
          ],
          "a": 1,
          "tip": "Es war exakt vier Jahre nach dem EU-Beitritt (zeitgleich mit Malta).",
          "exp": "Zypern trat am 1. Jänner 2008 der Eurozone bei."
        },
        {
          "q": "In welchem Jahr führte die Insel den Euro ein und ersetzte damit das Pfund?",
          "o": [
            "2004",
            "2008",
            "2013",
            "2018"
          ],
          "a": 1,
          "tip": "Es war exakt vier Jahre nach dem EU-Beitritt (zeitgleich mit Malta).",
          "exp": "Zypern trat am 1. Jänner 2008 der Eurozone bei."
        }
      ]
    }
  }
};
