class ConfettiCelebration {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.active = false;
    this.particles = [];
    this.colors = ['#06b6d4', '#8b5cf6', '#fbbf24', '#10b981', '#f43f5e', '#ff7e33', '#3b82f6'];
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.active = true;
    this.particles = [];
    this.canvas.style.display = 'block';
    
    // Spawn initial particles (increased density)
    for (let i = 0; i < 250; i++) {
      this.particles.push(this.createParticle(true));
    }
    this.animate();
  }

  stop() {
    this.active = false;
    this.canvas.style.display = 'none';
  }

  createParticle(initial = false) {
    return {
      x: Math.random() * this.canvas.width,
      y: initial ? Math.random() * -this.canvas.height : -20,
      r: Math.random() * 7 + 4,
      d: Math.random() * this.canvas.height,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      tilt: Math.random() * 12 - 6,
      tiltAngleIncremental: Math.random() * 0.08 + 0.03,
      tiltAngle: 0,
      speed: Math.random() * 4 + 2.5,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 6 - 3,
      layer: Math.random() > 0.5 ? 1 : 2 // 1: foreground, 2: background depth
    };
  }

  animate() {
    if (!this.active) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((p, idx) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += p.layer === 1 ? p.speed : p.speed * 0.7; // foreground falls faster
      p.x += Math.sin(p.tiltAngle) * 0.6;
      p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;
      p.rotation += p.rotationSpeed;

      this.ctx.save();
      this.ctx.translate(p.x + p.tilt, p.y);
      this.ctx.rotate(p.rotation * Math.PI / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      
      const sizeMultiplier = p.layer === 1 ? 1 : 0.65; // depth resizing
      
      if (idx % 2 === 0) {
        this.ctx.fillRect(-p.r * sizeMultiplier, -p.r * sizeMultiplier / 2, p.r * 2 * sizeMultiplier, p.r * sizeMultiplier);
      } else {
        this.ctx.arc(0, 0, p.r * sizeMultiplier / 1.2, 0, Math.PI * 2, true);
        this.ctx.fill();
      }
      
      this.ctx.restore();

      if (p.y > this.canvas.height) {
        this.particles[idx] = this.createParticle(false);
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

const confetti = new ConfettiCelebration('confetti-canvas');

function shuffleQuestionOptions(q) {
  if (!q || !q.o || !Array.isArray(q.o) || q.a === undefined) return q;
  let qCopy = JSON.parse(JSON.stringify(q));
  let originalOptions = qCopy.o;
  let correctAnswerText = originalOptions[qCopy.a];
  
  let indices = Array.from({length: originalOptions.length}, (_, i) => i);
  indices.sort(() => Math.random() - 0.5);
  qCopy.o = indices.map(i => originalOptions[i]);
  qCopy.a = qCopy.o.indexOf(correctAnswerText);
  
  return qCopy;
}

// New Game Modes and Achievements state
let gameMode = 'campaign'; // 'campaign', 'timeattack', 'suddendeath', 'flags'
let spTurnActive = false;
let playedVisualQuestions = new Set();
let playedSessionQuestions = new Set();
let currentQuestionData = null; // campaign mode global reference for explanations
let rapidFireQuestions = [];
let rapidFireIndex = 0;
let singlePlayerScore = 0;
let timeAttackTimerInterval = null;
let timeAttackTimeLeft = 60;
let currentStreak = 0;
let riskStreak = 0;
let flagQuestions = [];
let flagQuestionIndex = 0;
let currentFlagQuestion = null;
let statsCategoryAnswers = { 1: { c: 0, w: 0 }, 2: { c: 0, w: 0 }, 3: { c: 0, w: 0 }, 4: { c: 0, w: 0 }, 5: { c: 0, w: 0 } };

let achievements = {
  diplomat: { id: "diplomat", name: "Der Diplomat", desc: "10 Institutionen & Politik Fragen richtig beantwortet", unlocked: false },
  weltenbummler: { id: "weltenbummler", name: "Weltenbummler", desc: "Fragen zu allen 27 EU-Ländern gespielt (Klassisch)", unlocked: false },
  millionaire: { id: "millionaire", name: "Euro-Millionär", desc: "Erreiche 30+ Punkte in einem Einzelspieler-Spiel", unlocked: false },
  streak: { id: "streak", name: "Unschlagbar", desc: "10 richtige Antworten in Folge erzielt", unlocked: false },
  riskTaker: { id: "riskTaker", name: "Risikoträger", desc: "3 Risiko-Fragen in Folge richtig beantwortet", unlocked: false }
};

// --- Version 5.0 Mobile Duel State Variables ---
let duelModeType = 'local'; // 'local' or 'mobile'
let duelMobileRoomCode = null;
let duelMobileIsHost = false;
let duelMobilePlayerId = null; // 'player1' or 'player2'
let duelMobilePlayers = {};
let duelRoomRef = null;

// Listen for fullscreen change events to update the UI button
document.addEventListener('fullscreenchange', () => {
  const btn = document.getElementById('fullscreen-toggle-btn');
  const icon = document.getElementById('fullscreen-icon');
  if (btn && icon) {
    if (document.fullscreenElement) {
      btn.style.borderColor = 'var(--success)';
      btn.style.color = 'var(--success)';
      icon.innerHTML = `<path d="M4 14h6v6m10-6h-6v6M4 10h6V4m10 6h-6V4"></path>`;
    } else {
      btn.style.borderColor = '';
      btn.style.color = '';
      icon.innerHTML = `<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>`;
    }
  }
});

let teams = [];
let activeTeam = 0;
let currentCIdx = null;
let currentLvl = 0;
let correctAnswer = null;
let jokerUsed = false;
let currentRound = 1;
let maxRounds = 5;
let activeCategory = 1;
let tipOpenedForCurrentQuestion = false;

// Premium Ultimate Variables
let timerDuration = 0; // 0 = off, 15, 30, 45 seconds
let timeLeft = 0;
let timerInterval = null;
let rescueActive = false;
let riskActive = false;
let sessionHighscores = [];
let justMasteredCIdx = null;
let mapSelectionActive = false;
let mapTargetCountry = "";

  // STATIC QUESTIONS AND MAP DATA MOVED TO js/questions.js
function toggleTheme() { 
  document.body.classList.toggle('dark-mode'); 
  sounds.playClick();
}

function showInstr() { 
  sounds.playClick();
  document.getElementById('start-screen').style.display='none'; 
  document.getElementById('instr-screen').style.display='flex'; 
}

function showCategorySelect() {
  sounds.playClick();
  document.getElementById('instr-screen').style.display='none'; 
  document.getElementById('category-screen').style.display='flex'; 
}

function goBackFromRules() {
  sounds.playClick();
  document.getElementById('instr-screen').style.display = 'none';
  document.getElementById('sp-instr-screen').style.display = 'none';
  document.getElementById('mode-screen').style.display = 'flex';
}

function goBackFromTimeSelect() {
  sounds.playClick();
  document.getElementById('time-select-screen').style.display = 'none';
  document.getElementById('sp-instr-screen').style.display = 'flex';
}

function goBackFromCategory() {
  sounds.playClick();
  document.getElementById('category-screen').style.display = 'none';
  if (gameMode === 'campaign') {
    document.getElementById('instr-screen').style.display = 'flex';
  } else {
    document.getElementById('setup-screen').style.display = 'flex';
  }
}

function goBackFromSetup() {
  sounds.playClick();
  document.getElementById('setup-screen').style.display = 'none';
  if (gameMode === 'campaign') {
    document.getElementById('category-screen').style.display = 'flex';
  } else if (gameMode === 'timeattack') {
    document.getElementById('time-select-screen').style.display = 'flex';
  } else if (gameMode === 'suddendeath') {
    document.getElementById('sp-instr-screen').style.display = 'flex';
  }
}

function toggleMusic() {
  sounds.init();
  sounds.musicMuted = !sounds.musicMuted;
  const btn = document.getElementById('music-toggle-btn');
  const icon = document.getElementById('music-icon');
  if (sounds.musicMuted) {
    btn.style.borderColor = 'rgba(244,63,94,0.5)';
    btn.style.color = 'var(--error)';
    icon.innerHTML = `<line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>`;
  } else {
    btn.style.borderColor = 'var(--success)';
    btn.style.color = 'var(--success)';
    icon.innerHTML = `<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>`;
    sounds.playClick();
  }
}

function toggleFullscreen() {
  sounds.playClick();
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      alert(`Fehler beim Aktivieren des Vollbildmodus: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

function updateHallOfFame() {
  const sorted = [...teams].sort((a, b) => b.score - a.score);
  sessionHighscores.push({
    round: sessionHighscores.length + 1,
    winner: sorted[0].name,
    score: sorted[0].score,
    category: categoryNames[activeCategory]
  });
  const medals = ['🥇','🥈','🥉','🏅'];
  document.getElementById('hall-of-fame-list').innerHTML = sessionHighscores.map((g, i) => `
    <div style="padding:12px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(251,191,36,0.15);border-radius:12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:1.2rem;">${medals[Math.min(i, 3)]}</span>
        <div>
          <div style="font-weight:800;font-family:'Space Grotesk',sans-serif;font-size:0.95rem;">Runde ${g.round}: ${g.winner}</div>
          <div style="opacity:0.6;font-size:0.78rem;">Kategorie: ${g.category}</div>
        </div>
      </div>
      <span style="font-weight:800;color:var(--gold);font-size:1rem;font-family:'Space Grotesk',sans-serif;">${Number(g.score.toFixed(1))} PTS</span>
    </div>`).join('');
}

function restartTournamentRound() {
  sounds.setMusicState('menu');
  confetti.stop();
  countries.forEach(c => {
    c.p = {1:0, 2:0, 3:0};
    c.correct = {1:0, 2:0, 3:0};
    c.teamCorrect = {1: null, 2: null, 3: null};
  });
  activeTeam = 0; currentRound = 1; jokerUsed = false; rescueActive = false; riskActive = false; timerInterval = null;
  playedCategories.clear();
  playedVisualQuestions.clear();
  
  teams.forEach(t => {
    t.score = 0;
    if (gameMode === 'suddendeath') {
      t.jokers = { fiftyFifty: 0, class: 0, rescue: 0, swap: 2, revive: 2 };
    } else if (gameMode === 'campaign') {
      t.jokers = { fiftyFifty: 2, class: 2, rescue: 2 };
    } else {
      t.jokers = { fiftyFifty: 0, class: 0, rescue: 0, swap: 0, revive: 0 };
    }
  });
  
  document.getElementById('winner-screen').style.display = 'none';
  document.getElementById('category-indicator').style.display = 'none';
  document.getElementById('round-counter').style.display = 'none';
  document.getElementById('mode-screen').style.display = 'flex';
  sounds.playClick();
}

function endGame() {
  if (typeof clearBotTimeouts === 'function') clearBotTimeouts();
  if (typeof setUiLock === 'function') setUiLock(false);
  stopTimer();
  sounds.playFanfare();
  sounds.setMusicState('victory');
  document.getElementById('end-game-btn').style.display = 'none';
  document.getElementById('game-dashboard').style.display = 'none';
  document.getElementById('round-counter').style.display = 'none';
  document.getElementById('category-indicator').style.display = 'none';
  document.getElementById('winner-screen').style.display = 'flex';
  if (typeof renderCategoryStats === 'function') renderCategoryStats();

  const sorted = [...teams].sort((a, b) => b.score - a.score);
  const podium = document.getElementById('podium-area');
  const otherRanks = document.getElementById('other-ranks');
  const maxScore = sorted[0].score;
  const winners = sorted.filter(t => t.score === maxScore);

  if (winners.length > 1) {
    document.getElementById('win-heading').innerText = "UNENTSCHIEDEN!";
    const winnerNames = winners.map(w => w.name).join(" & ");
    document.getElementById('win-subheading').innerText = `Hervorragende Leistung! Die gemeinsamen Champions sind: ${winnerNames}`;
    podium.innerHTML = `
      <div class="podium-step p-2">
        <div class="podium-name" style="width:180px;">Geteilter Sieg</div>
        <div class="step-bar">🤝</div>
        <div style="margin-top:10px;font-weight:bold;font-size:1.2rem;font-family:'Space Grotesk',sans-serif;">TIE</div>
      </div>
      <div class="podium-step p-1">
        <div class="crown-icon">👑</div>
        <div class="podium-name" style="width:240px;font-size:1.15rem;font-weight:800;color:var(--gold);white-space:normal;overflow:visible;">
          ${winners.map(w => `<div>🏆 ${w.name}</div>`).join('')}
        </div>
        <div class="step-bar">1</div>
        <div style="margin-top:10px;font-weight:bold;font-size:1.2rem;font-family:'Space Grotesk',sans-serif;">${Number(maxScore.toFixed(1))} PTS</div>
      </div>`;
    setTimeout(() => document.querySelectorAll('.podium-step').forEach(el => el.classList.add('animate')), 100);
    otherRanks.innerHTML = sorted.filter(t => t.score < maxScore).map((team, idx) => `
      <div class="rank-row">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-weight:800;opacity:0.6;">#${winners.length + idx + 1}</span>
          <span style="font-weight:600;">${team.name}</span>
        </div>
        <span style="font-weight:700;color:var(--accent);font-family:'Space Grotesk',sans-serif;">${Number(team.score.toFixed(1))} PTS</span>
      </div>`).join('');
  } else {
    document.getElementById('win-heading').innerText = "EU CHAMPION";
    document.getElementById('win-subheading').innerText = `Der Gewinner steht fest: Glückwunsch an ${sorted[0].name}!`;
    const order = [1, 0, 2];
    podium.innerHTML = order.map(pos => {
      if (!sorted[pos]) return '';
      const cls = pos === 0 ? 'p-1' : (pos === 1 ? 'p-2' : 'p-3');
      const crown = pos === 0 ? '<div class="crown-icon">👑</div>' : '';
      return `<div class="podium-step ${cls}">
        ${crown}
        <div class="podium-name" title="${sorted[pos].name}">${sorted[pos].name}</div>
        <div class="step-bar">${pos + 1}</div>
        <div style="margin-top:10px;font-weight:bold;font-size:1.1rem;font-family:'Space Grotesk',sans-serif;">${Number(sorted[pos].score.toFixed(1))} PTS</div>
      </div>`;
    }).join('');
    setTimeout(() => document.querySelectorAll('.podium-step').forEach(el => el.classList.add('animate')), 100);
    if (sorted.length > 3) {
      otherRanks.innerHTML = sorted.slice(3).map((t, i) => `
        <div class="rank-row">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-weight:800;opacity:0.6;">#${i+4}</span>
            <span style="font-weight:600;">${t.name}</span>
          </div>
          <span style="font-weight:700;color:var(--accent);font-family:'Space Grotesk',sans-serif;">${Number(t.score.toFixed(1))} PTS</span>
        </div>`).join('');
    } else { otherRanks.innerHTML = ''; }
  }
    updateHallOfFame();
  
  if (document.getElementById('single-player-stats-container')) {
    document.getElementById('single-player-stats-container').style.display = 'none';
  }
  document.getElementById('podium-area').style.display = 'flex';
  document.getElementById('other-ranks').style.display = 'flex';
  
  confetti.start();
}

// --- NEW MODE SELECTION, ACHIEVEMENT, AND SINGLE-PLAYER SYSTEM ---

function openRanksDialog() {
  sounds.playClick();
  const achsHTML = Object.values(achievements).map(ach => `
    <div style="display:flex; align-items:center; gap: 12px; padding: 10px; background: ${ach.unlocked ? 'rgba(251,191,36,0.06)' : 'rgba(255,255,255,0.01)'}; border: 1px solid ${ach.unlocked ? 'rgba(251,191,36,0.2)' : 'var(--card-border)'}; border-radius: 8px; font-size:0.8rem;">
      <div style="font-size: 1.5rem; filter: ${ach.unlocked ? 'none' : 'grayscale(1) opacity(0.3)'};">
        ${ach.id === 'diplomat' ? '💼' : (ach.id === 'weltenbummler' ? '🗺️' : (ach.id === 'millionaire' ? '💰' : (ach.id === 'streak' ? '🔥' : '💥')))}
      </div>
      <div style="flex:1;">
        <div style="font-weight:800; color: ${ach.unlocked ? 'var(--gold)' : 'var(--text-secondary)'};">${ach.name} ${ach.unlocked ? '🏆' : ''}</div>
        <div style="font-size:0.75rem; opacity:0.7;">${ach.desc}</div>
      </div>
    </div>
  `).join('');
  document.getElementById('ranks-achievements-container').innerHTML = achsHTML;

  const hofHTML = sessionHighscores.length > 0 ? sessionHighscores.map((g, i) => `
    <div style="padding:8px 12px; background:rgba(255,255,255,0.02); border:1px solid rgba(251,191,36,0.1); border-radius:8px; display:flex; justify-content:space-between; align-items:center; font-size:0.8rem;">
      <span>🏆 Runde ${g.round}: <strong>${g.winner}</strong> (${g.category})</span>
      <strong style="color:var(--gold);">${Number(g.score.toFixed(1))} PTS</strong>
    </div>
  `).join('') : `<div style="text-align:center; opacity:0.5; padding: 15px; font-size:0.8rem;">Noch keine Einträge vorhanden.</div>`;
  document.getElementById('ranks-halloffame-container').innerHTML = hofHTML;

  document.getElementById('ranks-dialog').showModal();
}

function closeRanksDialog() {
  sounds.playClick();
  document.getElementById('ranks-dialog').close();
}

function showModeSelect() {
  sounds.playClick();
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('mode-screen').style.display = 'flex';
}

function backToStart() {
  sounds.playClick();
  document.getElementById('mode-screen').style.display = 'none';
  document.getElementById('start-screen').style.display = 'flex';
}

function selectMode(mode) {
  sounds.playSuccess();
  gameMode = mode;
  document.getElementById('mode-screen').style.display = 'none';
  
  if (mode === 'campaign') {
    document.getElementById('instr-screen').style.display = 'flex';
  } else if (mode === 'multiplayer') {
    document.getElementById('mp-role-screen').style.display = 'flex';
  } else if (mode === 'duel') {
    document.getElementById('duel-role-screen').style.display = 'flex';
  } else {
    let title = "";
    let rules = "";
    if (mode === 'timeattack') {
      title = "⏱️ Gegen die Zeit";
      rules = `
        <ul style="line-height: 1.8; padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 8px;"><b>Team-Modus (Max. 5 Teams)</b>: Jedes Team spielt nacheinander.</li>
          <li style="margin-bottom: 8px;"><b>Zeitlimit</b>: Einstellbare Zeit (1-5 Min) pro Team.</li>
          <li style="margin-bottom: 8px;"><b>Themenwahl</b>: Jedes Team wählt ein eigenes Thema. Bereits gewählte Themen sind für die nachfolgenden Teams gespernt!</li>
          <li style="margin-bottom: 8px;"><b>Punkte u. Zeitbonus</b>: Richtige Antworten bringen Punkte (Level-basiert) und +2 Sek. Falsche Antworten ziehen 5 Sek. ab.</li>
          <li style="margin-bottom: 8px;"><b>Siegerehrung</b>: Wer am Ende die meisten Punkte gesammelt hat, gewinnt!</li>
        </ul>
      `;
    } else if (mode === 'suddendeath') {
      title = "💀 Sudden Death";
      rules = `
        <ul style="line-height: 1.8; padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 8px;"><b>Überlebensmodus (Max. 5 Teams)</b>: Jedes Team spielt nacheinander.</li>
          <li style="margin-bottom: 8px;"><b>Ein Fehler u. Ende</b>: Die erste falsche Antwort beendet deine Runde!</li>
          <li style="margin-bottom: 8px;"><b>Drei Joker</b>: Jedes Team startet mit genau 2x Frage tauschen und 2x Wiederbeleben (Revive) Jokern. 50:50 und andere Joker sind gesperrt.</li>
          <li style="margin-bottom: 8px;"><b>Themenwahl</b>: Jedes Team wählt ein eigenes Thema (gesperrt für nachfolgende Teams).</li>
          <li style="margin-bottom: 8px;"><b>Siegerehrung</b>: Wer am längsten überlebt und die meisten Punkte sammelt, siegt!</li>
        </ul>
      `;
    }
    
    document.getElementById('sp-instr-title').innerText = title;
    document.getElementById('sp-instr-content').innerHTML = rules;
    document.getElementById('sp-instr-screen').style.display = 'flex';
  }
}

// Global variables for Duel mode
function checkInGameAchievements(qData) {
  if (activeCategory === 3) {
    let diplomatCorrectCount = statsCategoryAnswers[3].c;
    if (diplomatCorrectCount >= 10 && !achievements.diplomat.unlocked) {
      achievements.diplomat.unlocked = true;
      showAchievementUnlockedToast(achievements.diplomat);
    }
  }
  
  if (currentStreak >= 10 && !achievements.streak.unlocked) {
    achievements.streak.unlocked = true;
    showAchievementUnlockedToast(achievements.streak);
  }
  
  let playedCount = countries.filter(c => c.p[1] || c.p[2] || c.p[3]).length;
  if (playedCount >= 27 && !achievements.weltenbummler.unlocked) {
    achievements.weltenbummler.unlocked = true;
    showAchievementUnlockedToast(achievements.weltenbummler);
  }
  let highestScore = Math.max(singlePlayerScore, ...teams.map(t => t.score || 0), 0);
  if (highestScore >= 30 && !achievements.millionaire.unlocked) {
    achievements.millionaire.unlocked = true;
    showAchievementUnlockedToast(achievements.millionaire);
  }
  
  if (riskActive) {
    riskStreak++;
    if (riskStreak >= 3 && !achievements.riskTaker.unlocked) {
      achievements.riskTaker.unlocked = true;
      showAchievementUnlockedToast(achievements.riskTaker);
    }
  } else {
    riskStreak = 0;
  }
}

function showAchievementUnlockedToast(ach) {
  sounds.playSuccess();
  const toast = document.createElement('div');
  toast.className = 'achievement-toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: rgba(251, 191, 36, 0.95);
    color: #03020a;
    padding: 15px 25px;
    border-radius: 50px;
    box-shadow: 0 10px 30px rgba(251, 191, 36, 0.4);
    z-index: 9999;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Space Grotesk', sans-serif;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `;
  toast.innerHTML = `🏆 Errungenschaft freigeschaltet: <strong>${ach.name}</strong>`;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
  }, 100);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
    setTimeout(() => toast.remove(), 500);
  }, 3500);
}

function saveAchievements() {
  try {
    localStorage.setItem('eu_quiz_achievements', JSON.stringify(achievements));
  } catch (e) {
    console.error("Could not save achievements", e);
  }
}

function loadAchievements() {
  try {
    const saved = localStorage.getItem('eu_quiz_achievements');
    if (saved) {
      const parsed = JSON.parse(saved);
      for (let key in parsed) {
        if (achievements[key]) {
          achievements[key].unlocked = parsed[key].unlocked;
        }
      }
    }
  } catch (e) {
    console.error("Could not load achievements", e);
  }
}
loadAchievements();

function getExplanation(qText, correctAnswerText) {
  if (qText.includes("EGKS")) {
    return "Die Europäische Gemeinschaft für Kohle und Stahl (EGKS oder Montanunion) wurde 1951 durch den Vertrag von Paris gegründet und war das Fundament der heutigen EU.";
  }
  if (qText.includes("Tindemans")) {
    return "Der Tindemans-Bericht von 1975 schlug konkrete Schritte zur EU-Integration vor, darunter eine Wirtschafts- und Währungsunion sowie eine gemeinsame Außenpolitik.";
  }
  if (qText.includes("Spaak")) {
    return "Paul-Henri Spaak war einer der Gründerväter der EU. Seine Berichte führten direkt zur Unterzeichnung der Römischen Verträge im Jahr 1957.";
  }
  if (qText.includes("Maastricht")) {
    return "Der Vertrag von Maastricht (1992) schuf die Europäische Union in ihrer modernen Form und ebnete den Weg für die gemeinsame Währung, den Euro.";
  }
  if (qText.includes("Robert Schuman")) {
    return "Die Schuman-Erklärung am 9. Mai 1950 schlug vor, die Kohle- und Stahlproduktion Deutschlands und Frankreichs zusammenzulegen. Daher feiern wir den Europatag am 9. Mai.";
  }
  if (qText.includes("Schengen")) {
    return "Das Schengen-Abkommen von 1985 hob schrittweise die Grenzkontrollen an den Binnengrenzen der teilnehmenden Staaten auf.";
  }
  if (qText.includes("Dracula")) {
    return "Das Schloss Bran (Törzburg) gilt wegen seiner markanten Architektur als Vorbild für Draculas Schloss im weltberühmten Roman von Bram Stoker.";
  }
  if (qText.includes("Lipizzaner")) {
    return "Die Lipizzaner stammen ursprünglich aus dem Gestüt Lipica in Slowenien und sind berühmt für ihre klassische Dressurleistung.";
  }
  
  return `Wusstest du schon? Die richtige Antwort lautet: <strong>${correctAnswerText}</strong>.`;
}

// Die Texte als Variablen speichern
const impressumText = `
    <h2 style="color: #fff; margin-top: 0;">Impressum</h2>
    <p><strong>Diensteanbieter & Medieninhaber:</strong><br>
    Leading Developer: Thiemo Greger<br>
    Manager of Content: David Schwarz<br>
    Head of Testing: Matthias Hackl<br><br>
    <strong>Erreichbar unter der Anschrift:</strong><br>
    Carnerigasse 30-32<br>
    8010 Graz<br>Österreich</p>
    <p><strong>Kontakt:</strong><br>E-Mail: thiemo.greger@carneri.at oder david.schwarz@carneri.at</p>
    <p><strong>Blattlinie:</strong><br>Diese Website und das darauf bereitgestellte Spiel wurden im Rahmen eines Schulprojekts erstellt. Die Bereitstellung erfolgt rein zu Bildungszwecken und verfolgt keinerlei kommerzielle Interessen.</p>
`;

const datenschutzText = `
    <h2 style="color: #fff; margin-top: 0;">Datenschutzerklärung</h2>
    <h3 style="color: #fff;">1. Allgemeine Hinweise</h3>
    <p>Verantwortlich für die Datenverarbeitung auf dieser Website sind die im Impressum genannten Personen. Diese Website richtet sich ausschließlich an Nutzer mit Wohnsitz oder Aufenthalt in Europa.</p>
    <h3 style="color: #fff;">2. Hosting durch GitHub Pages</h3>
    <p>Diese Website wird auf Servern von GitHub Inc. (USA) bereitgestellt. GitHub erfasst automatisch Logfiles (u.a. IP-Adresse, Browsertyp, Datum/Uhrzeit des Zugriffs). Dies ist technisch erforderlich. GitHub ist unter dem EU-US Data Privacy Framework zertifiziert.</p>
    <h3 style="color: #fff;">3. Cookiebot & Google Analytics 4</h3>
    <p>Diese Website nutzt Google Analytics 4 der Google Ireland Limited zur statistischen Analyse der Nutzung. Die Datenverarbeitung erfolgt nur nach Ihrer Einwilligung über das Cookiebot-Banner. Ihre IP-Adresse wird anonymisiert übertragen. Sie können Ihre Einstellungen jederzeit über das Cookie-Symbol unten links anpassen.</p>
    <h3 style="color: #fff;">4. Firebase Services (Database, Auth & Analytics)</h3>
    <p>Für die Multiplayer-Funktionalität und App-Optimierung nutzen wir Firebase-Dienste der Google Ireland Limited:</p>
    <ul>
        <li><strong>Realtime Database:</strong> Dient der Echtzeit-Übertragung von Spielständen, Antworten und selbst gewählten Spitznamen. Alle Daten werden nach dem Verlassen des Raums gelöscht.</li>
        <li><strong>Anonymous Authentication:</strong> Meldet Sie beim Beitreten eines Multiplayer-Raums anonym an. Dabei wird eine temporäre, zufällige ID (UID) erzeugt. Es werden keine personenbezogenen Daten (wie E-Mail-Adressen, Namen oder Passwörter) erfasst oder gespeichert.</li>
        <li><strong>Google Analytics for Firebase:</strong> Erfasst anonymisierte Nutzungsdaten und Interaktionen im Spiel (z. B. Spielmodi, Spieldauer), um das Benutzererlebnis zu verbessern und Fehler zu beheben. Dies geschieht nur nach Einwilligung über das Cookiebot-Banner (Statistik-Cookies).</li>
    </ul>
    <h3 style="color: #fff;">5. Lokaler Speicher (localStorage)</h3>
    <p>Um das Spielerlebnis komfortabel zu gestalten, werden bestimmte Daten lokal in Ihrem Browser (localStorage) gespeichert: z.B. Ihre freigeschalteten Erfolge (Achievements) sowie Ihre persönlichen Spiel-Einstellungen. Diese Daten verbleiben vollständig auf Ihrem Endgerät, werden nicht an Server übertragen und können von Ihnen jederzeit über die Browsereinstellungen gelöscht werden.</p>
    <h3 style="color: #fff;">6. Ihre Rechte</h3>
    <p>Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Beschwerden können an die österreichische Datenschutzbehörde (DSB) gerichtet werden.</p>
`;

// HIER KANNST DU DEINE VERSIONS-TEXTE ANPASSEN
const versionText = `
    <h2 style="color: #fff; margin-top: 0;">Versionshinweise (v5.0)</h2>
    <hr style="border: 0; border-top: 1px solid #444; margin-bottom: 15px;">
    
    <h3 style="color: #00bcd4; margin-bottom: 5px;">Aktuelle Version 5.0</h3>
    <p style="margin-top: 0;">
        - **⚔️ Smartphone-Controller im Buzzer-Duell**: Nutzt eure Handys als kabellose Buzzer über QR-Code-Scannen.<br>
        - **🤖 Bot Klaus als Gegner**: Spielt gegen den cleveren Bot Klaus mit wählbaren Schwierigkeitsgraden (Einfach bis Elite).<br>
        - **🔄 Direktes Abstauben & Auslassen**: Staubt Punkte beim Gegner direkt ab oder überspringt schwierige Fragen straffrei mit der Passen-Taste.<br>
        - **⏱️ Einstellbare Zeitlimits**: Bestimmt selbst die Bedenkzeit pro Frage (15s, 30s, 45s, 60s oder unbegrenzt).<br>
        - **📉 Spannende Negativ-Scores**: Falsche Antworten können euren Score jetzt auch unter Null sinken lassen.<br>
    </p>
    
    <h3 style="color: #28a745; margin-top: 20px; margin-bottom: 5px;">Zukünftige Updates</h3>
    <p style="margin-top: 0;">
        - Wir arbeiten ständig an neuen Features und Verbesserungen.<br>
        - Für Vorschläge und Verbesserungen gerne eine Nachricht an eine der beiden E-Mails.
    </p>
`;

// Elemente holen
const modal = document.getElementById("legalModal");
const legalContent = document.getElementById("legalContent");
const closeModal = document.getElementById("closeModal");

// Event Listener für Klicks (Impressum)
document.getElementById("openImpressum").addEventListener("click", function(e) {
    e.preventDefault();
    legalContent.innerHTML = impressumText;
    modal.style.display = "block";
});

// Event Listener für Klicks (Datenschutz)
document.getElementById("openDatenschutz").addEventListener("click", function(e) {
    e.preventDefault();
    legalContent.innerHTML = datenschutzText;
    modal.style.display = "block";
});

// Event Listener für Klicks (Version)
document.getElementById("openVersion").addEventListener("click", function(e) {
    e.preventDefault();
    legalContent.innerHTML = versionText;
    modal.style.display = "block";
});

// Schließen bei Klick auf das X
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Schließen bei Klick außerhalb des Fensters
window.addEventListener("click", function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});
function checkWelcomeModal() {}
function closeWelcomeModal() {}

