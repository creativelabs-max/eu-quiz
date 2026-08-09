[README.md](https://github.com/user-attachments/files/30870538/README.md)
# 🇪🇺 EU Quiz — Das ultimative Europäische Wissensquiz

Ein modernes, interaktives und performantes Web-Quiz über die Europäische Union, ihre Geschichte, Geografie, Politik, Kultur und Wirtschaft. Ausgestattet mit einem einzigartigen Brettspiel-Modus, Echtzeit-Multiplayer, animierten Erfolgen und einem persönlichen Europapass!

---

## 🌟 Highlights & Spielmodi

### 🗺️ 1. Klassische Kampagne (Brettspiel-Modus)
* **Interaktive Europa-Karte**: Erobere europäische Länder durch das richtige Beantworten von Fragen.
* **3 Schwierigkeitsstufen (Level I – III)**: Von Einsteiger-Fragen bis hin zu Experten-Wissen.
* **Alles-oder-Nichts Risiko-Modus**: Setze im Level III doppelte Punkte auf ein hohes Risiko (+6 / -3 PTS).
* **Strategisches Joker-Arsenal**:
  * 🌗 **50:50 Joker**: Blendet zwei falsche Antworten aus.
  * 🏫 **Klassen-Umfrage**: Zeigt die prozentuale Meinung der Klasse/Gruppe.
  * 🛟 **Retter-Joker**: Schützt vor Punktabzug bei einer falschen Antwort.

### 💀 2. Sudden Death (Überlebensmodus)
* Für **1 bis 5 Teams/Spieler** nacheinander.
* **Ein Fehler und Ende**: Die erste falsche Antwort beendet deine Runde!
* Eigene Spezial-Joker: **Frage tauschen (Swap)** und **Wiederbeleben (Revive)**.

### ⏱️ 3. Gegen die Zeit (Time Attack)
* Rasanter Modus mit anpassbarem Zeitlimit (1 bis 5 Minuten).
* Richtige Antworten geben Zeit- und Punkteboni, falsche Antworten ziehen wertvolle Sekunden ab.

### 🖼️ 4. Visuelle Runde (Flaggen-Quiz)
* Identifiziere europäische Flaggen, Hauptstädte und Wahrzeichen in einer schnellen visuellen Fragerunde.

---

## ⚡ Multiplayer & Live-Matchmaking

* 🗝️ **4-stellige Raumcodes**: Erstelle private Räume per Firebase Realtime Database für Freunde, Schulklassen oder Kollegien.
* ⚡ **Schnelles Spiel (Matchmaking)**: Tritt automatisch der Warteschlange bei und spiele sofort gegen zufällige Online-Gegner.
* 💬 **Live-Emotes & Reaktionen**: Sende während der Runde interaktive Reaktionen an deine Mitspieler.

---

## 📜 Europapass & Nutzerprofil

* 🏆 **Leveling & XP-System**: Verdiene XP für richtige Antworten und beendete Runden.
* 🔥 **Tages-Streak**: Behalte deine tägliche Spiel-Streak im Auge
* 🎭 **3D-Avatare**: Schalte Diplomaten-, Wissenschaftler- und Astronauten-Avatare frei.
* 🔐 **Cloud-Synchronisation & Auth**: Melde dich per **Google Sign-In**, E-Mail/Passwort an oder spiele im anonymen Gast-Modus.

---

## 🛠️ Technologie-Stack

* **Core**: HTML5, Vanilla JavaScript (ES6+), Web Audio API
* **Styling**: Vanilla CSS3 (Custom Design System, Glassmorphism, Dark Mode)
* **Backend**: Firebase Realtime Database & Cloud Firestore
* **Security & Auth**: Firebase Authentication & Firebase App Check (reCAPTCHA v3)

---

## 📂 Projekt-Struktur

```text
├── index.html            # Hauptanwendung & UI-Skelett
├── favicon.png           # Browser Favicon
├── apple-touch-icon.png  # iOS App-Icon
├── css/
│   └── styles.css        # Core Design-Tokens, Animationen & Layouts
├── js/
│   ├── questions.js      # Fragen-Datenbank (alle 5 Kategorien)
│   ├── app.js            # Haupt-UI, Mode-Switch & Globaler State
│   ├── campaign.js       # Klassische Kampagne & Europa-Karte
│   ├── singleplayer.js   # Sudden Death, Time Attack & Flaggen
│   ├── multiplayer.js    # Firebase Realtime Multiplayer & Matchmaking
│   ├── user_profile.js   # XP, Leveling, Europapass & Auth
│   └── sounds.js         # Sound-Engine & Web-Audio Synthesizer
└── assets/
    ├── avatars/          # 3D-Avatare & Icons
    ├── flags/            # Europäische Flaggen-Assets
    └── audio/            # Musik & Effekte
```

---

## 🚀 Schnellstart / Lokal ausführen

1. Repositorium klonen:
   ```bash
   git clone https://github.com/creativelabs-max/eu-quiz.git
   ```
2. Datei `index.html` einfach in einem modernen Webbrowser (Chrome, Safari, Firefox, Edge) öffnen.
3. Kein Build-Schritt oder `npm install` erforderlich!

---

## 📄 Lizenz & Datenschutz

* **DSGVO-Konform**: InklusiveCookiebot-Steuerung, Anonymisierung und Datenschutzbestimmungen.
* **Lizenz**: Open-Source für Bildungs- und Quizzwecke.
