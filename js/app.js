// YKS-YDT Modals Masterclass Interactive Application Controller (Enhanced with Learning Tools)
class YDTAppController {
  constructor(data) {
    this.data = data;
    this.userAnswers = JSON.parse(localStorage.getItem("ydt_user_answers_v2") || "{}");
    this.clueModeActive = localStorage.getItem("ydt_clue_mode") === "true";
    this.totalTasks = 42;
    
    // Flashcard State
    this.currentFlashcardIdx = 0;
    this.flashcardsList = [...this.data.cheatSheet];

    // Rapid Drill State
    this.rapidTimer = 60;
    this.rapidScore = 0;
    this.rapidInterval = null;
    this.currentRapidQIdx = 0;
    this.rapidQuestions = [...this.data.rapidDrill];

    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupToolbox();
    this.renderModules();
    this.renderMixedExam();
    this.renderCheatSheet();
    this.renderFlashcard();
    this.updateScoreStats();
    this.applyClueMode();
  }

  setupNavigation() {
    // Mobile toggle
    const toggleBtn = document.getElementById("sidebarToggleBtn");
    const sidebar = document.getElementById("sidebar");
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("mobile-open");
      });
    }

    // Sidebar navigation buttons
    document.querySelectorAll(".sidebar-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetNav = btn.getAttribute("data-nav");
        this.navigateTo(targetNav);
        if (sidebar && window.innerWidth <= 900) {
          sidebar.classList.remove("mobile-open");
        }
      });
    });
  }

  navigateTo(targetNav) {
    // Update active button
    document.querySelectorAll(".sidebar-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-nav") === targetNav);
    });

    // Show selected view panel
    document.querySelectorAll(".view-panel").forEach(panel => {
      panel.style.display = panel.id === `view-${targetNav}` ? "block" : "none";
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  setupToolbox() {
    // Clue Highlighter Toggle
    const toggleBtn = document.getElementById("toggleClueModeBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        this.clueModeActive = !this.clueModeActive;
        localStorage.setItem("ydt_clue_mode", this.clueModeActive);
        this.applyClueMode();
      });
    }
  }

  applyClueMode() {
    document.body.classList.toggle("clue-mode-active", this.clueModeActive);
    const textEl = document.getElementById("clueModeStateText");
    const toggleBtn = document.getElementById("toggleClueModeBtn");
    if (textEl && toggleBtn) {
      textEl.textContent = this.clueModeActive ? "AÇIK ✨" : "KAPALI";
      toggleBtn.classList.toggle("active", this.clueModeActive);
    }
    // Re-render questions with/without tagged highlights
    this.updateQuestionTextDisplays();
  }

  updateQuestionTextDisplays() {
    // Checkpoints & in-flight
    this.data.modules.forEach(mod => {
      mod.theorySections.forEach(sec => {
        const qQuoteEl = document.getElementById(`quote-text-${sec.inFlightCheck.id}`);
        if (qQuoteEl) {
          qQuoteEl.innerHTML = this.clueModeActive && sec.inFlightCheck.sentenceTagged
            ? sec.inFlightCheck.sentenceTagged
            : sec.inFlightCheck.sentence;
        }
      });

      mod.checkpoints.forEach(cp => {
        const qTextEl = document.getElementById(`qtext-${cp.id}`);
        if (qTextEl) {
          qTextEl.innerHTML = this.clueModeActive && cp.questionTagged
            ? cp.questionTagged
            : cp.question;
        }
      });
    });

    // Mixed Exam
    this.data.mixedExam.questions.forEach(q => {
      const qTextEl = document.getElementById(`qtext-${q.id}`);
      if (qTextEl) {
        qTextEl.innerHTML = this.clueModeActive && q.questionTagged
          ? q.questionTagged
          : q.question;
      }
    });
  }

  speakText(text) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      // Remove HTML tags for clean audio
      const cleanText = text.replace(/<[^>]*>?/gm, "").replace(/\[.*?\]/g, "");
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = "en-US";
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  }

  renderModules() {
    this.data.modules.forEach(mod => {
      const container = document.getElementById(`view-module${mod.number}`);
      if (!container) return;

      let html = `
        <div class="module-banner">
          <span class="module-tag">MODÜL ${mod.number}</span>
          <h1 class="module-title-text">${mod.title}</h1>
          <p class="module-subtext"><strong>${mod.subtitle}</strong> — ${mod.overview}</p>
        </div>
      `;

      // Theory Sections & In-Flight Checks
      mod.theorySections.forEach((sec) => {
        html += `
          <div class="theory-card">
            <h2 class="card-title-lg">${sec.heading}</h2>
            <div>${sec.content}</div>

            ${sec.clueBox ? `
              <div class="clue-box-gold">
                <div class="clue-box-gold-title">${sec.clueBox.title}</div>
                <ul>
                  ${sec.clueBox.items.map(item => `<li>${item}</li>`).join("")}
                </ul>
              </div>
            ` : ""}

            <!-- In-Flight Micro Check Drill -->
            <div class="in-flight-container" id="card-${sec.inFlightCheck.id}">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div class="in-flight-header-tag">⚡ Mikro-Kontrol (In-Flight Check)</div>
                <button class="btn-speech" onclick="app.speakText('${sec.inFlightCheck.sentence.replace(/'/g, "\\'")}')" title="İngilizce Telaffuzu Dinle">🔊 Dinle</button>
              </div>
              <p class="in-flight-prompt">${sec.inFlightCheck.prompt}</p>
              <div class="in-flight-quote" id="quote-text-${sec.inFlightCheck.id}">
                ${this.clueModeActive && sec.inFlightCheck.sentenceTagged ? sec.inFlightCheck.sentenceTagged : sec.inFlightCheck.sentence}
              </div>

              <div class="choice-buttons-row" id="group-${sec.inFlightCheck.id}">
                ${sec.inFlightCheck.options.map(opt => `
                  <button class="btn-pill-choice" data-qid="${sec.inFlightCheck.id}" data-val="${opt}" onclick="app.submitInFlightAnswer('${sec.inFlightCheck.id}', '${opt}', '${sec.inFlightCheck.correctOption}')">
                    ${opt}
                  </button>
                `).join("")}
              </div>

              <div class="feedback-drawer" id="feedback-${sec.inFlightCheck.id}">
                <div id="msg-${sec.inFlightCheck.id}" style="font-size:0.95rem; font-weight:700; margin-bottom:0.4rem;"></div>
                <div style="font-size:0.88rem; color:var(--text-main);"><strong>💡 İpucu:</strong> ${sec.inFlightCheck.clue}</div>
                <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:3px;"><strong>🇹🇷 Çeviri:</strong> ${sec.inFlightCheck.translation}</div>
              </div>
            </div>

          </div>
        `;
      });

      // Module Checkpoint MCQs (5 Questions)
      html += `
        <div class="checkpoint-section">
          <div class="checkpoint-top-bar">
            <div class="checkpoint-head-title">🎯 Modül ${mod.number} Checkpoint (Pekiştirme Soruları)</div>
            <span class="checkpoint-count-pill">${mod.checkpoints.length} Soru</span>
          </div>
          <div class="checkpoint-list">
            ${mod.checkpoints.map(cp => this.createMCQCard(cp, `cp_${mod.number}`)).join("")}
          </div>
        </div>
      `;

      container.innerHTML = html;
    });
  }

  createMCQCard(q, categoryPrefix) {
    const opts = q.customDisplayOptions || q.options;
    const initialText = this.clueModeActive && q.questionTagged ? q.questionTagged : q.question;
    return `
      <div class="mcq-card" id="qcard-${q.id}">
        <div class="mcq-top">
          <span class="mcq-number-badge">Soru ${q.questionNumber || q.number}</span>
          <div style="display:flex; align-items:center; gap:6px;">
            <button class="btn-speech" onclick="app.speakText('${q.question.replace(/'/g, "\\'")}')" title="Sesli Oku">🔊 Dinle</button>
            <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">YDT Seviyesi</span>
          </div>
        </div>
        <div class="mcq-question-text" id="qtext-${q.id}">${initialText}</div>
        <div class="options-vertical-list" id="opts-${q.id}">
          ${opts.map(opt => `
            <button class="option-btn" data-qid="${q.id}" data-key="${opt.key}" onclick="app.submitMCQAnswer('${q.id}', '${opt.key}', '${q.correctKey}')">
              <span class="option-key-bubble">${opt.key}</span>
              <span>${opt.text}</span>
            </button>
          `).join("")}
        </div>
        <button class="btn-reveal-solution" onclick="app.toggleSolution('${q.id}')">
          🔍 Detaylı Çözümü ve İpuçlarını Aç/Kapat
        </button>
        <div class="explanation-card" id="exp-${q.id}">
          <div class="explanation-title">📋 Çözüm & Çeldirici Analizi</div>
          <div>${q.explanation}</div>
        </div>
      </div>
    `;
  }

  renderMixedExam() {
    const container = document.getElementById("mixedExamList");
    if (!container) return;

    let html = `
      <div class="theory-card" style="border-left:4px solid var(--orange-500); background:linear-gradient(135deg, white, var(--orange-50));">
        <h3 style="color:var(--orange-700); font-size:1.15rem; margin-bottom:0.4rem;">📝 Sınav Yönergesi & Hedef</h3>
        <p style="font-size:0.9rem; color:var(--text-secondary);">
          Bu 10 soruluk deneme testi YKS-YDT formatında, A-E beş seçenekli, gelişmiş akademik metinler, bağlaçlar ve zaman ipuçlarıyla donatılmıştır. Sınav hedefiniz <strong>10/10</strong> tam net yapmaktır.
        </p>
      </div>
    `;

    html += this.data.mixedExam.questions.map(q => this.createMCQCard(q, "mixed")).join("");
    container.innerHTML = html;
  }

  renderCheatSheet() {
    const grid = document.getElementById("cheatSheetContainer");
    if (!grid) return;

    grid.innerHTML = this.data.cheatSheet.map(item => `
      <div class="cheat-pill-card">
        <div class="cheat-modal-name">${item.modal}</div>
        <div class="cheat-modal-use">${item.usage}</div>
        <div class="cheat-modal-tr">${item.turkish}</div>
        <div class="cheat-modal-ex">"${item.example}"</div>
      </div>
    `).join("");
  }

  submitInFlightAnswer(taskId, chosenVal, correctVal) {
    const isCorrect = chosenVal === correctVal;
    this.userAnswers[taskId] = { correct: isCorrect, chosen: chosenVal };
    localStorage.setItem("ydt_user_answers_v2", JSON.stringify(this.userAnswers));

    const group = document.getElementById(`group-${taskId}`);
    if (group) {
      group.querySelectorAll(".btn-pill-choice").forEach(btn => {
        const val = btn.getAttribute("data-val");
        btn.classList.remove("correct-ans", "wrong-ans");
        if (val === correctVal) {
          btn.classList.add("correct-ans");
        } else if (val === chosenVal && !isCorrect) {
          btn.classList.add("wrong-ans");
        }
      });
    }

    const drawer = document.getElementById(`feedback-${taskId}`);
    const msgEl = document.getElementById(`msg-${taskId}`);
    if (drawer && msgEl) {
      drawer.classList.add("active");
      msgEl.innerHTML = isCorrect
        ? `<span style="color:var(--teal-700);">✓ Doğru Seçim! "${correctVal}"</span>`
        : `<span style="color:var(--red-600);">✗ Yanlış! Doğru Seçim "${correctVal}" olmalıydı.</span>`;
    }

    this.updateScoreStats();
  }

  submitMCQAnswer(qId, chosenKey, correctKey) {
    const isCorrect = chosenKey === correctKey;
    this.userAnswers[qId] = { correct: isCorrect, chosen: chosenKey };
    localStorage.setItem("ydt_user_answers_v2", JSON.stringify(this.userAnswers));

    const optsList = document.getElementById(`opts-${qId}`);
    if (optsList) {
      optsList.querySelectorAll(".option-btn").forEach(btn => {
        const key = btn.getAttribute("data-key");
        btn.classList.remove("opt-correct", "opt-wrong");
        if (key === correctKey) {
          btn.classList.add("opt-correct");
        } else if (key === chosenKey && !isCorrect) {
          btn.classList.add("opt-wrong");
        }
      });
    }

    // Automatically expand explanation
    const exp = document.getElementById(`exp-${qId}`);
    if (exp) {
      exp.classList.add("active");
    }

    this.updateScoreStats();
  }

  toggleSolution(qId) {
    const exp = document.getElementById(`exp-${qId}`);
    if (exp) {
      exp.classList.toggle("active");
    }
  }

  updateScoreStats() {
    let score = 0;
    let completed = 0;

    Object.values(this.userAnswers).forEach(ans => {
      completed++;
      if (ans.correct) score++;
    });

    const scoreBadge = document.getElementById("scoreBadge");
    if (scoreBadge) {
      scoreBadge.textContent = `${score} / ${this.totalTasks}`;
    }

    const percentage = Math.min(100, Math.round((completed / this.totalTasks) * 100));
    const progressBar = document.getElementById("scoreProgressBar");
    if (progressBar) {
      progressBar.style.width = `${percentage}%`;
    }

    const percentBadge = document.getElementById("percentBadge");
    if (percentBadge) {
      percentBadge.textContent = `%${percentage} Tamamlandı (${score} Doğru)`;
    }

    this.restoreStates();
  }

  restoreStates() {
    Object.entries(this.userAnswers).forEach(([id, ans]) => {
      // In-flight
      const group = document.getElementById(`group-${id}`);
      if (group) {
        group.querySelectorAll(".btn-pill-choice").forEach(btn => {
          const val = btn.getAttribute("data-val");
          if (ans.correct && val === ans.chosen) {
            btn.classList.add("correct-ans");
          } else if (!ans.correct && val === ans.chosen) {
            btn.classList.add("wrong-ans");
          }
        });
      }

      // MCQ
      const opts = document.getElementById(`opts-${id}`);
      if (opts) {
        opts.querySelectorAll(".option-btn").forEach(btn => {
          const key = btn.getAttribute("data-key");
          if (ans.correct && key === ans.chosen) {
            btn.classList.add("opt-correct");
          } else if (!ans.correct && key === ans.chosen) {
            btn.classList.add("opt-wrong");
          }
        });
      }
    });
  }

  // --- TOOL 1: DECISION TREE LOGIC ---
  setDecisionTime(timeType) {
    document.getElementById("btn-dt-present")?.classList.toggle("selected", timeType === "present");
    document.getElementById("btn-dt-past")?.classList.toggle("selected", timeType === "past");

    const step2Container = document.getElementById("decisionStep2Container");
    const catGrid = document.getElementById("decisionCategoryGrid");
    const resultBox = document.getElementById("decisionResultBox");

    if (resultBox) resultBox.classList.remove("active");
    if (step2Container && catGrid) {
      step2Container.style.display = "block";
      const categories = this.data.decisionTree.categories[timeType] || [];
      catGrid.innerHTML = categories.map(cat => `
        <button class="step-card-option" onclick="app.showDecisionResult('${cat.result}', '${cat.example.replace(/'/g, "\\'")}', '${cat.note.replace(/'/g, "\\'")}', this)">
          ${cat.label}
        </button>
      `).join("");
    }
  }

  showDecisionResult(formula, example, note, btnEl) {
    document.querySelectorAll("#decisionCategoryGrid .step-card-option").forEach(b => b.classList.remove("selected"));
    if (btnEl) btnEl.classList.add("selected");

    const resultBox = document.getElementById("decisionResultBox");
    const formEl = document.getElementById("dtResultFormula");
    const exEl = document.getElementById("dtResultExample");
    const noteEl = document.getElementById("dtResultNote");

    if (resultBox && formEl && exEl && noteEl) {
      formEl.textContent = formula;
      exEl.textContent = `Örnek: "${example}"`;
      noteEl.textContent = note;
      resultBox.classList.add("active");
    }
  }

  // --- TOOL 2: 3D FLASHCARD LOGIC ---
  renderFlashcard() {
    const cardData = this.flashcardsList[this.currentFlashcardIdx];
    if (!cardData) return;

    const frontModal = document.getElementById("fcFrontModal");
    const frontUsage = document.getElementById("fcFrontUsage");
    const backTr = document.getElementById("fcBackTurkish");
    const backEx = document.getElementById("fcBackExample");
    const counter = document.getElementById("fcCounterText");
    const cardEl = document.getElementById("flashcardElement");

    if (cardEl) cardEl.classList.remove("flipped");
    if (frontModal) frontModal.textContent = cardData.modal;
    if (frontUsage) frontUsage.textContent = cardData.usage;
    if (backTr) backTr.textContent = cardData.turkish;
    if (backEx) backEx.textContent = `"${cardData.example}"`;
    if (counter) counter.textContent = `${this.currentFlashcardIdx + 1} / ${this.flashcardsList.length}`;
  }

  flipFlashcard() {
    const cardEl = document.getElementById("flashcardElement");
    if (cardEl) cardEl.classList.toggle("flipped");
  }

  nextFlashcard() {
    this.currentFlashcardIdx = (this.currentFlashcardIdx + 1) % this.flashcardsList.length;
    this.renderFlashcard();
  }

  prevFlashcard() {
    this.currentFlashcardIdx = (this.currentFlashcardIdx - 1 + this.flashcardsList.length) % this.flashcardsList.length;
    this.renderFlashcard();
  }

  shuffleFlashcards() {
    this.flashcardsList.sort(() => Math.random() - 0.5);
    this.currentFlashcardIdx = 0;
    this.renderFlashcard();
  }

  // --- TOOL 3: RAPID 60S TRAP HUNTER LOGIC ---
  startRapidGame() {
    this.rapidTimer = 60;
    this.rapidScore = 0;
    this.currentRapidQIdx = 0;
    this.rapidQuestions.sort(() => Math.random() - 0.5);

    document.getElementById("rapidStartScreen").style.display = "none";
    document.getElementById("rapidPlayScreen").style.display = "block";

    this.renderRapidQuestion();

    clearInterval(this.rapidInterval);
    this.rapidInterval = setInterval(() => {
      this.rapidTimer--;
      const timerEl = document.getElementById("rapidTimerDisplay");
      const barEl = document.getElementById("rapidTimerBar");

      if (timerEl) timerEl.textContent = this.rapidTimer;
      if (barEl) barEl.style.width = `${(this.rapidTimer / 60) * 100}%`;

      if (this.rapidTimer <= 0) {
        this.endRapidGame();
      }
    }, 1000);
  }

  renderRapidQuestion() {
    const qData = this.rapidQuestions[this.currentRapidQIdx];
    if (!qData) {
      this.endRapidGame();
      return;
    }

    const qText = document.getElementById("rapidQuestionText");
    const optsRow = document.getElementById("rapidOptionsRow");
    const fbMsg = document.getElementById("rapidFeedbackMsg");

    if (fbMsg) fbMsg.textContent = "";
    if (qText) qText.textContent = qData.q;
    if (optsRow) {
      optsRow.innerHTML = qData.options.map(opt => `
        <button class="btn-pill-choice" style="font-size:1.05rem; padding:0.6rem 1.75rem;" onclick="app.answerRapidQuestion('${opt}', '${qData.correct}', '${qData.trapNote.replace(/'/g, "\\'")}')">
          ${opt}
        </button>
      `).join("");
    }
  }

  answerRapidQuestion(chosen, correct, note) {
    const isCorrect = chosen === correct;
    const fbMsg = document.getElementById("rapidFeedbackMsg");

    if (isCorrect) {
      this.rapidScore += 10;
      if (fbMsg) fbMsg.innerHTML = `<span style="color:var(--teal-700);">✓ DOĞRU! +10 Puan</span>`;
    } else {
      if (fbMsg) fbMsg.innerHTML = `<span style="color:var(--red-600);">✗ YANLIŞ! 💡 ${note}</span>`;
    }

    document.getElementById("rapidScoreDisplay").textContent = this.rapidScore;

    setTimeout(() => {
      this.currentRapidQIdx++;
      if (this.currentRapidQIdx < this.rapidQuestions.length && this.rapidTimer > 0) {
        this.renderRapidQuestion();
      } else {
        this.endRapidGame();
      }
    }, 900);
  }

  endRapidGame() {
    clearInterval(this.rapidInterval);
    const playScreen = document.getElementById("rapidPlayScreen");
    if (playScreen) {
      playScreen.innerHTML = `
        <h2 style="color:var(--teal-800); margin-bottom:0.5rem;">🏁 Süre Doldu!</h2>
        <div style="font-size:2.2rem; font-weight:900; color:var(--orange-600); margin:0.75rem 0;">
          Skorunuz: ${this.rapidScore} Puan
        </div>
        <p style="color:var(--text-secondary); margin-bottom:1.5rem;">
          ${this.rapidScore >= 60 ? "🌟 Mükemmel refleks! YDT tuzaklarını anında teşhis ediyorsunuz." : "⚡ Düzenli pratikle tuzakları kaçırmadan daha yüksek skora ulaşabilirsiniz."}
        </p>
        <button class="btn-pill-choice" style="background:var(--teal-600); color:white; border-color:var(--teal-600); padding:0.7rem 1.75rem;" onclick="location.reload()">
          🔄 Yeniden Oyna
        </button>
      `;
    }
  }
}

// Global App Instance
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new YDTAppController(YDT_DATA);
});