function openWelcomeLegal(type) {
  sounds.playClick();
  if (type === 'impressum') {
    legalContent.innerHTML = impressumText;
  } else if (type === 'datenschutz') {
    legalContent.innerHTML = datenschutzText;
  }
  modal.style.display = "block";
}

function setUiLock(locked) {
  const val = locked ? 'none' : 'auto';
  const grid = document.getElementById('grid');
  if (grid) grid.style.pointerEvents = val;
  const dialog = document.getElementById('quiz-dialog');
  if (dialog) dialog.style.pointerEvents = val;
  const categoryScreen = document.getElementById('category-screen');
  if (categoryScreen) categoryScreen.style.pointerEvents = val;
  const optionsContainer = document.getElementById('options-container');
  if (optionsContainer) optionsContainer.style.pointerEvents = val;
}

window.addEventListener('load', () => {
  // Check URL parameters for direct room code join
  const urlParams = new URLSearchParams(window.location.search);
  const roomCode = urlParams.get('room');
  if (roomCode && roomCode.length === 6 && !isNaN(roomCode)) {
    setTimeout(() => {
      if (typeof mpShowJoinScreenDirect === 'function') {
        mpShowJoinScreenDirect();
        const codeInput = document.getElementById('mp-join-code');
        if (codeInput) codeInput.value = roomCode;
      }
    }, 1200);
  }
});

