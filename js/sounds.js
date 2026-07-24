  :root {
    --bg-gradient: radial-gradient(circle at 50% 50%, #f1f5f9 0%, #cbd5e1 100%);
    --bg-solid: #e2e8f0;
    --card-bg: rgba(255, 255, 255, 0.7);
    --card-border: rgba(15, 23, 42, 0.08);
    --card-hover: rgba(255, 255, 255, 0.9);
    --text-primary: #0f172a;
    --text-secondary: #475569;
    --accent: #0284c7;
    --accent-alt: #6d28d9;
    --accent-glow: rgba(2, 132, 199, 0.1);
    --gold: #d97706;
    --silver: #64748b;
    --bronze: #b45309;
    --success: #059669;
    --error: #e11d48;
    --shadow-color: rgba(15, 23, 42, 0.1);
    --p1-height: 160px;
    --p2-height: 120px;
    --p3-height: 85px;
  }

  body.dark-mode {
    --bg-gradient: radial-gradient(circle at 50% 50%, #08071a 0%, #020208 100%);
    --bg-solid: #03020a;
    --card-bg: rgba(255, 255, 255, 0.03);
    --card-border: rgba(255, 255, 255, 0.07);
    --card-hover: rgba(255, 255, 255, 0.07);
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --accent: #06b6d4; 
    --accent-alt: #8b5cf6; 
    --accent-glow: rgba(6, 182, 212, 0.15);
    --gold: #fbbf24;
    --silver: #cbd5e1;
    --bronze: #d97706;
    --success: #10b981;
    --error: #f43f5e;
    --shadow-color: rgba(0, 0, 0, 0.6);
  }

  * {
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: var(--accent) transparent;
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--accent);
    border-radius: 20px;
  }

  body { 
    font-family: 'Outfit', sans-serif; 
    background: var(--bg-gradient); 
    background-attachment: fixed;
    color: var(--text-primary); 
    margin: 0; 
    min-height: 100vh;
    transition: background 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mesh-glow {
    position: fixed;
    top: -10%;
    left: -10%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
    z-index: -1;
    pointer-events: none;
    animation: pulseGlow 10s infinite alternate ease-in-out;
  }

  .mesh-glow-2 {
    position: fixed;
    bottom: -10%;
    right: -10%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
    z-index: -1;
    pointer-events: none;
    animation: pulseGlow2 12s infinite alternate ease-in-out;
  }

  @keyframes pulseGlow {
    0% { transform: scale(1) translate(0, 0); }
    100% { transform: scale(1.1) translate(5%, 5%); }
  }
  @keyframes pulseGlow2 {
    0% { transform: scale(1) translate(0, 0); }
    100% { transform: scale(1.15) translate(-4%, -4%); }
  }

  .top-bar { 
    position: fixed; 
    top: 0; 
    left: 0;
    width: 100%;
    padding: 15px 30px;
    z-index: 1000; 
    display: flex; 
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--card-border);
    background: rgba(241, 245, 249, 0.3);
  }

  body.dark-mode .top-bar {
    background: rgba(3, 2, 10, 0.2);
  }

  .brand {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 2px;
    background: linear-gradient(135deg, var(--accent), var(--accent-alt));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .top-controls {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  #round-counter, #category-indicator { 
    font-weight: 600; 
    background: rgba(255, 255, 255, 0.05); 
    padding: 6px 14px; 
    border-radius: 30px;
    border: 1px solid var(--card-border);
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: var(--accent);
    text-transform: uppercase;
  }

  #category-indicator {
    color: var(--accent-alt);
    border-color: rgba(139, 92, 246, 0.3);
  }

  .btn-main { 
    background: var(--card-bg); 
    border: 1px solid var(--card-border); 
    color: var(--text-primary); 
    padding: 12px 24px; 
    cursor: pointer; 
    font-weight: 600; 
    border-radius: 12px; 
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
    text-transform: uppercase; 
    letter-spacing: 1px;
    font-size: 0.85rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .btn-main:hover:not(:disabled) { 
    background: linear-gradient(135deg, var(--accent), var(--accent-alt)); 
    border-color: transparent; 
    color: #ffffff; 
    box-shadow: 0 0 20px var(--accent-glow); 
    transform: translateY(-2px);
  }

  .btn-main:active:not(:disabled) {
    transform: translateY(1px);
  }

  .btn-main:disabled { 
    opacity: 0.2; 
    cursor: not-allowed; 
    border-color: gray; 
  }

  .btn-danger {
    border-color: rgba(244, 63, 94, 0.4);
    color: var(--error);
  }
  .btn-danger:hover:not(:disabled) {
    background: var(--error);
    border-color: transparent;
    color: white;
    box-shadow: 0 0 20px rgba(244, 63, 94, 0.3);
  }

  .screen { 
    width: 100%;
    min-height: 100vh;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    padding: 100px 20px 40px; 
    box-sizing: border-box;
    animation: fadeIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.97) translateY(15px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }

  .card-box { 
    background: var(--card-bg); 
    padding: 40px; 
    border-radius: 24px; 
    border: 1px solid var(--card-border); 
    backdrop-filter: blur(25px); 
    -webkit-backdrop-filter: blur(25px);
    max-width: 600px; 
    width: 100%; 
    box-shadow: 0 25px 50px -12px var(--shadow-color);
    transition: transform 0.3s ease;
    text-align: center;
  }

  .hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin: 10px 0;
    letter-spacing: -1px;
    background: linear-gradient(135deg, var(--text-primary) 30%, var(--accent) 70%, var(--accent-alt) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Category selection UI grid */
  .category-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 25px;
    width: 100%;
  }

  .category-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 16px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: left;
  }
  
  body.dark-mode .category-card {
    background: rgba(255,255,255,0.03);
  }

  .category-card:hover {
    border-color: var(--accent);
    background: var(--card-hover);
    transform: translateX(4px);
    box-shadow: 0 4px 15px var(--shadow-color);
  }

  body.dark-mode .category-card:hover {
    background: rgba(255,255,255,0.06);
  }

  .category-num {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--accent), var(--accent-alt));
    color: white;
    font-weight: 800;
    font-size: 1.25rem;
    font-family: 'Space Grotesk', sans-serif;
  }

  .category-details h3 {
    margin: 0 0 4px 0;
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--text-primary);
  }

  .category-details p {
    margin: 0;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .input-group {
    text-align: left;
    margin-bottom: 20px;
  }
  .input-label {
    font-size: 0.75rem; 
    font-weight: 700; 
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 8px; 
    display: block;
  }

  input[type="text"], input[type="number"] { 
    background: rgba(255, 255, 255, 0.6); 
    border: 1px solid var(--card-border); 
    color: var(--text-primary); 
    padding: 14px; 
    border-radius: 12px; 
    width: 100%; 
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
    font-family: inherit;
  }
  
  body.dark-mode input[type="text"], body.dark-mode input[type="number"] {
    background: rgba(0, 0, 0, 0.2);
  }

  input[type="text"]:focus, input[type="number"]:focus {
    border-color: var(--accent);
    box-shadow: 0 0 10px var(--accent-glow);
    background: rgba(255, 255, 255, 0.9);
  }
  body.dark-mode input[type="text"]:focus, body.dark-mode input[type="number"]:focus {
    background: rgba(0, 0, 0, 0.3);
  }

  .team-input-row {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
    animation: slideIn 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .game-container {
    width: 100%;
    max-width: 1200px;
    padding: 90px 20px 100px;
    display: none;
    flex-direction: column;
    gap: 30px;
    animation: fadeIn 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .scoreboard { 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 15px; 
    width: 100%;
  }

  .team-box { 
    padding: 16px 20px; 
    border-radius: 16px; 
    background: var(--card-bg); 
    border: 1px solid var(--card-border); 
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); 
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    position: relative;
    overflow: hidden;
  }

  .team-box.active { 
    border-color: var(--accent); 
    transform: scale(1.03) translateY(-2px); 
    box-shadow: 0 10px 25px var(--accent-glow); 
    background: rgba(6, 182, 212, 0.06);
  }
  
  .team-box.active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent-alt));
  }

  .team-rank-indicator {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 0.65rem;
    font-weight: 800;
    background: rgba(255,255,255,0.08);
    padding: 2px 6px;
    border-radius: 20px;
    color: var(--text-secondary);
  }

  .quiz-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); 
    gap: 15px; 
    width: 100%;
  }

  .card { 
    background: var(--card-bg); 
    border: 1px solid var(--card-border); 
    border-radius: 18px; 
    padding: 20px 10px 15px; 
    cursor: pointer; 
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    text-align: center;
    position: relative;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    overflow: hidden;
    animation: cardFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes cardFadeIn {
    from { opacity: 0; transform: translateY(20px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .card:hover { 
    border-color: var(--accent); 
    background: var(--card-hover); 
    transform: scale(1.05) translateY(-4px); 
    box-shadow: 0 12px 24px rgba(15,23,42,0.08);
  }

  .card:active {
    transform: scale(0.96) translateY(-2px);
    transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
  }

  body.dark-mode .card:hover {
    box-shadow: 0 15px 30px rgba(6, 182, 212, 0.22);
  }

  .card.played-out { 
    opacity: 0.15 !important; 
    pointer-events: none; 
    filter: grayscale(0.8); 
    border-color: transparent; 
  }

  .card-flag {
    font-size: 2.8rem; 
    margin-bottom: 8px;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));
    transition: transform 0.3s ease;
  }
  .card:hover .card-flag {
    transform: scale(1.1) rotate(3deg);
  }

  .card-name {
    font-weight: 600; 
    font-size: 0.85rem;
    margin-bottom: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    color: var(--text-primary);
  }

  .level-dots {
    display: flex;
    gap: 6px;
    justify-content: center;
    margin-top: auto;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid var(--text-secondary);
    transition: all 0.3s ease;
  }

  .dot.played {
    background-color: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 6px var(--accent);
  }

  dialog::backdrop {
    background: rgba(3, 2, 10, 0.85);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }

  /* Custom elastic bounce transition on modal open */
  dialog {
    border: 1px solid var(--card-border);
    background: var(--bg-solid);
    padding: 0;
    border-radius: 24px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    max-width: 650px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    overflow-x: hidden;
    color: var(--text-primary);
    transform: translateY(80px) scale(0.95);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  dialog[open] {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  .quiz-box { 
    padding: 40px; 
    text-align: center;
    background: var(--bg-gradient);
    min-height: 100%;
  }

  .modal-title {
    font-family: 'Space Grotesk', sans-serif;
    color: var(--gold); 
    margin-top: 0; 
    font-size: 2.2rem;
    font-weight: 700;
  }

  .diff-buttons-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 25px 0;
  }

  .btn-diff {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-radius: 14px;
    background: rgba(255,255,255,0.5);
    border: 1px solid var(--card-border);
    color: var(--text-primary);
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  body.dark-mode .btn-diff {
    background: rgba(255,255,255,0.02);
  }

  .btn-diff:hover:not(:disabled) {
    background: rgba(255,255,255,0.8);
    border-color: var(--accent);
    transform: translateX(4px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }

  body.dark-mode .btn-diff:hover:not(:disabled) {
    background: rgba(255,255,255,0.06);
  }

  .btn-diff:disabled {
    opacity: 0.15;
    cursor: not-allowed;
    text-decoration: line-through;
  }

  .btn-diff-tag {
    font-size: 0.75rem;
    padding: 4px 10px;
    border-radius: 20px;
    background: var(--card-border);
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .option { 
    background: rgba(255, 255, 255, 0.4); 
    border: 1px solid var(--card-border); 
    padding: 16px 20px; 
    margin: 12px 0; 
    border-radius: 12px; 
    cursor: pointer; 
    text-align: left; 
    transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1); 
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
  
  body.dark-mode .option {
    background: rgba(255,255,255,0.02);
  }

  .option:hover { 
    background: rgba(255, 255, 255, 0.8); 
    border-color: var(--accent); 
    transform: scale(1.01);
  }

  body.dark-mode .option:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .option-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: var(--card-border);
    font-weight: 700;
    font-size: 0.85rem;
    color: var(--accent);
    flex-shrink: 0;
  }

  .correct { 
    background: var(--success) !important; 
    color: white !important; 
    border-color: var(--success) !important;
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
  }
  .correct .option-badge {
    background: rgba(255,255,255,0.2) !important;
    color: white !important;
  }

  .wrong { 
    background: var(--error) !important; 
    color: white !important; 
    border-color: var(--error) !important;
    box-shadow: 0 0 15px rgba(244, 63, 148, 0.4);
  }
  .wrong .option-badge {
    background: rgba(255,255,255,0.2) !important;
    color: white !important;
  }

  /* Upgraded victory Spotlight & Podium */
  .winner-spotlight {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .winner-spotlight::before {
    content: '';
    position: absolute;
    top: -20px;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.25) 0%, transparent 70%);
    z-index: 0;
    pointer-events: none;
    animation: spotlightGlow 4s infinite alternate ease-in-out;
  }

  @keyframes spotlightGlow {
    from { transform: scale(0.9); opacity: 0.7; }
    to { transform: scale(1.15); opacity: 1; }
  }

  .trophy-svg {
    width: 110px;
    height: 110px;
    filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.4));
    margin-bottom: 20px;
    z-index: 1;
    animation: bounceTrophy 3s infinite ease-in-out;
  }

  @keyframes bounceTrophy {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(3deg); }
  }

  .podium-container { 
    display: flex; 
    align-items: flex-end; 
    justify-content: center; 
    gap: 15px; 
    margin: 30px 0 20px; 
    height: 280px; 
    width: 100%;
    z-index: 1;
  }

  .podium-step { 
    width: 140px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    opacity: 0;
    transform: translateY(50px);
  }

  .step-bar { 
    width: 100%; 
    border-radius: 16px 16px 0 0; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    font-weight: 800; 
    font-size: 2.8rem; 
    color: white; 
    box-shadow: 0 10px 30px rgba(0,0,0,0.3); 
    font-family: 'Space Grotesk', sans-serif;
    height: 0;
    overflow: hidden;
  }
  
  .podium-step.animate.p-3 {
    animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 0.5s;
  }
  .podium-step.animate.p-3 .step-bar {
    animation: growBar3 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 0.5s;
  }
  
  .podium-step.animate.p-2 {
    animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 1.8s;
  }
  .podium-step.animate.p-2 .step-bar {
    animation: growBar2 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 1.8s;
  }
  
  .podium-step.animate.p-1 {
    animation: slideUp 1.0s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 3.2s;
  }
  .podium-step.animate.p-1 .step-bar {
    animation: growBar1 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    animation-delay: 3.2s;
  }

  .p-1 .step-bar { background: linear-gradient(to top, #b45309, var(--gold)); border: 2px solid var(--gold); }
  .p-2 .step-bar { background: linear-gradient(to top, #475569, var(--silver)); border: 2px solid var(--silver); }
  .p-3 .step-bar { background: linear-gradient(to top, #78350f, var(--bronze)); border: 2px solid var(--bronze); }
  
  .podium-name { 
    font-weight: 700; 
    margin-bottom: 8px; 
    text-align: center; 
    font-size: 0.95rem; 
    width: 100%; 
    max-width: 140px; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap; 
    color: var(--text-primary);
  }

  .crown-icon {
    font-size: 2.2rem;
    margin-bottom: -5px;
    animation: floatCrown 2.5s ease-in-out infinite;
    opacity: 0;
    transform: scale(0) translateY(10px);
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 2;
  }
  .podium-step.animate.p-1 .crown-icon {
    opacity: 1;
    transform: scale(1) translateY(0);
    transition-delay: 4.4s;
  }
  
  @keyframes floatCrown {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(4deg); }
  }
  
  @keyframes growBar1 { from { height: 0; } to { height: var(--p1-height); } }
  @keyframes growBar2 { from { height: 0; } to { height: var(--p2-height); } }
  @keyframes growBar3 { from { height: 0; } to { height: var(--p3-height); } }
  
  @keyframes slideUp { 
    to { transform: translateY(0); opacity: 1; } 
  }

  @keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .ranks-list {
    width: 100%;
    max-width: 450px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 1;
  }

  .rank-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    padding: 12px 20px;
    border-radius: 12px;
    font-size: 0.95rem;
  }

  .finish-btn-fixed {
    position: fixed; 
    bottom: 25px; 
    left: 50%; 
    transform: translateX(-50%); 
    z-index: 500;
    display: none; 
    animation: fadeIn 0.4s ease;
  }

  .switch { 
    position: relative; 
    display: inline-block; 
    width: 48px; 
    height: 24px; 
  }
  .switch input { opacity: 0; width: 0; height: 0; }
  .slider { 
    position: absolute; 
    cursor: pointer; 
    top: 0; left: 0; right: 0; bottom: 0; 
    background-color: rgba(0,0,0,0.05); 
    transition: .3s; 
    border-radius: 30px; 
    border: 1px solid var(--card-border);
  }
  body.dark-mode .slider {
    background-color: rgba(255,255,255,0.1);
  }
  .slider:before { 
    position: absolute; 
    content: ""; 
    height: 16px; 
    width: 16px; 
    left: 3px; 
    bottom: 3px; 
    background-color: var(--text-primary); 
    transition: .3s cubic-bezier(0.18, 0.89, 0.32, 1.28); 
    border-radius: 50%; 
  }
  input:checked + .slider { background-color: var(--accent-glow); border-color: var(--accent); }
  input:checked + .slider:before { transform: translateX(24px); background-color: var(--accent); }

  #confetti-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 3000;
    display: none;
  }

  #setup-err {
    background: rgba(244, 63, 94, 0.08);
    border: 1px solid var(--error);
    color: var(--error);
    padding: 12px;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-top: 15px;
    display: none;
  }

  /* --- Ultimate Upgrade Premium CSS Styles --- */

  /* Completed flag silver star */
  .silver-star {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(226, 232, 240, 0.25);
    border: 1px solid #cbd5e1;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(226, 232, 240, 0.4);
    animation: pulseStar 1.8s infinite alternate ease-in-out;
    z-index: 5;
  }
  @keyframes pulseStar {
    0% { transform: scale(1); }
    100% { transform: scale(1.15); box-shadow: 0 0 16px rgba(226, 232, 240, 0.7); }
  }

  /* Card played-out premium adjustments */
  .card.played-out { 
    opacity: 0.55; 
    pointer-events: none; 
    border-color: rgba(251, 191, 36, 0.4); 
    box-shadow: 0 0 15px rgba(251, 191, 36, 0.15);
  }

  /* Countdown timer visual bar */
  .timer-glow-warning {
    animation: timerPulse 0.5s infinite alternate ease-in-out;
  }
  @keyframes timerPulse {
    0% { box-shadow: 0 0 5px var(--error); }
    100% { box-shadow: 0 0 15px var(--error); }
  }

  /* Active soundtrack mute controls */
  #music-toggle-btn {
    border-color: var(--success);
    color: var(--success);
    transition: all 0.3s ease;
  }
  #music-toggle-btn:hover {
    transform: scale(1.05);
  }

  /* Option card wrong/correct rescue effects */
  .option.wrong {
    background: var(--error) !important;
    border-color: var(--error) !important;
    color: white !important;
    box-shadow: 0 0 15px rgba(244, 63, 94, 0.4);
    animation: shakeWrong 0.4s cubic-bezier(.36,.07,.19,.97) both;
  }
  .option.wrong .option-badge {
    background: rgba(255, 255, 255, 0.2) !important;
    color: white !important;
  }
  .option.correct {
    background: var(--success) !important;
    border-color: var(--success) !important;
    color: white !important;
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
    animation: pulseCorrect 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  .option.correct .option-badge {
    background: rgba(255, 255, 255, 0.2) !important;
    color: white !important;
  }

  @keyframes shakeWrong {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(2px, 0, 0); }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(4px, 0, 0); }
  }
  @keyframes pulseCorrect {
    0% { transform: scale(1); }
    50% { transform: scale(1.04); }
    100% { transform: scale(1); }
  }

  /* Zoom-in animation on card click */
  .card.zoom-active {
    transform: scale(1.25);
    border-color: var(--accent);
    box-shadow: 0 0 30px var(--accent);
    z-index: 10;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  /* 50:50 Joker Glitch Animation */
  .option.glitch-out {
    animation: glitchEffect 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    pointer-events: none;
  }
  @keyframes glitchEffect {
    0% { transform: translate(0) scale(1); opacity: 1; filter: hue-rotate(0deg); }
    10% { transform: translate(-2px, 2px) scale(0.98); opacity: 0.8; filter: hue-rotate(90deg); }
    20% { transform: translate(2px, -1px) scale(1.02); opacity: 0.4; }
    30% { transform: translate(-1px, -2px) scale(0.97); opacity: 0.9; }
    40% { transform: translate(3px, 1px) scale(1.01); opacity: 0.2; filter: hue-rotate(180deg); }
    50% { transform: translate(-2px, -2px) scale(0.99); opacity: 0.75; }
    60% { transform: translate(1px, 2px) scale(0.95); opacity: 0.1; }
    70% { transform: translate(-1px, 1px) scale(1.02); opacity: 0.6; filter: hue-rotate(270deg); }
    80% { transform: translate(2px, -2px) scale(0.98); opacity: 0.15; }
    90% { transform: translate(-2px, 1px) scale(1.01); opacity: 0.3; }
    100% { transform: translate(0) scale(0.95); opacity: 0.08; filter: blur(2px) grayscale(1); }
  }

  /* Card mastery particle rain / explosion */
  .mastery-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--gold);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10;
    animation: explodeParticle 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
  }
  @keyframes explodeParticle {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
  }

  /* Ensure card allows particles to fly out */
  .card {
    overflow: visible !important;
  }

  /* --- RESPONSIVE DESIGN (MEDIA QUERIES) --- */
  @media (max-width: 768px) {
    :root {
      --p1-height: 120px;
      --p2-height: 90px;
      --p3-height: 65px;
    }
    .hero-title {
      font-size: 2.2rem;
    }
    #win-heading {
      font-size: 2.2rem !important;
    }
    .card-box {
      padding: 24px 16px;
    }
    .quiz-box {
      padding: 24px 16px;
    }
    .modal-title {
      font-size: 1.6rem;
    }
    .top-bar {
      padding: 10px 15px;
    }
    .brand {
      font-size: 1rem;
    }
    .finish-btn-fixed {
      bottom: 15px;
      right: 15px;
      padding: 10px 15px;
      font-size: 0.8rem;
    }
    .podium-container {
      height: 220px;
      gap: 8px;
      padding: 0 10px;
    }
    .podium-step.p-1 {
      width: 100px;
    }
    .podium-step.p-2, .podium-step.p-3 {
      width: 80px;
    }
    .podium-name {
      font-size: 0.75rem !important;
      max-width: 90px;
    }
    .game-container {
      padding: 75px 12px 60px;
      gap: 15px;
    }
    .scoreboard {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-bottom: 8px;
      gap: 10px;
      -webkit-overflow-scrolling: touch;
    }
    .scoreboard::-webkit-scrollbar {
      height: 4px;
    }
    .scoreboard::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.02);
    }
    .scoreboard::-webkit-scrollbar-thumb {
      background: rgba(6, 182, 212, 0.3);
      border-radius: 10px;
    }
    .team-box {
      flex: 0 0 140px;
      scroll-snap-align: start;
      padding: 10px 8px;
      border-radius: 12px;
    }
    .team-box.active {
      transform: scale(1.02);
    }
  }

  @media (max-width: 600px) {
    #category-indicator {
      display: none !important;
    }
    .top-bar {
      padding: 8px 12px;
    }
    .brand {
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
    .top-controls {
      gap: 8px;
    }
    #round-counter {
      padding: 4px 8px;
      font-size: 0.7rem;
    }
    #music-toggle-btn span {
      display: none !important;
    }
    #music-toggle-btn {
      padding: 6px !important;
      width: 32px !important;
      height: 32px !important;
      border-radius: 50% !important;
      justify-content: center !important;
    }
  }

  @media (max-width: 480px) {
    .quiz-grid {
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      gap: 8px;
    }
    .card {
      padding: 12px 6px 8px;
      border-radius: 12px;
    }
    .card-flag {
      font-size: 2rem;
      margin-bottom: 4px;
    }
    .card-name {
      font-size: 0.72rem;
      margin-bottom: 6px;
    }
    .level-dots .dot {
      width: 4px;
      height: 4px;
    }
    .silver-star {
      width: 18px;
      height: 18px;
      top: 4px;
      right: 4px;
    }
    .silver-star svg {
      width: 10px;
      height: 10px;
    }
    .btn-diff {
      padding: 12px 16px;
      font-size: 0.9rem;
    }
    .option {
      padding: 12px 15px;
      font-size: 0.9rem;
    }
    .btn-main {
      padding: 12px 20px;
      font-size: 0.9rem;
    }
    .category-card {
      padding: 12px;
      gap: 12px;
    }
    .category-num {
      width: 36px;
      height: 36px;
      font-size: 1.05rem;
      border-radius: 8px;
    }
    .category-details h3 {
      font-size: 0.95rem;
    }
    .category-details p {
      font-size: 0.75rem;
    }
  }

  /* iOS spring active press states */
  .btn-main:active, .btn-diff:active, .option:active {
    transform: scale(0.96);
    transition: transform 0.12s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Multiplayer CSS styles */
  .mp-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .mp-lobby-code {
    font-size: 4rem;
    font-weight: 800;
    font-family: 'Space Grotesk', sans-serif;
    color: var(--gold);
    letter-spacing: 5px;
    background: rgba(251, 191, 36, 0.1);
    padding: 10px 30px;
    border-radius: 16px;
    border: 1px dashed var(--gold);
    text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
    margin: 15px 0;
    display: inline-block;
  }
  .mp-players-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 15px;
    width: 100%;
    margin-top: 20px;
  }
  .mp-player-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    padding: 15px;
    border-radius: 12px;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    color: var(--text-primary);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    animation: fadeInScale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes fadeInScale {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes floatLeftPhone {
    0%, 100% { transform: translateY(0) rotate(-15deg); }
    50% { transform: translateY(-6px) rotate(-12deg); }
  }
  @keyframes floatRightPhone {
    0%, 100% { transform: translateY(0) rotate(12deg); }
    50% { transform: translateY(-6px) rotate(15deg); }
  }
  .mp-host-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    min-width: 28px;
    padding: 0 8px;
    height: 28px;
    border-radius: 8px;
    font-weight: 800;
    font-size: 1rem;
    color: white;
    margin-right: 12px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    font-family: 'Space Grotesk', sans-serif;
  }
  
  /* Controller layout */
  .mp-controller-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 15px;
    width: 100%;
    height: 60vh;
    max-height: 500px;
    margin-top: 20px;
  }
  .mp-btn-option {
    border: none;
    border-radius: 20px;
    color: white;
    font-weight: 800;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    transition: transform 0.1s, box-shadow 0.2s;
  }
  .mp-btn-option:active {
    transform: scale(0.95);
  }
  .mp-btn-red {
    background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
  }
  .mp-btn-blue {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
  }
  .mp-btn-yellow {
    background: linear-gradient(135deg, #eab308 0%, #a16207 100%);
    box-shadow: 0 4px 15px rgba(234, 179, 8, 0.4);
  }
  .mp-btn-green {
    background: linear-gradient(135deg, #22c55e 0%, #15803d 100%);
    box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);
  }
  .mp-btn-shape {
    font-size: 3.5rem;
    opacity: 0.8;
  }
  
  /* MP Stats Chart */
  .mp-stats-bar-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 100%;
    height: 180px;
    margin-top: 30px;
    background: rgba(255,255,255,0.02);
    border: 1px solid var(--card-border);
    border-radius: 16px;
    padding: 15px;
  }
  .mp-stats-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    height: 100%;
    justify-content: flex-end;
  }
  .mp-stats-bar {
    width: 100%;
    border-radius: 8px 8px 0 0;
    transition: height 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    min-height: 5px;
  }
  .mp-stats-label {
    margin-top: 8px;
    font-weight: 700;
    font-size: 1rem;
  }
  
  /* Leaderboard details */
  .mp-leaderboard-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    padding: 15px 20px;
    border-radius: 12px;
    margin-bottom: 10px;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .mp-leaderboard-row.podium-1 {
    border-color: var(--gold);
    background: rgba(251, 191, 36, 0.05);
  }
  .mp-leaderboard-rank {
    width: 30px;
    font-weight: 800;
    font-family: 'Space Grotesk', sans-serif;
  }
  .mp-leaderboard-name {
    flex: 1;
    text-align: left;
    margin-left: 10px;
  }
  .mp-leaderboard-score {
    font-family: 'Space Grotesk', sans-serif;
    color: var(--accent);
  }

  .loader-circle {
    width: 50px;
    height: 50px;
    border: 4px solid var(--card-border);
    border-top: 4px solid var(--accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Accessibility Styles */
  body.access-text-large { font-size: 1.2rem !important; }
  body.access-text-large .card-box { max-width: 750px !important; }
  body.access-text-large h1 { font-size: 3.5rem !important; }
  body.access-text-large h2 { font-size: 2.2rem !important; }
  body.access-text-large h3 { font-size: 1.6rem !important; }
  body.access-text-large p, body.access-text-large div, body.access-text-large span, body.access-text-large button { font-size: 1.1rem !important; }
  body.access-text-large .option { font-size: 1.15rem !important; }
  body.access-text-large #q-text { font-size: 1.6rem !important; }

  body.access-text-xlarge { font-size: 1.4rem !important; }
  body.access-text-xlarge .card-box { max-width: 850px !important; }
  body.access-text-xlarge h1 { font-size: 4rem !important; }
  body.access-text-xlarge h2 { font-size: 2.5rem !important; }
  body.access-text-xlarge h3 { font-size: 1.8rem !important; }
  body.access-text-xlarge p, body.access-text-xlarge div, body.access-text-xlarge span, body.access-text-xlarge button { font-size: 1.3rem !important; }
  body.access-text-xlarge .option { font-size: 1.35rem !important; }
  body.access-text-xlarge #q-text { font-size: 1.9rem !important; }

  body.accessibility-high-contrast {
    background: #000000 !important;
    color: #ffffff !important;
    --bg-gradient: #000000;
    --card-bg: #000000;
    --card-border: #ffffff;
    --text-primary: #ffffff;
    --text-secondary: #ffff00;
    --accent: #ffff00;
    --accent-alt: #00ffff;
    --gold: #ffff00;
  }
  body.accessibility-high-contrast .card-box {
    background: #000000 !important;
    border: 2px solid #ffffff !important;
    box-shadow: none !important;
  }
  body.accessibility-high-contrast .option {
    background: #000000 !important;
    border: 2px solid #ffffff !important;
    color: #ffffff !important;
  }
  body.accessibility-high-contrast .option:hover {
    background: #222222 !important;
    border-color: #ffff00 !important;
  }
  body.accessibility-high-contrast .btn-main {
    background: #000000 !important;
    border: 2px solid #ffffff !important;
    color: #ffffff !important;
  }
  body.accessibility-high-contrast .btn-main:hover {
    background: #222222 !important;
    border-color: #ffff00 !important;
  }
  body.accessibility-high-contrast svg {
    stroke: #ffffff !important;
  }

  /* EU-Handbuch Grid and Cards */
  .handbook-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 12px;
    margin-top: 15px;
    max-height: 380px;
    overflow-y: auto;
    padding-right: 8px;
  }
  .handbook-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease;
  }
  .handbook-card:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
  }
  .handbook-card.locked {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .handbook-card.locked:hover {
    transform: none;
    border-color: var(--card-border);
  }

  /* Emotes Floating */
  @keyframes floatEmote {
    0% { transform: translateY(0) scale(0.8); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-300px) scale(1.2); opacity: 0; }
  }
  .floating-emote {
    position: fixed;
    font-size: 2.5rem;
    pointer-events: none;
    z-index: 10001;
    animation: floatEmote 2.5s ease-in-out forwards;
  }

  /* Welcome Modal Animation */
  @keyframes modalScaleIn {
    0% { transform: scale(0.9) translateY(20px); opacity: 0; }
    100% { transform: scale(1) translateY(0); opacity: 1; }
  }
  .modal-animate-in {
    animation: modalScaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