function selectDuelChoice(choice) {
  sounds.playClick();
  const choiceDiag = document.getElementById('duel-choice-dialog');
  if (choiceDiag) {
    try { choiceDiag.close(); } catch(e) {}
  }
  const roleScreen = document.getElementById('duel-role-screen');
  if (roleScreen) roleScreen.style.display = 'none';
  
  document.getElementById('duel-mode-type').value = choice;
  document.getElementById('duel-setup-screen').style.display = 'flex';
  
  if (typeof duelToggleModeType === 'function') duelToggleModeType();
  if (typeof duelToggleP2Type === 'function') duelToggleP2Type();
}

function closeDuelChoiceDialog() {
  sounds.playClick();
  const choiceDiag = document.getElementById('duel-choice-dialog');
  if (choiceDiag) {
    try { choiceDiag.close(); } catch(e) {}
  }
  const roleScreen = document.getElementById('duel-role-screen');
  if (roleScreen) roleScreen.style.display = 'none';
  document.getElementById('mode-screen').style.display = 'flex';
}

function toggleQuestionTip() {
  const textEl = document.getElementById('q-tip-text');
  const countEl = document.getElementById('q-tip-count');
  const arrowEl = document.getElementById('q-tip-arrow');
  const currentTeamObj = (teams && teams[activeTeam]) ? teams[activeTeam] : null;

  if (!currentTeamObj) return;

  if (currentTeamObj.tipsLeft === undefined) {
    currentTeamObj.tipsLeft = 2;
  }

  if (textEl.style.display === 'block') {
    textEl.style.display = 'none';
    if (arrowEl) arrowEl.style.transform = 'rotate(0deg)';
  } else {
    if (currentTeamObj.tipsLeft > 0) {
      if (!tipOpenedForCurrentQuestion) {
        currentTeamObj.tipsLeft--;
        tipOpenedForCurrentQuestion = true;
      }
      textEl.style.display = 'block';
      if (arrowEl) arrowEl.style.transform = 'rotate(180deg)';
      sounds.playClick();
    } else {
      sounds.playError();
      alert("Dieses Team hat keine Tipps mehr übrig!");
    }
  }

  if (countEl) {
    countEl.innerText = currentTeamObj.tipsLeft;
  }
}
